"use server";

import { createClient } from "@/lib/auth/server";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  role: string;
  avatar_url: string | null;
  status: string;
  email_verified: boolean;
  created_at: string;
}

async function verifyAdmin() {
  const supabase = await createClient();

  const {
    data: { user: currentUser },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !currentUser) {
    throw new Error("You must be logged in as an administrator.");
  }

  const { data: profile, error: profileError } =
    await adminSupabase
      .from("profiles")
      .select("role,status")
      .eq("id", currentUser.id)
      .maybeSingle();

  if (profileError) {
    throw new Error(
      `Unable to verify administrator access: ${profileError.message}`
    );
  }

  const role = String(profile?.role || "").toLowerCase();
  const status = String(profile?.status || "active").toLowerCase();

  if (status !== "active") {
    throw new Error("Your administrator account is not active.");
  }

  if (role !== "admin" && role !== "super_admin") {
    throw new Error("Administrator permission is required.");
  }

  return currentUser;
}

export async function getUsers(): Promise<UserProfile[]> {
  try {
    await verifyAdmin();

    const [{ data: profiles, error: profilesError }, { data: authData, error: authError }] =
      await Promise.all([
        adminSupabase
          .from("profiles")
          .select(
            "id,full_name,avatar_url,phone,bio,role,status,created_at"
          )
          .order("created_at", {
            ascending: false,
          }),

        adminSupabase.auth.admin.listUsers({
          page: 1,
          perPage: 100,
        }),
      ]);

    if (profilesError) {
      console.error(
        "Get users profiles error:",
        profilesError
      );

      return [];
    }

    if (authError) {
      console.error(
        "Get users Auth error:",
        authError
      );

      return (profiles || []).map((profile) => ({
        id: profile.id,
        full_name: profile.full_name || "",
        email: "",
        role: profile.role || "",
        avatar_url: profile.avatar_url || null,
        status: profile.status || "active",
        email_verified: false,
        created_at: profile.created_at,
      }));
    }

    const authUsersById = new Map(
      authData.users.map((user) => [
        user.id,
        {
          email: user.email || "",
          email_verified: Boolean(
            user.email_confirmed_at
          ),
        },
      ])
    );

    return (profiles || []).map((profile) => {
      const authUser = authUsersById.get(profile.id);

      return {
        id: profile.id,
        full_name: profile.full_name || "",
        email: authUser?.email || "",
        role: profile.role || "",
        avatar_url: profile.avatar_url || null,
        status: profile.status || "active",
        email_verified: authUser?.email_verified || false,
        created_at: profile.created_at,
      };
    });
  } catch (error) {
    console.error("Get users failed:", error);
    return [];
  }
}

export async function getUserById(
  id: string
): Promise<UserProfile | null> {
  try {
    await verifyAdmin();

    const [{ data: profile, error: profileError }, { data: authData, error: authError }] =
      await Promise.all([
        adminSupabase
          .from("profiles")
          .select(
            "id,full_name,avatar_url,phone,bio,role,status,created_at"
          )
          .eq("id", id)
          .maybeSingle(),

        adminSupabase.auth.admin.listUsers({
          page: 1,
          perPage: 100,
        }),
      ]);

    if (profileError) {
      console.error(
        "Get user profile error:",
        profileError
      );

      return null;
    }

    if (!profile) {
      return null;
    }

    const authUser = authError
      ? undefined
      : authData.users.find(
          (user) => user.id === profile.id
        );

    return {
      id: profile.id,
      full_name: profile.full_name || "",
      email: authUser?.email || "",
      role: profile.role || "",
      avatar_url: profile.avatar_url || null,
      status: profile.status || "active",
      email_verified: Boolean(
        authUser?.email_confirmed_at
      ),
      created_at: profile.created_at,
    };
  } catch (error) {
    console.error("Get user by ID failed:", error);
    return null;
  }
}
