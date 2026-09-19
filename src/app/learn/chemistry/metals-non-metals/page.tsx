import Link from "next/link";

const properties = [
  {
    title: "Physical Properties",
    icon: "🔩",
    points: [
      "Metals are generally hard and strong.",
      "Most metals have a shiny surface called lustre.",
      "Metals are generally malleable and ductile.",
      "Metals are good conductors of heat and electricity.",
      "Non-metals generally have different physical properties.",
    ],
  },
  {
    title: "Chemical Properties",
    icon: "🧪",
    points: [
      "Metals generally react with oxygen to form metal oxides.",
      "Some metals react with water.",
      "Metals can react with acids and release hydrogen gas.",
      "Non-metals generally form acidic or neutral oxides.",
      "Reactivity differs from one element to another.",
    ],
  },
];

const reactions = [
  {
    title: "Reaction with Oxygen",
    formula: "Metal + Oxygen → Metal Oxide",
    example: "2Mg + O₂ → 2MgO",
    explanation:
      "Magnesium burns in oxygen and forms magnesium oxide.",
  },
  {
    title: "Reaction with Water",
    formula: "Metal + Water → Metal Hydroxide + Hydrogen",
    example: "2Na + 2H₂O → 2NaOH + H₂",
    explanation:
      "Highly reactive metals such as sodium react rapidly with water.",
  },
  {
    title: "Reaction with Acids",
    formula: "Metal + Acid → Salt + Hydrogen",
    example: "Zn + 2HCl → ZnCl₂ + H₂",
    explanation:
      "Many metals react with dilute acids to produce a salt and hydrogen gas.",
  },
  {
    title: "Reaction with Salt Solution",
    formula: "More Reactive Metal + Salt → New Salt + Less Reactive Metal",
    example: "Zn + CuSO₄ → ZnSO₄ + Cu",
    explanation:
      "A more reactive metal can displace a less reactive metal from its salt solution.",
  },
];

const metalUses = [
  {
    name: "Iron",
    icon: "⚙️",
    use: "Buildings, bridges, machines and tools.",
  },
  {
    name: "Copper",
    icon: "🔌",
    use: "Electrical wires, motors and plumbing.",
  },
  {
    name: "Aluminium",
    icon: "✈️",
    use: "Aircraft, utensils, cans and construction.",
  },
  {
    name: "Gold",
    icon: "🪙",
    use: "Jewellery, electronics and decorative purposes.",
  },
  {
    name: "Zinc",
    icon: "🛡️",
    use: "Galvanising iron and making alloys.",
  },
  {
    name: "Silver",
    icon: "🥈",
    use: "Jewellery, electronics and electrical contacts.",
  },
];

const nonMetalUses = [
  {
    name: "Oxygen",
    icon: "🫁",
    use: "Respiration, medical oxygen and combustion.",
  },
  {
    name: "Nitrogen",
    icon: "🌱",
    use: "Fertilisers, food packaging and chemical industries.",
  },
  {
    name: "Carbon",
    icon: "✏️",
    use: "Graphite, fuels, steel production and many compounds.",
  },
  {
    name: "Chlorine",
    icon: "💧",
    use: "Water purification and manufacture of chemicals.",
  },
  {
    name: "Sulphur",
    icon: "🟡",
    use: "Sulphuric acid, fertilisers and medicines.",
  },
  {
    name: "Hydrogen",
    icon: "🚀",
    use: "Fuel, chemical industries and production of ammonia.",
  },
];

const reactivitySeries = [
  "Potassium (K)",
  "Sodium (Na)",
  "Calcium (Ca)",
  "Magnesium (Mg)",
  "Aluminium (Al)",
  "Zinc (Zn)",
  "Iron (Fe)",
  "Lead (Pb)",
  "Hydrogen (H)",
  "Copper (Cu)",
  "Mercury (Hg)",
  "Silver (Ag)",
  "Gold (Au)",
];

const differences = [
  {
    property: "Lustre",
    metals: "Generally lustrous",
    nonMetals: "Generally non-lustrous",
  },
  {
    property: "Malleability",
    metals: "Generally malleable",
    nonMetals: "Generally brittle when solid",
  },
  {
    property: "Ductility",
    metals: "Generally ductile",
    nonMetals: "Generally not ductile",
  },
  {
    property: "Conductivity",
    metals: "Good conductors",
    nonMetals: "Generally poor conductors",
  },
  {
    property: "Sound",
    metals: "Generally sonorous",
    nonMetals: "Generally non-sonorous",
  },
  {
    property: "State",
    metals: "Mostly solids",
    nonMetals: "Can be solids, liquids or gases",
  },
];

