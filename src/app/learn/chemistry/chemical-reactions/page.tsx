import Link from "next/link";

const topics = [
  {
    title: "Types of Chemical Reactions",
    icon: "⚗️",
    description:
      "Learn combination, decomposition, displacement and double displacement reactions.",
  },
  {
    title: "Combination Reaction",
    icon: "➕",
    description:
      "Understand reactions in which two or more substances combine to form a single product.",
  },
  {
    title: "Decomposition Reaction",
    icon: "💥",
    description:
      "Learn how a compound breaks down into two or more simpler substances.",
  },
  {
    title: "Displacement Reaction",
    icon: "🔄",
    description:
      "Understand how a more reactive element displaces a less reactive element.",
  },
  {
    title: "Double Displacement",
    icon: "🔁",
    description:
      "Learn how two compounds exchange ions to form new compounds.",
  },
  {
    title: "Oxidation & Reduction",
    icon: "🔬",
    description:
      "Understand oxidation, reduction and redox reactions with examples.",
  },
];

const reactions = [
  {
    title: "Combination Reaction",
    equation: "CaO + H₂O → Ca(OH)₂",
    explanation:
      "Calcium oxide combines with water to form calcium hydroxide.",
  },
  {
    title: "Decomposition Reaction",
    equation: "CaCO₃ → CaO + CO₂",
    explanation:
      "Calcium carbonate decomposes on heating to form calcium oxide and carbon dioxide.",
  },
  {
    title: "Displacement Reaction",
    equation: "Zn + CuSO₄ → ZnSO₄ + Cu",
    explanation:
      "Zinc displaces copper from copper sulphate solution.",
  },
  {
    title: "Double Displacement Reaction",
    equation: "Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl",
    explanation:
      "The ions exchange between two compounds and barium sulphate is formed.",
  },
];

const importantPoints = [
  "A chemical reaction produces one or more new substances.",
  "Reactants are the substances that take part in a reaction.",
  "Products are the new substances formed during a reaction.",
  "A chemical equation represents a chemical reaction using symbols and formulas.",
  "A balanced chemical equation has equal numbers of each type of atom on both sides.",
  "Temperature, light, electricity and catalysts can affect chemical reactions.",
];

export default function ChemicalReactionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/learn/chemistry"
            className="text-sm font-medium text-blue-100 hover:text-white"
          >
            ← Back to Chemistry
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              🧪
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Chemical Reactions
              </h1>

              <p className="mt-3 max-w-3xl text-blue-50">
                Learn chemical reactions, their types, equations, examples,
                oxidation, reduction and important concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            What is a Chemical Reaction?
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            A chemical reaction is a process in which one or more substances
            change into new substances with different properties. The
            substances that take part in a reaction are called reactants,
            while the substances formed are called products.
          </p>

          <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
            <p className="font-semibold text-gray-900">
              General representation
            </p>

            <p className="mt-3 rounded-xl bg-blue-600 p-4 text-center text-lg font-bold text-white">
              Reactants → Products
            </p>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Types of Chemical Reactions
        </h2>

        <p className="mt-2 text-gray-600">
          Learn the major types of chemical reactions.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-2 leading-6 text-gray-600">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Equations */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Important Chemical Equations
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            Some important examples of different chemical reactions.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reactions.map((reaction) => (
              <div
                key={reaction.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {reaction.title}
                </h3>

                <div className="mt-4 overflow-x-auto rounded-xl bg-blue-50 p-4">
                  <p className="whitespace-nowrap text-center font-bold text-blue-800">
                    {reaction.equation}
                  </p>
                </div>

                <p className="mt-4 leading-6 text-gray-600">
                  {reaction.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs of Reaction */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Signs of a Chemical Reaction
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl">🎨</div>
            <h3 className="mt-4 font-bold text-gray-900">
              Colour Change
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              A change in colour can indicate that a new substance has formed.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl">💨</div>
            <h3 className="mt-4 font-bold text-gray-900">
              Gas Formation
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Formation of bubbles or a gas may occur during a reaction.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl">🌡️</div>
            <h3 className="mt-4 font-bold text-gray-900">
              Temperature Change
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Some reactions release or absorb heat.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl">🧱</div>
            <h3 className="mt-4 font-bold text-gray-900">
              Precipitate
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              An insoluble solid may form when two solutions react.
            </p>
          </div>
        </div>
      </section>

      {/* Important Points */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Important Points to Remember
          </h2>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {importantPoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  ✓
                </div>

                <p className="leading-6 text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Balanced Equation */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center sm:p-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Balanced Chemical Equation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            A chemical equation must obey the law of conservation of mass.
            Therefore, the number of atoms of each element must be the same
            on both sides.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-xl font-bold text-blue-700">
              2H₂ + O₂ → 2H₂O
            </p>

            <p className="mt-3 text-sm text-gray-600">
              This equation shows hydrogen reacting with oxygen to form water.
            </p>
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white">
            Practice Chemistry
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Test your understanding of chemical reactions with practice
            questions.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
          >
            Start Practice →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <p className="font-semibold">
            Rishi Infotech Learning Hub
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Learn Chemistry easily and build strong concepts.
          </p>

          <div className="mt-6 border-t border-slate-700 pt-6 text-sm text-slate-500">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
