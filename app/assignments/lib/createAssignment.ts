import { supabase } from "@/app/lib/supabase";

export async function createAssignment(data: {
  course_id: string;
  lesson_id: string;
  title: string;
  description: string;
  file_url: string;
  due_date: string;
}) {
  const { error } = await supabase
    .from("assignments")
    .insert(data);

  if (error) throw error;
}