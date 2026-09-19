"use client";

import { useState } from "react";
import Timer from "./Timer";
import ResultCard from "./ResultCard";
import { submitQuiz } from "../lib/submitQuiz";
import { supabase } from "@/app/lib/supabase";

type Question = {
  id: string;
  quiz_id: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  marks: number;
};

export default function QuizPlayer({
  questions,
}: {
  questions: Question[];
  
}) {

  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState(20 * 60);

  const [answers, setAnswers] = useState<
    Record<string, string>
  >({});

  const [finished, setFinished] = useState(false);

  const [saved, setSaved] = useState(false);

  function choose(option: string) {
    setAnswers((prev) => ({
      ...prev,
      [questions[current].id]: option,
    }));
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  }

  function calculateScore() {
    let score = 0;
    let total = 0;

    questions.forEach((q) => {
      total += q.marks;

      if (answers[q.id] === q.correct_answer) {
        score += q.marks;
      }
    });

    return { score, total };
  }

  async function saveResult() {
    if (saved) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { score, total } = calculateScore();

    const percentage = (score / total) * 100;

    const passed = percentage >= 40;

    await submitQuiz({
      quizId: questions[0].quiz_id,
      userId: user.id,
      score,
      total,
      percentage,
      passed,
    });

    setSaved(true);
  }

  if (finished) {
    saveResult();

    const { score, total } = calculateScore();

    const percentage = (score / total) * 100;

    const passed = percentage >= 40;

    return (
      <ResultCard
        score={score}
        total={total}
        percentage={percentage}
        passed={passed}
      />
    );
  }

  const q = questions[current];

  return (
    <div className="space-y-8">

      <Timer
  time={time}
  setTime={setTime}
  onTimeout={() => setFinished(true)}
/>

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          Question {current + 1} / {questions.length}
        </h2>

        <p className="text-xl mb-8">
          {q.question}
        </p>

        <div className="space-y-4">

          {[
            ["A", q.option_a],
            ["B", q.option_b],
            ["C", q.option_c],
            ["D", q.option_d],
          ].map(([key, value]) => (

            <button
              key={key}
              onClick={() => choose(key)}
              className={`w-full text-left border rounded-xl p-4 transition ${
                answers[q.id] === key
                  ? "bg-blue-700 text-white"
                  : "hover:bg-blue-50"
              }`}
            >
              {key}. {value}
            </button>

          ))}

        </div>

        <button
          onClick={next}
          className="mt-8 bg-blue-700 text-white px-8 py-4 rounded-xl"
        >
          {current === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>

      </div>

    </div>
  );
}