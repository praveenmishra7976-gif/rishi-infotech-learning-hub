import Link from "next/link";

const topics = [
  ["01", "Introduction", "#introduction"],
  ["02", "Atom", "#atom"],
  ["03", "Atomic Models", "#atomic-models"],
  ["04", "Nucleus", "#nucleus"],
  ["05", "Radioactivity", "#radioactivity"],
  ["06", "Alpha, Beta & Gamma Rays", "#radiations"],
  ["07", "Half-Life", "#half-life"],
  ["08", "Nuclear Fission", "#fission"],
  ["09", "Nuclear Fusion", "#fusion"],
  ["10", "Mass-Energy Relation", "#mass-energy"],
  ["11", "Photoelectric Effect", "#photoelectric"],
  ["12", "Photons", "#photons"],
  ["13", "X-Rays", "#x-rays"],
  ["14", "Semiconductors", "#semiconductors"],
  ["15", "Applications", "#applications"],
  ["16", "Important Formulas", "#formulas"],
  ["17", "Important Points", "#important"],
];

const concepts = [
  {
    icon: "⚛️",
    title: "Atom",
    text: "An atom consists of a nucleus surrounded by electrons.",
  },
  {
    icon: "☢️",
    title: "Radioactivity",
    text: "Some unstable nuclei spontaneously emit radiation and transform into more stable states.",
  },
  {
    icon: "☀️",
    title: "Nuclear Fusion",
    text: "Light nuclei combine to form a heavier nucleus and release a large amount of energy.",
  },
  {
    icon: "⚡",
    title: "Photoelectric Effect",
    text: "Electrons can be emitted from a material when suitable electromagnetic radiation falls on it.",
  },
];

const importantPoints = [
  "Modern physics deals with phenomena that cannot be fully explained by classical physics.",
  "An atom contains a small, dense nucleus and electrons surrounding the nucleus.",
  "The nucleus contains protons and neutrons.",
  "The atomic number is the number of protons in the nucleus.",
  "The mass number is the total number of protons and neutrons.",
  "Isotopes have the same atomic number but different mass numbers.",
  "Radioactivity is a spontaneous nuclear process.",
  "Alpha particles are helium nuclei.",
  "Beta radiation consists of high-speed particles produced in nuclear transformations.",
  "Gamma radiation is electromagnetic radiation of very high energy.",
  "Half-life is the time required for half of a radioactive sample to decay.",
  "Nuclear fission involves splitting a heavy nucleus.",
  "Nuclear fusion involves combining light nuclei.",
  "The Sun produces energy mainly through nuclear fusion.",
  "Mass and energy are related through Einstein's mass-energy relation.",
  "The photoelectric effect supports the particle nature of light.",
  "A photon is a quantum of electromagnetic radiation.",
  "X-rays are high-energy electromagnetic radiation.",
  "Semiconductors have electrical properties between conductors and insulators.",
  "Modern physics has applications in medicine, electronics, communication, energy and space science.",
];

const formulas = [
  ["Mass-energy relation", "E = mc²", "Energy equivalent of mass"],
  ["Photon energy", "E = hf", "Energy of a photon"],
  ["Photon energy", "E = hc/λ", "Energy using wavelength"],
  ["Photoelectric equation", "Kmax = hf − φ", "Maximum kinetic energy of emitted electrons"],
  ["de Broglie wavelength", "λ = h/p", "Matter-wave relation"],
  ["Half-life", "N = N₀(1/2)ⁿ", "Remaining quantity after n half-lives"],
  ["Decay law", "N = N₀e⁻λt", "Radioactive decay"],
  ["Activity", "A = λN", "Activity of radioactive sample"],
];

