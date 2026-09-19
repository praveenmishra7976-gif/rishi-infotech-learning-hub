import { supabase } from "./supabase";

export async function saveProgress(
  subject: string,
  chapter: string,
  score: number = 0
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase.from("progress").upsert(
    {
      user_id: user.id,
      subject,
      chapter,
      completed: true,
      score,
      updated_at: new Date(),
    },
    {
      onConflict: "user_id,chapter",
    }
  );

  if (error) console.log(error.message);
}