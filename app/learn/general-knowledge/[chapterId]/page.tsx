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
  Search,
  Newspaper,
  Flag,
  Users,
  CalendarDays,
  Award,
} from "lucide-react";
import { useMemo, useState } from "react";

const categories = [
  {
    title: "Indian GK",
    description:
      "India, states, capitals, history, geography, polity and important facts.",
    icon: Landmark,
  },
  {
    title: "World GK",
    description:
      "Countries, capitals, currencies, continents, organizations and world facts.",
    icon: Globe2,
  },
  {
    title: "History",
    description:
      "Ancient, medieval and modern history with important events and personalities.",
    icon: CalendarDays,
  },
  {
    title: "Geography",
    description:
      "Earth, rivers, mountains, oceans, states, countries and natural resources.",
    icon: Globe2,
  },
  {
    title: "Indian Polity",
    description:
      "Constitution, Parliament, President, Prime Minister, Supreme Court and more.",
    icon: Flag,
  },
  {
    title: "Science GK",
    description:
      "Important general science facts from physics, chemistry, biology and technology.",
    icon: Brain,
  },
  {
    title: "Sports GK",
    description:
      "Sports, tournaments, awards, records, players and important sporting events.",
    icon: Trophy,
  },
  {
    title: "Awards & Honours",
    description:
      "Important national and international awards, prizes and honours.",
    icon: Award,
  },
  {
    title: "Important Persons",
    description:
      "Famous personalities, leaders, scientists, authors and other important people.",
    icon: Users,
  },
  {
    title: "Current Affairs",
    description:
      "Important recent events and general awareness topics for students and exams.",
    icon: Newspaper,
  },
];

const quickFacts = [
  {
    question: "What is the capital of India?",
    answer: "New Delhi",
  },
  {
    question: "How many states are there in India?",
    answer: "28 states",
  },
  {
    question: "How many Union Territories are there in India?",
    answer: "8 Union Territories",
  },
  {
    question: "What is the national animal of India?",
    answer: "Bengal Tiger",
  },
  {
    question: "What is the national bird of India?",
    answer: "Indian Peacock",
  },
  {
    question: "What is the national flower of India?",
    answer: "Lotus",
  },
  {
    question: "What is the largest continent?",
    answer: "Asia",
  },
  {
    question: "What is the largest ocean?",
    answer: "Pacific Ocean",
  },
];

const popularTopics = [
  "India",
  "States & Capitals",
  "Indian Constitution",
  "World Countries",
  "Rivers",
  "Mountains",
  "National Parks",
  "Indian History",
  "World History",
  "Science",
  "Sports",
  "Awards",
];

export default function GeneralKnowledgePage() {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return categories;
    }

    return categories.filter(
      (category) =>
        category.title.toLowerCase().includes(value) ||
        category.description.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              General Knowledge
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Improve your general awareness with important facts,
              Indian GK, world GK, history, geography, science,
              sports and current affairs.
            </p>

            {/* SEARCH */}

            <div className="mt-8 relative max-w-2xl">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search GK topics..."
                className="w-full rounded-2xl bg-white text-gray-900 pl-14 pr-5 py-5 outline-none shadow-xl placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-blue-600" size={28} />

          <div>
            <h2 className="text-3xl font-black text-gray-900">
              GK Categories
            </h2>

            <p className="text-gray-500 mt-1">
              Choose a topic and start learning.
            </p>
          </div>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
            <Search
              className="mx-auto text-gray-400"
              size={42}
            />

            <h3 className="mt-4 text-2xl font-bold">
              No topic found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another GK topic.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition">
                    <Icon
                      size={28}
                      className="text-blue-600 group-hover:text-white transition"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-gray-900">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {category.description}
                  </p>

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800"
                  >
                    Explore
                    <ArrowRight size={18} />
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* POPULAR TOPICS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3">
            <Brain className="text-cyan-600" size={28} />

            <h2 className="text-3xl font-black text-gray-900">
              Popular GK Topics
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            {popularTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSearch(topic)}
                className="px-5 py-3 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-semibold rounded-full transition"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between gap-5 mb-7">
          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Quick GK Facts
            </h2>

            <p className="mt-2 text-gray-500">
              Learn important facts quickly.
            </p>
          </div>

          <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-cyan-50 items-center justify-center">
            <Sparkles
              className="text-cyan-600"
              size={27}
            />
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

      {/* EXAM PREPARATION */}

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Trophy size={30} />

              <span className="font-bold">
                General Awareness Preparation
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-black">
              Build Strong GK for Exams
            </h2>

            <p className="mt-4 text-white/90 text-lg leading-relaxed">
              Prepare important general knowledge topics for
              competitive exams, school examinations and
              everyday awareness.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-black px-6 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Practice MCQs
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/learn"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/25 transition"
              >
                Browse All Subjects
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}