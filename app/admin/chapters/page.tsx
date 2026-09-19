"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/auth/client";
import {
  Plus,
  Trash2,
  FolderOpen,
  RefreshCw,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
}

interface Chapter {
  id: string;
  title: string;
  course_id: string;
  created_at?: string;
}

export default function ChaptersPage() {
  const supabase = createClient();

  const [courses, setCourses] = useState<Course[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    setLoadingData(true);

    await Promise.all([
      loadCourses(),
      loadChapters(),
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

    console.log("CHAPTER PAGE COURSES:", data);

    setCourses(data || []);
  }

  async function loadChapters() {
    const { data, error } = await supabase
      .from("chapters")
      .select("id,title,course_id,created_at")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error("Chapters error:", error);
      return;
    }

    setChapters(data || []);
  }

  async function addChapter() {
    if (!courseId) {
      alert("Please select a course.");
      return;
    }

    if (!title.trim()) {
      alert("Please enter chapter title.");
      return;
    }

    setLoading(true);

    try {
      // Check authentication before inserting
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      console.log("CURRENT USER:", user);
      console.log("AUTH ERROR:", authError);

      if (authError) {
        console.error("Authentication error:", authError);
        alert(authError.message);
        return;
      }

      if (!user) {
        alert("You are not logged in. Please login again.");
        return;
      }

      const { data, error } = await supabase
        .from("chapters")
        .insert({
          title: title.trim(),
          course_id: courseId,
        })
        .select()
        .single();

      if (error) {
        console.error("Create chapter error:", error);
        alert(error.message);
        return;
      }

      console.log("CREATED CHAPTER:", data);

      alert("Chapter created successfully.");

      setTitle("");
      setCourseId("");

      await loadChapters();
    } catch (error) {
      console.error("Unexpected chapter error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to create chapter."
      );
    } finally {
      setLoading(false);
    }
  }

  async function deleteChapter(id: string) {
    const confirmed = confirm(
      "Are you sure you want to delete this chapter?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("chapters")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Delete chapter error:", error);
      alert(error.message);
      return;
    }

    await loadChapters();

    alert("Chapter deleted successfully.");
  }

  function courseName(id: string) {
    return (
      courses.find((course) => course.id === id)?.title ||
      "Unknown Course"
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-purple-700 via-blue-600 to-cyan-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm font-semibold mb-5">

              <FolderOpen className="w-5 h-5" />

              Course Content Management

            </div>

            <h1 className="text-4xl md:text-6xl font-black">
              Chapter Management
            </h1>

            <p className="mt-4 text-lg md:text-xl text-white/90">
              Create and manage chapters inside your courses.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* CREATE CHAPTER */}

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8">

          <div className="mb-6">

            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Add New Chapter
            </h2>

            <p className="mt-2 text-gray-600">
              Select a course and create a chapter inside it.
            </p>

          </div>

          <div className="space-y-5">

            {/* COURSE */}

            <div>

              <label className="block text-lg font-bold text-gray-900 mb-2">
                Select Course
              </label>

              <select
                value={courseId}
                onChange={(event) =>
                  setCourseId(event.target.value)
                }
                disabled={loadingData || courses.length === 0}
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
              >

                <option value="">
                  {loadingData
                    ? "Loading courses..."
                    : courses.length === 0
                    ? "No courses available"
                    : "Select Course"}
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

              {courses.length === 0 && !loadingData && (
                <p className="mt-2 text-sm text-red-600">
                  No courses were found. Please create a course first.
                </p>
              )}

            </div>

            {/* TITLE */}

            <div>

              <label className="block text-lg font-bold text-gray-900 mb-2">
                Chapter Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                placeholder="Example: Introduction to Computers"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500"
              />

            </div>

            {/* BUTTON */}

            <button
              type="button"
              onClick={addChapter}
              disabled={
                loading ||
                loadingData ||
                !courseId ||
                !title.trim()
              }
              className="inline-flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-xl transition"
            >

              {loading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <Plus className="w-5 h-5" />
              )}

              {loading
                ? "Creating Chapter..."
                : "Add Chapter"}

            </button>

          </div>

        </div>

        {/* CHAPTER LIST */}

        <div className="mt-10">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-3xl font-black text-gray-900">
                Existing Chapters
              </h2>

              <p className="text-gray-600 mt-2">
                {chapters.length}{" "}
                {chapters.length === 1
                  ? "chapter"
                  : "chapters"}{" "}
                available
              </p>

            </div>

            <button
              type="button"
              onClick={loadAll}
              disabled={loadingData}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold px-5 py-3 rounded-xl transition"
            >

              <RefreshCw
                className={`w-5 h-5 ${
                  loadingData
                    ? "animate-spin"
                    : ""
                }`}
              />

              Refresh

            </button>

          </div>

          {loadingData ? (

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center">

              <RefreshCw className="w-8 h-8 animate-spin mx-auto text-purple-600" />

              <p className="mt-4 text-gray-600 font-semibold">
                Loading chapters...
              </p>

            </div>

          ) : chapters.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center">

              <FolderOpen className="w-12 h-12 mx-auto text-gray-400" />

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                No chapters yet
              </h3>

              <p className="mt-2 text-gray-600">
                Create your first chapter above.
              </p>

            </div>

          ) : (

            <div className="grid gap-5">

              {chapters.map((chapter, index) => (

                <div
                  key={chapter.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6"
                >

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 shrink-0 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-black">
                        {index + 1}
                      </div>

                      <div>

                        <h3 className="text-xl font-black text-gray-900">
                          {chapter.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          Course:{" "}
                          <span className="font-semibold text-gray-700">
                            {courseName(chapter.course_id)}
                          </span>
                        </p>

                        {chapter.created_at && (
                          <p className="mt-1 text-xs text-gray-400">
                            Created:{" "}
                            {new Date(
                              chapter.created_at
                            ).toLocaleString()}
                          </p>
                        )}

                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        deleteChapter(chapter.id)
                      }
                      className="inline-flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold px-5 py-3 rounded-xl transition"
                    >

                      <Trash2 className="w-5 h-5" />

                      Delete

                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}