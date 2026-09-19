import { notFound } from "next/navigation";

import { getNoteById } from "../../lib/getNoteById";
import NoteEditor from "../../components/NoteEditor";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditNotePage({
  params,
}: Props) {
  const { id } = await params;

  const note = await getNoteById(id);

  if (!note) {
    notFound();
  }

  return (
    <main className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-blue-700">
          Edit Note
        </h1>

        <p className="text-gray-500 mt-2">
          Update your study material.
        </p>

      </div>

      <NoteEditor
        initialData={note}
        noteId={id}
      />

    </main>
  );
}