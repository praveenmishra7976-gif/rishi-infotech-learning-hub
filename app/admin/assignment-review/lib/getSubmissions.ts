import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

export async function getSubmissions() {
  const { data, error } = await adminSupabase
    .from("assignment_submissions")
    .select(`
      *,
      assignments(title)
    `)
    .order("submitted_at", { ascending: false });

  if (error) {
    console.error("Get submissions error:", error);
    throw new Error(error.message);
  }

  return data || [];
}