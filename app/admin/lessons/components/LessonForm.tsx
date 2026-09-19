"use client";

import { useEffect, useState } from "react";
import { createLesson } from "../lib/createLesson";
import { getChapters } from "../lib/getChapters";
import { uploadVideo } from "../lib/uploadVideo";
import { uploadPdf } from "../lib/uploadPdf";

export default function LessonForm() {
  const [chapters, setChapters] = useState<any[]>([]);

  const [chapterId, setChapterId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [videoUrl, setVideoUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const [lessonOrder, setLessonOrder] = useState(1);

  const [status, setStatus] = useState("published");
  const [premium, setPremium] = useState(false);

  const [loading, setLoading] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [uploadingPdf, setUploadingPdf] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await getChapters();
        setChapters(data || []);
      } catch (error) {
        console.error("Load chapters error:", error);
      }
    }

    load();
  }, []);

  async function uploadVideoFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploadingVideo(true);

    try {
      const url = await uploadVideo(file);
      setVideoUrl(url);

      alert("Video uploaded successfully.");
    } catch (error) {
      console.error("Video upload error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to upload video."
      );
    } finally {
      setUploadingVideo(false);
    }
  }

  async function uploadPdfFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploadingPdf(true);

    try {
      const url = await uploadPdf(file);
      setPdfUrl(url);

      alert("PDF uploaded successfully.");
    } catch (error) {
      console.error("PDF upload error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to upload PDF."
      );
    } finally {
      setUploadingPdf(false);
    }
  }

  async function save(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!chapterId) {
      alert("Please select a chapter.");
      return;
    }

    if (!title.trim()) {
      alert("Please enter lesson title.");
      return;
    }

    if (lessonOrder < 1) {
      alert("Lesson order must be at least 1.");
      return;
    }

    setLoading(true);

    try {
      await createLesson({
        chapter_id: chapterId,
        title: title.trim(),
        content: content.trim() || null,
        video_url: videoUrl.trim() || null,
        pdf_url: pdfUrl.trim() || null,
        lesson_order: Number(lessonOrder),
        status,
        premium,
      });

      alert("Lesson created successfully.");

      setChapterId("");
      setTitle("");
      setContent("");
      setVideoUrl("");
      setPdfUrl("");
      setLessonOrder(1);
      setStatus("published");
      setPremium(false);

      window.location.reload();
    } catch (error) {
      console.error("Create lesson error:", error);

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
    <form
      onSubmit={save}
      className="bg-white rounded-3xl shadow-xl p-6 md:p-8 space-y-6"
    >
      {/* Header */}

      <div>
        <h2 className="text-3xl font-black text-gray-900">
          Create Lesson
        </h2>

        <p className="mt-2 text-gray-500">
          Add a lesson to an existing chapter.
        </p>
      </div>

      {/* Chapter */}

      <div>
        <label className="block font-semibold mb-2">
          Chapter
        </label>

        <select
          value={chapterId}
          onChange={(e) =>
            setChapterId(e.target.value)
          }
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">
            Select Chapter
          </option>

          {chapters.map((chapter) => (
            <option
              key={chapter.id}
              value={chapter.id}
            >
              {chapter.title}
            </option>
          ))}
        </select>
      </div>

      {/* Lesson Title */}

      <div>
        <label className="block font-semibold mb-2">
          Lesson Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Example: What is a Computer?"
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Content */}

      <div>
        <label className="block font-semibold mb-2">
          Lesson Content
        </label>

        <textarea
          rows={10}
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          placeholder="Write the lesson content here..."
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        />
      </div>

      {/* Video */}

      <div className="border border-gray-200 rounded-2xl p-5">

        <label className="block font-semibold mb-2">
          Upload Video
        </label>

        <input
          type="file"
          accept="video/*"
          onChange={uploadVideoFile}
          disabled={uploadingVideo}
          className="w-full"
        />

        {uploadingVideo && (
          <p className="mt-2 text-blue-600 font-medium">
            Uploading video...
          </p>
        )}

        {videoUrl && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-sm text-green-700 font-medium">
              Video uploaded successfully.
            </p>
          </div>
        )}

      </div>

      {/* PDF */}

      <div className="border border-gray-200 rounded-2xl p-5">

        <label className="block font-semibold mb-2">
          Upload PDF
        </label>

        <input
          type="file"
          accept=".pdf,application/pdf"
          onChange={uploadPdfFile}
          disabled={uploadingPdf}
          className="w-full"
        />

        {uploadingPdf && (
          <p className="mt-2 text-blue-600 font-medium">
            Uploading PDF...
          </p>
        )}

        {pdfUrl && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-sm text-green-700 font-medium">
              PDF uploaded successfully.
            </p>
          </div>
        )}

      </div>

      {/* Lesson Order */}

      <div>
        <label className="block font-semibold mb-2">
          Lesson Order
        </label>

        <input
          type="number"
          min="1"
          value={lessonOrder}
          onChange={(e) =>
            setLessonOrder(
              Number(e.target.value)
            )
          }
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="text-sm text-gray-500 mt-2">
          Example: 1 for the first lesson, 2 for
          the second lesson.
        </p>
      </div>

      {/* Status */}

      <div>
        <label className="block font-semibold mb-2">
          Status
        </label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="published">
            Published
          </option>

          <option value="draft">
            Draft
          </option>
        </select>
      </div>

      {/* Premium */}

      <div className="border border-gray-200 rounded-2xl p-5">

        <label className="flex items-center gap-3 cursor-pointer">

          <input
            type="checkbox"
            checked={premium}
            onChange={(e) =>
              setPremium(e.target.checked)
            }
            className="w-5 h-5"
          />

          <span className="font-semibold">
            Premium Lesson
          </span>

        </label>

        <p className="text-sm text-gray-500 mt-2">
          Enable this if the lesson should be
          available only to premium users.
        </p>

      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={
          loading ||
          uploadingVideo ||
          uploadingPdf
        }
        className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white px-8 py-4 rounded-xl font-bold transition"
      >
        {loading
          ? "Creating Lesson..."
          : "Create Lesson"}
      </button>

    </form>
  );
}