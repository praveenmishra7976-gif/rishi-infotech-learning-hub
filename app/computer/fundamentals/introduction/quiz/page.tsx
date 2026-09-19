"use client";

import { useState } from "react";

import { introductionQuiz } from "@/app/data/quiz/introduction";

import QuizCard from "@/app/components/quiz/QuizCard";
import QuizResult from "@/app/components/quiz/QuizResult";
import QuizTimer from "@/app/components/quiz/QuizTimer";
import QuizProgress from "@/app/components/quiz/QuizProgress";

export default function IntroductionQuizPage() {
  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState<string[]>(
    Array(introductionQuiz.length).fill("")
  );

  const [showAnswer, setShowAnswer] = useState(false);

  const [finished, setFinished] = useState(false);

  const quiz = introductionQuiz[current];

  function selectAnswer(option: string) {
    if (showAnswer) return;

    const updated = [...answers];
    updated[current] = option;
    setAnswers(updated);
  }

  function nextQuestion() {
    setShowAnswer(false);

    if (current < introductionQuiz.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  }

  function previousQuestion() {
    setShowAnswer(false);

    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  }

  function retryQuiz() {
    setAnswers(Array(introductionQuiz.length).fill(""));
    setCurrent(0);
    setShowAnswer(false);
    setFinished(false);
  }

  const score = introductionQuiz.filter(
    (q, index) => answers[index] === q.answer
  ).length;

  if (finished) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <QuizResult
            score={score}
            total={introductionQuiz.length}
            onRetry={retryQuiz}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-6xl mx-auto px-6 py-14">

          <h1 className="text-5xl font-bold">
            Introduction Quiz
          </h1>

          <p className="mt-3 text-blue-100">
            Computer Fundamentals
          </p>

        </div>

      </section>

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <QuizProgress
            current={current}
            total={introductionQuiz.length}
          />

          <QuizTimer
            initialMinutes={20}
            onTimeUp={() => setFinished(true)}
          />

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex justify-between">

          <div>

            Question

            <span className="ml-2 font-bold">
              {current + 1}
            </span>

            /

            <span className="ml-2 font-bold">
              {introductionQuiz.length}
            </span>

          </div>

          <div>

            Score

            <span className="ml-2 text-green-600 font-bold">
              {score}
            </span>

          </div>

        </div>

        <QuizCard
          quiz={quiz}
          selected={answers[current]}
          showAnswer={showAnswer}
          onSelect={selectAnswer}
        />

        <div className="flex justify-between mt-10">

          <button
            onClick={previousQuestion}
            disabled={current === 0}
            className="bg-gray-300 hover:bg-gray-400 px-6 py-3 rounded-xl disabled:opacity-40 transition"
          >
            Previous
          </button>

          {!showAnswer ? (

            <button
              disabled={!answers[current]}
              onClick={() => setShowAnswer(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl disabled:opacity-40 transition"
            >
              Check Answer
            </button>

          ) : current === introductionQuiz.length - 1 ? (

            <button
              onClick={() => setFinished(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl transition"
            >
              Finish Quiz
            </button>

          ) : (

            <button
              onClick={nextQuestion}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl transition"
            >
              Next Question
            </button>

          )}

        </div>

      </div>

    </main>
  );
}





















































































































333333333333333333