
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flag,
  Trophy,
} from "lucide-react";

import { subjectQuestions } from "@/app/quiz/data/questions";
import { saveProgressAttempt } from "@/app/lib/progress/saveProgress";

const SUBJECT_NAMES: Record<string, string> = {
  computer: "Computer",
  physics: "Physics",
  chemistry: "Chemistry",
  mathematics: "Mathematics",
  sanskrit: "Sanskrit",
  gk: "General Knowledge",
};

const SUBJECT_ICONS: Record<string, string> = {
  computer: "💻",
  physics: "⚛️",
  chemistry: "🧪",
  mathematics: "📐",
  sanskrit: "📜",
  gk: "🌍",
};

const TOTAL_TIME = 10 * 60;

type Answers = Record<number, number>;

export default function MockTestPage() {
  const params = useParams();
  const router = useRouter();

  const subject = String(params.subject || "").toLowerCase();

  const questions = useMemo(
    () => subjectQuestions[subject] ?? [],
    [subject]
  );

  const subjectName = SUBJECT_NAMES[subject] ?? "Mock Test";
  const subjectIcon = SUBJECT_ICONS[subject] ?? "📝";

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [showSubmit, setShowSubmit] = useState(false);

  const submittedRef = useRef(false);

  const currentQuestion = questions[current];

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = questions.length - answeredCount;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const selectAnswer = (optionIndex: number) => {
    setAnswers((previous) => ({
      ...previous,
      [current]: optionIndex,
    }));
  };

  const goToQuestion = (questionIndex: number) => {
    setCurrent(questionIndex);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextQuestion = () => {
    setCurrent((previous) =>
      Math.min(questions.length - 1, previous + 1)
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const previousQuestion = () => {
    setCurrent((previous) => Math.max(0, previous - 1));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const submitTest = () => {
    if (submittedRef.current) {
      return;
    }

    submittedRef.current = true;

    let correct = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correct++;
      }
    });

    const incorrect = answeredCount - correct;
    const unanswered = questions.length - answeredCount;

    const percentage =
      questions.length > 0
        ? Math.round((correct / questions.length) * 100)
        : 0;

    const result = {
      subject,
      subjectName,
      score: correct,
      total: questions.length,
      percentage,
      correct,
      incorrect,
      unanswered,
      timeLimit: TOTAL_TIME,
      timeRemaining: timeLeft,
      timeUsed: TOTAL_TIME - timeLeft,
      completedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "mockTestResult",
      JSON.stringify(result)
    );

    saveProgressAttempt({
      type: "mock-test",
      typeName: "Mock Test",
      subject,
      subjectName,
      score: correct,
      total: questions.length,
      percentage,
    });

    /*
     * ------------------------------------------------------------
     * GLOBAL SUPABASE LEADERBOARD
     * ------------------------------------------------------------
     *
     * Store the percentage (0-100) so Mock Tests, MCQ Quizzes
     * and Daily Quizzes use the same scoring scale.
     *
     * The sessionStorage key prevents the same completed test
     * from being submitted again if the page is refreshed.
     */

    const leaderboardSaveKey =
      `mockTestLeaderboardSaved:${subject}-${correct}-${questions.length}`;

    const leaderboardAlreadySaved =
      sessionStorage.getItem(leaderboardSaveKey);

    if (!leaderboardAlreadySaved) {
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

    router.push("/practice/mock-tests/result");
  };

  useEffect(() => {
    if (questions.length === 0) {
      return;
    }

    if (timeLeft <= 0) {
      submitTest();
      return;
    }

    const timer = window.setTimeout(() => {
      setTimeLeft((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [timeLeft, questions.length]);

  if (!SUBJECT_NAMES[subject] || questions.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

        <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center px-6">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="text-6xl">📚</div>

            <h1 className="mt-5 text-3xl font-black text-slate-900">
              Mock Test Not Found
            </h1>

            <p className="mt-3 text-slate-500">
              The requested mock test could not be found.
            </p>

            <Link
              href="/practice/mock-tests"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              <ArrowLeft size={18} />
              Back to Mock Tests
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const progress =
    questions.length > 0
      ? ((current + 1) / questions.length) * 100
      : 0;

  const timerCritical = timeLeft <= 60;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/practice/mock-tests"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 font-bold text-slate-600 transition hover:bg-slate-100 hover:text-blue-700"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">
                Mock Tests
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="hidden text-sm font-bold text-slate-500 md:inline">
                {subjectIcon} {subjectName}
              </span>

              <div
                className={`flex items-center gap-2 rounded-xl px-4 py-2 font-black ${
                  timerCritical
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                <Clock size={19} />
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 p-6 text-white shadow-lg md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-4xl">{subjectIcon}</div>

              <h1 className="mt-3 text-3xl font-black md:text-4xl">
                {subjectName} Mock Test
              </h1>

              <p className="mt-2 text-white/80">
                {questions.length} questions • 10 minutes • One attempt
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4">
              <p className="text-sm font-bold text-white/70">
                ANSWERED
              </p>

              <p className="mt-1 text-3xl font-black">
                {answeredCount}/{questions.length}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="font-black text-slate-800">
              Question {current + 1} of {questions.length}
            </p>

            <p className="text-sm font-bold text-slate-500">
              {Math.round(progress)}% complete
            </p>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-black text-blue-700">
                  {current + 1}
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-blue-600">
                    Question {current + 1}
                  </p>

                  <h2 className="mt-2 text-xl font-black leading-8 text-slate-900 md:text-2xl">
                    {currentQuestion.question}
                  </h2>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const selected =
                    answers[current] === index;

                  return (
                    <button
                      key={`${currentQuestion.id}-${index}`}
                      type="button"
                      onClick={() => selectAnswer(index)}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition md:p-5 ${
                        selected
                          ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-black ${
                          selected
                            ? "bg-white text-blue-700"
                            : "bg-white text-slate-500"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="font-semibold">
                        {option}
                      </span>

                      {selected && (
                        <CheckCircle2
                          size={21}
                          className="ml-auto shrink-0"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  disabled={current === 0}
                  onClick={previousQuestion}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft size={18} />
                  Previous
                </button>

                {current < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                  >
                    Next Question
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSubmit(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
                  >
                    <Trophy size={18} />
                    Submit Test
                  </button>
                )}
              </div>
            </article>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <Flag className="text-blue-600" size={21} />

              <h3 className="font-black text-slate-900">
                Question Navigator
              </h3>
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Click a number to move directly to a question.
            </p>

            <div className="mt-5 grid grid-cols-5 gap-2">
              {questions.map((_, index) => {
                const answered =
                  answers[index] !== undefined;

                const active = current === index;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToQuestion(index)}
                    className={`relative flex h-11 items-center justify-center rounded-xl font-black transition ${
                      active
                        ? "bg-blue-600 text-white ring-4 ring-blue-100"
                        : answered
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Answered
                </span>

                <span className="font-black text-green-600">
                  {answeredCount}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Unanswered
                </span>

                <span className="font-black text-red-600">
                  {unansweredCount}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {showSubmit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                🏆
              </div>

              <h2 className="mt-5 text-2xl font-black text-slate-900">
                Submit Mock Test?
              </h2>

              <p className="mt-3 leading-7 text-slate-500">
                You have answered{" "}
                <strong>{answeredCount}</strong> out of{" "}
                <strong>{questions.length}</strong> questions.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setShowSubmit(false)}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Continue Test
              </button>

              <button
                type="button"
                onClick={submitTest}
                className="rounded-xl bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
