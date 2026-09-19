"use client";

import { BarChart3 } from "lucide-react";

export default function ProgressDashboard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <BarChart3
          className="text-blue-700"
          size={34}
        />

        <h2 className="text-3xl font-bold">
          Learning Progress
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-700">
            8
          </h3>
          <p className="mt-2">
            Chapters
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 text-center">
          <h3 className="text-4xl font-bold text-green-700">
            5
          </h3>
          <p className="mt-2">
            Quizzes
          </p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 text-center">
          <h3 className="text-4xl font-bold text-yellow-700">
            100%
          </h3>
          <p className="mt-2">
            Goal
          </p>
        </div>

      </div>

    </div>
  );
}