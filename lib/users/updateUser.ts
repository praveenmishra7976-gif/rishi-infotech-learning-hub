"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/auth/server";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

interface UpdateProps {
  id: string;
  full_name: string;
  role: string;
}

const ALLOWED_ROLES = [
  "student",
  "teacher",
  "admin",
  "super_admin",
] as const;

export async function updateUser({
  id,
  full_name,
  role,
}: UpdateProps) {
  const supabase = await createClient();

  const {
    data: { user: currentUser },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !currentUser) {
    throw new Error("You must be logged in as an administrator.");
  }

  const { data: currentProfile, error: currentProfileError } =
    await adminSupabase
      .from("profiles")
      .select("role,status")
      .eq("id", currentUser.id)
      .maybeSingle();

  if (currentProfileError || !currentProfile) {
    throw new Error("Unable to verify administrator access.");
  }

  const currentRole = String(
    currentProfile.role || ""
  ).toLowerCase();

  const currentStatus = String(
    currentProfile.status || "active"
  ).toLowerCase();

  if (
    currentStatus !== "active" ||
    (currentRole !== "admin" &&
      currentRole !== "super_admin")
  ) {
    throw new Error("Administrator permission is required.");
  }

  const cleanName = full_name.trim();
  const cleanRole = role.trim().toLowerCase();

  if (!cleanName) {
    throw new Error("Full name is required.");
  }

  if (
    !ALLOWED_ROLES.includes(
      cleanRole as (typeof ALLOWED_ROLES)[number]
    )
  ) {
    throw new Error("Invalid user role.");
  }

  /*
   * Prevent an administrator from changing their own role.
   * They may still edit their own name.
   */
  if (id === currentUser.id) {
    if (cleanRole !== currentRole) {
      throw new Error(
        "You cannot change your own administrator role."
      );
    }
  }

  /*
   * Only a super admin may create/change a user into
   * the super_admin role.
   */
  if (
    cleanRole === "super_admin" &&
    currentRole !== "super_admin"
  ) {
    throw new Error(
      "Only a Super Admin can assign the Super Admin role."
    );
  }

  /*
   * A normal admin cannot modify an existing Super Admin's role.
   */
  const { data: targetProfile, error: targetProfileError } =
    await adminSupabase
      .from("profiles")
      .select("id,role")
      .eq("id", id)
      .maybeSingle();

  if (targetProfileError || !targetProfile) {
    throw new Error("User not found.");
  }

  const targetRole = String(
    targetProfile.role || ""
  ).toLowerCase();

  if (
    targetRole === "super_admin" &&
    currentRole !== "super_admin"
  ) {
    throw new Error(
      "Only a Super Admin can modify a Super Admin account."
    );
  }

  const { error: updateError } =
    await adminSupabase
      .from("profiles")
      .update({
        full_name: cleanName,
        role: cleanRole,
      })
      .eq("id", id);

  if (updateError) {
    throw new Error(
      `Unable to update user: ${updateError.message}`
    );
  }

  revalidatePath("/admin/users");
  revalidatePath(`/admin/users/${id}`);
  revalidatePath("/admin/dashboard");

  return {
    success: true,
  };
}
