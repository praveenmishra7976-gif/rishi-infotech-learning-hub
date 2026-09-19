"use client";

import { useState } from "react";
import { Bot } from "lucide-react";

export default function AIDoubtBox() {

  const [question, setQuestion] = useState("");

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <Bot className="text-purple-700" size={34} />

        <h2 className="text-3xl font-bold">
          AI Doubt Box
        </h2>

      </div>

      <textarea
        rows={5}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your Physics doubt..."
        className="w-full border rounded-xl p-4 resize-none"
      />

      <button
        className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-xl"
      >
        Ask AI
      </button>

      {question && (

        <div className="mt-8 bg-purple-50 rounded-xl p-5">

          <h3 className="font-bold">
            Demo Response
          </h3>

          <p className="mt-3 text-gray-700">
            AI integration will be connected later.
            Your question has been captured successfully.
          </p>

        </div>

      )}

    </div>

  );

}