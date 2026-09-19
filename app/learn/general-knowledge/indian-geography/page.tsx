
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CloudSun,
  Droplets,
  Globe2,
  Lightbulb,
  Map,
  Mountain,
  Sparkles,
  Waves,
} from "lucide-react";

const topics = [
  {
    title: "Physical Features",
    icon: "🏔️",
    description:
      "Study the Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains and Islands.",
    points: [
      "Himalayan Mountains",
      "Northern Plains",
      "Peninsular Plateau",
      "Indian Desert",
      "Coastal Plains and Islands",
    ],
  },
  {
    title: "Rivers of India",
    icon: "🌊",
    description:
      "Learn about major Himalayan and Peninsular rivers, their tributaries and important river systems.",
    points: [
      "Ganga River System",
      "Brahmaputra",
      "Indus River System",
      "Godavari",
      "Krishna and Cauvery",
    ],
  },
  {
    title: "Climate",
    icon: "🌦️",
    description:
      "Understand India's monsoon climate, seasons, rainfall patterns and factors affecting climate.",
    points: [
      "Southwest Monsoon",
      "Northeast Monsoon",
      "Summer Season",
      "Winter Season",
      "Rainfall Distribution",
    ],
  },
  {
    title: "Soils of India",
    icon: "🌱",
    description:
      "Study the major soil types of India and the crops commonly associated with them.",
    points: [
      "Alluvial Soil",
      "Black Soil",
      "Red and Yellow Soil",
      "Laterite Soil",
      "Desert and Mountain Soils",
    ],
  },
  {
    title: "Natural Vegetation",
    icon: "🌳",
    description:
      "Learn about forests, grasslands and other natural vegetation found across different regions.",
    points: [
      "Tropical Evergreen Forests",
      "Tropical Deciduous Forests",
      "Thorn Forests",
      "Mountain Vegetation",
      "Mangrove Forests",
    ],
  },
  {
    title: "Agriculture",
    icon: "🌾",
    description:
      "Understand major crops, agricultural seasons, irrigation and important farming regions.",
    points: [
      "Kharif Crops",
      "Rabi Crops",
      "Zaid Crops",
      "Food Crops",
      "Cash Crops",
    ],
  },
];

const majorRivers = [
  {
    name: "Ganga",
    type: "Himalayan River",
    importance: "One of India's most important river systems.",
    icon: "🌊",
  },
  {
    name: "Brahmaputra",
    type: "Himalayan River",
    importance: "A major river of northeastern India.",
    icon: "🏞️",
  },
  {
    name: "Indus",
    type: "Himalayan River",
    importance: "An important river system of the northwestern region.",
    icon: "💧",
  },
  {
    name: "Godavari",
    type: "Peninsular River",
    importance: "One of the major rivers of Peninsular India.",
    icon: "🌊",
  },
  {
    name: "Krishna",
    type: "Peninsular River",
    importance: "An important east-flowing river of southern India.",
    icon: "🏞️",
  },
  {
    name: "Narmada",
    type: "Peninsular River",
    importance: "A major west-flowing river of central India.",
    icon: "💧",
  },
];

const soils = [
  {
    name: "Alluvial Soil",
    color: "bg-yellow-50",
    description:
      "Widely distributed in the Northern Plains and important for agriculture.",
    crops: "Rice, wheat, sugarcane and pulses",
  },
  {
    name: "Black Soil",
    color: "bg-gray-100",
    description:
      "Common in parts of the Deccan Plateau and known for retaining moisture.",
    crops: "Cotton, soybean and some oilseeds",
  },
  {
    name: "Red and Yellow Soil",
    color: "bg-red-50",
    description:
      "Found over large areas of Peninsular India and develops from crystalline rocks.",
    crops: "Millets, pulses and groundnut",
  },
  {
    name: "Laterite Soil",
    color: "bg-orange-50",
    description:
      "Develops in areas of high rainfall and strong leaching.",
    crops: "Tea, coffee, cashew and some plantation crops",
  },
];

const agriculture = [
  {
    season: "Kharif",
    time: "Monsoon season",
    examples: "Rice, maize, cotton, soybean",
    icon: "🌧️",
  },
  {
    season: "Rabi",
    time: "Winter season",
    examples: "Wheat, gram, mustard, peas",
    icon: "❄️",
  },
  {
    season: "Zaid",
    time: "Between Rabi and Kharif",
    examples: "Watermelon, cucumber and some vegetables",
    icon: "☀️",
  },
];

const quickFacts = [
  "India has a highly varied physical landscape ranging from high mountains to coastal plains and islands.",
  "The Himalayas form a major mountain system along India's northern boundary.",
  "The Northern Plains are formed largely by the alluvial deposits of major river systems.",
  "The Peninsular Plateau is one of the oldest geological landforms of India.",
  "The Thar Desert lies mainly in the northwestern part of India.",
  "The Indian monsoon plays a major role in the country's climate and agriculture.",
  "The Ganga, Brahmaputra and Indus are major Himalayan river systems.",
  "The Godavari, Krishna, Cauvery and Narmada are important Peninsular rivers.",
  "India has diverse soil types because of differences in climate, rocks, relief and vegetation.",
  "Agriculture in India includes Kharif, Rabi and Zaid cropping seasons.",
];