export default function ModernPhysicsPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-800 via-blue-700 to-cyan-500">

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
              ⚛️
            </div>

            <div>
              <p className="font-semibold text-blue-100">
                PHYSICS CHAPTER 11
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Modern Physics
              </h2>
            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Explore atoms, nuclei, radioactivity, nuclear energy, photons,
            the photoelectric effect, X-rays, semiconductors and the ideas
            that form the foundation of modern physics.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#introduction"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              ⚛️ Start Learning
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
            Modern Physics
          </span>

        </div>
      </div>

      {/* MAIN */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            <article>

              {/* INTRODUCTION */}
              <section id="introduction">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 11
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  Introduction to Modern Physics
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Modern physics studies physical phenomena at atomic,
                  nuclear and subatomic scales. It includes quantum physics,
                  nuclear physics, relativity and the behaviour of matter
                  and radiation at very small scales.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-7xl">
                    ⚛️
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    From atoms to the universe
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Modern physics explains phenomena such as atomic
                    spectra, radioactivity, quantum behaviour and nuclear
                    energy.
                  </p>

                </div>
              </section>

              {/* CORE CONCEPTS */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Core Concepts
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
                        {item.text}
                      </p>

                    </div>
                  ))}

                </div>
              </section>

              {/* ATOM */}
              <section id="atom" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Concept 01
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Atom
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  An atom is the basic unit of an element. It consists of a
                  central nucleus and electrons associated with the region
                  around the nucleus.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-3xl bg-blue-50 p-7 text-center">
                    <div className="text-5xl">➕</div>
                    <h3 className="mt-4 font-black">
                      Proton
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Positively charged particle found in the nucleus.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-7 text-center">
                    <div className="text-5xl">⚪</div>
                    <h3 className="mt-4 font-black">
                      Neutron
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Electrically neutral particle found in the nucleus.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7 text-center">
                    <div className="text-5xl">➖</div>
                    <h3 className="mt-4 font-black">
                      Electron
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Negatively charged particle associated with the atom.
                    </p>
                  </div>

                </div>
              </section>

              {/* ATOMIC MODELS */}
              <section id="atomic-models" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Atomic Structure
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Atomic Models
                </h2>

                <div className="mt-8 space-y-5">

                  <div className="rounded-3xl border border-slate-200 p-7">

                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                      THOMSON
                    </span>

                    <h3 className="mt-4 text-xl font-black">
                      Thomson Model
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Thomson proposed a model in which electrons were
                      embedded in a positively charged region.
                    </p>

                  </div>

                  <div className="rounded-3xl border border-slate-200 p-7">

                    <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
                      RUTHERFORD
                    </span>

                    <h3 className="mt-4 text-xl font-black">
                      Nuclear Model
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Rutherford&apos;s scattering experiment led to the
                      idea of a small, dense, positively charged nucleus.
                    </p>

                  </div>

                  <div className="rounded-3xl border border-slate-200 p-7">

                    <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold text-white">
                      BOHR
                    </span>

                    <h3 className="mt-4 text-xl font-black">
                      Bohr Model
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Bohr proposed that electrons occupy specific allowed
                      energy levels.
                    </p>

                  </div>

                </div>
              </section>

              {/* NUCLEUS */}
              <section id="nucleus" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Nuclear Physics
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Atomic Nucleus
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  The nucleus is the small, dense central region of an atom.
                  It contains protons and neutrons and contains almost all
                  of the atom&apos;s mass.
                </p>

                <div className="mt-8 rounded-3xl bg-indigo-50 p-8">

                  <div className="grid gap-5 sm:grid-cols-3">

                    <div className="rounded-2xl bg-white p-5 text-center">
                      <p className="text-3xl font-black text-blue-700">
                        Z
                      </p>
                      <p className="mt-2 font-bold">
                        Atomic Number
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Number of protons
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center">
                      <p className="text-3xl font-black text-indigo-700">
                        N
                      </p>
                      <p className="mt-2 font-bold">
                        Neutron Number
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Number of neutrons
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 text-center">
                      <p className="text-3xl font-black text-cyan-700">
                        A
                      </p>
                      <p className="mt-2 font-bold">
                        Mass Number
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Protons + neutrons
                      </p>
                    </div>

                  </div>

                </div>
              </section>

              {/* RADIOACTIVITY */}
              <section id="radioactivity" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Concept 02
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Radioactivity
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Radioactivity is the spontaneous transformation of an
                  unstable atomic nucleus accompanied by the emission of
                  radiation.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    ☢️
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Unstable nucleus → radiation + transformation
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Radioactive decay is a statistical process. Individual
                    nuclei cannot generally be predicted, but the behaviour
                    of a large sample can be described mathematically.
                  </p>

                </div>
              </section>

              {/* RADIATIONS */}
              <section id="radiations" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Nuclear Radiation
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Alpha, Beta and Gamma Radiation
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-3xl bg-red-50 p-7">

                    <div className="text-5xl">
                      α
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Alpha
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Alpha radiation consists of helium nuclei and has
                      relatively high ionising power.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-yellow-50 p-7">

                    <div className="text-5xl">
                      β
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Beta
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Beta radiation consists of high-speed particles
                      associated with nuclear transformations.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-purple-50 p-7">

                    <div className="text-5xl">
                      γ
                    </div>

                    <h3 className="mt-4 text-xl font-black">
                      Gamma
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Gamma radiation is high-energy electromagnetic
                      radiation.
                    </p>

                  </div>

                </div>
              </section>

              {/* HALF LIFE */}
              <section id="half-life" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Radioactive Decay
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Half-Life
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Half-life is the time required for half of the radioactive
                  nuclei in a sample to decay.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8 text-center">

                  <p className="text-4xl font-black text-blue-700">
                    N = N₀(1/2)ⁿ
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    After each half-life, the number of undecayed nuclei
                    becomes half of its previous value.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">

                    {[
                      ["0", "100%"],
                      ["1", "50%"],
                      ["2", "25%"],
                      ["3", "12.5%"],
                    ].map(([time, amount]) => (
                      <div
                        key={time}
                        className="rounded-xl bg-white p-4"
                      >
                        <p className="text-sm text-slate-500">
                          {time} half-life
                        </p>
                        <p className="mt-2 text-xl font-black text-blue-700">
                          {amount}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>
              </section>

              {/* FISSION */}
              <section id="fission" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Nuclear Energy
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Nuclear Fission
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Nuclear fission is a process in which a heavy atomic
                  nucleus splits into smaller nuclei, releasing energy and
                  usually additional neutrons.
                </p>

                <div className="mt-8 rounded-3xl bg-orange-50 p-8 text-center">

                  <div className="flex flex-wrap items-center justify-center gap-5 text-5xl">
                    <span>⚛️</span>
                    <span>→</span>
                    <span>⚛️</span>
                    <span>+</span>
                    <span>⚛️</span>
                    <span>+</span>
                    <span>⚡</span>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-600">
                    Controlled fission is used in nuclear reactors to
                    generate energy.
                  </p>

                </div>
              </section>

              {/* FUSION */}
              <section id="fusion" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Nuclear Energy
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Nuclear Fusion
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Nuclear fusion occurs when light nuclei combine to form a
                  heavier nucleus and release a large amount of energy.
                </p>

                <div className="mt-8 rounded-3xl bg-yellow-50 p-8 text-center">

                  <div className="flex flex-wrap items-center justify-center gap-5 text-5xl">
                    <span>⚛️</span>
                    <span>+</span>
                    <span>⚛️</span>
                    <span>→</span>
                    <span>☀️</span>
                    <span>+</span>
                    <span>⚡</span>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-600">
                    The Sun and other stars generate enormous energy through
                    nuclear fusion processes.
                  </p>

                </div>
              </section>

              {/* MASS ENERGY */}
              <section id="mass-energy" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Einstein
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Mass-Energy Relation
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Einstein&apos;s famous relation shows that mass and energy
                  are equivalent and can be related through the speed of
                  light.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-10 text-center text-white">

                  <p className="text-6xl font-black">
                    E = mc²
                  </p>

                  <p className="mt-5 text-slate-300">
                    E = energy, m = mass and c = speed of light in vacuum.
                  </p>

                </div>
              </section>

              {/* PHOTOELECTRIC */}
              <section id="photoelectric" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Quantum Physics
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Photoelectric Effect
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  The photoelectric effect is the emission of electrons from
                  a material when electromagnetic radiation of sufficient
                  frequency falls on its surface.
                </p>

                <div className="mt-8 rounded-3xl bg-blue-50 p-8">

                  <div className="flex flex-wrap items-center justify-center gap-5 text-4xl">
                    <span>💡</span>
                    <span>→</span>
                    <span>🔩</span>
                    <span>→</span>
                    <span>⚡</span>
                  </div>

                  <div className="mt-7 rounded-2xl bg-white p-6">

                    <p className="text-center text-3xl font-black text-blue-700">
                      Kmax = hf − φ
                    </p>

                    <p className="mt-4 text-center text-sm text-slate-600">
                      Here φ represents the work function of the material.
                    </p>

                  </div>

                </div>
              </section>

              {/* PHOTONS */}
              <section id="photons" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Quantum
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Photons
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A photon is a quantum or discrete packet of
                  electromagnetic radiation.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-3">

                  <div className="rounded-3xl bg-yellow-50 p-7 text-center">
                    <div className="text-5xl">💡</div>
                    <h3 className="mt-4 font-black">
                      Energy
                    </h3>
                    <p className="mt-2 text-2xl font-black text-blue-700">
                      E = hf
                    </p>
                  </div>

                  <div className="rounded-3xl bg-blue-50 p-7 text-center">
                    <div className="text-5xl">🌊</div>
                    <h3 className="mt-4 font-black">
                      Wavelength
                    </h3>
                    <p className="mt-2 text-2xl font-black text-blue-700">
                      E = hc/λ
                    </p>
                  </div>

                  <div className="rounded-3xl bg-purple-50 p-7 text-center">
                    <div className="text-5xl">⚡</div>
                    <h3 className="mt-4 font-black">
                      Momentum
                    </h3>
                    <p className="mt-2 text-2xl font-black text-blue-700">
                      p = h/λ
                    </p>
                  </div>

                </div>
              </section>

              {/* X RAYS */}
              <section id="x-rays" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Electromagnetic Radiation
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  X-Rays
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  X-rays are high-energy electromagnetic radiation with
                  short wavelengths. They have important applications in
                  medicine and material analysis.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-3">

                  {[
                    ["🏥", "Medical", "Used for diagnostic imaging."],
                    ["🔬", "Science", "Used to study structures of materials."],
                    ["🛡️", "Security", "Used in baggage and security scanning."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl bg-slate-50 p-7 text-center"
                    >
                      <div className="text-5xl">{icon}</div>
                      <h3 className="mt-4 font-black">{title}</h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {text}
                      </p>
                    </div>
                  ))}

                </div>
              </section>

              {/* SEMICONDUCTORS */}
              <section id="semiconductors" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Electronics
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Semiconductors
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Semiconductors have electrical conductivity between that
                  of conductors and insulators. Their properties can be
                  controlled, making them fundamental to modern electronics.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-3xl bg-blue-50 p-7">
                    <div className="text-5xl">💻</div>
                    <h3 className="mt-4 font-black">
                      Computers
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Semiconductor devices form the basis of processors
                      and memory systems.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-cyan-50 p-7">
                    <div className="text-5xl">📱</div>
                    <h3 className="mt-4 font-black">
                      Smartphones
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Modern mobile devices contain many semiconductor
                      components.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-indigo-50 p-7">
                    <div className="text-5xl">🔌</div>
                    <h3 className="mt-4 font-black">
                      Electronics
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Diodes, transistors and integrated circuits rely on
                      semiconductor technology.
                    </p>
                  </div>

                </div>
              </section>

              {/* APPLICATIONS */}
              <section id="applications" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Real World
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Applications of Modern Physics
                </h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {[
                    ["🏥", "Medical Physics", "Medical imaging, radiation therapy and diagnostic technologies."],
                    ["💻", "Computing", "Semiconductor physics enables modern processors and memory."],
                    ["📡", "Communication", "Quantum and semiconductor technologies support communication systems."],
                    ["☀️", "Energy", "Nuclear processes provide important energy technologies."],
                    ["🚀", "Space Science", "Modern physics is essential for understanding stars and cosmic phenomena."],
                    ["🔬", "Research", "Atomic and subatomic physics supports advanced scientific research."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 p-6 shadow-sm"
                    >

                      <div className="text-5xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 font-black">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>
              </section>

              {/* FORMULAS */}
              <section id="formulas" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Modern Physics Formulas
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">

                  <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">Quantity</div>
                    <div className="p-4">Formula</div>
                    <div className="p-4">Use</div>

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

              {/* IMPORTANT */}
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

              {/* PRACTICE */}
              <section className="mt-16 rounded-3xl bg-gradient-to-br from-indigo-800 via-blue-700 to-cyan-500 p-8 text-white shadow-2xl md:p-10">

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Test Your Knowledge
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Ready for Modern Physics MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test yourself on atoms, nuclei, radioactivity, nuclear
                  energy, photons, photoelectric effect and semiconductors.
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
                  <div className="h-full w-full rounded-full bg-blue-600" />
                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Modern Physics chapter added.
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
            href="/learn/physics/optics"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Optics
          </Link>

          <Link
            href="/learn/physics"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Physics Chapters →
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