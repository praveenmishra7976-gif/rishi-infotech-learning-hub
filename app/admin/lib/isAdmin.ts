import { supabase } from "@/app/lib/supabase";

export async function isAdmin(): Promise<boolean> {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return false;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      return false;
    }

    return profile.role === "admin";
  } catch (error) {
    console.error("Admin check failed:", error);
    return false;
  }
}