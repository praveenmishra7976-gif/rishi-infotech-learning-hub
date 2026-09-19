import { createClient } from "@/lib/auth/server";

export async function getRecentUsers() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("profiles")
    .select("id, full_name, email, role, avatar_url, created_at")
    .order("created_at", { ascending: false })
    .limit(10);

  return data ?? [];
}