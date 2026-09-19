import { supabase } from "@/app/lib/supabase";

export async function deleteLesson(id: string) {
  const { error } = await supabase
    .from("lessons")
    .delete()
    .eq("id", id);

  if (error) throw error;
}