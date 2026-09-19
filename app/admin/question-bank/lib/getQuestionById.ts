import { createClient } from "@/lib/auth/server";

export interface Question {
  id: string;
  subject: string;
  chapter: string;
  difficulty: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  explanation: string;
  marks: number;
}

export async function getQuestionById(
  id: string
): Promise<Question | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("question_bank")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}