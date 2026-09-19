import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Layers,
  Clock,
  CheckCircle,
  Circle,
  Trophy,
} from "lucide-react";

import { getCourse } from "../lib/getCourse";
import { getChapters, getLessons } from "../lib/getLessons";
import { supabase } from "@/app/lib/supabase";

export default async function StudentCoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let course;

  try {
    course = await getCourse(id);
  } catch (error) {
    console.error("Course loading error:", error);

    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
            <h1 className="text-3xl font-black text-red-600">
              Course Not Found
            </h1>

            <p className="mt-4 text-gray-600">
              This course could not be loaded.
            </p>

            <Link
              href="/courses"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // =========================================================
  // GET CHAPTERS
  // =========================================================

  const chapters = await getChapters(id);

  // =========================================================
  // GET LESSONS FOR EACH CHAPTER
  // =========================================================

  const chaptersWithLessons = await Promise.all(
    chapters.map(async (chapter) => {
      const lessons = await getLessons(chapter.id);

      return {
        ...chapter,
        lessons,
      };
    })
  );

  // =========================================================
  // GET ALL LESSON IDS
  // =========================================================

  const allLessons = chaptersWithLessons.flatMap(
    (chapter) => chapter.lessons
  );

  const lessonIds = allLessons.map((lesson) => lesson.id);

  // =========================================================
  // GET CURRENT USER
  // =========================================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // =========================================================
  // GET LESSON PROGRESS
  // =========================================================

  let completedLessonIds: string[] = [];

  if (user && lessonIds.length > 0) {
    const { data: progressData, error: progressError } =
      await supabase
        .from("lesson_progress")
        .select("lesson_id, completed")
        .eq("student_id", user.id)
        .eq("completed", true)
        .in("lesson_id", lessonIds);

    if (progressError) {
      console.error(
        "Lesson progress loading error:",
        progressError
      );
    } else {
      completedLessonIds =
        progressData?.map((item) => item.lesson_id) || [];
    }
  }

  // =========================================================
  // COURSE PROGRESS
  // =========================================================

  const totalLessons = allLessons.length;

  const completedLessons = completedLessonIds.length;

  const courseProgress =
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

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm font-semibold">
              <BookOpen className="w-5 h-5" />
              Learning Course
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              {course.title}
            </h1>

            <p className="mt-5 text-lg text-white/90 leading-8">
              {course.description ||
                "Start learning this course and improve your knowledge and skills."}
            </p>

            {/* COURSE STATS */}

            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-white/15 rounded-xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />

                  <span className="font-bold">
                    {chapters.length}{" "}
                    {chapters.length === 1
                      ? "Chapter"
                      : "Chapters"}
                  </span>
                </div>
              </div>

              <div className="bg-white/15 rounded-xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />

                  <span className="font-bold">
                    {totalLessons}{" "}
                    {totalLessons === 1
                      ? "Lesson"
                      : "Lessons"}
                  </span>
                </div>
              </div>

              <div className="bg-white/15 rounded-xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />

                  <span className="font-bold">
                    {completedLessons} Completed
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          COURSE PROGRESS
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <div className="flex items-center gap-3">

                {courseCompleted ? (
                  <Trophy className="w-8 h-8 text-yellow-500" />
                ) : (
                  <BookOpen className="w-8 h-8 text-blue-600" />
                )}

                <h2 className="text-2xl font-black text-gray-900">
                  {courseCompleted
                    ? "Course Completed!"
                    : "Your Course Progress"}
                </h2>

              </div>

              <p className="mt-2 text-gray-500">
                {completedLessons} of {totalLessons} lessons
                completed
              </p>

            </div>

            <div className="text-right">

              <p className="text-4xl font-black text-blue-600">
                {courseProgress}%
              </p>

              <p className="text-sm text-gray-500 font-semibold">
                Overall Progress
              </p>

            </div>

          </div>

          {/* PROGRESS BAR */}

          <div className="mt-6">

            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">

              <div
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
                style={{
                  width: `${courseProgress}%`,
                }}
              />

            </div>

          </div>

          <div className="flex justify-between mt-3 text-sm">

            <span className="text-gray-500">
              {completedLessons} completed
            </span>

            <span className="font-bold text-blue-600">
              {totalLessons - completedLessons} remaining
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          COURSE CONTENT
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Course Content
          </h2>

          <p className="mt-2 text-gray-600">
            Select a lesson below to continue learning.
          </p>

        </div>

        {chaptersWithLessons.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center">

            <Layers className="w-16 h-16 mx-auto text-blue-500" />

            <h3 className="mt-6 text-2xl font-black text-gray-900">
              No chapters available yet
            </h3>

            <p className="mt-3 text-gray-500">
              Chapters and lessons will appear here when they
              are added.
            </p>

          </div>

        ) : (

          <div className="space-y-8">

            {chaptersWithLessons.map(
              (chapter, chapterIndex) => {

                const chapterCompleted =
                  chapter.lessons.length > 0 &&
                  chapter.lessons.every((lesson) =>
                    completedLessonIds.includes(lesson.id)
                  );

                const chapterCompletedCount =
                  chapter.lessons.filter((lesson) =>
                    completedLessonIds.includes(lesson.id)
                  ).length;

                const chapterProgress =
                  chapter.lessons.length > 0
                    ? Math.round(
                        (chapterCompletedCount /
                          chapter.lessons.length) *
                          100
                      )
                    : 0;

                return (
                  <div
                    key={chapter.id}
                    className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden"
                  >

                    {/* CHAPTER HEADER */}

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 md:p-8">

                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                        <div>

                          <div className="text-sm font-bold text-blue-600 mb-2">
                            Chapter {chapterIndex + 1}
                          </div>

                          <div className="flex items-center gap-3">

                            <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                              {chapter.title}
                            </h3>

                            {chapterCompleted && (
                              <CheckCircle className="w-7 h-7 text-green-600 shrink-0" />
                            )}

                          </div>

                          {chapter.description && (
                            <p className="mt-3 text-gray-600 max-w-3xl">
                              {chapter.description}
                            </p>
                          )}

                        </div>

                        <div className="shrink-0 bg-white rounded-xl px-4 py-3 shadow-sm">

                          <div className="flex items-center gap-2 text-gray-700">

                            <BookOpen className="w-5 h-5 text-blue-600" />

                            <span className="font-bold">
                              {chapterCompletedCount}/
                              {chapter.lessons.length}{" "}
                              Completed
                            </span>

                          </div>

                        </div>

                      </div>

                      {/* CHAPTER PROGRESS */}

                      {chapter.lessons.length > 0 && (
                        <div className="mt-6">

                          <div className="flex justify-between text-sm mb-2">

                            <span className="font-semibold text-gray-600">
                              Chapter Progress
                            </span>

                            <span className="font-black text-blue-600">
                              {chapterProgress}%
                            </span>

                          </div>

                          <div className="h-2.5 bg-white rounded-full overflow-hidden">

                            <div
                              className="h-full bg-blue-600 rounded-full transition-all duration-500"
                              style={{
                                width: `${chapterProgress}%`,
                              }}
                            />

                          </div>

                        </div>
                      )}

                    </div>

                    {/* LESSONS */}

                    <div className="p-6 md:p-8">

                      {chapter.lessons.length === 0 ? (

                        <div className="rounded-2xl bg-gray-50 p-6 text-center text-gray-500">
                          No published lessons available in
                          this chapter yet.
                        </div>

                      ) : (

                        <div className="space-y-3">

                          {chapter.lessons.map(
                            (lesson, lessonIndex) => {

                              const completed =
                                completedLessonIds.includes(
                                  lesson.id
                                );

                              return (
                                <Link
                                  key={lesson.id}
                                  href={`/learn/${id}/lesson/${lesson.id}`}
                                  className={`group flex items-center gap-4 rounded-2xl border p-4 transition ${
                                    completed
                                      ? "border-green-200 bg-green-50/50 hover:border-green-400"
                                      : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                                  }`}
                                >

                                  {/* LESSON NUMBER / STATUS */}

                                  <div
                                    className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center font-black ${
                                      completed
                                        ? "bg-green-100 text-green-700"
                                        : "bg-blue-100 text-blue-700"
                                    }`}
                                  >
                                    {completed ? (
                                      <CheckCircle className="w-6 h-6" />
                                    ) : (
                                      lessonIndex + 1
                                    )}
                                  </div>

                                  {/* LESSON INFO */}

                                  <div className="flex-1 min-w-0">

                                    <h4
                                      className={`font-bold ${
                                        completed
                                          ? "text-green-800"
                                          : "text-gray-900 group-hover:text-blue-700"
                                      }`}
                                    >
                                      {lesson.title}
                                    </h4>

                                    <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-gray-500">

                                      {lesson.duration && (
                                        <span className="inline-flex items-center gap-1">
                                          <Clock className="w-4 h-4" />
                                          {lesson.duration} min
                                        </span>
                                      )}

                                      {lesson.video_url && (
                                        <span>
                                          Video
                                        </span>
                                      )}

                                      {lesson.pdf_url && (
                                        <span>
                                          PDF
                                        </span>
                                      )}

                                    </div>

                                  </div>

                                  {/* COMPLETION STATUS */}

                                  <div className="hidden sm:flex items-center gap-2 shrink-0">

                                    {completed ? (
                                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-green-600">
                                        <CheckCircle className="w-5 h-5" />
                                        Completed
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400">
                                        <Circle className="w-5 h-5" />
                                        Not Completed
                                      </span>
                                    )}

                                  </div>

                                  <ArrowRight
                                    className={`w-5 h-5 transition ${
                                      completed
                                        ? "text-green-400 group-hover:text-green-600 group-hover:translate-x-1"
                                        : "text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1"
                                    }`}
                                  />

                                </Link>
                              );
                            }
                          )}

                        </div>

                      )}

                    </div>

                  </div>
                );
              }
            )}

          </div>
        )}

        {/* BACK */}

        <div className="mt-10">

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            ← Back to Courses
          </Link>

        </div>

      </section>

    </main>
  );
}