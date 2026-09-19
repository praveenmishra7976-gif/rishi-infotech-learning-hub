"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  Lightbulb,
  Sparkles,
  Zap,
} from "lucide-react";

const reactionTypes = [
  {
    title: "Combination Reaction",
    icon: "➕",
    description:
      "Two or more substances combine to form a single new substance.",
    example: "CaO + H₂O → Ca(OH)₂",
  },
  {
    title: "Decomposition Reaction",
    icon: "💥",
    description:
      "A single compound breaks down into two or more simpler substances.",
    example: "CaCO₃ → CaO + CO₂",
  },
  {
    title: "Displacement Reaction",
    icon: "🔄",
    description:
      "A more reactive element displaces a less reactive element from its compound.",
    example: "Zn + CuSO₄ → ZnSO₄ + Cu",
  },
  {
    title: "Double Displacement",
    icon: "🔁",
    description:
      "Two compounds exchange ions to form two new compounds.",
    example: "Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl",
  },
  {
    title: "Combustion Reaction",
    icon: "🔥",
    description:
      "A substance reacts with oxygen and usually releases heat and light.",
    example: "CH₄ + 2O₂ → CO₂ + 2H₂O",
  },
  {
    title: "Neutralization Reaction",
    icon: "⚗️",
    description:
      "An acid reacts with a base to form salt and water.",
    example: "HCl + NaOH → NaCl + H₂O",
  },
];

const signs = [
  {
    title: "Change in Colour",
    description:
      "A chemical reaction may produce a visible change in colour.",
    icon: "🎨",
  },
  {
    title: "Gas Formation",
    description:
      "Evolution of a gas can indicate that a chemical reaction has occurred.",
    icon: "💨",
  },
  {
    title: "Temperature Change",
    description:
      "Some reactions release heat while others absorb heat.",
    icon: "🌡️",
  },
  {
    title: "Formation of Precipitate",
    description:
      "An insoluble solid may form when two solutions react.",
    icon: "🧪",
  },
];

const keyPoints = [
  "A chemical reaction produces one or more new substances.",
  "Reactants are the substances that take part in a chemical reaction.",
  "Products are the new substances formed during a reaction.",
  "A chemical equation represents a chemical reaction using symbols and formulas.",
  "A balanced chemical equation has equal numbers of atoms of each element on both sides.",
  "Combination reactions form a single product.",
  "Decomposition reactions involve breaking one compound into simpler substances.",
  "Displacement reactions depend on the relative reactivity of elements.",
];

const examples = [
  {
    title: "Formation of Water",
    equation: "2H₂ + O₂ → 2H₂O",
    type: "Combination",
  },
  {
    title: "Calcium Carbonate Decomposition",
    equation: "CaCO₃ → CaO + CO₂",
    type: "Decomposition",
  },
  {
    title: "Zinc and Copper Sulphate",
    equation: "Zn + CuSO₄ → ZnSO₄ + Cu",
    type: "Displacement",
  },
  {
    title: "Acid and Base",
    equation: "HCl + NaOH → NaCl + H₂O",
    type: "Neutralization",
  },
];

