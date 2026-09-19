import { supabase } from "@/app/lib/supabase";

export async function getQuiz(id: string) {
  const { data: quiz, error: quizError } = await supabase
    .from("quizzes")
    .select("*")
    .eq("id", id)
    .single();

  if (quizError) {
    throw quizError;
  }

  const { data: questions, error: questionError } = await supabase
    .from("quiz_questions")
    .select("*")
    .eq("quiz_id", id)
    .order("created_at", {
      ascending: true,
    });

  if (questionError) {
    throw questionError;
  }

  return {
    quiz,
    questions: questions || [],
  };
}
