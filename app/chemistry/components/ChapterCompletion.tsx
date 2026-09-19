"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Trophy } from "lucide-react";

const STORAGE_KEY = "chemistryCompletedChapters";
const PROGRESS_EVENT = "chemistryProgressUpdated";

type Props = {
  slug: string;
};

export default function ChapterCompletion({ slug }: Props) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    try {
      const completedChapters: string[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      setCompleted(completedChapters.includes(slug));
    } catch {
      setCompleted(false);
    }
  }, [slug]);

  function toggleCompletion() {
    try {
      const completedChapters: string[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      let updated: string[];

      if (completedChapters.includes(slug)) {
        updated = completedChapters.filter(
          (item) => item !== slug
        );
      } else {
        updated = [...completedChapters, slug];
      }

      const nextCompleted = updated.includes(slug);

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      setCompleted(nextCompleted);

      window.dispatchEvent(
        new Event(PROGRESS_EVENT)
      );
    } catch {
      setCompleted(false);
    }
  }

  return (
    <div
      className={`rounded-3xl shadow-xl p-8 mt-10 text-center border ${
        completed
          ? "bg-green-50 border-green-200"
          : "bg-yellow-50 border-yellow-100"
      }`}
    >
      {completed ? (
        <CheckCircle2
          className="mx-auto text-green-600 mb-5"
          size={50}
        />
      ) : (
        <Trophy
          className="mx-auto text-yellow-600 mb-5"
          size={50}
        />
      )}

      <h2 className="text-3xl font-bold text-gray-900">
        Chapter Completion
      </h2>

      <p className="mt-4 text-gray-600">
        {completed
          ? "You have completed this Chemistry chapter."
          : "Mark this Chemistry chapter as completed when you finish studying it."}
      </p>

      <button
        type="button"
        onClick={toggleCompletion}
        className={`mt-6 px-8 py-3 rounded-xl font-bold transition ${
          completed
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-blue-700 hover:bg-blue-800 text-white"
        }`}
      >
        {completed ? "✓ Completed" : "Mark as Complete"}
      </button>
    </div>
  );
}
