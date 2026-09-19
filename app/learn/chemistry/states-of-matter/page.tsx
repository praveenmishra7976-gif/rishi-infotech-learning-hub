
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
  Thermometer,
} from "lucide-react";

const states = [
  {
    name: "Solid",
    icon: "🧊",
    color: "blue",
    description:
      "Solids have a fixed shape and fixed volume. Their particles are closely packed and mainly vibrate about fixed positions.",
    properties: [
      "Fixed shape",
      "Fixed volume",
      "Very small compressibility",
      "Strong intermolecular forces",
      "Particles vibrate in fixed positions",
    ],
    examples: "Ice, iron, wood, salt",
  },
  {
    name: "Liquid",
    icon: "💧",
    color: "cyan",
    description:
      "Liquids have a fixed volume but no fixed shape. Their particles can move and slide past one another.",
    properties: [
      "Fixed volume",
      "No fixed shape",
      "Flow easily",
      "Slightly compressible",
      "Particles have more freedom of movement",
    ],
    examples: "Water, milk, oil, mercury",
  },
  {
    name: "Gas",
    icon: "💨",
    color: "purple",
    description:
      "Gases have neither fixed shape nor fixed volume. Their particles are far apart and move freely in all directions.",
    properties: [
      "No fixed shape",
      "No fixed volume",
      "Highly compressible",
      "Very weak intermolecular forces",
      "Particles move freely",
    ],
    examples: "Oxygen, nitrogen, carbon dioxide",
  },
];

const changes = [
  {
    name: "Melting",
    from: "Solid",
    to: "Liquid",
    icon: "🔥",
    description:
      "The change of a solid into a liquid on heating is called melting or fusion.",
  },
  {
    name: "Freezing",
    from: "Liquid",
    to: "Solid",
    icon: "❄️",
    description:
      "The change of a liquid into a solid on cooling is called freezing or solidification.",
  },
  {
    name: "Vaporisation",
    from: "Liquid",
    to: "Gas",
    icon: "♨️",
    description:
      "The change of a liquid into a gas is called vaporisation. It can occur by evaporation or boiling.",
  },
  {
    name: "Condensation",
    from: "Gas",
    to: "Liquid",
    icon: "💧",
    description:
      "The change of a gas into a liquid on cooling is called condensation.",
  },
  {
    name: "Sublimation",
    from: "Solid",
    to: "Gas",
    icon: "✨",
    description:
      "The direct change of a solid into a gas without passing through the liquid state is called sublimation.",
  },
  {
    name: "Deposition",
    from: "Gas",
    to: "Solid",
    icon: "❄️",
    description:
      "The direct change of a gas into a solid without passing through the liquid state is called deposition.",
  },
];

const keyPoints = [
  "Matter is anything that has mass and occupies space.",
  "The three common states of matter are solid, liquid and gas.",
  "Particles of matter are in continuous motion.",
  "There are spaces between particles of matter.",
  "Particles attract one another.",
  "Heating generally increases the kinetic energy of particles.",
  "Solids have the strongest intermolecular forces among the three common states.",
  "Gases are highly compressible because there are large spaces between their particles.",
  "Diffusion is fastest in gases and slowest in solids.",
  "Sublimation is the direct conversion of a solid into a gas.",
];

const factors = [
  {
    title: "Temperature",
    icon: "🌡️",
    description:
      "Increasing temperature increases the kinetic energy of particles and can change the state of matter.",
  },
  {
    title: "Pressure",
    icon: "⚙️",
    description:
      "Pressure can affect the volume and state of substances, especially gases.",
  },
  {
    title: "Intermolecular Force",
    icon: "🧲",
    description:
      "The strength of attraction between particles affects the physical state and properties of matter.",
  },
];

