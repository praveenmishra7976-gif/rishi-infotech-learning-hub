"use client";

import { useState } from "react";
import { updateCourse } from "../lib/updateCourse";
import { useRouter } from "next/navigation";

export default function EditCourseForm({
  course,
}: {
  course: any;
}) {
  const router = useRouter();

  const [title, setTitle] = useState(course.title ?? "");
  const [description, setDescription] = useState(
    course.description ?? ""
  );
  const [subject, setSubject] = useState(
    course.subject ?? ""
  );
  const [thumbnail, setThumbnail] = useState(
    course.thumbnail ?? ""
  );
  const [loading, setLoading] = useState(false);

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
      await updateCourse(course.id, {
        title: title.trim(),
        description: description.trim(),
        subject,
        thumbnail: thumbnail.trim(),
      });

      alert("Course updated successfully.");

      router.push("/admin/courses");
      router.refresh();
    } catch (error) {
      console.error("Update course error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to update course."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={save}
      className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
    >
      <h2 className="text-3xl font-bold">
        Edit Course
      </h2>

      <div>
        <label className="block font-semibold mb-2">
          Course Title
        </label>

        <input
          type="text"
          className="w-full border rounded-xl p-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Course title"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Course Description
        </label>

        <textarea
          rows={5}
          className="w-full border rounded-xl p-4"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Course description"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Course Subject
        </label>

        <select
          className="w-full border rounded-xl p-4"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        >
          <option value="">
            Select Subject
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
        <label className="block font-semibold mb-2">
          Thumbnail URL
        </label>

        <input
          type="url"
          className="w-full border rounded-xl p-4"
          value={thumbnail}
          onChange={(e) =>
            setThumbnail(e.target.value)
          }
          placeholder="https://..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white px-8 py-4 rounded-xl font-bold"
      >
        {loading
          ? "Updating Course..."
          : "Update Course"}
      </button>
    </form>
  );
}