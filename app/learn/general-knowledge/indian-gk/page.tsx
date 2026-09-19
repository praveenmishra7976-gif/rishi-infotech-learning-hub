"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Landmark,
  Sparkles,
  Trophy,
} from "lucide-react";

const topics = [
  {
    title: "India at a Glance",
    description:
      "Learn important basic facts about India, its location, national symbols and important features.",
    icon: "🇮🇳",
  },
  {
    title: "States & Capitals",
    description:
      "Learn Indian states, Union Territories and their capitals.",
    icon: "🏛️",
  },
  {
    title: "National Symbols",
    description:
      "Learn India's national animal, bird, flower, tree, anthem, song and other symbols.",
    icon: "🦚",
  },
  {
    title: "Indian History",
    description:
      "Explore important events, dynasties, movements and personalities from Indian history.",
    icon: "📜",
  },
  {
    title: "Indian Geography",
    description:
      "Learn India's rivers, mountains, states, climate, soil and natural resources.",
    icon: "🌍",
  },
  {
    title: "Indian Polity",
    description:
      "Understand the Constitution, Parliament, President, Prime Minister and government.",
    icon: "⚖️",
  },
];

const quickFacts = [
  "India is the world's largest democracy.",
  "India has 28 states and 8 Union Territories.",
  "New Delhi is the capital of India.",
  "The Indian national animal is the Bengal Tiger.",
  "The Indian national bird is the Indian Peacock.",
  "The Indian national flower is the Lotus.",
];

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi",
  },
  {
    question: "How many states are there in India?",
    options: ["26", "27", "28", "29"],
    answer: "28",
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Bengal Tiger", "Leopard"],
    answer: "Bengal Tiger",
  },
];

export default function IndianGKPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-xl font-bold hover:bg-white/25 transition"
          >
            <ArrowLeft size={18} />
            Back to General Knowledge
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Indian GK 🇮🇳
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn important facts about India including states,
              capitals, national symbols, history, geography and polity.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-7 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-blue-600" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              {topics.length}
            </p>
            <p className="text-gray-500">Topics</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Landmark className="text-orange-600" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              India
            </p>
            <p className="text-gray-500">GK Focus</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <CheckCircle2 className="text-green-600" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              50+
            </p>
            <p className="text-gray-500">Important Facts</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              MCQ
            </p>
            <p className="text-gray-500">Practice</p>
          </div>
        </div>
      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-blue-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Indian GK Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Select a topic and start learning.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6"
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

              <span className="mt-5 inline-flex items-center gap-2 text-blue-600 font-bold">
                Learn Topic
                <ArrowRight size={18} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK FACTS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Important Indian GK Facts
          </h2>

          <p className="mt-2 text-gray-500">
            Quickly revise important facts.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {quickFacts.map((fact, index) => (
              <div
                key={fact}
                className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5"
              >
                <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <p className="font-semibold text-gray-800">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MCQ */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3">
            <Trophy size={30} />

            <span className="font-bold">
              Indian GK Practice
            </span>
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-black">
            Test Your Knowledge
          </h2>

          <div className="mt-7 grid md:grid-cols-3 gap-5">
            {questions.map((item, index) => (
              <div
                key={item.question}
                className="bg-white text-gray-900 rounded-2xl p-5"
              >
                <p className="font-black">
                  Q{index + 1}. {item.question}
                </p>

                <div className="mt-4 space-y-2">
                  {item.options.map((option) => (
                    <div
                      key={option}
                      className="px-3 py-2 rounded-lg bg-gray-50 text-sm"
                    >
                      {option}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-green-600 font-bold">
                  Answer: {item.answer}
                </p>
              </div>
            ))}
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
          <Sparkles className="mx-auto text-cyan-400" size={36} />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Indian GK
          </h2>

          <p className="mt-3 text-gray-400">
            Explore more General Knowledge topics and continue learning.
          </p>
        </div>
      </section>
    </main>
  );
}
