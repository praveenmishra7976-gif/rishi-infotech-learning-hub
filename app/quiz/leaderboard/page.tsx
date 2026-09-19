
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Flame,
  Home,
  Medal,
  Target,
  Trophy,
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

const TYPE_INFO: Record<
  AttemptType,
  {
    name: string;
    icon: string;
  }
> = {
  mcq: {
    name: "MCQ Quiz",
    icon: "📝",
  },
  "mock-test": {
    name: "Mock Test",
    icon: "🎯",
  },
  "daily-quiz": {
    name: "Daily Quiz",
    icon: "🔥",
  },
};

export default function LeaderboardPage() {
  const [attempts, setAttempts] = useState<ProgressAttempt[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("learningProgress");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setAttempts(parsed);
        }
      }
    } catch (error) {
      console.error(
        "Failed to load learning performance:",
        error
      );
      setAttempts([]);
    }

    setLoaded(true);
  }, []);

  const totalAttempts = attempts.length;

  const averagePercentage =
    totalAttempts > 0
      ? Math.round(
          attempts.reduce(
            (sum, attempt) =>
              sum + Number(attempt.percentage || 0),
            0
          ) / totalAttempts
        )
      : 0;

  const bestPercentage =
    totalAttempts > 0
      ? Math.max(
          ...attempts.map((attempt) =>
            Number(attempt.percentage || 0)
          )
        )
      : 0;

  const totalQuestions = attempts.reduce(
    (sum, attempt) =>
      sum + Number(attempt.total || 0),
    0
  );

  const totalCorrect = attempts.reduce(
    (sum, attempt) =>
      sum + Number(attempt.score || 0),
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

    (Object.keys(stats) as AttemptType[]).forEach(
      (type) => {
        if (stats[type].attempts > 0) {
          stats[type].average = Math.round(
            stats[type].average /
              stats[type].attempts
          );
        }
      }
    );

    return stats;
  }, [attempts]);

  const subjectStats = useMemo(() => {
    const stats: Record<
      string,
      {
        name: string;
        attempts: number;
        average: number;
        best: number;
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
          average: 0,
          best: 0,
        };
      }

      stats[key].attempts += 1;

      stats[key].average += Number(
        attempt.percentage || 0
      );

      stats[key].best = Math.max(
        stats[key].best,
        Number(attempt.percentage || 0)
      );
    });

    return Object.values(stats)
      .map((item) => ({
        ...item,
        average:
          item.attempts > 0
            ? Math.round(
                item.average / item.attempts
              )
            : 0,
      }))
      .sort((a, b) => b.average - a.average);
  }, [attempts]);

  function getScoreColor(percentage: number) {
    if (percentage >= 90) {
      return "text-green-700 bg-green-100";
    }

    if (percentage >= 75) {
      return "text-blue-700 bg-blue-100";
    }

    if (percentage >= 60) {
      return "text-orange-700 bg-orange-100";
    }

    return "text-red-700 bg-red-100";
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* TRICOLOUR STRIP */}

      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      {/* HERO */}

      <section className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

          <Link
            href="/practice"
            className="inline-flex items-center gap-2 rounded-xl bg-white/15 border border-white/20 px-4 py-2 font-semibold hover:bg-white/25 transition"
          >
            <ArrowLeft size={18} />
            Back to Practice Center
          </Link>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold">
                <Trophy size={16} />
                Student Performance
              </div>

              <h1 className="mt-5 text-4xl md:text-6xl font-black">
                Learning Leaderboard
              </h1>

              <p className="mt-4 text-orange-50 text-lg md:text-xl max-w-3xl leading-8">
                Review your learning performance across MCQ quizzes,
                mock tests and daily quizzes.
              </p>

            </div>

            <div className="hidden md:flex w-28 h-28 rounded-3xl bg-white/15 border border-white/20 items-center justify-center">
              <Trophy
                size={60}
                className="text-yellow-200"
              />
            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">

            <p className="text-sm font-bold text-gray-500">
              Total Attempts
            </p>

            <div className="mt-3 flex items-center justify-between">

              <p className="text-3xl font-black text-blue-700">
                {totalAttempts}
              </p>

              <Target
                size={28}
                className="text-blue-600"
              />

            </div>

          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">

            <p className="text-sm font-bold text-gray-500">
              Average Score
            </p>

            <div className="mt-3 flex items-center justify-between">

              <p className="text-3xl font-black text-indigo-700">
                {averagePercentage}%
              </p>

              <BarChart3
                size={28}
                className="text-indigo-600"
              />

            </div>

          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">

            <p className="text-sm font-bold text-gray-500">
              Best Score
            </p>

            <div className="mt-3 flex items-center justify-between">

              <p className="text-3xl font-black text-green-700">
                {bestPercentage}%
              </p>

              <Medal
                size={28}
                className="text-green-600"
              />

            </div>

          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">

            <p className="text-sm font-bold text-gray-500">
              Correct Answers
            </p>

            <div className="mt-3 flex items-center justify-between">

              <div>

                <p className="text-3xl font-black text-orange-600">
                  {totalCorrect}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  of {totalQuestions} questions
                </p>

              </div>

              <CheckCircle2
                size={28}
                className="text-orange-500"
              />

            </div>

          </div>

        </div>

      </section>

      {/* MAIN */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        {!loaded ? (

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center">

            <Trophy
              size={44}
              className="mx-auto text-orange-500 animate-pulse"
            />

            <p className="mt-4 text-gray-500 font-semibold">
              Loading your performance...
            </p>

          </div>

        ) : attempts.length === 0 ? (

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-16 text-center">

            <div className="w-20 h-20 mx-auto rounded-3xl bg-orange-50 flex items-center justify-center">
              <Trophy
                size={44}
                className="text-orange-500"
              />
            </div>

            <h2 className="mt-6 text-3xl font-black text-gray-900">
              Your Performance Starts Here
            </h2>

            <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto leading-7">
              Complete a quiz, mock test or daily quiz.
              Your performance statistics will appear here automatically.
            </p>

            <Link
              href="/practice"
              className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold transition"
            >
              Start Practicing
            </Link>

          </div>

        ) : (

          <div className="space-y-10">

            {/* PRACTICE MODE PERFORMANCE */}

            <section>

              <div className="mb-6">

                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  Practice Mode Performance
                </h2>

                <p className="mt-1 text-gray-500">
                  Your performance across each learning activity.
                </p>

              </div>

              <div className="grid md:grid-cols-3 gap-5">

                {(Object.keys(TYPE_INFO) as AttemptType[]).map(
                  (type) => {

                    const info = TYPE_INFO[type];
                    const stats = typeStats[type];

                    return (
                      <div
                        key={type}
                        className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
                      >

                        <div className="flex items-center justify-between">

                          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">
                            {info.icon}
                          </div>

                          <div className="text-right">

                            <p className="text-xs font-bold text-gray-400 uppercase">
                              Attempts
                            </p>

                            <p className="text-2xl font-black text-gray-900">
                              {stats.attempts}
                            </p>

                          </div>

                        </div>

                        <h3 className="mt-5 text-xl font-black text-gray-900">
                          {info.name}
                        </h3>

                        <div className="mt-5 grid grid-cols-2 gap-4">

                          <div className="rounded-2xl bg-blue-50 p-4">

                            <p className="text-xs font-bold text-blue-600">
                              Average
                            </p>

                            <p className="mt-1 text-2xl font-black text-blue-700">
                              {stats.average}%
                            </p>

                          </div>

                          <div className="rounded-2xl bg-green-50 p-4">

                            <p className="text-xs font-bold text-green-600">
                              Best
                            </p>

                            <p className="mt-1 text-2xl font-black text-green-700">
                              {stats.best}%
                            </p>

                          </div>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </section>

            {/* SUBJECT PERFORMANCE */}

            {subjectStats.length > 0 && (

              <section>

                <div className="flex items-center justify-between mb-6">

                  <div>

                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                      Subject Performance
                    </h2>

                    <p className="mt-1 text-gray-500">
                      Average performance across your subjects.
                    </p>

                  </div>

                  <BookOpen
                    size={30}
                    className="text-blue-600 hidden sm:block"
                  />

                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                  {subjectStats.map((subject) => (

                    <div
                      key={subject.name}
                      className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <h3 className="font-black text-gray-900 text-lg">
                            {subject.name}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            {subject.attempts}{" "}
                            {subject.attempts === 1
                              ? "attempt"
                              : "attempts"}
                          </p>

                        </div>

                        <div
                          className={`rounded-xl px-3 py-2 font-black ${getScoreColor(
                            subject.average
                          )}`}
                        >
                          {subject.average}%
                        </div>

                      </div>

                      <div className="mt-5">

                        <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                          <span>Average Score</span>
                          <span>
                            {subject.average}%
                          </span>
                        </div>

                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

                          <div
                            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                            style={{
                              width: `${Math.min(
                                Math.max(
                                  subject.average,
                                  0
                                ),
                                100
                              )}%`,
                            }}
                          />

                        </div>

                        <div className="mt-3 flex justify-between text-xs font-bold text-gray-400">

                          <span>
                            Best: {subject.best}%
                          </span>

                          <span>
                            {subject.attempts} attempts
                          </span>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </section>

            )}

            {/* RECENT RESULTS */}

            <section>

              <div className="mb-6">

                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  Recent Performance
                </h2>

                <p className="mt-1 text-gray-500">
                  Your latest completed learning activities.
                </p>

              </div>

              <div className="space-y-4">

                {attempts.slice(0, 10).map(
                  (attempt, index) => {

                    const percentage = Number(
                      attempt.percentage || 0
                    );

                    const info =
                      TYPE_INFO[attempt.type];

                    return (
                      <article
                        key={attempt.id}
                        className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 md:p-6"
                      >

                        <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                          <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center font-black text-blue-700">
                            {index + 1}
                          </div>

                          <div className="flex-1">

                            <div className="flex flex-wrap items-center gap-2">

                              <h3 className="font-black text-gray-900 text-lg">
                                {attempt.subjectName ||
                                  attempt.subject ||
                                  "Quiz"}
                              </h3>

                              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-black text-gray-700">
                                {info?.icon}{" "}
                                {attempt.typeName}
                              </span>

                            </div>

                            <p className="mt-1 text-sm text-gray-500">
                              {new Date(
                                attempt.completedAt
                              ).toLocaleString()}
                            </p>

                          </div>

                          <div className="text-left sm:text-right">

                            <p className="text-2xl font-black text-blue-700">
                              {attempt.score} /{" "}
                              {attempt.total}
                            </p>

                            <p
                              className={`mt-1 inline-block rounded-full px-3 py-1 text-sm font-black ${getScoreColor(
                                percentage
                              )}`}
                            >
                              {percentage}%
                            </p>

                          </div>

                        </div>

                      </article>
                    );
                  }
                )}

              </div>

            </section>

            {/* ACTIONS */}

            <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

              <Link
                href="/practice"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-5 flex items-center justify-center gap-2 font-bold transition"
              >
                <Target size={19} />
                Practice Center
              </Link>

              <Link
                href="/quiz/history"
                className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md text-gray-800 rounded-2xl p-5 flex items-center justify-center gap-2 font-bold transition"
              >
                <BarChart3
                  size={19}
                  className="text-blue-600"
                />
                Full Learning History
              </Link>

              <Link
                href="/"
                className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md text-gray-800 rounded-2xl p-5 flex items-center justify-center gap-2 font-bold transition"
              >
                <Home
                  size={19}
                  className="text-blue-600"
                />
                Home
              </Link>

            </section>

          </div>

        )}

      </section>

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
              Keep Learning. Keep Improving.
            </h2>

            <p className="mt-2 text-gray-400 max-w-xl mx-auto">
              Consistent practice helps you understand concepts
              and strengthen your knowledge.
            </p>

            <Link
              href="/practice"
              className="mt-5 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold transition"
            >
              Start Practicing
              <Flame size={18} />
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}
