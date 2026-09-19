import Link from "next/link";

const energyTypes = [
  {
    icon: "🏃",
    title: "Kinetic Energy",
    description:
      "The energy possessed by an object due to its motion.",
    formula: "KE = ½mv²",
    examples: "Moving car, running person, rolling ball",
  },
  {
    icon: "🏔️",
    title: "Potential Energy",
    description:
      "The energy stored in an object because of its position or configuration.",
    formula: "PE = mgh",
    examples: "Water stored in a dam, raised object",
  },
  {
    icon: "🔥",
    title: "Thermal Energy",
    description:
      "Energy associated with the motion of particles inside matter.",
    formula: "Depends on temperature and substance",
    examples: "Hot water, heated metal",
  },
  {
    icon: "⚡",
    title: "Electrical Energy",
    description:
      "Energy associated with the movement of electric charges.",
    formula: "E = P × t",
    examples: "Electric fan, computer, television",
  },
  {
    icon: "☀️",
    title: "Solar Energy",
    description:
      "Energy received from the Sun in the form of radiation.",
    formula: "Solar radiation",
    examples: "Solar panels, sunlight",
  },
  {
    icon: "🧪",
    title: "Chemical Energy",
    description:
      "Energy stored in chemical bonds and released during chemical reactions.",
    formula: "Stored chemical energy",
    examples: "Food, batteries, fuels",
  },
];

const workConditions = [
  {
    icon: "💪",
    title: "Force Applied",
    description:
      "A force must act on the object.",
  },
  {
    icon: "➡️",
    title: "Displacement",
    description:
      "The object must undergo displacement.",
  },
  {
    icon: "📐",
    title: "Direction",
    description:
      "The force should have a component in the direction of displacement.",
  },
];

const powerExamples = [
  ["💡", "100 W Bulb", "Uses 100 joules of energy every second."],
  ["🚗", "Car Engine", "A powerful engine can perform work at a higher rate."],
  ["🏃", "Athlete", "An athlete can produce mechanical power while running."],
  ["⚙️", "Machine", "Machines are rated according to the rate at which they do work."],
];

const formulas = [
  ["Work", "W = F × s", "Joule (J)"],
  ["Kinetic Energy", "KE = ½mv²", "Joule (J)"],
  ["Potential Energy", "PE = mgh", "Joule (J)"],
  ["Power", "P = W / t", "Watt (W)"],
  ["Power", "P = E / t", "Watt (W)"],
  ["Mechanical Energy", "ME = KE + PE", "Joule (J)"],
];

const importantPoints = [
  "Work is done when a force causes displacement of an object.",
  "The SI unit of work is Joule (J).",
  "Work is a scalar quantity.",
  "Energy is the capacity to do work.",
  "The SI unit of energy is Joule (J).",
  "Kinetic energy depends on the mass and velocity of an object.",
  "Potential energy depends on mass, gravitational acceleration and height.",
  "Power is the rate of doing work.",
  "The SI unit of power is Watt (W).",
  "One watt is equal to one joule per second.",
  "Mechanical energy is the sum of kinetic and potential energy.",
  "Energy can be transformed from one form to another.",
  "Energy cannot be created or destroyed; it can only be transformed.",
];

const chapterContents = [
  ["01", "What is Work?", "#work"],
  ["02", "Conditions for Work", "#conditions"],
  ["03", "Positive, Negative & Zero Work", "#types-work"],
  ["04", "Energy", "#energy"],
  ["05", "Kinetic Energy", "#kinetic"],
  ["06", "Potential Energy", "#potential"],
  ["07", "Forms of Energy", "#energy-types"],
  ["08", "Power", "#power"],
  ["09", "Conservation of Energy", "#conservation"],
  ["10", "Important Formulas", "#formulas"],
  ["11", "Daily Life Examples", "#examples"],
  ["12", "Important Points", "#important-points"],
];

