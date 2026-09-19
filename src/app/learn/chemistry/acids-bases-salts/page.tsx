import Link from "next/link";

const concepts = [
  {
    title: "Acids",
    icon: "🍋",
    description:
      "Learn the properties of acids, common examples, reactions and uses.",
  },
  {
    title: "Bases",
    icon: "🧼",
    description:
      "Understand bases, their properties, examples and important reactions.",
  },
  {
    title: "Salts",
    icon: "🧂",
    description:
      "Learn how salts are formed, their properties and common examples.",
  },
  {
    title: "Indicators",
    icon: "🧪",
    description:
      "Understand litmus, phenolphthalein, methyl orange and natural indicators.",
  },
  {
    title: "pH Scale",
    icon: "📊",
    description:
      "Learn the pH scale and how to identify acidic, neutral and basic substances.",
  },
  {
    title: "Neutralisation",
    icon: "⚗️",
    description:
      "Understand neutralisation reactions and their applications in daily life.",
  },
];

const importantFacts = [
  "Acids generally have a pH less than 7.",
  "Bases generally have a pH greater than 7.",
  "A neutral substance has a pH of 7.",
  "Acids react with some metals to produce hydrogen gas.",
  "Acid + Base → Salt + Water.",
  "Litmus is commonly used to identify acids and bases.",
];

export default function AcidsBasesSaltsPage() {
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
              ⚗️
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Acids, Bases & Salts
              </h1>

              <p className="mt-3 max-w-3xl text-blue-50">
                Learn acids, bases, salts, indicators, pH scale and
                neutralisation with simple explanations and important facts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            What are Acids, Bases & Salts?
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            Acids and bases are important groups of chemical substances.
            They have different properties and react with each other in
            characteristic ways. Salts are often formed when an acid reacts
            with a base.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            These concepts are important for understanding chemical reactions,
            pH, indicators and many everyday applications of chemistry.
          </p>
        </div>
      </section>

      {/* Concepts */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Important Concepts
        </h2>

        <p className="mt-2 text-gray-600">
          Learn the main concepts of acids, bases and salts.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {concept.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {concept.title}
              </h3>

              <p className="mt-2 leading-6 text-gray-600">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Reactions */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Important Chemical Reactions
          </h2>

          <div className="mx-auto mt-10 max-w-4xl space-y-5">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-gray-900">
                Acid + Base
              </h3>
              <p className="mt-3 rounded-xl bg-blue-50 p-4 font-semibold text-blue-800">
                Acid + Base → Salt + Water
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-gray-900">
                Acid + Metal
              </h3>
              <p className="mt-3 rounded-xl bg-blue-50 p-4 font-semibold text-blue-800">
                Acid + Metal → Salt + Hydrogen
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-gray-900">
                Acid + Carbonate
              </h3>
              <p className="mt-3 rounded-xl bg-blue-50 p-4 font-semibold text-blue-800">
                Acid + Carbonate → Salt + Water + Carbon Dioxide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Facts */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Important Facts
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {importantFacts.map((fact, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                ✓
              </div>

              <p className="leading-6 text-gray-700">{fact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* pH Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-10">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Understanding the pH Scale
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-gray-600">
              The pH scale is used to indicate how acidic or basic a
              substance is.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-red-50 p-6 text-center">
                <div className="text-3xl">🍋</div>
                <h3 className="mt-3 font-bold text-red-700">
                  Acidic
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  pH less than 7
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <div className="text-3xl">💧</div>
                <h3 className="mt-3 font-bold text-green-700">
                  Neutral
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  pH equal to 7
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <div className="text-3xl">🧼</div>
                <h3 className="mt-3 font-bold text-blue-700">
                  Basic
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  pH greater than 7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white">
            Practice Chemistry
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Test your understanding of acids, bases and salts with practice
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