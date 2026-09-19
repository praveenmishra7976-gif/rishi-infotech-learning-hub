"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCourse } from "../lib/createCourse";

export default function CourseForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim()) {
      alert("Please enter course title.");
      return;
    }

    if (!subject) {
      alert("Please select a subject.");
      return;
    }

    setLoading(true);

    try {
      await createCourse({
        title: title.trim(),
        description: description.trim(),
        thumbnail: thumbnail.trim(),
        subject,
      });

      alert("Course created successfully.");

      router.push("/admin/courses");
      router.refresh();
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to create course."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-6 md:p-8 space-y-6"
    >
      <div>
        <label className="block text-lg font-semibold mb-2">
          Course Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          placeholder="Example: General Knowledge"
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold mb-2">
          Course Description
        </label>

        <textarea
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          placeholder="Enter course description"
          rows={5}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold mb-2">
          Course Category
        </label>

        <select
          value={subject}
          onChange={(event) =>
            setSubject(event.target.value)
          }
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">
            Select Category
          </option>

          <option value="Computer">
            Computer
          </option>

          <option value="Physics">
            Physics
          </option>

          <option value="Chemistry">
            Chemistry
          </option>

          <option value="Mathematics">
            Mathematics
          </option>

          <option value="Sanskrit">
            Sanskrit
          </option>

          <option value="General Knowledge">
            General Knowledge
          </option>

          <option value="AI">
            AI
          </option>

          <option value="Programming">
            Programming
          </option>

          <option value="English">
            English
          </option>
        </select>
      </div>

      <div>
        <label className="block text-lg font-semibold mb-2">
          Thumbnail URL
        </label>

        <input
          type="url"
          value={thumbnail}
          onChange={(event) =>
            setThumbnail(event.target.value)
          }
          placeholder="https://..."
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold px-6 py-4 rounded-xl transition"
      >
        {loading
          ? "Creating Course..."
          : "Create Course"}
      </button>
    </form>
  );
}
