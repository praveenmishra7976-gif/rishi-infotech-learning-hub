import Link from "next/link";

const chapters = [
  {
    number: "01",
    icon: "⚛️",
    title: "Introduction to Physics",
    href: "/learn/physics/introduction",
    description:
      "Learn what physics is, its branches, importance and applications in everyday life.",
    topics: [
      "What is Physics?",
      "Branches of Physics",
      "Importance of Physics",
      "Applications",
    ],
  },
  {
    number: "02",
    icon: "📏",
    title: "Units & Measurements",
    href: "/learn/physics/units-measurements",
    description:
      "Understand physical quantities, SI units, measurement, errors and dimensions.",
    topics: [
      "Physical Quantities",
      "SI Units",
      "Measurement",
      "Errors",
      "Dimensions",
    ],
  },
  {
    number: "03",
    icon: "🏃",
    title: "Motion",
    href: "/learn/physics/motion",
    description:
      "Learn distance, displacement, speed, velocity, acceleration and equations of motion.",
    topics: [
      "Distance",
      "Displacement",
      "Speed",
      "Velocity",
      "Acceleration",
    ],
  },
  {
    number: "04",
    icon: "💪",
    title: "Force & Laws of Motion",
    href: "/learn/physics/force-laws-motion",
    description:
      "Understand force, inertia, momentum and Newton's three laws of motion.",
    topics: [
      "Force",
      "Inertia",
      "Momentum",
      "Newton's Laws",
    ],
  },
  {
    number: "05",
    icon: "🔨",
    title: "Work, Energy & Power",
    href: "/learn/physics/work-energy",
    description:
      "Learn work, kinetic energy, potential energy and power with useful formulas.",
    topics: [
      "Work",
      "Energy",
      "Kinetic Energy",
      "Potential Energy",
      "Power",
    ],
  },
  {
    number: "06",
    icon: "🔥",
    title: "Heat & Temperature",
    href: "/learn/physics/heat-temperature",
    description:
      "Understand temperature, heat, thermal expansion and methods of heat transfer.",
    topics: [
      "Temperature",
      "Heat",
      "Conduction",
      "Convection",
      "Radiation",
    ],
  },
  {
    number: "07",
    icon: "🔊",
    title: "Sound",
    href: "/learn/physics/sound",
    description:
      "Learn sound waves, frequency, wavelength, amplitude and characteristics of sound.",
    topics: [
      "Sound Waves",
      "Frequency",
      "Wavelength",
      "Amplitude",
      "Echo",
    ],
  },
  {
    number: "08",
    icon: "💡",
    title: "Light",
    href: "/learn/physics/light",
    description:
      "Understand reflection, refraction, mirrors, lenses and important concepts of light.",
    topics: [
      "Reflection",
      "Refraction",
      "Mirrors",
      "Lenses",
      "Optical Phenomena",
    ],
  },
  {
    number: "09",
    icon: "⚡",
    title: "Electricity",
    href: "/learn/physics/electricity",
    description:
      "Learn electric charge, current, voltage, resistance and electrical circuits.",
    topics: [
      "Electric Charge",
      "Current",
      "Voltage",
      "Resistance",
      "Circuits",
    ],
  },
  {
    number: "10",
    icon: "🧲",
    title: "Magnetism",
    href: "/learn/physics/magnetism",
    description:
      "Understand magnets, magnetic fields, electromagnetism and applications of magnetism.",
    topics: [
      "Magnets",
      "Magnetic Field",
      "Electromagnetism",
      "Electromagnets",
    ],
  },
  {
    number: "11",
    icon: "🔍",
    title: "Optics",
    href: "/learn/physics/optics",
    description:
      "Study geometrical optics, lenses, optical instruments and image formation.",
    topics: [
      "Geometrical Optics",
      "Lenses",
      "Optical Instruments",
      "Image Formation",
      "Applications",
    ],
  },
  {
    number: "12",
    icon: "⚛️",
    title: "Modern Physics",
    href: "/learn/physics/modern-physics",
    description:
      "Explore atoms, photons, quantum concepts, nuclear physics and modern discoveries.",
    topics: [
      "Atomic Physics",
      "Quantum Concepts",
      "Photons",
      "Nuclear Physics",
      "Applications",
    ],
  },
  {
    number: "13",
    icon: "🌍",
    title: "Gravitation",
    href: "/learn/physics/gravitation",
    description:
      "Understand gravity, gravitational force, acceleration due to gravity, mass and weight.",
    topics: [
      "Gravity",
      "Gravitational Force",
      "Acceleration Due to Gravity",
      "Mass & Weight",
      "Orbital Motion",
    ],
  },
];

