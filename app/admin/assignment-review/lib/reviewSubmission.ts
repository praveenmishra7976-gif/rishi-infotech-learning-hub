import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

export async function reviewSubmission(
  id: string,
  marks: number,
  feedback: string
) {
  const { error } = await adminSupabase
    .from("assignment_submissions")
    .update({
      marks,
      feedback,
      reviewed: true,
      status: "reviewed",
    })
    .eq("id", id);

  if (error) {
    console.error("Review submission error:", error);
    throw new Error(error.message);
  }

  return true;
}
