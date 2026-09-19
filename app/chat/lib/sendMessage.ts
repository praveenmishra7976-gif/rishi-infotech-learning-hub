import { supabase } from "@/app/lib/supabase";

export async function sendMessage(
  conversationId: string,
  senderId: string,
  message: string
) {
  const { error } = await supabase
    .from("messages")
    .insert({
      conversation_id: conversationId,
      sender_id: senderId,
      message,
    });

  if (error) throw error;
}