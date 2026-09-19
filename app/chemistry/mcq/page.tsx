"use client";

import { useState } from "react";
import {
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";

const questions = [
  {
    question: "What is the pH of pure water at room temperature?",
    options: [
      "8",
      "9",
      "7",
      "3",
    ],
    answer: 2,
  },
  {
    question: "What is the atomic number of Oxygen?",
    options: [
      "9",
      "6",
      "8",
      "3",
    ],
    answer: 2,
  },
  {
    question: "What is the chemical formula of water?",
    options: [
      "H₂O",
      "CO₂",
      "C₂H₄",
      "None of the above",
    ],
    answer: 0,
  },
];

export default function ChemistryMCQPage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = selected.filter(
    (value) => value !== undefined
  ).length;

  const score = questions.reduce((total, question, index) => {
    return selected[index] === question.answer
      ? total + 1
      : total;
  }, 0);

  const handleSelect = (
    questionIndex: number,
    optionIndex: number
  ) => {
    if (submitted) return;

    setSelected((current) => {
      const copy = [...current];
      copy[questionIndex] = optionIndex;
      return copy;
    });
  };

  const handleSubmit = () => {
    if (answeredCount !== questions.length) {
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected([]);
    setSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-18">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
              <Trophy size={32} />
            </div>

            <div>
              <div className="text-sm font-bold text-blue-100">
                CHEMISTRY PRACTICE
              </div>

              <h1 className="mt-2 text-4xl md:text-5xl font-black">
                Chemistry MCQ Practice
              </h1>

              <p className="mt-3 text-blue-100 text-lg">
                Test your Chemistry knowledge and improve your score.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* QUIZ */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">

        <div className="mb-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <p className="text-sm font-bold text-gray-500">
                PROGRESS
              </p>

              <p className="mt-1 text-xl font-black text-gray-900">
                {answeredCount} / {questions.length} Questions Answered
              </p>
            </div>

            <div className="h-3 w-full sm:w-64 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all"
                style={{
                  width: `${
                    (answeredCount / questions.length) * 100
                  }%`,
                }}
              />
            </div>

          </div>

        </div>

        <div className="space-y-7">

          {questions.map((question, index) => {

            const selectedAnswer = selected[index];
            const isCorrect =
              submitted &&
              selectedAnswer === question.answer;

            const isWrong =
              submitted &&
              selectedAnswer !== undefined &&
              selectedAnswer !== question.answer;

            return (
              <article
                key={question.question}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-8"
              >

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-relaxed">
                    {question.question}
                  </h2>

                </div>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">

                  {question.options.map((option, optionIndex) => {

                    const isSelected =
                      selectedAnswer === optionIndex;

                    const isCorrectOption =
                      submitted &&
                      optionIndex === question.answer;

                    const isWrongSelected =
                      submitted &&
                      isSelected &&
                      optionIndex !== question.answer;

                    let classes =
                      "w-full text-left p-4 rounded-2xl border transition font-semibold ";

                    if (isCorrectOption) {
                      classes +=
                        "bg-green-50 border-green-400 text-green-800";
                    } else if (isWrongSelected) {
                      classes +=
                        "bg-red-50 border-red-400 text-red-800";
                    } else if (isSelected) {
                      classes +=
                        "bg-blue-600 border-blue-600 text-white";
                    } else {
                      classes +=
                        "bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300";
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={submitted}
                        onClick={() =>
                          handleSelect(index, optionIndex)
                        }
                        className={classes}
                      >

                        <span className="font-black mr-2">
                          {String.fromCharCode(
                            65 + optionIndex
                          )}
                          .
                        </span>

                        {option}

                      </button>
                    );
                  })}

                </div>

                {submitted && (
                  <div
                    className={`mt-6 rounded-2xl p-5 border ${
                      isCorrect
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                    }`}
                  >

                    <div className="flex items-center gap-2">

                      {isCorrect ? (
                        <CheckCircle2
                          className="text-green-600"
                          size={22}
                        />
                      ) : (
                        <XCircle
                          className="text-red-600"
                          size={22}
                        />
                      )}

                      <p
                        className={`font-black ${
                          isCorrect
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {isCorrect ? "Correct!" : "Review Answer"}
                      </p>

                    </div>

                    <p className="mt-2 text-gray-700">
                      Correct answer:{" "}
                      <span className="font-black">
                        {question.options[question.answer]}
                      </span>
                    </p>

                  </div>
                )}

              </article>
            );
          })}

        </div>

        {/* ACTION */}
        <div className="mt-10">

          {!submitted ? (
            <div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={answeredCount !== questions.length}
                className={`px-8 py-4 rounded-xl font-black transition ${
                  answeredCount === questions.length
                    ? "bg-blue-700 hover:bg-blue-800 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Submit Quiz
              </button>

              {answeredCount !== questions.length && (
                <p className="mt-3 text-sm text-gray-500">
                  Answer all questions before submitting.
                </p>
              )}

            </div>
          ) : (
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-8 md:p-10">

              <p className="text-sm font-bold text-green-100">
                QUIZ COMPLETE
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-black">
                Your Score
              </h2>

              <p className="mt-4 text-5xl font-black">
                {score} / {questions.length}
              </p>

              <p className="mt-3 text-green-100 text-lg">
                You scored{" "}
                {Math.round(
                  (score / questions.length) * 100
                )}
                %.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-7 inline-flex items-center gap-2 bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl font-black transition"
              >
                <RotateCcw size={18} />
                Try Again
              </button>

            </div>
          )}

        </div>

      </section>

    </main>
  );
}