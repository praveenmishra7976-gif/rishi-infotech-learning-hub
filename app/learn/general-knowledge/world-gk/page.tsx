"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Globe2,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const topics = [
  {
    title: "Countries & Capitals",
    description:
      "Learn important countries and their capital cities from around the world.",
    icon: "🌍",
  },
  {
    title: "Currencies",
    description:
      "Learn major world currencies and the countries that use them.",
    icon: "💰",
  },
  {
    title: "Continents",
    description:
      "Understand the seven continents and their important geographical facts.",
    icon: "🗺️",
  },
  {
    title: "Oceans & Seas",
    description:
      "Learn about major oceans, seas and important water bodies of the world.",
    icon: "🌊",
  },
  {
    title: "World Organizations",
    description:
      "Learn about organizations such as the UN, WHO, UNESCO and IMF.",
    icon: "🏛️",
  },
  {
    title: "World Records",
    description:
      "Explore interesting records related to geography, science, people and places.",
    icon: "🏆",
  },
];

const quickFacts = [
  {
    question: "Which is the largest continent?",
    answer: "Asia",
  },
  {
    question: "Which is the largest ocean?",
    answer: "Pacific Ocean",
  },
  {
    question: "Which is the smallest continent?",
    answer: "Australia",
  },
  {
    question: "How many continents are there?",
    answer: "7",
  },
  {
    question: "How many oceans are commonly recognized?",
    answer: "5",
  },
  {
    question: "Where is the headquarters of the United Nations?",
    answer: "New York City, USA",
  },
];

const importantCountries = [
  "India",
  "United States",
  "United Kingdom",
  "China",
  "Japan",
  "Russia",
  "France",
  "Germany",
  "Australia",
  "Canada",
  "Brazil",
  "Egypt",
];

export default function WorldGKPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

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
              World GK
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Explore countries, capitals, currencies, continents,
              oceans, international organizations and important facts
              about the world.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen
              className="text-blue-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              6
            </p>

            <p className="text-gray-500">
              Main Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Globe2
              className="text-cyan-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              190+
            </p>

            <p className="text-gray-500">
              Countries
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy
              className="text-yellow-500"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              100+
            </p>

            <p className="text-gray-500">
              GK Facts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Sparkles
              className="text-purple-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              MCQ
            </p>

            <p className="text-gray-500">
              Practice
            </p>
          </div>

        </div>

      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Globe2
            className="text-blue-600"
            size={34}
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              World GK Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Explore important world general knowledge topics.
            </p>
          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => (

            <article
              key={topic.title}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl group-hover:bg-blue-100 transition">
                {topic.icon}
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900 group-hover:text-blue-600 transition">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold">
                Learn Topic
                <ArrowRight size={18} />
              </div>

            </article>

          ))}

        </div>

      </section>

      {/* IMPORTANT COUNTRIES */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3">

            <Globe2
              className="text-cyan-600"
              size={30}
            />

            <div>
              <h2 className="text-3xl font-black text-gray-900">
                Important Countries
              </h2>

              <p className="text-gray-500 mt-1">
                Countries frequently asked in GK examinations.
              </p>
            </div>

          </div>

          <div className="flex flex-wrap gap-3 mt-8">

            {importantCountries.map((country) => (

              <span
                key={country}
                className="px-5 py-3 rounded-full bg-blue-50 text-blue-700 font-bold hover:bg-blue-600 hover:text-white transition"
              >
                {country}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* QUICK FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Trophy
            className="text-yellow-500"
            size={32}
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Quick World GK Facts
            </h2>

            <p className="text-gray-500 mt-1">
              Revise important facts quickly.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {quickFacts.map((fact, index) => (

            <article
              key={fact.question}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >

              <div className="flex gap-4">

                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div>

                  <h3 className="font-bold text-gray-900">
                    {fact.question}
                  </h3>

                  <p className="mt-2 text-blue-600 font-black">
                    {fact.answer}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                How to Study World GK
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Start with continents and countries. Then learn capitals,
                currencies, oceans and important international organizations.
                Revise facts regularly and practice MCQs to improve your
                examination preparation.
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
              href="/learn/general-knowledge"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              All GK Categories
            </Link>

            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700"
            >
              All Subjects
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <Sparkles
            className="mx-auto text-cyan-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning World GK
          </h2>

          <p className="mt-3 text-gray-400">
            Explore more GK topics and continue your learning journey.
          </p>

        </div>

      </section>

    </main>
  );
}
