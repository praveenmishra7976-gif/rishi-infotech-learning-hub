"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Trophy,
  RotateCcw,
  Home,
  Medal,
  History,
} from "lucide-react";

import { saveProgressAttempt } from "@/app/lib/progress/saveProgress";

interface QuizHistoryItem {
  id: string;
  date: string;
  score: number;
  total: number;
  percentage: number;
  subject: string;
  subjectName: string;
}

export default function ResultPage() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedScore = Number(
      localStorage.getItem("quizScore") || 0
    );

    const savedTotal = Number(
      localStorage.getItem("quizTotal") || 0
    );

    const subject =
      localStorage.getItem("quizSubject") || "computer";

    const subjectName =
      localStorage.getItem("quizSubjectName") || "Computer";

    const calculatedPercentage =
      savedTotal > 0
        ? Math.round((savedScore / savedTotal) * 100)
        : 0;

    setScore(savedScore);
    setTotal(savedTotal);
    setPercentage(calculatedPercentage);

    /*
     * ------------------------------------------------------------
     * EXISTING QUIZ HISTORY
     * ------------------------------------------------------------
     */

    const resultKey =
      `${savedScore}-${savedTotal}-${subject}`;

    const historySaveKey =
      `quizHistorySaved:${resultKey}`;

    const alreadySaved =
      sessionStorage.getItem(historySaveKey);

    if (!alreadySaved) {
      const history: QuizHistoryItem[] = JSON.parse(
        localStorage.getItem("quizHistory") || "[]"
      );

      const newAttempt: QuizHistoryItem = {
        id: `${resultKey}-${Date.now()}`,
        score: savedScore,
        total: savedTotal,
        percentage: calculatedPercentage,
        subject,
        subjectName,
        date: new Date().toLocaleString(),
      };

      history.unshift(newAttempt);

      localStorage.setItem(
        "quizHistory",
        JSON.stringify(history)
      );

      sessionStorage.setItem(
        historySaveKey,
        "true"
      );
    }

    /*
     * ------------------------------------------------------------
     * UNIFIED LEARNING PROGRESS
     * ------------------------------------------------------------
     */

    const progressSaveKey =
      `mcqProgressSaved:${resultKey}`;

    const progressAlreadySaved =
      sessionStorage.getItem(progressSaveKey);

    if (
      !progressAlreadySaved &&
      savedTotal > 0
    ) {
      saveProgressAttempt({
        type: "mcq",
        typeName: "MCQ Quiz",
        subject,
        subjectName,
        score: savedScore,
        total: savedTotal,
        percentage: calculatedPercentage,
      });

      sessionStorage.setItem(
        progressSaveKey,
        "true"
      );
    }

    /*
     * ------------------------------------------------------------
     * GLOBAL SUPABASE LEADERBOARD
     * ------------------------------------------------------------
     *
     * Store percentage so different practice modes can be
     * compared on the same 0–100 scale.
     *
     * The sessionStorage key prevents a browser refresh from
     * submitting the same result repeatedly.
     */

    const leaderboardSaveKey =
      `mcqLeaderboardSaved:${resultKey}`;

    const leaderboardAlreadySaved =
      sessionStorage.getItem(
        leaderboardSaveKey
      );

    if (
      !leaderboardAlreadySaved &&
      savedTotal > 0
    ) {
      fetch("/api/leaderboard/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score: calculatedPercentage,
        }),
      })
        .then(async (response) => {
          if (!response.ok) {
            const data = await response
              .json()
              .catch(() => null);

            console.error(
              "Leaderboard submission failed:",
              data?.message || response.status
            );

            return;
          }

          sessionStorage.setItem(
            leaderboardSaveKey,
            "true"
          );
        })
        .catch((error) => {
          console.error(
            "Leaderboard submission error:",
            error
          );
        });
    }

    setSaved(true);
  }, []);

  const getPerformance = () => {
    if (percentage >= 90) {
      return {
        title: "Excellent Performance!",
        message:
          "Outstanding work. You have demonstrated a strong understanding of the subject.",
        icon: "🏆",
      };
    }

    if (percentage >= 75) {
      return {
        title: "Great Work!",
        message:
          "You are doing well. Keep practising to make your understanding even stronger.",
        icon: "🥇",
      };
    }

    if (percentage >= 60) {
      return {
        title: "Good Effort!",
        message:
          "You have a good foundation. Review the difficult topics and practise again.",
        icon: "🥈",
      };
    }

    return {
      title: "Keep Practising!",
      message:
        "Every attempt helps you improve. Review the concepts and try the quiz again.",
      icon: "📚",
    };
  };

  const performance = getPerformance();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center md:py-20">
          <div className="text-6xl">
            {performance.icon}
          </div>

          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            {performance.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            {performance.message}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-3xl font-black text-blue-700">
            {percentage}%
          </div>

          <h2 className="mt-6 text-3xl font-black text-gray-900">
            Quiz Result
          </h2>

          <p className="mt-3 text-gray-500">
            You scored {score} out of {total}.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-600">
                SCORE
              </p>
              <p className="mt-2 text-3xl font-black text-blue-800">
                {score}
              </p>
            </div>

            <div className="rounded-2xl bg-indigo-50 p-5">
              <p className="text-sm font-bold text-indigo-600">
                TOTAL
              </p>
              <p className="mt-2 text-3xl font-black text-indigo-800">
                {total}
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-5">
              <p className="text-sm font-bold text-green-600">
                PERCENTAGE
              </p>
              <p className="mt-2 text-3xl font-black text-green-800">
                {percentage}%
              </p>
            </div>
          </div>

          {saved && (
            <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-4 text-sm font-semibold text-green-700">
              Your learning progress has been saved.
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            <RotateCcw size={19} />
            Try Again
          </Link>

          <Link
            href="/quiz/history"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-4 font-bold text-gray-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            <History size={19} />
            Quiz History
          </Link>

          <Link
            href="/leaderboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-4 font-bold text-gray-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            <Medal size={19} />
            Global Leaderboard
          </Link>

          <Link
            href="/practice"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-4 font-bold text-gray-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            <Home size={19} />
            Practice Center
          </Link>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-8 text-center text-white md:p-10">
          <Trophy className="mx-auto" size={36} />

          <h2 className="mt-4 text-2xl font-black md:text-3xl">
            Keep Learning. Keep Improving.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/85">
            Review your mistakes, practise regularly and keep building
            your learning record.
          </p>

          <Link
            href="/learn"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Continue Learning
          </Link>
        </div>
      </section>

      <footer className="mt-10 bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="font-black text-xl">
            🇮🇳 Rishi Infotech
          </p>

          <p className="mt-2 text-gray-400">
            Free learning and practice resources for students.
          </p>
        </div>

        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />
      </footer>
    </main>
  );
}
