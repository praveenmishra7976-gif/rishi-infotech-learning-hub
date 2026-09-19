
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const topics = [
  {
    title: "Medicines",
    icon: "💊",
    description:
      "Chemicals used to prevent, diagnose, relieve or treat diseases and health problems.",
    examples: "Antibiotics, antacids, analgesics, antiseptics",
  },
  {
    title: "Soaps & Detergents",
    icon: "🧼",
    description:
      "Substances used for cleaning clothes, utensils, surfaces and the human body.",
    examples: "Soap, washing powder, liquid detergents",
  },
  {
    title: "Food Chemistry",
    icon: "🍎",
    description:
      "Chemistry helps us understand nutrients, preservatives, flavours, colours and food processing.",
    examples: "Proteins, carbohydrates, vitamins, preservatives",
  },
  {
    title: "Fertilizers",
    icon: "🌱",
    description:
      "Chemical substances supplied to plants or soil to provide essential nutrients for growth.",
    examples: "Urea, ammonium compounds, phosphate fertilizers",
  },
  {
    title: "Polymers",
    icon: "🧴",
    description:
      "Large molecules made from repeating smaller units called monomers.",
    examples: "Plastic, nylon, polyester, rubber",
  },
  {
    title: "Cosmetics",
    icon: "🧴",
    description:
      "Chemical formulations used for cleansing, protecting or improving the appearance of the body.",
    examples: "Creams, shampoos, lotions, perfumes",
  },
];

const medicines = [
  {
    title: "Analgesics",
    icon: "💊",
    description:
      "Medicines used to reduce or relieve pain.",
    examples: "Pain-relieving medicines",
  },
  {
    title: "Antacids",
    icon: "🫗",
    description:
      "Substances that help neutralize excess acid in the stomach.",
    examples: "Magnesium hydroxide, aluminium hydroxide",
  },
  {
    title: "Antibiotics",
    icon: "🦠",
    description:
      "Medicines used against certain bacterial infections.",
    examples: "Penicillin and other antibacterial medicines",
  },
  {
    title: "Antiseptics",
    icon: "🧴",
    description:
      "Substances applied to living tissues to reduce or prevent the growth of microorganisms.",
    examples: "Some iodine-based and alcohol-based preparations",
  },
];

const foodChemistry = [
  {
    title: "Carbohydrates",
    icon: "🍚",
    description:
      "Important energy-providing nutrients found in foods such as rice, bread, fruits and grains.",
  },
  {
    title: "Proteins",
    icon: "🥚",
    description:
      "Nutrients made of amino acids that are important for growth and repair of body tissues.",
  },
  {
    title: "Fats",
    icon: "🥜",
    description:
      "Energy-rich nutrients that also perform important structural and biological functions.",
  },
  {
    title: "Vitamins",
    icon: "🍊",
    description:
      "Organic micronutrients needed by the body in small amounts for normal functioning.",
  },
];

const dailyExamples = [
  {
    title: "Toothpaste",
    icon: "🪥",
    description:
      "Contains several chemical ingredients that help clean teeth and maintain oral hygiene.",
  },
  {
    title: "Shampoo",
    icon: "🧴",
    description:
      "Uses cleansing agents called surfactants to remove dirt and oils from hair.",
  },
  {
    title: "Baking Soda",
    icon: "🥣",
    description:
      "Sodium bicarbonate is used in cooking and in several household applications.",
  },
  {
    title: "Perfume",
    icon: "🌸",
    description:
      "Contains aromatic substances dissolved in a suitable solvent to produce fragrance.",
  },
  {
    title: "Disinfectants",
    icon: "🧽",
    description:
      "Chemical products used on suitable surfaces to reduce harmful microorganisms.",
  },
  {
    title: "Fertilizer",
    icon: "🌾",
    description:
      "Provides nutrients such as nitrogen, phosphorus and potassium needed by plants.",
  },
];

