import Link from "next/link";

const laws = [
  {
    number: "01",
    title: "Newton's First Law",
    icon: "🧱",
    subtitle: "Law of Inertia",
    description:
      "An object remains at rest or continues to move with uniform velocity in a straight line unless acted upon by an external unbalanced force.",
    formula: "F = 0 → constant velocity",
    examples: [
      "A book remains on a table until pushed.",
      "Passengers move forward when a moving bus stops suddenly.",
      "A coin falls into a glass when a card underneath it is flicked away.",
    ],
  },
  {
    number: "02",
    title: "Newton's Second Law",
    icon: "🚀",
    subtitle: "Law of Acceleration",
    description:
      "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.",
    formula: "F = ma",
    examples: [
      "A greater force produces greater acceleration.",
      "A lighter object accelerates more easily than a heavier object for the same force.",
      "Pushing a shopping cart harder makes it accelerate faster.",
    ],
  },
  {
    number: "03",
    title: "Newton's Third Law",
    icon: "🔄",
    subtitle: "Action and Reaction",
    description:
      "For every action, there is an equal and opposite reaction.",
    formula: "Action = − Reaction",
    examples: [
      "A rocket moves upward by pushing gases downward.",
      "A swimmer pushes water backward and moves forward.",
      "When you walk, your foot pushes the ground backward and the ground pushes you forward.",
    ],
  },
];

const forceTypes = [
  {
    icon: "✋",
    title: "Contact Force",
    description:
      "A force that acts when two objects are physically in contact.",
    examples: "Friction, normal force, muscular force",
  },
  {
    icon: "🌍",
    title: "Non-Contact Force",
    description:
      "A force that can act without physical contact between objects.",
    examples: "Gravitational, magnetic, electrostatic force",
  },
  {
    icon: "🧲",
    title: "Magnetic Force",
    description:
      "The force of attraction or repulsion produced by magnets.",
    examples: "Magnet attracting iron",
  },
  {
    icon: "⚡",
    title: "Electrostatic Force",
    description:
      "The force between electrically charged objects.",
    examples: "Charged balloon attracting hair",
  },
];

const effects = [
  ["🏃", "Change Speed", "A force can make an object move faster or slower."],
  ["↩️", "Change Direction", "A force can change the direction of motion."],
  ["🛑", "Stop Motion", "A force can bring a moving object to rest."],
  ["🚀", "Start Motion", "A force can make a stationary object move."],
  ["📦", "Change Shape", "A force can deform an object."],
];

const formulas = [
  ["Force", "F = ma", "Newton (N)"],
  ["Acceleration", "a = F/m", "m/s²"],
  ["Mass", "m = F/a", "kilogram (kg)"],
  ["Momentum", "p = mv", "kg·m/s"],
  ["Weight", "W = mg", "Newton (N)"],
];

const importantPoints = [
  "Force is a push or pull acting on an object.",
  "The SI unit of force is Newton (N).",
  "Force can change the state of motion of an object.",
  "Newton's First Law is also called the Law of Inertia.",
  "Inertia is the tendency of an object to resist a change in its state of motion.",
  "Newton's Second Law gives the relation F = ma.",
  "One Newton is the force required to produce an acceleration of 1 m/s² in a mass of 1 kg.",
  "Newton's Third Law states that every action has an equal and opposite reaction.",
  "Mass is a measure of the amount of matter in an object.",
  "Weight is the gravitational force acting on an object.",
  "Momentum is the product of mass and velocity.",
  "The SI unit of momentum is kg·m/s.",
];

