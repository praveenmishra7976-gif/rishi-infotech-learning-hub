
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Home,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";

interface MockTestResult {
  subject: string;
  subjectName: string;
  score: number;
  total: number;
  percentage: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  timeLimit: number;
  timeRemaining: number;
  timeUsed: number;
  completedAt: string;
}

const SUBJECT_ICONS: Record<string, string> = {
  computer: "💻",
  physics: "⚛️",
  chemistry: "🧪",
  mathematics: "📐",
  sanskrit: "📜",
  gk: "🌍",
};

export default function MockTestResultPage() {
  const [result, setResult] = useState<MockTestResult | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mockTestResult");

      if (saved) {
        setResult(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Unable to read mock test result:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const getPerformance = (percentage: number) => {
    if (percentage >= 90) {
      return {
        title: "Excellent Performance! 🏆",
        message:
          "Outstanding work! You have demonstrated a very strong understanding of this subject.",
        className: "bg-green-50 border-green-200 text-green-800",
      };
    }

    if (percentage >= 75) {
      return {
        title: "Great Job! 🎉",
        message:
          "Very good performance. Keep practicing to make your preparation even stronger.",
        className: "bg-blue-50 border-blue-200 text-blue-800",
      };
    }

    if (percentage >= 60) {
      return {
        title: "Good Effort! 👍",
        message:
          "You have a good foundation. Review the topics you found difficult and try again.",
        className: "bg-yellow-50 border-yellow-200 text-yellow-800",
      };
    }

    return {
      title: "Keep Practicing! 💪",
      message:
        "Do not worry about the score. Review your lessons, practice more questions and try the test again.",
      className: "bg-orange-50 border-orange-200 text-orange-800",
    };
  };

  if (!loaded) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
            <p className="mt-4 font-semibold text-slate-500">
              Loading your result...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (!result) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

        <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center px-6">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="text-6xl">📝</div>

            <h1 className="mt-5 text-3xl font-black text-slate-900">
              No Mock Test Result Found
            </h1>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-500">
              Complete a mock test first and your result will appear here.
            </p>

            <Link
              href="/practice/mock-tests"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              <ArrowRight size={18} />
              Take a Mock Test
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const performance = getPerformance(result.percentage);
  const icon = SUBJECT_ICONS[result.subject] ?? "📝";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Tricolour strip */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center md:py-20">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-5xl">
            {icon}
          </div>

          <p className="mt-5 text-sm font-black uppercase tracking-widest text-cyan-200">
            Mock Test Completed
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            {result.subjectName}
          </h1>

          <p className="mt-4 text-lg text-white/80">
            Here is your mock test performance.
          </p>
        </div>
      </section>

      {/* Result content */}
      <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        {/* Main score */}
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl md:p-10">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-slate-400">
              Your Score
            </p>

            <div className="mt-4 text-6xl font-black text-blue-700 md:text-8xl">
              {result.score}
              <span className="text-3xl text-slate-400 md:text-4xl">
                /{result.total}
              </span>
            </div>

            <div className="mt-3 text-2xl font-black text-slate-800">
              {result.percentage}%
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-green-50 p-5 text-center">
              <CheckCircle2 className="mx-auto text-green-600" size={28} />

              <p className="mt-3 text-2xl font-black text-green-700">
                {result.correct}
              </p>

              <p className="mt-1 text-sm font-bold text-green-700">
                Correct
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-5 text-center">
              <XCircle className="mx-auto text-red-600" size={28} />

              <p className="mt-3 text-2xl font-black text-red-700">
                {result.incorrect}
              </p>

              <p className="mt-1 text-sm font-bold text-red-700">
                Incorrect
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5 text-center">
              <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-orange-200 font-black text-orange-700">
                ?
              </div>

              <p className="mt-3 text-2xl font-black text-orange-700">
                {result.unanswered}
              </p>

              <p className="mt-1 text-sm font-bold text-orange-700">
                Unanswered
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5 text-center">
              <Clock className="mx-auto text-blue-600" size={28} />

              <p className="mt-3 text-2xl font-black text-blue-700">
                {formatTime(result.timeUsed)}
              </p>

              <p className="mt-1 text-sm font-bold text-blue-700">
                Time Used
              </p>
            </div>
          </div>
        </div>

        {/* Performance message */}
        <div
          className={`mt-6 rounded-3xl border p-7 ${performance.className}`}
        >
          <div className="flex items-start gap-4">
            <Trophy className="mt-1 shrink-0" size={28} />

            <div>
              <h2 className="text-2xl font-black">
                {performance.title}
              </h2>

              <p className="mt-2 leading-7">
                {performance.message}
              </p>
            </div>
          </div>
        </div>

        {/* Result summary */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">
            Test Summary
          </h2>

          <div className="mt-5 divide-y divide-slate-100">
            <div className="flex items-center justify-between gap-4 py-4">
              <span className="text-slate-500">Subject</span>
              <span className="font-black text-slate-900">
                {icon} {result.subjectName}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <span className="text-slate-500">Questions</span>
              <span className="font-black text-slate-900">
                {result.total}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <span className="text-slate-500">Time Limit</span>
              <span className="font-black text-slate-900">
                10 minutes
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <span className="text-slate-500">Time Used</span>
              <span className="font-black text-slate-900">
                {formatTime(result.timeUsed)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <span className="text-slate-500">Percentage</span>
              <span className="font-black text-blue-700">
                {result.percentage}%
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            href={`/practice/mock-tests/${result.subject}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            <RotateCcw size={19} />
            Try Again
          </Link>

          <Link
            href="/practice/mock-tests"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            <ArrowLeft size={19} />
            All Mock Tests
          </Link>

          <Link
            href="/practice"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            <Home size={19} />
            Practice Center
          </Link>
        </div>

        {/* Encouragement */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-8 text-center text-white">
          <Trophy className="mx-auto" size={34} />

          <h2 className="mt-4 text-2xl font-black">
            Keep Learning. Keep Improving.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/85">
            Every test is an opportunity to discover what you know and what
            you should revise next.
          </p>

          <Link
            href="/learn"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Continue Learning
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="font-black">🇮🇳 Rishi Infotech</p>

          <p className="mt-2 text-sm text-slate-400">
            Free learning and practice resources for students.
          </p>
        </div>

        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />
      </footer>
    </main>
  );
}
