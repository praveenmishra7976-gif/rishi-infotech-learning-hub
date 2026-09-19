import Link from "next/link";

const groups = [
  {
    group: "Group 1",
    name: "Alkali Metals",
    elements: "Li, Na, K, Rb, Cs, Fr",
    description: "Highly reactive metals with one valence electron.",
  },
  {
    group: "Group 2",
    name: "Alkaline Earth Metals",
    elements: "Be, Mg, Ca, Sr, Ba, Ra",
    description: "Reactive metals that generally form +2 ions.",
  },
  {
    group: "Groups 3–12",
    name: "Transition Metals",
    elements: "Sc to Zn and related elements",
    description: "Metals with variable oxidation states and useful properties.",
  },
  {
    group: "Group 17",
    name: "Halogens",
    elements: "F, Cl, Br, I, At, Ts",
    description: "Reactive non-metals that commonly form -1 ions.",
  },
  {
    group: "Group 18",
    name: "Noble Gases",
    elements: "He, Ne, Ar, Kr, Xe, Rn, Og",
    description: "Very unreactive gases with stable outer electron shells.",
  },
];

const elements = [
  { number: 1, symbol: "H", name: "Hydrogen", category: "Non-metal" },
  { number: 2, symbol: "He", name: "Helium", category: "Noble Gas" },
  { number: 3, symbol: "Li", name: "Lithium", category: "Alkali Metal" },
  { number: 4, symbol: "Be", name: "Beryllium", category: "Alkaline Earth" },
  { number: 5, symbol: "B", name: "Boron", category: "Metalloid" },
  { number: 6, symbol: "C", name: "Carbon", category: "Non-metal" },
  { number: 7, symbol: "N", name: "Nitrogen", category: "Non-metal" },
  { number: 8, symbol: "O", name: "Oxygen", category: "Non-metal" },
  { number: 9, symbol: "F", name: "Fluorine", category: "Halogen" },
  { number: 10, symbol: "Ne", name: "Neon", category: "Noble Gas" },
  { number: 11, symbol: "Na", name: "Sodium", category: "Alkali Metal" },
  { number: 12, symbol: "Mg", name: "Magnesium", category: "Alkaline Earth" },
  { number: 13, symbol: "Al", name: "Aluminium", category: "Post-transition Metal" },
  { number: 14, symbol: "Si", name: "Silicon", category: "Metalloid" },
  { number: 15, symbol: "P", name: "Phosphorus", category: "Non-metal" },
  { number: 16, symbol: "S", name: "Sulfur", category: "Non-metal" },
  { number: 17, symbol: "Cl", name: "Chlorine", category: "Halogen" },
  { number: 18, symbol: "Ar", name: "Argon", category: "Noble Gas" },
  { number: 19, symbol: "K", name: "Potassium", category: "Alkali Metal" },
  { number: 20, symbol: "Ca", name: "Calcium", category: "Alkaline Earth" },
  { number: 21, symbol: "Sc", name: "Scandium", category: "Transition Metal" },
  { number: 22, symbol: "Ti", name: "Titanium", category: "Transition Metal" },
  { number: 23, symbol: "V", name: "Vanadium", category: "Transition Metal" },
  { number: 24, symbol: "Cr", name: "Chromium", category: "Transition Metal" },
  { number: 25, symbol: "Mn", name: "Manganese", category: "Transition Metal" },
  { number: 26, symbol: "Fe", name: "Iron", category: "Transition Metal" },
  { number: 27, symbol: "Co", name: "Cobalt", category: "Transition Metal" },
  { number: 28, symbol: "Ni", name: "Nickel", category: "Transition Metal" },
  { number: 29, symbol: "Cu", name: "Copper", category: "Transition Metal" },
  { number: 30, symbol: "Zn", name: "Zinc", category: "Transition Metal" },
];

const facts = [
  "The periodic table arranges elements according to increasing atomic number.",
  "Elements in the same group often have similar chemical properties.",
  "A period is a horizontal row in the periodic table.",
  "A group is a vertical column in the periodic table.",
  "There are 7 periods and 18 groups in the modern periodic table.",
  "Metals are mainly found on the left and centre of the table.",
  "Non-metals are mainly found on the right side.",
  "Hydrogen has atomic number 1.",
  "Helium has atomic number 2 and is a noble gas.",
  "The atomic number tells us the number of protons in an atom.",
];

const trends = [
  {
    title: "Atomic Radius",
    icon: "📏",
    description:
      "Atomic size generally decreases from left to right across a period and increases down a group.",
  },
  {
    title: "Ionisation Energy",
    icon: "⚡",
    description:
      "Ionisation energy generally increases across a period and decreases down a group.",
  },
  {
    title: "Electronegativity",
    icon: "🧲",
    description:
      "Electronegativity generally increases across a period and decreases down a group.",
  },
  {
    title: "Metallic Character",
    icon: "🔩",
    description:
      "Metallic character generally decreases across a period and increases down a group.",
  },
];

