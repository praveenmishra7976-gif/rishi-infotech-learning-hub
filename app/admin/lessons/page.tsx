"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import {
  Plus,
  Trash2,
  BookOpen,
  Video,
  FileText,
  GraduationCap,
  RefreshCw,
  Search,
  CheckCircle2,
  Clock,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
}

interface Chapter {
  id: string;
  title: string;
  course_id: string;
}

interface Lesson {
  id: string;
  chapter_id: string;
  title: string;
  content: string | null;
  video_url: string | null;
  pdf_url: string | null;
  lesson_order: number | null;
  status: string | null;
  duration: number | null;
  created_at: string;
}

export default function LessonsPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const [courseId, setCourseId] = useState("");
  const [chapterId, setChapterId] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [videoUrl, setVideoUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const [lessonOrder, setLessonOrder] = useState("1");
  const [duration, setDuration] = useState("");

  const [status, setStatus] = useState("published");

  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    setLoadingData(true);

    await Promise.all([
      loadCourses(),
      loadChapters(),
      loadLessons(),
    ]);

    setLoadingData(false);
  }

  async function loadCourses() {
    const { data, error } = await supabase
      .from("courses")
      .select("id,title")
      .order("title", {
        ascending: true,
      });

    if (error) {
      console.error("Courses error:", error);
      return;
    }

    setCourses(data || []);
  }

  async function loadChapters() {
    const { data, error } = await supabase
      .from("chapters")
      .select("id,title,course_id")
      .order("created_at", {
        ascending: true,
      });

    if (error) {
      console.error("Chapters error:", error);
      return;
    }

    setChapters(data || []);
  }

  async function loadLessons() {
    const { data, error } = await supabase
      .from("lessons")
      .select(
        "id,chapter_id,title,content,video_url,pdf_url,lesson_order,status,duration,created_at"
      )
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error("Lessons error:", error);
      return;
    }

    setLessons(data || []);
  }

  const filteredChapters = useMemo(() => {
    if (!courseId) {
      return [];
    }

    return chapters.filter(
      (chapter) => chapter.course_id === courseId
    );
  }, [chapters, courseId]);

  const filteredLessons = useMemo(() => {
    const text = search.trim().toLowerCase();

    if (!text) {
      return lessons;
    }

    return lessons.filter((lesson) => {
      const chapter = chapters.find(
        (item) => item.id === lesson.chapter_id
      );

      const course = courses.find(
        (item) => item.id === chapter?.course_id
      );

      return (
        lesson.title.toLowerCase().includes(text) ||
        (lesson.content || "")
          .toLowerCase()
          .includes(text) ||
        (chapter?.title || "")
          .toLowerCase()
          .includes(text) ||
        (course?.title || "")
          .toLowerCase()
          .includes(text)
      );
    });
  }, [lessons, chapters, courses, search]);

  async function createLesson() {
    if (!courseId) {
      alert("Please select a course.");
      return;
    }

    if (!chapterId) {
      alert("Please select a chapter.");
      return;
    }

    if (!title.trim()) {
      alert("Please enter a lesson title.");
      return;
    }

    const order = Number(lessonOrder);

    if (!order || order < 1) {
      alert("Lesson order must be at least 1.");
      return;
    }

    let lessonDuration: number | null = null;

    if (duration.trim()) {
      lessonDuration = Number(duration);

      if (
        Number.isNaN(lessonDuration) ||
        lessonDuration < 0
      ) {
        alert("Duration must be a valid number.");
        return;
      }
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from("lessons")
        .insert({
          chapter_id: chapterId,
          title: title.trim(),
          content: content.trim() || null,
          video_url: videoUrl.trim() || null,
          pdf_url: pdfUrl.trim() || null,
          lesson_order: order,
          status,
          duration: lessonDuration,
        });

      if (error) {
        console.error(
          "Create lesson error:",
          error
        );

        alert(error.message);
        return;
      }

      alert("Lesson created successfully.");

      setTitle("");
      setContent("");
      setVideoUrl("");
      setPdfUrl("");
      setLessonOrder("1");
      setDuration("");
      setStatus("published");

      await loadLessons();
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to create lesson."
      );
    } finally {
      setLoading(false);
    }
  }

  async function deleteLesson(id: string) {
    const confirmed = confirm(
      "Are you sure you want to delete this lesson?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("lessons")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    await loadLessons();

    alert("Lesson deleted successfully.");
  }

  function getChapterTitle(chapterId: string) {
    return (
      chapters.find(
        (chapter) => chapter.id === chapterId
      )?.title || "Unknown Chapter"
    );
  }

  function getCourseTitle(chapterId: string) {
    const chapter = chapters.find(
      (item) => item.id === chapterId
    );

    if (!chapter) {
      return "Unknown Course";
    }

    return (
      courses.find(
        (course) =>
          course.id === chapter.course_id
      )?.title || "Unknown Course"
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm font-semibold mb-5">

              <GraduationCap className="w-5 h-5" />

              Course Content Management

            </div>

            <h1 className="text-4xl md:text-6xl font-black">
              Lesson Management
            </h1>

            <p className="mt-4 text-lg md:text-xl text-white/90">
              Create and manage lessons inside your course
              chapters.
            </p>

          </div>

        </div>

      </section>

      {/* MAIN */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* CREATE LESSON */}

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8">

          <div className="mb-8">

            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Add New Lesson
            </h2>

            <p className="mt-2 text-gray-600">
              Select a course, choose its chapter, and add
              your lesson content.
            </p>

          </div>

          <div className="space-y-6">

            {/* COURSE */}

            <div>

              <label className="block text-lg font-bold mb-2">
                Select Course
              </label>

              <select
                value={courseId}
                onChange={(event) => {
                  setCourseId(event.target.value);
                  setChapterId("");
                }}
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option value="">
                  Select Course
                </option>

                {courses.map((course) => (
                  <option
                    key={course.id}
                    value={course.id}
                  >
                    {course.title}
                  </option>
                ))}

              </select>

            </div>

            {/* CHAPTER */}

            <div>

              <label className="block text-lg font-bold mb-2">
                Select Chapter
              </label>

              <select
                value={chapterId}
                onChange={(event) =>
                  setChapterId(event.target.value)
                }
                disabled={!courseId}
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              >

                <option value="">
                  {courseId
                    ? "Select Chapter"
                    : "Select Course First"}
                </option>

                {filteredChapters.map((chapter) => (
                  <option
                    key={chapter.id}
                    value={chapter.id}
                  >
                    {chapter.title}
                  </option>
                ))}

              </select>

            </div>

            {/* TITLE */}

            <div>

              <label className="block text-lg font-bold mb-2">
                Lesson Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                placeholder="Example: What is a Computer?"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* CONTENT */}

            <div>

              <label className="block text-lg font-bold mb-2">
                Lesson Content
              </label>

              <textarea
                value={content}
                onChange={(event) =>
                  setContent(event.target.value)
                }
                rows={7}
                placeholder="Write the lesson content here..."
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* VIDEO */}

            <div>

              <label className="block text-lg font-bold mb-2">
                Video URL
              </label>

              <div className="relative">

                <Video className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <input
                  type="url"
                  value={videoUrl}
                  onChange={(event) =>
                    setVideoUrl(event.target.value)
                  }
                  placeholder="https://..."
                  className="w-full border border-gray-300 rounded-xl p-4 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* PDF */}

            <div>

              <label className="block text-lg font-bold mb-2">
                PDF URL
              </label>

              <div className="relative">

                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <input
                  type="url"
                  value={pdfUrl}
                  onChange={(event) =>
                    setPdfUrl(event.target.value)
                  }
                  placeholder="https://..."
                  className="w-full border border-gray-300 rounded-xl p-4 pl-12 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* ORDER + DURATION */}

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="block text-lg font-bold mb-2">
                  Lesson Order
                </label>

                <input
                  type="number"
                  min="1"
                  value={lessonOrder}
                  onChange={(event) =>
                    setLessonOrder(event.target.value)
                  }
                  className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block text-lg font-bold mb-2">
                  Duration (minutes)
                </label>

                <input
                  type="number"
                  min="0"
                  value={duration}
                  onChange={(event) =>
                    setDuration(event.target.value)
                  }
                  placeholder="Example: 30"
                  className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* STATUS */}

            <div>

              <label className="block text-lg font-bold mb-2">
                Status
              </label>

              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value)
                }
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option value="published">
                  Published
                </option>

                <option value="draft">
                  Draft
                </option>

              </select>

            </div>

            {/* CREATE */}

            <button
              type="button"
              onClick={createLesson}
              disabled={loading}
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold px-8 py-4 rounded-xl transition"
            >

              {loading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <Plus className="w-5 h-5" />
              )}

              {loading
                ? "Creating Lesson..."
                : "Create Lesson"}

            </button>

          </div>

        </div>

        {/* SEARCH */}

        <div className="relative mt-10 mb-8">

          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search lessons, chapters or courses..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="w-full bg-white border border-gray-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />

        </div>

        {/* LESSONS */}

        {loadingData ? (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="bg-white rounded-3xl p-6 shadow-sm animate-pulse"
              >

                <div className="h-7 bg-gray-200 rounded" />

                <div className="h-4 bg-gray-200 rounded mt-4" />

                <div className="h-4 bg-gray-200 rounded mt-3 w-2/3" />

              </div>

            ))}

          </div>

        ) : filteredLessons.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center">

            <BookOpen className="w-16 h-16 mx-auto text-blue-500" />

            <h3 className="text-2xl font-black text-gray-900 mt-5">
              No lessons yet
            </h3>

            <p className="text-gray-500 mt-2">
              Create your first lesson above.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredLessons.map((lesson) => (

              <article
                key={lesson.id}
                className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">

                    <BookOpen className="w-6 h-6" />

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      deleteLesson(lesson.id)
                    }
                    className="p-2 rounded-lg text-red-600 hover:bg-red-50"
                    title="Delete lesson"
                  >

                    <Trash2 className="w-5 h-5" />

                  </button>

                </div>

                <h3 className="text-xl font-black text-gray-900 mt-5">
                  {lesson.title}
                </h3>

                <p className="text-blue-600 font-bold mt-2">
                  {getCourseTitle(lesson.chapter_id)}
                </p>

                <p className="text-purple-600 font-semibold mt-1">
                  {getChapterTitle(lesson.chapter_id)}
                </p>

                {lesson.content && (
                  <p className="text-gray-600 mt-4 line-clamp-3">
                    {lesson.content}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-5">

                  {lesson.status === "published" && (
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      Published
                    </span>
                  )}

                  {lesson.status === "draft" && (
                    <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full text-sm font-bold">
                      Draft
                    </span>
                  )}

                  {lesson.duration !== null && (
                    <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-bold">
                      <Clock className="w-4 h-4" />
                      {lesson.duration} min
                    </span>
                  )}

                </div>

                <div className="flex gap-3 mt-5">

                  {lesson.video_url && (
                    <a
                      href={lesson.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl font-bold"
                    >
                      <Video className="w-4 h-4" />
                      Video
                    </a>
                  )}

                  {lesson.pdf_url && (
                    <a
                      href={lesson.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-xl font-bold"
                    >
                      <FileText className="w-4 h-4" />
                      PDF
                    </a>
                  )}

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}