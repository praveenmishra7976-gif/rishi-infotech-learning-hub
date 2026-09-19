"use client";

import { Brain, CheckCircle } from "lucide-react";

const questions = [
  {
    question: "What is the value of π (Pi)?",
    options: ["3.14", "2.14", "4.14", "5.14"],
    answer: "3.14",
  },
  {
    question: "What is the formula of Area of Circle?",
    options: ["πr²", "2πr", "r²", "πd"],
    answer: "πr²",
  },
  {
    question: "sin²θ + cos²θ = ?",
    options: ["0", "1", "2", "π"],
    answer: "1",
  },
  {
    question: "Derivative of x² is",
    options: ["2x", "x", "x²", "1"],
    answer: "2x",
  },
  {
    question: "The sum of angles of a triangle is",
    options: ["180°", "90°", "270°", "360°"],
    answer: "180°",
  },
  {
    question: "Pythagoras Theorem is",
    options: [
      "a²+b²=c²",
      "a+b=c",
      "a²-b²=c²",
      "ab=c",
    ],
    answer: "a²+b²=c²",
  },
  {
    question: "What is √144 ?",
    options: ["10", "11", "12", "14"],
    answer: "12",
  },
  {
    question: "2 + 3 × 4 = ?",
    options: ["20", "14", "24", "18"],
    answer: "14",
  },
];

export default function MathematicsMCQPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-blue-700 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <Brain size={48} />

            <div>

              <h1 className="text-5xl font-black">
                Mathematics MCQ Practice
              </h1>

              <p className="mt-2 text-blue-100">
                Practice important Mathematics multiple choice questions.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="space-y-8">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-2xl font-bold mb-6">

                Q{index + 1}. {q.question}

              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                {q.options.map((option, i) => (

                  <button
                    key={i}
                    className="border rounded-xl p-4 hover:bg-blue-50 transition text-left"
                  >
                    {option}
                  </button>

                ))}

              </div>

              <div className="mt-6 flex items-center gap-3 text-green-600 font-semibold">

                <CheckCircle size={22} />

                Correct Answer: {q.answer}

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}