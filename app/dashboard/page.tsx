"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

type CourseProgress = {
  course_id: string;
  progress: number;
  completed: boolean;
  courses:
    | {
        title: string;
        description: string | null;
      }[]
    | null;
};
export default function DashboardPage() {
  const [courses, setCourses] = useState<CourseProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/auth/login";
      return;
    }

    const { data, error } = await supabase
      .from("course_progress")
      .select(`
        course_id,
        progress,
        completed,
        courses (
          title,
          description
        )
      `)
      .eq("user_id", user.id)
      .order("updated_at", {
        ascending: false,
      });

    if (error) {
      console.error("Dashboard loading error:", error);
      setCourses([]);
      setLoading(false);
      return;
    }

    setCourses((data || []) as CourseProgress[]);
    setLoading(false);
  }

  const totalCourses = courses.length;

  const completedCourses = courses.filter(
    (course) => course.completed
  ).length;

  const overallProgress =
    totalCourses > 0
      ? Math.round(
          courses.reduce(
            (sum, course) => sum + (course.progress || 0),
            0
          ) / totalCourses
        )
      : 0;

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-100">
        <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black">
              Student Dashboard
            </h1>

            <p className="mt-3 text-blue-50">
              Loading your learning progress...
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
            <div className="text-5xl">⏳</div>

            <h2 className="text-xl font-bold mt-4">
              Loading dashboard...
            </h2>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">

          <p className="text-blue-100 font-bold uppercase tracking-wide text-sm">
            Rishi Infotech Learning Hub
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-2">
            Student Dashboard
          </h1>

          <p className="mt-3 text-blue-50 text-lg">
            Track your learning progress and continue your studies.
          </p>

        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Courses */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-7">
            <div className="text-4xl">
              📚
            </div>

            <h2 className="text-4xl font-black mt-4">
              {totalCourses}
            </h2>

            <p className="text-gray-500 mt-2">
              Courses Started
            </p>
          </div>

          {/* Progress */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-7">
            <div className="text-4xl">
              📈
            </div>

            <h2 className="text-4xl font-black mt-4">
              {overallProgress}%
            </h2>

            <p className="text-gray-500 mt-2">
              Overall Progress
            </p>

            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all"
                style={{
                  width: `${overallProgress}%`,
                }}
              />
            </div>
          </div>

          {/* Completed */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-7">
            <div className="text-4xl">
              🏆
            </div>

            <h2 className="text-4xl font-black mt-4">
              {completedCourses}
            </h2>

            <p className="text-gray-500 mt-2">
              Courses Completed
            </p>
          </div>

          {/* Active */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-7">
            <div className="text-4xl">
              🎯
            </div>

            <h2 className="text-4xl font-black mt-4">
              {
                courses.filter(
                  (course) =>
                    course.progress > 0 &&
                    !course.completed
                ).length
              }
            </h2>

            <p className="text-gray-500 mt-2">
              Courses In Progress
            </p>
          </div>

        </div>

      </section>

      {/* Continue Learning */}
      <section className="max-w-7xl mx-auto px-4 pb-14">

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7 md:p-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

            <div>
              <p className="text-blue-600 font-bold uppercase tracking-wide text-sm">
                Your Learning
              </p>

              <h2 className="text-3xl font-black text-gray-900 mt-1">
                Continue Learning
              </h2>

              <p className="text-gray-500 mt-2">
                Pick up where you left off.
              </p>
            </div>

            <Link
              href="/learn"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-center transition"
            >
              Explore Courses
            </Link>

          </div>

          {courses.length === 0 ? (

            <div className="text-center py-14">

              <div className="text-6xl">
                📚
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-4">
                No course progress yet
              </h3>

              <p className="text-gray-500 mt-2">
                Start a course to see your progress here.
              </p>

              <Link
                href="/learn"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold"
              >
                Start Learning
              </Link>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

              {courses.map((course) => {

               const courseInfo = course.courses?.[0];

const title =
  courseInfo?.title ||
  "Course";

const description =
  courseInfo?.description ||
  "Continue learning this course.";

                return (
                  <div
                    key={course.course_id}
                    className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3 className="text-xl font-black text-gray-900">
                          {title}
                        </h3>

                        <p className="text-gray-500 text-sm mt-2">
                          {description}
                        </p>

                      </div>

                      <div className="text-3xl">
                        {course.completed
                          ? "🏆"
                          : "📖"}
                      </div>

                    </div>

                    <div className="mt-6">

                      <div className="flex justify-between text-sm font-bold mb-2">

                        <span className="text-gray-600">
                          Progress
                        </span>

                        <span className="text-blue-600">
                          {course.progress}%
                        </span>

                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-3">

                        <div
                          className={`h-3 rounded-full transition-all ${
                            course.completed
                              ? "bg-green-500"
                              : "bg-blue-600"
                          }`}
                          style={{
                            width: `${Math.min(
                              Math.max(
                                course.progress || 0,
                                0
                              ),
                              100
                            )}%`,
                          }}
                        />

                      </div>

                    </div>

                    <Link
                      href={`/learn/${course.course_id}`}
                      className="block text-center mt-6 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-bold transition"
                    >
                      {course.completed
                        ? "Review Course"
                        : "Continue Learning →"}
                    </Link>

                  </div>
                );
              })}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}