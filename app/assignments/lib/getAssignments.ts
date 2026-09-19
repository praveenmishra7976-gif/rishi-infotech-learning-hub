import { supabase } from "@/app/lib/supabase";

export async function getAssignments() {
  const { data, error } = await supabase
    .from("assignments")
    .select("*")
    .order("due_date");

  if (error) throw error;

  return data || [];
}