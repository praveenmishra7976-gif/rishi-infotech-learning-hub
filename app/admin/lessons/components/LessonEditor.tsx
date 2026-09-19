"use client";

import { useState } from "react";
import { createLesson } from "../lib/createLesson";

export default function LessonEditor({
  chapterId,
}: {
  chapterId: string;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [videoUrl, setVideoUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const [premium, setPremium] = useState(false);

  const [loading, setLoading] = useState(false);

  async function uploadVideo(file: File) {
    const form = new FormData();

    form.append("file", file);

    const res = await fetch("/api/upload/video", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(
        data.error || "Video upload failed."
      );
    }

    return data.url;
  }

  async function uploadPDF(file: File) {
    const form = new FormData();

    form.append("file", file);

    const res = await fetch("/api/upload/pdf", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(
        data.error || "PDF upload failed."
      );
    }

    return data.url;
  }

  async function handleVideo(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!e.target.files?.length) {
      return;
    }

    setLoading(true);

    try {
      const url = await uploadVideo(
        e.target.files[0]
      );

      setVideoUrl(url);
    } catch (error) {
      console.error("Video upload error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Video upload failed."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handlePDF(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!e.target.files?.length) {
      return;
    }

    setLoading(true);

    try {
      const url = await uploadPDF(
        e.target.files[0]
      );

      setPdfUrl(url);
    } catch (error) {
      console.error("PDF upload error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "PDF upload failed."
      );
    } finally {
      setLoading(false);
    }
  }

  async function saveLesson() {
    if (!chapterId) {
      alert("Chapter ID is missing.");
      return;
    }

    if (!title.trim()) {
      alert("Please enter lesson title.");
      return;
    }

    setLoading(true);

    try {
     await createLesson({
  chapter_id: chapterId,
  title: title.trim(),
  content: content.trim() || null,
  video_url: videoUrl || null,
  pdf_url: pdfUrl || null,
  lesson_order: 1,
  status: "published",
  premium,
});

      alert("Lesson Created Successfully.");

      setTitle("");
      setContent("");
      setVideoUrl("");
      setPdfUrl("");
      setPremium(false);

      location.reload();
    } catch (error) {
      console.error(
        "Create lesson error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Unable to create lesson."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">

      <h2 className="text-3xl font-bold">
        Create Lesson
      </h2>

      <input
        className="w-full border rounded-xl p-4"
        placeholder="Lesson Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        className="w-full border rounded-xl p-4"
        rows={8}
        placeholder="Lesson Notes"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <div>

        <label className="font-semibold block mb-2">
          Upload Video
        </label>

        <input
          type="file"
          accept="video/*"
          onChange={handleVideo}
          className="w-full"
          disabled={loading}
        />

      </div>

      {videoUrl && (
        <video
          controls
          className="rounded-xl w-full"
          src={videoUrl}
        />
      )}

      <div>

        <label className="font-semibold block mb-2">
          Upload PDF
        </label>

        <input
          type="file"
          accept=".pdf,application/pdf"
          onChange={handlePDF}
          className="w-full"
          disabled={loading}
        />

      </div>

      {pdfUrl && (
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 underline"
        >
          View Uploaded PDF
        </a>
      )}

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={premium}
          onChange={(e) =>
            setPremium(e.target.checked)
          }
        />

        Premium Lesson

      </label>

      <button
        type="button"
        onClick={saveLesson}
        disabled={loading}
        className="bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white px-8 py-4 rounded-xl"
      >
        {loading
          ? "Saving..."
          : "Save Lesson"}
      </button>

    </div>
  );
}