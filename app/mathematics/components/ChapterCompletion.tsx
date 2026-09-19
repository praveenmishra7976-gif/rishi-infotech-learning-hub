"use client";

import { useState } from "react";

export default function ChapterCompletion() {

  const [completed, setCompleted] = useState(false);

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-purple-700 mb-8">
        Chapter Completion
      </h2>

      <button
        onClick={() => setCompleted(!completed)}
        className={`px-8 py-4 rounded-xl font-bold ${
          completed
            ? "bg-green-600 text-white"
            : "bg-purple-700 text-white"
        }`}
      >
        {completed ? "Completed ✓" : "Mark as Complete"}
      </button>

    </div>

  );

}