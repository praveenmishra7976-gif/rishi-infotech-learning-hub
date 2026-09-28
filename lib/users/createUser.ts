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

interface CreateUserResult {
  success: boolean;
  userId?: string;
  email?: string;
  error?: string;
}

export async function createUser({
  full_name,
  email,
  role,
  password,
}: CreateUserProps): Promise<CreateUserResult> {
  try {
    const supabase = await createClient();

    const {
      data: { user: currentUser },
      error: currentUserError,
    } = await supabase.auth.getUser();

    if (currentUserError || !currentUser) {
      return {
        success: false,
        error: "You must be logged in as an administrator.",
      };
    }

    const { data: currentProfile, error: profileLookupError } =
      await adminSupabase
        .from("profiles")
        .select("role")
        .eq("id", currentUser.id)
        .maybeSingle();

    if (profileLookupError) {
      console.error(
        "Create user admin profile lookup failed:",
        profileLookupError
      );

      return {
        success: false,
        error: `Unable to verify administrator access: ${profileLookupError.message}`,
      };
    }

    const currentRole = String(
      currentProfile?.role || ""
    ).toLowerCase();

    if (
      currentRole !== "admin" &&
      currentRole !== "super_admin"
    ) {
      return {
        success: false,
        error: "Administrator permission is required.",
      };
    }

    const cleanName = full_name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanRole = role.trim().toLowerCase();

    if (!cleanName) {
      return {
        success: false,
        error: "Full name is required.",
      };
    }

    if (!cleanEmail) {
      return {
        success: false,
        error: "Email is required.",
      };
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        cleanEmail
      )
    ) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      };
    }

    if (
      !ALLOWED_ROLES.includes(
        cleanRole as (typeof ALLOWED_ROLES)[number]
      )
    ) {
      return {
        success: false,
        error: "Invalid user role.",
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        error: "Password must contain at least 6 characters.",
      };
    }

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
      console.error(
        "Create user Auth error:",
        authError
      );

      return {
        success: false,
        error: `Unable to create Auth account: ${authError.message}`,
      };
    }

    if (!authData.user) {
      return {
        success: false,
        error: "Supabase did not return the new Auth user.",
      };
    }

    const newUserId = authData.user.id;

    /*
     * profiles does NOT contain an email column in this project.
     */
    const { error: profileError } =
      await adminSupabase
        .from("profiles")
        .upsert(
          {
            id: newUserId,
            full_name: cleanName,
            role: cleanRole,
            status: "active",
          },
          {
            onConflict: "id",
          }
        );

    if (profileError) {
      console.error(
        "Create user profile error:",
        profileError
      );

      const { error: rollbackError } =
        await adminSupabase.auth.admin.deleteUser(
          newUserId
        );

      if (rollbackError) {
        console.error(
          "Auth rollback failed:",
          rollbackError
        );
      }

      return {
        success: false,
        error: `Auth account was created, but the profile could not be saved: ${profileError.message}`,
      };
    }

    revalidatePath("/admin/users");
    revalidatePath("/admin/dashboard");

    return {
      success: true,
      userId: newUserId,
      email: cleanEmail,
    };
  } catch (error) {
    console.error(
      "Unexpected create user error:",
      error
    );

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Unexpected error while creating the user.",
    };
  }
}