const importantFacts = [
  "Mercury is a metal that is liquid at room temperature.",
  "Bromine is a non-metal that is liquid at room temperature.",
  "Graphite is a form of carbon and can conduct electricity.",
  "Sodium and potassium are highly reactive metals.",
  "Gold and platinum are much less reactive than many other metals.",
  "Metals can form positive ions by losing electrons.",
  "Non-metals generally form negative ions by gaining electrons.",
  "Alloys are mixtures of metals or a metal with another element.",
];

export default function MetalsNonMetalsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
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
              🔩
            </div>

            <div>
              <p className="font-semibold uppercase tracking-wider text-blue-100">
                Chemistry
              </p>

              <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
                Metals & Non-Metals
              </h1>

              <p className="mt-3 max-w-3xl text-blue-50">
                Learn the physical and chemical properties, reactions,
                reactivity series, uses and important differences between
                metals and non-metals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-blue-900">
            What are Metals and Non-Metals?
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            Metals and non-metals are two important groups of elements.
            Metals generally have properties such as lustre, malleability,
            ductility and good electrical conductivity. Non-metals generally
            have different properties and include elements such as oxygen,
            nitrogen, sulphur and carbon.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Their different physical and chemical properties make them useful
            for different purposes in everyday life, industry, construction,
            medicine and technology.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Properties</h2>

        <p className="mt-2 text-gray-600">
          Understand the major properties of metals and non-metals.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {properties.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>

              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-gray-600"
                  >
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Metals vs Non-Metals
            </h2>

            <p className="mt-3 text-gray-600">
              Important differences for quick revision.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Property</th>
                    <th className="px-5 py-4 font-semibold">Metals</th>
                    <th className="px-5 py-4 font-semibold">Non-Metals</th>
                  </tr>
                </thead>

                <tbody>
                  {differences.map((item, index) => (
                    <tr
                      key={item.property}
                      className={
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                      }
                    >
                      <td className="px-5 py-4 font-semibold text-gray-900">
                        {item.property}
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {item.metals}
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {item.nonMetals}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">
          Important Chemical Reactions
        </h2>

        <p className="mt-2 text-gray-600">
          Remember these common reactions for exams and practice.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reactions.map((reaction) => (
            <div
              key={reaction.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {reaction.title}
              </h3>

              <div className="mt-5 rounded-xl bg-gray-900 p-4">
                <p className="text-sm font-medium text-gray-300">
                  General reaction
                </p>

                <p className="mt-2 overflow-x-auto font-mono text-sm text-white">
                  {reaction.formula}
                </p>
              </div>

              <div className="mt-4 rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-900">
                  Example
                </p>

                <p className="mt-2 overflow-x-auto font-mono text-sm text-blue-800">
                  {reaction.example}
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {reaction.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Reactivity Series
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              The reactivity series arranges metals approximately from the
              most reactive to the least reactive.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
            {reactivitySeries.map((metal, index) => (
              <div
                key={metal}
                className="flex items-center justify-between border-b border-gray-100 px-5 py-4 last:border-b-0"
              >
                <span className="font-semibold text-gray-800">
                  {index + 1}. {metal}
                </span>

                <span className="text-sm text-blue-600">
                  {index < 4
                    ? "Highly reactive"
                    : index < 8
                      ? "Moderately reactive"
                      : "Less reactive"}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-center font-semibold text-gray-800">
              More reactive
              <span className="mx-3 text-blue-600">→</span>
              Less reactive
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Uses of Metals
          </h2>

          <p className="mt-2 text-gray-600">
            Common metals and their applications.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metalUses.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-4 text-xl font-bold">
                {item.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.use}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Uses of Non-Metals
            </h2>

            <p className="mt-2 text-gray-600">
              Important non-metals and their applications.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nonMetalUses.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-4 text-xl font-bold">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-yellow-100 bg-yellow-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            ⭐ Important Facts
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {importantFacts.map((fact) => (
              <div
                key={fact}
                className="flex gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="text-yellow-500">●</span>
                <p className="text-sm leading-6 text-gray-700">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white">
            Practice Chemistry
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Test your knowledge of metals, non-metals, reactions and the
            reactivity series with practice questions.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
          >
            Start Practice →
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <p className="font-semibold text-white">
            Rishi Infotech Learning Hub
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Learn Chemistry, Physics, Mathematics and more in one place.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
