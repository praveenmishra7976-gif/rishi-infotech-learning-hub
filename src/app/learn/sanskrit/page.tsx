import Link from "next/link";
const topics = [
  {
    title: "Sanskrit Grammar",
    icon: "📖",
    description:
      "Learn Sanskrit grammar, sentence structure, vibhakti, sandhi, samasa and important grammatical rules.",
    href: "/learn/sanskrit/sanskrit-grammar",
  },
  {
    title: "Shabd Roop",
    icon: "📝",
    description:
      "Study important Sanskrit noun forms with easy tables, examples and revision material.",
    href: "/learn/sanskrit/shabd-roop",
  },
  {
    title: "Dhatu Roop",
    icon: "✍️",
    description:
      "Learn important Sanskrit verb forms, lakaras, persons, numbers and their usage.",
    href: "/learn/sanskrit/dhatu-roop",
  },
  {
    title: "Vocabulary",
    icon: "📚",
    description:
      "Build Sanskrit vocabulary with useful Sanskrit words, meanings and everyday examples.",
    href: "/learn/sanskrit/vocabulary",
  },
  {
    title: "Translation",
    icon: "🌐",
    description:
      "Practice Sanskrit to Hindi and English translation with examples and exercises.",
    href: "/learn/sanskrit/translation",
  },
  {
    title: "Literature",
    icon: "🏛️",
    description:
      "Explore Vedas, Upanishads, Ramayana, Mahabharata and famous Sanskrit authors and works.",
    href: "/learn/sanskrit/literature",
  },
];

const quickLinks = [
  {
    title: "Grammar",
    description: "Rules and concepts",
    icon: "📖",
    href: "/learn/sanskrit/sanskrit-grammar",
  },
  {
    title: "Shabd Roop",
    description: "Important noun forms",
    icon: "📝",
    href: "/learn/sanskrit/shabd-roop",
  },
  {
    title: "Dhatu Roop",
    description: "Important verb forms",
    icon: "✍️",
    href: "/learn/sanskrit/dhatu-roop",
  },
  {
    title: "Vocabulary",
    description: "Words and meanings",
    icon: "📚",
    href: "/learn/sanskrit/vocabulary",
  },
  {
    title: "Translation",
    description: "Translation practice",
    icon: "🌐",
    href: "/learn/sanskrit/translation",
  },
  {
    title: "Literature",
    description: "Authors and works",
    icon: "🏛️",
    href: "/learn/sanskrit/literature",
  },
];

const features = [
  {
    title: "Easy Notes",
    icon: "📚",
    description:
      "Simple explanations designed to make Sanskrit concepts easier to understand.",
  },
  {
    title: "Tables & Examples",
    icon: "📊",
    description:
      "Learn difficult forms using organized tables and practical examples.",
  },
  {
    title: "Quick Revision",
    icon: "⚡",
    description:
      "Revise important grammar, vocabulary and literature topics quickly.",
  },
  {
    title: "Practice",
    icon: "❓",
    description:
      "Strengthen your knowledge by practicing questions and exercises.",
  },
];

