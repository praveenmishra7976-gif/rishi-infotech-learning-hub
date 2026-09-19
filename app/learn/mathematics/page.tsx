"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const chapters = [
  {
    id: "number-system",
    title: "Number System",
    description:
      "Learn natural numbers, whole numbers, integers, rational numbers and real numbers.",
    icon: "🔢",
  },
  {
    id: "fractions-and-decimals",
    title: "Fractions & Decimals",
    description:
      "Understand fractions, decimals, conversions, operations and comparisons.",
    icon: "➗",
  },
  {
    id: "ratio-and-proportion",
    title: "Ratio & Proportion",
    description:
      "Learn ratios, proportions, direct variation and practical applications.",
    icon: "⚖️",
  },
  {
    id: "percentage",
    title: "Percentage",
    description:
      "Study percentages, increase, decrease, profit, loss and real-life problems.",
    icon: "💯",
  },
  {
    id: "profit-loss",
    title: "Profit & Loss",
    description:
      "Learn cost price, selling price, profit, loss and discount calculations.",
    icon: "💰",
  },
  {
    id: "algebra",
    title: "Algebra",
    description:
      "Understand variables, expressions, identities, equations and algebraic operations.",
    icon: "📐",
  },
  {
    id: "linear-equations",
    title: "Linear Equations",
    description:
      "Solve linear equations in one and two variables with practical examples.",
    icon: "✏️",
  },
  {
    id: "geometry",
    title: "Geometry",
    description:
      "Learn lines, angles, triangles, quadrilaterals, circles and geometric properties.",
    icon: "📏",
  },
  {
    id: "mensuration",
    title: "Mensuration",
    description:
      "Study perimeter, area, surface area and volume of common shapes and solids.",
    icon: "📦",
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    description:
      "Learn trigonometric ratios, identities and applications of trigonometry.",
    icon: "📐",
  },
  {
    id: "statistics",
    title: "Statistics",
    description:
      "Understand data, mean, median, mode, tables and graphical representation.",
    icon: "📊",
  },
  {
    id: "probability",
    title: "Probability",
    description:
      "Learn basic probability concepts, outcomes, events and simple calculations.",
    icon: "🎲",
  },
];

const formulas = [
  {
    title: "Pythagoras Theorem",
    formula: "a² + b² = c²",
    icon: "📐",
  },
  {
    title: "Area of Rectangle",
    formula: "A = l × b",
    icon: "▭",
  },
  {
    title: "Area of Circle",
    formula: "A = πr²",
    icon: "⭕",
  },
  {
    title: "Simple Interest",
    formula: "SI = PRT / 100",
    icon: "💰",
  },
  {
    title: "Average",
    formula: "Average = Sum ÷ Number",
    icon: "📊",
  },
  {
    title: "Percentage",
    formula: "Percentage = Part / Whole × 100",
    icon: "💯",
  },
];

export default function MathematicsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-500 text-white">

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

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Mathematics
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn Mathematics step by step with concepts, formulas,
              examples, problem solving and practice questions.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <BookOpen
              className="text-purple-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {chapters.length}
            </p>

            <p className="text-gray-500">
              Chapters
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <Calculator
              className="text-indigo-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              50+
            </p>

            <p className="text-gray-500">
              Formulas
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <span className="text-3xl">
              🧮
            </span>

            <p className="text-3xl font-black text-gray-900 mt-2">
              100+
            </p>

            <p className="text-gray-500">
              Concepts
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <Trophy
              className="text-yellow-500"
              size={28}
            />

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

          <Calculator
            className="text-purple-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Mathematics Chapters
            </h2>

            <p className="text-gray-500 mt-1">
              Select a chapter and start learning.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {chapters.map((chapter, index) => (

            <div
              key={chapter.id}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl">
                  {chapter.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Chapter {index + 1}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-purple-600 transition">
                {chapter.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {chapter.description}
              </p>

              <Link
                href={`/learn/mathematics/${chapter.id}`}
                className="mt-5 inline-flex items-center gap-2 text-purple-600 font-bold"
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* FORMULAS */}

      <section className="bg-white border-y">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Calculator
              className="text-purple-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Important Mathematics Formulas
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
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-purple-50 hover:border-purple-200 transition"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-xl font-black text-purple-600">
                  {item.formula}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                How to Study Mathematics
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Understand the concept first, learn the formula, solve
                examples and then practice different types of problems.
                Regular practice is the key to becoming strong in Mathematics.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">

                {[
                  "Understand Concepts",
                  "Learn Formulas",
                  "Solve Examples",
                  "Practice Questions",
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

      {/* CTA */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 text-center">

          <Sparkles
            className="mx-auto text-purple-400"
            size={38}
          />

          <h2 className="mt-5 text-3xl md:text-4xl font-black">
            Keep Learning Mathematics
          </h2>

          <p className="mt-3 text-gray-400">
            Explore more subjects and continue your learning journey.
          </p>

          <Link
            href="/learn"
            className="mt-7 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-7 py-4 rounded-xl"
          >
            Back to All Subjects
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}
