"use client";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Props {
  questions: Question[];
}

export default function Quiz({ questions }: Props) {
  const [score, setScore] = useState<number | null>(null);

  function submitQuiz() {
    let total = 0;

    questions.forEach((q, index) => {
      const selected = (
        document.querySelector(
          `input[name="q${index}"]:checked`
        ) as HTMLInputElement
      )?.value;

      if (selected === q.answer) {
        total++;
      }
    });

    setScore(total);
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-blue-700 mb-8">
        Chapter Quiz
      </h2>

      {questions.map((q, index) => (

        <div
          key={index}
          className="mb-8"
        >

          <h3 className="font-bold mb-4">
            {index + 1}. {q.question}
          </h3>

          {q.options.map((option) => (

            <label
              key={option}
              className="block mb-3 cursor-pointer"
            >

              <input
                type="radio"
                name={`q${index}`}
                value={option}
                className="mr-3"
              />

              {option}

            </label>

          ))}

        </div>

      ))}

      <button
        onClick={submitQuiz}
        className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800"
      >
        Submit Quiz
      </button>

      {score !== null && (

        <div className="mt-8 bg-green-100 p-6 rounded-2xl">

          <h3 className="text-2xl font-bold text-green-700">

            Your Score

          </h3>

          <p className="text-4xl font-bold mt-3">

            {score} / {questions.length}

          </p>

        </div>

      )}

    </div>
  );
}