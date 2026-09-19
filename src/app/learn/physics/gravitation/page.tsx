import Link from "next/link";

const topics = [
  ["01", "Introduction", "#introduction"],
  ["02", "Universal Law of Gravitation", "#law"],
  ["03", "Gravitational Constant", "#constant"],
  ["04", "Acceleration Due to Gravity", "#acceleration"],
  ["05", "Mass and Weight", "#mass-weight"],
  ["06", "Variation of g", "#variation"],
  ["07", "Gravitational Potential", "#potential"],
  ["08", "Gravitational Potential Energy", "#energy"],
  ["09", "Escape Velocity", "#escape"],
  ["10", "Orbital Velocity", "#orbital"],
  ["11", "Satellites", "#satellites"],
  ["12", "Kepler's Laws", "#kepler"],
  ["13", "Important Formulas", "#formulas"],
  ["14", "Important Points", "#points"],
];

const formulas = [
  ["Universal law", "F = Gm₁m₂/r²", "Gravitational force between two masses"],
  ["Acceleration due to gravity", "g = GM/R²", "Gravity near the surface of a spherical body"],
  ["Weight", "W = mg", "Weight of an object"],
  ["Gravitational potential", "V = −GM/r", "Potential at distance r"],
  ["Potential energy", "U = −GMm/r", "Gravitational potential energy"],
  ["Escape velocity", "vₑ = √(2GM/R)", "Minimum velocity to escape gravity"],
  ["Orbital velocity", "vₒ = √(GM/r)", "Velocity required for circular orbit"],
  ["Kepler's third law", "T² ∝ r³", "Relation between orbital period and radius"],
];

const points = [
  "Every object in the universe attracts every other object.",
  "The gravitational force is always attractive.",
  "Gravitational force decreases as the square of distance increases.",
  "The SI unit of gravitational constant G is N m² kg⁻².",
  "Acceleration due to gravity near Earth's surface is approximately 9.8 m/s².",
  "Mass remains approximately constant when an object moves from one place to another.",
  "Weight depends on the local value of gravitational acceleration.",
  "The value of g generally decreases with increasing altitude.",
  "The value of g also changes with depth below Earth's surface.",
  "Gravitational potential is negative when zero potential is chosen at infinity.",
  "Escape velocity is independent of the mass of the escaping object.",
  "Orbital velocity depends on the mass of the central body and orbital radius.",
  "Artificial satellites remain in orbit because of gravitational attraction.",
  "Geostationary satellites have an orbital period equal to Earth's rotation period.",
  "Kepler's laws describe the motion of planets around the Sun.",
];

