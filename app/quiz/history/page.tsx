
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  Home,
  History,
  Medal,
  RotateCcw,
  Trash2,
  Trophy,
  X,
} from "lucide-react";

type AttemptType = "mcq" | "mock-test" | "daily-quiz";

interface ProgressAttempt {
  id: string;
  type: AttemptType;
  typeName: string;
  subject: string;
  subjectName: string;
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
}

const STORAGE_KEY = "learningProgress";

const TYPE_INFO: Record<
  AttemptType,
  {
    name: string;
    icon: string;
    className: string;
  }
> = {
  mcq: {
    name: "MCQ Quiz",
    icon: "📝",
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
  "mock-test": {
    name: "Mock Test",
    icon: "🎯",
    className: "bg-purple-50 text-purple-700 border-purple-200",
  },
  "daily-quiz": {
    name: "Daily Quiz",
    icon: "🔥",
    className: "bg-orange-50 text-orange-700 border-orange-200",
  },
};

export default function QuizHistoryPage() {
  const [attempts, setAttempts] = useState<ProgressAttempt[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [filter, setFilter] = useState<"all" | AttemptType>("all");

  useEffect(() => {
    loadProgress();
  }, []);

  function loadProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setAttempts([]);
        setLoaded(true);
        return;
      }

      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        setAttempts(parsed);
      } else {
        setAttempts([]);
      }
    } catch (error) {
      console.error("Failed to load learning progress:", error);
      setAttempts([]);
    }

    setLoaded(true);
  }

  const filteredAttempts = useMemo(() => {
    if (filter === "all") {
      return attempts;
    }

    return attempts.filter((attempt) => attempt.type === filter);
  }, [attempts, filter]);

  const totalAttempts = attempts.length;

  const averagePercentage =
    totalAttempts > 0
      ? Math.round(
          attempts.reduce(
            (sum, item) => sum + Number(item.percentage || 0),
            0
          ) / totalAttempts
        )
      : 0;

  const bestPercentage =
    totalAttempts > 0
      ? Math.max(
          ...attempts.map((item) => Number(item.percentage || 0))
        )
      : 0;

  const totalQuestions = attempts.reduce(
    (sum, item) => sum + Number(item.total || 0),
    0
  );

  const totalCorrect = attempts.reduce(
    (sum, item) => sum + Number(item.score || 0),
    0
  );

  const typeStats = useMemo(() => {
    const stats: Record<
      AttemptType,
      {
        attempts: number;
        average: number;
        best: number;
      }
    > = {
      mcq: {
        attempts: 0,
        average: 0,
        best: 0,
      },
      "mock-test": {
        attempts: 0,
        average: 0,
        best: 0,
      },
      "daily-quiz": {
        attempts: 0,
        average: 0,
        best: 0,
      },
    };

    attempts.forEach((attempt) => {
      if (!stats[attempt.type]) {
        return;
      }

      stats[attempt.type].attempts += 1;

      stats[attempt.type].average += Number(
        attempt.percentage || 0
      );

      stats[attempt.type].best = Math.max(
        stats[attempt.type].best,
        Number(attempt.percentage || 0)
      );
    });

    (Object.keys(stats) as AttemptType[]).forEach((type) => {
      if (stats[type].attempts > 0) {
        stats[type].average = Math.round(
          stats[type].average / stats[type].attempts
        );
      }
    });

    return stats;
  }, [attempts]);

  const subjectStats = useMemo(() => {
    const stats: Record<
      string,
      {
        name: string;
        attempts: number;
        best: number;
        average: number;
      }
    > = {};

    attempts.forEach((attempt) => {
      const key =
        attempt.subject ||
        attempt.subjectName ||
        "unknown";

      if (!stats[key]) {
        stats[key] = {
          name:
            attempt.subjectName ||
            attempt.subject ||
            "Quiz",
          attempts: 0,
          best: 0,
          average: 0,
        };
      }

      stats[key].attempts += 1;

      stats[key].best = Math.max(
        stats[key].best,
        Number(attempt.percentage || 0)
      );

      stats[key].average += Number(
        attempt.percentage || 0
      );
    });

    return Object.values(stats)
      .map((item) => ({
        ...item,
        average:
          item.attempts > 0
            ? Math.round(item.average / item.attempts)
            : 0,
      }))
      .sort((a, b) => b.best - a.best);
  }, [attempts]);

  function getPerformanceColor(percentage: number) {
    if (percentage >= 90) {
      return "text-green-700 bg-green-100 border-green-200";
    }

    if (percentage >= 75) {
      return "text-blue-700 bg-blue-100 border-blue-200";
    }

    if (percentage >= 60) {
      return "text-orange-700 bg-orange-100 border-orange-200";
    }

    return "text-red-700 bg-red-100 border-red-200";
  }

  function getPerformanceLabel(percentage: number) {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 75) return "Very Good";
    if (percentage >= 60) return "Good";
    return "Keep Practicing";
  }

  function formatDate(date: string) {
    try {
      return new Date(date).toLocaleString();
    } catch {
      return date;
    }
  }

  function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);

    // Also clear the old MCQ history so old records
    // do not remain visible in other parts of the app.
    localStorage.removeItem("quizHistory");

    setAttempts([]);
    setFilter("all");
    setShowClearConfirm(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* TRICOLOUR STRIP */}

      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

          <Link
            href="/practice"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-2 font-semibold hover:bg-white/20 transition"
          >
            <ArrowLeft size={18} />
            Back to Practice Center
          </Link>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-bold">
                <History size={16} />
                Student Learning Progress
              </div>

              <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
                Learning History
              </h1>

              <p className="mt-4 text-blue-100 text-lg md:text-xl max-w-3xl leading-8">
                Track your MCQ quizzes, mock tests and daily quizzes
                in one place. Review your performance and keep improving.
              </p>

            </div>

            <div className="hidden md:flex w-28 h-28 rounded-3xl bg-white/10 border border-white/20 items-center justify-center">
              <Trophy
                size={58}
                className="text-yellow-300"
              />
            </div>

          </div>

        </div>

      </section>

      {/* STATISTICS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-bold text-gray-500">
                  Total Attempts
                </p>

                <p className="mt-2 text-3xl font-black text-blue-700">
                  {totalAttempts}
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <History
                  size={24}
                  className="text-blue-600"
                />
              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-bold text-gray-500">
                  Average Score
                </p>

                <p className="mt-2 text-3xl font-black text-indigo-700">
                  {averagePercentage}%
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                <BarChart3
                  size={24}
                  className="text-indigo-600"
                />
              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-bold text-gray-500">
                  Best Score
                </p>

                <p className="mt-2 text-3xl font-black text-green-700">
                  {bestPercentage}%
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <Medal
                  size={24}
                  className="text-green-600"
                />
              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-bold text-gray-500">
                  Correct Answers
                </p>

                <p className="mt-2 text-3xl font-black text-orange-600">
                  {totalCorrect}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Across {totalQuestions} questions
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                <CheckCircle2
                  size={24}
                  className="text-orange-500"
                />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAIN */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        {!loaded ? (

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center">

            <Clock3
              size={42}
              className="mx-auto text-blue-500 animate-pulse"
            />

            <p className="mt-4 text-gray-500 font-semibold">
              Loading your learning history...
            </p>

          </div>

        ) : attempts.length === 0 ? (

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-16 text-center">

            <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-50 flex items-center justify-center">
              <Trophy
                size={42}
                className="text-blue-500"
              />
            </div>

            <h2 className="mt-6 text-3xl font-black text-gray-900">
              No Learning Attempts Yet
            </h2>

            <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto leading-7">
              Complete an MCQ quiz, mock test or daily quiz and
              your result will automatically appear here.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

              <Link
                href="/practice/mcq"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold transition"
              >
                <BookOpen size={19} />
                Start MCQ Quiz
              </Link>

              <Link
                href="/practice"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-7 py-3 rounded-xl font-bold transition"
              >
                Practice Center
              </Link>

            </div>

          </div>

        ) : (

          <div className="space-y-10">

            {/* ATTEMPT TYPES */}

            <section>

              <div className="mb-6">

                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  Practice Overview
                </h2>

                <p className="mt-1 text-gray-500">
                  See how you are performing across each practice mode.
                </p>

              </div>

              <div className="grid md:grid-cols-3 gap-5">

                {(Object.keys(TYPE_INFO) as AttemptType[]).map(
                  (type) => {

                    const info = TYPE_INFO[type];
                    const stats = typeStats[type];

                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFilter(
                            filter === type ? "all" : type
                          )
                        }
                        className={`text-left bg-white rounded-3xl border-2 p-6 shadow-sm hover:shadow-lg transition ${
                          filter === type
                            ? "border-blue-500"
                            : "border-gray-100"
                        }`}
                      >

                        <div className="flex items-start justify-between gap-4">

                          <div
                            className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl ${info.className}`}
                          >
                            {info.icon}
                          </div>

                          <span className="text-sm font-bold text-gray-400">
                            {filter === type
                              ? "FILTERED"
                              : "VIEW"}
                          </span>

                        </div>

                        <h3 className="mt-5 text-xl font-black text-gray-900">
                          {info.name}
                        </h3>

                        <div className="mt-4 grid grid-cols-3 gap-3">

                          <div>
                            <p className="text-xs font-bold text-gray-400">
                              Attempts
                            </p>

                            <p className="mt-1 text-xl font-black text-gray-900">
                              {stats.attempts}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-bold text-gray-400">
                              Average
                            </p>

                            <p className="mt-1 text-xl font-black text-blue-700">
                              {stats.average}%
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-bold text-gray-400">
                              Best
                            </p>

                            <p className="mt-1 text-xl font-black text-green-700">
                              {stats.best}%
                            </p>
                          </div>

                        </div>

                      </button>
                    );
                  }
                )}

              </div>

            </section>

            {/* SUBJECT PERFORMANCE */}

            {subjectStats.length > 0 && (

              <section>

                <div className="flex items-center justify-between gap-4 mb-6">

                  <div>

                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                      Subject Performance
                    </h2>

                    <p className="mt-1 text-gray-500">
                      Your best and average performance by subject.
                    </p>

                  </div>

                  <BarChart3
                    size={28}
                    className="text-blue-600 hidden sm:block"
                  />

                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                  {subjectStats.map((subject) => (

                    <div
                      key={subject.name}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
                    >

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <p className="font-black text-gray-900">
                            {subject.name}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            {subject.attempts}{" "}
                            {subject.attempts === 1
                              ? "attempt"
                              : "attempts"}
                          </p>

                        </div>

                        <div className="rounded-xl bg-blue-50 px-3 py-2">
                          <span className="font-black text-blue-700">
                            {subject.best}%
                          </span>
                        </div>

                      </div>

                      <div className="mt-5">

                        <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                          <span>Average</span>
                          <span>{subject.average}%</span>
                        </div>

                        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">

                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                            style={{
                              width: `${Math.min(
                                Math.max(subject.average, 0),
                                100
                              )}%`,
                            }}
                          />

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </section>

            )}

            {/* ATTEMPT HISTORY */}

            <section>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">

                <div>

                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                    Previous Attempts
                  </h2>

                  <p className="mt-1 text-gray-500">
                    {filter === "all"
                      ? "All practice attempts are shown below."
                      : `Showing ${TYPE_INFO[filter].name} attempts.`}
                  </p>

                </div>

                <div className="flex flex-wrap gap-2">

                  <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                      filter === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-gray-200 text-gray-700 hover:border-blue-300"
                    }`}
                  >
                    All
                  </button>

                  {(Object.keys(TYPE_INFO) as AttemptType[]).map(
                    (type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFilter(type)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                          filter === type
                            ? "bg-blue-600 text-white"
                            : "bg-white border border-gray-200 text-gray-700 hover:border-blue-300"
                        }`}
                      >
                        {TYPE_INFO[type].name}
                      </button>
                    )
                  )}

                </div>

              </div>

              {filteredAttempts.length === 0 ? (

                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">

                  <p className="text-gray-500 font-semibold">
                    No attempts found for this filter.
                  </p>

                  <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className="mt-4 text-blue-600 font-bold hover:underline"
                  >
                    Show all attempts
                  </button>

                </div>

              ) : (

                <div className="space-y-4">

                  {filteredAttempts.map((item, index) => {

                    const percentage = Number(
                      item.percentage || 0
                    );

                    const typeInfo =
                      TYPE_INFO[item.type] ??
                      TYPE_INFO.mcq;

                    return (
                      <article
                        key={`${item.id}-${index}`}
                        className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-7 hover:shadow-md transition"
                      >

                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">

                          <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-lg">
                            {index + 1}
                          </div>

                          <div className="flex-1 min-w-0">

                            <div className="flex flex-wrap items-center gap-3">

                              <h3 className="text-xl font-black text-gray-900">
                                {item.subjectName ||
                                  item.subject ||
                                  "Quiz"}
                              </h3>

                              <span
                                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-black ${typeInfo.className}`}
                              >
                                {typeInfo.icon}{" "}
                                {item.typeName ||
                                  typeInfo.name}
                              </span>

                              <span
                                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-black ${getPerformanceColor(
                                  percentage
                                )}`}
                              >
                                {getPerformanceLabel(
                                  percentage
                                )}
                              </span>

                            </div>

                            <p className="mt-2 text-sm text-gray-500">
                              {formatDate(item.completedAt)}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-4 text-sm">

                              <span className="flex items-center gap-1.5 text-gray-600">
                                <CheckCircle2
                                  size={16}
                                  className="text-green-500"
                                />
                                {item.score} correct
                              </span>

                              <span className="flex items-center gap-1.5 text-gray-600">
                                <X
                                  size={16}
                                  className="text-red-500"
                                />
                                {Math.max(
                                  Number(item.total || 0) -
                                    Number(item.score || 0),
                                  0
                                )}{" "}
                                incorrect
                              </span>

                              <span className="flex items-center gap-1.5 text-gray-600">
                                <BookOpen
                                  size={16}
                                  className="text-blue-500"
                                />
                                {item.total} questions
                              </span>

                            </div>

                          </div>

                          <div className="lg:text-right lg:min-w-[150px]">

                            <p className="text-3xl font-black text-blue-700">
                              {item.score} / {item.total}
                            </p>

                            <p className="mt-1 text-lg font-bold text-gray-600">
                              {percentage}%
                            </p>

                          </div>

                        </div>

                      </article>
                    );
                  })}

                </div>

              )}

            </section>

            {/* ACTIONS */}

            <section className="grid md:grid-cols-3 gap-4">

              <Link
                href="/practice"
                className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-center gap-2 font-bold text-gray-800 hover:border-blue-300 hover:shadow-md transition"
              >
                <BarChart3
                  size={19}
                  className="text-blue-600"
                />
                Practice Center
              </Link>

              <Link
                href="/"
                className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-center gap-2 font-bold text-gray-800 hover:border-blue-300 hover:shadow-md transition"
              >
                <Home
                  size={19}
                  className="text-blue-600"
                />
                Home
              </Link>

              <button
                type="button"
                onClick={() =>
                  setShowClearConfirm(true)
                }
                className="bg-red-50 border border-red-100 text-red-700 rounded-2xl p-5 flex items-center justify-center gap-2 font-bold hover:bg-red-100 transition"
              >
                <Trash2 size={19} />
                Clear Learning History
              </button>

            </section>

          </div>

        )}

      </section>

      {/* CLEAR CONFIRMATION */}

      {showClearConfirm && (

        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-5">

          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-7">

            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <Trash2
                size={24}
                className="text-red-600"
              />
            </div>

            <h2 className="mt-5 text-2xl font-black text-gray-900">
              Clear Learning History?
            </h2>

            <p className="mt-3 text-gray-500 leading-7">
              This will permanently remove MCQ, Mock Test and
              Daily Quiz progress saved on this browser.
              This action cannot be undone.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowClearConfirm(false)
                }
                className="flex-1 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 font-bold transition"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={clearHistory}
                className="flex-1 rounded-xl bg-red-600 hover:bg-red-700 text-white py-3 font-bold transition"
              >
                Clear History
              </button>

            </div>

          </div>

        </div>

      )}

      {/* FOOTER */}

      <footer className="mt-8">

        <div className="h-1 bg-orange-500" />
        <div className="h-1 bg-white" />
        <div className="h-1 bg-green-600" />

        <div className="bg-slate-950 text-white">

          <div className="max-w-7xl mx-auto px-6 py-10 text-center">

            <Trophy
              size={32}
              className="mx-auto text-yellow-300"
            />

            <h2 className="mt-3 text-2xl font-black">
              Keep Practicing. Keep Improving.
            </h2>

            <p className="mt-2 text-gray-400 max-w-xl mx-auto">
              Every MCQ, mock test and daily quiz is another
              opportunity to strengthen your knowledge.
            </p>

            <Link
              href="/practice"
              className="mt-5 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold transition"
            >
              Open Practice Center
              <RotateCcw size={18} />
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}
