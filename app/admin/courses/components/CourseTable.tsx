"use client";

import Link from "next/link";
import { deleteCourse } from "../lib/deleteCourse";

type Course = {
  id: string;
  title: string;
  subject: string | null;
  thumbnail: string | null;
  featured?: boolean | null;
  status?: string | null;
};

export default function CourseTable({
  courses,
}: {
  courses: Course[];
}) {
  async function handleDelete(id: string) {
    if (!confirm("Delete this course?")) return;

    try {
      await deleteCourse(id);

      alert("Course Deleted");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to delete course."
      );
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-x-auto">
      <table className="w-full">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="p-4 text-left">
              Thumbnail
            </th>

            <th className="p-4 text-left">
              Course
            </th>

            <th className="p-4 text-left">
              Subject
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
          {courses.map((course) => (
            <tr
              key={course.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4">
                <img
                  src={
                    course.thumbnail ||
                    "/placeholder.png"
                  }
                  alt={course.title}
                  className="w-20 h-14 rounded-lg object-cover"
                />
              </td>

              <td className="p-4 font-semibold">
                {course.title}

                {course.featured && (
                  <span className="ml-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </td>

              <td className="p-4">
                {course.subject || "—"}
              </td>

              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.status || "published"}
                </span>
              </td>

              <td className="p-4 space-x-2">
                <Link
                  href={`/admin/courses/edit/${course.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block"
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    handleDelete(course.id)
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
