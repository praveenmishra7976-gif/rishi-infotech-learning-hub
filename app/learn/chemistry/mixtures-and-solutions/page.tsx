
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Beaker,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const types = [
  {
    title: "Homogeneous Mixture",
    icon: "🥤",
    description:
      "A mixture in which the components are uniformly distributed throughout the mixture.",
    examples: "Salt solution, sugar solution, air",
  },
  {
    title: "Heterogeneous Mixture",
    icon: "🥗",
    description:
      "A mixture in which the components are not uniformly distributed and can often be distinguished.",
    examples: "Sand and water, oil and water, soil",
  },
  {
    title: "Solution",
    icon: "🧪",
    description:
      "A homogeneous mixture of two or more substances. The substance that dissolves is the solute and the dissolving medium is the solvent.",
    examples: "Salt + water, sugar + water",
  },
];

const methods = [
  {
    title: "Filtration",
    icon: "🔽",
    description:
      "Used to separate an insoluble solid from a liquid using a filter.",
    example: "Separating sand from water.",
  },
  {
    title: "Evaporation",
    icon: "♨️",
    description:
      "Used to obtain a dissolved solid from a solution by removing the solvent.",
    example: "Obtaining salt from seawater.",
  },
  {
    title: "Distillation",
    icon: "🧪",
    description:
      "Separates substances based on differences in their boiling points.",
    example: "Obtaining pure water from salt solution.",
  },
  {
    title: "Centrifugation",
    icon: "🌀",
    description:
      "Uses rapid spinning to separate components with different densities.",
    example: "Separating cream from milk.",
  },
  {
    title: "Magnetic Separation",
    icon: "🧲",
    description:
      "Uses a magnet to separate magnetic substances from non-magnetic substances.",
    example: "Separating iron filings from sand.",
  },
  {
    title: "Chromatography",
    icon: "🎨",
    description:
      "Separates components of a mixture based on differences in their movement through a medium.",
    example: "Separating colours in ink.",
  },
];

const keyPoints = [
  "A mixture contains two or more substances physically combined.",
  "The components of a mixture retain their individual properties.",
  "Mixtures can usually be separated by physical methods.",
  "A homogeneous mixture has uniform composition throughout.",
  "A heterogeneous mixture does not have uniform composition.",
  "A solution is a homogeneous mixture.",
  "The substance that dissolves is called the solute.",
  "The substance that dissolves the solute is called the solvent.",
  "A solution can be dilute or concentrated depending on the amount of solute.",
  "Solubility generally describes how much solute can dissolve in a given amount of solvent under specified conditions.",
];

const solutionExamples = [
  {
    title: "Salt Solution",
    solute: "Salt",
    solvent: "Water",
    icon: "🧂",
  },
  {
    title: "Sugar Solution",
    solute: "Sugar",
    solvent: "Water",
    icon: "🍬",
  },
  {
    title: "Carbonated Water",
    solute: "Carbon dioxide",
    solvent: "Water",
    icon: "🥤",
  },
  {
    title: "Air",
    solute: "Various gases",
    solvent: "Not strictly a single solvent",
    icon: "💨",
  },
];

