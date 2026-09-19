import Link from "next/link";

const topics = [
  {
    title: "Atoms & Molecules",
    icon: "⚛️",
    description: "Understand atoms, molecules, elements and compounds.",
    href: "/learn/chemistry/atoms-molecules",
  },
  {
    title: "Periodic Table",
    icon: "🧩",
    description: "Learn elements, symbols, groups and periodic trends.",
    href: "/learn/chemistry/periodic-table",
  },
  {
    title: "Chemical Reactions",
    icon: "🧪",
    description: "Understand reactions, equations and chemical changes.",
    href: "/learn/chemistry/chemical-reactions",
  },
  {
    title: "Acids, Bases & Salts",
    icon: "⚗️",
    description: "Learn properties, indicators, pH and important reactions.",
    href: "/learn/chemistry/acids-bases-salts",
  },
  {
    title: "Metals & Non-Metals",
    icon: "🔩",
    description: "Study properties and reactions of metals and non-metals.",
    href: "/learn/chemistry/metals-non-metals",
  },
  {
    title: "Carbon Compounds",
    icon: "🧬",
    description: "Learn hydrocarbons and important carbon compounds.",
    href: "/learn/chemistry/carbon-compounds",
  },
];

export default function ChemistryPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <Link
            href="/learn"
            className="text-sm font-medium text-blue-100 hover:text-white"
          >
            ← Back to Learning
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              🧪
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Chemistry
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Learn chemistry concepts, reactions, equations, formulas
                and important topics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CHEMISTRY TOPICS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Chemistry Topics
        </h2>

        <p className="mt-2 text-gray-600">
          Choose a topic and start learning.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {topic.description}
              </p>

              <Link
                href={topic.href}
                className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                Explore Topic →
              </Link>

            </div>
          ))}

        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-center text-3xl font-bold text-gray-900">
            Chemistry Resources
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            Use these resources to improve your chemistry knowledge
            and prepare for exams.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">

            {/* NOTES */}
            <Link
              href="/learn/chemistry/atoms-molecules"
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">📖</div>

              <h3 className="mt-4 font-bold text-gray-900">
                Notes
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Easy chemistry notes and explanations.
              </p>

              <div className="mt-4 font-semibold text-blue-600">
                Read Notes →
              </div>
            </Link>

            {/* FORMULAS */}
            <Link
              href="/learn/chemistry/chemical-reactions"
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">⚗️</div>

              <h3 className="mt-4 font-bold text-gray-900">
                Formulas
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Important chemistry formulas and equations.
              </p>

              <div className="mt-4 font-semibold text-blue-600">
                View Formulas →
              </div>
            </Link>

            {/* MCQS */}
            <Link
              href="/practice"
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">❓</div>

              <h3 className="mt-4 font-bold text-gray-900">
                MCQs
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Test your chemistry knowledge with practice questions.
              </p>

              <div className="mt-4 font-semibold text-blue-600">
                Practice MCQs →
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* PRACTICE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">

          <div className="text-5xl">
            🧪
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Practice Chemistry
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Test your understanding with practice questions and
            strengthen your chemistry concepts.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
          >
            Start Practice →
          </Link>

        </div>

      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="border-t border-gray-200 bg-white py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">

          <Link
            href="/learn"
            className="font-semibold text-gray-600 hover:text-blue-600"
          >
            ← All Subjects
          </Link>

          <Link
            href="/learn/chemistry/atoms-molecules"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            Start Chemistry →
          </Link>

        </div>

      </section>

    </main>
  );
}