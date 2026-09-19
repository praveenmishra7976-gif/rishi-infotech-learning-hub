import { supabase } from "@/app/lib/supabase";

export async function getCategories() {
  const { data, error } = await supabase
    .from("course_categories")
    .select("*")
    .order("name");

  if (error) throw error;

  return data || [];
}