export default function GravitationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg">
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
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Contact
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">

        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">

          <Link
            href="/learn/physics"
            className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            ← Physics Chapters
          </Link>

          <div className="mt-8 flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              🌍
            </div>

            <div>
              <p className="font-semibold text-blue-100">
                PHYSICS CHAPTER
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Gravitation
              </h2>
            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn how objects attract each other, why planets orbit the Sun,
            how satellites stay in space, and how gravity affects mass,
            weight, energy and motion.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#introduction"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              🌍 Start Learning
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
            Gravitation
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
                  Physics
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  Introduction to Gravitation
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Gravitation is the natural force of attraction between
                  objects having mass. It is responsible for objects falling
                  toward Earth, the motion of the Moon around Earth, and the
                  motion of planets around the Sun.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-7xl">
                    🌍
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Gravity connects objects across space
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    From a falling stone to the motion of galaxies,
                    gravitational interaction plays an important role in
                    nature.
                  </p>

                </div>

              </section>

              {/* LAW */}
              <section id="law" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Newton's Law
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Universal Law of Gravitation
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Newton proposed that every two masses in the universe
                  attract each other with a force directly proportional to
                  the product of their masses and inversely proportional to
                  the square of the distance between their centres.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-10 text-center">

                  <p className="text-4xl font-black text-blue-700 sm:text-5xl">
                    F = Gm₁m₂ / r²
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl bg-white p-5">
                      <p className="text-2xl font-black">m₁, m₂</p>
                      <p className="mt-2 text-sm text-slate-500">
                        Masses of the objects
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5">
                      <p className="text-2xl font-black">r</p>
                      <p className="mt-2 text-sm text-slate-500">
                        Distance between centres
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5">
                      <p className="text-2xl font-black">G</p>
                      <p className="mt-2 text-sm text-slate-500">
                        Gravitational constant
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* G */}
              <section id="constant" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Constant
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Gravitational Constant
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  The gravitational constant is represented by G. Its value
                  is approximately:
                </p>

                <div className="mt-6 rounded-3xl bg-slate-900 p-8 text-center text-white">

                  <p className="text-3xl font-black">
                    G ≈ 6.674 × 10⁻¹¹ N m² kg⁻²
                  </p>

                  <p className="mt-4 text-sm text-slate-400">
                    G is a universal constant.
                  </p>

                </div>

              </section>

              {/* G */}
              <section id="acceleration" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Gravity Near Earth
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Acceleration Due to Gravity
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  When an object falls toward Earth under the influence of
                  gravity, it experiences acceleration. This acceleration is
                  called acceleration due to gravity and is represented by g.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="rounded-3xl bg-blue-50 p-8">

                    <p className="text-4xl font-black text-blue-700">
                      g = GM/R²
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      Here M is the mass of Earth and R is its radius.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-8">

                    <p className="text-4xl font-black text-cyan-700">
                      g ≈ 9.8 m/s²
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      Approximate value near Earth's surface.
                    </p>

                  </div>

                </div>

              </section>

              {/* MASS AND WEIGHT */}
              <section id="mass-weight" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Important Difference
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Mass and Weight
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

                  <div className="grid grid-cols-3 bg-slate-900 text-sm font-bold text-white">
                    <div className="p-4">Property</div>
                    <div className="p-4">Mass</div>
                    <div className="p-4">Weight</div>
                  </div>

                  <div className="grid grid-cols-3 border-b border-slate-200">
                    <div className="p-4 font-bold">Meaning</div>
                    <div className="p-4 text-sm">Amount of matter</div>
                    <div className="p-4 text-sm">Gravitational force</div>
                  </div>

                  <div className="grid grid-cols-3 border-b border-slate-200">
                    <div className="p-4 font-bold">SI unit</div>
                    <div className="p-4 text-sm">kg</div>
                    <div className="p-4 text-sm">N</div>
                  </div>

                  <div className="grid grid-cols-3">
                    <div className="p-4 font-bold">Formula</div>
                    <div className="p-4 text-sm">m</div>
                    <div className="p-4 text-sm">W = mg</div>
                  </div>

                </div>

              </section>

              {/* VARIATION */}
              <section id="variation" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Variation of g
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Variation of Acceleration Due to Gravity
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-3xl bg-blue-50 p-7">
                    <div className="text-5xl">🏔️</div>
                    <h3 className="mt-4 font-black">
                      With Height
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      The value of g decreases as altitude above Earth's
                      surface increases.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7">
                    <div className="text-5xl">🌍</div>
                    <h3 className="mt-4 font-black">
                      At Surface
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Near Earth's surface, g is approximately 9.8 m/s².
                    </p>
                  </div>

                  <div className="rounded-3xl bg-indigo-50 p-7">
                    <div className="text-5xl">⬇️</div>
                    <h3 className="mt-4 font-black">
                      With Depth
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Inside an idealized spherical Earth model, g decreases
                      with depth and approaches zero at the centre.
                    </p>
                  </div>

                </div>

              </section>

              {/* POTENTIAL */}
              <section id="potential" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Gravitational Field
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Gravitational Potential
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Gravitational potential at a point is the work done per
                  unit mass in bringing a test mass from infinity to that
                  point, with zero potential taken at infinity.
                </p>

                <div className="mt-8 rounded-3xl bg-indigo-50 p-9 text-center">

                  <p className="text-4xl font-black text-indigo-700">
                    V = −GM/r
                  </p>

                  <p className="mt-4 text-sm text-slate-600">
                    SI unit: joule per kilogram (J/kg).
                  </p>

                </div>

              </section>

              {/* ENERGY */}
              <section id="energy" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Energy
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Gravitational Potential Energy
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Gravitational potential energy represents the energy
                  associated with the position of an object in a
                  gravitational field.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-10 text-center text-white">

                  <p className="text-4xl font-black">
                    U = −GMm/r
                  </p>

                  <p className="mt-5 text-sm leading-6 text-slate-400">
                    The negative sign results from choosing zero potential
                    energy at infinity.
                  </p>

                </div>

              </section>

              {/* ESCAPE */}
              <section id="escape" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Space Physics
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Escape Velocity
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Escape velocity is the minimum speed an object must have
                  at the surface of a celestial body to escape its
                  gravitational influence without further propulsion,
                  neglecting atmospheric resistance and other effects.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-10 text-center">

                  <p className="text-4xl font-black text-blue-700">
                    vₑ = √(2GM/R)
                  </p>

                  <p className="mt-4 text-sm text-slate-600">
                    For Earth, the escape velocity is approximately
                    11.2 km/s.
                  </p>

                </div>

              </section>

              {/* ORBITAL */}
              <section id="orbital" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Satellites
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Orbital Velocity
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Orbital velocity is the speed required for an object to
                  remain in a circular orbit around a celestial body.
                </p>

                <div className="mt-8 rounded-3xl bg-cyan-50 p-10 text-center">

                  <p className="text-4xl font-black text-cyan-700">
                    vₒ = √(GM/r)
                  </p>

                  <p className="mt-4 text-sm text-slate-600">
                    For a given central mass, orbital velocity decreases as
                    orbital radius increases.
                  </p>

                </div>

              </section>

              {/* SATELLITES */}
              <section id="satellites" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Applications
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Artificial Satellites
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  An artificial satellite is a human-made object placed into
                  orbit around Earth or another celestial body.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-3">

                  <div className="rounded-3xl bg-blue-50 p-7 text-center">
                    <div className="text-5xl">📡</div>
                    <h3 className="mt-4 font-black">
                      Communication
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Communication and broadcasting.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7 text-center">
                    <div className="text-5xl">🌦️</div>
                    <h3 className="mt-4 font-black">
                      Weather
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Weather observation and forecasting.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-indigo-50 p-7 text-center">
                    <div className="text-5xl">🧭</div>
                    <h3 className="mt-4 font-black">
                      Navigation
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Positioning and navigation systems.
                    </p>
                  </div>

                </div>

              </section>

              {/* KEPLER */}
              <section id="kepler" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Planetary Motion
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Kepler&apos;s Laws of Planetary Motion
                </h2>

                <div className="mt-8 space-y-5">

                  <div className="rounded-3xl border border-slate-200 p-7">
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                      LAW 1
                    </span>
                    <h3 className="mt-4 text-xl font-black">
                      Law of Orbits
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      Planets move in elliptical orbits with the Sun at one
                      focus.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 p-7">
                    <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
                      LAW 2
                    </span>
                    <h3 className="mt-4 text-xl font-black">
                      Law of Areas
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      A line joining a planet and the Sun sweeps out equal
                      areas in equal intervals of time.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 p-7">
                    <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold text-white">
                      LAW 3
                    </span>
                    <h3 className="mt-4 text-xl font-black">
                      Law of Periods
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      The square of the orbital period is proportional to
                      the cube of the semi-major axis.
                    </p>
                  </div>

                </div>

              </section>

              {/* FORMULAS */}
              <section id="formulas" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Gravitation Formulas
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">
                    <div className="p-4">Quantity</div>
                    <div className="p-4">Formula</div>
                    <div className="p-4">Use</div>
                  </div>

                  {formulas.map(([name, formula, use], index) => (
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

                      <div className="p-5 text-sm text-slate-600">
                        {use}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* IMPORTANT POINTS */}
              <section id="points" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Exam Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Points
                </h2>

                <div className="mt-8 space-y-3">

                  {points.map((point, index) => (
                    <div
                      key={point}
                      className="flex gap-4 rounded-xl border border-slate-200 p-4"
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

              {/* PRACTICE */}
              <section className="mt-16 rounded-3xl bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 p-8 text-white shadow-2xl md:p-10">

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Practice
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Test Your Gravitation Knowledge
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Practice questions on Newton&apos;s law of gravitation,
                  acceleration due to gravity, satellites, escape velocity
                  and Kepler&apos;s laws.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/practice/mcq"
                    className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 hover:scale-105"
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

                <h3 className="text-lg font-black">
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
                  Physics Chapter
                </h3>

                <p className="mt-3 text-sm leading-6 text-blue-800">
                  Gravitation covers planetary motion, gravity, satellites
                  and gravitational energy.
                </p>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="border-t border-slate-200 bg-slate-50 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row lg:px-8">

          <Link
            href="/learn/physics"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold hover:border-blue-300 hover:text-blue-600"
          >
            ← Physics Chapters
          </Link>

          <Link
            href="/learn/physics/modern-physics"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next Chapter →
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
                Learning, practice, AI tools and developer utilities in
                one place.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Learning
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link href="/learn" className="block hover:text-white">
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

                <Link href="/ai-hub" className="block hover:text-white">
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