import { createClient } from "@/lib/auth/server";

export async function getStudentDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      user: null,
      coursesStarted: 0,
      coursesCompleted: 0,
      coursesInProgress: 0,
      overallProgress: 0,
      completedLessons: 0,
      totalLessons: 0,
    };
  }

  const { data: courseProgress, error } = await supabase
    .from("course_progress")
    .select("course_id, progress, completed")
    .eq("user_id", user.id);

  if (error) {
    console.error(
      "Student dashboard course progress error:",
      error
    );

    return {
      user,
      coursesStarted: 0,
      coursesCompleted: 0,
      coursesInProgress: 0,
      overallProgress: 0,
      completedLessons: 0,
      totalLessons: 0,
    };
  }

  const progress = courseProgress ?? [];

  const coursesStarted = progress.length;

  const coursesCompleted = progress.filter(
    (course) => course.completed
  ).length;

  const coursesInProgress = progress.filter(
    (course) =>
      Number(course.progress || 0) > 0 &&
      !course.completed
  ).length;

  const overallProgress =
    coursesStarted > 0
      ? Math.round(
          progress.reduce(
            (sum, course) =>
              sum + Number(course.progress || 0),
            0
          ) / coursesStarted
        )
      : 0;

  const { data: lessonProgress, error: lessonError } =
    await supabase
      .from("lesson_progress")
      .select("lesson_id, completed")
      .eq("student_id", user.id);

  if (lessonError) {
    console.error(
      "Student dashboard lesson progress error:",
      lessonError
    );
  }

  const completedLessons =
    lessonProgress?.filter(
      (lesson) => lesson.completed
    ).length || 0;

  let totalLessons = 0;

  if (progress.length > 0) {
    const courseIds = progress.map(
      (course) => course.course_id
    );

    const { data: chapters, error: chaptersError } =
      await supabase
        .from("chapters")
        .select("id, course_id")
        .in("course_id", courseIds);

    if (!chaptersError && chapters?.length) {
      const chapterIds = chapters.map(
        (chapter) => chapter.id
      );

      const { count, error: lessonsError } =
        await supabase
          .from("lessons")
          .select("id", {
            count: "exact",
            head: true,
          })
          .in("chapter_id", chapterIds)
          .eq("status", "published");

      if (!lessonsError) {
        totalLessons = count || 0;
      }
    }
  }

  return {
    user,
    coursesStarted,
    coursesCompleted,
    coursesInProgress,
    overallProgress,
    completedLessons,
    totalLessons,
  };
}
