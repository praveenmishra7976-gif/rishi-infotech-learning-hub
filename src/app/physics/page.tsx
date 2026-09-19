import Link from "next/link";

const topics = [
  {
    title: "Motion & Kinematics",
    icon: "🚗",
    description:
      "Learn distance, displacement, speed, velocity, acceleration and equations of motion.",
  },
  {
    title: "Force & Laws",
    icon: "⚡",
    description:
      "Understand force, Newton's laws of motion, friction and applications in daily life.",
  },
  {
    title: "Work, Energy & Power",
    icon: "🔋",
    description:
      "Learn mechanical work, kinetic energy, potential energy and power.",
  },
  {
    title: "Gravitation",
    icon: "🌍",
    description:
      "Explore gravity, gravitational force, weight, free fall and planetary motion.",
  },
  {
    title: "Light & Optics",
    icon: "🔦",
    description:
      "Study reflection, refraction, mirrors, lenses and optical instruments.",
  },
  {
    title: "Electricity",
    icon: "💡",
    description:
      "Learn current, voltage, resistance, circuits, Ohm's law and electrical power.",
  },
  {
    title: "Magnetism",
    icon: "🧲",
    description:
      "Understand magnetic fields, magnetic forces, electromagnets and applications.",
  },
  {
    title: "Waves & Sound",
    icon: "🔊",
    description:
      "Learn frequency, wavelength, amplitude, wave speed and sound propagation.",
  },
  {
    title: "Modern Physics",
    icon: "⚛️",
    description:
      "Explore atoms, photons, nuclear physics, radioactivity and modern concepts.",
  },
];

const quickLinks = [
  { title: "Physics Notes", icon: "📚", href: "/notes" },
  { title: "Physics MCQs", icon: "📝", href: "/practice" },
  { title: "Formula Sheet", icon: "📐", href: "/downloads" },
  { title: "Mock Test", icon: "🎯", href: "/practice" },
];

const formulas = [
  {
    name: "Speed",
    formula: "v = d / t",
  },
  {
    name: "Newton's Second Law",
    formula: "F = ma",
  },
  {
    name: "Kinetic Energy",
    formula: "KE = ½mv²",
  },
  {
    name: "Potential Energy",
    formula: "PE = mgh",
  },
  {
    name: "Ohm's Law",
    formula: "V = IR",
  },
  {
    name: "Power",
    formula: "P = W / t",
  },
];

