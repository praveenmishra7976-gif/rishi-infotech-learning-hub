"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const chapters = [
  {
    id: "matter-and-its-properties",
    title: "Matter",
    description:
      "Learn about matter, its states, properties and changes of state.",
    icon: "🧪",
  },
  {
    id: "atoms-and-molecules",
    title: "Atoms & Molecules",
    description:
      "Understand atoms, molecules, symbols, chemical formulas and basic concepts.",
    icon: "⚛️",
  },
  {
    id: "structure-of-atom",
    title: "Structure of Atom",
    description:
      "Study electrons, protons, neutrons, atomic number and mass number.",
    icon: "🔬",
  },
  {
    id: "periodic-table",
    title: "Periodic Table",
    description:
      "Learn elements, groups, periods, metals, non-metals and periodic trends.",
    icon: "📊",
  },
  {
    id: "chemical-reactions",
    title: "Chemical Reactions",
    description:
      "Learn chemical equations, types of reactions and important examples.",
    icon: "⚗️",
  },
  {
    id: "acids-bases-and-salts",
    title: "Acids, Bases & Salts",
    description:
      "Understand acids, bases, indicators, pH and common salts.",
    icon: "🧴",
  },
  {
    id: "metals-and-non-metals",
    title: "Metals & Non-metals",
    description:
      "Study properties, reactions, uses and differences between metals and non-metals.",
    icon: "🔩",
  },
  {
    id: "carbon-and-its-compounds",
    title: "Carbon Compounds",
    description:
      "Learn carbon, hydrocarbons, functional groups and important compounds.",
    icon: "🧬",
  },
  {
    id: "mixtures-and-solutions",
    title: "Solutions",
    description:
      "Understand solute, solvent, concentration and types of solutions.",
    icon: "🥛",
  },
  {
    id: "chemistry-in-everyday-life",
    title: "Chemistry in Everyday Life",
    description:
      "Discover how chemistry is used in food, medicines, cleaning and daily life.",
    icon: "🏠",
  },
  {
    id: "states-of-matter",
    title: "States of Matter",
    description:
      "Understand solids, liquids and gases, particle arrangement, changes of state and the effects of temperature and pressure.",
    icon: "🧊",
  },
  {
    id: "environmental-chemistry",
    title: "Environmental Chemistry",
    description:
      "Learn about air, water and soil pollution, greenhouse gases, global warming, ozone and environmental protection.",
    icon: "🌍",
  },
];

const formulas = [
  {
    title: "Water",
    formula: "H₂O",
  },
  {
    title: "Carbon Dioxide",
    formula: "CO₂",
  },
  {
    title: "Common Salt",
    formula: "NaCl",
  },
  {
    title: "Oxygen",
    formula: "O₂",
  },
  {
    title: "Hydrogen",
    formula: "H₂",
  },
  {
    title: "Ammonia",
    formula: "NH₃",
  },
];

export default function ChemistryPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 text-white">

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
              Chemistry
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn Chemistry from basic concepts to important reactions,
              formulas, elements, compounds and everyday applications.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-green-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {chapters.length}
            </p>

            <p className="text-gray-500">
              Chapters
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <FlaskConical className="text-emerald-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              50+
            </p>

            <p className="text-gray-500">
              Concepts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <span className="text-3xl">
              ⚗️
            </span>

            <p className="text-3xl font-black text-gray-900 mt-2">
              25+
            </p>

            <p className="text-gray-500">
              Reactions
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

          <FlaskConical
            className="text-green-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Chemistry Chapters
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

                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl">
                  {chapter.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Chapter {index + 1}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-green-600 transition">
                {chapter.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {chapter.description}
              </p>

              <Link
                href={`/learn/chemistry/${chapter.id}`}
                className="mt-5 inline-flex items-center gap-2 text-green-600 font-bold"
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

            <FlaskConical
              className="text-green-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Important Chemistry Formulas
              </h2>

              <p className="text-gray-500 mt-1">
                Quick revision of common chemical formulas.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {formulas.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-green-50 hover:border-green-200 transition"
              >

                <h3 className="font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-2xl font-black text-green-600">
                  {item.formula}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                How to Study Chemistry
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                First understand the concept, then learn important formulas
                and reactions. Practice equations and MCQs regularly to
                strengthen your Chemistry knowledge.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 text-center">

          <Sparkles
            className="mx-auto text-green-400"
            size={38}
          />

          <h2 className="mt-5 text-3xl md:text-4xl font-black">
            Keep Learning Chemistry
          </h2>

          <p className="mt-3 text-gray-400">
            Explore more subjects and continue your learning journey.
          </p>

          <Link
            href="/learn"
            className="mt-7 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-4 rounded-xl"
          >
            Back to All Subjects
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}