const quickTopics = [
  {
    icon: "⚛️",
    title: "Physics Basics",
    href: "/learn/physics/introduction",
  },
  {
    icon: "📏",
    title: "Units",
    href: "/learn/physics/units-measurements",
  },
  {
    icon: "🏃",
    title: "Motion",
    href: "/learn/physics/motion",
  },
  {
    icon: "💪",
    title: "Force",
    href: "/learn/physics/force-laws-motion",
  },
  {
    icon: "🔨",
    title: "Energy",
    href: "/learn/physics/work-energy",
  },
  {
    icon: "⚡",
    title: "Electricity",
    href: "/learn/physics/electricity",
  },
];

const importantFormulas = [
  ["Speed", "Speed = Distance / Time"],
  ["Velocity", "Velocity = Displacement / Time"],
  ["Acceleration", "a = (v - u) / t"],
  ["Force", "F = m × a"],
  ["Work", "W = F × s"],
  ["Power", "P = W / t"],
  ["Density", "Density = Mass / Volume"],
  ["Ohm's Law", "V = I × R"],
  ["Kinetic Energy", "KE = ½mv²"],
  ["Potential Energy", "PE = mgh"],
  ["Momentum", "p = mv"],
  ["Gravitational Force", "F = Gm₁m₂ / r²"],
];

const physicsFacts = [
  ["SI Unit of Force", "Newton (N)"],
  ["SI Unit of Work", "Joule (J)"],
  ["SI Unit of Power", "Watt (W)"],
  ["SI Unit of Energy", "Joule (J)"],
  ["SI Unit of Current", "Ampere (A)"],
  ["SI Unit of Voltage", "Volt (V)"],
  ["SI Unit of Resistance", "Ohm (Ω)"],
  ["SI Unit of Frequency", "Hertz (Hz)"],
  ["Speed of Light", "Approximately 3 × 10⁸ m/s"],
  ["Acceleration Due to Gravity", "Approximately 9.8 m/s²"],
];

const physicsBranches = [
  {
    icon: "🏃",
    title: "Mechanics",
    description:
      "Study motion, force, energy, momentum and the behavior of physical objects.",
  },
  {
    icon: "🔥",
    title: "Thermodynamics",
    description:
      "Study heat, temperature, energy transfer and thermal processes.",
  },
  {
    icon: "⚡",
    title: "Electromagnetism",
    description:
      "Study electric charges, currents, magnetic fields and electromagnetic effects.",
  },
  {
    icon: "💡",
    title: "Optics",
    description:
      "Study light, reflection, refraction, lenses and optical instruments.",
  },
  {
    icon: "🔊",
    title: "Acoustics",
    description:
      "Study sound, vibrations, waves and the properties of sound.",
  },
  {
    icon: "⚛️",
    title: "Modern Physics",
    description:
      "Study atoms, quantum ideas, nuclear physics and phenomena beyond classical physics.",
  },
];

const learningTips = [
  "Understand the concept before memorizing the formula.",
  "Write down the given values before solving numerical problems.",
  "Always check the units in your final answer.",
  "Practice diagrams for motion, force, light and electricity.",
  "Revise important formulas regularly.",
  "Solve different types of numerical questions.",
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 leading-7 text-gray-600">{description}</p>
      )}
    </div>
  );
}