const periods = [
  {
    number: 1,
    elements: "H, He",
    description: "Contains only two elements.",
  },
  {
    number: 2,
    elements: "Li to Ne",
    description: "Contains eight elements.",
  },
  {
    number: 3,
    elements: "Na to Ar",
    description: "Contains eight elements.",
  },
  {
    number: 4,
    elements: "K to Kr",
    description: "Contains 18 elements including transition metals.",
  },
  {
    number: 5,
    elements: "Rb to Xe",
    description: "Contains 18 elements including transition metals.",
  },
  {
    number: 6,
    elements: "Cs to Rn",
    description: "Includes the lanthanides.",
  },
  {
    number: 7,
    elements: "Fr to Og",
    description: "Includes the actinides and many synthetic elements.",
  },
];

export default function PeriodicTablePage() {
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
              🧩
            </div>

            <div>
              <p className="font-semibold uppercase tracking-wider text-blue-100">
                Chemistry
              </p>

              <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
                Periodic Table
              </h1>

              <p className="mt-3 max-w-3xl text-blue-50">
                Learn about elements, atomic numbers, groups, periods,
                element categories and important periodic trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-blue-900">
            What is the Periodic Table?
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            The periodic table is a systematic arrangement of chemical
            elements according to their atomic numbers. Elements are placed
            in rows called periods and columns called groups.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            The arrangement helps us understand similarities between
            elements and predict their physical and chemical behaviour.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Periodic Table Basics
          </h2>

          <p className="mt-2 text-gray-600">
            Understand the basic structure before studying individual
            elements.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Atomic Number",
              icon: "🔢",
              text: "Number of protons present in the nucleus of an atom.",
            },
            {
              title: "Groups",
              icon: "⬇️",
              text: "Vertical columns containing elements with related properties.",
            },
            {
              title: "Periods",
              icon: "➡️",
              text: "Horizontal rows showing increasing atomic number.",
            },
            {
              title: "Element Symbol",
              icon: "🔤",
              text: "Short one- or two-letter representation of an element.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Important Element Groups
            </h2>

            <p className="mt-3 text-gray-600">
              Major families of elements in the periodic table.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <div
                key={group.group}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-blue-600">
                  {group.group}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {group.name}
                </h3>

                <div className="mt-4 rounded-xl bg-blue-50 p-4">
                  <p className="font-mono text-sm text-blue-800">
                    {group.elements}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Selected Elements
          </h2>

          <p className="mt-3 text-gray-600">
            A quick reference for the first 30 elements.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {elements.map((element) => (
            <div
              key={element.number}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-gray-400">
                  {element.number}
                </span>

                <span className="rounded-lg bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                  {element.category}
                </span>
              </div>

              <div className="mt-4 text-center">
                <div className="text-4xl font-extrabold text-blue-700">
                  {element.symbol}
                </div>

                <h3 className="mt-2 font-bold">
                  {element.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              The Seven Periods
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Periods are horizontal rows in the periodic table.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
            {periods.map((period) => (
              <div
                key={period.number}
                className="grid gap-3 border-b border-gray-100 p-5 last:border-b-0 sm:grid-cols-[100px_180px_1fr] sm:items-center"
              >
                <div className="font-bold text-blue-700">
                  Period {period.number}
                </div>

                <div className="font-mono text-sm font-semibold text-gray-800">
                  {period.elements}
                </div>

                <div className="text-sm text-gray-600">
                  {period.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Periodic Trends
          </h2>

          <p className="mt-3 text-gray-600">
            Important trends used to compare elements.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {trends.map((trend) => (
            <div
              key={trend.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {trend.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {trend.title}
                </h3>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                {trend.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Understanding an Element
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Every element has a unique atomic number. The atomic number
              identifies the number of protons in the nucleus. In a neutral
              atom, the number of electrons is equal to the number of
              protons.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-blue-50 p-5">
                <p className="text-sm font-semibold text-blue-700">
                  Atomic Number
                </p>
                <p className="mt-2 text-2xl font-bold">
                  Protons
                </p>
              </div>

              <div className="rounded-2xl bg-cyan-50 p-5">
                <p className="text-sm font-semibold text-cyan-700">
                  Neutral Atom
                </p>
                <p className="mt-2 text-2xl font-bold">
                  Protons = Electrons
                </p>
              </div>

              <div className="rounded-2xl bg-indigo-50 p-5">
                <p className="text-sm font-semibold text-indigo-700">
                  Mass Number
                </p>
                <p className="mt-2 text-2xl font-bold">
                  Protons + Neutrons
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-yellow-100 bg-yellow-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ⭐ Important Facts for Revision
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {facts.map((fact) => (
              <div
                key={fact}
                className="flex gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="mt-1 text-yellow-500">
                  ●
                </span>

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
            Test your knowledge of elements, groups, periods and periodic
            trends with practice questions.
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
