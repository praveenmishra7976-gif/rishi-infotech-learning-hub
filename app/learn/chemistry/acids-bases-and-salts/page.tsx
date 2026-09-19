"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Beaker,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  Lightbulb,
  Sparkles,
  TestTube2,
} from "lucide-react";

const topics = [
  {
    title: "Acids",
    icon: "🍋",
    description:
      "Acids are substances that produce hydrogen ions in aqueous solution and generally have a sour taste.",
    examples: "HCl, H₂SO₄, HNO₃, CH₃COOH",
  },
  {
    title: "Bases",
    icon: "🧼",
    description:
      "Bases are substances that produce hydroxide ions in aqueous solution and can neutralize acids.",
    examples: "NaOH, KOH, Ca(OH)₂",
  },
  {
    title: "Indicators",
    icon: "🧪",
    description:
      "Indicators are substances that show different colours in acidic and basic solutions.",
    examples: "Litmus, methyl orange, phenolphthalein",
  },
  {
    title: "pH Scale",
    icon: "📊",
    description:
      "The pH scale is used to indicate how acidic or basic an aqueous solution is.",
    examples: "Acidic < 7, Neutral = 7, Basic > 7",
  },
  {
    title: "Neutralization",
    icon: "⚗️",
    description:
      "An acid reacts with a base to form salt and water.",
    examples: "HCl + NaOH → NaCl + H₂O",
  },
  {
    title: "Salts",
    icon: "🧂",
    description:
      "Salts are ionic compounds that can be formed during acid-base reactions.",
    examples: "NaCl, CuSO₄, Na₂CO₃",
  },
];

const indicators = [
  {
    name: "Blue Litmus",
    acidic: "Turns red",
    basic: "Remains blue",
    neutral: "Remains blue",
  },
  {
    name: "Red Litmus",
    acidic: "Remains red",
    basic: "Turns blue",
    neutral: "Remains red",
  },
  {
    name: "Methyl Orange",
    acidic: "Red",
    basic: "Yellow",
    neutral: "Orange",
  },
  {
    name: "Phenolphthalein",
    acidic: "Colourless",
    basic: "Pink",
    neutral: "Colourless",
  },
];

const reactions = [
  {
    title: "Acid + Metal",
    equation: "Zn + 2HCl → ZnCl₂ + H₂",
    result: "Salt + Hydrogen gas",
  },
  {
    title: "Acid + Base",
    equation: "HCl + NaOH → NaCl + H₂O",
    result: "Salt + Water",
  },
  {
    title: "Acid + Metal Carbonate",
    equation: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂",
    result: "Salt + Water + Carbon dioxide",
  },
  {
    title: "Acid + Metal Oxide",
    equation: "CuO + 2HCl → CuCl₂ + H₂O",
    result: "Salt + Water",
  },
];

const salts = [
  {
    name: "Sodium Chloride",
    formula: "NaCl",
    use: "Common salt and food preservation",
    icon: "🧂",
  },
  {
    name: "Baking Soda",
    formula: "NaHCO₃",
    use: "Baking and some household applications",
    icon: "🥣",
  },
  {
    name: "Washing Soda",
    formula: "Na₂CO₃·10H₂O",
    use: "Cleaning and softening hard water",
    icon: "🧺",
  },
  {
    name: "Bleaching Powder",
    formula: "CaOCl₂",
    use: "Disinfection and bleaching",
    icon: "🧴",
  },
  {
    name: "Plaster of Paris",
    formula: "CaSO₄·½H₂O",
    use: "Plaster casts and moulds",
    icon: "🏗️",
  },
];

const keyPoints = [
  "Acids generally turn blue litmus red.",
  "Bases generally turn red litmus blue.",
  "A neutral solution has a pH of 7 at 25°C.",
  "Solutions with pH below 7 are acidic.",
  "Solutions with pH above 7 are basic.",
  "Neutralization is the reaction between an acid and a base.",
  "Acid + base generally produces salt and water.",
  "Acids reacting with many metals can release hydrogen gas.",
  "Acids reacting with metal carbonates can produce carbon dioxide gas.",
  "Common salt is sodium chloride, NaCl.",
];

