
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Crown,
  Landmark,
  Lightbulb,
  ScrollText,
  Sparkles,
  Swords,
} from "lucide-react";

const periods = [
  {
    title: "Ancient India",
    icon: "🏛️",
    description:
      "Learn about the Indus Valley Civilization, Vedic period, Mahajanapadas, Mauryan Empire and Gupta Empire.",
    topics: [
      "Indus Valley Civilization",
      "Vedic Period",
      "Mahajanapadas",
      "Mauryan Empire",
      "Gupta Empire",
    ],
  },
  {
    title: "Medieval India",
    icon: "🏰",
    description:
      "Study major kingdoms, the Delhi Sultanate, Mughal Empire, Bhakti movement and regional powers.",
    topics: [
      "Delhi Sultanate",
      "Vijayanagara Empire",
      "Mughal Empire",
      "Bhakti Movement",
      "Maratha Power",
    ],
  },
  {
    title: "Modern India",
    icon: "🇮🇳",
    description:
      "Understand European expansion, British rule, the freedom movement and India's independence.",
    topics: [
      "British Expansion",
      "Revolt of 1857",
      "Indian National Congress",
      "Freedom Movement",
      "Independence",
    ],
  },
];

const importantFacts = [
  {
    title: "Indus Valley Civilization",
    fact: "Harappa and Mohenjo-daro were important urban centers of the civilization.",
  },
  {
    title: "Mauryan Empire",
    fact: "Chandragupta Maurya founded the Mauryan Empire, which later expanded greatly under Ashoka.",
  },
  {
    title: "Gupta Period",
    fact: "The Gupta period is often associated with major developments in science, mathematics, literature and art.",
  },
  {
    title: "Delhi Sultanate",
    fact: "The Delhi Sultanate consisted of several ruling dynasties that controlled large parts of northern India at different times.",
  },
  {
    title: "Mughal Empire",
    fact: "Babur founded the Mughal Empire after the First Battle of Panipat in 1526.",
  },
  {
    title: "Revolt of 1857",
    fact: "The uprising of 1857 was a major challenge to British rule and became an important event in Indian history.",
  },
  {
    title: "Indian National Congress",
    fact: "The Indian National Congress was founded in 1885 and later became a major organization in India's freedom movement.",
  },
  {
    title: "Independence",
    fact: "India became independent from British rule on 15 August 1947.",
  },
];

const timeline = [
  ["c. 2500 BCE", "Indus Valley Civilization", "🏺"],
  ["c. 1500 BCE", "Vedic Period", "📜"],
  ["322 BCE", "Mauryan Empire", "👑"],
  ["c. 320 CE", "Gupta Empire", "🏛️"],
  ["1206", "Delhi Sultanate begins", "🏰"],
  ["1526", "Mughal Empire begins", "⚔️"],
  ["1757", "Battle of Plassey", "🛡️"],
  ["1857", "Revolt of 1857", "🔥"],
  ["1885", "Indian National Congress founded", "🇮🇳"],
  ["1947", "Indian Independence", "🎉"],
];

export default function IndianHistoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-orange-700 via-amber-600 to-red-500 text-white">

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
              Indian History
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Explore India's journey from ancient civilizations to the
              freedom struggle and independence through important events,
              empires, movements and personalities.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-orange-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              3
            </p>

            <p className="text-gray-500">
              Major Periods
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Landmark className="text-amber-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              10+
            </p>

            <p className="text-gray-500">
              Key Eras
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <ScrollText className="text-red-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              20+
            </p>

            <p className="text-gray-500">
              Important Events
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Crown className="text-yellow-500" size={28} />

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

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center">
              <Landmark
                className="text-orange-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Why Study Indian History?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                Indian history helps us understand the civilizations,
                kingdoms, cultures, social changes and political movements
                that shaped the Indian subcontinent. It is also an important
                part of many competitive examinations and school-level
                studies.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MAJOR PERIODS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-orange-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Major Periods of Indian History
            </h2>

            <p className="text-gray-500 mt-1">
              Start with these three broad periods.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {periods.map((period) => (

            <article
              key={period.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-4xl">
                {period.icon}
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {period.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {period.description}
              </p>

              <div className="mt-6 space-y-3">

                {period.topics.map((topic) => (

                  <div
                    key={topic}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <CheckCircle2
                      className="text-orange-600 shrink-0 mt-0.5"
                      size={18}
                    />
                    {topic}
                  </div>

                ))}

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* TIMELINE */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <ScrollText
              className="text-orange-600"
              size={34}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Timeline
              </h2>

              <p className="text-gray-500 mt-1">
                Remember these major dates and periods.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">

            {timeline.map(([date, event, icon]) => (

              <div
                key={date + event}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:bg-orange-50 hover:border-orange-200 transition"
              >

                <div className="text-3xl">
                  {icon}
                </div>

                <p className="mt-4 text-sm font-black text-orange-600">
                  {date}
                </p>

                <h3 className="mt-2 font-black text-gray-900 leading-snug">
                  {event}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* IMPORTANT FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Swords
            className="text-red-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important History Facts
            </h2>

            <p className="text-gray-500 mt-1">
              Quick revision points for students and competitive exams.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {importantFacts.map((item, index) => (

            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 shrink-0 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div>

                  <h3 className="text-xl font-black text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {item.fact}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                History Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Study history as a timeline. First understand the period,
                then remember important rulers, events, causes and results.
                Connecting events instead of memorizing isolated facts makes
                revision much easier.
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
            href="/learn/general-knowledge/indian-geography"
            className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-black hover:bg-orange-700 transition"
          >
            Next: Indian Geography
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}
