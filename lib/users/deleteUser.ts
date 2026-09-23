"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/auth/server";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

export async function deleteUser(id: string) {
  const supabase = await createClient();

  if (!id || !id.trim()) {
    throw new Error("User ID is required.");
  }

  // Verify the currently logged-in user.
  const {
    data: { user: currentUser },
    error: currentUserError,
  } = await supabase.auth.getUser();

  if (currentUserError || !currentUser) {
    throw new Error("You must be logged in as an administrator.");
  }

  // Verify administrator permissions.
  const { data: currentProfile, error: profileLookupError } =
    await adminSupabase
      .from("profiles")
      .select("role")
      .eq("id", currentUser.id)
      .maybeSingle();

  if (profileLookupError) {
    throw new Error(
      `Unable to verify administrator access: ${profileLookupError.message}`
    );
  }

  const currentRole = String(currentProfile?.role || "").toLowerCase();

  if (currentRole !== "admin" && currentRole !== "super_admin") {
    throw new Error("Administrator permission is required.");
  }

  // Prevent an administrator from accidentally deleting their own account.
  if (id === currentUser.id) {
    throw new Error("You cannot delete your own administrator account.");
  }

  /*
   * Delete the Supabase Auth account first.
   *
   * When the profiles.id foreign key is configured with ON DELETE CASCADE,
   * the corresponding profile is removed automatically.
   */
  const { error: authDeleteError } =
    await adminSupabase.auth.admin.deleteUser(id);

  if (authDeleteError) {
    throw new Error(
      `Unable to delete the Auth account: ${authDeleteError.message}`
    );
  }

  /*
   * Remove any remaining profile row in case the database does not
   * automatically cascade the Auth deletion.
   */
  const { error: profileDeleteError } = await adminSupabase
    .from("profiles")
    .delete()
    .eq("id", id);

  if (profileDeleteError) {
    throw new Error(
      `Auth account was deleted, but the profile could not be removed: ${profileDeleteError.message}`
    );
  }

  revalidatePath("/admin/users");
  revalidatePath(`/admin/users/${id}`);

  return {
    success: true,
  };
}