export default function PhysicsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="overflow-hidden bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/learn"
            className="inline-flex items-center rounded-lg px-2 py-1 text-sm font-semibold text-blue-100 transition hover:bg-white/10 hover:text-white"
          >
            ← Back to Learning
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                ⚛️ Science Learning Hub
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Learn Physics
                <span className="block text-cyan-100">
                  Clearly & Confidently
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
                Explore physics concepts, formulas, laws, examples and
                important topics through simple and student-friendly lessons.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#chapters"
                  className="rounded-xl bg-white px-6 py-3.5 text-center font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
                >
                  Explore Chapters →
                </a>

                <Link
                  href="/practice"
                  className="rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Practice MCQs →
                </Link>
              </div>
            </div>

            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-[2.5rem] bg-white text-8xl shadow-2xl sm:h-56 sm:w-56 sm:text-9xl">
              ⚛️
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {quickTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="text-3xl">{topic.icon}</div>

                <p className="mt-2 text-sm font-bold text-gray-800 group-hover:text-blue-600">
                  {topic.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Introduction
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              What is Physics?
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              Physics is a branch of science that studies matter, energy,
              motion, forces and the fundamental laws that describe the
              natural world.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              From the motion of planets to electricity, sound, light,
              magnets and atoms, physics helps us understand how the world
              around us works.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-3xl">📐</div>
                <h3 className="mt-3 font-bold">Concepts</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Understand ideas clearly.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-3xl">🧮</div>
                <h3 className="mt-3 font-bold">Formulas</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Learn important equations.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-3xl">❓</div>
                <h3 className="mt-3 font-bold">Practice</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Test your knowledge.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gray-900 p-7 text-white shadow-xl sm:p-9">
            <div className="text-5xl">🎯</div>

            <h2 className="mt-5 text-2xl font-extrabold">
              Your Physics Goal
            </h2>

            <p className="mt-4 leading-7 text-gray-300">
              Build strong fundamentals first, then move towards formulas,
              numerical problems and advanced concepts.
            </p>

            <div className="mt-7 space-y-3">
              <div className="rounded-xl bg-white/10 px-4 py-3">
                ✓ Understand
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-3">
                ✓ Remember
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-3">
                ✓ Practice
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-3">
                ✓ Master
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section id="chapters" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Physics Curriculum"
            title="Physics Chapters"
            description="Choose a chapter to open its complete learning page."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {chapters.map((chapter) => (
              <Link
                key={chapter.number}
                href={chapter.href}
                className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    {chapter.icon}
                  </div>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
                    CH {chapter.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-gray-900 group-hover:text-blue-600">
                  {chapter.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {chapter.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {chapter.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 font-bold text-blue-600">
                  Open Chapter →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Quick Revision"
          title="Important Physics Formulas"
          description="Keep these basic formulas ready while studying and solving numerical problems."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {importantFormulas.map(([name, formula]) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <p className="text-sm font-bold text-blue-600">{name}</p>

              <p className="mt-3 rounded-xl bg-gray-50 p-4 font-mono text-sm font-semibold text-gray-800">
                {formula}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BRANCHES */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Explore Science"
            title="Major Branches of Physics"
            description="Physics is divided into different areas that help us study specific parts of nature."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {physicsBranches.map((branch) => (
              <div
                key={branch.title}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {branch.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {branch.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {branch.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Quick Facts"
          title="Important Physics Units & Facts"
          description="Useful facts for revision, exams and everyday problem solving."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse bg-white">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-5 py-4 text-left font-bold">
                    Quantity / Fact
                  </th>
                  <th className="px-5 py-4 text-left font-bold">
                    Value / Unit
                  </th>
                </tr>
              </thead>

              <tbody>
                {physicsFacts.map(([fact, value], index) => (
                  <tr
                    key={fact}
                    className={
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-gray-50"
                    }
                  >
                    <td className="border-b border-gray-100 px-5 py-4 font-semibold text-gray-800">
                      {fact}
                    </td>

                    <td className="border-b border-gray-100 px-5 py-4 text-gray-600">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* STUDY TIPS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Study Smart"
                title="Physics Study Tips"
                description="Use these simple habits to make physics easier to understand."
              />

              <div className="mt-8 space-y-3">
                {learningTips.map((tip, index) => (
                  <div
                    key={tip}
                    className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-7 text-gray-700">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-600 p-8 text-white shadow-xl">
              <div className="text-6xl">🧠</div>

              <h2 className="mt-6 text-3xl font-extrabold">
                Learn by Understanding
              </h2>

              <p className="mt-5 leading-8 text-blue-50">
                Physics becomes easier when you connect formulas with real
                situations. Try to understand why a formula works instead of
                only memorizing it.
              </p>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <p className="font-bold">Remember:</p>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  Concept → Formula → Example → Practice → Revision
                </p>
              </div>

              <Link
                href="/practice"
                className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Start Practice →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER NAVIGATION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Continue Learning"
          title="Open a Physics Chapter"
          description="Jump directly to any available Physics lesson."
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <Link
              key={`nav-${chapter.number}`}
              href={chapter.href}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <span className="text-2xl">{chapter.icon}</span>

              <div className="min-w-0">
                <p className="text-xs font-bold text-blue-600">
                  CHAPTER {chapter.number}
                </p>

                <p className="truncate font-bold text-gray-800">
                  {chapter.title}
                </p>
              </div>

              <span className="ml-auto text-blue-600">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 p-8 text-center shadow-xl sm:p-12">
          <div className="text-6xl">⚛️</div>

          <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Practice Physics?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Test your understanding with practice questions and improve your
            Physics knowledge step by step.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/practice"
              className="rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Start Practice →
            </Link>

            <Link
              href="/learn"
              className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Back to Learning
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold">
                Rishi Infotech Learning Hub
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Learn subjects, practice concepts and build knowledge in one
                place.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Physics</h3>

              <div className="mt-4 space-y-2 text-sm">
                <Link
                  href="/learn/physics/introduction"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Introduction
                </Link>

                <Link
                  href="/learn/physics/motion"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Motion
                </Link>

                <Link
                  href="/learn/physics/work-energy"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Work & Energy
                </Link>

                <Link
                  href="/learn/physics/electricity"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Electricity
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold">More Topics</h3>

              <div className="mt-4 space-y-2 text-sm">
                <Link
                  href="/learn/physics/light"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Light
                </Link>

                <Link
                  href="/learn/physics/magnetism"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Magnetism
                </Link>

                <Link
                  href="/learn/physics/optics"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Optics
                </Link>

                <Link
                  href="/learn/physics/modern-physics"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Modern Physics
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Quick Links</h3>

              <div className="mt-4 space-y-2 text-sm">
                <Link
                  href="/learn"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Learning Hub
                </Link>

                <Link
                  href="/practice"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Practice
                </Link>

                <Link
                  href="/courses"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Courses
                </Link>

                <Link
                  href="/contact"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}