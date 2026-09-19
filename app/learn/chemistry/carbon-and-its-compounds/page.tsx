
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
    title: "Carbon",
    icon: "⚫",
    description:
      "Carbon is a versatile non-metal with atomic number 6. It forms a large number of compounds because of its tetravalency and ability to form chains.",
    examples: "C, Diamond, Graphite",
  },
  {
    title: "Tetravalency",
    icon: "4️⃣",
    description:
      "Carbon has four valence electrons and generally forms four covalent bonds with other atoms.",
    examples: "CH₄, CH₃Cl",
  },
  {
    title: "Catenation",
    icon: "🔗",
    description:
      "Catenation is the ability of carbon atoms to bond with one another and form long chains, branches and rings.",
    examples: "Chains, branches and rings",
  },
  {
    title: "Hydrocarbons",
    icon: "🧪",
    description:
      "Hydrocarbons are compounds made only of carbon and hydrogen. They may be saturated or unsaturated.",
    examples: "Methane, Ethene, Ethyne",
  },
  {
    title: "Functional Groups",
    icon: "⚗️",
    description:
      "Functional groups are atoms or groups of atoms that determine characteristic chemical properties of organic compounds.",
    examples: "–OH, –COOH, –CHO",
  },
  {
    title: "Homologous Series",
    icon: "📚",
    description:
      "A homologous series is a family of organic compounds having the same functional group and similar chemical properties.",
    examples: "Alkanes, alcohols, carboxylic acids",
  },
];

const compounds = [
  {
    name: "Methane",
    formula: "CH₄",
    type: "Alkane",
    use: "Fuel and natural gas",
    icon: "🔥",
  },
  {
    name: "Ethene",
    formula: "C₂H₄",
    type: "Alkene",
    use: "Manufacture of plastics",
    icon: "🏭",
  },
  {
    name: "Ethyne",
    formula: "C₂H₂",
    type: "Alkyne",
    use: "Welding applications",
    icon: "🔥",
  },
  {
    name: "Ethanol",
    formula: "C₂H₅OH",
    type: "Alcohol",
    use: "Solvent and industrial applications",
    icon: "🧴",
  },
  {
    name: "Ethanoic Acid",
    formula: "CH₃COOH",
    type: "Carboxylic Acid",
    use: "Present in vinegar",
    icon: "🥫",
  },
  {
    name: "Ethene",
    formula: "C₂H₄",
    type: "Unsaturated Hydrocarbon",
    use: "Polymer manufacturing",
    icon: "🔬",
  },
];

const reactions = [
  {
    title: "Combustion of Methane",
    equation: "CH₄ + 2O₂ → CO₂ + 2H₂O + Heat",
    description:
      "Carbon compounds generally burn in oxygen to produce carbon dioxide, water and heat.",
  },
  {
    title: "Oxidation of Ethanol",
    equation: "CH₃CH₂OH + 2[O] → CH₃COOH + H₂O",
    description:
      "Ethanol can be oxidised to ethanoic acid using suitable oxidising agents.",
  },
  {
    title: "Addition Reaction",
    equation: "C₂H₄ + H₂ → C₂H₆",
    description:
      "Unsaturated hydrocarbons can undergo addition reactions in the presence of suitable catalysts.",
  },
  {
    title: "Esterification",
    equation: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
    description:
      "Ethanoic acid reacts with ethanol in the presence of concentrated sulfuric acid to form an ester and water.",
  },
];

const functionalGroups = [
  {
    group: "–OH",
    name: "Alcohol",
    example: "Ethanol — C₂H₅OH",
  },
  {
    group: "–CHO",
    name: "Aldehyde",
    example: "Ethanal — CH₃CHO",
  },
  {
    group: "–COOH",
    name: "Carboxylic Acid",
    example: "Ethanoic acid — CH₃COOH",
  },
  {
    group: "–CO–",
    name: "Ketone",
    example: "Propanone — CH₃COCH₃",
  },
  {
    group: "–X",
    name: "Halo Group",
    example: "Chloroethane — C₂H₅Cl",
  },
  {
    group: "C=C",
    name: "Alkene",
    example: "Ethene — C₂H₄",
  },
];

const allotropes = [
  {
    name: "Diamond",
    icon: "💎",
    description:
      "Diamond has a strong three-dimensional carbon network. It is extremely hard and does not conduct electricity.",
  },
  {
    name: "Graphite",
    icon: "✏️",
    description:
      "Graphite has layers of carbon atoms and can conduct electricity. It is used in pencils and electrodes.",
  },
  {
    name: "Fullerenes",
    icon: "⚽",
    description:
      "Fullerenes are carbon structures that form closed cages, such as C₆₀.",
  },
];