export default function AcidsBasesSaltsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">

          <Link
            href="/learn/chemistry"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Chemistry
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Acids, Bases and Salts
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn acids, bases, indicators, pH scale, neutralization
              reactions, important salts and their everyday uses.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <Beaker
                className="text-emerald-600"
                size={32}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Introduction
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Acids, bases and salts are important groups of chemical
                substances. They are found in laboratories, industries,
                food, medicines and many everyday products. Their properties
                can be studied using indicators, reactions and the pH scale.
              </p>

              <div className="mt-6 grid md:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-red-50 border border-red-100 p-5">
                  <p className="text-sm font-black text-red-600">
                    Acids
                  </p>
                  <p className="mt-2 text-gray-700">
                    Usually have pH below 7.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
                  <p className="text-sm font-black text-gray-700">
                    Neutral
                  </p>
                  <p className="mt-2 text-gray-700">
                    pH is 7 at 25°C.
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-sm font-black text-blue-600">
                    Bases
                  </p>
                  <p className="mt-2 text-gray-700">
                    Usually have pH above 7.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAIN TOPICS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-emerald-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Concepts
            </h2>

            <p className="text-gray-500 mt-1">
              Learn the basic properties of acids, bases and salts.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => (

            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-4 rounded-2xl bg-gray-50 p-4">

                <p className="text-xs uppercase tracking-wide font-black text-gray-500">
                  Examples
                </p>

                <p className="mt-2 font-bold text-emerald-600">
                  {topic.examples}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* INDICATORS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <TestTube2
              className="text-purple-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Acid-Base Indicators
              </h2>

              <p className="text-gray-500 mt-1">
                Indicators help identify acidic and basic solutions.
              </p>

            </div>

          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100">

            <table className="w-full min-w-[700px] bg-white">

              <thead>

                <tr className="bg-purple-50">

                  <th className="text-left p-4 font-black text-purple-800">
                    Indicator
                  </th>

                  <th className="text-left p-4 font-black text-purple-800">
                    Acidic Solution
                  </th>

                  <th className="text-left p-4 font-black text-purple-800">
                    Basic Solution
                  </th>

                  <th className="text-left p-4 font-black text-purple-800">
                    Neutral Solution
                  </th>

                </tr>

              </thead>

              <tbody>

                {indicators.map((indicator) => (

                  <tr
                    key={indicator.name}
                    className="border-t border-gray-100"
                  >

                    <td className="p-4 font-bold text-gray-900">
                      {indicator.name}
                    </td>

                    <td className="p-4 text-red-600 font-semibold">
                      {indicator.acidic}
                    </td>

                    <td className="p-4 text-blue-600 font-semibold">
                      {indicator.basic}
                    </td>

                    <td className="p-4 text-gray-700 font-semibold">
                      {indicator.neutral}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* PH SCALE */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-cyan-50 flex items-center justify-center">
              <span className="text-3xl">
                📊
              </span>
            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Understanding the pH Scale
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The pH scale is commonly used to express the acidity or
                basicity of an aqueous solution. At 25°C, a pH of 7 is
                considered neutral.
              </p>

              <div className="mt-8">

                <div className="h-12 rounded-2xl overflow-hidden flex text-white font-black text-xs sm:text-sm">

                  <div className="flex-1 bg-red-600 flex items-center justify-center">
                    0
                  </div>

                  <div className="flex-1 bg-orange-500 flex items-center justify-center">
                    2
                  </div>

                  <div className="flex-1 bg-yellow-500 flex items-center justify-center">
                    4
                  </div>

                  <div className="flex-1 bg-lime-500 flex items-center justify-center">
                    6
                  </div>

                  <div className="flex-1 bg-green-500 flex items-center justify-center">
                    7
                  </div>

                  <div className="flex-1 bg-cyan-500 flex items-center justify-center">
                    8
                  </div>

                  <div className="flex-1 bg-blue-500 flex items-center justify-center">
                    10
                  </div>

                  <div className="flex-1 bg-indigo-600 flex items-center justify-center">
                    12
                  </div>

                  <div className="flex-1 bg-purple-700 flex items-center justify-center">
                    14
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-3 mt-4 text-center">

                  <div className="rounded-xl bg-red-50 p-4">
                    <p className="font-black text-red-600">
                      Acidic
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      pH &lt; 7
                    </p>
                  </div>

                  <div className="rounded-xl bg-green-50 p-4">
                    <p className="font-black text-green-600">
                      Neutral
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      pH = 7
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="font-black text-blue-600">
                      Basic
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      pH &gt; 7
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* REACTIONS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <FlaskConical
              className="text-emerald-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Reactions
              </h2>

              <p className="text-gray-500 mt-1">
                Common acid and base reactions for revision.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {reactions.map((reaction) => (

              <div
                key={reaction.title}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-7"
              >

                <h3 className="text-xl font-black text-gray-900">
                  {reaction.title}
                </h3>

                <div className="mt-5 rounded-2xl bg-gray-900 text-white p-5 overflow-x-auto">

                  <p className="text-lg md:text-xl font-black whitespace-nowrap">
                    {reaction.equation}
                  </p>

                </div>

                <div className="mt-4 flex items-start gap-3">

                  <CheckCircle2
                    className="text-green-500 shrink-0 mt-0.5"
                    size={20}
                  />

                  <p className="text-gray-700">
                    <span className="font-bold">
                      Product:
                    </span>{" "}
                    {reaction.result}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SALTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <span className="text-3xl">
            🧂
          </span>

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Salts
            </h2>

            <p className="text-gray-500 mt-1">
              Common salts and some of their uses.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {salts.map((salt) => (

            <div
              key={salt.name}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="flex items-start justify-between">

                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl">
                  {salt.icon}
                </div>

                <span className="text-sm font-black bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full">
                  {salt.formula}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {salt.name}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {salt.use}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* NEUTRALIZATION */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
                <FlaskConical size={30} />
              </div>

              <div>

                <h2 className="text-3xl md:text-4xl font-black">
                  Neutralization Reaction
                </h2>

                <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                  Neutralization occurs when an acid reacts with a base.
                  The reaction generally produces salt and water.
                </p>

                <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-5 overflow-x-auto">

                  <p className="text-xl md:text-2xl font-black whitespace-nowrap">
                    HCl + NaOH → NaCl + H₂O
                  </p>

                </div>

                <p className="mt-5 text-white/90 leading-relaxed">
                  Neutralization has many practical applications, including
                  controlling soil acidity and treating excess stomach acid.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Important Points for Exams
          </h2>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">

            {keyPoints.map((point, index) => (

              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4"
              >

                <span className="w-8 h-8 shrink-0 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </span>

                <p className="text-gray-700 leading-relaxed">
                  {point}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Remember the pH rule first: values below 7 are acidic,
                7 is neutral and values above 7 are basic. Then practise
                indicator colour changes and common acid-base equations.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">

          <div className="flex flex-col sm:flex-row gap-4 justify-between">

            <Link
              href="/learn/chemistry/chemical-reactions"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry/metals-and-non-metals"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700"
            >
              Next: Metals and Non-Metals
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
