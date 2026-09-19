import { supabase } from "@/app/lib/supabase";

export async function markAsRead(id: string) {
  const { error } = await supabase
    .from("notifications")
    .update({
      is_read: true,
    })
    .eq("id", id);

  if (error) throw error;
}