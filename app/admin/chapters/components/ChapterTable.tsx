"use client";

import { deleteChapter } from "../lib/deleteChapter";

interface Chapter {
  id: string;
  title: string;
  description: string | null;
  position: number | null;
  status?: string | null;
  courses?: {
    title: string;
  } | null;
}

export default function ChapterTable({
  chapters,
}: {
  chapters: Chapter[];
}) {
  async function remove(id: string) {
    if (!confirm("Delete this chapter?")) {
      return;
    }

    try {
      await deleteChapter(id);

      alert("Chapter deleted successfully.");

      window.location.reload();
    } catch (error) {
      console.error("Delete chapter error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to delete chapter."
      );
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="p-4 text-left">
              Course
            </th>

            <th className="p-4 text-left">
              Chapter
            </th>

            <th className="p-4 text-left">
              Position
            </th>

            <th className="p-4 text-left">
              Description
            </th>

            <th className="p-4 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {chapters.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="p-10 text-center text-gray-500"
              >
                No chapters found.
              </td>
            </tr>
          ) : (
            chapters.map((chapter) => (
              <tr
                key={chapter.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-semibold">
                  {chapter.courses?.title ||
                    "Unknown Course"}
                </td>

                <td className="p-4 font-semibold">
                  {chapter.title}
                </td>

                <td className="p-4">
                  {chapter.position ?? "-"}
                </td>

                <td className="p-4 text-gray-600 max-w-md">
                  {chapter.description || "-"}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      remove(chapter.id)
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