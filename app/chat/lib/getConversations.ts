import { supabase } from "@/app/lib/supabase";

export async function getConversations(userId: string) {
  const { data, error } = await supabase
    .from("conversations")
    .select("*")
    .or(`student_id.eq.${userId},teacher_id.eq.${userId}`);

  if (error) throw error;

  return data || [];
}