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
    title: "Atom",
    icon: "⚛️",
    description:
      "An atom is the smallest unit of an element that retains the chemical properties of that element.",
  },
  {
    title: "Molecule",
    icon: "🧪",
    description:
      "A molecule is formed when two or more atoms are chemically bonded together.",
  },
  {
    title: "Element",
    icon: "🔬",
    description:
      "An element is a pure substance made up of only one type of atom.",
  },
  {
    title: "Compound",
    icon: "⚗️",
    description:
      "A compound is a pure substance formed when atoms of different elements combine chemically in a fixed ratio.",
  },
  {
    title: "Atomic Mass",
    icon: "⚖️",
    description:
      "Atomic mass represents the relative mass of an atom compared with the standard atomic mass unit.",
  },
  {
    title: "Molecular Mass",
    icon: "📐",
    description:
      "Molecular mass is the sum of the atomic masses of all atoms present in a molecule.",
  },
];

const examples = [
  {
    formula: "H₂",
    name: "Hydrogen",
    type: "Molecule of an element",
    icon: "💨",
  },
  {
    formula: "O₂",
    name: "Oxygen",
    type: "Molecule of an element",
    icon: "🌬️",
  },
  {
    formula: "H₂O",
    name: "Water",
    type: "Compound",
    icon: "💧",
  },
  {
    formula: "CO₂",
    name: "Carbon Dioxide",
    type: "Compound",
    icon: "🌫️",
  },
  {
    formula: "NaCl",
    name: "Sodium Chloride",
    type: "Compound",
    icon: "🧂",
  },
  {
    formula: "NH₃",
    name: "Ammonia",
    type: "Compound",
    icon: "⚗️",
  },
];

const atomicMasses = [
  { element: "Hydrogen", symbol: "H", mass: "1 u" },
  { element: "Carbon", symbol: "C", mass: "12 u" },
  { element: "Nitrogen", symbol: "N", mass: "14 u" },
  { element: "Oxygen", symbol: "O", mass: "16 u" },
  { element: "Sodium", symbol: "Na", mass: "23 u" },
  { element: "Chlorine", symbol: "Cl", mass: "35.5 u" },
];

const keyPoints = [
  "Atoms are the basic building blocks of matter.",
  "An element contains only one type of atom.",
  "Molecules can contain atoms of the same or different elements.",
  "A compound contains two or more different elements chemically combined.",
  "Chemical formulas show the elements and number of atoms present.",
  "The subscript in a formula tells the number of atoms of an element.",
  "H₂O contains two hydrogen atoms and one oxygen atom.",
  "CO₂ contains one carbon atom and two oxygen atoms.",
];

