import { supabase } from "@/app/lib/supabase";

export async function deleteAssignment(id: string) {
  const { error } = await supabase
    .from("assignments")
    .delete()
    .eq("id", id);

  if (error) throw error;
}