const keyPoints = [
  "Carbon has atomic number 6.",
  "Carbon is tetravalent and generally forms four covalent bonds.",
  "Catenation is the ability of carbon to form bonds with other carbon atoms.",
  "Saturated hydrocarbons contain only single carbon-carbon bonds.",
  "Unsaturated hydrocarbons contain double or triple bonds.",
  "Alkanes are saturated hydrocarbons.",
  "Alkenes contain at least one carbon-carbon double bond.",
  "Alkynes contain at least one carbon-carbon triple bond.",
  "Ethanol contains the –OH functional group.",
  "Ethanoic acid contains the –COOH functional group.",
];

export default function CarbonAndItsCompoundsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 text-white">

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
              Carbon and Its Compounds
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn carbon's unique properties, covalent bonding,
              hydrocarbons, functional groups, homologous series,
              important reactions and useful carbon compounds.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <FlaskConical
                className="text-emerald-600"
                size={32}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Introduction
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Carbon is one of the most important elements in chemistry.
                It forms an enormous number of compounds because carbon atoms
                can bond with themselves and with many other elements.
                Compounds containing carbon form the basis of organic chemistry
                and are present in fuels, food, medicines, plastics and living
                organisms.
              </p>

              <div className="mt-6 grid md:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                  <p className="text-sm font-black text-emerald-600">
                    Atomic Number
                  </p>
                  <p className="mt-2 text-2xl font-black text-gray-900">
                    6
                  </p>
                </div>

                <div className="rounded-2xl bg-teal-50 border border-teal-100 p-5">
                  <p className="text-sm font-black text-teal-600">
                    Valency
                  </p>
                  <p className="mt-2 text-2xl font-black text-gray-900">
                    4
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                  <p className="text-sm font-black text-cyan-600">
                    Main Bond
                  </p>
                  <p className="mt-2 text-2xl font-black text-gray-900">
                    Covalent
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONCEPTS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-emerald-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Concepts
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the basic ideas behind carbon compounds.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => (

            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl">
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

                <p className="mt-2 font-bold text-emerald-600">
                  {topic.examples}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* ALLOTROPES */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <span className="text-3xl">
              💎
            </span>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Allotropes of Carbon
              </h2>

              <p className="text-gray-500 mt-1">
                Different structural forms of the same element.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {allotropes.map((item) => (

              <div
                key={item.name}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-7"
              >

                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-2xl font-black text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HYDROCARBONS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <span className="text-3xl">
            🧪
          </span>

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Carbon Compounds
            </h2>

            <p className="text-gray-500 mt-1">
              Common examples of organic compounds.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {compounds.map((item) => (

            <div
              key={`${item.name}-${item.formula}`}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                <span className="text-sm font-black bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full">
                  {item.formula}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {item.name}
              </h3>

              <p className="mt-2 text-sm font-bold text-emerald-600">
                {item.type}
              </p>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.use}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FUNCTIONAL GROUPS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <span className="text-3xl">
              ⚗️
            </span>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Functional Groups
              </h2>

              <p className="text-gray-500 mt-1">
                Important functional groups in organic chemistry.
              </p>

            </div>

          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100">

            <table className="w-full min-w-[700px] bg-white">

              <thead>

                <tr className="bg-emerald-50">

                  <th className="text-left p-4 font-black text-emerald-800">
                    Group
                  </th>

                  <th className="text-left p-4 font-black text-emerald-800">
                    Name
                  </th>

                  <th className="text-left p-4 font-black text-emerald-800">
                    Example
                  </th>

                </tr>

              </thead>

              <tbody>

                {functionalGroups.map((item) => (

                  <tr
                    key={item.group}
                    className="border-t border-gray-100"
                  >

                    <td className="p-4 text-xl font-black text-emerald-700">
                      {item.group}
                    </td>

                    <td className="p-4 font-bold text-gray-900">
                      {item.name}
                    </td>

                    <td className="p-4 text-gray-600">
                      {item.example}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* REACTIONS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <FlaskConical
            className="text-emerald-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Chemical Reactions
            </h2>

            <p className="text-gray-500 mt-1">
              Common reactions of carbon compounds.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {reactions.map((reaction) => (

            <div
              key={reaction.title}
              className="rounded-3xl bg-white border border-gray-100 shadow-sm p-7"
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

      </section>

      {/* KEY POINTS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-3xl p-8 md:p-12 text-white">

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

                      <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-emerald-700 flex items-center justify-center font-black">
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
                First learn tetravalency and catenation. Then practise
                identifying alkanes, alkenes, alkynes and functional groups.
                Finally, revise the important reactions of ethanol and
                ethanoic acid.
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
              href="/learn/chemistry/metals-and-non-metals"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry/states-of-matter"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700"
            >
              Next: States of Matter
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
