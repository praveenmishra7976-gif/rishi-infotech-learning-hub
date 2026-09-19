import { supabase } from "@/app/lib/supabase";

export async function getAdminStats() {
  const [
    { count: students },
    { count: courses },
    { count: quizzes },
    { count: payments },
  ] = await Promise.all([
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("courses")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("quizzes")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("payments")
      .select("*", { count: "exact", head: true }),
  ]);

  return {
    students: students ?? 0,
    courses: courses ?? 0,
    quizzes: quizzes ?? 0,
    payments: payments ?? 0,
  };
}