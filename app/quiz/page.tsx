"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import QuizCard from "./components/QuizCard";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";

import {
  subjectQuestions,
  QuizQuestion,
} from "./data/questions";

const subjectNames: Record<string, string> = {
  computer: "Computer",
  physics: "Physics",
  chemistry: "Chemistry",
  mathematics: "Mathematics",
  sanskrit: "Sanskrit",
  gk: "General Knowledge",
};

const subjectIcons: Record<string, string> = {
  computer: "💻",
  physics: "⚛️",
  chemistry: "🧪",
  mathematics: "📐",
  sanskrit: "📜",
  gk: "🌍",
};

const validSubjects = [
  "computer",
  "physics",
  "chemistry",
  "mathematics",
  "sanskrit",
  "gk",
];

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
          <div className="bg-white rounded-3xl shadow-xl px-8 py-10 text-center">
            <div className="text-4xl mb-4">📝</div>

            <h1 className="text-2xl font-black text-gray-800">
              Loading Quiz...
            </h1>

            <p className="mt-2 text-gray-500">
              Please wait.
            </p>
          </div>
        </main>
      }
    >
      <QuizContent />
    </Suspense>
  );
}

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const requestedSubject = searchParams.get("subject");

  /*
   * If no subject is supplied, show the subject selection page
   * instead of automatically opening Computer.
   */
  const subject =
    requestedSubject &&
    validSubjects.includes(requestedSubject)
      ? requestedSubject
      : null;

  /*
   * ---------------------------------------------------------
   * SUBJECT SELECTION
   * ---------------------------------------------------------
   */
  if (!subject) {
    return (
      <main className="min-h-screen bg-slate-100">

        {/* HEADER */}

        <section className="bg-gradient-to-r from-blue-800 via-indigo-700 to-cyan-600 text-white">

          <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">

            <button
              type="button"
              onClick={() => router.push("/practice")}
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
            >
              ← Back to Practice
            </button>

            <div className="mt-8 max-w-4xl">

              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
                📝 Practice Center
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-black">
                Choose Your Subject
              </h1>

              <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
                Select a subject to start your MCQ quiz.
                Practice Computer, Physics, Chemistry, Mathematics,
                Sanskrit or General Knowledge.
              </p>

            </div>

          </div>

        </section>

        {/* SUBJECTS */}

        <section className="max-w-7xl mx-auto px-6 py-14">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Select a Subject
            </h2>

            <p className="mt-3 text-gray-600">
              Choose the subject you want to practice.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {validSubjects.map((item) => {

              const name = subjectNames[item];
              const icon = subjectIcons[item];

              const questionCount =
                subjectQuestions[item]?.length ?? 0;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    router.push(`/quiz?subject=${item}`)
                  }
                  className="group text-left bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition overflow-hidden"
                >

                  <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-8 flex items-center justify-between">

                    <div className="text-5xl">
                      {icon}
                    </div>

                    <div className="text-white/80 font-bold">
                      {questionCount} Questions
                    </div>

                  </div>

                  <div className="p-7">

                    <h3 className="text-2xl font-black text-gray-900">
                      {name}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      Practice {name} multiple-choice questions
                      and improve your knowledge.
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-indigo-600 font-bold">
                      Start {name} Quiz
                      <span className="group-hover:translate-x-1 transition">
                        →
                      </span>
                    </div>

                  </div>

                </button>
              );
            })}

          </div>

        </section>

        {/* FOOTER */}

        <section className="bg-gray-900 text-white">

          <div className="max-w-7xl mx-auto px-6 py-12 text-center">

            <div className="text-4xl">
              🧠
            </div>

            <h2 className="mt-4 text-3xl font-black">
              Learn • Practice • Improve
            </h2>

            <p className="mt-3 text-gray-400">
              Choose a subject and start practicing today.
            </p>

          </div>

        </section>

      </main>
    );
  }

  return (
    <QuizGame
      subject={subject}
      router={router}
    />
  );
}

/*
 * ============================================================
 * QUIZ GAME
 * ============================================================
 */

