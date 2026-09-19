import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  FileText,
  Video,
} from "lucide-react";

import { supabase } from "@/app/lib/supabase";
import LessonProgressTracker from "@/app/student/course/components/LessonProgressTracker";
import CompleteLessonButton from "@/app/student/course/components/CompleteLessonButton";

export default async function LessonPage({
  params,
}: {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}) {
  const { courseId, lessonId } = await params;

  const { data: lesson, error } = await supabase
    .from("lessons")
    .select(`
      id,
      chapter_id,
      title,
      content,
      video_url,
      pdf_url,
      duration,
      lesson_order,
      status,
      chapters (
        id,
        title,
        course_id
      )
    `)
    .eq("id", lessonId)
    .eq("status", "published")
    .single();

  if (error || !lesson) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

            <h1 className="text-3xl font-black text-red-600">
              Lesson Not Found
            </h1>

            <p className="mt-4 text-gray-600">
              This lesson could not be loaded.
            </p>

            <Link
              href={`/student/course/${courseId}`}
              className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Course
            </Link>

          </div>
        </div>
      </main>
    );
  }

  const chapter = Array.isArray(lesson.chapters)
    ? lesson.chapters[0]
    : lesson.chapters;

  if (!chapter || chapter.course_id !== courseId) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

            <h1 className="text-3xl font-black text-red-600">
              Invalid Lesson
            </h1>

            <p className="mt-4 text-gray-600">
              This lesson does not belong to this course.
            </p>

            <Link
              href={`/student/course/${courseId}`}
              className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Course
            </Link>

          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-5xl mx-auto px-6 py-10">

          <Link
            href={`/student/course/${courseId}`}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Course
          </Link>

          <div className="mt-8 flex items-center gap-3 text-white/80">

            <BookOpen className="w-5 h-5" />

            <span>
              {chapter.title}
            </span>

          </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-black">
            {lesson.title}
          </h1>

          <div className="flex flex-wrap gap-4 mt-6">

            {lesson.duration && (
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
                <Clock className="w-5 h-5" />
                {lesson.duration} min
              </div>
            )}

            {lesson.video_url && (
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
                <Video className="w-5 h-5" />
                Video
              </div>
            )}

            {lesson.pdf_url && (
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
                <FileText className="w-5 h-5" />
                PDF
              </div>
            )}

          </div>

        </div>

      </section>


      {/* LESSON CONTENT */}

      <section className="max-w-5xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">


          {/* VIDEO */}

          {lesson.video_url && (
            <div className="p-6 md:p-8 border-b border-gray-100">

              <h2 className="text-2xl font-black text-gray-900 mb-5">
                Lesson Video
              </h2>

              <LessonProgressTracker
                lessonId={lesson.id}
                videoUrl={lesson.video_url}
              />

            </div>
          )}


          {/* WRITTEN CONTENT */}

          <div className="p-6 md:p-10">

            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Lesson Content
            </h2>

            {lesson.content ? (
              <div className="whitespace-pre-wrap text-gray-700 leading-8 text-lg">
                {lesson.content}
              </div>
            ) : (
              <p className="text-gray-500">
                No written content has been added to this lesson yet.
              </p>
            )}

          </div>


          {/* PDF */}

          {lesson.pdf_url && (
            <div className="p-6 md:p-8 border-t border-gray-100">

              <h2 className="text-2xl font-black text-gray-900 mb-5">
                Lesson PDF
              </h2>

              <a
                href={lesson.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition"
              >
                <FileText className="w-5 h-5" />
                Open PDF
              </a>

            </div>
          )}

        </div>


        {/* COMPLETE LESSON */}

        <div className="mt-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h2 className="text-xl font-black text-gray-900">
                Finished this lesson?
              </h2>

              <p className="mt-1 text-gray-500">
                Mark the lesson as completed to update your course progress.
              </p>

            </div>

            <CompleteLessonButton
              lessonId={lesson.id}
            />

          </div>

        </div>


        {/* NAVIGATION */}

        <div className="mt-8 flex justify-between">

          <Link
            href={`/student/course/${courseId}`}
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Course Content
          </Link>

        </div>

      </section>

    </main>
  );
}
