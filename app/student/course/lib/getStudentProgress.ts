import { supabase } from "@/app/lib/supabase";

export async function getStudentProgress(lessonId: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("lesson_progress")
    .select("id, lesson_id, student_id, completed, watched_seconds, updated_at")
    .eq("lesson_id", lessonId)
    .eq("student_id", user.id)
    .maybeSingle();

  if (error) {
    console.error("Get student progress error:", error);
    throw new Error(error.message);
  }

  return data;
}
