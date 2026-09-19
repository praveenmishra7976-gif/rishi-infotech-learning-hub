"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { updateLessonProgress } from "../lib/updateProgress";

type Props = {
  lessonId: string;
  initiallyCompleted?: boolean;
};

export default function CompleteLessonButton({
  lessonId,
  initiallyCompleted = false,
}: Props) {
  const [completed, setCompleted] = useState(initiallyCompleted);
  const [loading, setLoading] = useState(false);

  async function handleComplete() {
    if (completed || loading) return;

    setLoading(true);

    try {
      await updateLessonProgress(
        lessonId,
        0,
        true
      );

      setCompleted(true);
    } catch (error) {
      console.error(
        "Complete lesson error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Unable to save lesson progress."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleComplete}
      disabled={completed || loading}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition ${
        completed
          ? "bg-green-100 text-green-700 cursor-default"
          : "bg-blue-600 hover:bg-blue-700 text-white"
      }`}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Saving...
        </>
      ) : completed ? (
        <>
          <CheckCircle className="w-5 h-5" />
          Lesson Completed
        </>
      ) : (
        <>
          <CheckCircle className="w-5 h-5" />
          Mark Lesson Complete
        </>
      )}
    </button>
  );
}
