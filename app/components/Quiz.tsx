"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type QuizProps = {
  title: string;
  questions: Question[];
};

export default function Quiz({ title, questions }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const handleAnswer = () => {
    if (!selected) {
      alert("Please select an answer.");
      return;
    }

    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected("");
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <h2 className="text-4xl font-bold text-green-600">
          Quiz Completed 🎉
        </h2>

        <p className="text-2xl mt-6">
          Your Score
        </p>

        <h1 className="text-6xl font-bold text-blue-700 mt-3">
          {score} / {questions.length}
        </h1>

        <button
          onClick={restartQuiz}
          className="mt-8 bg-blue-700 text-white px-8 py-4 rounded-xl"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-blue-700">
        {title}
      </h2>

      <p className="mt-6 text-xl font-semibold">
        Question {current + 1} of {questions.length}
      </p>

      <h3 className="text-2xl mt-6">
        {questions[current].question}
      </h3>

      <div className="mt-8 space-y-4">

        {questions[current].options.map((option) => (
          <label
            key={option}
            className="block border rounded-xl p-4 cursor-pointer hover:bg-blue-50"
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option)}
              className="mr-3"
            />

            {option}

          </label>
        ))}

      </div>

      <button
        onClick={handleAnswer}
        className="mt-8 bg-blue-700 text-white px-8 py-4 rounded-xl"
      >
        Next Question
      </button>

    </div>
  );
}