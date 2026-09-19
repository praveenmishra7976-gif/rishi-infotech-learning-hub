import Link from "next/link";

const sections = [
  {
    title: "What are Carbon Compounds?",
    icon: "🧬",
    content:
      "Carbon compounds are compounds that contain carbon atoms. Carbon can form strong covalent bonds with many elements and can also bond with other carbon atoms.",
  },
  {
    title: "Properties of Carbon",
    icon: "⚛️",
    content:
      "Carbon shows tetravalency and catenation. These properties allow carbon to form a very large number of compounds.",
  },
  {
    title: "Hydrocarbons",
    icon: "🛢️",
    content:
      "Hydrocarbons are compounds made only of carbon and hydrogen. They include alkanes, alkenes and alkynes.",
  },
  {
    title: "Functional Groups",
    icon: "🔬",
    content:
      "Functional groups are atoms or groups of atoms that determine the characteristic chemical properties of organic compounds.",
  },
  {
    title: "Important Carbon Compounds",
    icon: "🧪",
    content:
      "Important carbon compounds include methane, ethane, ethanol, ethanoic acid and many other organic substances.",
  },
  {
    title: "Uses of Carbon Compounds",
    icon: "🏭",
    content:
      "Carbon compounds are widely used as fuels, solvents, medicines, plastics, polymers and materials used in everyday life.",
  },
];

const formulas = [
  ["Methane", "CH₄"],
  ["Ethane", "C₂H₆"],
  ["Ethene", "C₂H₄"],
  ["Ethyne", "C₂H₂"],
  ["Ethanol", "C₂H₅OH"],
  ["Ethanoic Acid", "CH₃COOH"],
];

const mcqs = [
  {
    q: "Which element is present in all organic compounds?",
    options: ["Oxygen", "Carbon", "Nitrogen", "Sulphur"],
    answer: "Carbon",
  },
  {
    q: "What is the valency of carbon?",
    options: ["1", "2", "3", "4"],
    answer: "4",
  },
  {
    q: "What is the formula of methane?",
    options: ["CH₄", "C₂H₆", "CO₂", "CH₃OH"],
    answer: "CH₄",
  },
  {
    q: "Which of these is an alkene?",
    options: ["Methane", "Ethane", "Ethene", "Ethyne"],
    answer: "Ethene",
  },
  {
    q: "What is the formula of ethanoic acid?",
    options: ["C₂H₅OH", "CH₃COOH", "CH₄", "C₂H₄"],
    answer: "CH₃COOH",
  },
];

export default function CarbonCompoundsPage() {
  return (
    <main className="min-h-screen bg-white">
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
              🧬
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Carbon Compounds
              </h1>

              <p className="mt-3 max-w-3xl text-blue-50">
                Learn carbon, hydrocarbons, functional groups, important
                organic compounds, formulas and their uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Carbon Compounds
        </h2>

        <p className="mt-2 max-w-3xl text-gray-600">
          Carbon is one of the most important elements in chemistry. Its
          ability to form strong bonds produces millions of different
          compounds.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {section.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {section.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Important Concepts
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">
                Tetravalency
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Carbon has four valence electrons and normally forms four
                covalent bonds with other atoms. This property is called
                tetravalency.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">
                Catenation
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                The ability of carbon atoms to form bonds with other carbon
                atoms and create chains, branches and rings is called
                catenation.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">
                Saturated Compounds
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Compounds containing only single carbon-carbon bonds are called
                saturated compounds. Alkanes are examples of saturated
                hydrocarbons.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">
                Unsaturated Compounds
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Compounds containing double or triple carbon-carbon bonds are
                called unsaturated compounds. Alkenes and alkynes are examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Important Formulas
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-2 bg-blue-600 px-5 py-4 font-bold text-white">
            <div>Compound</div>
            <div>Formula</div>
          </div>

          {formulas.map(([name, formula]) => (
            <div
              key={name}
              className="grid grid-cols-2 border-t border-gray-200 px-5 py-4"
            >
              <div className="font-medium text-gray-800">{name}</div>
              <div className="font-mono font-semibold text-blue-700">
                {formula}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Hydrocarbons
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🔹</div>
              <h3 className="mt-4 text-xl font-bold">Alkanes</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Hydrocarbons containing only single bonds. General formula:
                CₙH₂ₙ₊₂.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🔸</div>
              <h3 className="mt-4 text-xl font-bold">Alkenes</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Hydrocarbons containing at least one carbon-carbon double bond.
                General formula: CₙH₂ₙ.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🔺</div>
              <h3 className="mt-4 text-xl font-bold">Alkynes</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Hydrocarbons containing at least one carbon-carbon triple bond.
                General formula: CₙH₂ₙ₋₂.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Common Functional Groups
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Alcohol", "–OH"],
            ["Aldehyde", "–CHO"],
            ["Ketone", ">C=O"],
            ["Carboxylic Acid", "–COOH"],
          ].map(([name, group]) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
            >
              <div className="text-lg font-bold text-gray-900">{name}</div>
              <div className="mt-3 font-mono text-2xl font-bold text-blue-600">
                {group}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Quick Revision
          </h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <strong>Carbon:</strong> Atomic number 6 and valency 4.
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <strong>Catenation:</strong> Carbon can form long chains and
              rings with other carbon atoms.
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <strong>Alkanes:</strong> Saturated hydrocarbons.
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <strong>Alkenes:</strong> Hydrocarbons containing double bonds.
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <strong>Alkynes:</strong> Hydrocarbons containing triple bonds.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Carbon Compounds MCQs
        </h2>

        <div className="mt-8 space-y-6">
          {mcqs.map((mcq, index) => (
            <div
              key={mcq.q}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold text-gray-900">
                {index + 1}. {mcq.q}
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {mcq.options.map((option) => (
                  <div
                    key={option}
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700"
                  >
                    {option}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm font-semibold text-green-600">
                Answer: {mcq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white">
            Continue Learning Chemistry
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Explore more chemistry topics and strengthen your concepts.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/learn/chemistry"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
            >
              All Chemistry Topics
            </Link>

            <Link
              href="/learn/chemistry/chemical-reactions"
              className="rounded-xl border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Chemical Reactions →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}