function QuizGame({
  subject,
  router,
}: {
  subject: string;
  router: ReturnType<typeof useRouter>;
}) {
  const questions: QuizQuestion[] = useMemo(() => {
    return subjectQuestions[subject] ?? [];
  }, [subject]);

  const subjectName =
    subjectNames[subject] ?? "Quiz";

  const subjectIcon =
    subjectIcons[subject] ?? "📝";

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] =
    useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  /*
   * Safety check in case a subject has no questions.
   */
  if (questions.length === 0) {
    return (
      <main className="min-h-screen bg-slate-100">

        <section className="bg-gradient-to-r from-blue-800 via-indigo-700 to-cyan-600 text-white">

          <div className="max-w-5xl mx-auto px-6 py-16">

            <button
              type="button"
              onClick={() => router.push("/quiz")}
              className="bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
            >
              ← Choose Another Subject
            </button>

            <div className="mt-10">

              <div className="text-5xl">
                {subjectIcon}
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-black">
                {subjectName}
              </h1>

              <p className="mt-4 text-lg text-white/90">
                Questions for this subject are not available yet.
              </p>

            </div>

          </div>

        </section>

        <section className="max-w-3xl mx-auto px-6 py-16">

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center">

            <div className="text-5xl">
              📚
            </div>

            <h2 className="mt-5 text-2xl font-black text-gray-900">
              No Questions Available
            </h2>

            <p className="mt-3 text-gray-600">
              There are currently no quiz questions available
              for {subjectName}.
            </p>

            <button
              type="button"
              onClick={() => router.push("/quiz")}
              className="mt-7 inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
            >
              Choose Another Subject
            </button>

          </div>

        </section>

      </main>
    );
  }

  /*
   * ----------------------------------------------------------
   * NEXT QUESTION
   * ----------------------------------------------------------
   */

  function next() {
    if (selected === null) {
      return;
    }

    let newScore = score;

    if (selected === questions[current].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    setSelected(null);
    setTime(60);

    if (current < questions.length - 1) {
      setCurrent((previous) => previous + 1);
      return;
    }

    saveQuizResult(newScore);
  }

  /*
   * ----------------------------------------------------------
   * TIMER TIMEOUT
   * ----------------------------------------------------------
   */

  function timeout() {
    let newScore = score;

    if (selected === questions[current].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    setSelected(null);
    setTime(60);

    if (current < questions.length - 1) {
      setCurrent((previous) => previous + 1);
      return;
    }

    saveQuizResult(newScore);
  }

  /*
   * ----------------------------------------------------------
   * SAVE RESULT
   * ----------------------------------------------------------
   */

  function saveQuizResult(finalScore: number) {
    localStorage.setItem(
      "quizScore",
      String(finalScore)
    );

    localStorage.setItem(
      "quizTotal",
      String(questions.length)
    );

    localStorage.setItem(
      "quizSubject",
      subject
    );

    localStorage.setItem(
      "quizSubjectName",
      subjectName
    );

    router.push("/quiz/result");
  }

  /*
   * ----------------------------------------------------------
   * RESTART
   * ----------------------------------------------------------
   */

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setTime(60);
  }

  /*
   * ----------------------------------------------------------
   * QUIZ UI
   * ----------------------------------------------------------
   */

  return (
    <main className="min-h-screen bg-slate-100">

      {/* HEADER */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white py-14">

        <div className="max-w-5xl mx-auto px-6">

          <button
            type="button"
            onClick={() => router.push("/quiz")}
            className="mb-6 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            ← Change Subject
          </button>

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              {subjectIcon}
            </div>

            <div>

              <h1 className="text-4xl md:text-5xl font-black">
                {subjectName} MCQ Quiz
              </h1>

              <p className="mt-2 text-lg text-white/90">
                Test your {subjectName} knowledge.
              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-3 mt-6">

            <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl font-bold">
              📝 {questions.length} Questions
            </span>

            <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl font-bold">
              ⏱️ 1 Minute / Question
            </span>

            <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl font-bold">
              🎯 Score: {score}
            </span>

          </div>

        </div>

      </section>

      {/* QUIZ */}

      <section className="max-w-5xl mx-auto px-6 py-12">

        <ProgressBar
          current={current}
          total={questions.length}
        />

        <div className="my-8">

          <Timer
            time={time}
            setTime={setTime}
            onTimeout={timeout}
          />

        </div>

        <QuizCard
          question={questions[current].question}
          options={questions[current].options}
          selected={selected}
          onSelect={setSelected}
        />

        <button
          type="button"
          onClick={next}
          disabled={selected === null}
          className={`w-full mt-8 py-4 rounded-2xl text-white text-lg font-bold transition ${
            selected === null
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {current === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>

        <button
          type="button"
          onClick={restart}
          className="w-full mt-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-700 font-bold hover:bg-gray-50 transition"
        >
          Restart Test
        </button>

      </section>

    </main>
  );
}