export default function WorkEnergyPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-500">

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
              ⚙️
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                PHYSICS CHAPTER 03
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Work & Energy
              </h2>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn work, energy, kinetic energy, potential energy, power,
            conservation of energy, formulas and practical examples.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#work"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              ⚙️ Start Learning
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
            Work & Energy
          </span>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* ARTICLE */}
            <article>

              {/* WORK */}
              <section id="work">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 03
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is Work?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  In physics, work is said to be done when a force acting on
                  an object causes the object to move through a distance in
                  the direction of the force.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    ⚙️
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Work = Force × Displacement
                  </h3>

                  <p className="mt-3 text-slate-300 leading-7">
                    When force and displacement are in the same direction,
                    work can be calculated using:
                  </p>

                  <div className="mt-6 rounded-2xl bg-white/5 p-6">

                    <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                      Formula
                    </p>

                    <p className="mt-2 text-4xl font-black">
                      W = F × s
                    </p>

                  </div>

                  <div className="mt-5">

                    <p className="text-sm text-slate-400">
                      SI Unit
                    </p>

                    <p className="mt-1 text-xl font-black text-cyan-400">
                      Joule (J)
                    </p>

                  </div>

                </div>

              </section>

              {/* CONDITIONS */}
              <section id="conditions" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Basic Concept
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Conditions Required for Work
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  For mechanical work to be done, force and displacement
                  conditions must be satisfied.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  {workConditions.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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

              {/* TYPES OF WORK */}
              <section id="types-work" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Classification
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Positive, Negative & Zero Work
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-3xl border border-green-100 bg-green-50 p-7">

                    <div className="text-4xl">
                      ➕
                    </div>

                    <h3 className="mt-4 text-xl font-black text-slate-900">
                      Positive Work
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Work is positive when force and displacement are in
                      the same direction.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4 font-black text-green-700">
                      W &gt; 0
                    </div>

                  </div>

                  <div className="rounded-3xl border border-red-100 bg-red-50 p-7">

                    <div className="text-4xl">
                      ➖
                    </div>

                    <h3 className="mt-4 text-xl font-black text-slate-900">
                      Negative Work
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Work is negative when force acts opposite to the
                      direction of displacement.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4 font-black text-red-700">
                      W &lt; 0
                    </div>

                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

                    <div className="text-4xl">
                      0️⃣
                    </div>

                    <h3 className="mt-4 text-xl font-black text-slate-900">
                      Zero Work
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Work is zero when there is no displacement or force
                      has no component along displacement.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4 font-black text-slate-700">
                      W = 0
                    </div>

                  </div>

                </div>

              </section>

              {/* ENERGY */}
              <section id="energy" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Energy
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  What is Energy?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Energy is the capacity of an object or system to do work.
                  Energy exists in many different forms and can be converted
                  from one form to another.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8">

                  <div className="text-5xl">
                    ⚡
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-slate-900">
                    Energy = Capacity to Do Work
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    The SI unit of energy is the Joule (J).
                  </p>

                </div>

              </section>

              {/* KINETIC */}
              <section id="kinetic" className="mt-16">

                <div className="rounded-3xl bg-indigo-50 p-8">

                  <p className="font-bold uppercase tracking-widest text-indigo-600">
                    Energy of Motion
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-slate-900">
                    Kinetic Energy
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    Kinetic energy is the energy possessed by an object due
                    to its motion. A moving object has kinetic energy.
                  </p>

                  <div className="mt-7 rounded-2xl bg-white p-6">

                    <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                      Formula
                    </p>

                    <p className="mt-2 text-4xl font-black text-slate-900">
                      KE = ½mv²
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">

                      <div className="rounded-xl bg-indigo-50 p-4">
                        <p className="text-xs text-slate-500">
                          m
                        </p>
                        <p className="font-bold">
                          Mass
                        </p>
                      </div>

                      <div className="rounded-xl bg-indigo-50 p-4">
                        <p className="text-xs text-slate-500">
                          v
                        </p>
                        <p className="font-bold">
                          Velocity
                        </p>
                      </div>

                      <div className="rounded-xl bg-indigo-50 p-4">
                        <p className="text-xs text-slate-500">
                          KE
                        </p>
                        <p className="font-bold">
                          Kinetic Energy
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </section>

              {/* POTENTIAL */}
              <section id="potential" className="mt-16">

                <div className="rounded-3xl bg-cyan-50 p-8">

                  <p className="font-bold uppercase tracking-widest text-cyan-600">
                    Stored Energy
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-slate-900">
                    Potential Energy
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    Potential energy is the energy stored in an object because
                    of its position, shape or configuration.
                  </p>

                  <div className="mt-7 rounded-2xl bg-white p-6">

                    <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                      Gravitational Potential Energy
                    </p>

                    <p className="mt-2 text-4xl font-black text-slate-900">
                      PE = mgh
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">

                      <div className="rounded-xl bg-cyan-50 p-4">
                        <p className="text-xs text-slate-500">
                          m
                        </p>
                        <p className="font-bold">
                          Mass
                        </p>
                      </div>

                      <div className="rounded-xl bg-cyan-50 p-4">
                        <p className="text-xs text-slate-500">
                          g
                        </p>
                        <p className="font-bold">
                          Gravitational Acceleration
                        </p>
                      </div>

                      <div className="rounded-xl bg-cyan-50 p-4">
                        <p className="text-xs text-slate-500">
                          h
                        </p>
                        <p className="font-bold">
                          Height
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </section>

              {/* ENERGY TYPES */}
              <section id="energy-types" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Energy Forms
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Different Forms of Energy
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {energyTypes.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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

                      <div className="mt-5 rounded-xl bg-slate-50 p-4">

                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Formula / Idea
                        </p>

                        <p className="mt-1 font-black text-slate-900">
                          {item.formula}
                        </p>

                      </div>

                      <p className="mt-4 text-sm text-slate-500">
                        <span className="font-bold text-slate-700">
                          Examples:
                        </span>{" "}
                        {item.examples}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* POWER */}
              <section id="power" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Rate of Doing Work
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Power
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Power is the rate at which work is done or energy is
                  transferred. A machine that performs the same amount of
                  work in less time has greater power.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Formula
                  </p>

                  <p className="mt-3 text-4xl font-black">
                    P = W / t
                  </p>

                  <p className="mt-4 text-slate-300">
                    Power = Work ÷ Time
                  </p>

                  <div className="mt-6 rounded-2xl bg-white/5 p-5">

                    <p className="text-sm text-slate-400">
                      SI Unit
                    </p>

                    <p className="mt-1 text-2xl font-black text-cyan-400">
                      Watt (W)
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      1 Watt = 1 Joule per second
                    </p>

                  </div>

                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {powerExamples.map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >

                      <div className="text-3xl">
                        {icon}
                      </div>

                      <h3 className="mt-3 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* CONSERVATION */}
              <section id="conservation" className="mt-16">

                <div className="rounded-3xl border border-green-100 bg-green-50 p-8">

                  <p className="font-bold uppercase tracking-widest text-green-600">
                    Fundamental Law
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-slate-900">
                    Law of Conservation of Energy
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    Energy can neither be created nor destroyed. It can only
                    be transformed from one form to another. Therefore, the
                    total energy of an isolated system remains constant.
                  </p>

                  <div className="mt-7 rounded-2xl bg-white p-6 text-center">

                    <p className="text-sm font-bold uppercase tracking-widest text-green-600">
                      Key Concept
                    </p>

                    <p className="mt-3 text-2xl font-black text-slate-900">
                      Total Energy Before = Total Energy After
                    </p>

                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl bg-white p-5 text-center">
                      <div className="text-3xl">
                        ☀️
                      </div>
                      <p className="mt-3 font-bold">
                        Solar Energy
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center">
                      <div className="text-3xl">
                        ⚡
                      </div>
                      <p className="mt-3 font-bold">
                        Electrical Energy
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center">
                      <div className="text-3xl">
                        💡
                      </div>
                      <p className="mt-3 font-bold">
                        Light Energy
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* FORMULAS */}
              <section id="formulas" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Formulas
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">
                      Quantity
                    </div>

                    <div className="p-4">
                      Formula
                    </div>

                    <div className="p-4">
                      SI Unit
                    </div>

                  </div>

                  {formulas.map(([name, formula, unit], index) => (
                    <div
                      key={name}
                      className={`grid grid-cols-1 md:grid-cols-3 ${
                        index !== formulas.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-5 font-black text-blue-600">
                        {name}
                      </div>

                      <div className="p-5 font-black text-slate-900">
                        <span className="mr-2 md:hidden">
                          Formula:
                        </span>

                        {formula}
                      </div>

                      <div className="p-5 text-sm text-slate-600">
                        <span className="mr-2 font-bold md:hidden">
                          Unit:
                        </span>

                        {unit}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* EXAMPLES */}
              <section id="examples" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Everyday Physics
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Work & Energy in Daily Life
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {[
                    [
                      "🏋️",
                      "Lifting an Object",
                      "When a person lifts an object, muscular force does work against gravity and the object gains potential energy.",
                    ],
                    [
                      "🎢",
                      "Roller Coaster",
                      "A roller coaster converts potential energy into kinetic energy as it moves downward.",
                    ],
                    [
                      "💡",
                      "Electric Bulb",
                      "Electrical energy is transformed into light and thermal energy in a bulb.",
                    ],
                    [
                      "🔋",
                      "Battery",
                      "Chemical energy stored in a battery is converted into electrical energy.",
                    ],
                  ].map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                  Ready for Work & Energy MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of work, energy, power, kinetic
                  energy, potential energy and conservation of energy.
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

                  {chapterContents.map(([number, title, href]) => (
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

                  <div className="h-full w-3/4 rounded-full bg-blue-600" />

                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Keep learning to complete this chapter.
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
            href="/learn/physics/force-laws-motion"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Force & Laws
          </Link>

          <Link
            href="/learn/physics/gravitation"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Gravitation →
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