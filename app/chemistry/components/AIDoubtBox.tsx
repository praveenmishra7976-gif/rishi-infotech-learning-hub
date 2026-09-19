"use client";

import { useState } from "react";
import { Bot, CheckCircle2 } from "lucide-react";

export default function AIDoubtBox() {
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");

  function handleSubmit() {
    const trimmed = question.trim();

    if (!trimmed) return;

    setSubmittedQuestion(trimmed);
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
          <Bot className="text-purple-700" size={28} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Chemistry Doubt Box
          </h2>

          <p className="text-gray-500 mt-1">
            Write down a Chemistry question you want to understand.
          </p>
        </div>
      </div>

      <textarea
        rows={5}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your Chemistry doubt..."
        className="w-full border border-gray-200 rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!question.trim()}
        className="mt-6 bg-purple-700 hover:bg-purple-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-bold transition"
      >
        Save Doubt
      </button>

      {submittedQuestion && (
        <div className="mt-8 bg-purple-50 border border-purple-100 rounded-2xl p-5">

          <div className="flex items-center gap-2">
            <CheckCircle2
              className="text-purple-700"
              size={22}
            />

            <h3 className="font-bold text-purple-800">
              Doubt Captured
            </h3>
          </div>

          <p className="mt-3 text-gray-700 leading-7">
            {submittedQuestion}
          </p>

          <p className="mt-4 text-sm text-gray-500">
            AI answer generation is not connected yet. Your doubt has been
            captured in this page session.
          </p>

        </div>
      )}

    </div>
  );
}
