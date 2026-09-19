import Link from "next/link";

const topics = [
  ["01", "What is Electricity?", "#introduction"],
  ["02", "Electric Charge", "#charge"],
  ["03", "Electric Current", "#current"],
  ["04", "Potential Difference", "#potential"],
  ["05", "Resistance", "#resistance"],
  ["06", "Ohm's Law", "#ohms-law"],
  ["07", "Factors Affecting Resistance", "#factors"],
  ["08", "Series Combination", "#series"],
  ["09", "Parallel Combination", "#parallel"],
  ["10", "Electric Power", "#power"],
  ["11", "Electrical Energy", "#energy"],
  ["12", "Heating Effect", "#heating"],
  ["13", "Fuse & Safety", "#fuse"],
  ["14", "Important Formulas", "#formulas"],
  ["15", "Important Points", "#important-points"],
];

const concepts = [
  {
    icon: "⚡",
    title: "Electric Current",
    description:
      "Electric current is the rate of flow of electric charge through a conductor.",
  },
  {
    icon: "🔋",
    title: "Potential Difference",
    description:
      "Potential difference provides the energy required to move electric charge between two points.",
  },
  {
    icon: "🧱",
    title: "Resistance",
    description:
      "Resistance is the opposition offered by a material to the flow of electric current.",
  },
  {
    icon: "💡",
    title: "Electric Power",
    description:
      "Electric power represents the rate at which electrical energy is consumed or converted.",
  },
];

const formulas = [
  ["Electric Current", "I = Q / t", "I = current, Q = charge, t = time"],
  ["Potential Difference", "V = W / Q", "V = voltage, W = work, Q = charge"],
  ["Ohm's Law", "V = IR", "V = voltage, I = current, R = resistance"],
  ["Power", "P = VI", "P = power, V = voltage, I = current"],
  ["Power", "P = I²R", "Useful when current and resistance are known"],
  ["Power", "P = V²/R", "Useful when voltage and resistance are known"],
  ["Electrical Energy", "E = Pt", "P = power, t = time"],
  ["Resistance", "R = ρL/A", "ρ = resistivity, L = length, A = area"],
];

const importantPoints = [
  "Electricity is associated with electric charges and their movement.",
  "Electric current is the rate of flow of electric charge.",
  "The SI unit of electric charge is coulomb (C).",
  "The SI unit of electric current is ampere (A).",
  "The SI unit of potential difference is volt (V).",
  "The SI unit of resistance is ohm (Ω).",
  "Ohm's law states that V = IR when physical conditions such as temperature remain constant.",
  "Resistance depends on the material, length and cross-sectional area of a conductor.",
  "Resistance increases with the length of a conductor.",
  "Resistance decreases when the cross-sectional area increases.",
  "In a series circuit, the same current flows through each component.",
  "In a parallel circuit, the potential difference across each branch is the same.",
  "Electrical power is measured in watt (W).",
  "Electrical energy is commonly measured in joule (J) and commercially in kilowatt-hour (kWh).",
  "A fuse protects an electrical circuit from excessive current.",
];

