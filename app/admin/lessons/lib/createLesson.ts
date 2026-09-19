import { supabase } from "@/app/lib/supabase";

export type CreateLessonInput = {
  chapter_id: string;
  title: string;
  content: string | null;
  video_url: string | null;
  pdf_url: string | null;
  lesson_order: number;
  status: string;
  premium: boolean;
};

export async function createLesson(
  lesson: CreateLessonInput
) {
  const { error } = await supabase
    .from("lessons")
    .insert({
      chapter_id: lesson.chapter_id,
      title: lesson.title,
      content: lesson.content,
      video_url: lesson.video_url,
      pdf_url: lesson.pdf_url,
      lesson_order: lesson.lesson_order,
      status: lesson.status,
      premium: lesson.premium,
    });

  if (error) {
    console.error("Create lesson error:", error);
    throw new Error(error.message);
  }

  return true;
}