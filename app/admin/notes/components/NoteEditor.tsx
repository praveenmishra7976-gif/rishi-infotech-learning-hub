"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import RichTextEditor from "./RichTextEditor";
import SubjectSelector from "./SubjectSelector";
import CategorySelector from "./CategorySelector";
import PublishToggle from "./PublishToggle";
import PdfUploader from "./PdfUploader";
import ImageUploader from "./ImageUploader";

import { createNote } from "../lib/createNote";
import { updateNote } from "../lib/updateNote";
import type { Note } from "../lib/getNoteById";

interface Props {
  initialData?: Note;
  noteId?: string;
}

export default function NoteEditor({
  initialData,
  noteId,
}: Props) {
  const router = useRouter();

  const [title, setTitle] = useState(
    initialData?.title ?? ""
  );

  const [subject, setSubject] = useState(
    initialData?.subject ?? "Computer"
  );

  const [category, setCategory] = useState(
    initialData?.category ?? "Notes"
  );

  const [content, setContent] = useState(
    initialData?.content ?? ""
  );

  const [pdfUrl, setPdfUrl] = useState(
    initialData?.pdf_url ?? ""
  );

  const [imageUrl, setImageUrl] = useState(
    initialData?.image_url ?? ""
  );

  const [published, setPublished] = useState(
    initialData?.published ?? false
  );

  const [loading, setLoading] = useState(false);

  async function save(isPublished: boolean) {
    try {
      setLoading(true);

      const payload = {
        title,
        subject,
        category,
        content,
        pdf_url: pdfUrl,
        image_url: imageUrl,
        published: isPublished,
      };

      if (noteId) {
        await updateNote(noteId, payload);
      } else {
        await createNote(payload);
      }

      alert(
        noteId
          ? "Note Updated Successfully"
          : "Note Created Successfully"
      );

      router.push("/admin/notes");
      router.refresh();

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8">

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full border rounded-xl p-4 text-xl font-semibold"
      />

      <div className="grid md:grid-cols-2 gap-6">

        <SubjectSelector
          value={subject}
          onChange={setSubject}
        />

        <CategorySelector
          value={category}
          onChange={setCategory}
        />

      </div>

      <RichTextEditor
        value={content}
        onChange={setContent}
      />

      <div className="grid md:grid-cols-2 gap-6">

        <PdfUploader
          onUploaded={setPdfUrl}
        />

        <ImageUploader
          onUploaded={setImageUrl}
        />

      </div>

      {imageUrl && (
        <div>

          <h3 className="font-semibold mb-2">
            Current Image
          </h3>

          <img
            src={imageUrl}
            alt="Note"
            className="rounded-xl max-h-60"
          />

        </div>
      )}

      {pdfUrl && (
        <div>

          <h3 className="font-semibold mb-2">
            Current PDF
          </h3>

          <a
            href={pdfUrl}
            target="_blank"
            className="text-blue-600 underline"
          >
            Open Uploaded PDF
          </a>

        </div>
      )}

      <PublishToggle
        published={published}
        setPublished={setPublished}
      />

      <div className="flex gap-5">

        <button
          disabled={loading}
          onClick={() => save(false)}
          className="bg-gray-700 text-white px-8 py-3 rounded-xl"
        >
          {loading
            ? "Saving..."
            : "Save Draft"}
        </button>

        <button
          disabled={loading}
          onClick={() => save(true)}
          className="bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          {loading
            ? "Publishing..."
            : "Publish"}
        </button>

      </div>

    </div>
  );
}