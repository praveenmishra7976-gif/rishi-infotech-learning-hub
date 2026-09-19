
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const vowels = [
  "अ",
  "आ",
  "इ",
  "ई",
  "उ",
  "ऊ",
  "ऋ",
  "ए",
  "ऐ",
  "ओ",
  "औ",
  "अं",
  "अः",
];

const consonants = [
  "क",
  "ख",
  "ग",
  "घ",
  "ङ",
  "च",
  "छ",
  "ज",
  "झ",
  "ञ",
  "ट",
  "ठ",
  "ड",
  "ढ",
  "ण",
  "त",
  "थ",
  "द",
  "ध",
  "न",
  "प",
  "फ",
  "ब",
  "भ",
  "म",
  "य",
  "र",
  "ल",
  "व",
  "श",
  "ष",
  "स",
  "ह",
];

const examples = [
  {
    letter: "अ",
    example: "अग्निः",
    meaning: "Fire",
  },
  {
    letter: "आ",
    example: "आकाशः",
    meaning: "Sky",
  },
  {
    letter: "इ",
    example: "इन्द्रः",
    meaning: "Indra",
  },
  {
    letter: "उ",
    example: "उदकम्",
    meaning: "Water",
  },
  {
    letter: "क",
    example: "कमलम्",
    meaning: "Lotus",
  },
  {
    letter: "ग",
    example: "गजः",
    meaning: "Elephant",
  },
];

const quiz = [
  {
    question: "Which of these is a Sanskrit vowel?",
    options: ["क", "अ", "म", "त"],
    answer: "अ",
  },
  {
    question: "Which letter is a consonant?",
    options: ["आ", "ई", "उ", "क"],
    answer: "क",
  },
  {
    question: "Which Sanskrit letter comes after अ?",
    options: ["इ", "आ", "क", "उ"],
    answer: "आ",
  },
];

export default function SanskritVarnamalaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <Link
            href="/learn/sanskrit"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Sanskrit
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Sanskrit Varnamala
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn Sanskrit vowels and consonants, their pronunciation,
              examples and basic writing practice.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center">
              <BookOpen className="text-orange-600" size={30} />
            </div>

            <div>
              <h2 className="text-3xl font-black text-gray-900">
                What is Varnamala?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                वर्णमाला means the collection or sequence of letters used
                in a language. Sanskrit letters are traditionally studied
                through vowels and consonants. Learning Varnamala is the
                foundation for reading, writing and understanding Sanskrit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VOWELS */}

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-7">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
            अ
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900">
              स्वर — Vowels
            </h2>

            <p className="text-gray-500 mt-1">
              Important Sanskrit vowel letters.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4">
          {vowels.map((letter, index) => (
            <div
              key={letter}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-4xl font-black text-orange-600">
                {letter}
              </div>

              <p className="mt-2 text-xs font-bold text-gray-400">
                {index + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSONANTS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
              क
            </div>

            <div>
              <h2 className="text-3xl font-black text-gray-900">
                व्यञ्जन — Consonants
              </h2>

              <p className="text-gray-500 mt-1">
                Important Sanskrit consonant letters.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-4">
            {consonants.map((letter, index) => (
              <div
                key={letter}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center hover:bg-blue-50 hover:border-blue-200 transition"
              >
                <div className="text-3xl font-black text-blue-700">
                  {letter}
                </div>

                <p className="mt-2 text-xs font-bold text-gray-400">
                  {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-7">
          <CheckCircle2 className="text-green-600" size={30} />

          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Letter Examples
            </h2>

            <p className="text-gray-500 mt-1">
              Learn letters with simple Sanskrit words.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {examples.map((item) => (
            <article
              key={item.letter}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-3xl font-black text-orange-600">
                  {item.letter}
                </span>

                <span className="text-sm font-bold text-gray-400">
                  Letter
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {item.example}
              </h3>

              <p className="mt-2 text-blue-600 font-semibold">
                Meaning: {item.meaning}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl p-8 md:p-10 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl font-black">
                Sanskrit Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                First memorize the letters, then practice writing them
                regularly. Read simple Sanskrit words aloud to improve
                recognition and pronunciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUIZ */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-7">
          <Trophy className="text-yellow-500" size={30} />

          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Quick Practice
            </h2>

            <p className="text-gray-500 mt-1">
              Test your basic Sanskrit Varnamala knowledge.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {quiz.map((item, index) => (
            <article
              key={item.question}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div className="w-full">
                  <h3 className="font-black text-gray-900">
                    {item.question}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3 mt-4">
                    {item.options.map((option) => (
                      <div
                        key={option}
                        className="rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-700"
                      >
                        {option}
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-green-600 font-bold">
                    Answer: {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/learn/sanskrit"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              All Sanskrit Chapters
            </Link>

            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700"
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
            className="mx-auto text-orange-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Sanskrit
          </h2>

          <p className="mt-3 text-gray-400">
            Complete the next Sanskrit chapter and continue your learning journey.
          </p>
        </div>
      </section>
    </main>
  );
}

