"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/auth/server";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

interface CreateUserProps {
  full_name: string;
  email: string;
  role: string;
  password: string;
}

const ALLOWED_ROLES = [
  "student",
  "teacher",
  "admin",
  "super_admin",
] as const;

export async function createUser({
  full_name,
  email,
  role,
  password,
}: CreateUserProps) {
  const supabase = await createClient();

  const {
    data: { user: currentUser },
    error: currentUserError,
  } = await supabase.auth.getUser();

  if (currentUserError || !currentUser) {
    throw new Error("You must be logged in as an administrator.");
  }

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

  const cleanName = full_name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanRole = role.trim().toLowerCase();

  if (!cleanName) {
    throw new Error("Full name is required.");
  }

  if (!cleanEmail) {
    throw new Error("Email is required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    throw new Error("Please enter a valid email address.");
  }

  if (!ALLOWED_ROLES.includes(cleanRole as (typeof ALLOWED_ROLES)[number])) {
    throw new Error("Invalid user role.");
  }

  if (password.length < 6) {
    throw new Error("Password must contain at least 6 characters.");
  }

  /*
   * Create the real Supabase Auth account.
   * The email belongs to auth.users, not profiles.
   */
  const { data: authData, error: authError } =
    await adminSupabase.auth.admin.createUser({
      email: cleanEmail,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: cleanName,
        role: cleanRole,
      },
    });

  if (authError) {
    throw new Error(`Unable to create Auth account: ${authError.message}`);
  }

  if (!authData.user) {
    throw new Error("Supabase did not return the new Auth user.");
  }

  /*
   * profiles contains the user's application information.
   * IMPORTANT: profiles.email does not exist in this project.
   */
  const { error: profileError } = await adminSupabase
    .from("profiles")
    .upsert(
      {
        id: authData.user.id,
        full_name: cleanName,
        role: cleanRole,
        status: "active",
      },
      {
        onConflict: "id",
      }
    );

  if (profileError) {
    const { error: rollbackError } =
      await adminSupabase.auth.admin.deleteUser(authData.user.id);

    if (rollbackError) {
      console.error(
        "Failed to roll back Auth user after profile error:",
        rollbackError
      );
    }

    throw new Error(
      `Auth account was created, but the profile could not be saved: ${profileError.message}`
    );
  }

  revalidatePath("/admin/users");

  return {
    success: true,
    userId: authData.user.id,
    email: cleanEmail,
  };
}
