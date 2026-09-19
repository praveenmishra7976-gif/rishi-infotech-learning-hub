"use client";

import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BookOpen,
  Calculator,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

import { physicsChapters } from "./data/physicsData";

const formulas = [
  {
    title: "Speed",
    formula: "Speed = Distance ÷ Time",
  },
  {
    title: "Velocity",
    formula: "Velocity = Displacement ÷ Time",
  },
  {
    title: "Acceleration",
    formula: "a = (v − u) ÷ t",
  },
  {
    title: "Force",
    formula: "F = m × a",
  },
  {
    title: "Work",
    formula: "W = F × s",
  },
  {
    title: "Kinetic Energy",
    formula: "KE = ½mv²",
  },
  {
    title: "Potential Energy",
    formula: "PE = mgh",
  },
  {
    title: "Power",
    formula: "P = W ÷ t",
  },
  {
    title: "Ohm's Law",
    formula: "V = I × R",
  },
  {
    title: "Electrical Power",
    formula: "P = V × I",
  },
];

export default function PhysicsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            ← Back to Learn
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Physics
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn Physics from basic concepts to advanced topics with
              chapters, formulas, important laws, examples and practice
              questions.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-blue-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {physicsChapters.length}
            </p>

            <p className="text-gray-500">
              Chapters
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-cyan-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {formulas.length}
            </p>

            <p className="text-gray-500">
              Formulas
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Atom className="text-purple-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {physicsChapters.reduce(
                (total, chapter) => total + chapter.topics.length,
                0
              )}
            </p>

            <p className="text-gray-500">
              Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              MCQ
            </p>

            <p className="text-gray-500">
              Practice
            </p>
          </div>

        </div>

      </section>

      {/* CHAPTERS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Atom
            className="text-blue-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Physics Chapters
            </h2>

            <p className="text-gray-500 mt-1">
              Select a chapter and start learning.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {physicsChapters.map((chapter, index) => (

            <Link
              key={chapter.id}
              href={`/learn/physics/${chapter.id}`}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                  {chapter.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Chapter {index + 1}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-blue-600 transition">
                {chapter.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {chapter.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                {chapter.topics.slice(0, 3).map((topic) => (

                  <span
                    key={topic}
                    className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full"
                  >
                    {topic}
                  </span>

                ))}

              </div>

              <span className="mt-5 inline-flex items-center gap-2 text-blue-600 font-bold">

                Start Learning

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </span>

            </Link>

          ))}

        </div>

      </section>

      {/* IMPORTANT FORMULAS */}

      <section className="bg-white border-y">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Calculator
              className="text-purple-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Important Physics Formulas
              </h2>

              <p className="text-gray-500 mt-1">
                Quick revision of important formulas.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {formulas.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-blue-50 hover:border-blue-200 transition"
              >

                <h3 className="font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg font-black text-blue-600">
                  {item.formula}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* STUDY TIPS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                How to Study Physics
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                First understand the concept, then learn the formula,
                solve examples and finally practice MCQs. Regular
                revision will help you remember important laws and
                formulas.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">

                {[
                  "Understand Concepts",
                  "Learn Formulas",
                  "Solve Examples",
                  "Practice MCQs",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="bg-white/10 border border-white/15 rounded-xl p-4"
                  >
                    <span className="font-black">
                      {index + 1}.
                    </span>{" "}
                    {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER CTA */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 text-center">

          <Sparkles
            className="mx-auto text-cyan-400"
            size={38}
          />

          <h2 className="mt-5 text-3xl md:text-4xl font-black">
            Keep Learning Physics
          </h2>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Explore more subjects and continue your learning journey.
          </p>

          <Link
            href="/learn"
            className="mt-7 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl"
          >
            Back to All Subjects
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}