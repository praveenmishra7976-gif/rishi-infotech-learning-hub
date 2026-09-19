import { createClient } from "@/lib/auth/server";

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

export async function getUserById(
  id: string
): Promise<UserProfile | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data as UserProfile;
}