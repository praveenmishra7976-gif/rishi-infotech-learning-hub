"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

interface Props {
  questionId: string;
  onClose: () => void;
}

export default function DeleteQuestionDialog({
  questionId,
  onClose,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);

    const { error } = await supabase
      .from("quiz_questions")
      .delete()
      .eq("id", questionId);

    setLoading(false);

    if (error) {
      console.error("Failed to delete question:", error);
      return;
    }

    onClose();
    window.location.reload();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-900">
          Delete Question?
        </h2>

        <p className="mt-3 text-gray-600">
          Are you sure you want to delete this question? This action cannot
          be undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border px-5 py-3 font-semibold text-gray-700"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
