
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  ClipboardCheck,
  Trophy,
} from "lucide-react";

const tests = [
  {
    id: "computer",
    title: "Computer Mock Test",
    description:
      "Test your knowledge of computer fundamentals, hardware, software, internet and cybersecurity.",
    icon: "💻",
  },
  {
    id: "physics",
    title: "Physics Mock Test",
    description:
      "Practice questions from motion, force, work, energy, heat, light and electricity.",
    icon: "⚛️",
  },
  {
    id: "chemistry",
    title: "Chemistry Mock Test",
    description:
      "Practice atoms, molecules, chemical reactions, acids, bases, metals and compounds.",
    icon: "🧪",
  },
  {
    id: "mathematics",
    title: "Mathematics Mock Test",
    description:
      "Test your skills in numbers, algebra, geometry, percentage, probability and statistics.",
    icon: "📐",
  },
  {
    id: "sanskrit",
    title: "Sanskrit Mock Test",
    description:
      "Practice Sanskrit grammar, vocabulary, literature, Sandhi, Samas, Vibhakti and more.",
    icon: "📜",
  },
  {
    id: "gk",
    title: "General Knowledge Mock Test",
    description:
      "Test Indian GK, world GK, history, geography, polity, science and sports knowledge.",
    icon: "🌍",
  },
];

export default function MockTestsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top tricolour strip */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/practice"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-semibold transition hover:bg-white/20"
          >
            <ArrowLeft size={18} />
            Back to Practice
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
                <ClipboardCheck size={17} />
                Rishi Infotech Practice Center
              </div>

              <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                Mock Tests
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
                Take a timed subject-wise mock test and check how well you
                understand the concepts you have learned.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                  <span className="font-black">10</span> Questions
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                  <span className="font-black">10</span> Minutes
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                  <span className="font-black">6</span> Subjects
                </div>
              </div>
            </div>

            <div className="hidden h-36 w-36 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 text-7xl shadow-xl lg:flex">
              📝
            </div>
          </div>
        </div>
      </section>

      {/* Test cards */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
            Choose Your Mock Test
          </h2>

          <p className="mt-2 text-lg text-slate-500">
            Select a subject to start your 10-question timed test.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => (
            <Link
              key={test.id}
              href={`/practice/mock-tests/${test.id}`}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
                  {test.icon}
                </div>

                <ArrowRight
                  size={22}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                {test.title}
              </h3>

              <p className="mt-3 min-h-[84px] leading-7 text-slate-600">
                {test.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700">
                  <BookOpen size={16} />
                  10 Questions
                </span>

                <span className="inline-flex items-center gap-2 rounded-xl bg-orange-50 px-3 py-2 text-sm font-bold text-orange-700">
                  <Clock size={16} />
                  10 Minutes
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="font-bold text-blue-700">
                  Start Mock Test
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition group-hover:bg-blue-700">
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Test information */}
        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-7 md:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Trophy size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900">
                How the Mock Test Works
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-5">
                  <p className="font-black text-blue-700">01. Start</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Choose a subject and begin the test.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="font-black text-blue-700">02. Solve</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Answer 10 questions within 10 minutes.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="font-black text-blue-700">03. Result</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Submit the test and immediately see your score.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-800">
                <CheckCircle2 size={18} />
                More questions can be added later as the question bank grows.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/practice"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            <ArrowLeft size={18} />
            Practice Center
          </Link>

          <Link
            href="/practice/mcq"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Practice MCQs
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
            🇮🇳 Rishi Infotech
          </div>

          <h2 className="mt-4 text-2xl font-black">
            Learn. Practice. Improve.
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-slate-400">
            Free learning and practice resources for students.
          </p>
        </div>

        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />
      </footer>
    </main>
  );
}
