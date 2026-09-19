import { createClient } from "@/lib/auth/server";

export async function getQuestions(
  quizId: string
) {

  const supabase = await createClient();

  const { data } = await supabase
    .from("quiz_questions")
    .select("*")
    .eq("quiz_id", quizId)
    .order("created_at");

  return data ?? [];

}