"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/auth/server";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

type AccountStatus = "active" | "suspended" | "blocked";

export async function updateAccountStatus(
  userId: string,
  status: AccountStatus
) {
  const supabase = await createClient();

  if (!userId || !userId.trim()) {
    throw new Error("User ID is required.");
  }

  if (!["active", "suspended", "blocked"].includes(status)) {
    throw new Error("Invalid account status.");
  }

  // Verify the currently logged-in user.
  const {
    data: { user: currentUser },
    error: currentUserError,
  } = await supabase.auth.getUser();

  if (currentUserError || !currentUser) {
    throw new Error("You must be logged in as an administrator.");
  }

  // Verify administrator permissions using the protected server client.
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

  // Prevent an administrator from disabling their own account.
  if (userId === currentUser.id) {
    throw new Error("You cannot change the status of your own account.");
  }

  // Make sure the target profile exists.
  const { data: targetUser, error: targetLookupError } =
    await adminSupabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .maybeSingle();

  if (targetLookupError) {
    throw new Error(
      `Unable to find the target user: ${targetLookupError.message}`
    );
  }

  if (!targetUser) {
    throw new Error("User not found.");
  }

  const { error } = await adminSupabase
    .from("profiles")
    .update({
      status,
    })
    .eq("id", userId);

  if (error) {
    throw new Error(`Unable to update account status: ${error.message}`);
  }

  revalidatePath(`/admin/users/${userId}`);
  revalidatePath("/admin/users");

  return {
    success: true,
    status,
  };
}
