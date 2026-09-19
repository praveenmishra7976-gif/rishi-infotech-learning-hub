import { createClient } from "@/lib/auth/server";

export async function getResults() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("quiz_results")
    .select(`
      *,
      quizzes(title),
      profiles(full_name,email)
    `)
    .order("submitted_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}