export default function AtomsAndMoleculesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 text-white">

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
              Atoms and Molecules
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Understand atoms, molecules, elements, compounds, chemical
              formulas and basic atomic and molecular masses.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Atom
                className="text-indigo-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                What are Atoms and Molecules?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Everything around us is made of matter, and matter is made
                from tiny particles called atoms. Atoms can combine with
                one another to form molecules and compounds.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">

                <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-5">

                  <p className="font-black text-indigo-800">
                    Atom
                  </p>

                  <p className="mt-2 text-gray-700">
                    Basic unit of an element.
                  </p>

                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">

                  <p className="font-black text-blue-800">
                    Molecule
                  </p>

                  <p className="mt-2 text-gray-700">
                    Two or more atoms chemically bonded together.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONCEPTS */}

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
              Learn the basic terminology used in chemistry.
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

      {/* ELEMENT VS COMPOUND */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Element vs Compound
          </h2>

          <p className="mt-2 text-gray-500">
            Understand the difference between elements and compounds.
          </p>

          <div className="mt-8 overflow-x-auto">

            <table className="w-full min-w-[700px] border-collapse">

              <thead>

                <tr className="bg-blue-50">

                  <th className="text-left p-4 font-black text-blue-800">
                    Element
                  </th>

                  <th className="text-left p-4 font-black text-blue-800">
                    Compound
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-gray-100">

                  <td className="p-4 text-gray-700">
                    Made of one type of atom.
                  </td>

                  <td className="p-4 text-gray-700">
                    Made of atoms of two or more different elements.
                  </td>

                </tr>

                <tr className="border-b border-gray-100">

                  <td className="p-4 text-gray-700">
                    Cannot be broken into simpler substances by ordinary
                    chemical methods.
                  </td>

                  <td className="p-4 text-gray-700">
                    Can be chemically decomposed into its constituent
                    elements.
                  </td>

                </tr>

                <tr>

                  <td className="p-4 text-gray-700">
                    Example: Oxygen (O₂).
                  </td>

                  <td className="p-4 text-gray-700">
                    Example: Water (H₂O).
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* FORMULAS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <FlaskConical
            className="text-cyan-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Common Molecules and Compounds
            </h2>

            <p className="text-gray-500 mt-1">
              Learn some important chemical formulas.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {examples.map((item) => (

            <div
              key={item.formula}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:border-blue-200 transition"
            >

              <div className="flex items-center justify-between">

                <span className="text-3xl">
                  {item.icon}
                </span>

                <span className="text-xs font-black bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
                  Formula
                </span>

              </div>

              <p className="mt-5 text-3xl font-black text-blue-600">
                {item.formula}
              </p>

              <h3 className="mt-3 text-xl font-black text-gray-900">
                {item.name}
              </h3>

              <p className="mt-2 text-gray-500">
                {item.type}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ATOMIC MASSES */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Atom
              className="text-indigo-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Common Atomic Masses
              </h2>

              <p className="text-gray-500 mt-1">
                Useful values for basic chemistry calculations.
              </p>

            </div>

          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100">

            <table className="w-full min-w-[500px]">

              <thead>

                <tr className="bg-indigo-50">

                  <th className="text-left p-4 font-black text-indigo-800">
                    Element
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    Symbol
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    Approx. Atomic Mass
                  </th>

                </tr>

              </thead>

              <tbody>

                {atomicMasses.map((item) => (

                  <tr
                    key={item.symbol}
                    className="border-t border-gray-100"
                  >

                    <td className="p-4 font-semibold text-gray-800">
                      {item.element}
                    </td>

                    <td className="p-4 font-black text-blue-600">
                      {item.symbol}
                    </td>

                    <td className="p-4 text-gray-700">
                      {item.mass}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* MOLECULAR MASS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">

          <h2 className="text-3xl md:text-4xl font-black">
            Molecular Mass
          </h2>

          <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
            Molecular mass is calculated by adding the atomic masses of
            all atoms present in a molecule.
          </p>

          <div className="mt-7 grid md:grid-cols-2 gap-5">

            <div className="rounded-2xl bg-white/10 p-6">

              <p className="text-sm font-bold text-white/80">
                Example 1
              </p>

              <p className="mt-3 text-2xl font-black">
                H₂O
              </p>

              <p className="mt-3 text-white/90">
                = 2 × 1 + 16
              </p>

              <p className="mt-2 text-xl font-black">
                = 18 u
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6">

              <p className="text-sm font-bold text-white/80">
                Example 2
              </p>

              <p className="mt-3 text-2xl font-black">
                CO₂
              </p>

              <p className="mt-3 text-white/90">
                = 12 + 2 × 16
              </p>

              <p className="mt-2 text-xl font-black">
                = 44 u
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-yellow-50 flex items-center justify-center">
              <Lightbulb
                className="text-yellow-600"
                size={30}
              />
            </div>

            <div className="w-full">

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

          </div>

        </div>

      </section>

      {/* NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">

          <div className="flex flex-col sm:flex-row gap-4 justify-between">

            <Link
              href="/learn/chemistry/matter-and-its-properties"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry/structure-of-atom"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700"
            >
              Next: Structure of Atom
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
