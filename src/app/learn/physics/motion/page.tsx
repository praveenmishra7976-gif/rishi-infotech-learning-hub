import Link from "next/link";

const concepts = [
  {
    icon: "🏃",
    title: "Motion",
    description:
      "An object is said to be in motion when its position changes with respect to a reference point as time passes.",
  },
  {
    icon: "📏",
    title: "Distance",
    description:
      "Distance is the total length of the actual path travelled by an object.",
  },
  {
    icon: "📍",
    title: "Displacement",
    description:
      "Displacement is the shortest straight-line distance from the initial position to the final position, with direction.",
  },
  {
    icon: "⚡",
    title: "Speed",
    description:
      "Speed tells us how fast an object is moving. It is the distance travelled per unit time.",
  },
  {
    icon: "🧭",
    title: "Velocity",
    description:
      "Velocity is the rate of change of displacement and includes direction.",
  },
  {
    icon: "🚀",
    title: "Acceleration",
    description:
      "Acceleration is the rate at which velocity changes with time.",
  },
];

const motionTypes = [
  [
    "➡️",
    "Uniform Motion",
    "An object covers equal distances in equal intervals of time.",
  ],
  [
    "🔄",
    "Non-Uniform Motion",
    "An object covers unequal distances in equal intervals of time.",
  ],
  [
    "⭕",
    "Circular Motion",
    "An object moves along a circular path around a fixed point.",
  ],
  [
    "↔️",
    "Linear Motion",
    "An object moves along a straight-line path.",
  ],
  [
    "🔁",
    "Periodic Motion",
    "Motion that repeats itself after regular intervals of time.",
  ],
  [
    "🎯",
    "Random Motion",
    "Motion in which the direction and path are unpredictable.",
  ],
];

const formulas = [
  ["Speed", "Speed = Distance / Time", "m/s"],
  ["Average Speed", "Average Speed = Total Distance / Total Time", "m/s"],
  ["Velocity", "Velocity = Displacement / Time", "m/s"],
  ["Acceleration", "a = (v - u) / t", "m/s²"],
  ["First Equation", "v = u + at", "m/s"],
  ["Second Equation", "s = ut + ½at²", "m"],
  ["Third Equation", "v² = u² + 2as", "m/s"],
];

const variables = [
  ["u", "Initial velocity", "m/s"],
  ["v", "Final velocity", "m/s"],
  ["a", "Acceleration", "m/s²"],
  ["t", "Time", "s"],
  ["s", "Displacement", "m"],
];

const comparisons = [
  [
    "Distance",
    "Scalar",
    "Actual path travelled",
    "Always positive or zero",
  ],
  [
    "Displacement",
    "Vector",
    "Shortest distance between initial and final positions",
    "Can be positive, negative or zero",
  ],
  ["Speed", "Scalar", "Rate of distance travelled", "Always positive or zero"],
  [
    "Velocity",
    "Vector",
    "Rate of displacement",
    "Can be positive, negative or zero",
  ],
];

const graphPoints = [
  [
    "Distance-Time Graph",
    "The slope of a distance-time graph represents speed.",
  ],
  [
    "Velocity-Time Graph",
    "The slope of a velocity-time graph represents acceleration.",
  ],
  [
    "Area Under v-t Graph",
    "The area under a velocity-time graph represents displacement.",
  ],
];

const importantPoints = [
  "Motion is a change in position with respect to a reference point.",
  "Distance is a scalar quantity.",
  "Displacement is a vector quantity.",
  "Distance is always greater than or equal to the magnitude of displacement.",
  "Speed is a scalar quantity.",
  "Velocity is a vector quantity.",
  "Acceleration is the rate of change of velocity.",
  "The SI unit of distance is metre (m).",
  "The SI unit of time is second (s).",
  "The SI unit of speed and velocity is metre per second (m/s).",
  "The SI unit of acceleration is metre per second squared (m/s²).",
  "For uniform motion, velocity remains constant.",
  "If velocity does not change, acceleration is zero.",
  "The slope of a distance-time graph gives speed.",
  "The slope of a velocity-time graph gives acceleration.",
];

