import { supabase } from "@/app/lib/supabase";

export async function updateCourse(
  id: string,
  course: {
    title: string;
    description: string;
    thumbnail: string;
    subject: string;
  }
) {
  const { error } = await supabase
    .from("courses")
    .update({
      title: course.title,
      description: course.description,
      thumbnail: course.thumbnail || null,
      subject: course.subject,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}
