"use client";

import { useState } from "react";

const questions = [
  {
    question: "SI unit of Force?",
    options: [
      "joule",
      "force",
      "newton",
      "pascle",
    ],
    answer: 0,
  },
  {
    question: "Newton's First Law?",
    options: [
      "equal and opposite reaction",
      "object at rest stays at rest, and an object in motion stays in motion at a constant speed and in a straight line, unless an outside force acts on it",
      "non of these",
      "All of the above",
    ],
    answer: 1,
  },
  {
    question: "Speed formula??",
    options: [
      "Speed = Distance ÷ Time",
      "P=MA",
      "f=mgh",
      "non of the above",
    ],
    answer: 1,
  },
];

export default function PhysicMCQPage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const score = selected.reduce((total, value, index) => {
    return value === questions[index].answer ? total + 1 : total;
  }, 0);

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-blue-700 text-white py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-black">
            Computer MCQ Practice
          </h1>

          <p className="mt-3 text-blue-100">
            Test your Physic knowledge.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">

        {questions.map((q, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 mb-8"
          >

            <h2 className="text-2xl font-bold mb-6">
              {index + 1}. {q.question}
            </h2>

            <div className="space-y-4">

              {q.options.map((option, i) => (

                <button
                  key={i}
                  onClick={() => {
                    const copy = [...selected];
                    copy[index] = i;
                    setSelected(copy);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition
                    ${
                      selected[index] === i
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white hover:bg-gray-100"
                    }`}
                >
                  {option}
                </button>

              ))}

            </div>

          </div>

        ))}

        {!submitted ? (

          <button
            onClick={() => setSubmitted(true)}
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold"
          >
            Submit Quiz
          </button>

        ) : (

          <div className="bg-green-600 text-white rounded-3xl p-8 mt-8">

            <h2 className="text-3xl font-black">
              Your Score
            </h2>

            <p className="text-5xl mt-4">
              {score} / {questions.length}
            </p>

          </div>

        )}

      </section>

    </main>
  );
}