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
    title: "Introduction to Trigonometry",
    description:
      "Understand angles, right-angled triangles and the basic idea of trigonometry.",
    icon: "📐",
  },
  {
    title: "Trigonometric Ratios",
    description:
      "Learn sine, cosine and tangent and how they relate to the sides of a right triangle.",
    icon: "📊",
  },
  {
    title: "Standard Angles",
    description:
      "Learn important values of sin, cos and tan for standard angles.",
    icon: "📏",
  },
  {
    title: "Trigonometric Identities",
    description:
      "Understand important identities used to simplify and solve trigonometric problems.",
    icon: "🧮",
  },
  {
    title: "Heights & Distances",
    description:
      "Apply trigonometry to real-life problems involving heights, distances and angles.",
    icon: "🏗️",
  },
  {
    title: "Applications of Trigonometry",
    description:
      "Explore practical applications of trigonometry in science, engineering and measurement.",
    icon: "🔭",
  },
];

const formulas = [
  {
    title: "Sine Ratio",
    formula: "sin θ = Perpendicular / Hypotenuse",
    icon: "🔵",
  },
  {
    title: "Cosine Ratio",
    formula: "cos θ = Base / Hypotenuse",
    icon: "🟢",
  },
  {
    title: "Tangent Ratio",
    formula: "tan θ = Perpendicular / Base",
    icon: "🟠",
  },
  {
    title: "Pythagorean Identity",
    formula: "sin²θ + cos²θ = 1",
    icon: "⭐",
  },
  {
    title: "Tangent Identity",
    formula: "tan θ = sin θ / cos θ",
    icon: "📐",
  },
  {
    title: "Pythagoras Theorem",
    formula: "a² + b² = c²",
    icon: "📏",
  },
];

const standardAngles = [
  {
    angle: "0°",
    sin: "0",
    cos: "1",
    tan: "0",
  },
  {
    angle: "30°",
    sin: "1/2",
    cos: "√3/2",
    tan: "1/√3",
  },
  {
    angle: "45°",
    sin: "1/√2",
    cos: "1/√2",
    tan: "1",
  },
  {
    angle: "60°",
    sin: "√3/2",
    cos: "1/2",
    tan: "√3",
  },
  {
    angle: "90°",
    sin: "1",
    cos: "0",
    tan: "Not defined",
  },
];

const mcqs = [
  {
    question: "What is sin 30°?",
    options: ["0", "1/2", "1", "√3/2"],
    answer: "1/2",
  },
  {
    question: "What is cos 60°?",
    options: ["0", "1/2", "√3/2", "1"],
    answer: "1/2",
  },
  {
    question: "What is tan 45°?",
    options: ["0", "1/2", "1", "√3"],
    answer: "1",
  },
  {
    question: "Which ratio is Perpendicular / Hypotenuse?",
    options: ["sin θ", "cos θ", "tan θ", "sec θ"],
    answer: "sin θ",
  },
];

