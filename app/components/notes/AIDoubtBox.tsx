"use client";

import { useState } from "react";

export default function AIDoubtBox() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setAnswer(data.error || "Something went wrong.");
      } else {
        setAnswer(data.answer);
      }
    } catch {
      setAnswer("Unable to contact AI.");
    }

    setLoading(false);
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <h2 className="text-3xl font-bold text-blue-700">
        🤖 Ask AI
      </h2>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything about this chapter..."
        className="w-full border rounded-2xl mt-6 p-4 h-40 outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button
        onClick={askAI}
        className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && (
        <div className="mt-8 bg-blue-50 rounded-2xl p-6 whitespace-pre-wrap">
          {answer}
        </div>
      )}

    </div>
  );
}