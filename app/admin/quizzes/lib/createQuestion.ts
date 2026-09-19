import { supabase } from "@/app/lib/supabase";

export async function createQuestion(data: any) {
  const { error } = await supabase
    .from("quiz_questions")
    .insert(data);

  if (error) throw error;
}