
import Link from "next/link";
import {
  BookOpen,
  Languages,
  Brain,
  Search,
  Volume2,
  Camera,
  Heart,
  PenLine,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe2,
  BookMarked,
} from "lucide-react";

import { dictionaryTools } from "./data/dictionaries";

const featureIcons = [
  Languages,
  Brain,
  Search,
  Volume2,
  Camera,
  Heart,
  PenLine,
  BookOpen,
];

const tricolourAccents = [
  {
    icon: "saffron",
    box: "bg-orange-50 text-orange-600 border-orange-100",
    badge: "bg-orange-50 text-orange-700",
    hover: "group-hover:text-orange-600",
  },
  {
    icon: "green",
    box: "bg-green-50 text-green-700 border-green-100",
    badge: "bg-green-50 text-green-700",
    hover: "group-hover:text-green-700",
  },
  {
    icon: "blue",
    box: "bg-blue-50 text-blue-800 border-blue-100",
    badge: "bg-blue-50 text-blue-800",
    hover: "group-hover:text-blue-800",
  },
];

export default function DictionaryHome() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">

        {/* Tricolour top strip */}

        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

        {/* Decorative background */}

        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-200/30 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16 lg:py-20">

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-black text-orange-700 shadow-sm">
                <Sparkles size={17} />
                India's Language & Knowledge Hub
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-5xl lg:text-6xl">
                Learn Words.
                <br />
                <span className="text-orange-500">
                  Understand Languages.
                </span>
                <br />
                Explore Knowledge.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Search meanings, improve vocabulary, explore languages,
                check grammar and discover knowledge with free learning
                tools from Rishi Infotech.
              </p>

              {/* Search CTA */}

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href="/dictionary/dictionary-api"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-blue-900 px-6 py-3.5 font-black text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-950"
                >
                  <Search size={19} />
                  Search Dictionary
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/dictionary/encyclopedia"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-6 py-3.5 font-black text-green-800 transition hover:-translate-y-0.5 hover:bg-green-100"
                >
                  <Globe2 size={19} />
                  Explore Encyclopedia
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

              {/* Trust badges */}

              <div className="mt-8 flex flex-wrap gap-3">

                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm">
                  <ShieldCheck
                    size={17}
                    className="text-green-600"
                  />
                  Free Learning Tools
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm">
                  <Languages
                    size={17}
                    className="text-orange-500"
                  />
                  Multiple Languages
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm">
                  <BookMarked
                    size={17}
                    className="text-blue-800"
                  />
                  13 Tools
                </div>

              </div>

            </div>

            {/* RIGHT VISUAL */}

            <div className="relative mx-auto w-full max-w-md">

              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-orange-200 via-white to-green-200 opacity-70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl">

                {/* mini tricolour header */}

                <div className="h-2 rounded-full bg-orange-500" />

                <div className="mt-1 h-2 rounded-full bg-white border-x border-slate-100" />

                <div className="h-2 rounded-full bg-green-600" />

                <div className="flex items-center justify-center py-8">

                  <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-8 border-blue-900/10">

                    <div className="absolute inset-4 rounded-full border-2 border-blue-900/20" />

                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-900 text-white shadow-xl">

                      <BookOpen size={58} strokeWidth={1.8} />

                    </div>

                  </div>

                </div>

                <div className="text-center">

                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-900">
                    Rishi Infotech
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-slate-900">
                    Knowledge for Everyone
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Learn freely. Explore confidently.
                    Build a stronger vocabulary.
                  </p>

                </div>

                {/* Stats */}

                <div className="mt-7 grid grid-cols-3 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4 text-center">
                    <p className="text-2xl font-black text-orange-600">
                      13
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-500">
                      Tools
                    </p>
                  </div>

                  <div className="rounded-2xl bg-blue-50 p-4 text-center">
                    <p className="text-2xl font-black text-blue-900">
                      6+
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-500">
                      Languages
                    </p>
                  </div>

                  <div className="rounded-2xl bg-green-50 p-4 text-center">
                    <p className="text-2xl font-black text-green-700">
                      ∞
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-500">
                      Learning
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* TRICOLOUR DIVIDER */}
      {/* ========================================================= */}

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-3 overflow-hidden rounded-full">

          <div className="h-1.5 bg-orange-500" />

          <div className="h-1.5 bg-blue-900" />

          <div className="h-1.5 bg-green-600" />

        </div>

      </div>

      {/* ========================================================= */}
      {/* TOOLS */}
      {/* ========================================================= */}

      <section className="px-6 py-14 md:py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-blue-900">
                <BookOpen size={14} />
                Explore
              </div>

              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                Dictionary & Language Tools
              </h2>

              <p className="mt-2 max-w-2xl text-lg text-slate-500">
                Choose a tool and start learning instantly.
              </p>

            </div>

            <div className="hidden items-center gap-2 text-sm font-bold text-slate-500 md:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-white border border-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
              Indian Tricolour Theme
            </div>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {dictionaryTools.map((tool, index) => {

              const Icon =
                featureIcons[index % featureIcons.length];

              const accent =
                tricolourAccents[
                  index % tricolourAccents.length
                ];

              return (
                <Link
                  key={tool.id}
                  href={`/dictionary/${tool.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >

                  {/* Top accent */}

                  <div
                    className={`absolute left-0 right-0 top-0 h-1 ${
                      index % 3 === 0
                        ? "bg-orange-500"
                        : index % 3 === 1
                        ? "bg-blue-900"
                        : "bg-green-600"
                    }`}
                  />

                  <div className="flex items-start justify-between gap-4">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${accent.box}`}
                    >
                      <Icon size={27} />
                    </div>

                    <ArrowRight
                      size={21}
                      className={`text-slate-300 transition-all group-hover:translate-x-1 ${accent.hover}`}
                    />

                  </div>

                  <h3
                    className={`mt-6 text-xl font-black text-slate-900 transition md:text-2xl ${accent.hover}`}
                  >
                    {tool.name}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {tool.description}
                  </p>

                  <span
                    className={`mt-5 inline-block rounded-full px-4 py-2 text-sm font-black ${accent.badge}`}
                  >
                    {tool.category}
                  </span>

                </Link>
              );
            })}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FEATURES */}
      {/* ========================================================= */}

      <section className="px-6 pb-16">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

            <div className="absolute left-0 right-0 top-0 grid grid-cols-3">
              <div className="h-1.5 bg-orange-500" />
              <div className="h-1.5 bg-blue-900" />
              <div className="h-1.5 bg-green-600" />
            </div>

            <div className="p-7 md:p-10">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                  <BookOpen size={28} />
                </div>

                <div>

                  <h2 className="text-3xl font-black text-slate-950">
                    Everything You Need
                  </h2>

                  <p className="mt-2 text-lg text-slate-500">
                    Useful tools for language learning and daily study.
                  </p>

                </div>

              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {[
                  [
                    "📖",
                    "Multi-language Dictionary",
                    "orange",
                  ],
                  [
                    "🌐",
                    "AI Translator",
                    "blue",
                  ],
                  [
                    "🎤",
                    "Voice Search",
                    "green",
                  ],
                  [
                    "🔊",
                    "Pronunciation",
                    "orange",
                  ],
                  [
                    "📷",
                    "OCR Scanner",
                    "blue",
                  ],
                  [
                    "❤️",
                    "Favorite Words",
                    "green",
                  ],
                  [
                    "📝",
                    "Grammar Checker",
                    "orange",
                  ],
                  [
                    "📚",
                    "Synonyms & Antonyms",
                    "blue",
                  ],
                ].map(([icon, title, colour]) => {

                  const colourClasses =
                    colour === "orange"
                      ? "bg-orange-50 border-orange-100"
                      : colour === "green"
                      ? "bg-green-50 border-green-100"
                      : "bg-blue-50 border-blue-100";

                  return (
                    <div
                      key={title}
                      className={`rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-md ${colourClasses}`}
                    >

                      <div className="text-3xl">
                        {icon}
                      </div>

                      <p className="mt-3 font-black text-slate-800">
                        {title}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* LEARNING MESSAGE */}
      {/* ========================================================= */}

      <section className="px-6 pb-14">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-green-50 p-7 md:p-10">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>

                <div className="flex items-center gap-2 text-sm font-black text-blue-900">
                  <Sparkles size={17} />
                  LEARN • PRACTICE • GROW
                </div>

                <h2 className="mt-3 text-2xl font-black text-slate-950 md:text-3xl">
                  Knowledge becomes powerful when you use it.
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                  Search a word, discover its meaning, explore a topic,
                  improve your writing and continue learning every day.
                </p>

              </div>

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-blue-900 bg-white text-blue-900 shadow-lg">
                <BookOpen size={34} />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FOOTER CTA */}
      {/* ========================================================= */}

      <section className="px-6 pb-12">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-blue-950 p-8 text-white shadow-xl md:p-12">

            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-green-500/20 blur-3xl" />

            <div className="relative text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Languages size={28} />
              </div>

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                Ready to Learn Something New?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-lg leading-7 text-blue-100">
                Search a word, translate a sentence, improve your grammar
                or explore an encyclopedia topic.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">

                <Link
                  href="/dictionary/dictionary-api"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-black text-blue-950 transition hover:-translate-y-0.5 hover:bg-orange-50"
                >
                  Start Searching
                  <ArrowRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/learn"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Continue Learning
                  <ArrowRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* TRICOLOUR FOOTER STRIP */}
      {/* ========================================================= */}

      <div className="grid grid-cols-3">

        <div className="h-2 bg-orange-500" />

        <div className="h-2 bg-white border-y border-slate-200" />

        <div className="h-2 bg-green-600" />

      </div>

    </main>
  );
}
