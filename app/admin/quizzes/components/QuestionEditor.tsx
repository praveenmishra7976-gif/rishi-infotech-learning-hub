"use client";

import { useState } from "react";
import QuestionList from "./QuestionList";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function QuestionEditor() {
  const [question, setQuestion] = useState("");

  const [options, setOptions] = useState([
    "",
    "",
    "",
    "",
  ]);

  const [answer, setAnswer] = useState("");

  const [questions, setQuestions] = useState<Question[]>([]);

  function updateOption(index: number, value: string) {
    const copy = [...options];
    copy[index] = value;
    setOptions(copy);
  }

  function addQuestion() {
    if (!question.trim()) {
      alert("Enter question.");
      return;
    }

    if (!answer) {
      alert("Select correct answer.");
      return;
    }

    setQuestions([
      ...questions,
      {
        question,
        options,
        answer,
      },
    ]);

    setQuestion("");

    setOptions(["", "", "", ""]);

    setAnswer("");
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">

      <h2 className="text-2xl font-bold">
        Question Builder
      </h2>

      <textarea
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        placeholder="Enter Question..."
        rows={3}
        className="w-full border rounded-xl p-4"
      />

      <div className="grid md:grid-cols-2 gap-4">

        {options.map((item, index) => (
          <input
            key={index}
            value={item}
            onChange={(e) =>
              updateOption(index, e.target.value)
            }
            placeholder={`Option ${String.fromCharCode(
              65 + index
            )}`}
            className="border rounded-xl p-4"
          />
        ))}

      </div>

      <select
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value)
        }
        className="border rounded-xl p-4"
      >
        <option value="">
          Correct Answer
        </option>

        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>

      </select>

      <button
        onClick={addQuestion}
        className="bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        + Add Question
      </button>

      <QuestionList
        questions={questions}
      />

    </div>
  );
}