
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Globe2,
  Lightbulb,
  Sparkles,
  Wind,
  Droplets,
  TreePine,
} from "lucide-react";

const topics = [
  {
    title: "Air Pollution",
    icon: "🌫️",
    description:
      "Air pollution occurs when harmful gases, particles or other substances contaminate the atmosphere.",
    examples: "Smoke, particulate matter, carbon monoxide, nitrogen oxides",
  },
  {
    title: "Water Pollution",
    icon: "💧",
    description:
      "Water pollution occurs when harmful substances enter rivers, lakes, groundwater or other water bodies.",
    examples: "Sewage, industrial waste, chemicals, fertilizers",
  },
  {
    title: "Soil Pollution",
    icon: "🌱",
    description:
      "Soil pollution occurs when harmful chemicals or wastes contaminate the soil and affect its quality.",
    examples: "Pesticides, plastics, industrial waste, heavy metals",
  },
  {
    title: "Greenhouse Effect",
    icon: "🌍",
    description:
      "Certain gases in the atmosphere trap heat and help maintain Earth's temperature.",
    examples: "Carbon dioxide, methane, water vapour",
  },
  {
    title: "Global Warming",
    icon: "🌡️",
    description:
      "The long-term increase in Earth's average temperature is associated with increased greenhouse gas concentrations.",
    examples: "Rising temperatures, melting ice, changing climate patterns",
  },
  {
    title: "Ozone Layer",
    icon: "☀️",
    description:
      "The ozone layer in the stratosphere absorbs much of the Sun's harmful ultraviolet radiation.",
    examples: "Protection from excessive UV-B radiation",
  },
];

const pollutants = [
  {
    name: "Carbon Monoxide",
    formula: "CO",
    source: "Incomplete combustion of fuels",
    effect: "Reduces the blood's ability to carry oxygen.",
  },
  {
    name: "Sulfur Dioxide",
    formula: "SO₂",
    source: "Burning sulfur-containing fuels",
    effect: "Can irritate the respiratory system and contribute to acid rain.",
  },
  {
    name: "Nitrogen Oxides",
    formula: "NOₓ",
    source: "Vehicles and fuel combustion",
    effect: "Contribute to smog, respiratory problems and acid deposition.",
  },
  {
    name: "Particulate Matter",
    formula: "PM",
    source: "Dust, smoke, combustion and industrial activities",
    effect: "Fine particles can enter the respiratory system.",
  },
];

const pollutionControl = [
  {
    title: "Reduce Vehicle Emissions",
    icon: "🚗",
    points: [
      "Use public transport when possible.",
      "Prefer walking or cycling for short distances.",
      "Maintain vehicles properly.",
    ],
  },
  {
    title: "Manage Waste",
    icon: "♻️",
    points: [
      "Reduce unnecessary waste.",
      "Reuse useful materials.",
      "Separate recyclable and non-recyclable waste.",
    ],
  },
  {
    title: "Protect Water",
    icon: "🚰",
    points: [
      "Do not dump waste into water bodies.",
      "Treat sewage and industrial wastewater.",
      "Use chemicals and fertilizers responsibly.",
    ],
  },
  {
    title: "Protect Soil",
    icon: "🌾",
    points: [
      "Reduce excessive use of chemical inputs.",
      "Dispose of hazardous waste properly.",
      "Promote responsible agricultural practices.",
    ],
  },
];

const keyPoints = [
  "Air pollution is caused by harmful gases, particles and other contaminants in the atmosphere.",
  "Water pollution can result from sewage, industrial waste, chemicals and agricultural runoff.",
  "Soil pollution can reduce soil quality and affect plants and organisms.",
  "Greenhouse gases absorb and re-emit infrared radiation, contributing to the greenhouse effect.",
  "Increasing greenhouse gas concentrations are a major driver of recent global warming.",
  "The ozone layer absorbs a large portion of harmful ultraviolet radiation from the Sun.",
  "Acid rain is mainly associated with sulfur dioxide and nitrogen oxides reacting through atmospheric processes.",
  "The 3Rs of waste management are Reduce, Reuse and Recycle.",
  "Planting and protecting trees can support healthier ecosystems and help absorb carbon dioxide.",
  "Environmental protection requires responsible use of resources and proper waste management.",
];