export default function SanskritPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <Link
            href="/learn"
            className="text-sm font-medium text-blue-100 transition hover:text-white"
          >
            ← Back to Learning
          </Link>

          <div className="mt-8 flex flex-col items-center gap-7 text-center sm:flex-row sm:text-left">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              📖
            </div>

            <div>
              <p className="font-semibold text-cyan-100">
                Rishi Infotech Learning Hub
              </p>

              <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl">
                Sanskrit
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-8 text-blue-50">
                Learn Sanskrit grammar, Shabd Roop, Dhatu Roop, vocabulary,
                translation and literature in one place.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                <Link
                  href="/learn/sanskrit/sanskrit-grammar"
                  className="rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
                >
                  Start Learning →
                </Link>

                <Link
                  href="/practice"
                  className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Practice Sanskrit
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 sm:p-10">

          <div className="max-w-4xl">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              Sanskrit Learning
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Learn Sanskrit Step by Step
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-700">
              Sanskrit is an ancient classical language with a rich tradition
              of grammar, literature, philosophy and knowledge. This section
              of Rishi Infotech Learning Hub brings important Sanskrit topics
              together in a simple and organized way.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-700">
              Start with grammar and vocabulary, practice Shabd Roop and
              Dhatu Roop, improve translation skills and explore famous
              Sanskrit literature.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">📖</div>
              <p className="mt-3 font-bold text-gray-900">
                Grammar
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Learn language rules
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">📝</div>
              <p className="mt-3 font-bold text-gray-900">
                Forms
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Shabd and Dhatu Roop
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">🌐</div>
              <p className="mt-3 font-bold text-gray-900">
                Translation
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Hindi and English
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">🏛️</div>
              <p className="mt-3 font-bold text-gray-900">
                Literature
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Famous works and authors
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Sanskrit Topics
              </h2>

              <p className="mt-2 text-gray-600">
                Choose a topic and start learning.
              </p>
            </div>

            <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              6 Learning Sections
            </span>

          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {topics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition group-hover:scale-105">
                    {topic.icon}
                  </div>

                  <span className="text-xl font-bold text-blue-600 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {topic.description}
                </p>

                <div className="mt-5 font-bold text-blue-600">
                  Explore Topic →
                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Quick Access
          </h2>

          <p className="mt-2 text-gray-600">
            Jump directly to the Sanskrit section you need.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {item.icon}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.description}
                </p>
              </div>

              <span className="text-xl font-bold text-blue-600">
                →
              </span>

            </Link>
          ))}

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Learn Sanskrit Here?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Everything is organized to make learning and revision easier.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">

          <h2 className="text-3xl font-extrabold text-gray-900">
            Recommended Learning Path
          </h2>

          <p className="mt-2 text-gray-600">
            Follow these steps if you are starting Sanskrit from the basics.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="relative rounded-2xl bg-blue-50 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                1
              </span>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Build Grammar
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Start with Sanskrit grammar and understand the basic rules
                of the language.
              </p>

              <Link
                href="/learn/sanskrit/sanskrit-grammar"
                className="mt-5 inline-block font-bold text-blue-600"
              >
                Learn Grammar →
              </Link>
            </div>

            <div className="relative rounded-2xl bg-cyan-50 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">
                2
              </span>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Practice Forms
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Learn Shabd Roop and Dhatu Roop using tables and examples.
              </p>

              <div className="mt-5 flex flex-wrap gap-4">
                <Link
                  href="/learn/sanskrit/shabd-roop"
                  className="font-bold text-blue-600"
                >
                  Shabd Roop →
                </Link>

                <Link
                  href="/learn/sanskrit/dhatu-roop"
                  className="font-bold text-blue-600"
                >
                  Dhatu Roop →
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl bg-indigo-50 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                3
              </span>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Improve Language Skills
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Build vocabulary, practice translation and explore Sanskrit
                literature.
              </p>

              <div className="mt-5 flex flex-wrap gap-4">
                <Link
                  href="/learn/sanskrit/vocabulary"
                  className="font-bold text-blue-600"
                >
                  Vocabulary →
                </Link>

                <Link
                  href="/learn/sanskrit/translation"
                  className="font-bold text-blue-600"
                >
                  Translation →
                </Link>

                <Link
                  href="/learn/sanskrit/literature"
                  className="font-bold text-blue-600"
                >
                  Literature →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-blue-600 p-8 text-center shadow-xl sm:p-12">

          <div className="text-5xl">
            📖
          </div>

          <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
            Start Learning Sanskrit Today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Choose a Sanskrit topic, study the notes and examples, and
            continue building your knowledge step by step.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <Link
              href="/learn/sanskrit/sanskrit-grammar"
              className="rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Start with Grammar →
            </Link>

            <Link
              href="/practice"
              className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white transition hover:bg-white/20"
            >
              Practice →
            </Link>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <h3 className="text-lg font-bold">
                Rishi Infotech Learning Hub
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learn subjects, practice concepts and build knowledge in
                one place.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Sanskrit
              </h3>

              <div className="mt-3 space-y-2 text-sm">

                <Link
                  href="/learn/sanskrit/sanskrit-grammar"
                  className="block text-slate-400 hover:text-white"
                >
                  Sanskrit Grammar
                </Link>

                <Link
                  href="/learn/sanskrit/shabd-roop"
                  className="block text-slate-400 hover:text-white"
                >
                  Shabd Roop
                </Link>

                <Link
                  href="/learn/sanskrit/dhatu-roop"
                  className="block text-slate-400 hover:text-white"
                >
                  Dhatu Roop
                </Link>

                <Link
                  href="/learn/sanskrit/vocabulary"
                  className="block text-slate-400 hover:text-white"
                >
                  Vocabulary
                </Link>

              </div>
            </div>

            <div>
              <h3 className="font-bold">
                Resources
              </h3>

              <div className="mt-3 space-y-2 text-sm">

                <Link
                  href="/learn/sanskrit/translation"
                  className="block text-slate-400 hover:text-white"
                >
                  Translation
                </Link>

                <Link
                  href="/learn/sanskrit/literature"
                  className="block text-slate-400 hover:text-white"
                >
                  Literature
                </Link>

                <Link
                  href="/practice"
                  className="block text-slate-400 hover:text-white"
                >
                  Practice
                </Link>

                <Link
                  href="/learn"
                  className="block text-slate-400 hover:text-white"
                >
                  Learning Hub
                </Link>

              </div>
            </div>

            <div>
              <h3 className="font-bold">
                Quick Links
              </h3>

              <div className="mt-3 space-y-2 text-sm">

                <Link
                  href="/"
                  className="block text-slate-400 hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/learn"
                  className="block text-slate-400 hover:text-white"
                >
                  Learn
                </Link>

                <Link
                  href="/practice"
                  className="block text-slate-400 hover:text-white"
                >
                  Practice
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