export default function PhysicsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-black">
              RI
            </div>

            <div>
              <h1 className="font-black text-gray-900 leading-tight">
                Rishi Infotech
              </h1>

              <p className="text-xs text-blue-600 font-semibold">
                Learning Hub
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link href="/computer" className="hover:text-blue-600 transition">
              Computer
            </Link>

            <Link href="/physics" className="text-blue-600">
              Physics
            </Link>

            <Link href="/practice" className="hover:text-blue-600 transition">
              Practice
            </Link>

            <Link href="/ai-hub" className="hover:text-blue-600 transition">
              AI Hub
            </Link>

            <Link
              href="/developer-hub"
              className="hover:text-blue-600 transition"
            >
              Developer
            </Link>
          </nav>

          <Link
            href="/practice"
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
          >
            Practice
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-900 to-blue-600 text-white">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-5 py-2 backdrop-blur-md text-sm font-semibold">
                ⚡ Physics Learning
              </div>

              <h2 className="mt-7 text-4xl md:text-6xl font-black leading-tight">
                Understand
                <span className="block text-cyan-300">
                  How The World Works
                </span>
              </h2>

              <p className="mt-6 text-blue-100 text-lg leading-8 max-w-2xl">
                Learn physics through simple explanations, formulas, laws,
                examples, numerical problems, MCQs and practice tests.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="#topics"
                  className="px-7 py-4 rounded-xl bg-white text-blue-700 font-black hover:scale-105 transition"
                >
                  🚀 Explore Physics
                </Link>

                <Link
                  href="/practice"
                  className="px-7 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md font-bold hover:bg-white hover:text-blue-900 transition"
                >
                  📝 Practice MCQs
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-5 max-w-xl">
                <div>
                  <h3 className="text-3xl font-black">100+</h3>
                  <p className="text-blue-200 text-sm mt-1">Topics</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black">500+</h3>
                  <p className="text-blue-200 text-sm mt-1">Questions</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black">50+</h3>
                  <p className="text-blue-200 text-sm mt-1">Formulas</p>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl">
                  <div className="text-7xl">⚛️</div>

                  <h3 className="mt-7 text-3xl font-black">
                    Physics Lab
                  </h3>

                  <p className="mt-3 text-blue-100 leading-7">
                    Formulas, laws, experiments, numerical problems and
                    conceptual learning.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl bg-white/10 p-4 flex items-center justify-between">
                      <span>Force</span>
                      <strong>F = ma</strong>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4 flex items-center justify-between">
                      <span>Energy</span>
                      <strong>KE = ½mv²</strong>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4 flex items-center justify-between">
                      <span>Electricity</span>
                      <strong>V = IR</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Quick Access
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900">
              Physics Resources
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-gray-100 bg-slate-50 p-6 text-center hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-4 font-bold">{item.title}</h3>

                <p className="mt-2 text-sm text-gray-500 group-hover:text-blue-100">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section id="topics" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Physics Topics
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900">
              Explore Physics
            </h2>

            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Build your physics knowledge from fundamental concepts to
              advanced topics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {topics.map((topic, index) => (
              <div
                key={topic.title}
                className="group rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition">
                    {topic.icon}
                  </div>

                  <span className="text-sm font-bold text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-900">
                  {topic.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-7">
                  {topic.description}
                </p>

                <button className="mt-7 text-blue-600 font-bold">
                  Explore Topic →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Formula Center
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900">
              Important Physics Formulas
            </h2>

            <p className="mt-4 text-gray-500">
              Quickly revise important formulas before your exam.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {formulas.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-gray-100 bg-slate-50 p-6 text-center hover:shadow-lg transition"
              >
                <p className="font-bold text-gray-600">
                  {item.name}
                </p>

                <div className="mt-4 rounded-xl bg-white p-4">
                  <span className="text-xl md:text-2xl font-black text-blue-700">
                    {item.formula}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/downloads"
              className="inline-block px-7 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
            >
              📥 Download Formula Sheets
            </Link>
          </div>
        </div>
      </section>

      {/* STUDY METHOD */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                Smart Learning
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-900">
                Learn Physics The Smart Way
              </h2>

              <p className="mt-5 text-gray-500 text-lg leading-8">
                Follow a simple learning cycle to understand concepts and
                improve your exam performance.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black shrink-0">
                    1
                  </div>

                  <div>
                    <h3 className="font-black text-lg">
                      Understand the Concept
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Read simple explanations and examples.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black shrink-0">
                    2
                  </div>

                  <div>
                    <h3 className="font-black text-lg">
                      Learn the Formula
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Memorize important equations and units.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black shrink-0">
                    3
                  </div>

                  <div>
                    <h3 className="font-black text-lg">
                      Solve Numericals
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Apply formulas to practical problems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center font-black shrink-0">
                    4
                  </div>

                  <div>
                    <h3 className="font-black text-lg">
                      Take the Test
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Practice MCQs and mock tests to measure progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-indigo-700 to-blue-600 p-8 md:p-12 text-white shadow-2xl">
              <div className="text-6xl">🎯</div>

              <h3 className="mt-7 text-3xl font-black">
                Prepare For Your Exam
              </h3>

              <p className="mt-5 text-blue-100 leading-8">
                Combine notes, formulas, numerical problems, previous papers
                and mock tests for complete preparation.
              </p>

              <Link
                href="/practice"
                className="inline-block mt-8 rounded-xl bg-white px-7 py-4 text-blue-700 font-black hover:scale-105 transition"
              >
                Start Physics Practice →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-950 via-indigo-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-5xl font-black">
            Ready To Master Physics?
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Learn concepts. Master formulas. Solve problems. Crack exams.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/practice"
              className="px-8 py-4 rounded-xl bg-cyan-400 text-blue-950 font-black hover:scale-105 transition"
            >
              📝 Start Practice
            </Link>

            <Link
              href="/courses"
              className="px-8 py-4 rounded-xl border border-white/30 bg-white/10 font-bold hover:bg-white hover:text-blue-900 transition"
            >
              📚 View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-black">
                Rishi Infotech Learning Hub
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                Learn everything in one place.
              </p>
            </div>

            <div>
              <h4 className="font-bold">Learning</h4>

              <div className="mt-4 space-y-3 text-gray-400">
                <Link href="/computer" className="block hover:text-white">
                  Computer
                </Link>

                <Link href="/physics" className="block hover:text-white">
                  Physics
                </Link>

                <Link href="/chemistry" className="block hover:text-white">
                  Chemistry
                </Link>

                <Link href="/mathematics" className="block hover:text-white">
                  Mathematics
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold">Practice</h4>

              <div className="mt-4 space-y-3 text-gray-400">
                <Link href="/practice" className="block hover:text-white">
                  MCQ Quiz
                </Link>

                <Link href="/practice" className="block hover:text-white">
                  Mock Tests
                </Link>

                <Link href="/downloads" className="block hover:text-white">
                  Downloads
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold">Tools</h4>

              <div className="mt-4 space-y-3 text-gray-400">
                <Link href="/ai-hub" className="block hover:text-white">
                  AI Hub
                </Link>

                <Link
                  href="/developer-hub"
                  className="block hover:text-white"
                >
                  Developer Hub
                </Link>

                <Link href="/dictionary" className="block hover:text-white">
                  Dictionary
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-7 text-center text-gray-500 text-sm">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
