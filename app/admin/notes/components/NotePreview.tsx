import type { Note } from "../lib/getNoteById";

interface Props {
  note: Note;
}

export default function NotePreview({
  note,
}: Props) {

  return (

    <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8">

      <div>

        <h1 className="text-5xl font-bold">

          {note.title}

        </h1>

        <div className="flex gap-3 mt-6">

          <span className="bg-blue-700 text-white px-4 py-2 rounded-full">

            {note.subject}

          </span>

          <span className="bg-green-600 text-white px-4 py-2 rounded-full">

            {note.category}

          </span>

          <span
            className={`px-4 py-2 rounded-full text-white ${
              note.published
                ? "bg-green-700"
                : "bg-yellow-500"
            }`}
          >
            {note.published
              ? "Published"
              : "Draft"}
          </span>

        </div>

      </div>

      {note.image_url && (

        <img
          src={note.image_url}
          alt={note.title}
          className="rounded-2xl w-full"
        />

      )}

      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: note.content,
        }}
      />

      {note.pdf_url && (

        <div>

          <h2 className="text-2xl font-bold mb-4">

            PDF Attachment

          </h2>

          <a
            href={note.pdf_url}
            target="_blank"
            className="text-blue-700 underline"
          >
            Open PDF
          </a>

        </div>

      )}

    </div>

  );

}