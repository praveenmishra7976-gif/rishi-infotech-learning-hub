"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Plus,
  RefreshCw,
  Search,
  Sparkles,
  Layers,
  BookMarked,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

type Course = {
  id: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  status: string | null;
  featured: boolean | null;
  created_at: string | null;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  async function loadCourses() {
    setLoading(true);
    setError("");

    try {
      console.log("====================================");
      console.log("LOADING COURSES FROM SUPABASE");
      console.log("====================================");

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      console.log("CURRENT USER:", user);
      console.log("AUTH ERROR:", authError);

      const {
        data,
        error: supabaseError,
      } = await supabase
        .from("courses")
        .select(
          "id, title, description, thumbnail, status, featured, created_at"
        )
        .order("created_at", {
          ascending: false,
        });

      console.log("COURSES:", data);
      console.log("COURSES ERROR:", supabaseError);
      console.log(
        "COURSE COUNT:",
        data ? data.length : 0
      );

      if (supabaseError) {
        console.error(
          "SUPABASE COURSES ERROR:",
          supabaseError
        );

        setError(
          `Supabase error: ${supabaseError.message}`
        );

        setCourses([]);
        return;
      }

      setCourses((data ?? []) as Course[]);
    } catch (err) {
      console.error(
        "UNEXPECTED COURSES ERROR:",
        err
      );

      setError(
        "Unable to load courses. Please try again."
      );

      setCourses([]);
    } finally {
      setLoading(false);
    }
  }

  const filteredCourses = useMemo(() => {
    const searchText = search
      .toLowerCase()
      .trim();

    if (!searchText) {
      return courses;
    }

    return courses.filter((course) => {
      return (
        course.title
          ?.toLowerCase()
          .includes(searchText) ||
        course.description
          ?.toLowerCase()
          .includes(searchText)
      );
    });
  }, [courses, search]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />

              Rishi Infotech Learning Hub
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Learn Everything In One Place
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90">
              Explore courses, study important topics,
              improve your skills, and learn at your own
              pace.
            </p>

          </div>

        </div>

      </section>

      {/* COURSE MANAGEMENT */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-8">

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Course Management
            </h2>

            <p className="mt-2 text-gray-600">

              {filteredCourses.length}{" "}

              {filteredCourses.length === 1
                ? "course"
                : "courses"}{" "}

              available

            </p>

          </div>

          {/* MANAGEMENT BUTTONS */}

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">

            {/* REFRESH */}

            <button
              onClick={loadCourses}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold px-5 py-3 rounded-xl transition"
            >
              <RefreshCw
                className={`w-5 h-5 ${
                  loading ? "animate-spin" : ""
                }`}
              />

              Refresh
            </button>

            {/* CREATE COURSE */}

            <Link
              href="/admin/courses/create"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-5 py-3 rounded-xl transition"
            >
              <Plus className="w-5 h-5" />

              Create Course
            </Link>

            {/* CHAPTERS */}

            <Link
              href="/admin/chapters"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-3 rounded-xl transition"
            >
              <Layers className="w-5 h-5" />

              Chapters
            </Link>

            {/* LESSONS */}

            <Link
              href="/admin/lessons"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-xl transition"
            >
              <BookMarked className="w-5 h-5" />

              Lessons
            </Link>

          </div>

        </div>

        {/* COURSE WORKFLOW */}

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-10">

          <h3 className="text-xl font-black text-gray-900 mb-5">
            Course Learning Structure
          </h3>

          <div className="grid md:grid-cols-3 gap-5">

            {/* COURSE */}

            <Link
              href="/admin/courses/create"
              className="group border border-blue-100 bg-blue-50 rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>

              <h4 className="text-lg font-black text-gray-900">
                1. Course
              </h4>

              <p className="text-gray-600 mt-2">
                Create the main course such as Computer,
                Physics, Mathematics, etc.
              </p>

              <div className="mt-4 text-blue-600 font-bold flex items-center gap-2">
                Create Course
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </div>

            </Link>

            {/* CHAPTER */}

            <Link
              href="/admin/chapters"
              className="group border border-purple-100 bg-purple-50 rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>

              <h4 className="text-lg font-black text-gray-900">
                2. Chapters
              </h4>

              <p className="text-gray-600 mt-2">
                Add chapters inside an existing course.
              </p>

              <div className="mt-4 text-purple-600 font-bold flex items-center gap-2">
                Manage Chapters
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </div>

            </Link>

            {/* LESSON */}

            <Link
              href="/admin/lessons"
              className="group border border-green-100 bg-green-50 rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center mb-4">
                <BookMarked size={24} />
              </div>

              <h4 className="text-lg font-black text-gray-900">
                3. Lessons
              </h4>

              <p className="text-gray-600 mt-2">
                Add lessons, notes, videos, PDFs and
                learning content inside chapters.
              </p>

              <div className="mt-4 text-green-600 font-bold flex items-center gap-2">
                Manage Lessons
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </div>

            </Link>

          </div>

        </div>

        {/* SEARCH */}

        <div className="relative mb-10">

          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-white border border-gray-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />

        </div>

        {/* ERROR */}

        {error && (
          <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">

            <p className="font-bold">
              Unable to load courses
            </p>

            <p className="mt-2 text-sm">
              {error}
            </p>

          </div>
        )}

        {/* LOADING */}

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl shadow-sm overflow-hidden animate-pulse"
              >

                <div className="h-48 bg-gray-200" />

                <div className="p-6 space-y-4">

                  <div className="h-6 bg-gray-200 rounded" />

                  <div className="h-4 bg-gray-200 rounded" />

                  <div className="h-4 bg-gray-200 rounded w-2/3" />

                </div>

              </div>
            ))}

          </div>
        )}

        {/* NO COURSES */}

        {!loading &&
          filteredCourses.length === 0 && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center">

              <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">

                <BookOpen className="w-10 h-10 text-blue-600" />

              </div>

              <h3 className="text-2xl font-black text-gray-900 mt-6">
                No courses available yet
              </h3>

              <p className="text-gray-500 mt-3">
                Create your first course to start
                building your learning content.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">

                <Link
                  href="/admin/courses/create"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-6 py-3 rounded-xl"
                >
                  <Plus className="w-5 h-5" />
                  Create Course
                </Link>

                <button
                  onClick={loadCourses}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl"
                >
                  <RefreshCw className="w-5 h-5" />
                  Refresh Courses
                </button>

              </div>

            </div>
          )}

        {/* COURSES GRID */}

        {!loading &&
          filteredCourses.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredCourses.map((course) => (

                <article
                  key={course.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group"
                >

                  {/* IMAGE */}

                  <div className="relative h-52 bg-gray-100 overflow-hidden">

                    {course.thumbnail ? (
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100">

                        <BookOpen className="w-16 h-16 text-blue-500" />

                      </div>
                    )}

                    {course.featured && (
                      <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-950 text-xs font-black px-3 py-1.5 rounded-full">
                        Featured
                      </div>
                    )}

                  </div>

                  {/* CONTENT */}

                  <div className="p-6">

                    <h3 className="text-2xl font-black text-gray-900">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {course.description ||
                        "Start learning this course and improve your skills."}
                    </p>

                    <div className="flex items-center justify-between mt-6 gap-3">

                      <span className="text-sm font-semibold text-gray-500">
                        {course.status ||
                          "Published"}
                      </span>

                      <Link
                        href={`/learn/${course.id}`}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-xl transition"
                      >
                        Learn Now

                        <ArrowRight className="w-5 h-5" />
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>
          )}

      </section>

    </main>
  );
}