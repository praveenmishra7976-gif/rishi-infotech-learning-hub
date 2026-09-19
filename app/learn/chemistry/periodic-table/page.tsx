"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const concepts = [
  {
    title: "Modern Periodic Table",
    icon: "🧪",
    description:
      "The modern periodic table arranges elements according to their increasing atomic number.",
  },
  {
    title: "Periods",
    icon: "📊",
    description:
      "The horizontal rows of the periodic table are called periods. There are seven periods.",
  },
  {
    title: "Groups",
    icon: "📚",
    description:
      "The vertical columns are called groups. The modern periodic table contains 18 groups.",
  },
  {
    title: "Metals",
    icon: "🔩",
    description:
      "Most elements are metals and are generally good conductors of heat and electricity.",
  },
  {
    title: "Non-Metals",
    icon: "🌬️",
    description:
      "Non-metals generally have different physical and chemical properties from metals.",
  },
  {
    title: "Noble Gases",
    icon: "💨",
    description:
      "Group 18 contains noble gases such as helium, neon, argon and others.",
  },
];

const importantElements = [
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: "1",
    group: "1",
    period: "1",
  },
  {
    name: "Helium",
    symbol: "He",
    atomicNumber: "2",
    group: "18",
    period: "1",
  },
  {
    name: "Carbon",
    symbol: "C",
    atomicNumber: "6",
    group: "14",
    period: "2",
  },
  {
    name: "Nitrogen",
    symbol: "N",
    atomicNumber: "7",
    group: "15",
    period: "2",
  },
  {
    name: "Oxygen",
    symbol: "O",
    atomicNumber: "8",
    group: "16",
    period: "2",
  },
  {
    name: "Sodium",
    symbol: "Na",
    atomicNumber: "11",
    group: "1",
    period: "3",
  },
  {
    name: "Chlorine",
    symbol: "Cl",
    atomicNumber: "17",
    group: "17",
    period: "3",
  },
  {
    name: "Calcium",
    symbol: "Ca",
    atomicNumber: "20",
    group: "2",
    period: "4",
  },
];

const groups = [
  {
    group: "Group 1",
    name: "Alkali Metals",
    examples: "Li, Na, K",
    icon: "⚡",
  },
  {
    group: "Group 2",
    name: "Alkaline Earth Metals",
    examples: "Be, Mg, Ca",
    icon: "🔩",
  },
  {
    group: "Groups 3–12",
    name: "Transition Elements",
    examples: "Fe, Cu, Zn",
    icon: "⚙️",
  },
  {
    group: "Group 17",
    name: "Halogens",
    examples: "F, Cl, Br, I",
    icon: "🧪",
  },
  {
    group: "Group 18",
    name: "Noble Gases",
    examples: "He, Ne, Ar",
    icon: "💨",
  },
];

const keyPoints = [
  "The modern periodic table has 7 periods and 18 groups.",
  "Elements are arranged according to increasing atomic number.",
  "Elements in the same group generally show similar chemical properties.",
  "Period number indicates the number of occupied electron shells in a simple atomic model.",
  "Group 1 contains alkali metals.",
  "Group 2 contains alkaline earth metals.",
  "Group 17 contains halogens.",
  "Group 18 contains noble gases.",
];

