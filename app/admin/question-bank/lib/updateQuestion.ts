"use server";

import { createClient } from "@/lib/auth/server";

export async function updateQuestion(
  id: string,
  values: any
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("question_bank")
    .update(values)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}