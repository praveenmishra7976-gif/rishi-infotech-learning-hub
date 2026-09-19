import { createClient } from "@/lib/auth/server";

export async function exportQuestions() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("question_bank")
    .select("*")
    .order("created_at");

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}