export default function PeriodicTablePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-600 text-white">

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
              Periodic Table
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn about periods, groups, metals, non-metals, noble gases
              and the arrangement of elements in the modern periodic table.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center">
              <Atom
                className="text-blue-600"
                size={32}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                What is the Periodic Table?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The periodic table is a systematic arrangement of chemical
                elements. In the modern periodic table, elements are arranged
                in order of increasing atomic number and are placed into
                groups and periods according to their properties.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="font-black text-blue-800">
                    7
                  </p>
                  <p className="mt-1 text-gray-700">
                    Periods
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                  <p className="font-black text-cyan-800">
                    18
                  </p>
                  <p className="mt-1 text-gray-700">
                    Groups
                  </p>
                </div>

                <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-5">
                  <p className="font-black text-indigo-800">
                    Atomic Number
                  </p>
                  <p className="mt-1 text-gray-700">
                    Arrangement basis
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BASIC CONCEPTS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-blue-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Concepts
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the basic structure of the periodic table.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {concepts.map((concept) => (

            <article
              key={concept.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                {concept.icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {concept.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {concept.description}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* GROUPS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <FlaskConical
              className="text-cyan-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Groups
              </h2>

              <p className="text-gray-500 mt-1">
                Some important families of elements.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {groups.map((item) => (

              <div
                key={item.group}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-7 hover:bg-blue-50 hover:border-blue-200 transition"
              >

                <div className="flex items-center justify-between">

                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>

                  <span className="text-xs font-black bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full">
                    {item.group}
                  </span>

                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-2 text-gray-600">
                  Examples:{" "}
                  <span className="font-bold text-blue-600">
                    {item.examples}
                  </span>
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ELEMENT TABLE */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Atom
            className="text-indigo-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Elements
            </h2>

            <p className="text-gray-500 mt-1">
              Selected elements and their positions.
            </p>

          </div>

        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">

          <table className="w-full min-w-[700px]">

            <thead>

              <tr className="bg-indigo-50">

                <th className="text-left p-4 font-black text-indigo-800">
                  Element
                </th>

                <th className="text-left p-4 font-black text-indigo-800">
                  Symbol
                </th>

                <th className="text-left p-4 font-black text-indigo-800">
                  Atomic Number
                </th>

                <th className="text-left p-4 font-black text-indigo-800">
                  Group
                </th>

                <th className="text-left p-4 font-black text-indigo-800">
                  Period
                </th>

              </tr>

            </thead>

            <tbody>

              {importantElements.map((item) => (

                <tr
                  key={item.symbol}
                  className="border-t border-gray-100"
                >

                  <td className="p-4 font-semibold text-gray-800">
                    {item.name}
                  </td>

                  <td className="p-4 font-black text-blue-600">
                    {item.symbol}
                  </td>

                  <td className="p-4 text-gray-700">
                    {item.atomicNumber}
                  </td>

                  <td className="p-4 text-gray-700">
                    {item.group}
                  </td>

                  <td className="p-4 text-gray-700">
                    {item.period}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* PERIODS AND GROUPS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7">

              <h2 className="text-2xl font-black text-blue-900">
                Periods
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Periods are the horizontal rows of the periodic table.
                There are seven periods. As we move across a period,
                atomic number generally increases from left to right.
              </p>

              <div className="mt-5 space-y-3">

                {[
                  "Period 1 → 2 elements",
                  "Period 2 → 8 elements",
                  "Period 3 → 8 elements",
                  "Period 4 → 18 elements",
                  "Period 5 → 18 elements",
                  "Period 6 → 32 elements",
                  "Period 7 → elements including the actinides",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-blue-600 mt-0.5 shrink-0"
                    />

                    <p className="text-gray-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-3xl bg-indigo-50 border border-indigo-100 p-7">

              <h2 className="text-2xl font-black text-indigo-900">
                Groups
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Groups are the vertical columns of the periodic table.
                Elements within the same group often have similar chemical
                properties because of related valence-electron arrangements.
              </p>

              <div className="mt-5 space-y-3">

                {[
                  "Group 1 → Alkali metals",
                  "Group 2 → Alkaline earth metals",
                  "Groups 3–12 → Transition elements",
                  "Group 17 → Halogens",
                  "Group 18 → Noble gases",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-indigo-600 mt-0.5 shrink-0"
                    />

                    <p className="text-gray-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Exam Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Remember the important groups: Group 1 is alkali metals,
                Group 2 is alkaline earth metals, Group 17 is halogens and
                Group 18 is noble gases. Also remember that the modern
                periodic table is arranged by increasing atomic number.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

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

                <span className="w-8 h-8 shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
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

      {/* NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">

          <div className="flex flex-col sm:flex-row gap-4 justify-between">

            <Link
              href="/learn/chemistry/structure-of-atom"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry/chemical-reactions"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700"
            >
              Next: Chemical Reactions
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
