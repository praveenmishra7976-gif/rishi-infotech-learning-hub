import Link from "next/link";

const fundamentalUnits = [
  ["m", "metre", "Length"],
  ["kg", "kilogram", "Mass"],
  ["s", "second", "Time"],
  ["A", "ampere", "Electric current"],
  ["K", "kelvin", "Temperature"],
  ["mol", "mole", "Amount of substance"],
  ["cd", "candela", "Luminous intensity"],
];

const derivedUnits = [
  ["m/s", "metre per second", "Speed / Velocity"],
  ["m/s²", "metre per second squared", "Acceleration"],
  ["N", "newton", "Force"],
  ["J", "joule", "Energy / Work"],
  ["W", "watt", "Power"],
  ["Pa", "pascal", "Pressure"],
  ["Hz", "hertz", "Frequency"],
  ["C", "coulomb", "Electric charge"],
];

const instruments = [
  {
    icon: "📏",
    title: "Metre Scale",
    text: "Used to measure length or distance.",
  },
  {
    icon: "⏱️",
    title: "Stopwatch",
    text: "Used to measure time intervals.",
  },
  {
    icon: "⚖️",
    title: "Beam Balance",
    text: "Used to measure the mass of an object.",
  },
  {
    icon: "🌡️",
    title: "Thermometer",
    text: "Used to measure temperature.",
  },
  {
    icon: "🔬",
    title: "Vernier Calipers",
    text: "Used to measure small lengths, diameters and depths accurately.",
  },
  {
    icon: "⭕",
    title: "Screw Gauge",
    text: "Used for measuring very small thicknesses and diameters.",
  },
];

const conversions = [
  ["1 kilometre", "1000 metres"],
  ["1 metre", "100 centimetres"],
  ["1 centimetre", "10 millimetres"],
  ["1 hour", "3600 seconds"],
  ["1 minute", "60 seconds"],
  ["1 kilogram", "1000 grams"],
];

const importantPoints = [
  "SI stands for International System of Units.",
  "The SI unit of length is metre (m).",
  "The SI unit of mass is kilogram (kg).",
  "The SI unit of time is second (s).",
  "The SI unit of temperature is kelvin (K).",
  "The SI unit of electric current is ampere (A).",
  "Force is measured in newtons (N).",
  "Energy and work are measured in joules (J).",
  "Power is measured in watts (W).",
  "Pressure is measured in pascals (Pa).",
];

const measurementSteps = [
  ["1", "Identify the quantity", "First determine what physical quantity needs to be measured."],
  ["2", "Choose the unit", "Select a suitable standard unit for the measurement."],
  ["3", "Select the instrument", "Use an appropriate measuring instrument."],
  ["4", "Record the value", "Read the instrument carefully and record the result with its unit."],
];

