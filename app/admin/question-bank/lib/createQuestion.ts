"use server";

import { createClient } from "@/lib/auth/server";

export interface QuestionFormData {
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

export async function createQuestion(
  values: QuestionFormData
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("question_bank")
    .insert(values);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}