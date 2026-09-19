import { createClient } from "@/lib/auth/server";

export interface QuizStats {
  month: string;
  attempts: number;
}

export async function getQuizStats(): Promise<QuizStats[]> {
  const supabase = await createClient();

  const { data } = await supabase
    .from("quiz_attempts")
    .select("created_at");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const stats = months.map((m) => ({
    month: m,
    attempts: 0,
  }));

  data?.forEach((quiz) => {
    const month = new Date(quiz.created_at).getMonth();
    stats[month].attempts++;
  });

  return stats;
}