export default function MotionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-lg">
              RI
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Rishi Infotech
              </h1>

              <p className="text-xs font-medium text-blue-600">
                Learning Hub
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">

            <Link
              href="/"
              className="font-medium hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/learn"
              className="font-medium text-blue-600"
            >
              Learn
            </Link>

            <Link
              href="/practice"
              className="font-medium hover:text-blue-600"
            >
              Practice
            </Link>

            <Link
              href="/ai-hub"
              className="font-medium hover:text-blue-600"
            >
              AI Hub
            </Link>

            <Link
              href="/developer-hub"
              className="font-medium hover:text-blue-600"
            >
              Developer
            </Link>

            <Link
              href="/downloads"
              className="font-medium hover:text-blue-600"
            >
              Downloads
            </Link>

          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700"
          >
            Contact
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">

          <Link
            href="/learn/physics"
            className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            ← Physics Chapters
          </Link>

          <div className="mt-8 flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              🏃
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                CHAPTER 02
              </p>

              <h1 className="text-3xl font-black text-white sm:text-5xl">
                Motion
              </h1>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn the fundamentals of motion, distance, displacement,
            speed, velocity, acceleration, equations of motion and
            motion graphs with simple explanations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#learn"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              📚 Start Learning
            </a>

            <Link
              href="/practice/mcq"
              className="rounded-xl border-2 border-white/60 px-7 py-3.5 text-center font-bold text-white hover:bg-white hover:text-blue-700"
            >
              📝 Practice MCQs
            </Link>

          </div>

        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-4 text-sm lg:px-8">

          <Link
            href="/learn"
            className="text-blue-600 hover:underline"
          >
            Learn
          </Link>

          <span className="mx-2 text-slate-400">
            /
          </span>

          <Link
            href="/learn/physics"
            className="text-blue-600 hover:underline"
          >
            Physics
          </Link>

          <span className="mx-2 text-slate-400">
            /
          </span>

          <span className="text-slate-500">
            Motion
          </span>

        </div>

      </div>

      {/* MAIN */}
      <section id="learn" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* CONTENT */}
            <article>

              {/* INTRODUCTION */}
              <section>

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 02
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is Motion?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Motion is the change in position of an object with
                  respect to a reference point as time passes. For
                  example, a moving car changes its position relative
                  to the road.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    🏃
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Motion = Change in Position with Time
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    An object can be considered to be in motion when
                    its position changes relative to a reference point.
                  </p>

                </div>

              </section>

              {/* BASIC CONCEPTS */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Basic Concepts
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Concepts of Motion
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {concepts.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* DISTANCE */}
              <section
                id="distance"
                className="mt-16 rounded-3xl bg-blue-50 p-8"
              >

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Concept 01
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Distance
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Distance is the total length of the actual path
                  travelled by an object. It is a scalar quantity,
                  which means it has magnitude but no direction.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    "Scalar quantity",
                    "Has only magnitude",
                    "Depends on actual path",
                    "SI unit is metre (m)",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white p-4"
                    >

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                        ✓
                      </span>

                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </section>

              {/* DISPLACEMENT */}
              <section
                id="displacement"
                className="mt-16 rounded-3xl bg-cyan-50 p-8"
              >

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Concept 02
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Displacement
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Displacement is the shortest straight-line distance
                  between the initial and final positions of an object,
                  together with its direction.
                </p>

                <div className="mt-7 rounded-2xl bg-white p-6">

                  <h3 className="font-black text-slate-900">
                    Important Relationship
                  </h3>

                  <p className="mt-3 text-lg font-bold text-cyan-700">
                    Magnitude of Displacement ≤ Distance
                  </p>

                </div>

              </section>

              {/* TYPES */}
              <section id="types" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Classification
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Types of Motion
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {motionTypes.map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* SPEED */}
              <section
                id="speed"
                className="mt-16 rounded-3xl bg-slate-900 p-8 text-white"
              >

                <p className="font-bold uppercase tracking-widest text-cyan-400">
                  Concept 03
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Speed
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Speed is the distance travelled by an object per unit
                  time. It tells us how fast an object is moving.
                </p>

                <div className="mt-7 rounded-2xl bg-white/5 p-6">

                  <div className="text-2xl font-black text-cyan-400">
                    Speed = Distance ÷ Time
                  </div>

                  <p className="mt-3 text-sm text-slate-400">
                    SI unit: metre per second (m/s)
                  </p>

                </div>

              </section>

              {/* VELOCITY */}
              <section
                id="velocity"
                className="mt-16 rounded-3xl bg-indigo-50 p-8"
              >

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Concept 04
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Velocity
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Velocity is the rate of change of displacement.
                  Unlike speed, velocity includes direction.
                </p>

                <div className="mt-7 rounded-2xl bg-white p-6">

                  <div className="text-2xl font-black text-indigo-600">
                    Velocity = Displacement ÷ Time
                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    SI unit: metre per second (m/s)
                  </p>

                </div>

              </section>

              {/* ACCELERATION */}
              <section
                id="acceleration"
                className="mt-16 rounded-3xl border border-orange-100 bg-orange-50 p-8"
              >

                <p className="font-bold uppercase tracking-widest text-orange-600">
                  Concept 05
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Acceleration
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Acceleration is the rate of change of velocity with
                  respect to time. An object accelerates when its
                  velocity changes.
                </p>

                <div className="mt-7 rounded-2xl bg-white p-6">

                  <div className="text-2xl font-black text-orange-600">
                    a = (v − u) ÷ t
                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    SI unit: metre per second squared (m/s²)
                  </p>

                </div>

              </section>

              {/* EQUATIONS */}
              <section id="equations" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Formula Sheet
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Equations of Motion
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  For uniformly accelerated motion, the following
                  equations are commonly used.
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                  {formulas.map(([name, formula, unit], index) => (
                    <div
                      key={name}
                      className={`grid gap-3 p-5 md:grid-cols-[180px_1fr_100px] ${
                        index !== formulas.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="font-black text-blue-600">
                        {name}
                      </div>

                      <div className="font-bold text-slate-900">
                        {formula}
                      </div>

                      <div className="text-sm text-slate-500">
                        {unit}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* VARIABLES */}
              <section id="variables" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Formula Symbols
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Symbols Used in Equations
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {variables.map(([symbol, meaning, unit]) => (
                    <div
                      key={symbol}
                      className="rounded-2xl border border-slate-200 bg-white p-5"
                    >

                      <div className="flex items-center justify-between">

                        <span className="text-2xl font-black text-blue-600">
                          {symbol}
                        </span>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                          {unit}
                        </span>

                      </div>

                      <p className="mt-3 font-semibold text-slate-700">
                        {meaning}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* GRAPHS */}
              <section id="graphs" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Graphical Representation
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Motion Graphs
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  {graphPoints.map(([title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                      <div className="text-4xl">
                        📈
                      </div>

                      <h3 className="mt-4 text-xl font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* COMPARISON */}
              <section id="comparison" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Quick Comparison
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Distance, Displacement, Speed & Velocity
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

                  <div className="hidden grid-cols-4 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">
                      Quantity
                    </div>

                    <div className="p-4">
                      Type
                    </div>

                    <div className="p-4">
                      Meaning
                    </div>

                    <div className="p-4">
                      Nature
                    </div>

                  </div>

                  {comparisons.map((row, index) => (
                    <div
                      key={row[0]}
                      className={`grid grid-cols-1 md:grid-cols-4 ${
                        index !== comparisons.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-4 font-black text-blue-600">
                        {row[0]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Type:{" "}
                        </span>
                        {row[1]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Meaning:{" "}
                        </span>
                        {row[2]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Nature:{" "}
                        </span>
                        {row[3]}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* IMPORTANT POINTS */}
              <section id="important-points" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Exam Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Points
                </h2>

                <div className="mt-8 space-y-3">

                  {importantPoints.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-600">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* PRACTICE */}
              <section className="mt-16 rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-2xl md:p-10">

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Test Your Knowledge
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Ready for Motion MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of motion, distance,
                  displacement, speed, velocity, acceleration and
                  equations of motion.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/practice/mcq"
                    className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-lg hover:scale-105"
                  >
                    📝 Start MCQ
                  </Link>

                  <Link
                    href="/practice/mock-tests"
                    className="rounded-xl border-2 border-white/60 px-7 py-3.5 text-center font-bold text-white hover:bg-white hover:text-blue-700"
                  >
                    🎯 Mock Test
                  </Link>

                </div>

              </section>

            </article>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-24 lg:h-fit">

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <h3 className="text-lg font-black text-slate-900">
                  Chapter Contents
                </h3>

                <div className="mt-5 space-y-2">

                  {[
                    ["01", "What is Motion?", "#learn"],
                    ["02", "Basic Concepts", "#distance"],
                    ["03", "Distance", "#distance"],
                    ["04", "Displacement", "#displacement"],
                    ["05", "Types of Motion", "#types"],
                    ["06", "Speed", "#speed"],
                    ["07", "Velocity", "#velocity"],
                    ["08", "Acceleration", "#acceleration"],
                    ["09", "Equations of Motion", "#equations"],
                    ["10", "Formula Symbols", "#variables"],
                    ["11", "Motion Graphs", "#graphs"],
                    ["12", "Comparison", "#comparison"],
                    ["13", "Important Points", "#important-points"],
                  ].map(([number, title, href]) => (
                    <a
                      key={number}
                      href={href}
                      className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    >

                      <span className="mr-2 font-bold text-blue-600">
                        {number}.
                      </span>

                      {title}

                    </a>
                  ))}

                </div>

              </div>

              <div className="mt-5 rounded-3xl bg-blue-50 p-6">

                <h3 className="font-black text-blue-900">
                  Chapter Progress
                </h3>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-200">

                  <div className="h-full w-2/5 rounded-full bg-blue-600" />

                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Continue learning to complete this chapter.
                </p>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* NAVIGATION */}
      <section className="border-t border-slate-200 bg-slate-50 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row lg:px-8">

          <Link
            href="/learn/physics/units-measurements"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Units & Measurements
          </Link>

          <Link
            href="/learn/physics/force-laws-motion"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Force & Laws of Motion →
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div>

              <h2 className="text-xl font-bold">
                Rishi Infotech
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learning, practice, AI tools and developer utilities
                in one place.
              </p>

            </div>

            <div>

              <h3 className="font-semibold">
                Learning
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link
                  href="/learn"
                  className="block hover:text-white"
                >
                  All Subjects
                </Link>

                <Link
                  href="/learn/physics"
                  className="block hover:text-white"
                >
                  Physics
                </Link>

                <Link
                  href="/learn/computer"
                  className="block hover:text-white"
                >
                  Computer
                </Link>

              </div>

            </div>

            <div>

              <h3 className="font-semibold">
                Practice
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link
                  href="/practice"
                  className="block hover:text-white"
                >
                  Practice Center
                </Link>

                <Link
                  href="/practice/mcq"
                  className="block hover:text-white"
                >
                  MCQ Quiz
                </Link>

                <Link
                  href="/practice/mock-tests"
                  className="block hover:text-white"
                >
                  Mock Tests
                </Link>

              </div>

            </div>

            <div>

              <h3 className="font-semibold">
                Tools
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link
                  href="/ai-hub"
                  className="block hover:text-white"
                >
                  AI Hub
                </Link>

                <Link
                  href="/developer-hub"
                  className="block hover:text-white"
                >
                  Developer Hub
                </Link>

                <Link
                  href="/dictionary"
                  className="block hover:text-white"
                >
                  Dictionary
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