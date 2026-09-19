import { supabase } from "@/app/lib/supabase";

export async function getMessages(
  conversationId: string
) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at");

  if (error) throw error;

  return data || [];
}