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

  marks: number;

  created_at: string;

}

export async function getQuestions(): Promise<Question[]> {

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("question_bank")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data as Question[];

}