import { supabase } from "@/app/lib/supabase";

export async function getCourses() {
  const {
    data,
    error,
  } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data || [];
}

export async function getCourse(id: string) {
  const {
    data,
    error,
  } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
