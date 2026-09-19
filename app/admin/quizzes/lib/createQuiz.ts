import { supabase } from "@/app/lib/supabase";

export async function createQuiz(data: any) {
  const { error } = await supabase
    .from("quizzes")
    .insert(data);

  if (error) throw error;
}