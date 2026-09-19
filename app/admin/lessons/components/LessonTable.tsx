"use client";

import { deleteLesson } from "../lib/deleteLesson";

interface Lesson {
  id: string;
  chapter_id: string | null;
  title: string;
  lesson_order: number | null;
  status: string | null;
  chapters?: {
    title: string;
    course_id?: string;
  } | null;
}

export default function LessonTable({
  lessons,
}: {
  lessons: Lesson[];
}) {
  async function remove(id: string) {
    if (!confirm("Delete this lesson?")) {
      return;
    }

    try {
      await deleteLesson(id);

      alert("Lesson deleted successfully.");

      window.location.reload();
    } catch (error) {
      console.error("Delete lesson error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to delete lesson."
      );
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="p-4 text-left">
              Chapter
            </th>

            <th className="p-4 text-left">
              Lesson
            </th>

            <th className="p-4 text-left">
              Order
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {lessons.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="p-10 text-center text-gray-500"
              >
                No lessons found.
              </td>
            </tr>
          ) : (
            lessons.map((lesson) => (
              <tr
                key={lesson.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-semibold">
                  {lesson.chapters?.title ||
                    "Unknown Chapter"}
                </td>

                <td className="p-4 font-semibold">
                  {lesson.title}
                </td>

                <td className="p-4">
                  {lesson.lesson_order ?? "-"}
                </td>

                <td className="p-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                      lesson.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {lesson.status || "draft"}
                  </span>
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      remove(lesson.id)
                    }
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}