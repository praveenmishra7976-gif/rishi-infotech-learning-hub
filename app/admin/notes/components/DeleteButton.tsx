"use client";

import { useState } from "react";

import DeleteNoteDialog from "./DeleteNoteDialog";

interface Props {
  noteId: string;
}

export default function DeleteButton({
  noteId,
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
        <DeleteNoteDialog
          noteId={noteId}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}