import { supabase } from "@/app/lib/supabase";

export async function getChapters() {
  const { data, error } = await supabase
    .from("chapters")
    .select(`
      id,
      course_id,
      title,
      description,
      position,
      created_at,
      courses (
        title
      )
    `)
    .order("position", {
      ascending: true,
      nullsFirst: false,
    });

  if (error) {
    console.error("Get chapters error:", error);
    throw new Error(error.message);
  }

  return data || [];
}