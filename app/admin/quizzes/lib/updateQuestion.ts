"use server";

import { createClient } from "@/lib/auth/server";

export async function updateQuestion(
  id: string,
  values: any
) {

  const supabase = await createClient();

  await supabase
    .from("quiz_questions")
    .update(values)
    .eq("id", id);

}