export default function IndianGeographyPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">

          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to General Knowledge
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Indian Geography
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Explore India's physical features, rivers, climate, soils,
              natural vegetation, agriculture and geographical diversity.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Map className="text-blue-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              6
            </p>

            <p className="text-gray-500">
              Major Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Mountain className="text-cyan-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              6
            </p>

            <p className="text-gray-500">
              Physical Regions
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Waves className="text-teal-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              6+
            </p>

            <p className="text-gray-500">
              Major Rivers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-indigo-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              MCQ
            </p>

            <p className="text-gray-500">
              Practice
            </p>
          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center">
              <Globe2
                className="text-blue-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Understanding Indian Geography
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                Indian geography covers the physical landscape, climate,
                rivers, soils, vegetation, agriculture and human interaction
                with natural resources. India's large size and varied relief
                create major regional differences in climate and natural
                resources.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <Map
            className="text-blue-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Major Geography Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Build your foundation with these important areas.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => (

            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-6 space-y-3">

                {topic.points.map((point) => (

                  <div
                    key={point}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <CheckCircle2
                      className="text-blue-600 shrink-0 mt-0.5"
                      size={18}
                    />
                    {point}
                  </div>

                ))}

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* PHYSICAL FEATURES */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Mountain
              className="text-blue-600"
              size={34}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Major Physical Features of India
              </h2>

              <p className="text-gray-500 mt-1">
                India's physical landscape can be broadly divided into major
                geographical regions.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {[
              ["Himalayan Mountains", "🏔️", "Young fold mountains in the north."],
              ["Northern Plains", "🌾", "Extensive alluvial plains formed by major river systems."],
              ["Peninsular Plateau", "⛰️", "Ancient plateau region of Peninsular India."],
              ["Indian Desert", "🏜️", "Arid region mainly located in the northwest."],
              ["Coastal Plains", "🌴", "Narrow plains along the eastern and western coasts."],
              ["Islands", "🏝️", "Includes the Andaman and Nicobar and Lakshadweep island groups."],
            ].map(([title, icon, description]) => (

              <div
                key={title}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-6 hover:bg-blue-50 hover:border-blue-100 transition"
              >

                <div className="text-4xl">
                  {icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {title}
                </h3>

                <p className="mt-2 text-gray-600 leading-relaxed">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* RIVERS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Waves
            className="text-cyan-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Major Rivers of India
            </h2>

            <p className="text-gray-500 mt-1">
              Important river systems for geography and competitive exams.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {majorRivers.map((river) => (

            <div
              key={river.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >

              <div className="flex items-center justify-between gap-3">

                <div className="text-3xl">
                  {river.icon}
                </div>

                <span className="rounded-full bg-cyan-50 text-cyan-700 px-3 py-1 text-xs font-black">
                  {river.type}
                </span>

              </div>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                {river.name}
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                {river.importance}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CLIMATE */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="rounded-3xl bg-sky-50 border border-sky-100 p-8 md:p-10">

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center">
                <CloudSun
                  className="text-sky-600"
                  size={30}
                />
              </div>

              <div className="flex-1">

                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                  Indian Climate and Monsoon
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                  India has a diverse climate influenced by latitude,
                  altitude, relief, distance from the sea and seasonal
                  monsoon winds. The monsoon is particularly important
                  because rainfall strongly affects agriculture and water
                  availability.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                  {[
                    ["Winter", "❄️", "Cooler season"],
                    ["Summer", "☀️", "Hot weather season"],
                    ["Monsoon", "🌧️", "Major rainy season"],
                    ["Post-Monsoon", "🌤️", "Transition period"],
                  ].map(([title, icon, description]) => (

                    <div
                      key={title}
                      className="rounded-2xl bg-white border border-sky-100 p-5"
                    >

                      <div className="text-3xl">
                        {icon}
                      </div>

                      <h3 className="mt-3 font-black text-gray-900">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {description}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SOILS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Droplets
            className="text-green-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Major Soils of India
            </h2>

            <p className="text-gray-500 mt-1">
              Soil type influences agriculture and land use.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {soils.map((soil) => (

            <div
              key={soil.name}
              className={`rounded-3xl ${soil.color} border border-gray-100 p-7`}
            >

              <h3 className="text-2xl font-black text-gray-900">
                {soil.name}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {soil.description}
              </p>

              <div className="mt-5 rounded-2xl bg-white/80 p-4">

                <p className="text-xs uppercase tracking-wide font-black text-gray-500">
                  Common Crops
                </p>

                <p className="mt-2 font-bold text-green-700">
                  {soil.crops}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* AGRICULTURE */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <span className="text-4xl">
              🌾
            </span>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Agricultural Seasons
              </h2>

              <p className="text-gray-500 mt-1">
                Remember the three major cropping seasons.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {agriculture.map((item) => (

              <div
                key={item.season}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-7"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-2xl font-black text-gray-900">
                  {item.season}
                </h3>

                <p className="mt-2 font-bold text-blue-600">
                  {item.time}
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  <strong>Examples:</strong> {item.examples}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* QUICK FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <BookOpen size={30} />
            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black">
                Important Geography Facts
              </h2>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">

                {quickFacts.map((fact, index) => (

                  <div
                    key={fact}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 border border-white/10 p-4"
                  >

                    <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-blue-700 flex items-center justify-center font-black">
                      {index + 1}
                    </span>

                    <p className="text-white/90 leading-relaxed">
                      {fact}
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
                Geography Study Tip
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                Learn geography with maps whenever possible. Connect
                mountains with rivers, rivers with plains, soils with crops
                and climate with agriculture. These connections make facts
                easier to remember.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">

          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl font-black text-gray-700 hover:bg-gray-50 transition"
          >
            <ArrowLeft size={18} />
            Back to GK
          </Link>

          <Link
            href="/learn/general-knowledge/indian-polity"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-black hover:bg-blue-700 transition"
          >
            Next: Indian Polity
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}

