import Link from "next/link";

const topics = [
  ["01", "Introduction to Magnetism", "#introduction"],
  ["02", "Magnets", "#magnets"],
  ["03", "Magnetic Poles", "#poles"],
  ["04", "Magnetic Field", "#field"],
  ["05", "Magnetic Field Lines", "#field-lines"],
  ["06", "Earth as a Magnet", "#earth"],
  ["07", "Magnetic Effect of Current", "#current-effect"],
  ["08", "Electromagnet", "#electromagnet"],
  ["09", "Electric Motor", "#motor"],
  ["10", "Electromagnetic Induction", "#induction"],
  ["11", "Electric Generator", "#generator"],
  ["12", "Applications of Magnets", "#applications"],
  ["13", "Important Formulas", "#formulas"],
  ["14", "Important Points", "#important"],
];

const concepts = [
  {
    icon: "🧲",
    title: "Magnet",
    description:
      "A magnet is a material or object that produces a magnetic field and attracts magnetic materials such as iron.",
  },
  {
    icon: "🧭",
    title: "Magnetic Field",
    description:
      "The region around a magnet where magnetic force can be experienced is called the magnetic field.",
  },
  {
    icon: "⚡",
    title: "Electromagnet",
    description:
      "An electromagnet is a temporary magnet produced when electric current flows through a coil.",
  },
  {
    icon: "🔄",
    title: "Electromagnetic Induction",
    description:
      "It is the production of induced current or emf when the magnetic flux linked with a circuit changes.",
  },
];

const importantPoints = [
  "A magnet has two poles: north pole and south pole.",
  "Like magnetic poles repel each other.",
  "Unlike magnetic poles attract each other.",
  "Magnetic poles always occur in pairs.",
  "A magnetic field is strongest near the poles of a magnet.",
  "Magnetic field lines outside a bar magnet go from north pole to south pole.",
  "Magnetic field lines never intersect each other.",
  "A compass needle aligns itself approximately along the Earth's magnetic field.",
  "Electric current can produce a magnetic field.",
  "A current-carrying coil can behave like a magnet.",
  "An electromagnet becomes stronger when suitable current, number of turns and core conditions are increased.",
  "An electric motor converts electrical energy into mechanical energy.",
  "An electric generator converts mechanical energy into electrical energy.",
  "Electromagnetic induction is associated with a changing magnetic field or magnetic flux.",
  "Magnets and electromagnets are widely used in motors, generators, speakers, relays and many other devices.",
];

const formulas = [
  ["Force on current-carrying conductor", "F = BIL sin θ", "Magnetic force on a conductor"],
  ["Magnetic flux", "Φ = BA cos θ", "For a uniform magnetic field"],
  ["Motor principle", "F = BIL", "Simplified case when θ = 90°"],
  ["Induced emf", "ε = -N ΔΦ / Δt", "Faraday's law"],
];