export default function UnitsMeasurementsPage() {
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
              📐
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                CHAPTER 02
              </p>

              <h1 className="text-3xl font-black text-white sm:text-5xl">
                Units & Measurements
              </h1>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn physical quantities, SI units, fundamental and derived
            units, measuring instruments, unit conversions and important
            measurement concepts.
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

          <span className="mx-2 text-slate-400">/</span>

          <Link
            href="/learn/physics"
            className="text-blue-600 hover:underline"
          >
            Physics
          </Link>

          <span className="mx-2 text-slate-400">/</span>

          <span className="text-slate-500">
            Units & Measurements
          </span>

        </div>

      </div>

      {/* MAIN */}
      <section id="learn" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* MAIN CONTENT */}
            <article>

              {/* INTRODUCTION */}
              <section>

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 02
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What are Units and Measurements?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Measurement is the process of comparing a physical
                  quantity with a known standard quantity of the same kind.
                  A measurement consists of a numerical value and a unit.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white shadow-xl">

                  <div className="text-6xl">
                    📐
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Measurement = Numerical Value + Unit
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    For example, if the length of a table is 2 metres,
                    then 2 is the numerical value and metre is the unit.
                  </p>

                </div>

              </section>

              {/* PHYSICAL QUANTITY */}
              <section id="physical-quantities" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Basic Concept
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Physical Quantities
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A physical quantity is a quantity that can be measured
                  and expressed using a numerical value and a unit.
                  Examples include length, mass, time, temperature and
                  electric current.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {[
                    ["📏", "Length", "Distance or size of an object."],
                    ["⚖️", "Mass", "Amount of matter in an object."],
                    ["⏱️", "Time", "Duration between events."],
                    ["🌡️", "Temperature", "Degree of hotness or coldness."],
                    ["⚡", "Electric Current", "Rate of flow of electric charge."],
                    ["💡", "Luminous Intensity", "Measure of visible light from a source."],
                  ].map(([icon, title, text]) => (

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
                        {text}
                      </p>

                    </div>

                  ))}

                </div>

              </section>

              {/* SI SYSTEM */}
              <section id="si-system" className="mt-16 rounded-3xl bg-blue-50 p-8">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Standard System
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  SI System of Units
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  SI stands for International System of Units. It provides
                  internationally accepted standard units for measuring
                  physical quantities.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {[
                    ["🌍", "International Standard", "Used as a common measurement system around the world."],
                    ["📏", "Seven Base Units", "The SI system is based on seven fundamental units."],
                    ["🔬", "Scientific Use", "SI units are widely used in science and technology."],
                    ["🎯", "Consistency", "Standard units make measurements easier to compare."],
                  ].map(([icon, title, text]) => (

                    <div
                      key={title}
                      className="rounded-2xl bg-white p-5"
                    >

                      <div className="text-3xl">
                        {icon}
                      </div>

                      <h3 className="mt-3 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {text}
                      </p>

                    </div>

                  ))}

                </div>

              </section>

              {/* FUNDAMENTAL UNITS */}
              <section id="fundamental-units" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  SI Base Units
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Fundamental Physical Quantities
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white sm:grid">

                    <div className="p-4">
                      Unit
                    </div>

                    <div className="p-4">
                      Name
                    </div>

                    <div className="p-4">
                      Quantity
                    </div>

                  </div>

                  {fundamentalUnits.map((row, index) => (

                    <div
                      key={row[0]}
                      className={`grid grid-cols-1 sm:grid-cols-3 ${
                        index !== fundamentalUnits.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-4 font-black text-blue-600">
                        <span className="sm:hidden">Unit: </span>
                        {row[0]}
                      </div>

                      <div className="p-4 text-slate-700">
                        <span className="font-bold sm:hidden">
                          Name:{" "}
                        </span>
                        {row[1]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold sm:hidden">
                          Quantity:{" "}
                        </span>
                        {row[2]}
                      </div>

                    </div>

                  ))}

                </div>

              </section>

              {/* DERIVED UNITS */}
              <section id="derived-units" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Derived Quantities
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Derived Units
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Derived units are obtained by combining fundamental SI
                  units according to physical relationships and formulas.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {derivedUnits.map(([symbol, name, quantity]) => (

                    <div
                      key={symbol}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >

                      <div className="flex items-center justify-between gap-4">

                        <span className="rounded-xl bg-blue-50 px-4 py-2 font-black text-blue-600">
                          {symbol}
                        </span>

                        <span className="text-right text-xs font-bold uppercase tracking-wide text-slate-400">
                          {quantity}
                        </span>

                      </div>

                      <h3 className="mt-4 font-black text-slate-900">
                        {name}
                      </h3>

                    </div>

                  ))}

                </div>

              </section>

              {/* MEASUREMENT PROCESS */}
              <section id="measurement-process" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Measurement Process
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  How is a Physical Quantity Measured?
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {measurementSteps.map(([number, title, text]) => (

                    <div
                      key={number}
                      className="rounded-2xl bg-slate-50 p-6"
                    >

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                        {number}
                      </div>

                      <h3 className="mt-4 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {text}
                      </p>

                    </div>

                  ))}

                </div>

              </section>

              {/* INSTRUMENTS */}
              <section id="instruments" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Measuring Instruments
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Common Measuring Instruments
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {instruments.map((item) => (

                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="text-4xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>

                    </div>

                  ))}

                </div>

              </section>

              {/* UNIT CONVERSION */}
              <section id="conversions" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Common Unit Conversions
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                  {conversions.map(([from, to], index) => (

                    <div
                      key={from}
                      className={`grid grid-cols-2 ${
                        index !== conversions.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-5 font-black text-blue-600">
                        {from}
                      </div>

                      <div className="p-5 text-sm text-slate-600">
                        {to}
                      </div>

                    </div>

                  ))}

                </div>

              </section>

              {/* ACCURACY */}
              <section id="accuracy" className="mt-16 rounded-3xl bg-slate-900 p-8 text-white">

                <p className="font-bold uppercase tracking-widest text-cyan-400">
                  Important Concept
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Accuracy and Precision
                </h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">

                  <div className="rounded-2xl bg-white/5 p-6">

                    <div className="text-4xl">
                      🎯
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Accuracy
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Accuracy describes how close a measured value is to
                      the actual or true value.
                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/5 p-6">

                    <div className="text-4xl">
                      🎯🎯
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Precision
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Precision describes how closely repeated measurements
                      agree with each other.
                    </p>

                  </div>

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
                  Ready for Units & Measurements MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your knowledge of SI units, physical quantities,
                  measuring instruments and unit conversions.
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
                    ["01", "Physical Quantities", "#physical-quantities"],
                    ["02", "SI System", "#si-system"],
                    ["03", "Fundamental Units", "#fundamental-units"],
                    ["04", "Derived Units", "#derived-units"],
                    ["05", "Measurement Process", "#measurement-process"],
                    ["06", "Measuring Instruments", "#instruments"],
                    ["07", "Unit Conversions", "#conversions"],
                    ["08", "Accuracy & Precision", "#accuracy"],
                    ["09", "Important Points", "#important-points"],
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

                  <div className="h-full w-1/2 rounded-full bg-blue-600" />

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
            href="/learn/physics/introduction"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Introduction
          </Link>

          <Link
            href="/learn/physics/motion"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Motion →
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