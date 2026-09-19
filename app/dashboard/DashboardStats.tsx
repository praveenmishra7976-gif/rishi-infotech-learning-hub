"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type CourseProgress = {
  course_id: string;
  progress: number;
  completed: boolean;
};

export default function DashboardStats() {
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, []);

  async function loadProgress() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("course_progress")
      .select("course_id, progress, completed")
      .eq("user_id", user.id);

    if (error) {
      console.error("Dashboard progress error:", error);
      setProgress([]);
      setLoading(false);
      return;
    }

    setProgress(data || []);
    setLoading(false);
  }

  const totalCourses = progress.length;

  const completedCourses = progress.filter(
    (item) => item.completed
  ).length;

  const overallProgress =
    totalCourses > 0
      ? Math.round(
          progress.reduce(
            (total, item) => total + item.progress,
            0
          ) / totalCourses
        )
      : 0;

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <div className="text-4xl">⏳</div>
          <p className="mt-3 text-gray-500">
            Loading progress...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Courses Started */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <div className="text-4xl">📚</div>

        <h2 className="text-4xl font-black mt-4">
          {totalCourses}
        </h2>

        <p className="text-gray-500 mt-2">
          Courses Started
        </p>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <div className="text-4xl">📈</div>

        <h2 className="text-4xl font-black mt-4">
          {overallProgress}%
        </h2>

        <p className="text-gray-500 mt-2">
          Overall Progress
        </p>

        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{
              width: `${overallProgress}%`,
            }}
          />
        </div>
      </div>

      {/* Completed Courses */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <div className="text-4xl">🏆</div>

        <h2 className="text-4xl font-black mt-4">
          {completedCourses}
        </h2>

        <p className="text-gray-500 mt-2">
          Courses Completed
        </p>
      </div>

      {/* Lessons Progress */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <div className="text-4xl">🎯</div>

        <h2 className="text-4xl font-black mt-4">
          {progress.filter(
            (item) => item.progress > 0
          ).length}
        </h2>

        <p className="text-gray-500 mt-2">
          Courses In Progress
        </p>
      </div>

    </div>
  );
}