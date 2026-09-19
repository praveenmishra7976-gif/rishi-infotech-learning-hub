import Link from "next/link";

const subjects = [
  {
    icon: "💻",
    title: "Computer",
    description:
      "Learn computer fundamentals, hardware, software, internet, applications and technology.",
    href: "/learn/computer",
  },
  {
    icon: "⚡",
    title: "Physics",
    description:
      "Learn physics concepts, important laws, formulas, examples and numerical problems.",
    href: "/learn/physics",
  },
  {
    icon: "🧪",
    title: "Chemistry",
    description:
      "Understand atoms, molecules, reactions, equations, formulas and chemistry concepts.",
    href: "/learn/chemistry",
  },
  {
    icon: "📐",
    title: "Mathematics",
    description:
      "Improve mathematics with simple explanations, formulas, examples and problem solving.",
    href: "/learn/mathematics",
  },
  {
    icon: "🕉️",
    title: "Sanskrit",
    description:
      "Learn Sanskrit grammar, vocabulary, literature, meanings and important topics.",
    href: "/learn/sanskrit",
  },
  {
    icon: "🌍",
    title: "General Knowledge",
    description:
      "Improve your GK knowledge with important facts, topics and useful information.",
    href: "/learn/general-knowledge",
  },
];

const features = [
  ["📚", "Simple Notes", "Easy-to-understand study material."],
  ["🧮", "Formulas", "Important formulas collected in one place."],
  ["⚖️", "Important Laws", "Learn important laws and concepts."],
  ["💡", "Examples", "Understand topics with practical examples."],
  ["📝", "MCQ Practice", "Practice questions after learning."],
  ["⬇️", "Study Resources", "Access useful learning resources."],
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-lg">
              RI
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Rishi Infotech
              </h1>
              <p className="text-xs font-medium text-blue-600">
                Learning Hub
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="font-medium hover:text-blue-600">
              Home
            </Link>

            <Link
              href="/learn"
              className="font-semibold text-blue-600"
            >
              Learn
            </Link>

            <Link href="/practice" className="font-medium hover:text-blue-600">
              Practice
            </Link>

            <Link href="/ai-hub" className="font-medium hover:text-blue-600">
              AI Hub
            </Link>

            <Link
              href="/developer-hub"
              className="font-medium hover:text-blue-600"
            >
              Developer
            </Link>

            <Link
              href="/downloads"
              className="font-medium hover:text-blue-600"
            >
              Downloads
            </Link>

            <Link href="/blog" className="font-medium hover:text-blue-600">
              Blog
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-500">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-28">

          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            📚 LEARNING CENTER
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Learn Everything
            <span className="block text-cyan-100">
              Step by Step
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-50 sm:text-lg">
            Explore subjects with simple notes, formulas, important laws,
            examples, practice questions and useful study resources.
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center rounded-2xl bg-white px-5 py-4 shadow-xl">
              <span className="mr-3 text-xl">🔎</span>

              <input
                type="text"
                placeholder="Search a subject or topic..."
                className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            <Link
              href="/practice"
              className="rounded-2xl bg-slate-900 px-7 py-4 font-bold text-white shadow-xl hover:bg-slate-800"
            >
              📝 Practice
            </Link>
          </div>

        </div>
      </section>

      {/* SUBJECTS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Subjects
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Choose Your Subject
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Select a subject and start learning with easy explanations
              and useful study material.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {subjects.map((subject) => (
              <Link
                key={subject.title}
                href={subject.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition group-hover:bg-blue-600">
                  {subject.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {subject.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {subject.description}
                </p>

                <div className="mt-6 font-bold text-blue-600">
                  Start Learning →
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* LEARNING FEATURES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-cyan-600">
              Learning Resources
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Everything You Need to Learn
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Our learning pages are designed to make difficult topics
              easier to understand.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">

            {features.map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl">
                  {icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* LEARNING PROCESS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <p className="font-bold uppercase tracking-widest text-blue-600">
                How It Works
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-900">
                Learn. Practice. Improve.
              </h2>

              <p className="mt-5 leading-7 text-slate-500">
                Follow a simple learning process. First understand the
                concept, then revise important points and finally test
                your knowledge.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    1
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Choose a Subject
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Select the subject you want to study.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">
                    2
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Read & Understand
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Study notes, formulas, laws and examples.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                    3
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Practice Questions
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Test yourself using MCQs and quizzes.
                    </p>
                  </div>
                </div>

              </div>

              <Link
                href="/practice"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg hover:bg-blue-700"
              >
                Go to Practice Center →
              </Link>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-2xl">

              <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">

                <div className="text-6xl">
                  🎓
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  Your Learning Journey
                </h3>

                <p className="mt-4 leading-7 text-blue-50">
                  Build your knowledge one topic at a time and strengthen
                  your preparation with regular practice.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white/15 p-5">
                    <div className="text-3xl font-black">
                      6+
                    </div>
                    <div className="mt-1 text-sm text-blue-100">
                      Subjects
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/15 p-5">
                    <div className="text-3xl font-black">
                      100+
                    </div>
                    <div className="mt-1 text-sm text-blue-100">
                      Topics
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">

          <div className="text-6xl">
            🚀
          </div>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Ready to Start Learning?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-50">
            Choose a subject and start building your knowledge today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/learn/computer"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              Start Learning →
            </Link>

            <Link
              href="/practice"
              className="rounded-xl border-2 border-white/70 px-8 py-4 font-bold hover:bg-white hover:text-blue-700"
            >
              Practice Questions
            </Link>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <h2 className="text-xl font-bold">
                Rishi Infotech
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learning, practice, AI tools and developer utilities
                in one place.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Learning
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <Link href="/learn" className="block hover:text-white">
                  All Subjects
                </Link>

                <Link
                  href="/learn/computer"
                  className="block hover:text-white"
                >
                  Computer
                </Link>

                <Link
                  href="/learn/physics"
                  className="block hover:text-white"
                >
                  Physics
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                Practice
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <Link href="/practice" className="block hover:text-white">
                  Practice Center
                </Link>

                <Link
                  href="/practice/mcq"
                  className="block hover:text-white"
                >
                  MCQ Quiz
                </Link>

                <Link
                  href="/practice/mock-tests"
                  className="block hover:text-white"
                >
                  Mock Tests
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                Website
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <Link href="/ai-hub" className="block hover:text-white">
                  AI Hub
                </Link>

                <Link
                  href="/developer-hub"
                  className="block hover:text-white"
                >
                  Developer Hub
                </Link>

                <Link
                  href="/contact"
                  className="block hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>

          </div>

          <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}