"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Globe2,
  Landmark,
  Trophy,
  Sparkles,
  Newspaper,
  Flag,
  Users,
  CalendarDays,
  Award,
} from "lucide-react";

const categories = [
  {
    id: "indian-gk",
    title: "Indian GK",
    description: "India, states, capitals, history, geography, polity and important facts.",
    icon: Landmark,
  },
  {
    id: "world-gk",
    title: "World GK",
    description: "Countries, capitals, currencies, continents, organizations and world facts.",
    icon: Globe2,
  },
  {
    id: "history",
    title: "History",
    description: "Ancient, medieval and modern history with important events and personalities.",
    icon: CalendarDays,
  },
  {
    id: "geography",
    title: "Geography",
    description: "Earth, rivers, mountains, oceans, states, countries and natural resources.",
    icon: Globe2,
  },
  {
    id: "indian-polity",
    title: "Indian Polity",
    description: "Constitution, Parliament, President, Prime Minister, Supreme Court and more.",
    icon: Flag,
  },
  {
    id: "science-gk",
    title: "Science GK",
    description: "Important general science facts from physics, chemistry, biology and technology.",
    icon: Brain,
  },
  {
    id: "sports-gk",
    title: "Sports GK",
    description: "Sports, tournaments, awards, records, players and important sporting events.",
    icon: Trophy,
  },
  {
    id: "awards-honours",
    title: "Awards & Honours",
    description: "Important national and international awards, prizes and honours.",
    icon: Award,
  },
  {
    id: "important-persons",
    title: "Important Persons",
    description: "Famous personalities, leaders, scientists, authors and other important people.",
    icon: Users,
  },
  {
    id: "current-affairs",
    title: "Current Affairs",
    description: "Important recent events and general awareness topics for students and exams.",
    icon: Newspaper,
  },
];

const quickFacts = [
  ["Capital of India", "New Delhi"],
  ["States in India", "28"],
  ["Union Territories", "8"],
  ["National Animal", "Bengal Tiger"],
  ["National Bird", "Indian Peacock"],
  ["National Flower", "Lotus"],
  ["Largest Continent", "Asia"],
  ["Largest Ocean", "Pacific Ocean"],
];

export default function GeneralKnowledgePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-xl font-bold hover:bg-white/25 transition"
          >
            ← Back to Learn
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              General Knowledge
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Improve your general awareness with Indian GK, world GK,
              history, geography, science, sports, awards and current affairs.
            </p>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-blue-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              GK Categories
            </h2>

            <p className="text-gray-500 mt-1">
              Choose a category and start learning.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                href={`/learn/general-knowledge/${category.id}`}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition">
                  <Icon
                    size={28}
                    className="text-blue-600 group-hover:text-white transition"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-blue-600">
                  {category.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {category.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-blue-600 font-bold">
                  Explore
                  <ArrowRight size={18} />
                </span>

              </Link>
            );
          })}

        </div>
      </section>

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">
            <Brain className="text-cyan-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Quick GK Facts
              </h2>

              <p className="text-gray-500 mt-1">
                Important facts for quick revision.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {quickFacts.map(([question, answer]) => (
              <div
                key={question}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-blue-50 hover:border-blue-200 transition"
              >
                <p className="text-sm font-bold text-gray-500">
                  {question}
                </p>

                <p className="mt-3 text-xl font-black text-blue-600">
                  {answer}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
              <Trophy size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                Prepare GK for Exams
              </h2>

              <p className="mt-4 text-white/90 text-lg leading-relaxed max-w-3xl">
                Strengthen your general awareness with important topics,
                quick facts and practice questions.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">

                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-black hover:bg-gray-100"
                >
                  Practice MCQs
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 bg-white/15 border border-white/30 px-6 py-3 rounded-xl font-bold hover:bg-white/25"
                >
                  All Subjects
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
