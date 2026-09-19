import { supabase } from "@/lib/supabase";

export async function getFeaturedCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
