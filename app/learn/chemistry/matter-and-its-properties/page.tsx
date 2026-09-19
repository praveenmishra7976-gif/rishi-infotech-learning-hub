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

const properties = [
  {
    title: "Physical Properties",
    icon: "🔬",
    description:
      "Physical properties can be observed or measured without changing the chemical identity of a substance.",
    examples: "Colour, odour, density, melting point, boiling point and solubility.",
  },
  {
    title: "Chemical Properties",
    icon: "⚗️",
    description:
      "Chemical properties describe how a substance behaves during a chemical change.",
    examples: "Combustibility, reactivity with acids, oxidation and corrosion.",
  },
  {
    title: "Mass",
    icon: "⚖️",
    description:
      "Mass is the amount of matter present in an object or substance.",
    examples: "SI unit of mass is kilogram (kg).",
  },
  {
    title: "Volume",
    icon: "🧪",
    description:
      "Volume is the amount of space occupied by a substance.",
    examples: "Common units include litre (L), millilitre (mL) and cubic metre (m³).",
  },
  {
    title: "Density",
    icon: "📦",
    description:
      "Density tells us how much mass is contained in a given volume.",
    examples: "Density = Mass ÷ Volume.",
  },
  {
    title: "Solubility",
    icon: "💧",
    description:
      "Solubility is the ability of a substance to dissolve in a particular solvent.",
    examples: "Salt dissolves in water, while sand does not dissolve in water.",
  },
];

const states = [
  {
    name: "Solid",
    icon: "🧊",
    features: [
      "Fixed shape",
      "Fixed volume",
      "Particles are closely packed",
      "Strong attractive forces",
    ],
  },
  {
    name: "Liquid",
    icon: "💧",
    features: [
      "No fixed shape",
      "Fixed volume",
      "Particles can move around",
      "Moderate attractive forces",
    ],
  },
  {
    name: "Gas",
    icon: "💨",
    features: [
      "No fixed shape",
      "No fixed volume",
      "Particles are far apart",
      "Very weak attractive forces",
    ],
  },
];

const changes = [
  {
    name: "Melting",
    from: "Solid",
    to: "Liquid",
    example: "Ice → Water",
    icon: "🧊",
  },
  {
    name: "Freezing",
    from: "Liquid",
    to: "Solid",
    example: "Water → Ice",
    icon: "❄️",
  },
  {
    name: "Vaporisation",
    from: "Liquid",
    to: "Gas",
    example: "Water → Water vapour",
    icon: "♨️",
  },
  {
    name: "Condensation",
    from: "Gas",
    to: "Liquid",
    example: "Water vapour → Water",
    icon: "💧",
  },
  {
    name: "Sublimation",
    from: "Solid",
    to: "Gas",
    example: "Camphor → Vapour",
    icon: "🌫️",
  },
  {
    name: "Deposition",
    from: "Gas",
    to: "Solid",
    example: "Water vapour → Ice",
    icon: "❄️",
  },
];

const keyPoints = [
  "Matter has mass and occupies space.",
  "Matter commonly exists as solid, liquid and gas.",
  "Solids have fixed shape and fixed volume.",
  "Liquids have fixed volume but take the shape of their container.",
  "Gases have neither fixed shape nor fixed volume.",
  "Temperature and pressure can change the state of matter.",
  "Physical changes generally do not form a new substance.",
  "Chemical changes result in the formation of new substances.",
];

