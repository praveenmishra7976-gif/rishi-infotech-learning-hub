import { supabase } from "@/app/lib/supabase";

export async function getLessons() {
  const { data, error } = await supabase
    .from("lessons")
    .select(`
      id,
      chapter_id,
      title,
      content,
      video_url,
      pdf_url,
      lesson_order,
      status,
      created_at,
      duration,
      chapters (
        title,
        course_id
      )
    `)
    .order("lesson_order", {
      ascending: true,
      nullsFirst: false,
    });

  if (error) {
    console.error("Get lessons error:", error);
    throw new Error(error.message);
  }

  return data || [];
}