export default function ElectricityPage() {
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
            <Link href="/" className="font-medium hover:text-blue-600">
              Home
            </Link>

            <Link href="/learn" className="font-medium text-blue-600">
              Learn
            </Link>

            <Link href="/practice" className="font-medium hover:text-blue-600">
              Practice
            </Link>

            <Link href="/ai-hub" className="font-medium hover:text-blue-600">
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
              ⚡
            </div>

            <div>
              <p className="font-semibold text-blue-100">
                PHYSICS CHAPTER 08
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Electricity
              </h2>
            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn electric charge, current, voltage, resistance, Ohm&apos;s
            law, circuits, electric power, energy, heating effect and
            electrical safety.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#introduction"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              ⚡ Start Learning
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

          <Link href="/learn" className="text-blue-600 hover:underline">
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
            Electricity
          </span>

        </div>
      </div>

      {/* CONTENT */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            <article>

              {/* INTRODUCTION */}
              <section id="introduction">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 08
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is Electricity?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Electricity is associated with electric charge and the
                  movement of charged particles. The movement of electric
                  charge through a conductor produces electric current.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    ⚡
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Electricity powers modern life
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Lighting, computers, fans, motors, communication
                    systems and many other devices depend on electrical
                    energy.
                  </p>

                </div>

              </section>

              {/* BASIC CONCEPTS */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Basic Concepts
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Four Important Electrical Quantities
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

              {/* CHARGE */}
              <section id="charge" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Concept 01
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Electric Charge
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Electric charge is a fundamental property of matter.
                  Charges may be positive or negative. Like charges repel
                  each other, while unlike charges attract each other.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl bg-blue-50 p-7 text-center">

                    <div className="text-6xl">
                      ➕
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Positive Charge
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Associated with a deficiency of electrons.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7 text-center">

                    <div className="text-6xl">
                      ➖
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Negative Charge
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Associated with an excess of electrons.
                    </p>

                  </div>

                </div>

                <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">

                  <p className="font-bold text-blue-700">
                    SI Unit
                  </p>

                  <p className="mt-2 text-2xl font-black">
                    Coulomb (C)
                  </p>

                </div>

              </section>

              {/* CURRENT */}
              <section id="current" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Concept 02
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Electric Current
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Electric current is the rate at which electric charge
                  flows through a cross-section of a conductor.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8 text-center">

                  <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    Formula
                  </p>

                  <p className="mt-4 text-5xl font-black text-slate-900">
                    I = Q / t
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    I = current, Q = charge and t = time.
                  </p>

                </div>

                <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white">

                  <p className="font-bold text-cyan-400">
                    SI Unit
                  </p>

                  <p className="mt-2 text-2xl font-black">
                    Ampere (A)
                  </p>

                </div>

              </section>

              {/* POTENTIAL */}
              <section id="potential" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Concept 03
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Potential Difference
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Potential difference between two points is the work done
                  per unit charge in moving a charge between those points.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-center text-white">

                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Formula
                  </p>

                  <p className="mt-4 text-5xl font-black">
                    V = W / Q
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    V = potential difference, W = work done and Q = charge.
                  </p>

                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">

                  <p className="font-bold text-blue-600">
                    SI Unit
                  </p>

                  <p className="mt-2 text-2xl font-black">
                    Volt (V)
                  </p>

                </div>

              </section>

              {/* RESISTANCE */}
              <section id="resistance" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Concept 04
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Resistance
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Resistance is the opposition offered by a conductor to
                  the flow of electric current.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-2xl bg-blue-50 p-6 text-center">
                    <p className="text-3xl font-black text-blue-700">
                      Ω
                    </p>
                    <p className="mt-2 font-bold">
                      Ohm
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-50 p-6 text-center">
                    <p className="text-3xl font-black text-cyan-700">
                      R
                    </p>
                    <p className="mt-2 font-bold">
                      Resistance
                    </p>
                  </div>

                  <div className="rounded-2xl bg-indigo-50 p-6 text-center">
                    <p className="text-3xl font-black text-indigo-700">
                      V / I
                    </p>
                    <p className="mt-2 font-bold">
                      Resistance relation
                    </p>
                  </div>

                </div>

              </section>

              {/* OHMS LAW */}
              <section id="ohms-law" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Important Law
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Ohm&apos;s Law
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Ohm&apos;s law states that, at constant physical
                  conditions, the potential difference across a conductor
                  is directly proportional to the current through it.
                </p>

                <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-700 p-10 text-center text-white shadow-xl">

                  <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
                    Ohm&apos;s Law
                  </p>

                  <p className="mt-5 text-6xl font-black">
                    V = IR
                  </p>

                  <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100">
                    Voltage = Current × Resistance
                  </p>

                </div>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7">

                  <h3 className="text-xl font-black">
                    Ohm&apos;s Law Triangle
                  </h3>

                  <div className="mt-7 flex justify-center">

                    <div className="relative h-44 w-52">

                      <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-blue-100 text-2xl font-black text-blue-700">
                        V
                      </div>

                      <div className="absolute bottom-0 left-0 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100 text-2xl font-black text-cyan-700">
                        I
                      </div>

                      <div className="absolute bottom-0 right-0 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-2xl font-black text-indigo-700">
                        R
                      </div>

                    </div>

                  </div>

                </div>

              </section>

              {/* FACTORS */}
              <section id="factors" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Resistance
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Factors Affecting Resistance
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  <div className="rounded-3xl bg-blue-50 p-7">
                    <h3 className="text-xl font-black">
                      Length
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      Resistance increases as the length of a conductor
                      increases.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7">
                    <h3 className="text-xl font-black">
                      Area
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      Resistance decreases when the cross-sectional area
                      increases.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-indigo-50 p-7">
                    <h3 className="text-xl font-black">
                      Material
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      Different materials have different resistivities.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-7">
                    <h3 className="text-xl font-black">
                      Temperature
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      Resistance can change with temperature, depending
                      on the material.
                    </p>
                  </div>

                </div>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-center text-white">

                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Relation
                  </p>

                  <p className="mt-4 text-4xl font-black">
                    R = ρL / A
                  </p>

                </div>

              </section>

              {/* SERIES */}
              <section id="series" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Circuits
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Series Combination
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  In a series circuit, electrical components are connected
                  one after another along a single path.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8">

                  <div className="flex flex-wrap items-center justify-center gap-3">

                    <div className="rounded-xl bg-white px-5 py-4 font-black shadow-sm">
                      🔋
                    </div>

                    <span className="font-black text-blue-600">
                      ─
                    </span>

                    <div className="rounded-xl bg-white px-5 py-4 font-black shadow-sm">
                      💡
                    </div>

                    <span className="font-black text-blue-600">
                      ─
                    </span>

                    <div className="rounded-xl bg-white px-5 py-4 font-black shadow-sm">
                      💡
                    </div>

                    <span className="font-black text-blue-600">
                      ─
                    </span>

                    <div className="rounded-xl bg-white px-5 py-4 font-black shadow-sm">
                      🔌
                    </div>

                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-xl bg-white p-4 text-center text-sm font-bold">
                      Same current
                    </div>

                    <div className="rounded-xl bg-white p-4 text-center text-sm font-bold">
                      One path
                    </div>

                    <div className="rounded-xl bg-white p-4 text-center text-sm font-bold">
                      Resistances add
                    </div>

                  </div>

                </div>

                <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-center text-white">

                  <p className="text-2xl font-black">
                    R = R₁ + R₂ + R₃
                  </p>

                </div>

              </section>

              {/* PARALLEL */}
              <section id="parallel" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Circuits
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Parallel Combination
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  In a parallel circuit, components are connected across
                  the same two points, creating multiple paths for current.
                </p>

                <div className="mt-8 rounded-3xl bg-cyan-50 p-8">

                  <div className="grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                      <div className="text-4xl">
                        💡
                      </div>
                      <p className="mt-2 font-black">
                        Branch 1
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                      <div className="text-4xl">
                        💡
                      </div>
                      <p className="mt-2 font-black">
                        Branch 2
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                      <div className="text-4xl">
                        💡
                      </div>
                      <p className="mt-2 font-black">
                        Branch 3
                      </p>
                    </div>

                  </div>

                </div>

                <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-center text-white">

                  <p className="text-2xl font-black">
                    1/R = 1/R₁ + 1/R₂ + 1/R₃
                  </p>

                </div>

              </section>

              {/* POWER */}
              <section id="power" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Electrical Power
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Electric Power
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Electric power is the rate at which electrical energy is
                  transferred or consumed.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-3xl bg-blue-50 p-7 text-center">
                    <p className="text-4xl font-black text-blue-700">
                      P = VI
                    </p>
                    <p className="mt-3 text-sm text-slate-600">
                      Voltage and current
                    </p>
                  </div>

                  <div className="rounded-3xl bg-indigo-50 p-7 text-center">
                    <p className="text-4xl font-black text-indigo-700">
                      P = I²R
                    </p>
                    <p className="mt-3 text-sm text-slate-600">
                      Current and resistance
                    </p>
                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7 text-center">
                    <p className="text-4xl font-black text-cyan-700">
                      P = V²/R
                    </p>
                    <p className="mt-3 text-sm text-slate-600">
                      Voltage and resistance
                    </p>
                  </div>

                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">

                  <p className="font-bold text-blue-600">
                    SI Unit
                  </p>

                  <p className="mt-2 text-2xl font-black">
                    Watt (W)
                  </p>

                </div>

              </section>

              {/* ENERGY */}
              <section id="energy" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Electrical Energy
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Electrical Energy
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Electrical energy is the amount of electrical work done
                  or energy transferred by an electrical device over a
                  period of time.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-center text-white">

                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Formula
                  </p>

                  <p className="mt-4 text-5xl font-black">
                    E = Pt
                  </p>

                  <p className="mt-5 text-sm text-slate-300">
                    Electrical Energy = Power × Time
                  </p>

                </div>

                <div className="mt-6 rounded-2xl bg-blue-50 p-6">

                  <h3 className="font-black text-blue-900">
                    Commercial Unit
                  </h3>

                  <p className="mt-2 text-2xl font-black text-blue-700">
                    kilowatt-hour (kWh)
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Electrical energy consumed in homes is commonly
                    measured in kilowatt-hours.
                  </p>

                </div>

              </section>

              {/* HEATING */}
              <section id="heating" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Effect of Current
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Heating Effect of Electric Current
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  When electric current passes through a resistance,
                  electrical energy can be converted into heat energy.
                  This is called the heating effect of electric current.
                </p>

                <div className="mt-8 rounded-3xl bg-orange-50 p-8 text-center">

                  <div className="text-7xl">
                    🔥
                  </div>

                  <h3 className="mt-5 text-xl font-black">
                    Heat produced by current
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Heating effect is used in heaters, irons, toasters,
                    electric kettles and many other appliances.
                  </p>

                </div>

                <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-center text-white">

                  <p className="text-3xl font-black">
                    H = I²Rt
                  </p>

                </div>

              </section>

              {/* FUSE */}
              <section id="fuse" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Electrical Safety
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Fuse and Electrical Safety
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A fuse is a safety device designed to protect an
                  electrical circuit from excessive current. The fuse wire
                  heats up and melts when the current becomes dangerously
                  high, breaking the circuit.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-3xl bg-red-50 p-7 text-center">

                    <div className="text-5xl">
                      🧯
                    </div>

                    <h3 className="mt-4 font-black">
                      Protection
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Helps protect circuits from excessive current.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-yellow-50 p-7 text-center">

                    <div className="text-5xl">
                      ⚠️
                    </div>

                    <h3 className="mt-4 font-black">
                      Overload
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Excessive current can heat wires and components.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-blue-50 p-7 text-center">

                    <div className="text-5xl">
                      🔌
                    </div>

                    <h3 className="mt-4 font-black">
                      Safe Circuit
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Proper protection helps reduce electrical hazards.
                    </p>

                  </div>

                </div>

              </section>

              {/* FORMULAS */}
              <section id="formulas" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Electricity Formulas
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
                      Meaning / Use
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
              <section id="important-points" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
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
                  Ready for Electricity MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your knowledge of current, voltage, resistance,
                  Ohm&apos;s law, circuits, power, energy and electrical
                  safety.
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
                  <div className="h-full w-[80%] rounded-full bg-blue-600" />
                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Chapter 08 of the Physics section.
                </p>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* CHAPTER NAVIGATION */}
      <section className="border-t border-slate-200 bg-slate-50 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row lg:px-8">

          <Link
            href="/learn/physics/light"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Light
          </Link>

          <Link
            href="/learn/physics/magnetism"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Magnetism →
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