export default function EnvironmentalChemistryPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-500 text-white">

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
              Environmental Chemistry
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Understand air, water and soil pollution, greenhouse gases,
              global warming, the ozone layer, acid rain and ways to protect
              our environment.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-green-50 flex items-center justify-center">
              <Globe2
                className="text-green-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                What is Environmental Chemistry?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Environmental chemistry studies chemical processes occurring
                in air, water and soil and examines how natural activities
                and human activities affect the environment.
              </p>

              <div className="mt-7 grid sm:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-sky-50 border border-sky-100 p-5">
                  <Wind className="text-sky-600" size={26} />
                  <p className="mt-3 font-black text-gray-900">
                    Air
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <Droplets className="text-blue-600" size={26} />
                  <p className="mt-3 font-black text-gray-900">
                    Water
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 border border-green-100 p-5">
                  <TreePine className="text-green-600" size={26} />
                  <p className="mt-3 font-black text-gray-900">
                    Soil & Ecosystems
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
            className="text-green-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Major Environmental Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Important concepts for understanding environmental chemistry.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => (

            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-4xl">
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

                <p className="mt-2 font-bold text-green-700">
                  {topic.examples}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* AIR POLLUTION */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="rounded-3xl bg-sky-50 border border-sky-100 p-7 md:p-9">

              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                <Wind
                  className="text-sky-600"
                  size={30}
                />
              </div>

              <h2 className="mt-5 text-3xl font-black text-gray-900">
                Air Pollution
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Air pollution occurs when harmful substances enter the
                atmosphere at concentrations that can negatively affect
                people, animals, plants or the environment.
              </p>

              <div className="mt-6">

                <p className="font-black text-gray-900">
                  Common sources
                </p>

                <ul className="mt-3 space-y-2">

                  {[
                    "Vehicle exhaust",
                    "Industrial emissions",
                    "Burning of fuels and waste",
                    "Dust and construction activities",
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <CheckCircle2
                        className="text-sky-600 shrink-0 mt-0.5"
                        size={18}
                      />
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-100 p-7 md:p-9">

              <h3 className="text-2xl font-black text-gray-900">
                Common Air Pollutants
              </h3>

              <div className="mt-6 space-y-4">

                {pollutants.map((pollutant) => (

                  <div
                    key={pollutant.name}
                    className="rounded-2xl bg-white border border-gray-100 p-5"
                  >

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <h4 className="font-black text-gray-900">
                        {pollutant.name}
                      </h4>

                      <span className="rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-sm font-black">
                        {pollutant.formula}
                      </span>

                    </div>

                    <p className="mt-3 text-sm text-gray-500">
                      <strong>Source:</strong> {pollutant.source}
                    </p>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      <strong>Effect:</strong> {pollutant.effect}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WATER POLLUTION */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-blue-50 border border-blue-100 p-8 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center">
              <Droplets
                className="text-blue-600"
                size={30}
              />
            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Water Pollution
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                Water pollution happens when harmful substances enter water
                bodies and change their physical, chemical or biological
                quality. Untreated sewage, industrial discharge, agricultural
                runoff and waste can contribute to water pollution.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {[
                  ["Sewage", "🚽"],
                  ["Industrial Waste", "🏭"],
                  ["Agricultural Runoff", "🌾"],
                  ["Plastic Waste", "🧴"],
                ].map(([name, icon]) => (

                  <div
                    key={name}
                    className="rounded-2xl bg-white border border-blue-100 p-5"
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

              <div className="mt-7 rounded-2xl bg-white border border-blue-100 p-5">

                <p className="font-black text-blue-700">
                  Key idea
                </p>

                <p className="mt-2 text-gray-700 leading-relaxed">
                  Preventing pollutants from entering water sources is
                  important for protecting drinking water, aquatic life and
                  ecosystems.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* GREENHOUSE EFFECT */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="rounded-3xl bg-orange-50 border border-orange-100 p-7 md:p-9">

              <div className="text-4xl">
                🌍
              </div>

              <h2 className="mt-5 text-3xl font-black text-gray-900">
                Greenhouse Effect
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The greenhouse effect is a natural process in which certain
                gases in the atmosphere absorb and re-emit infrared
                radiation. It helps keep Earth warm enough for life.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Human activities have increased concentrations of several
                greenhouse gases, strengthening the warming effect.
              </p>

            </div>

            <div className="rounded-3xl bg-red-50 border border-red-100 p-7 md:p-9">

              <div className="text-4xl">
                🌡️
              </div>

              <h2 className="mt-5 text-3xl font-black text-gray-900">
                Global Warming
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Global warming refers to the long-term increase in Earth's
                average surface temperature. The increase in greenhouse gas
                concentrations caused by human activities is a major factor.
              </p>

              <div className="mt-6 rounded-2xl bg-white border border-red-100 p-5">

                <p className="font-black text-red-700">
                  Remember
                </p>

                <p className="mt-2 text-gray-700">
                  Greenhouse effect is a natural atmospheric process;
                  enhanced greenhouse warming contributes to climate change.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OZONE */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-indigo-50 border border-indigo-100 p-8 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center text-3xl">
              ☀️
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Ozone Layer
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                Ozone is a form of oxygen with three oxygen atoms, represented
                by O₃. A region of the stratosphere contains relatively high
                concentrations of ozone and absorbs much of the Sun's harmful
                ultraviolet radiation.
              </p>

              <div className="mt-7 grid md:grid-cols-3 gap-5">

                <div className="rounded-2xl bg-white border border-indigo-100 p-5">

                  <p className="text-sm font-black text-indigo-600">
                    Formula
                  </p>

                  <p className="mt-2 text-3xl font-black text-gray-900">
                    O₃
                  </p>

                </div>

                <div className="rounded-2xl bg-white border border-indigo-100 p-5">

                  <p className="text-sm font-black text-indigo-600">
                    Location
                  </p>

                  <p className="mt-2 text-xl font-black text-gray-900">
                    Stratosphere
                  </p>

                </div>

                <div className="rounded-2xl bg-white border border-indigo-100 p-5">

                  <p className="text-sm font-black text-indigo-600">
                    Main role
                  </p>

                  <p className="mt-2 text-xl font-black text-gray-900">
                    UV protection
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ACID RAIN */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid lg:grid-cols-2 gap-8">

            <div>

              <div className="text-4xl">
                🌧️
              </div>

              <h2 className="mt-5 text-3xl md:text-4xl font-black text-gray-900">
                Acid Rain
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Acid rain refers to precipitation that is more acidic than
                normal because atmospheric pollutants, especially sulfur
                dioxide and nitrogen oxides, undergo chemical reactions and
                form acidic substances.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-50 border border-gray-100 p-7">

              <h3 className="text-2xl font-black text-gray-900">
                Possible Effects
              </h3>

              <ul className="mt-5 space-y-3">

                {[
                  "Damage to vegetation",
                  "Acidification of lakes and streams",
                  "Damage to some buildings and monuments",
                  "Changes in soil chemistry",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle2
                      className="text-green-600 shrink-0 mt-0.5"
                      size={19}
                    />
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* WASTE MANAGEMENT */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-green-50 border border-green-100 p-8 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center text-3xl">
              ♻️
            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Waste Management — The 3Rs
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Responsible waste management helps conserve resources,
                reduce pollution and protect ecosystems.
              </p>

              <div className="mt-7 grid md:grid-cols-3 gap-5">

                {[
                  {
                    title: "Reduce",
                    icon: "⬇️",
                    text: "Use fewer unnecessary resources and avoid creating waste.",
                  },
                  {
                    title: "Reuse",
                    icon: "🔄",
                    text: "Use products and materials again instead of throwing them away.",
                  },
                  {
                    title: "Recycle",
                    icon: "♻️",
                    text: "Process suitable waste materials so they can be used again.",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="rounded-2xl bg-white border border-green-100 p-6"
                  >

                    <div className="text-3xl">
                      {item.icon}
                    </div>

                    <h3 className="mt-4 text-xl font-black text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* POLLUTION CONTROL */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <TreePine
              className="text-green-600"
              size={34}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                How Can We Protect the Environment?
              </h2>

              <p className="text-gray-500 mt-1">
                Simple actions can help reduce environmental pollution.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {pollutionControl.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-7"
              >

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-black text-gray-900">
                    {item.title}
                  </h3>

                </div>

                <ul className="mt-6 space-y-3">

                  {item.points.map((point) => (

                    <li
                      key={point}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2
                        className="text-green-600 shrink-0 mt-0.5"
                        size={19}
                      />
                      {point}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* KEY POINTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-emerald-700 to-green-600 rounded-3xl p-8 md:p-12 text-white">

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

                    <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-green-700 flex items-center justify-center font-black">
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
                Remember the chapter using the sequence:
                <strong> Pollution → Greenhouse Effect → Global Warming → Ozone → Acid Rain → Waste Management.</strong>
                Connect every concept with a real-life example to make
                revision easier.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* COMPLETION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 md:p-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <p className="text-sm font-bold text-white/80 uppercase tracking-wide">
                Chemistry Complete
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-black">
                You completed all Chemistry chapters! 🎉
              </h2>

              <p className="mt-3 text-white/90">
                Keep revising the concepts and practice questions regularly.
              </p>

            </div>

            <Link
              href="/learn/chemistry"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl font-black hover:bg-gray-100 transition"
            >
              Back to Chemistry
              <ArrowLeft size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