export default function MixturesAndSolutionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 text-white">

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
              Mixtures and Solutions
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn homogeneous and heterogeneous mixtures, solutions,
              solute, solvent, concentration, solubility and important
              methods used to separate mixtures.
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
                What is a Mixture?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                A mixture is formed when two or more substances are combined
                physically in any proportion. The substances in a mixture
                generally retain their own properties and can often be
                separated using suitable physical methods.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                  <p className="text-sm font-black text-emerald-700">
                    Combination
                  </p>
                  <p className="mt-2 text-xl font-black text-gray-900">
                    Physical
                  </p>
                </div>

                <div className="rounded-2xl bg-teal-50 border border-teal-100 p-5">
                  <p className="text-sm font-black text-teal-700">
                    Components
                  </p>
                  <p className="mt-2 text-xl font-black text-gray-900">
                    Keep Properties
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                  <p className="text-sm font-black text-cyan-700">
                    Separation
                  </p>
                  <p className="mt-2 text-xl font-black text-gray-900">
                    Physical Methods
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TYPES */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-emerald-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Types of Mixtures
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the basic classification of mixtures.
            </p>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {types.map((type) => (

            <article
              key={type.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-4xl">
                {type.icon}
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {type.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {type.description}
              </p>

              <div className="mt-6 rounded-2xl bg-gray-50 p-4">

                <p className="text-xs uppercase tracking-wide font-black text-gray-500">
                  Examples
                </p>

                <p className="mt-2 font-bold text-emerald-700">
                  {type.examples}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* SOLUTION COMPONENTS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <span className="text-3xl">
              🧪
            </span>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Components of a Solution
              </h2>

              <p className="text-gray-500 mt-1">
                Learn the meaning of solute and solvent.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7">

              <div className="text-4xl">
                🧂
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                Solute
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                The solute is the substance that is dissolved in a
                solution. It is commonly present in a smaller amount than
                the solvent.
              </p>

              <div className="mt-5 rounded-2xl bg-white border border-emerald-100 p-5">

                <p className="text-sm font-black text-emerald-700">
                  Example
                </p>

                <p className="mt-2 text-gray-700">
                  In salt water, <strong>salt</strong> is the solute.
                </p>

              </div>

            </div>

            <div className="rounded-3xl bg-cyan-50 border border-cyan-100 p-7">

              <div className="text-4xl">
                💧
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                Solvent
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                The solvent is the substance in which the solute dissolves.
                It is commonly present in a larger amount.
              </p>

              <div className="mt-5 rounded-2xl bg-white border border-cyan-100 p-5">

                <p className="text-sm font-black text-cyan-700">
                  Example
                </p>

                <p className="mt-2 text-gray-700">
                  In salt water, <strong>water</strong> is the solvent.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SOLUTION EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <span className="text-3xl">
            🧫
          </span>

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Common Solutions
            </h2>

            <p className="text-gray-500 mt-1">
              Everyday examples of solutions.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {solutionExamples.map((item) => (

            <div
              key={item.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-black text-gray-900">
                {item.title}
              </h3>

              <div className="mt-5 space-y-3">

                <div>
                  <p className="text-xs font-black uppercase text-gray-500">
                    Solute
                  </p>

                  <p className="mt-1 font-bold text-emerald-700">
                    {item.solute}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase text-gray-500">
                    Solvent
                  </p>

                  <p className="mt-1 font-bold text-cyan-700">
                    {item.solvent}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CONCENTRATION */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7 md:p-9">

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Concentration of a Solution
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The concentration of a solution indicates the amount of
                solute present in a given amount of solution or solvent,
                depending on how concentration is expressed.
              </p>

              <div className="mt-6 rounded-2xl bg-white border border-emerald-100 p-6">

                <p className="text-sm font-black text-emerald-700">
                  Simple idea
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  More dissolved solute generally makes a solution more
                  concentrated, while less dissolved solute makes it more
                  dilute.
                </p>

              </div>

            </div>

            <div className="rounded-3xl bg-cyan-50 border border-cyan-100 p-7 md:p-9">

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Solubility
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Solubility is the maximum amount of a substance that can
                dissolve in a specified amount of solvent under specified
                conditions.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Temperature can affect solubility.",
                  "Different substances have different solubilities.",
                  "A saturated solution contains the maximum dissolved solute under specified conditions.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      className="mt-0.5 text-cyan-600 shrink-0"
                      size={18}
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

      {/* SEPARATION METHODS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <span className="text-3xl">
            ⚗️
          </span>

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Methods of Separation
            </h2>

            <p className="text-gray-500 mt-1">
              Different mixtures require different separation techniques.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {methods.map((method) => (

            <div
              key={method.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="flex items-start justify-between">

                <div className="text-4xl">
                  {method.icon}
                </div>

                <span className="text-xs font-black bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full">
                  Separation
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {method.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {method.description}
              </p>

              <div className="mt-5 rounded-2xl bg-gray-50 p-4">

                <p className="text-xs uppercase tracking-wide font-black text-gray-500">
                  Example
                </p>

                <p className="mt-2 font-bold text-emerald-700">
                  {method.example}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* MIXTURE VS COMPOUND */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Mixture vs Compound
          </h2>

          <p className="mt-2 text-gray-500">
            Important comparison for examinations.
          </p>

          <div className="mt-8 overflow-x-auto rounded-3xl border border-gray-100">

            <table className="w-full min-w-[700px] text-left">

              <thead className="bg-emerald-50">

                <tr>
                  <th className="p-5 font-black text-gray-900">
                    Property
                  </th>
                  <th className="p-5 font-black text-gray-900">
                    Mixture
                  </th>
                  <th className="p-5 font-black text-gray-900">
                    Compound
                  </th>
                </tr>

              </thead>

              <tbody className="divide-y divide-gray-100 bg-white">

                <tr>
                  <td className="p-5 font-bold text-gray-900">
                    Formation
                  </td>
                  <td className="p-5 text-gray-600">
                    Physical combination
                  </td>
                  <td className="p-5 text-gray-600">
                    Chemical combination
                  </td>
                </tr>

                <tr>
                  <td className="p-5 font-bold text-gray-900">
                    Composition
                  </td>
                  <td className="p-5 text-gray-600">
                    Variable
                  </td>
                  <td className="p-5 text-gray-600">
                    Fixed
                  </td>
                </tr>

                <tr>
                  <td className="p-5 font-bold text-gray-900">
                    Properties
                  </td>
                  <td className="p-5 text-gray-600">
                    Components generally retain their properties
                  </td>
                  <td className="p-5 text-gray-600">
                    Has properties different from its constituent elements
                  </td>
                </tr>

                <tr>
                  <td className="p-5 font-bold text-gray-900">
                    Separation
                  </td>
                  <td className="p-5 text-gray-600">
                    Usually by physical methods
                  </td>
                  <td className="p-5 text-gray-600">
                    Requires chemical or suitable physical processes
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-emerald-700 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <BookOpen size={30} />
            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black">
                Important Points for Exams
              </h2>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">

                {keyPoints.map((point, index) => (

                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 border border-white/10 p-4"
                  >

                    <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-emerald-700 flex items-center justify-center font-black">
                      {index + 1}
                    </span>

                    <p className="text-white/90 leading-relaxed">
                      {point}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-yellow-50 flex items-center justify-center">
              <Lightbulb
                className="text-yellow-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Study Tip
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                Remember the key terms: a <strong>solute</strong> is
                dissolved, a <strong>solvent</strong> does the dissolving,
                and together they form a <strong>solution</strong>. Also
                learn which separation method is suitable for each type of
                mixture.
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
              href="/learn/chemistry/states-of-matter"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry/chemistry-in-everyday-life"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700"
            >
              Next: Chemistry in Everyday Life
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

