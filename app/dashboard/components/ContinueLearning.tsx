import Link from "next/link";

const courses = [
  {
    title: "Computer Fundamentals",
    chapter: "Chapter 5 • Operating System",
    progress: 72,
    href: "/computer",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Physics",
    chapter: "Chapter 3 • Laws of Motion",
    progress: 48,
    href: "/physics",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Chemistry",
    chapter: "Chapter 2 • Atomic Structure",
    progress: 90,
    href: "/chemistry",
    color: "from-purple-500 to-pink-500",
  },
];

export default function ContinueLearning() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-bold">
          Continue Learning
        </h2>

        <Link
          href="/courses"
          className="text-blue-600 font-semibold"
        >
          View All →
        </Link>

      </div>

      <div className="space-y-6">

        {courses.map((course) => (
          <div
            key={course.title}
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {course.chapter}
                </p>

              </div>

              <Link
                href={course.href}
                className={`px-6 py-3 rounded-xl bg-gradient-to-r ${course.color} text-white font-semibold`}
              >
                Resume
              </Link>

            </div>

            <div className="mt-6">

              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${course.color}`}
                  style={{
                    width: `${course.progress}%`,
                  }}
                />

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}