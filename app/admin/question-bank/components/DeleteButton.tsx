"use client";

import { useState } from "react";

import DeleteQuestionDialog from "./DeleteQuestionDialog";

interface Props {
  questionId: string;
}

export default function DeleteButton({
  questionId,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-red-600 font-semibold"
      >
        Delete
      </button>

      {open && (
        <DeleteQuestionDialog
          questionId={questionId}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}