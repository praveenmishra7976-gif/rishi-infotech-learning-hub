"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Crown,
  Globe2,
  Medal,
  Sparkles,
  Trophy,
} from "lucide-react";

const awards = [
  {
    title: "Bharat Ratna",
    description:
      "India's highest civilian award, given for exceptional service or achievement of the highest order.",
    category: "Indian Civilian Award",
    icon: "🇮🇳",
  },
  {
    title: "Padma Vibhushan",
    description:
      "One of India's major civilian honours, awarded for exceptional and distinguished service.",
    category: "Indian Civilian Award",
    icon: "🏅",
  },
  {
    title: "Padma Bhushan",
    description:
      "An important Indian civilian award recognizing distinguished service of a high order.",
    category: "Indian Civilian Award",
    icon: "🎖️",
  },
  {
    title: "Padma Shri",
    description:
      "A major civilian honour recognizing distinguished contribution in various fields.",
    category: "Indian Civilian Award",
    icon: "🏆",
  },
  {
    title: "Nobel Prize",
    description:
      "International awards recognizing outstanding contributions in several fields including science, literature and peace.",
    category: "International Award",
    icon: "🌍",
  },
  {
    title: "Ramon Magsaysay Award",
    description:
      "An Asian award recognizing outstanding leadership and service to society.",
    category: "International Award",
    icon: "🌏",
  },
  {
    title: "Booker Prize",
    description:
      "A major literary prize associated with outstanding works of fiction.",
    category: "Literary Award",
    icon: "📚",
  },
  {
    title: "Jnanpith Award",
    description:
      "One of India's most prestigious literary awards, recognizing outstanding contribution to Indian literature.",
    category: "Literary Award",
    icon: "📖",
  },
  {
    title: "Dadasaheb Phalke Award",
    description:
      "India's highest official honour in the field of cinema.",
    category: "Cinema Award",
    icon: "🎬",
  },
  {
    title: "Arjuna Award",
    description:
      "An Indian sports award recognizing outstanding achievement by sportspersons.",
    category: "Sports Award",
    icon: "🥇",
  },
  {
    title: "Major Dhyan Chand Khel Ratna",
    description:
      "India's highest sporting honour, recognizing exceptional sporting performance.",
    category: "Sports Award",
    icon: "🏆",
  },
  {
    title: "Dronacharya Award",
    description:
      "An Indian sports award given to outstanding coaches for producing successful sportspersons.",
    category: "Sports Award",
    icon: "🏹",
  },
];

const quickFacts = [
  {
    question: "What is India's highest civilian award?",
    answer: "Bharat Ratna",
  },
  {
    question: "Which award is associated with outstanding literature?",
    answer: "Jnanpith Award",
  },
  {
    question: "Which award is India's highest sporting honour?",
    answer: "Major Dhyan Chand Khel Ratna",
  },
  {
    question: "Which award is associated with Indian cinema?",
    answer: "Dadasaheb Phalke Award",
  },
  {
    question: "Which international prize is famous for science, literature and peace?",
    answer: "Nobel Prize",
  },
  {
    question: "Which award recognizes outstanding sports coaches in India?",
    answer: "Dronacharya Award",
  },
];

const categories = [
  "Civilian Awards",
  "Sports Awards",
  "Literary Awards",
  "Cinema Awards",
  "International Awards",
];

const examPoints = [
  "Remember the purpose of major awards.",
  "Learn important Indian civilian honours.",
  "Revise major sports awards.",
  "Study important literary and cinema awards.",
  "Keep track of important international prizes.",
];

export default function AwardsHonoursPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 text-white">
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
              Awards & Honours
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn important Indian and international awards, civilian
              honours, sports awards, literary prizes, cinema awards and
              other important honours for GK and competitive exams.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Award className="text-amber-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {awards.length}
            </p>

            <p className="text-gray-500">Important Awards</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Medal className="text-blue-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              5+
            </p>

            <p className="text-gray-500">Award Categories</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Globe2 className="text-green-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              India + World
            </p>

            <p className="text-gray-500">Coverage</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-purple-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              GK
            </p>

            <p className="text-gray-500">Exam Revision</p>
          </div>
        </div>
      </section>

      {/* AWARDS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Award className="text-amber-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Awards & Honours
            </h2>

            <p className="text-gray-500 mt-1">
              Learn the purpose and category of important awards.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <article
              key={award.title}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl">
                  {award.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Award
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-amber-600 transition">
                {award.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {award.description}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-amber-600 font-bold">
                <Medal size={18} />
                {award.category}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-7">
            <Crown className="text-orange-500" size={30} />

            <div>
              <h2 className="text-3xl font-black text-gray-900">
                Award Categories
              </h2>

              <p className="text-gray-500 mt-1">
                Organize your revision by category.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <div
                key={category}
                className="px-5 py-3 rounded-full bg-amber-50 text-amber-700 font-bold border border-amber-100"
              >
                {index + 1}. {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-blue-600" size={30} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Quick Award Facts
            </h2>

            <p className="text-gray-500 mt-1">
              Important one-line facts for quick revision.
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
                <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {fact.question}
                  </h3>

                  <p className="mt-2 text-amber-600 font-black">
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
        <div className="rounded-3xl bg-gradient-to-r from-amber-600 to-orange-500 text-white p-8 md:p-12">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Trophy size={30} />
            </div>

            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-black">
                Awards & Honours for Exams
              </h2>

              <p className="mt-4 text-white/90 text-lg leading-relaxed">
                Awards and honours are frequently asked in General
                Knowledge and competitive examinations. Focus on the
                award name, field and purpose.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {examPoints.map((point, index) => (
                  <div
                    key={point}
                    className="bg-white/10 border border-white/15 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="shrink-0 mt-0.5"
                      />

                      <span>
                        <span className="font-black">
                          {index + 1}.
                        </span>{" "}
                        {point}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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
            className="mx-auto text-amber-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning GK
          </h2>

          <p className="mt-3 text-gray-400">
            Explore more General Knowledge topics and improve your
            exam preparation.
          </p>
        </div>
      </section>
    </main>
  );
}
