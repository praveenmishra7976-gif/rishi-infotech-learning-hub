"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";

export default function ChapterCompletion() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="bg-yellow-50 rounded-3xl shadow-xl p-8 mt-10 text-center">

      <Trophy
        className="mx-auto text-yellow-600 mb-5"
        size={50}
      />

      <h2 className="text-3xl font-bold">
        Chapter Completion
      </h2>

      <p className="mt-4 text-gray-600">
        Mark this chapter as completed.
      </p>

      <button
        onClick={() => setCompleted(!completed)}
        className={`mt-6 px-8 py-3 rounded-xl font-bold ${
          completed
            ? "bg-green-600 text-white"
            : "bg-blue-700 text-white"
        }`}
      >
        {completed
          ? "✓ Completed"
          : "Mark as Complete"}
      </button>

    </div>
  );
}