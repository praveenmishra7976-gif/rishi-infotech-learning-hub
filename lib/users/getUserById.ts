import { createClient } from "@/lib/auth/server";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  role: string;
  avatar_url: string | null;
  status: "active" | "suspended" | "blocked";
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
    return null;
  }

  const { data: profile, error: profileError } =
    await adminSupabase
      .from("profiles")
      .select("role,status")
      .eq("id", currentUser.id)
      .maybeSingle();

  if (profileError || !profile) {
    return null;
  }

  const role = String(profile.role || "").toLowerCase();
  const status = String(profile.status || "active").toLowerCase();

  if (
    (role !== "admin" && role !== "super_admin") ||
    status !== "active"
  ) {
    return null;
  }

  return currentUser;
}

export async function getUserById(
  id: string
): Promise<UserProfile | null> {
  try {
    const currentAdmin = await verifyAdmin();

    if (!currentAdmin) {
      return null;
    }

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
      status:
        profile.status === "suspended"
          ? "suspended"
          : profile.status === "blocked"
            ? "blocked"
            : "active",
      email_verified: Boolean(
        authUser?.email_confirmed_at
      ),
      created_at: profile.created_at,
    };
  } catch (error) {
    console.error(
      "Get user by ID failed:",
      error
    );

    return null;
  }
}
