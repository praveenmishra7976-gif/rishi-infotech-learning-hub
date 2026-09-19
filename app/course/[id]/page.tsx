"use client";

import Link from "next/link";
import {
  Plus,
  GraduationCap,
  BookOpen,
  Users,
  MoreVertical,
  Edit,
  Trash2,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Computer Fundamentals",
    subject: "Computer",
    level: "Beginner",
    lessons: 12,
    students: 0,
    status: "Published",
  },
  {
    id: 2,
    title: "Physics Complete Course",
    subject: "Physics",
    level: "Intermediate",
    lessons: 18,
    students: 0,
    status: "Draft",
  },
  {
    id: 3,
    title: "Mathematics Basics",
    subject: "Mathematics",
    level: "Beginner",
    lessons: 15,
    students: 0,
    status: "Published",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="p-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                  <GraduationCap
                    className="text-cyan-600"
                    size={28}
                  />
                </div>

                <div>
                  <h1 className="text-2xl font-black text-slate-900">
                    Courses
                  </h1>

                  <p className="text-slate-500">
                    Manage all courses on Rishi Infotech
                  </p>
                </div>

              </div>
            </div>

            <Link
              href="/admin/courses/create"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              <Plus size={20} />
              Create Course
            </Link>

          </div>

        </div>
      </div>

      {/* Statistics */}
      <div className="p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Total Courses
                </p>

                <h2 className="text-3xl font-black text-slate-900 mt-1">
                  {courses.length}
                </h2>
              </div>

              <div className="w-11 h-11 rounded-xl bg-cyan-100 flex items-center justify-center">
                <GraduationCap
                  className="text-cyan-600"
                  size={24}
                />
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Published
                </p>

                <h2 className="text-3xl font-black text-green-600 mt-1">
                  {
                    courses.filter(
                      (course) => course.status === "Published"
                    ).length
                  }
                </h2>
              </div>

              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                <BookOpen
                  className="text-green-600"
                  size={24}
                />
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Drafts
                </p>

                <h2 className="text-3xl font-black text-orange-600 mt-1">
                  {
                    courses.filter(
                      (course) => course.status === "Draft"
                    ).length
                  }
                </h2>
              </div>

              <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                <BookOpen
                  className="text-orange-600"
                  size={24}
                />
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Students
                </p>

                <h2 className="text-3xl font-black text-blue-600 mt-1">
                  0
                </h2>
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                <Users
                  className="text-blue-600"
                  size={24}
                />
              </div>

            </div>
          </div>

        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

          <div className="p-5 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              All Courses
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Create, edit and manage your courses.
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">
                <tr>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                    Course
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                    Subject
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                    Level
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                    Lessons
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                    Students
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="text-right px-6 py-4 text-sm font-semibold text-slate-600">
                    Actions
                  </th>

                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                {courses.map((course) => (

                  <tr
                    key={course.id}
                    className="hover:bg-slate-50 transition"
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                          <GraduationCap
                            className="text-cyan-600"
                            size={20}
                          />
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900">
                            {course.title}
                          </p>

                          <p className="text-xs text-slate-500">
                            Course #{course.id}
                          </p>
                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {course.subject}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {course.level}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {course.lessons}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {course.students}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          course.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {course.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center justify-end gap-2">

                        <button
                          type="button"
                          className="p-2 rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition"
                          title="Edit Course"
                        >
                          <Edit size={18} />
                        </button>

                        <button
                          type="button"
                          className="p-2 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600 transition"
                          title="Delete Course"
                        >
                          <Trash2 size={18} />
                        </button>

                        <button
                          type="button"
                          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition"
                          title="More Options"
                        >
                          <MoreVertical size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}