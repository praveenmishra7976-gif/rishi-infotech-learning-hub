"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Globe2,
  Mountain,
  Droplets,
  Map,
  Sparkles,
  Trophy,
  Sun,
  Compass,
} from "lucide-react";

const topics = [
  {
    title: "Earth",
    description:
      "Learn about the Earth, its shape, layers, rotation, revolution and important geographical features.",
    icon: Globe2,
  },
  {
    title: "Continents",
    description:
      "Study the seven continents and their important geographical features.",
    icon: Map,
  },
  {
    title: "Oceans",
    description:
      "Learn about the world's major oceans, their locations and important facts.",
    icon: Droplets,
  },
  {
    title: "Mountains",
    description:
      "Explore major mountain ranges, peaks and important mountains of India and the world.",
    icon: Mountain,
  },
  {
    title: "Rivers",
    description:
      "Learn about major rivers, their sources, tributaries and importance.",
    icon: Droplets,
  },
  {
    title: "Climate",
    description:
      "Understand weather, climate, seasons, rainfall, winds and climate zones.",
    icon: Sun,
  },
  {
    title: "India Geography",
    description:
      "Study India's physical features, states, rivers, mountains, soils and natural resources.",
    icon: Map,
  },
  {
    title: "World Geography",
    description:
      "Explore countries, physical features, climates, deserts, rivers and major geographical regions.",
    icon: Globe2,
  },
];

const quickFacts = [
  {
    question: "How many continents are there?",
    answer: "7 continents",
  },
  {
    question: "How many oceans are commonly recognized?",
    answer: "5 oceans",
  },
  {
    question: "Which is the largest continent?",
    answer: "Asia",
  },
  {
    question: "Which is the largest ocean?",
    answer: "Pacific Ocean",
  },
  {
    question: "Which is the highest mountain above sea level?",
    answer: "Mount Everest",
  },
  {
    question: "Which planet is known as the Blue Planet?",
    answer: "Earth",
  },
  {
    question: "What is the imaginary line dividing Earth into Northern and Southern Hemispheres?",
    answer: "Equator",
  },
  {
    question: "What is the study of Earth's physical features called?",
    answer: "Geography",
  },
];

const popularTopics = [
  "India",
  "States of India",
  "Rivers of India",
  "Mountains",
  "Oceans",
  "Continents",
  "Deserts",
  "Climate",
  "Soils",
  "Natural Resources",
  "World Countries",
  "National Parks",
];

export default function GeographyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-emerald-700 via-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            ← Back to General Knowledge
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Geography
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Explore Earth, continents, oceans, mountains, rivers, climate,
              India geography and important geographical facts from around the
              world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#topics"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3.5 rounded-xl font-black hover:bg-gray-100 transition"
              >
                Start Learning
                <ArrowRight size={19} />
              </a>

              <Link
                href="/practice"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-6 py-3.5 rounded-xl font-black hover:bg-white/20 transition"
              >
                Practice MCQs
                <Trophy size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-emerald-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {topics.length}
            </p>

            <p className="text-gray-500">Topics</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Globe2 className="text-blue-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              100+
            </p>

            <p className="text-gray-500">GK Facts</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Mountain className="text-purple-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              50+
            </p>

            <p className="text-gray-500">Geography Concepts</p>
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

      <section
        id="topics"
        className="max-w-7xl mx-auto px-6 py-14"
      >
        <div className="flex items-center gap-3 mb-8">
          <Compass className="text-emerald-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Geography Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Explore important geography concepts.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article
                key={topic.title}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 transition">
                  <Icon
                    size={28}
                    className="text-emerald-600 group-hover:text-white transition"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-emerald-600 transition">
                  {topic.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {topic.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-emerald-600 font-bold">
                  Explore Topic
                  <ArrowRight size={18} />
                </span>
              </article>
            );
          })}
        </div>
      </section>

      {/* POPULAR TOPICS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3">
            <Map className="text-cyan-600" size={30} />

            <div>
              <h2 className="text-3xl font-black text-gray-900">
                Popular Geography Topics
              </h2>

              <p className="text-gray-500 mt-1">
                Important topics for students and competitive exams.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            {popularTopics.map((topic) => (
              <span
                key={topic}
                className="px-5 py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between gap-5 mb-7">
          <div>
            <p className="text-emerald-600 font-black">
              QUICK REVISION
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
              Geography Quick Facts
            </h2>

            <p className="mt-2 text-gray-500">
              Remember important geographical facts quickly.
            </p>
          </div>

          <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-emerald-50 items-center justify-center">
            <Sparkles
              className="text-emerald-600"
              size={27}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {quickFacts.map((fact, index) => (
            <article
              key={fact.question}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {fact.question}
                  </h3>

                  <p className="mt-2 text-emerald-600 font-black">
                    {fact.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INDIA GEOGRAPHY */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-700 to-cyan-600 text-white p-8 md:p-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <Map size={30} />

              <span className="font-bold">
                India Geography
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-black">
              Explore the Geography of India
            </h2>

            <p className="mt-4 text-white/90 text-lg leading-relaxed">
              Learn about India's mountains, plains, plateaus, deserts,
              coastal regions, islands, rivers, climate, soils, forests and
              natural resources.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Himalayas",
                "Northern Plains",
                "Indian Rivers",
                "Thar Desert",
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
      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0">
              <Compass
                className="text-cyan-600"
                size={30}
              />
            </div>

            <div>
              <h2 className="text-3xl font-black text-gray-900">
                How to Study Geography
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                Start with basic concepts such as Earth, continents and
                oceans. Then study India's physical features, rivers,
                mountains and climate. Use maps and quick facts regularly
                to improve your geographical knowledge and revision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXAM PREPARATION */}

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Trophy size={30} />

              <span className="font-bold">
                Geography Exam Preparation
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-black">
              Strengthen Your Geography Knowledge
            </h2>

            <p className="mt-4 text-white/90 text-lg leading-relaxed">
              Revise important geography facts and prepare yourself for
              school examinations, competitive exams and general awareness
              questions.
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

      {/* FOOTER */}

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <Sparkles
            className="mx-auto text-cyan-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Geography
          </h2>

          <p className="mt-3 text-gray-400">
            Explore another topic and continue your learning journey.
          </p>
        </div>
      </section>
    </main>
  );
}
