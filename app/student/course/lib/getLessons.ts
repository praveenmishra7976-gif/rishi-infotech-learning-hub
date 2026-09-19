import { supabase } from "@/app/lib/supabase";

export async function getChapters(courseId: string) {
  const { data, error } = await supabase
    .from("chapters")
    .select("id, title, description, course_id, created_at")
    .eq("course_id", courseId)
    .order("created_at", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return data || [];
}

export async function getLessons(chapterId: string) {
  const { data, error } = await supabase
    .from("lessons")
    .select(
      "id, chapter_id, title, content, video_url, pdf_url, lesson_order, status, duration, created_at"
    )
    .eq("chapter_id", chapterId)
    .eq("status", "published")
    .order("lesson_order", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return data || [];
}
