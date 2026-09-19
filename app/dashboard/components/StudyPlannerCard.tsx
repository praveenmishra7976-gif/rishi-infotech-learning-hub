"use client";

import Link from "next/link";

export default function StudyPlannerCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-blue-700">
        Study Planner
      </h2>

      <p className="mt-4 text-gray-600">
        Organize your daily study schedule.
      </p>

      <Link
        href="/study-planner"
        className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        Open Planner
      </Link>

    </div>
  );
}