export default function StatesOfMatterPage() {
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
              States of Matter
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Understand solids, liquids and gases, particle arrangement,
              properties of matter, changes of state, diffusion and the
              effect of temperature and pressure.
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
                size={32}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                What is Matter?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Matter is anything that has mass and occupies space.
                Matter is made up of extremely small particles. These
                particles are continuously moving, have spaces between them
                and attract one another. Depending on particle arrangement
                and movement, matter commonly exists as solids, liquids and
                gases.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-sm font-black text-blue-600">
                    Common States
                  </p>
                  <p className="mt-2 text-2xl font-black text-gray-900">
                    3
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                  <p className="text-sm font-black text-cyan-600">
                    Particles
                  </p>
                  <p className="mt-2 text-2xl font-black text-gray-900">
                    Always Moving
                  </p>
                </div>

                <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-5">
                  <p className="text-sm font-black text-indigo-600">
                    Important Factors
                  </p>
                  <p className="mt-2 text-2xl font-black text-gray-900">
                    Heat & Pressure
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATES */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-blue-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Three Common States of Matter
            </h2>

            <p className="text-gray-500 mt-1">
              Compare the properties of solids, liquids and gases.
            </p>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {states.map((state) => (

            <article
              key={state.name}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-4xl">
                  {state.icon}
                </div>

                <span className="text-sm font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {state.name}
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {state.name}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {state.description}
              </p>

              <div className="mt-5 space-y-3">

                {state.properties.map((property) => (

                  <div
                    key={property}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-blue-600"
                      size={18}
                    />

                    <p className="text-gray-700">
                      {property}
                    </p>

                  </div>

                ))}

              </div>

              <div className="mt-6 rounded-2xl bg-gray-50 p-4">

                <p className="text-xs uppercase tracking-wide font-black text-gray-500">
                  Examples
                </p>

                <p className="mt-2 font-bold text-blue-600">
                  {state.examples}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* PARTICLE MODEL */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <span className="text-3xl">
              🔬
            </span>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Particle Arrangement
              </h2>

              <p className="text-gray-500 mt-1">
                How particles differ in different states.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">

              <h3 className="text-xl font-black text-gray-900">
                🧊 Solid Particles
              </h3>

              <div className="mt-6 grid grid-cols-5 gap-3 max-w-xs">

                {Array.from({ length: 20 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full bg-blue-600"
                  />
                ))}

              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Particles are tightly packed and have very little freedom
                of movement.
              </p>

            </div>

            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">

              <h3 className="text-xl font-black text-gray-900">
                💧 Liquid Particles
              </h3>

              <div className="mt-6 grid grid-cols-5 gap-5 max-w-xs">

                {Array.from({ length: 16 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full bg-cyan-600"
                  />
                ))}

              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Particles are close together but can move and slide past
                one another.
              </p>

            </div>

            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">

              <h3 className="text-xl font-black text-gray-900">
                💨 Gas Particles
              </h3>

              <div className="mt-6 grid grid-cols-4 gap-8 max-w-xs">

                {Array.from({ length: 9 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full bg-indigo-600"
                  />
                ))}

              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Particles are far apart and move freely in all directions.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CHANGES OF STATE */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Thermometer
            className="text-blue-600"
            size={34}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {changes.map((change) => (

            <div
              key={change.name}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="text-4xl">
                  {change.icon}
                </div>

                <span className="text-xs font-black bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
                  Change of State
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {change.name}
              </h3>

              <div className="mt-4 flex items-center gap-3">

                <span className="rounded-xl bg-gray-100 px-3 py-2 font-bold text-gray-700">
                  {change.from}
                </span>

                <ArrowRight
                  className="text-blue-600 shrink-0"
                  size={20}
                />

                <span className="rounded-xl bg-blue-50 px-3 py-2 font-bold text-blue-700">
                  {change.to}
                </span>

              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {change.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* EVAPORATION */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7 md:p-9">

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Evaporation
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Evaporation is the change of a liquid into vapour from its
                surface at temperatures below its boiling point. It is a
                surface phenomenon.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "It occurs at the surface.",
                  "It can occur at any temperature.",
                  "It causes cooling.",
                  "It becomes faster when surface area increases.",
                  "Higher temperature increases evaporation.",
                  "Higher wind speed increases evaporation.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      className="mt-0.5 text-blue-600 shrink-0"
                      size={18}
                    />

                    <span className="text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-3xl bg-cyan-50 border border-cyan-100 p-7 md:p-9">

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Boiling
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Boiling is the rapid conversion of a liquid into vapour
                throughout the liquid at its boiling point.
              </p>

              <div className="mt-6 rounded-2xl bg-white p-5 border border-cyan-100">

                <p className="text-sm font-black text-cyan-700">
                  Example
                </p>

                <p className="mt-2 text-gray-700 leading-relaxed">
                  Pure water boils at about 100°C at standard atmospheric
                  pressure.
                </p>

              </div>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Unlike evaporation, boiling takes place throughout the
                liquid and produces bubbles within the liquid.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FACTORS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <span className="text-3xl">
            ⚙️
          </span>

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Factors Affecting State of Matter
            </h2>

            <p className="text-gray-500 mt-1">
              Important factors that influence particle behaviour.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {factors.map((factor) => (

            <div
              key={factor.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7"
            >

              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl">
                {factor.icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {factor.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {factor.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="bg-gradient-to-r from-blue-700 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">

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

                      <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-blue-700 flex items-center justify-center font-black">
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

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 py-14">

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
                Remember the order of particle freedom: solid particles have
                the least freedom, liquid particles have more freedom, and
                gas particles have the greatest freedom. Revise all six
                changes of state and practise examples from daily life.
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
              href="/learn/chemistry/carbon-and-its-compounds"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry/mixtures-and-solutions"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700"
            >
              Next: Mixtures and Solutions
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
