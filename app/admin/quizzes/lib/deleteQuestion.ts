"use server";

import { createClient } from "@/lib/auth/server";

export async function deleteQuestion(
  id: string
) {

  const supabase = await createClient();

  await supabase
    .from("quiz_questions")
    .delete()
    .eq("id", id);

}