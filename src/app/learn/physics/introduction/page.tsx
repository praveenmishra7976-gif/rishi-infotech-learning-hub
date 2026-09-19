import Link from "next/link";

const branches = [
  {
    icon: "🏃",
    title: "Mechanics",
    text: "The branch of physics that studies motion, force, matter and the effects of forces on objects.",
  },
  {
    icon: "🔥",
    title: "Thermodynamics",
    text: "The study of heat, temperature, energy and the conversion of energy from one form to another.",
  },
  {
    icon: "💡",
    title: "Optics",
    text: "The branch of physics that studies light, reflection, refraction, mirrors and lenses.",
  },
  {
    icon: "⚡",
    title: "Electromagnetism",
    text: "The study of electricity, magnetism, electric fields and magnetic fields.",
  },
  {
    icon: "🔊",
    title: "Acoustics",
    text: "The study of sound, its production, propagation and properties.",
  },
  {
    icon: "⚛️",
    title: "Quantum Physics",
    text: "The study of matter and energy at very small scales such as atoms and subatomic particles.",
  },
  {
    icon: "☢️",
    title: "Nuclear Physics",
    text: "The study of atomic nuclei, nuclear reactions and nuclear energy.",
  },
  {
    icon: "🌌",
    title: "Astrophysics",
    text: "The application of physics to stars, planets, galaxies and other objects in space.",
  },
];

const fundamentalQuantities = [
  ["Length", "metre", "m"],
  ["Mass", "kilogram", "kg"],
  ["Time", "second", "s"],
  ["Temperature", "kelvin", "K"],
  ["Electric Current", "ampere", "A"],
  ["Amount of Substance", "mole", "mol"],
  ["Luminous Intensity", "candela", "cd"],
];

const physicsUses = [
  ["🚗", "Transportation", "Physics helps us understand engines, motion, braking and vehicle design."],
  ["💡", "Electricity", "Physics explains electric current, circuits, power generation and electrical devices."],
  ["📱", "Communication", "Mobile phones, radio, television and wireless communication depend on physics."],
  ["🏥", "Healthcare", "X-rays, ultrasound, MRI and many medical technologies use physical principles."],
  ["💻", "Computers", "Electronics, semiconductors, processors and displays are based on physics."],
  ["🚀", "Space", "Physics helps scientists understand rockets, satellites, planets and the universe."],
  ["🏗️", "Construction", "Force, pressure, balance and material properties are important in construction."],
  ["🌱", "Environment", "Physics helps us understand energy, climate, radiation and environmental systems."],
];

const importantPoints = [
  "Physics is a branch of natural science.",
  "Physics studies matter, energy, motion and their interactions.",
  "Mechanics deals mainly with motion and forces.",
  "Thermodynamics deals with heat, temperature and energy transfer.",
  "Optics deals with light and its behavior.",
  "Acoustics deals with sound.",
  "Electromagnetism deals with electricity and magnetism.",
  "Physics is closely connected with mathematics.",
  "Many modern technologies are based on principles of physics.",
  "Physics helps us understand natural phenomena and the universe.",
];

const commonTerms = [
  ["Matter", "Anything that has mass and occupies space."],
  ["Energy", "The capacity to do work or cause change."],
  ["Force", "A push or pull that can change the motion of an object."],
  ["Motion", "A change in position of an object with time."],
  ["Mass", "The amount of matter in an object."],
  ["Time", "A quantity used to describe the sequence and duration of events."],
];

