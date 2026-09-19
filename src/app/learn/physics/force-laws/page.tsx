import { supabase } from "@/app/lib/supabase";

export async function createChapter(chapter: {
  course_id: string;
  title: string;
  description: string;
  position: number;
}) {
  const { error } = await supabase
    .from("chapters")
    .insert({
      course_id: chapter.course_id,
      title: chapter.title,
      description: chapter.description,
      position: chapter.position,
    });

  if (error) {
    console.error("Create chapter error:", error);
    throw new Error(error.message);
  }

  return true;
}