export default function MagnetismPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500">

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
              🧲
            </div>

            <div>
              <p className="font-semibold text-blue-100">
                PHYSICS CHAPTER 09
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Magnetism
              </h2>
            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn about magnets, magnetic poles, magnetic fields, field
            lines, electromagnets, electric motors, electromagnetic
            induction and generators.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#introduction"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              🧲 Start Learning
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

          <span className="mx-2 text-slate-400">/</span>

          <Link
            href="/learn/physics"
            className="text-blue-600 hover:underline"
          >
            Physics
          </Link>

          <span className="mx-2 text-slate-400">/</span>

          <span className="text-slate-500">
            Magnetism
          </span>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            <article>

              {/* INTRODUCTION */}
              <section id="introduction">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 09
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  Introduction to Magnetism
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Magnetism is a physical phenomenon associated with
                  magnetic materials and moving electric charges. A magnet
                  produces a magnetic field around itself and can exert
                  forces on other magnets and magnetic materials.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-7xl">
                    🧲
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Magnetism is closely connected with electricity
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Electric current can produce magnetic effects, while
                    changing magnetic fields can produce electrical
                    effects. This relationship is the foundation of many
                    electrical machines.
                  </p>

                </div>

              </section>

              {/* BASIC CONCEPTS */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Basic Concepts
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Four Important Ideas
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {concepts.map((item) => (
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

              {/* MAGNETS */}
              <section id="magnets" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Concept 01
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Magnets
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A magnet is an object that produces a magnetic field.
                  Magnets can attract certain materials, especially iron,
                  nickel and cobalt and some of their alloys.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  <div className="rounded-3xl bg-blue-50 p-7">

                    <div className="text-6xl">
                      🧲
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Permanent Magnet
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      A permanent magnet retains its magnetism for a long
                      period under normal conditions.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7">

                    <div className="text-6xl">
                      ⚡
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Electromagnet
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      An electromagnet produces magnetic effects when
                      electric current flows through a suitable coil.
                    </p>

                  </div>

                </div>

              </section>

              {/* POLES */}
              <section id="poles" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Concept 02
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Magnetic Poles
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Every magnet has two magnetic poles: a north pole and a
                  south pole. Magnetic interaction depends on which poles
                  are brought near each other.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl border border-red-100 bg-red-50 p-8 text-center">

                    <div className="text-6xl">
                      🧲
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-red-700">
                      North Pole
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      One of the two poles of a magnet.
                    </p>

                  </div>

                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center">

                    <div className="text-6xl">
                      🧲
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-blue-700">
                      South Pole
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      The other pole of a magnet.
                    </p>

                  </div>

                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-red-50 p-5 text-center">
                    <p className="font-black text-red-700">
                      Like Poles
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Repel
                    </p>
                  </div>

                  <div className="rounded-2xl bg-green-50 p-5 text-center">
                    <p className="font-black text-green-700">
                      Unlike Poles
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Attract
                    </p>
                  </div>

                </div>

              </section>

              {/* MAGNETIC FIELD */}
              <section id="field" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Concept 03
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Magnetic Field
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  The space or region around a magnet in which another
                  magnet or magnetic material experiences magnetic force is
                  called the magnetic field.
                </p>

                <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8">

                  <div className="flex min-h-64 items-center justify-center">

                    <div className="relative flex h-36 w-64 items-center justify-center rounded-full border-4 border-dashed border-blue-300">

                      <div className="flex h-24 w-40 overflow-hidden rounded-xl shadow-lg">

                        <div className="flex w-1/2 items-center justify-center bg-red-500 text-2xl font-black text-white">
                          N
                        </div>

                        <div className="flex w-1/2 items-center justify-center bg-blue-600 text-2xl font-black text-white">
                          S
                        </div>

                      </div>

                    </div>

                  </div>

                  <p className="text-center text-sm text-slate-600">
                    The magnetic field is represented visually using
                    magnetic field lines.
                  </p>

                </div>

              </section>

              {/* FIELD LINES */}
              <section id="field-lines" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Concept 04
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Magnetic Field Lines
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Magnetic field lines are imaginary lines used to
                  represent the direction and relative strength of a
                  magnetic field.
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex gap-4 rounded-2xl bg-blue-50 p-5">

                    <span className="text-2xl">
                      ➡️
                    </span>

                    <div>
                      <h3 className="font-black">
                        Direction
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Outside a bar magnet, field lines are conventionally
                        shown from the north pole toward the south pole.
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-4 rounded-2xl bg-cyan-50 p-5">

                    <span className="text-2xl">
                      📏
                    </span>

                    <div>
                      <h3 className="font-black">
                        Density
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Closer field lines indicate a stronger magnetic
                        field.
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-4 rounded-2xl bg-indigo-50 p-5">

                    <span className="text-2xl">
                      🚫
                    </span>

                    <div>
                      <h3 className="font-black">
                        No Intersection
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Magnetic field lines do not intersect each other.
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* EARTH */}
              <section id="earth" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Natural Magnetism
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Earth as a Magnet
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Earth behaves approximately like a giant magnet. Its
                  magnetic field is responsible for the directional
                  behavior of a magnetic compass.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8">

                  <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border-8 border-blue-200 bg-white text-7xl shadow-lg">
                    🌍
                  </div>

                  <h3 className="mt-7 text-center text-xl font-black">
                    Earth's Magnetic Field
                  </h3>

                  <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-slate-600">
                    A compass needle aligns with the local direction of
                    Earth's magnetic field.
                  </p>

                </div>

              </section>

              {/* CURRENT EFFECT */}
              <section id="current-effect" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Electricity + Magnetism
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Magnetic Effect of Electric Current
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  When electric current flows through a conductor, it
                  produces a magnetic field around the conductor. This is
                  called the magnetic effect of electric current.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">

                    <div className="rounded-2xl bg-white/10 p-7 text-center">

                      <div className="text-5xl">
                        🔋
                      </div>

                      <p className="mt-3 font-black">
                        Current
                      </p>

                    </div>

                    <div className="text-4xl text-cyan-400">
                      →
                    </div>

                    <div className="rounded-2xl bg-white/10 p-7 text-center">

                      <div className="text-5xl">
                        🧲
                      </div>

                      <p className="mt-3 font-black">
                        Magnetic Field
                      </p>

                    </div>

                  </div>

                  <p className="mt-7 text-center text-sm leading-7 text-slate-300">
                    Current through a conductor creates a magnetic field
                    around it.
                  </p>

                </div>

              </section>

              {/* ELECTROMAGNET */}
              <section id="electromagnet" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Application
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Electromagnet
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  An electromagnet is a temporary magnet created by passing
                  electric current through a coil, often wound around a
                  suitable magnetic core.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-3xl bg-blue-50 p-7 text-center">

                    <div className="text-5xl">
                      🔋
                    </div>

                    <h3 className="mt-4 font-black">
                      Current
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Electric current flows through the coil.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-indigo-50 p-7 text-center">

                    <div className="text-5xl">
                      🌀
                    </div>

                    <h3 className="mt-4 font-black">
                      Coil
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      The coil produces a magnetic field.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7 text-center">

                    <div className="text-5xl">
                      🧲
                    </div>

                    <h3 className="mt-4 font-black">
                      Magnet
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      The setup behaves like a magnet while energized.
                    </p>

                  </div>

                </div>

                <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">

                  <h3 className="font-black text-cyan-400">
                    Common uses
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Electric bells, relays, lifting magnets, speakers,
                    motors and many electrical devices use electromagnets.
                  </p>

                </div>

              </section>

              {/* MOTOR */}
              <section id="motor" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Electrical Machine
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Electric Motor
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  An electric motor is a device that converts electrical
                  energy into mechanical energy. It works because a
                  current-carrying conductor experiences a force in a
                  magnetic field.
                </p>

                <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">

                  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">

                    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">

                      <div className="text-5xl">
                        🔋
                      </div>

                      <p className="mt-3 font-black">
                        Electrical Energy
                      </p>

                    </div>

                    <div className="text-4xl font-black text-blue-600">
                      →
                    </div>

                    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">

                      <div className="text-5xl">
                        ⚙️
                      </div>

                      <p className="mt-3 font-black">
                        Mechanical Energy
                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-black">
                      1. Magnetic Field
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Provides the magnetic environment.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-black">
                      2. Current
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Flows through the coil.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-black">
                      3. Rotation
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Magnetic force produces motion.
                    </p>
                  </div>

                </div>

              </section>

              {/* INDUCTION */}
              <section id="induction" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Important Principle
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Electromagnetic Induction
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Electromagnetic induction is the phenomenon in which an
                  electromotive force and, when the circuit is closed, an
                  induced current is produced due to a change in magnetic
                  flux linked with the circuit.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-9 text-center text-white">

                  <div className="text-6xl">
                    🧲
                  </div>

                  <div className="mt-5 text-4xl font-black">
                    Changing Magnetic Field
                  </div>

                  <div className="my-4 text-4xl text-cyan-400">
                    ↓
                  </div>

                  <div className="text-4xl font-black">
                    Induced EMF
                  </div>

                  <div className="my-4 text-4xl text-cyan-400">
                    ↓
                  </div>

                  <div className="text-4xl font-black">
                    Current in Closed Circuit
                  </div>

                </div>

                <div className="mt-8 rounded-2xl bg-blue-50 p-6">

                  <h3 className="font-black text-blue-900">
                    Faraday&apos;s Law
                  </h3>

                  <p className="mt-3 text-2xl font-black text-blue-700">
                    ε = -N ΔΦ / Δt
                  </p>

                </div>

              </section>

              {/* GENERATOR */}
              <section id="generator" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Electrical Machine
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Electric Generator
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  An electric generator converts mechanical energy into
                  electrical energy through electromagnetic induction.
                </p>

                <div className="mt-8 rounded-3xl bg-cyan-50 p-8">

                  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">

                    <div className="rounded-2xl bg-white p-7 text-center shadow-sm">

                      <div className="text-5xl">
                        ⚙️
                      </div>

                      <p className="mt-3 font-black">
                        Mechanical Energy
                      </p>

                    </div>

                    <div className="text-4xl font-black text-cyan-600">
                      →
                    </div>

                    <div className="rounded-2xl bg-white p-7 text-center shadow-sm">

                      <div className="text-5xl">
                        ⚡
                      </div>

                      <p className="mt-3 font-black">
                        Electrical Energy
                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">

                  <h3 className="text-xl font-black">
                    Motor vs Generator
                  </h3>

                  <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">

                    <div className="grid grid-cols-2 bg-slate-900 text-sm font-bold text-white">

                      <div className="p-4">
                        Motor
                      </div>

                      <div className="p-4">
                        Generator
                      </div>

                    </div>

                    <div className="grid grid-cols-2 border-b border-slate-200">

                      <div className="p-4 text-sm">
                        Electrical → Mechanical
                      </div>

                      <div className="p-4 text-sm">
                        Mechanical → Electrical
                      </div>

                    </div>

                    <div className="grid grid-cols-2">

                      <div className="p-4 text-sm">
                        Uses magnetic force
                      </div>

                      <div className="p-4 text-sm">
                        Uses electromagnetic induction
                      </div>

                    </div>

                  </div>

                </div>

              </section>

              {/* APPLICATIONS */}
              <section id="applications" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Real World
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Applications of Magnets
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {[
                    ["🧭", "Compass", "Navigation and direction"],
                    ["🔊", "Speakers", "Converting electrical signals into sound"],
                    ["⚙️", "Motors", "Producing mechanical motion"],
                    ["⚡", "Generators", "Producing electrical energy"],
                    ["🚪", "Relays", "Electromagnetic switching"],
                    ["🏭", "Lifting Magnets", "Moving magnetic materials"],
                  ].map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                      <div className="text-5xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 font-black">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* FORMULAS */}
              <section id="formulas" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Magnetism Formulas
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">
                      Quantity
                    </div>

                    <div className="p-4">
                      Formula
                    </div>

                    <div className="p-4">
                      Use
                    </div>

                  </div>

                  {formulas.map(([name, formula, meaning], index) => (
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

                      <div className="p-5 text-xl font-black text-slate-900">
                        {formula}
                      </div>

                      <div className="p-5 text-sm leading-6 text-slate-600">
                        {meaning}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* IMPORTANT POINTS */}
              <section id="important" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Exam Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Points
                </h2>

                <div className="mt-8 space-y-3">

                  {importantPoints.map((point, index) => (
                    <div
                      key={point}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-600">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">
                        {point}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* PRACTICE CTA */}
              <section className="mt-16 rounded-3xl bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 p-8 text-white shadow-2xl md:p-10">

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Test Your Knowledge
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Ready for Magnetism MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of magnets, magnetic fields,
                  electromagnets, motors, electromagnetic induction and
                  generators.
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

                  {topics.map(([number, title, href]) => (
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
                  Physics Progress
                </h3>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-200">
                  <div className="h-full w-[90%] rounded-full bg-blue-600" />
                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Chapter 09 of the Physics section.
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
            href="/learn/physics/electricity"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Electricity
          </Link>

          <Link
            href="/learn/physics/optics"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Optics →
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