import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

export async function getStudents() {
  const { data, error } = await adminSupabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Get students error:", error);
    return [];
  }

  return data || [];
}