export default function MatterAndItsPropertiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-cyan-700 via-blue-600 to-indigo-600 text-white">

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
              Matter and Its Properties
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn what matter is, its important properties, states of
              matter and the changes between different states.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center">
              <FlaskConical
                className="text-blue-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                What is Matter?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Matter is anything that has mass and occupies space.
                Everything around us, such as air, water, books, rocks,
                plants and our bodies, is made of matter.
              </p>

              <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-100 p-5">

                <p className="font-black text-blue-800">
                  Simple Definition
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  Matter = Anything that has mass + occupies space
                </p>

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
              Important Properties of Matter
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the basic measurable and observable properties.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {properties.map((property) => (

            <article
              key={property.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                {property.icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {property.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {property.description}
              </p>

              <div className="mt-4 rounded-xl bg-gray-50 p-4">

                <p className="text-sm font-bold text-blue-700">
                  Examples / Formula
                </p>

                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {property.examples}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* STATES OF MATTER */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Atom
              className="text-indigo-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                States of Matter
              </h2>

              <p className="text-gray-500 mt-1">
                Matter commonly exists in three basic states.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {states.map((state) => (

              <article
                key={state.name}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-7 hover:bg-blue-50 hover:border-blue-200 transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-4xl">
                  {state.icon}
                </div>

                <h3 className="mt-5 text-2xl font-black text-gray-900">
                  {state.name}
                </h3>

                <div className="mt-5 space-y-3">

                  {state.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-start gap-2"
                    >

                      <CheckCircle2
                        className="text-blue-600 shrink-0 mt-0.5"
                        size={18}
                      />

                      <p className="text-gray-600">
                        {feature}
                      </p>

                    </div>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* CHANGES OF STATE */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Sparkles
            className="text-cyan-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Changes of State
            </h2>

            <p className="text-gray-500 mt-1">
              Matter can change from one state to another.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {changes.map((change) => (

            <div
              key={change.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="flex items-center justify-between">

                <span className="text-3xl">
                  {change.icon}
                </span>

                <span className="text-xs font-black bg-cyan-50 text-cyan-700 px-3 py-1.5 rounded-full">
                  Change
                </span>

              </div>

              <h3 className="mt-4 text-xl font-black text-gray-900">
                {change.name}
              </h3>

              <div className="mt-3 flex items-center gap-3 font-bold">

                <span className="text-gray-700">
                  {change.from}
                </span>

                <ArrowRight
                  size={18}
                  className="text-blue-600"
                />

                <span className="text-blue-600">
                  {change.to}
                </span>

              </div>

              <p className="mt-3 text-gray-500">
                Example: {change.example}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* PHYSICAL VS CHEMICAL */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Physical Change vs Chemical Change
          </h2>

          <p className="mt-2 text-gray-500">
            Know the difference between the two types of changes.
          </p>

          <div className="mt-8 overflow-x-auto">

            <table className="w-full min-w-[700px] border-collapse">

              <thead>

                <tr className="bg-blue-50">

                  <th className="text-left p-4 font-black text-blue-800">
                    Physical Change
                  </th>

                  <th className="text-left p-4 font-black text-blue-800">
                    Chemical Change
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-gray-100">

                  <td className="p-4 text-gray-700">
                    Usually no new substance is formed.
                  </td>

                  <td className="p-4 text-gray-700">
                    A new substance is formed.
                  </td>

                </tr>

                <tr className="border-b border-gray-100">

                  <td className="p-4 text-gray-700">
                    Often reversible.
                  </td>

                  <td className="p-4 text-gray-700">
                    Often difficult to reverse.
                  </td>

                </tr>

                <tr>

                  <td className="p-4 text-gray-700">
                    Example: melting of ice.
                  </td>

                  <td className="p-4 text-gray-700">
                    Example: rusting of iron.
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Important Points for Exams
              </h2>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">

                {keyPoints.map((point, index) => (

                  <div
                    key={point}
                    className="flex items-start gap-3 bg-white/10 rounded-2xl p-4"
                  >

                    <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-blue-700 flex items-center justify-center font-black">
                      {index + 1}
                    </span>

                    <p className="text-white/95 leading-relaxed">
                      {point}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* QUICK REVISION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">

          <h2 className="text-3xl font-black text-gray-900">
            Quick Revision
          </h2>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-600">
                Matter
              </p>
              <p className="mt-2 font-black text-gray-900">
                Has mass and occupies space
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-50 p-5">
              <p className="text-sm font-bold text-cyan-600">
                Solid
              </p>
              <p className="mt-2 font-black text-gray-900">
                Fixed shape + fixed volume
              </p>
            </div>

            <div className="rounded-2xl bg-indigo-50 p-5">
              <p className="text-sm font-bold text-indigo-600">
                Liquid
              </p>
              <p className="mt-2 font-black text-gray-900">
                Fixed volume + no fixed shape
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5">
              <p className="text-sm font-bold text-purple-600">
                Gas
              </p>
              <p className="mt-2 font-black text-gray-900">
                No fixed shape + no fixed volume
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
              href="/learn/chemistry"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Back to Chemistry
            </Link>

            <Link
              href="/learn/chemistry/atoms-and-molecules"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700"
            >
              Next: Atoms & Molecules
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
