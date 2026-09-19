import Link from "next/link";
import CourseForm from "../components/CourseForm";

export default function CreateCoursePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-blue-700">
            Create Course
          </h1>

          <p className="mt-3 text-gray-600">
            Create a course and then add chapters and lessons.
          </p>
        </div>

        <CourseForm />

        <Link
          href="/admin/courses"
          className="inline-block mt-6 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-bold"
        >
          Back to Courses
        </Link>

      </div>
    </main>
  );
}