export default function ForceLawsMotionPage() {
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
              ⚖️
            </div>

            <div>
              <p className="font-semibold text-blue-100">CHAPTER 02</p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Force & Laws of Motion
              </h2>
            </div>
          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn about force, its effects, types of forces, inertia,
            momentum and Newton&apos;s three laws of motion with simple
            explanations and real-life examples.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#force"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              ⚖️ Start Learning
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
            Force & Laws of Motion
          </span>
        </div>
      </div>

      {/* MAIN */}
      <section id="force" className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            {/* CONTENT */}
            <article>
              {/* INTRO */}
              <section>
                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 02
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is Force?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Force is a push or pull acting on an object. A force can
                  change the motion, direction or shape of an object.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">
                  <div className="text-6xl">💪</div>

                  <h3 className="mt-5 text-2xl font-black">
                    Force = Push or Pull
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Force is responsible for many changes we observe in
                    moving and stationary objects.
                  </p>

                  <div className="mt-6 inline-flex rounded-xl bg-white/10 px-5 py-3 font-bold text-cyan-300">
                    SI Unit: Newton (N)
                  </div>
                </div>
              </section>

              {/* EFFECTS */}
              <section id="effects" className="mt-16">
                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Effects of Force
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  What Can Force Do?
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {effects.map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="text-4xl">{icon}</div>

                      <h3 className="mt-4 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* TYPES */}
              <section id="types" className="mt-16">
                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Classification
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Types of Forces
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Forces can be classified into contact forces and
                  non-contact forces depending on whether physical contact
                  is required.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {forceTypes.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
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

                      <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                        Examples: {item.examples}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* BALANCED UNBALANCED */}
              <section id="balanced" className="mt-16">
                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Net Force
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Balanced and Unbalanced Forces
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
                    <div className="text-4xl">⚖️</div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Balanced Forces
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      When forces acting on an object are equal in magnitude
                      and opposite in direction, the net force is zero.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4 font-bold text-blue-700">
                      Net Force = 0
                    </div>
                  </div>

                  <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-7">
                    <div className="text-4xl">🚀</div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      Unbalanced Forces
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      When the forces acting on an object are not balanced,
                      the net force is not zero and the motion may change.
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-4 font-bold text-cyan-700">
                      Net Force ≠ 0
                    </div>
                  </div>
                </div>
              </section>

              {/* INERTIA */}
              <section id="inertia" className="mt-16">
                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Newton&apos;s First Law
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Inertia
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Inertia is the tendency of an object to resist any change
                  in its state of rest or motion. Greater mass generally
                  means greater inertia.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["🪑", "Inertia of Rest", "A stationary object tends to remain at rest."],
                    ["🚗", "Inertia of Motion", "A moving object tends to remain in motion."],
                    ["↪️", "Inertia of Direction", "A moving object tends to continue in the same direction."],
                  ].map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-3xl bg-slate-50 p-6 text-center"
                    >
                      <div className="text-4xl">{icon}</div>

                      <h3 className="mt-4 font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* NEWTON LAWS */}
              <section id="laws" className="mt-16">
                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Newton&apos;s Laws
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Three Laws of Motion
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Sir Isaac Newton described three fundamental laws that
                  explain the relationship between force and motion.
                </p>

                <div className="mt-10 space-y-6">
                  {laws.map((law) => (
                    <div
                      key={law.number}
                      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                            {law.icon}
                          </div>

                          <div>
                            <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                              Law {law.number}
                            </p>

                            <h3 className="mt-1 text-xl font-black text-slate-900">
                              {law.title}
                            </h3>

                            <p className="text-sm font-semibold text-slate-500">
                              {law.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="mt-6 leading-7 text-slate-600">
                        {law.description}
                      </p>

                      <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-center text-xl font-black text-cyan-300">
                        {law.formula}
                      </div>

                      <div className="mt-6">
                        <h4 className="font-black text-slate-900">
                          Real-Life Examples
                        </h4>

                        <div className="mt-3 space-y-2">
                          {law.examples.map((example) => (
                            <div
                              key={example}
                              className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600"
                            >
                              ✓ {example}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECOND LAW */}
              <section id="second-law" className="mt-16 rounded-3xl bg-blue-50 p-8">
                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Important Formula
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Newton&apos;s Second Law: F = ma
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  According to Newton&apos;s Second Law, force is equal to
                  the product of mass and acceleration.
                </p>

                <div className="mt-7 rounded-3xl bg-white p-8 text-center shadow-sm">
                  <div className="text-5xl font-black text-blue-600">
                    F = ma
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl bg-blue-50 p-4">
                      <div className="font-black text-slate-900">F</div>
                      <div className="text-sm text-slate-600">Force</div>
                    </div>

                    <div className="rounded-xl bg-blue-50 p-4">
                      <div className="font-black text-slate-900">m</div>
                      <div className="text-sm text-slate-600">Mass</div>
                    </div>

                    <div className="rounded-xl bg-blue-50 p-4">
                      <div className="font-black text-slate-900">a</div>
                      <div className="text-sm text-slate-600">
                        Acceleration
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* MOMENTUM */}
              <section id="momentum" className="mt-16">
                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Motion Quantity
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Momentum
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Momentum is the quantity of motion possessed by a moving
                  object. It depends on both the mass and velocity of the
                  object.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-center text-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Formula
                  </p>

                  <div className="mt-4 text-5xl font-black text-white">
                    p = mv
                  </div>

                  <p className="mt-4 text-slate-300">
                    Momentum = mass × velocity
                  </p>
                </div>
              </section>

              {/* FORMULAS */}
              <section id="formulas" className="mt-16">
                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Formulas
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  {formulas.map(([quantity, formula, unit], index) => (
                    <div
                      key={quantity}
                      className={`grid grid-cols-1 gap-2 p-5 sm:grid-cols-3 ${
                        index !== formulas.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >
                      <div className="font-black text-blue-600">
                        {quantity}
                      </div>

                      <div className="font-bold text-slate-900">
                        {formula}
                      </div>

                      <div className="text-sm text-slate-600">
                        Unit: {unit}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* EXAMPLE */}
              <section id="example" className="mt-16 rounded-3xl border border-cyan-100 bg-cyan-50 p-8">
                <p className="font-bold uppercase tracking-widest text-cyan-700">
                  Solved Example
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Calculate Force
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A body has a mass of 5 kg and accelerates at 2 m/s².
                  Find the force acting on it.
                </p>

                <div className="mt-7 rounded-2xl bg-white p-6">
                  <div className="space-y-3 text-sm text-slate-700">
                    <p>
                      <strong>Given:</strong> m = 5 kg
                    </p>

                    <p>
                      <strong>Acceleration:</strong> a = 2 m/s²
                    </p>

                    <p>
                      <strong>Formula:</strong> F = ma
                    </p>

                    <p>
                      <strong>Calculation:</strong> F = 5 × 2
                    </p>

                    <div className="mt-4 rounded-xl bg-blue-600 p-4 text-center text-xl font-black text-white">
                      Answer: F = 10 N
                    </div>
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
                  Ready for Force & Laws of Motion MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of force, inertia, Newton&apos;s
                  laws, momentum and important formulas.
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
                    ["01", "What is Force?", "#force"],
                    ["02", "Effects of Force", "#effects"],
                    ["03", "Types of Forces", "#types"],
                    ["04", "Balanced Forces", "#balanced"],
                    ["05", "Inertia", "#inertia"],
                    ["06", "Newton's Laws", "#laws"],
                    ["07", "Second Law: F = ma", "#second-law"],
                    ["08", "Momentum", "#momentum"],
                    ["09", "Important Formulas", "#formulas"],
                    ["10", "Solved Example", "#example"],
                    ["11", "Important Points", "#important-points"],
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
                  <div className="h-full w-2/3 rounded-full bg-blue-600" />
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
            href="/learn/physics/work-energy"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Work, Energy & Power →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-xl font-bold">Rishi Infotech</h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learning, practice, AI tools and developer utilities in one
                place.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Learning</h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <Link href="/learn" className="block hover:text-white">
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
              <h3 className="font-semibold">Practice</h3>

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
              <h3 className="font-semibold">Tools</h3>

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