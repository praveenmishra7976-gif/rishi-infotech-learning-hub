import { supabase } from "@/app/lib/supabase";

export async function getCertificate(id: string) {
  const { data, error } = await supabase
    .from("certificates")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}