import { createClient } from "@/lib/auth/server";

export async function getStudentStats() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      quizzes: 0,
      certificates: 0,
      average: 0,
    };
  }

  const [{ data: quizResults }, { count: certificateCount }] =
    await Promise.all([
      supabase
        .from("quiz_results")
        .select("percentage")
        .eq("student_id", user.id),

      supabase
        .from("certificates")
        .select("id", {
          count: "exact",
          head: true,
        })
        .eq("user_id", user.id),
    ]);

  const results = quizResults ?? [];

  const quizzes = results.length;

  const average =
    quizzes === 0
      ? 0
      : Math.round(
          results.reduce(
            (sum, item) =>
              sum + Number(item.percentage || 0),
            0
          ) / quizzes
        );

  return {
    quizzes,
    certificates: certificateCount || 0,
    average,
  };
}