export default function ChemicalReactionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-orange-600 via-red-500 to-rose-600 text-white">

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
              Chemical Reactions
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn chemical reactions, chemical equations, reaction types,
              balancing equations, oxidation, reduction and everyday examples.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center">
              <FlaskConical
                className="text-orange-600"
                size={32}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                What is a Chemical Reaction?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                A chemical reaction is a process in which one or more
                substances change to form new substances with different
                properties. The starting substances are called reactants
                and the substances formed are called products.
              </p>

              <div className="mt-6 grid md:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5">
                  <p className="text-sm font-bold text-orange-600">
                    Reactants
                  </p>
                  <p className="mt-2 text-gray-700">
                    Substances present at the beginning.
                  </p>
                </div>

                <div className="rounded-2xl bg-red-50 border border-red-100 p-5">
                  <p className="text-sm font-bold text-red-600">
                    Reaction
                  </p>
                  <p className="mt-2 text-gray-700">
                    Chemical change takes place.
                  </p>
                </div>

                <div className="rounded-2xl bg-rose-50 border border-rose-100 p-5">
                  <p className="text-sm font-bold text-rose-600">
                    Products
                  </p>
                  <p className="mt-2 text-gray-700">
                    New substances are formed.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SIGNS OF REACTION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <Zap
            className="text-orange-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Signs of a Chemical Reaction
            </h2>

            <p className="text-gray-500 mt-1">
              Common observations that may indicate a chemical change.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {signs.map((sign) => (

            <article
              key={sign.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl">
                {sign.icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {sign.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {sign.description}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* REACTION TYPES */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <BookOpen
              className="text-red-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Types of Chemical Reactions
              </h2>

              <p className="text-gray-500 mt-1">
                Learn the major reaction types with examples.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {reactionTypes.map((reaction) => (

              <article
                key={reaction.title}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-7 hover:bg-orange-50 hover:border-orange-200 transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl">
                  {reaction.icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {reaction.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {reaction.description}
                </p>

                <div className="mt-5 rounded-2xl bg-white border border-gray-200 p-4">

                  <p className="text-xs uppercase tracking-wide font-black text-gray-500">
                    Example
                  </p>

                  <p className="mt-2 font-black text-orange-600 text-lg">
                    {reaction.example}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* CHEMICAL EQUATIONS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-red-50 flex items-center justify-center">
              <FlaskConical
                className="text-red-600"
                size={30}
              />
            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Chemical Equations
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                A chemical equation is a short way of representing a
                chemical reaction using chemical symbols and formulas.
                The reactants are generally written on the left side and
                the products on the right side.
              </p>

              <div className="mt-7 rounded-2xl bg-gray-900 text-white p-6 overflow-x-auto">

                <p className="text-sm text-gray-400">
                  Example
                </p>

                <p className="mt-3 text-2xl md:text-3xl font-black whitespace-nowrap">
                  2H₂ + O₂ → 2H₂O
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BALANCING */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Balancing Chemical Equations
          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
            A chemical equation is balanced when the number of atoms of
            every element is the same on the reactant side and the product
            side. This follows the law of conservation of mass.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="rounded-3xl bg-red-50 border border-red-100 p-7">

              <p className="text-sm font-black uppercase tracking-wide text-red-600">
                Unbalanced
              </p>

              <p className="mt-4 text-2xl font-black text-gray-900">
                H₂ + O₂ → H₂O
              </p>

              <p className="mt-4 text-gray-600">
                The number of oxygen atoms is not equal on both sides.
              </p>

            </div>

            <div className="rounded-3xl bg-green-50 border border-green-100 p-7">

              <p className="text-sm font-black uppercase tracking-wide text-green-600">
                Balanced
              </p>

              <p className="mt-4 text-2xl font-black text-gray-900">
                2H₂ + O₂ → 2H₂O
              </p>

              <p className="mt-4 text-gray-600">
                Both hydrogen and oxygen atoms are equal on both sides.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <FlaskConical
            className="text-orange-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Reaction Examples
            </h2>

            <p className="text-gray-500 mt-1">
              Useful equations for quick revision.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {examples.map((example) => (

            <div
              key={example.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >

              <div className="flex items-start justify-between gap-4">

                <div>

                  <h3 className="text-xl font-black text-gray-900">
                    {example.title}
                  </h3>

                  <span className="inline-block mt-2 text-xs font-black bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full">
                    {example.type}
                  </span>

                </div>

                <CheckCircle2
                  className="text-green-500 shrink-0"
                  size={24}
                />

              </div>

              <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-100 p-5 overflow-x-auto">

                <p className="text-xl font-black text-orange-600 whitespace-nowrap">
                  {example.equation}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Important Points for Exams
          </h2>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">

            {keyPoints.map((point, index) => (

              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4"
              >

                <span className="w-8 h-8 shrink-0 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black">
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

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                While studying chemical reactions, first identify the
                reactants and products. Then identify the type of reaction
                and practise balancing the equation. Learning the common
                reaction patterns makes revision much easier.
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
              href="/learn/chemistry/periodic-table"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry/acids-bases-and-salts"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700"
            >
              Next: Acids, Bases and Salts
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
