import { supabase } from "@/app/lib/supabase";

export async function deleteQuiz(id: string) {
  const { error } = await supabase
    .from("quizzes")
    .delete()
    .eq("id", id);

  if (error) throw error;
}