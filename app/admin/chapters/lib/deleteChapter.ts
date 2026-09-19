import { supabase } from "@/app/lib/supabase";

export async function deleteChapter(id: string) {
  const { error } = await supabase
    .from("chapters")
    .delete()
    .eq("id", id);

  if (error) throw error;
}