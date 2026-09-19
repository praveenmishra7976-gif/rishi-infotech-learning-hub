import Link from "next/link";

const courses = [
  {
    title: "Computer",
    icon: "💻",
    description:
      "Learn computer fundamentals, MS Office, internet, programming and digital skills.",
    color: "from-blue-600 to-cyan-500",
    href: "/computer",
  },
  {
    title: "Physics",
    icon: "⚛️",
    description:
      "Understand physics concepts, formulas, laws, numericals and important topics.",
    color: "from-indigo-600 to-blue-500",
    href: "/physics",
  },
  {
    title: "Chemistry",
    icon: "🧪",
    description:
      "Study atoms, molecules, reactions, equations, organic and inorganic chemistry.",
    color: "from-purple-600 to-pink-500",
    href: "/chemistry",
  },
  {
    title: "Mathematics",
    icon: "📐",
    description:
      "Learn mathematics with formulas, examples, shortcuts and practice questions.",
    color: "from-orange-500 to-red-500",
    href: "/mathematics",
  },
  {
    title: "Sanskrit",
    icon: "📖",
    description:
      "Learn Sanskrit grammar, vocabulary, literature and important study materials.",
    color: "from-yellow-500 to-orange-500",
    href: "/sanskrit",
  },
  {
    title: "General Knowledge",
    icon: "🌎",
    description:
      "Improve your general knowledge with current affairs, India GK and important facts.",
    color: "from-green-500 to-emerald-600",
    href: "/gk",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-black">
              RI
            </div>

            <div>
              <h1 className="font-black text-gray-900 text-lg leading-tight">
                Rishi Infotech
              </h1>
              <p className="text-xs text-blue-600 font-semibold">
                Learning Hub
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
          >
            Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-300/30 bg-white/10 backdrop-blur-md text-sm font-semibold">
            🎓 Learning Center
          </div>

          <h2 className="mt-7 text-4xl md:text-6xl font-black leading-tight">
            Choose What You Want
            <span className="block text-cyan-300">To Learn</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-blue-100 text-lg leading-8">
            Explore subjects, study notes, formulas, practice questions and
            learning resources — all in one place.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Popular Subjects
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900">
              Explore Our Courses
            </h2>

            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Select a subject and start learning at your own pace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {courses.map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${course.color}`}
                />

                <div className="p-7">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition`}
                  >
                    {course.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-gray-500 leading-7">
                    {course.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="font-bold text-blue-600">
                      Start Learning
                    </span>

                    <span className="text-2xl text-blue-600 group-hover:translate-x-2 transition">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="rounded-3xl bg-blue-50 p-8">
              <div className="text-4xl">📚</div>
              <h3 className="mt-5 text-xl font-black text-slate-900">
                Study Notes
              </h3>
              <p className="mt-3 text-gray-600 leading-7">
                Easy-to-understand notes and important topics for students.
              </p>
            </div>

            <div className="rounded-3xl bg-cyan-50 p-8">
              <div className="text-4xl">📝</div>
              <h3 className="mt-5 text-xl font-black text-slate-900">
                Practice Questions
              </h3>
              <p className="mt-3 text-gray-600 leading-7">
                Practice MCQs and questions to improve your preparation.
              </p>
            </div>

            <div className="rounded-3xl bg-purple-50 p-8">
              <div className="text-4xl">🏆</div>
              <h3 className="mt-5 text-xl font-black text-slate-900">
                Track Progress
              </h3>
              <p className="mt-3 text-gray-600 leading-7">
                Complete lessons, practice tests and improve your learning
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-5xl font-black">
            Ready to Start Learning?
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Choose your subject and begin your learning journey today.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 px-8 py-4 rounded-xl bg-white text-blue-700 font-black hover:scale-105 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h3 className="text-xl font-black">
            Rishi Infotech Learning Hub
          </h3>

          <p className="mt-2 text-gray-400">
            Learn Everything In One Place
          </p>

          <p className="mt-6 text-gray-500 text-sm">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </p>
        </div>
      </footer>
      
    </main>
  );
}