"use client";

import Link from "next/link";
import {
  Trophy,
  BookOpen,
  Target,
  TrendingUp,
  Home,
  History,
} from "lucide-react";

export default function StudentDashboard() {

  const history =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("quizHistory") || "[]")
      : [];

  const totalQuiz = history.length;

  const highestScore =
    history.length > 0
      ? Math.max(...history.map((q: any) => q.score))
      : 0;

  const average =
    history.length > 0
      ? Math.round(
          history.reduce((a: number, b: any) => a + b.percentage, 0) /
            history.length
        )
      : 0;

  const streak = history.length;

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-black">

            Student Dashboard

          </h1>

          <p className="mt-4 text-xl">

            Track your learning progress

          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <BookOpen
              size={45}
              className="text-blue-600"
            />

            <h2 className="text-4xl font-black mt-5">

              {totalQuiz}

            </h2>

            <p className="mt-2">

              Total Quizzes

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <Trophy
              size={45}
              className="text-yellow-500"
            />

            <h2 className="text-4xl font-black mt-5">

              {highestScore}

            </h2>

            <p className="mt-2">

              Highest Score

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <TrendingUp
              size={45}
              className="text-green-600"
            />

            <h2 className="text-4xl font-black mt-5">

              {average}%

            </h2>

            <p className="mt-2">

              Average Percentage

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <Target
              size={45}
              className="text-red-600"
            />

            <h2 className="text-4xl font-black mt-5">

              {streak}

            </h2>

            <p className="mt-2">

              Learning Streak

            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          <Link
            href="/quiz/history"
            className="bg-purple-600 text-white rounded-2xl py-5 flex justify-center items-center gap-3 text-lg font-bold"
          >
            <History />
            Quiz History
          </Link>

          <Link
            href="/"
            className="bg-blue-600 text-white rounded-2xl py-5 flex justify-center items-center gap-3 text-lg font-bold"
          >
            <Home />
            Home
          </Link>

        </div>

      </section>

    </main>
  );
}