export default function TrigonometryPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

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
              Trigonometry
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn trigonometric ratios, standard angles, identities,
              heights and distances with simple explanations and examples.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-purple-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {topics.length}
            </p>

            <p className="text-gray-500">
              Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-indigo-600" size={28} />

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
              5
            </p>

            <p className="text-gray-500">
              Standard Angles
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {mcqs.length}
            </p>

            <p className="text-gray-500">
              MCQs
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
              Trigonometry Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Learn the important concepts step by step.
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

              <div className="mt-5 inline-flex items-center gap-2 text-purple-600 font-bold">
                Topic Overview
              </div>

            </article>

          ))}

        </div>

      </section>

      {/* BASIC RATIOS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Basic Trigonometric Ratios
            </h2>

            <p className="mt-3 text-gray-500 leading-relaxed">
              For a right-angled triangle, the three most important
              trigonometric ratios are sine, cosine and tangent.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7 text-center">

              <div className="text-4xl">
                🔵
              </div>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                Sine
              </h3>

              <p className="mt-4 text-xl font-black text-blue-600">
                sin θ = Perpendicular / Hypotenuse
              </p>

              <p className="mt-3 text-gray-600">
                SOH
              </p>

            </div>

            <div className="rounded-3xl bg-green-50 border border-green-100 p-7 text-center">

              <div className="text-4xl">
                🟢
              </div>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                Cosine
              </h3>

              <p className="mt-4 text-xl font-black text-green-600">
                cos θ = Base / Hypotenuse
              </p>

              <p className="mt-3 text-gray-600">
                CAH
              </p>

            </div>

            <div className="rounded-3xl bg-orange-50 border border-orange-100 p-7 text-center">

              <div className="text-4xl">
                🟠
              </div>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                Tangent
              </h3>

              <p className="mt-4 text-xl font-black text-orange-600">
                tan θ = Perpendicular / Base
              </p>

              <p className="mt-3 text-gray-600">
                TOA
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FORMULAS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Calculator
            className="text-purple-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Trigonometry Formulas
            </h2>

            <p className="text-gray-500 mt-1">
              Quick revision of important formulas.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {formulas.map((item) => (

            <article
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 hover:bg-purple-50 hover:border-purple-200 transition"
            >

              <div className="text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-4 font-black text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-lg font-black text-purple-600">
                {item.formula}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* STANDARD ANGLES */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <BookOpen
              className="text-purple-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Standard Angle Values
              </h2>

              <p className="text-gray-500 mt-1">
                Important values for quick revision.
              </p>

            </div>

          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">

            <table className="w-full min-w-[600px] text-left">

              <thead className="bg-purple-600 text-white">

                <tr>
                  <th className="px-5 py-4 font-black">
                    Angle
                  </th>

                  <th className="px-5 py-4 font-black">
                    sin θ
                  </th>

                  <th className="px-5 py-4 font-black">
                    cos θ
                  </th>

                  <th className="px-5 py-4 font-black">
                    tan θ
                  </th>
                </tr>

              </thead>

              <tbody>

                {standardAngles.map((item, index) => (

                  <tr
                    key={item.angle}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >

                    <td className="px-5 py-4 font-black text-gray-900">
                      {item.angle}
                    </td>

                    <td className="px-5 py-4 font-bold text-blue-600">
                      {item.sin}
                    </td>

                    <td className="px-5 py-4 font-bold text-green-600">
                      {item.cos}
                    </td>

                    <td className="px-5 py-4 font-bold text-orange-600">
                      {item.tan}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* PYTHAGOREAN IDENTITY */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 md:p-12">

          <div className="max-w-4xl">

            <div className="flex items-center gap-3">

              <Sparkles size={30} />

              <span className="font-bold">
                Important Identity
              </span>

            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-black">
              Pythagorean Trigonometric Identity
            </h2>

            <p className="mt-5 text-3xl md:text-5xl font-black">
              sin²θ + cos²θ = 1
            </p>

            <p className="mt-5 text-white/90 text-lg leading-relaxed">
              This is one of the most important identities in
              trigonometry. It can be used to find one trigonometric
              ratio when another ratio is known.
            </p>

          </div>

        </div>

      </section>

      {/* MCQ */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Trophy
              className="text-yellow-500"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Trigonometry Quick MCQs
              </h2>

              <p className="text-gray-500 mt-1">
                Test your basic understanding.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {mcqs.map((item, index) => (

              <article
                key={item.question}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >

                <div className="flex gap-4">

                  <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div className="flex-1">

                    <h3 className="font-black text-gray-900">
                      {item.question}
                    </h3>

                    <div className="mt-4 grid grid-cols-2 gap-2">

                      {item.options.map((option) => (

                        <div
                          key={option}
                          className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700"
                        >
                          {option}
                        </div>

                      ))}

                    </div>

                    <div className="mt-4 flex items-center gap-2 text-green-600 font-bold">
                      <CheckCircle2 size={18} />
                      Answer: {item.answer}
                    </div>

                  </div>

                </div>

              </article>

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
                How to Study Trigonometry
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                First understand the right triangle and the meaning of
                perpendicular, base and hypotenuse. Then learn SOH-CAH-TOA,
                memorize the standard angle values and practice problems
                regularly. Understanding the ratios is more useful than
                simply memorizing formulas.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="trigonometry" />


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
            Practice regularly and build strong mathematical skills.
          </p>

        </div>

      </section>

    </main>
  );
}
