"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const topics = [
  {
    title: "Metals",
    icon: "🔩",
    description:
      "Metals are generally lustrous, malleable, ductile and good conductors of heat and electricity.",
    examples: "Iron, Copper, Aluminium, Gold",
  },
  {
    title: "Non-Metals",
    icon: "🧪",
    description:
      "Non-metals generally have properties different from metals and are usually poor conductors of heat and electricity.",
    examples: "Oxygen, Sulfur, Carbon, Chlorine",
  },
  {
    title: "Physical Properties",
    icon: "⚙️",
    description:
      "Metals and non-metals differ in lustre, hardness, malleability, ductility, conductivity and sonority.",
    examples: "Malleability, ductility, lustre",
  },
  {
    title: "Chemical Properties",
    icon: "⚗️",
    description:
      "Metals and non-metals participate in different chemical reactions and form different compounds.",
    examples: "Oxides, salts and reactions",
  },
  {
    title: "Reactivity Series",
    icon: "📈",
    description:
      "The reactivity series arranges metals according to their tendency to participate in chemical reactions.",
    examples: "K, Na, Ca, Mg, Al, Zn, Fe, Cu",
  },
  {
    title: "Uses",
    icon: "🏭",
    description:
      "Metals and non-metals are widely used in construction, electrical equipment, medicine, agriculture and industry.",
    examples: "Iron, copper, oxygen, nitrogen",
  },
];

const comparison = [
  {
    property: "Appearance",
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
    nonMetals: "Generally non-ductile",
  },
  {
    property: "Conductivity",
    metals: "Good conductors",
    nonMetals: "Generally poor conductors",
  },
  {
    property: "Sonority",
    metals: "Generally sonorous",
    nonMetals: "Generally non-sonorous",
  },
  {
    property: "State",
    metals: "Mostly solids",
    nonMetals: "Can be solid, liquid or gas",
  },
];

