"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { subjectQuestions } from "@/app/quiz/data/questions";
import { saveProgressAttempt } from "@/app/lib/progress/saveProgress";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Home,
  Trophy,
} from "lucide-react";

const DAILY_TIME = 60;

export default function DailyQuizPage() {
  const questions = useMemo(
    () => subjectQuestions.gk ?? [],
    []
  );

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(DAILY_TIME);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  useEffect(() => {
    if (finished || questions.length === 0) {
      return;
    }

    if (time <= 0) {
      finishQuiz();
      return;
    }

    const timer = window.setInterval(() => {
      setTime((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [time, finished, questions.length]);

  function finishQuiz(finalScore = score) {
    setFinished(true);

    localStorage.setItem(
      "dailyQuizResult",
      JSON.stringify({
        score: finalScore,
        total: questions.length,
        completedAt: new Date().toISOString(),
      })
    );

    const percentage =
      questions.length > 0
        ? Math.round((finalScore / questions.length) * 100)
        : 0;

    saveProgressAttempt({
      type: "daily-quiz",
      typeName: "Daily Quiz",
      subject: "gk",
      subjectName: "General Knowledge",
      score: finalScore,
      total: questions.length,
      percentage,
    });

    /*
     * ------------------------------------------------------------
     * GLOBAL SUPABASE LEADERBOARD
     * ------------------------------------------------------------
     *
     * Store the percentage (0-100) so Daily Quiz uses the same
     * scoring scale as MCQ Quizzes and Mock Tests.
     *
     * The sessionStorage key prevents the same Daily Quiz
     * completion from being submitted repeatedly on refresh.
     */

    const leaderboardSaveKey =
      `dailyQuizLeaderboardSaved:${finalScore}-${questions.length}`;

    const leaderboardAlreadySaved =
      sessionStorage.getItem(leaderboardSaveKey);

    if (!leaderboardAlreadySaved && questions.length > 0) {
      fetch("/api/leaderboard/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score: percentage,
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
  }

  function nextQuestion() {
    if (selected === null) {
      return;
    }

    const newScore =
      selected === question.answer
        ? score + 1
        : score;

    setScore(newScore);
    setSelected(null);

    if (current >= questions.length - 1) {
      finishQuiz(newScore);
      return;
    }

    setCurrent((previous) => previous + 1);
  }

  if (questions.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
            <div className="text-6xl">📚</div>

            <h1 className="mt-5 text-3xl font-black text-slate-900">
              Daily Quiz Unavailable
            </h1>

            <p className="mt-3 text-slate-500">
              Daily quiz questions are currently unavailable.
            </p>

            <Link
              href="/practice"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
            >
              <ArrowLeft size={18} />
              Back to Practice
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <main className="min-h-screen bg-slate-50">
        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <Trophy className="mx-auto" size={55} />

            <p className="mt-5 text-sm font-black uppercase tracking-widest text-cyan-200">
              Daily Quiz Completed
            </p>

            <h1 className="mt-3 text-4xl font-black md:text-6xl">
              Great Work!
            </h1>

            <p className="mt-4 text-lg text-white/80">
              Here is your result for today's quiz.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          <div className="rounded-3xl bg-white p-8 text-center shadow-xl md:p-12">
            <p className="text-sm font-black uppercase tracking-widest text-slate-400">
              Your Score
            </p>

            <div className="mt-4 text-7xl font-black text-blue-700">
              {score}
              <span className="text-3xl text-slate-400">
                /{questions.length}
              </span>
            </div>

            <p className="mt-3 text-2xl font-black text-slate-800">
              {percentage}%
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-green-50 p-5">
                <CheckCircle2
                  className="mx-auto text-green-600"
                  size={28}
                />
                <p className="mt-2 text-2xl font-black text-green-700">
                  {score}
                </p>
                <p className="text-sm font-bold text-green-700">
                  Correct
                </p>
              </div>

              <div className="rounded-2xl bg-red-50 p-5">
                <p className="text-3xl font-black text-red-600">
                  {questions.length - score}
                </p>
                <p className="mt-2 text-sm font-bold text-red-700">
                  Incorrect
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5">
                <Clock
                  className="mx-auto text-blue-600"
                  size={28}
                />
                <p className="mt-2 text-2xl font-black text-blue-700">
                  Daily
                </p>
                <p className="text-sm font-bold text-blue-700">
                  Quiz
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/practice"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
              >
                <Home size={18} />
                Practice Center
              </Link>

              <Link
                href="/daily-challenge"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              >
                Daily Challenge
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const progress =
    ((current + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/practice"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 font-bold text-slate-600 hover:bg-slate-100"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">
                Practice Center
              </span>
            </Link>

            <div className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 font-black text-blue-700">
              <Clock size={19} />
              00:{String(time).padStart(2, "0")}
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-8 md:py-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 p-7 text-white shadow-xl md:p-9">
          <p className="text-sm font-black uppercase tracking-widest text-cyan-200">
            Practice Center
          </p>

          <h1 className="mt-3 text-4xl font-black">
            Daily Quiz
          </h1>

          <p className="mt-3 text-white/80">
            Test your General Knowledge in today's quick quiz.
          </p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex justify-between text-sm font-bold text-white/80">
            <span>
              Question {current + 1} of {questions.length}
            </span>

            <span>
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-xl md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-black text-blue-700">
              {current + 1}
            </div>

            <h2 className="text-xl font-black leading-8 text-slate-900 md:text-2xl">
              {question.question}
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {question.options.map((option, index) => {
              const selectedOption = selected === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelected(index)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left font-semibold transition ${
                    selectedOption
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-black ${
                      selectedOption
                        ? "bg-white text-blue-700"
                        : "bg-white text-slate-500"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>

                  {option}

                  {selectedOption && (
                    <CheckCircle2
                      size={20}
                      className="ml-auto"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={selected === null}
            onClick={nextQuestion}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {current === questions.length - 1
              ? "Finish Daily Quiz"
              : "Next Question"}

            <ArrowRight size={19} />
          </button>
        </article>
      </section>
    </main>
  );
}
