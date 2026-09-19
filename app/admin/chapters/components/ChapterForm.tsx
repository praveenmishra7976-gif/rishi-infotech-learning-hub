"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { createChapter } from "../lib/createChapter";

interface Course {
  id: string;
  title: string;
}

export default function ChapterForm() {
  const [courses, setCourses] = useState<Course[]>([]);

  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  async function loadCourses() {
    const { data, error } = await supabase
      .from("courses")
      .select("id,title")
      .order("title", {
        ascending: true,
      });

    if (error) {
      console.error("Load courses error:", error);
      return;
    }

    setCourses(data || []);
  }

  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!courseId) {
      alert("Please select a course.");
      return;
    }

    if (!title.trim()) {
      alert("Please enter chapter title.");
      return;
    }

    setLoading(true);

    try {
      await createChapter({
        course_id: courseId,
        title: title.trim(),
        description: description.trim(),
        position: Number(position) || 1,
      });

      alert("Chapter created successfully.");

      setCourseId("");
      setTitle("");
      setDescription("");
      setPosition(1);

      window.location.reload();
    } catch (error) {
      console.error("Create chapter error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to create chapter."
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
      <div>
        <h2 className="text-3xl font-black text-gray-900">
          Create Chapter
        </h2>

        <p className="mt-2 text-gray-500">
          Add a chapter to an existing course.
        </p>
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Course
        </label>

        <select
          value={courseId}
          onChange={(event) =>
            setCourseId(event.target.value)
          }
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">
            Select Course
          </option>

          {courses.map((course) => (
            <option
              key={course.id}
              value={course.id}
            >
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Chapter Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          placeholder="Example: Introduction to Computer"
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          placeholder="Enter chapter description"
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">
          Chapter Position
        </label>

        <input
          type="number"
          min="1"
          value={position}
          onChange={(event) =>
            setPosition(Number(event.target.value))
          }
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="text-sm text-gray-500 mt-2">
          Example: 1 for first chapter, 2 for second chapter.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold px-6 py-4 rounded-xl transition"
      >
        {loading
          ? "Creating Chapter..."
          : "Create Chapter"}
      </button>
    </form>
  );
}