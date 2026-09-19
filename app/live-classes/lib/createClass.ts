import { supabase } from "@/app/lib/supabase";

export async function createClass(data: any) {
  const { error } = await supabase
    .from("live_classes")
    .insert(data);

  if (error) throw error;
}