export default function IntroductionPage() {
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

        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">

          <Link
            href="/learn/physics"
            className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            ← Physics Chapters
          </Link>

          <div className="mt-8 flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              ⚛️
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                CHAPTER 01
              </p>

              <h1 className="text-3xl font-black text-white sm:text-5xl">
                Introduction to Physics
              </h1>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn what physics is, its importance, major branches,
            fundamental concepts and applications in everyday life.
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
            Introduction
          </span>

        </div>

      </div>

      {/* CONTENT */}
      <section id="learn" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* MAIN CONTENT */}
            <article>

              {/* WHAT IS PHYSICS */}
              <section>

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Start Here
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is Physics?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Physics is a branch of natural science that studies
                  matter, energy, motion, forces and the interactions
                  between them.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Physics attempts to explain how the natural world works.
                  It helps us understand why objects move, why things fall,
                  how light travels, how sound is produced and how
                  electricity and magnetism work.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    ⚛️
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Physics in Simple Words
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Physics is the study of the basic laws that describe
                    nature and the behavior of matter and energy.
                  </p>

                </div>

              </section>

              {/* PHYSICS AND DAILY LIFE */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Understanding Physics
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Physics Around Us
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Physics is present in almost every activity of our daily
                  lives. When a vehicle moves, a fan rotates, a mobile phone
                  communicates or a bulb produces light, physical principles
                  are involved.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {[
                    ["🏃", "Motion", "A moving car, running person or rotating fan demonstrates motion."],
                    ["🍎", "Gravity", "Objects fall toward Earth because of gravitational attraction."],
                    ["💡", "Light", "Reflection and refraction explain many everyday optical effects."],
                    ["🔊", "Sound", "Sound is produced by vibrations and travels through a medium."],
                  ].map(([icon, title, text]) => (
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
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* BRANCHES */}
              <section id="branches" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Major Branches
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Branches of Physics
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Physics is divided into several branches. Each branch
                  focuses on a particular area of physical science.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {branches.map((branch) => (
                    <div
                      key={branch.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                        {branch.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {branch.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {branch.text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* FUNDAMENTAL QUANTITIES */}
              <section id="quantities" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Measurement
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Fundamental Physical Quantities
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Physical quantities are measurable properties of objects
                  or phenomena. The International System of Units (SI)
                  defines seven fundamental quantities.
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white sm:grid">

                    <div className="p-4">
                      Quantity
                    </div>

                    <div className="p-4">
                      SI Unit
                    </div>

                    <div className="p-4">
                      Symbol
                    </div>

                  </div>

                  {fundamentalQuantities.map((row, index) => (
                    <div
                      key={row[0]}
                      className={`grid grid-cols-1 sm:grid-cols-3 ${
                        index !== fundamentalQuantities.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-4 font-black text-blue-600">
                        <span className="font-bold text-slate-500 sm:hidden">
                          Quantity:{" "}
                        </span>
                        {row[0]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold text-slate-700 sm:hidden">
                          SI Unit:{" "}
                        </span>
                        {row[1]}
                      </div>

                      <div className="p-4 text-sm font-bold text-slate-600">
                        <span className="font-bold text-slate-700 sm:hidden">
                          Symbol:{" "}
                        </span>
                        {row[2]}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* COMMON TERMS */}
              <section id="terms" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Basic Concepts
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Physics Terms
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {commonTerms.map(([term, definition]) => (
                    <div
                      key={term}
                      className="rounded-3xl border border-slate-200 p-6"
                    >

                      <h3 className="text-xl font-black text-blue-600">
                        {term}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {definition}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* IMPORTANCE */}
              <section id="importance" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Importance
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Why is Physics Important?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Physics is important because it provides the fundamental
                  principles used to understand nature and develop modern
                  technology.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                  {[
                    ["🔬", "Science", "Helps us understand natural phenomena."],
                    ["💻", "Technology", "Provides principles behind modern technology."],
                    ["🎓", "Education", "Builds scientific and analytical thinking."],
                    ["🚀", "Innovation", "Supports the development of new technologies."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl bg-blue-50 p-6"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* APPLICATIONS */}
              <section id="applications" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Real World
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Applications of Physics
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  {physicsUses.map(([icon, title, text]) => (
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
                        {text}
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
                  Ready for Physics MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of physics basics, branches,
                  physical quantities and important concepts.
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
                    ["01", "What is Physics?", "#learn"],
                    ["02", "Physics Around Us", "#learn"],
                    ["03", "Branches of Physics", "#branches"],
                    ["04", "Physical Quantities", "#quantities"],
                    ["05", "Important Terms", "#terms"],
                    ["06", "Importance", "#importance"],
                    ["07", "Applications", "#applications"],
                    ["08", "Important Points", "#important-points"],
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
                  <div className="h-full w-1/4 rounded-full bg-blue-600" />
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
            href="/learn/physics"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Physics Chapters
          </Link>

          <Link
            href="/learn/physics/units-measurements"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Units & Measurements →
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
                  href="/learn/computer"
                  className="block hover:text-white"
                >
                  Computer
                </Link>

                <Link
                  href="/learn/physics"
                  className="block hover:text-white"
                >
                  Physics
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