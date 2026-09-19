import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

export async function getClasses() {
  const { data, error } = await adminSupabase
    .from("live_classes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Get live classes error:", error);
    return [];
  }

  return data || [];
}
