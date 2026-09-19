"use server";

import { createClient } from "@/lib/auth/server";

export async function importQuestions(
  questions: any[]
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("question_bank")
    .insert(questions);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}