const reactions = [
  {
    title: "Metal + Oxygen",
    equation: "2Mg + O₂ → 2MgO",
    description:
      "Many metals react with oxygen to form metal oxides.",
  },
  {
    title: "Metal + Water",
    equation: "2Na + 2H₂O → 2NaOH + H₂",
    description:
      "Some reactive metals react with water and release hydrogen gas.",
  },
  {
    title: "Metal + Acid",
    equation: "Zn + 2HCl → ZnCl₂ + H₂",
    description:
      "Many metals above hydrogen in the reactivity series react with dilute acids to produce hydrogen.",
  },
  {
    title: "Metal + Salt Solution",
    equation: "Zn + CuSO₄ → ZnSO₄ + Cu",
    description:
      "A more reactive metal can displace a less reactive metal from its salt solution.",
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

const uses = [
  {
    name: "Iron",
    formula: "Fe",
    use: "Construction, machinery and tools",
    icon: "🏗️",
  },
  {
    name: "Copper",
    formula: "Cu",
    use: "Electrical wires and equipment",
    icon: "🔌",
  },
  {
    name: "Aluminium",
    formula: "Al",
    use: "Aircraft, utensils and packaging",
    icon: "✈️",
  },
  {
    name: "Oxygen",
    formula: "O₂",
    use: "Respiration and medical applications",
    icon: "🫁",
  },
  {
    name: "Nitrogen",
    formula: "N₂",
    use: "Fertilizers and industrial applications",
    icon: "🌱",
  },
  {
    name: "Chlorine",
    formula: "Cl₂",
    use: "Water treatment and chemical industry",
    icon: "💧",
  },
];

const keyPoints = [
  "Metals are generally good conductors of heat and electricity.",
  "Malleability is the ability to be beaten into thin sheets.",
  "Ductility is the ability to be drawn into thin wires.",
  "Metals generally form positive ions called cations.",
  "Non-metals generally form negative ions called anions.",
  "Metal oxides are generally basic, although some are amphoteric.",
  "Non-metal oxides are generally acidic or neutral.",
  "More reactive metals can displace less reactive metals from their compounds.",
  "Gold and silver are among the least reactive metals.",
  "Hydrogen is included in the reactivity series for comparison.",
];

export default function MetalsAndNonMetalsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-slate-700 via-blue-700 to-cyan-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">

          <Link
            href="/learn/chemistry"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Chemistry
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Metals and Non-Metals
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn the physical and chemical properties of metals and
              non-metals, reactivity series, important reactions and
              everyday applications.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center">
              <FlaskConical
                className="text-blue-600"
                size={32}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Introduction
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Elements can be broadly classified as metals and non-metals
                based on their physical and chemical properties. Metals such
                as iron, copper and aluminium are important in construction
                and technology, while non-metals such as oxygen, nitrogen and
                chlorine are essential in life and industry.
              </p>

              <div className="mt-6 grid md:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-sm font-black text-blue-600">
                    Metals
                  </p>
                  <p className="mt-2 text-gray-700">
                    Usually good conductors and malleable.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
                  <p className="text-sm font-black text-gray-700">
                    Metalloids
                  </p>
                  <p className="mt-2 text-gray-700">
                    Show properties of both groups.
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                  <p className="text-sm font-black text-cyan-600">
                    Non-Metals
                  </p>
                  <p className="mt-2 text-gray-700">
                    Generally poor conductors.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-blue-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Concepts
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the key concepts of metals and non-metals.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => (

            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-4 rounded-2xl bg-gray-50 p-4">

                <p className="text-xs uppercase tracking-wide font-black text-gray-500">
                  Examples
                </p>

                <p className="mt-2 font-bold text-blue-600">
                  {topic.examples}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* COMPARISON */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <span className="text-3xl">
              ⚖️
            </span>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Metals vs Non-Metals
              </h2>

              <p className="text-gray-500 mt-1">
                Important differences for quick revision.
              </p>

            </div>

          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100">

            <table className="w-full min-w-[700px] bg-white">

              <thead>

                <tr className="bg-blue-50">

                  <th className="text-left p-4 font-black text-blue-800">
                    Property
                  </th>

                  <th className="text-left p-4 font-black text-blue-800">
                    Metals
                  </th>

                  <th className="text-left p-4 font-black text-blue-800">
                    Non-Metals
                  </th>

                </tr>

              </thead>

              <tbody>

                {comparison.map((item) => (

                  <tr
                    key={item.property}
                    className="border-t border-gray-100"
                  >

                    <td className="p-4 font-bold text-gray-900">
                      {item.property}
                    </td>

                    <td className="p-4 text-blue-700 font-semibold">
                      {item.metals}
                    </td>

                    <td className="p-4 text-cyan-700 font-semibold">
                      {item.nonMetals}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* REACTIVITY SERIES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center">
              <span className="text-3xl">
                📈
              </span>
            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Reactivity Series
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The reactivity series arranges metals from more reactive to
                less reactive. A metal higher in the series can generally
                displace a less reactive metal from its salt solution.
              </p>

              <div className="mt-8 space-y-3">

                {reactivitySeries.map((metal, index) => (

                  <div
                    key={metal}
                    className="flex items-center gap-4"
                  >

                    <span className="w-9 h-9 shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                      {index + 1}
                    </span>

                    <div className="flex-1 rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">

                      <div className="flex items-center justify-between gap-3">

                        <span className="font-bold text-gray-900">
                          {metal}
                        </span>

                        <span className="text-xs font-black text-gray-500">
                          {index < 4
                            ? "Highly Reactive"
                            : index < 8
                              ? "Reactive"
                              : index < 11
                                ? "Less Reactive"
                                : "Least Reactive"}
                        </span>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CHEMICAL REACTIONS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <FlaskConical
              className="text-blue-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Chemical Reactions
              </h2>

              <p className="text-gray-500 mt-1">
                Common reactions involving metals.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {reactions.map((reaction) => (

              <div
                key={reaction.title}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-7"
              >

                <h3 className="text-xl font-black text-gray-900">
                  {reaction.title}
                </h3>

                <div className="mt-5 rounded-2xl bg-gray-900 text-white p-5 overflow-x-auto">

                  <p className="text-lg md:text-xl font-black whitespace-nowrap">
                    {reaction.equation}
                  </p>

                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {reaction.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* USES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <span className="text-3xl">
            🏭
          </span>

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Elements and Their Uses
            </h2>

            <p className="text-gray-500 mt-1">
              Examples of metals and non-metals used in everyday life.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {uses.map((item) => (

            <div
              key={item.name}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="flex items-start justify-between">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                <span className="text-sm font-black bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full">
                  {item.formula}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {item.name}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.use}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* IMPORTANT POINTS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
                <Trophy size={30} />
              </div>

              <div className="flex-1">

                <h2 className="text-3xl md:text-4xl font-black">
                  Important Points for Exams
                </h2>

                <div className="mt-7 grid sm:grid-cols-2 gap-4">

                  {keyPoints.map((point, index) => (

                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-white/10 border border-white/10 p-4"
                    >

                      <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-blue-700 flex items-center justify-center font-black">
                        {index + 1}
                      </span>

                      <p className="text-white/90 leading-relaxed">
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-yellow-50 flex items-center justify-center">
              <Lightbulb
                className="text-yellow-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Study Tip
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                Remember the physical properties first, then learn the
                reactivity series. Practise common displacement reactions and
                compare metals with non-metals using a simple table.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">

          <div className="flex flex-col sm:flex-row gap-4 justify-between">

            <Link
              href="/learn/chemistry/acids-bases-and-salts"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry/carbon-and-its-compounds"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700"
            >
              Next: Carbon and Its Compounds
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
