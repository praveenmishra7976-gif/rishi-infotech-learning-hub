"use client";

import { useState } from "react";
import { CheckCircle2, RotateCcw, Trophy } from "lucide-react";

const STORAGE_KEY = "chemistryQuizResults";
const PROGRESS_EVENT = "chemistryProgressUpdated";

const questions = [
  {
    question: "What is the SI unit of amount of substance?",
    options: ["Gram", "Mole", "Litre", "Kilogram"],
    answer: "Mole",
  },
  {
    question: "What is the approximate value of Avogadro constant?",
    options: [
      "6.022 × 10²³",
      "9.8 × 10²",
      "3.14 × 10⁸",
      "1.602 × 10⁻¹⁹",
    ],
    answer: "6.022 × 10²³",
  },
  {
    question: "Which equation represents an ideal gas?",
    options: ["F = ma", "V = IR", "PV = nRT", "E = mc²"],
    answer: "PV = nRT",
  },
  {
    question: "A bond formed by transfer of electrons is generally called:",
    options: [
      "Covalent bond",
      "Ionic bond",
      "Hydrogen bond",
      "Metallic bond",
    ],
    answer: "Ionic bond",
  },
  {
    question: "Which particle has a negative charge?",
    options: ["Proton", "Neutron", "Electron", "Nucleus"],
    answer: "Electron",
  },
];

type QuizResult = {
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
};

export default function Quiz() {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(selected).length;

  const score = questions.reduce(
    (total, question, index) =>
      selected[index] === question.answer ? total + 1 : total,
    0
  );

  function submitQuiz() {
    if (answered !== questions.length) return;

    const result: QuizResult = {
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100),
      completedAt: new Date().toISOString(),
    };

    try {
      const existing: QuizResult[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      const safeExisting = Array.isArray(existing) ? existing : [];

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...safeExisting, result])
      );

      window.dispatchEvent(new Event(PROGRESS_EVENT));
    } catch {
      // Keep quiz usable even if localStorage is unavailable.
    }

    setSubmitted(true);
  }

  function resetQuiz() {
    setSelected({});
    setSubmitted(false);
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <Trophy className="text-green-700" size={34} />

        <div>

          <h2 className="text-3xl font-bold text-green-700">
            Chemistry Quiz
          </h2>

          <p className="text-gray-500 mt-1">
            {answered} of {questions.length} answered
          </p>

        </div>

      </div>

      {questions.map((question, index) => (

        <div
          key={question.question}
          className="mb-8 border rounded-2xl p-6"
        >

          <h3 className="font-semibold text-lg mb-4">
            {index + 1}. {question.question}
          </h3>

          <div className="space-y-2">

            {question.options.map((option) => (

              <label
                key={option}
                className="flex items-center gap-3 rounded-xl border p-3 cursor-pointer hover:bg-green-50"
              >

                <input
                  type="radio"
                  name={`chemistry-q-${index}`}
                  value={option}
                  checked={selected[index] === option}
                  disabled={submitted}
                  onChange={() =>
                    setSelected((previous) => ({
                      ...previous,
                      [index]: option,
                    }))
                  }
                />

                <span>{option}</span>

              </label>

            ))}

          </div>

          {submitted && (

            <div
              className={`mt-4 rounded-xl p-4 ${
                selected[index] === question.answer
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >

              <p className="font-bold">
                {selected[index] === question.answer
                  ? "Correct"
                  : "Incorrect"}
              </p>

              <p className="mt-1">
                Correct answer: {question.answer}
              </p>

            </div>

          )}

        </div>

      ))}

      {!submitted ? (

        <button
          type="button"
          onClick={submitQuiz}
          disabled={answered !== questions.length}
          className="bg-green-700 hover:bg-green-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-bold"
        >
          Submit Quiz
        </button>

      ) : (

        <div className="rounded-2xl bg-green-50 p-6">

          <div className="flex items-center gap-3">

            <CheckCircle2
              className="text-green-600"
              size={28}
            />

            <h2 className="text-2xl font-bold text-green-700">
              Your Score: {score} / {questions.length}
            </h2>

          </div>

          <p className="mt-3 text-gray-700">
            Percentage:{" "}
            {Math.round((score / questions.length) * 100)}%
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Your Chemistry quiz result has been saved.
          </p>

          <button
            type="button"
            onClick={resetQuiz}
            className="mt-5 inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-xl font-bold"
          >
            <RotateCcw size={18} />
            Try Again
          </button>

        </div>

      )}

    </div>
  );
}
