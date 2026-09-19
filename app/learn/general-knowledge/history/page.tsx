
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Crown,
  Landmark,
  Lightbulb,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const topics = [
  {
    title: "Ancient History",
    description:
      "Learn the Indus Valley Civilization, Vedic period, Mahajanapadas, Mauryan Empire, Gupta Empire and other ancient developments.",
    icon: "🏛️",
  },
  {
    title: "Medieval History",
    description:
      "Study major medieval kingdoms, the Delhi Sultanate, Mughal Empire, Bhakti movement and important rulers.",
    icon: "👑",
  },
  {
    title: "Modern History",
    description:
      "Learn about European arrival, British rule, social reforms, freedom movement and India's independence.",
    icon: "🇮🇳",
  },
  {
    title: "Indian Freedom Movement",
    description:
      "Understand major events, movements and personalities connected with India's struggle for independence.",
    icon: "✊",
  },
  {
    title: "Important Dynasties",
    description:
      "Explore important Indian dynasties, rulers, kingdoms and their contributions.",
    icon: "⚔️",
  },
  {
    title: "Important Events",
    description:
      "Revise important historical events, dates and developments for exams and general awareness.",
    icon: "📅",
  },
];

const quickFacts = [
  {
    question: "Which civilization is associated with Harappa and Mohenjo-daro?",
    answer: "Indus Valley Civilization",
  },
  {
    question: "Who founded the Mauryan Empire?",
    answer: "Chandragupta Maurya",
  },
  {
    question: "Who was the first Mughal emperor of India?",
    answer: "Babur",
  },
  {
    question: "Who founded the Indian National Congress?",
    answer: "A. O. Hume and Indian leaders",
  },
  {
    question: "When did India become independent?",
    answer: "15 August 1947",
  },
  {
    question: "Who is popularly known as the Father of the Nation in India?",
    answer: "Mahatma Gandhi",
  },
];

const importantPeriods = [
  "Indus Valley Civilization",
  "Vedic Period",
  "Mauryan Empire",
  "Gupta Empire",
  "Delhi Sultanate",
  "Mughal Empire",
  "British Rule",
  "Indian Freedom Movement",
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 text-white">
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
              History
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Explore India's ancient, medieval and modern history. Learn
              about civilizations, kingdoms, empires, important personalities,
              major events and the freedom movement.
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
              6
            </p>

            <p className="text-gray-500">
              Main Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Landmark className="text-amber-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              100+
            </p>

            <p className="text-gray-500">
              Historical Facts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <CalendarDays className="text-red-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              50+
            </p>

            <p className="text-gray-500">
              Important Events
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />

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
          <Landmark
            className="text-orange-600"
            size={34}
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              History Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Choose a topic and start learning.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-4xl group-hover:bg-orange-100 transition">
                  {topic.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Topic {index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900 group-hover:text-orange-600 transition">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-orange-600 font-black">
                Start Learning
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* IMPORTANT PERIODS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <CalendarDays
              className="text-red-600"
              size={32}
            />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Historical Periods
              </h2>

              <p className="text-gray-500 mt-1">
                Quick revision of major periods in Indian history.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {importantPeriods.map((period, index) => (
              <div
                key={period}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:bg-orange-50 hover:border-orange-200 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <h3 className="mt-4 font-black text-gray-900">
                  {period}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Crown
            className="text-amber-600"
            size={32}
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Quick History Facts
            </h2>

            <p className="text-gray-500 mt-1">
              Important facts for quick revision.
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
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {fact.question}
                  </h3>

                  <p className="mt-2 text-orange-600 font-black">
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
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                How to Study History
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Study history in chronological order. First understand the
                major periods, then learn important rulers, events, movements
                and dates. Connect events with their causes and effects instead
                of memorizing isolated facts.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Learn Timeline",
                  "Understand Events",
                  "Revise Important Dates",
                  "Practice MCQs",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="bg-white/10 border border-white/15 rounded-xl p-4"
                  >
                    <span className="font-black">
                      {index + 1}.
                    </span>{" "}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAM CTA */}

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <Users
            className="mx-auto text-orange-400"
            size={38}
          />

          <h2 className="mt-5 text-3xl md:text-5xl font-black">
            Build Strong History Knowledge
          </h2>

          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Learn important historical events and prepare yourself for school
            examinations and competitive exams.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/practice"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-7 py-4 rounded-xl font-black hover:bg-orange-700 transition"
            >
              Practice MCQs
              <Trophy size={19} />
            </Link>

            <Link
              href="/learn/general-knowledge"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-4 rounded-xl font-black hover:bg-white/20 transition"
            >
              All GK Topics
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <Sparkles
            className="mx-auto text-orange-400"
            size={32}
          />

          <p className="mt-3 text-gray-400">
            Rishi Infotech Learning Hub • Learn History • Learn Better
          </p>
        </div>
      </section>
    </main>
  );
}