const keyPoints = [
  "Chemistry is involved in medicines, food, cleaning products, agriculture and cosmetics.",
  "Analgesics are used to relieve pain.",
  "Antacids help neutralize excess stomach acid.",
  "Antibiotics are used against certain bacterial infections.",
  "Antiseptics are used on living tissues to reduce microorganisms.",
  "Soaps and detergents contain substances that help remove dirt and grease.",
  "Fertilizers provide essential plant nutrients.",
  "Polymers are made from repeating monomer units.",
  "Food preservatives can help slow spoilage when used appropriately.",
  "Chemistry helps develop materials and products for everyday use.",
];

export default function ChemistryInEverydayLifePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-500 text-white">

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
              Chemistry in Everyday Life
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Discover how chemistry is connected with medicines, food,
              cleaning products, agriculture, cosmetics, polymers and many
              other things we use every day.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl">
              🧪
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Why Chemistry Matters in Daily Life
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Chemistry is not limited to a laboratory. The food we eat,
                medicines we use, soaps that clean our clothes, fertilizers
                that help crops grow and materials used in homes and
                technology all involve chemistry.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5">
                  <p className="text-sm font-black text-orange-700">
                    Health
                  </p>
                  <p className="mt-2 text-xl font-black text-gray-900">
                    Medicines
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50 border border-amber-100 p-5">
                  <p className="text-sm font-black text-amber-700">
                    Home
                  </p>
                  <p className="mt-2 text-xl font-black text-gray-900">
                    Cleaning
                  </p>
                </div>

                <div className="rounded-2xl bg-yellow-50 border border-yellow-100 p-5">
                  <p className="text-sm font-black text-yellow-700">
                    Agriculture
                  </p>
                  <p className="mt-2 text-xl font-black text-gray-900">
                    Fertilizers
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAIN TOPICS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-orange-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Chemistry Around Us
            </h2>

            <p className="text-gray-500 mt-1">
              Important applications of chemistry in everyday life.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => (

            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-4xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-5 rounded-2xl bg-gray-50 p-4">

                <p className="text-xs uppercase tracking-wide font-black text-gray-500">
                  Examples
                </p>

                <p className="mt-2 font-bold text-orange-700">
                  {topic.examples}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* MEDICINES */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <span className="text-3xl">
              💊
            </span>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Chemistry of Medicines
              </h2>

              <p className="text-gray-500 mt-1">
                Learn some common categories of medicines.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {medicines.map((medicine) => (

              <div
                key={medicine.title}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-6 hover:shadow-lg transition"
              >

                <div className="text-4xl">
                  {medicine.icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {medicine.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {medicine.description}
                </p>

                <div className="mt-5 rounded-2xl bg-white border border-gray-100 p-4">

                  <p className="text-xs uppercase font-black text-gray-500">
                    Examples
                  </p>

                  <p className="mt-2 text-sm font-bold text-orange-700">
                    {medicine.examples}
                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-100 p-5">

            <p className="font-bold text-amber-800">
              Important:
            </p>

            <p className="mt-2 text-amber-900 leading-relaxed">
              Medicines should be used responsibly and according to
              appropriate medical advice or product directions. Chemistry
              explains how medicines work, but it does not replace medical
              guidance.
            </p>

          </div>

        </div>

      </section>

      {/* SOAPS AND DETERGENTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="rounded-3xl bg-orange-50 border border-orange-100 p-7 md:p-9">

            <div className="text-4xl">
              🧼
            </div>

            <h2 className="mt-5 text-3xl font-black text-gray-900">
              Soaps
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Soap molecules have a part that interacts well with water and
              another part that interacts with oily substances. This helps
              soap loosen and remove greasy dirt during washing.
            </p>

            <div className="mt-6 rounded-2xl bg-white border border-orange-100 p-5">

              <p className="text-sm font-black text-orange-700">
                Key idea
              </p>

              <p className="mt-2 text-gray-700">
                Soap helps water interact with oily dirt so that the dirt
                can be carried away during washing.
              </p>

            </div>

          </div>

          <div className="rounded-3xl bg-yellow-50 border border-yellow-100 p-7 md:p-9">

            <div className="text-4xl">
              🫧
            </div>

            <h2 className="mt-5 text-3xl font-black text-gray-900">
              Detergents
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Detergents contain surfactants and other ingredients that help
              remove dirt and grease. Many synthetic detergents work well
              even in hard water.
            </p>

            <div className="mt-6 rounded-2xl bg-white border border-yellow-100 p-5">

              <p className="text-sm font-black text-yellow-700">
                Key idea
              </p>

              <p className="mt-2 text-gray-700">
                Detergents are widely used for washing clothes, utensils and
                household surfaces.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FOOD CHEMISTRY */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <span className="text-3xl">
              🍎
            </span>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Chemistry of Food
              </h2>

              <p className="text-gray-500 mt-1">
                Important chemical components of our food.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {foodChemistry.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-6 hover:bg-orange-50 hover:border-orange-100 transition"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="rounded-3xl bg-orange-50 border border-orange-100 p-7">

              <h3 className="text-2xl font-black text-gray-900">
                Food Preservatives
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Preservatives are substances used in appropriate amounts to
                help slow the spoilage of food and extend shelf life.
              </p>

            </div>

            <div className="rounded-3xl bg-amber-50 border border-amber-100 p-7">

              <h3 className="text-2xl font-black text-gray-900">
                Food Colours & Flavours
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Approved food additives may be used to improve appearance,
                taste or aroma when used according to applicable standards.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* AGRICULTURE */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-600 text-white p-8 md:p-12">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center text-3xl">
              🌱
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Chemistry in Agriculture
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Plants require essential nutrients for healthy growth.
                Fertilizers are chemical substances that supply nutrients
                such as nitrogen, phosphorus and potassium when needed.
              </p>

              <div className="mt-7 grid sm:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                  <p className="text-sm font-bold text-white/70">
                    N
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Nitrogen
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                  <p className="text-sm font-bold text-white/70">
                    P
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Phosphorus
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
                  <p className="text-sm font-bold text-white/70">
                    K
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Potassium
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* DAILY LIFE */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <span className="text-3xl">
              🏠
            </span>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Chemistry in Common Household Products
              </h2>

              <p className="text-gray-500 mt-1">
                Chemistry is present in many products around us.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {dailyExamples.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-6 hover:shadow-lg transition"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* POLYMERS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-purple-50 border border-purple-100 p-8 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center text-3xl">
              🧴
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Polymers in Everyday Life
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                Polymers are very large molecules formed from repeating
                structural units. Natural and synthetic polymers are used in
                many products because they can have useful properties such
                as strength, flexibility and durability.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {[
                  ["Plastic", "🛍️"],
                  ["Nylon", "🧵"],
                  ["Polyester", "👕"],
                  ["Rubber", "🛞"],
                ].map(([name, icon]) => (

                  <div
                    key={name}
                    className="rounded-2xl bg-white border border-purple-100 p-5"
                  >

                    <div className="text-3xl">
                      {icon}
                    </div>

                    <p className="mt-3 font-black text-gray-900">
                      {name}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-gradient-to-r from-orange-700 to-amber-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <BookOpen size={30} />
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

                    <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-orange-700 flex items-center justify-center font-black">
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

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

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
                For quick revision, connect each topic with an everyday
                example: medicines with health, detergents with cleaning,
                fertilizers with agriculture, food additives with food and
                polymers with household materials. This makes the concepts
                easier to remember.
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
              href="/learn/chemistry/mixtures-and-solutions"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

            <Link
              href="/learn/chemistry/environmental-chemistry"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700"
            >
              Next: Environmental Chemistry
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
