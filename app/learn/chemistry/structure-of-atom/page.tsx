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

const particles = [
  {
    name: "Electron",
    symbol: "e⁻",
    charge: "−1",
    location: "Outside the nucleus",
    description:
      "A negatively charged subatomic particle that occupies regions around the nucleus.",
    icon: "🔵",
  },
  {
    name: "Proton",
    symbol: "p⁺",
    charge: "+1",
    location: "Inside the nucleus",
    description:
      "A positively charged subatomic particle present inside the nucleus.",
    icon: "🔴",
  },
  {
    name: "Neutron",
    symbol: "n⁰",
    charge: "0",
    location: "Inside the nucleus",
    description:
      "A neutral subatomic particle present inside the nucleus.",
    icon: "⚪",
  },
];

const models = [
  {
    name: "Dalton's Atomic Theory",
    icon: "📜",
    points: [
      "Matter is made of tiny particles called atoms.",
      "Atoms of the same element have similar properties.",
      "Atoms combine in simple whole-number ratios.",
    ],
  },
  {
    name: "Thomson's Model",
    icon: "🧪",
    points: [
      "The atom was considered a positively charged sphere.",
      "Electrons were embedded in the positive sphere.",
      "It is commonly called the plum pudding model.",
    ],
  },
  {
    name: "Rutherford's Model",
    icon: "🎯",
    points: [
      "The atom has a very small, dense nucleus.",
      "Most of the atom is empty space.",
      "Electrons move around the nucleus.",
    ],
  },
  {
    name: "Bohr's Model",
    icon: "⚛️",
    points: [
      "Electrons occupy specific energy levels or shells.",
      "Electrons can move between energy levels.",
      "Each shell has a definite energy.",
    ],
  },
];

const shells = [
  {
    shell: "K",
    number: "1",
    capacity: "2 electrons",
    distance: "Closest to nucleus",
  },
  {
    shell: "L",
    number: "2",
    capacity: "8 electrons",
    distance: "Second shell",
  },
  {
    shell: "M",
    number: "3",
    capacity: "18 electrons",
    distance: "Third shell",
  },
  {
    shell: "N",
    number: "4",
    capacity: "32 electrons",
    distance: "Fourth shell",
  },
];

const examples = [
  {
    element: "Hydrogen",
    symbol: "H",
    atomicNumber: "1",
    configuration: "1",
  },
  {
    element: "Helium",
    symbol: "He",
    atomicNumber: "2",
    configuration: "2",
  },
  {
    element: "Carbon",
    symbol: "C",
    atomicNumber: "6",
    configuration: "2, 4",
  },
  {
    element: "Oxygen",
    symbol: "O",
    atomicNumber: "8",
    configuration: "2, 6",
  },
  {
    element: "Sodium",
    symbol: "Na",
    atomicNumber: "11",
    configuration: "2, 8, 1",
  },
  {
    element: "Chlorine",
    symbol: "Cl",
    atomicNumber: "17",
    configuration: "2, 8, 7",
  },
];

const keyPoints = [
  "An atom contains a nucleus surrounded by electrons.",
  "The nucleus contains protons and neutrons.",
  "Protons have positive charge.",
  "Electrons have negative charge.",
  "Neutrons have no electrical charge.",
  "Atomic number is equal to the number of protons.",
  "In a neutral atom, the number of protons equals the number of electrons.",
  "Mass number = Number of protons + Number of neutrons.",
];

