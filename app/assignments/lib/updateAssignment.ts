import { supabase } from "@/app/lib/supabase";

export async function updateAssignment(
  id: string,
  data: any
) {
  const { error } = await supabase
    .from("assignments")
    .update(data)
    .eq("id", id);

  if (error) throw error;
}