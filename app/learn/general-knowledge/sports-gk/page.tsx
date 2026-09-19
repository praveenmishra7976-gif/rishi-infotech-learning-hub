"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  Globe2,
  Medal,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const topics = [
  {
    title: "Cricket",
    description:
      "Learn important cricket facts, formats, tournaments, records and famous players.",
    icon: "🏏",
  },
  {
    title: "Football",
    description:
      "Explore football rules, World Cup, major tournaments, clubs and famous players.",
    icon: "⚽",
  },
  {
    title: "Olympic Games",
    description:
      "Learn about the Olympic Games, major sports, medals and important Olympic facts.",
    icon: "🏅",
  },
  {
    title: "Hockey",
    description:
      "Study important hockey facts, tournaments, players and India's hockey history.",
    icon: "🏑",
  },
  {
    title: "Tennis",
    description:
      "Learn about Grand Slam tournaments, famous players and important tennis facts.",
    icon: "🎾",
  },
  {
    title: "Badminton",
    description:
      "Explore badminton rules, tournaments, championships and famous players.",
    icon: "🏸",
  },
  {
    title: "Athletics",
    description:
      "Learn about running, jumping, throwing events and major athletics competitions.",
    icon: "🏃",
  },
  {
    title: "Awards",
    description:
      "Study important sports awards, trophies and honours given to athletes.",
    icon: "🏆",
  },
];

const quickFacts = [
  {
    question: "Which country hosted the first modern Olympic Games?",
    answer: "Greece",
  },
  {
    question: "How many players are there in a cricket team?",
    answer: "11 players",
  },
  {
    question: "How many players are there in a football team on the field?",
    answer: "11 players",
  },
  {
    question: "Which sport uses a shuttlecock?",
    answer: "Badminton",
  },
  {
    question: "Which sport is associated with Wimbledon?",
    answer: "Tennis",
  },
  {
    question: "Which sport uses a puck?",
    answer: "Ice hockey",
  },
  {
    question: "What is the highest medal awarded at the Olympics?",
    answer: "Gold medal",
  },
  {
    question: "Which sport is often called the national sport of India historically?",
    answer: "Hockey",
  },
];

const importantTopics = [
  "Olympic Games",
  "Cricket World Cup",
  "Football World Cup",
  "Wimbledon",
  "Asian Games",
  "Commonwealth Games",
  "Hockey",
  "Badminton",
  "Tennis",
  "Athletics",
  "Sports Awards",
  "Famous Players",
];

export default function SportsGKPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
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
              Sports GK
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn important sports general knowledge including cricket,
              football, Olympics, hockey, tennis, badminton, athletics,
              tournaments, awards and famous players.
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
              {topics.length}
            </p>

            <p className="text-gray-500">Sports Topics</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              50+
            </p>

            <p className="text-gray-500">Important Facts</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Globe2 className="text-blue-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              World
            </p>

            <p className="text-gray-500">Sports Knowledge</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Medal className="text-red-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              MCQ
            </p>

            <p className="text-gray-500">Exam Practice</p>
          </div>
        </div>
      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="text-orange-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Sports Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Explore important sports categories.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl">
                  {topic.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* IMPORTANT TOPICS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3">
            <Award className="text-orange-600" size={30} />

            <h2 className="text-3xl font-black text-gray-900">
              Important Sports Topics
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            {importantTopics.map((topic) => (
              <span
                key={topic}
                className="px-5 py-3 bg-orange-50 text-orange-700 font-semibold rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-7">
          <BookOpen className="text-blue-600" size={30} />

          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Quick Sports Facts
            </h2>

            <p className="mt-2 text-gray-500">
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

      {/* EXAM PREPARATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 md:p-12">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Trophy size={30} />
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-black">
                Prepare Sports GK for Exams
              </h2>

              <p className="mt-4 text-white/90 text-lg leading-relaxed">
                Revise important tournaments, sports personalities,
                awards, records and major sporting events to improve
                your general awareness.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Major Tournaments",
                  "Famous Players",
                  "Sports Awards",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="bg-white/10 border border-white/15 rounded-xl p-4"
                  >
                    <span className="font-black">{index + 1}.</span>{" "}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
              <CalendarDays
                className="text-orange-600"
                size={30}
              />
            </div>

            <div>
              <h2 className="text-3xl font-black text-gray-900">
                How to Study Sports GK
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                Start with major sports and their basic rules. Then
                learn important tournaments, famous players, awards,
                records and major sporting events. Revise regularly
                because sports information can change over time.
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
          <Users
            className="mx-auto text-orange-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Sports GK
          </h2>

          <p className="mt-3 text-gray-400">
            Explore more General Knowledge topics and continue learning.
          </p>
        </div>
      </section>
    </main>
  );
}
