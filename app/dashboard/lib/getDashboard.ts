import { supabase } from "@/app/lib/supabase";

export async function getDashboard(userId: string) {
  const [
    enrollments,
    progress,
    certificates,
    quizzes,
  ] = await Promise.all([
    supabase
      .from("enrollments")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId),

    supabase
      .from("course_progress")
      .select("*")
      .eq("user_id", userId),

    supabase
      .from("certificates")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId),

    supabase
      .from("quiz_results")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId),
  ]);

  const averageProgress =
    progress.data && progress.data.length > 0
      ? Math.round(
          progress.data.reduce(
            (sum: number, p: any) => sum + (p.progress || 0),
            0
          ) / progress.data.length
        )
      : 0;

  return {
    enrolledCourses: enrollments.count || 0,
    completedCertificates: certificates.count || 0,
    quizzesTaken: quizzes.count || 0,
    averageProgress,
  };
}