export default function StructureOfAtomPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-violet-700 via-indigo-600 to-blue-600 text-white">

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
              Structure of Atom
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn about the nucleus, electrons, protons, neutrons,
              atomic number, mass number and electronic configuration.
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
                size={32}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                What is an Atom?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                An atom is the basic unit of an element. It consists of a
                tiny central nucleus containing protons and neutrons, with
                electrons occupying regions around the nucleus.
              </p>

              <div className="mt-6 rounded-2xl bg-indigo-50 border border-indigo-100 p-5">

                <p className="font-black text-indigo-800">
                  Basic Structure
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  Atom = Nucleus + Electrons
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Nucleus = Protons + Neutrons
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SUBATOMIC PARTICLES */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <FlaskConical
            className="text-blue-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Subatomic Particles
            </h2>

            <p className="text-gray-500 mt-1">
              The three basic subatomic particles are electron, proton and neutron.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {particles.map((particle) => (

            <article
              key={particle.name}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="flex items-center justify-between">

                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl">
                  {particle.icon}
                </div>

                <span className="text-xl font-black text-blue-600">
                  {particle.symbol}
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {particle.name}
              </h3>

              <div className="mt-4 space-y-2 text-sm">

                <p>
                  <span className="font-black text-gray-800">
                    Charge:
                  </span>{" "}
                  <span className="text-gray-600">
                    {particle.charge}
                  </span>
                </p>

                <p>
                  <span className="font-black text-gray-800">
                    Location:
                  </span>{" "}
                  <span className="text-gray-600">
                    {particle.location}
                  </span>
                </p>

              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {particle.description}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* ATOMIC MODELS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <BookOpen
              className="text-indigo-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Atomic Models
              </h2>

              <p className="text-gray-500 mt-1">
                Scientists developed different models to explain atomic structure.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {models.map((model) => (

              <article
                key={model.name}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-7 hover:bg-indigo-50 hover:border-indigo-200 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl">
                    {model.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-gray-900">
                    {model.name}
                  </h3>

                </div>

                <div className="mt-6 space-y-3">

                  {model.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2
                        className="text-indigo-600 shrink-0 mt-0.5"
                        size={18}
                      />

                      <p className="text-gray-600 leading-relaxed">
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ELECTRONIC SHELLS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Atom
            className="text-violet-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Electronic Shells
            </h2>

            <p className="text-gray-500 mt-1">
              Electrons are arranged in different energy levels or shells.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {shells.map((shell) => (

            <div
              key={shell.shell}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="flex items-center justify-between">

                <span className="w-12 h-12 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center text-xl font-black">
                  {shell.shell}
                </span>

                <span className="text-sm font-bold text-gray-500">
                  Shell {shell.number}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {shell.capacity}
              </h3>

              <p className="mt-2 text-gray-500">
                {shell.distance}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-7 rounded-2xl bg-violet-50 border border-violet-100 p-6">

          <p className="font-black text-violet-800">
            Maximum Electron Capacity
          </p>

          <p className="mt-2 text-gray-700">
            The maximum number of electrons in a shell can be represented
            by the formula <strong>2n²</strong>, where n is the shell number.
          </p>

        </div>

      </section>

      {/* ELECTRONIC CONFIGURATION */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Electronic Configuration
          </h2>

          <p className="mt-2 text-gray-500">
            Examples of how electrons are distributed among shells.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-100">

            <table className="w-full min-w-[650px]">

              <thead>

                <tr className="bg-blue-50">

                  <th className="text-left p-4 font-black text-blue-800">
                    Element
                  </th>

                  <th className="text-left p-4 font-black text-blue-800">
                    Symbol
                  </th>

                  <th className="text-left p-4 font-black text-blue-800">
                    Atomic Number
                  </th>

                  <th className="text-left p-4 font-black text-blue-800">
                    Configuration
                  </th>

                </tr>

              </thead>

              <tbody>

                {examples.map((item) => (

                  <tr
                    key={item.symbol}
                    className="border-t border-gray-100"
                  >

                    <td className="p-4 font-semibold text-gray-800">
                      {item.element}
                    </td>

                    <td className="p-4 font-black text-indigo-600">
                      {item.symbol}
                    </td>

                    <td className="p-4 text-gray-700">
                      {item.atomicNumber}
                    </td>

                    <td className="p-4 font-black text-blue-600">
                      {item.configuration}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* ATOMIC NUMBER AND MASS NUMBER */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 md:p-12 text-white">

          <h2 className="text-3xl md:text-4xl font-black">
            Atomic Number and Mass Number
          </h2>

          <div className="mt-7 grid md:grid-cols-2 gap-5">

            <div className="rounded-2xl bg-white/10 p-6">

              <p className="text-sm font-bold text-white/80">
                Atomic Number
              </p>

              <p className="mt-3 text-2xl font-black">
                Z = Number of Protons
              </p>

              <p className="mt-3 text-white/90 leading-relaxed">
                In a neutral atom, atomic number is also equal to the
                number of electrons.
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6">

              <p className="text-sm font-bold text-white/80">
                Mass Number
              </p>

              <p className="mt-3 text-2xl font-black">
                A = Protons + Neutrons
              </p>

              <p className="mt-3 text-white/90 leading-relaxed">
                Mass number represents the total number of protons and
                neutrons in the nucleus.
              </p>

            </div>

          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">

            <p className="font-black">
              Example
            </p>

            <p className="mt-2 text-white/90">
              If an atom has 11 protons and 12 neutrons:
            </p>

            <p className="mt-3 text-xl font-black">
              Atomic Number = 11
            </p>

            <p className="mt-2 text-xl font-black">
              Mass Number = 11 + 12 = 23
            </p>

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

                    <span className="w-8 h-8 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
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
              href="/learn/chemistry/atoms-and-molecules"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              Back to Chemistry
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
