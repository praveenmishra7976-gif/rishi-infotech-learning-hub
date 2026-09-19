import { supabase } from "@/app/lib/supabase";

export async function updateLessonProgress(
  lessonId: string,
  watchedSeconds: number,
  completed: boolean = false
) {
  // =========================================================
  // 1. GET CURRENT USER
  // =========================================================

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(userError.message);
  }

  if (!user) {
    throw new Error("User is not logged in.");
  }

  // =========================================================
  // 2. UPDATE LESSON PROGRESS
  // =========================================================

  const { error: lessonProgressError } = await supabase
    .from("lesson_progress")
    .upsert(
      {
        lesson_id: lessonId,
        student_id: user.id,
        watched_seconds: Math.max(
          0,
          Math.floor(watchedSeconds)
        ),
        completed,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "student_id,lesson_id",
      }
    );

  if (lessonProgressError) {
    console.error(
      "Update lesson progress error:",
      lessonProgressError
    );

    throw new Error(lessonProgressError.message);
  }

  // =========================================================
  // 3. FIND THE CHAPTER FOR THIS LESSON
  // =========================================================

  const { data: lesson, error: lessonError } =
    await supabase
      .from("lessons")
      .select("id, chapter_id")
      .eq("id", lessonId)
      .single();

  if (lessonError || !lesson) {
    console.error(
      "Find lesson for course progress error:",
      lessonError
    );

    throw new Error(
      lessonError?.message ||
        "Lesson could not be found."
    );
  }

  // =========================================================
  // 4. FIND THE COURSE FOR THIS CHAPTER
  // =========================================================

  const { data: chapter, error: chapterError } =
    await supabase
      .from("chapters")
      .select("id, course_id")
      .eq("id", lesson.chapter_id)
      .single();

  if (chapterError || !chapter) {
    console.error(
      "Find chapter for course progress error:",
      chapterError
    );

    throw new Error(
      chapterError?.message ||
        "Chapter could not be found."
    );
  }

  const courseId = chapter.course_id;

  // =========================================================
  // 5. GET ALL CHAPTERS FOR THIS COURSE
  // =========================================================

  const { data: chapters, error: chaptersError } =
    await supabase
      .from("chapters")
      .select("id")
      .eq("course_id", courseId);

  if (chaptersError) {
    console.error(
      "Get course chapters error:",
      chaptersError
    );

    throw new Error(chaptersError.message);
  }

  const chapterIds =
    chapters?.map((item) => item.id) || [];

  // No chapters means no lessons.
  if (chapterIds.length === 0) {
    return true;
  }

  // =========================================================
  // 6. GET ALL PUBLISHED LESSONS FOR THIS COURSE
  // =========================================================

  const { data: lessons, error: lessonsError } =
    await supabase
      .from("lessons")
      .select("id, chapter_id")
      .in("chapter_id", chapterIds)
      .eq("status", "published");

  if (lessonsError) {
    console.error(
      "Get course lessons error:",
      lessonsError
    );

    throw new Error(lessonsError.message);
  }

  const lessonIds =
    lessons?.map((item) => item.id) || [];

  const totalLessons = lessonIds.length;

  // =========================================================
  // 7. COUNT COMPLETED LESSONS FOR THIS STUDENT
  // =========================================================

  let completedLessons = 0;

  if (totalLessons > 0) {
    const {
      data: completedProgress,
      error: completedError,
    } = await supabase
      .from("lesson_progress")
      .select("lesson_id")
      .eq("student_id", user.id)
      .eq("completed", true)
      .in("lesson_id", lessonIds);

    if (completedError) {
      console.error(
        "Get completed lessons error:",
        completedError
      );

      throw new Error(completedError.message);
    }

    completedLessons =
      completedProgress?.length || 0;
  }

  // =========================================================
  // 8. CALCULATE COURSE PERCENTAGE
  // =========================================================

  const progress =
    totalLessons > 0
      ? Math.min(
          100,
          Math.round(
            (completedLessons / totalLessons) * 100
          )
        )
      : 0;

  const courseCompleted =
    totalLessons > 0 &&
    completedLessons >= totalLessons;

  // =========================================================
  // 9. SAVE COURSE PROGRESS
  // =========================================================

  const { error: courseProgressError } =
    await supabase
      .from("course_progress")
      .upsert(
        {
          user_id: user.id,
          course_id: courseId,
          progress,
          completed: courseCompleted,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,course_id",
        }
      );

  if (courseProgressError) {
    console.error(
      "Update course progress error:",
      courseProgressError
    );

    throw new Error(
      courseProgressError.message
    );
  }

  // =========================================================
  // 10. SUCCESS
  // =========================================================

  console.log("Course progress updated:", {
    courseId,
    completedLessons,
    totalLessons,
    progress,
    completed: courseCompleted,
  });

  return true;
}