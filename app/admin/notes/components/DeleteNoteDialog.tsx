"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { deleteNote } from "../lib/deleteNote";

interface Props {
  noteId: string;
  onClose: () => void;
}

export default function DeleteNoteDialog({
  noteId,
  onClose,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      await deleteNote(noteId);

      alert("Note deleted successfully.");

      router.refresh();

      onClose();

    } catch (err) {
      console.error(err);

      alert("Unable to delete note.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 w-[420px]">

        <h2 className="text-2xl font-bold text-red-600">
          Delete Note
        </h2>

        <p className="text-gray-500 mt-4">
          This action cannot be undone.
          The note will be permanently removed.
        </p>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-xl"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={handleDelete}
            className="px-5 py-2 bg-red-600 text-white rounded-xl"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}