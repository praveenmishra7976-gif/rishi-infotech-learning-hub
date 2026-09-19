import { supabase } from "@/app/lib/supabase";

export async function createCourse(course: {
  title: string;
  description: string;
  thumbnail: string;
  subject: string;
}) {
  const { error } = await supabase
    .from("courses")
    .insert({
      title: course.title,
      description: course.description,
      thumbnail: course.thumbnail || null,
      subject: course.subject,
      published: true,
      status: "published",
      featured: false,
      premium: false,
    });

  if (error) {
    console.error("Create course error:", error);
    throw new Error(error.message);
  }

  return true;
}
