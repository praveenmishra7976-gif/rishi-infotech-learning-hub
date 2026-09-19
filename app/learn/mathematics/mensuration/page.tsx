"use client";

import Link from "next/link";
import ChapterNavigation from "../components/ChapterNavigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const topics = [
  {
    title: "Perimeter",
    description:
      "Learn how to calculate the boundary length of common two-dimensional shapes.",
    formula: "Perimeter = Sum of all sides",
    icon: "📏",
  },
  {
    title: "Area",
    description:
      "Understand how to calculate the surface covered by a two-dimensional shape.",
    formula: "Area = Surface covered",
    icon: "▭",
  },
  {
    title: "Rectangle",
    description:
      "Learn perimeter and area formulas for rectangles with practical examples.",
    formula: "Area = l × b",
    icon: "▭",
  },
  {
    title: "Square",
    description:
      "Study the perimeter and area of a square using its side length.",
    formula: "Area = a²",
    icon: "⬜",
  },
  {
    title: "Triangle",
    description:
      "Learn the area of triangles and understand base and height.",
    formula: "Area = ½ × b × h",
    icon: "🔺",
  },
  {
    title: "Circle",
    description:
      "Understand radius, diameter, circumference and area of a circle.",
    formula: "Area = πr²",
    icon: "⭕",
  },
  {
    title: "Cuboid",
    description:
      "Learn volume and surface area calculations for cuboids.",
    formula: "Volume = l × b × h",
    icon: "📦",
  },
  {
    title: "Cube",
    description:
      "Study total surface area, lateral surface area and volume of a cube.",
    formula: "Volume = a³",
    icon: "🧊",
  },
  {
    title: "Cylinder",
    description:
      "Learn the curved surface area, total surface area and volume of a cylinder.",
    formula: "Volume = πr²h",
    icon: "🥫",
  },
];

const formulas = [
  {
    title: "Rectangle Area",
    formula: "A = l × b",
  },
  {
    title: "Rectangle Perimeter",
    formula: "P = 2(l + b)",
  },
  {
    title: "Square Area",
    formula: "A = a²",
  },
  {
    title: "Square Perimeter",
    formula: "P = 4a",
  },
  {
    title: "Triangle Area",
    formula: "A = ½ × b × h",
  },
  {
    title: "Circle Area",
    formula: "A = πr²",
  },
  {
    title: "Circle Circumference",
    formula: "C = 2πr",
  },
  {
    title: "Cuboid Volume",
    formula: "V = l × b × h",
  },
  {
    title: "Cube Volume",
    formula: "V = a³",
  },
  {
    title: "Cylinder Volume",
    formula: "V = πr²h",
  },
];

const examples = [
  {
    question: "Find the area of a rectangle with length 10 cm and breadth 5 cm.",
    solution: "A = l × b = 10 × 5 = 50 cm²",
  },
  {
    question: "Find the perimeter of a square whose side is 8 cm.",
    solution: "P = 4a = 4 × 8 = 32 cm",
  },
  {
    question: "Find the area of a triangle with base 12 cm and height 5 cm.",
    solution: "A = ½ × 12 × 5 = 30 cm²",
  },
  {
    question: "Find the volume of a cube with side 4 cm.",
    solution: "V = a³ = 4³ = 64 cm³",
  },
];

const keyPoints = [
  "Perimeter measures the boundary of a two-dimensional shape.",
  "Area measures the surface covered by a two-dimensional shape.",
  "Volume measures the space occupied by a three-dimensional object.",
  "Area is generally measured in square units such as cm² and m².",
  "Volume is generally measured in cubic units such as cm³ and m³.",
  "Diameter of a circle is twice its radius.",
];

export default function MensurationPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">

          <Link
            href="/learn/mathematics"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Mathematics
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Mensuration
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn perimeter, area, surface area and volume of
              common shapes and solids with formulas and examples.
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
              {examples.length}
            </p>

            <p className="text-gray-500">
              Examples
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <Calculator
              className="text-indigo-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {formulas.length}
            </p>

            <p className="text-gray-500">
              Formulas
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <span className="text-3xl">
              📐
            </span>

            <p className="text-3xl font-black text-gray-900 mt-2">
              {topics.length}
            </p>

            <p className="text-gray-500">
              Topics
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <Trophy
              className="text-yellow-500"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              —
            </p>

            <p className="text-gray-500">
              MCQ Practice
            </p>

          </div>

        </div>

      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Calculator
            className="text-purple-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Mensuration Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Understand important shapes and mensuration formulas.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic, index) => (

            <article
              key={topic.title}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl">
                  {topic.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Topic {index + 1}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-purple-600 transition">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-5 rounded-xl bg-purple-50 p-4">

                <p className="text-xs font-bold text-gray-500 uppercase">
                  Formula
                </p>

                <p className="mt-1 font-black text-purple-600">
                  {topic.formula}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* FORMULAS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Calculator
              className="text-purple-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Mensuration Formulas
              </h2>

              <p className="text-gray-500 mt-1">
                Quick revision of commonly used formulas.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {formulas.map((item) => (

              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-purple-50 hover:border-purple-200 transition"
              >

                <h3 className="font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-xl font-black text-purple-600">
                  {item.formula}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">

            <div className="flex items-center gap-3">

              <CheckCircle2
                className="text-green-600"
                size={30}
              />

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Key Points
              </h2>

            </div>

            <div className="mt-6 space-y-4">

              {keyPoints.map((point) => (

                <div
                  key={point}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    className="text-green-500 shrink-0 mt-0.5"
                    size={20}
                  />

                  <p className="text-gray-700 leading-relaxed">
                    {point}
                  </p>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-7">

            <Lightbulb size={30} />

            <h2 className="mt-4 text-2xl font-black">
              Study Tip
            </h2>

            <p className="mt-3 text-white/90 leading-relaxed">
              First identify whether the question asks for
              perimeter, area or volume. Then write the correct
              formula, substitute the values and always include
              the correct unit.
            </p>

            <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-5">

              <p className="text-sm text-white/70 font-semibold">
                Remember
              </p>

              <p className="mt-2 font-black">
                Area → square units
              </p>

              <p className="mt-1 font-black">
                Volume → cubic units
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* EXAMPLES */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <BookOpen
              className="text-purple-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Solved Examples
              </h2>

              <p className="text-gray-500 mt-1">
                Practice the basic mensuration formulas.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {examples.map((example, index) => (

              <article
                key={example.question}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >

                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <h3 className="mt-4 font-black text-gray-900 leading-relaxed">
                  {example.question}
                </h3>

                <div className="mt-4 rounded-xl bg-white border border-purple-100 p-4">

                  <p className="text-sm font-bold text-gray-500">
                    Solution
                  </p>

                  <p className="mt-2 font-black text-purple-600">
                    {example.solution}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="mensuration" />


      {/* FOOTER */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <Sparkles
            className="mx-auto text-cyan-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Mathematics
          </h2>

          <p className="mt-3 text-gray-400">
            Continue exploring Mathematics and strengthen your problem-solving skills.
          </p>

        </div>

      </section>

    </main>
  );
}
