
"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Languages,
  Sparkles,
  Trophy,
} from "lucide-react";

const chapters = [
  {
    id: "introduction-to-sanskrit",
    title: "Introduction to Sanskrit",
    description:
      "Learn the origin, importance, characteristics and basic structure of Sanskrit.",
    icon: "📜",
  },
  {
    id: "sanskrit-alphabet",
    title: "Sanskrit Alphabet",
    description:
      "Learn Sanskrit vowels, consonants, pronunciation and writing basics.",
    icon: "🔤",
  },
  {
    id: "swar-and-vyanjan",
    title: "Swar & Vyanjan",
    description:
      "Understand vowels and consonants and their correct pronunciation.",
    icon: "🗣️",
  },
  {
    id: "sanskrit-varnamala",
    title: "Sanskrit Varnamala",
    description:
      "Study the complete Sanskrit varnamala and understand the classification of Sanskrit sounds.",
    icon: "🔡",
  },
  {
    id: "sangya",
    title: "संज्ञा (Noun)",
    description:
      "Learn Sanskrit nouns, genders and their basic grammatical usage.",
    icon: "📖",
  },
  {
    id: "sarvanam",
    title: "सर्वनाम (Pronoun)",
    description:
      "Understand Sanskrit pronouns and their different forms and uses.",
    icon: "👤",
  },
  {
    id: "kriya",
    title: "क्रिया (Verb)",
    description:
      "Learn Sanskrit verbs, roots, forms and their use in sentences.",
    icon: "✍️",
  },
  {
    id: "lakara",
    title: "लकार",
    description:
      "Study important Sanskrit verb tenses and moods through Lakara forms.",
    icon: "⏳",
  },
  {
    id: "vibhakti",
    title: "विभक्ति",
    description:
      "Learn the eight Sanskrit cases and their grammatical functions.",
    icon: "📝",
  },
  {
    id: "sandhi",
    title: "सन्धि",
    description:
      "Understand vowel, consonant and visarga Sandhi with examples.",
    icon: "🔗",
  },
  {
    id: "samas",
    title: "समास",
    description:
      "Learn major types of Sanskrit compounds and their meanings.",
    icon: "🧩",
  },
  {
    id: "karak",
    title: "कारक",
    description:
      "Understand the grammatical relationships between words in Sanskrit sentences.",
    icon: "📚",
  },
  {
    id: "sanskrit-dhatu-roop",
    title: "Sanskrit Dhatu Roop",
    description:
      "Learn important Sanskrit verb roots and their different forms.",
    icon: "🔤",
  },
  {
    id: "sanskrit-shabd-roop",
    title: "Sanskrit Shabd Roop",
    description:
      "Study important Sanskrit noun forms and their grammatical patterns.",
    icon: "📘",
  },
  {
    id: "sanskrit-grammar",
    title: "Sanskrit Grammar",
    description:
      "Build a strong foundation in Sanskrit grammar through important rules and concepts.",
    icon: "📚",
  },
  {
    id: "translation",
    title: "Sanskrit Translation",
    description:
      "Practice translating Sanskrit sentences into simple language and understand sentence meaning.",
    icon: "🌐",
  },
  {
    id: "sanskrit-literature",
    title: "Sanskrit Literature",
    description:
      "Explore important Sanskrit literature, texts, authors and literary traditions.",
    icon: "📜",
  },
  {
    id: "subhashitani",
    title: "सुभाषितानि",
    description:
      "Read meaningful Sanskrit sayings, verses and their simple meanings.",
    icon: "🌸",
  },
];

const grammarPoints = [
  {
    title: "स्वर",
    value: "Vowels",
    icon: "अ",
  },
  {
    title: "व्यञ्जन",
    value: "Consonants",
    icon: "क",
  },
  {
    title: "विभक्ति",
    value: "8 Cases",
    icon: "📖",
  },
  {
    title: "लकार",
    value: "Verb Forms",
    icon: "✍️",
  },
  {
    title: "सन्धि",
    value: "Word Combination",
    icon: "🔗",
  },
  {
    title: "समास",
    value: "Compounds",
    icon: "🧩",
  },
];

export default function SanskritPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            ← Back to Learn
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Sanskrit
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn Sanskrit grammar, vocabulary, sentence formation,
              Sandhi, Samasa, Vibhakti, Lakara and important Sanskrit texts.
            </p>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* STATS */}
      {/* ========================================================= */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <BookOpen
              className="text-orange-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {chapters.length}
            </p>

            <p className="text-gray-500">
              Chapters
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <Languages
              className="text-amber-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {grammarPoints.length}
            </p>

            <p className="text-gray-500">
              Quick Revision Topics
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <span className="text-3xl">
              संस्कृतम्
            </span>

            <p className="text-3xl font-black text-gray-900 mt-2">
              {chapters.length}
            </p>

            <p className="text-gray-500">
              Learning Modules
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <Trophy
              className="text-yellow-500"
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

      {/* ========================================================= */}
      {/* CHAPTERS */}
      {/* ========================================================= */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Languages
            className="text-orange-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Sanskrit Chapters
            </h2>

            <p className="text-gray-500 mt-1">
              Select a chapter and start learning.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {chapters.map((chapter, index) => (

            <div
              key={chapter.id}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl">
                  {chapter.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Chapter {index + 1}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-orange-600 transition">
                {chapter.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {chapter.description}
              </p>

              <Link
                href={`/learn/sanskrit/${chapter.id}`}
                className="mt-5 inline-flex items-center gap-2 text-orange-600 font-bold"
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* ========================================================= */}
      {/* GRAMMAR QUICK REVISION */}
      {/* ========================================================= */}

      <section className="bg-white border-y">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Languages
              className="text-orange-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Sanskrit Grammar Quick Revision
              </h2>

              <p className="text-gray-500 mt-1">
                Important grammar topics for quick revision.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {grammarPoints.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-orange-50 hover:border-orange-200 transition"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-gray-500">
                  {item.value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FOOTER CTA */}
      {/* ========================================================= */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-500 text-white p-8 md:p-12 text-center">

          <Sparkles
            className="mx-auto"
            size={36}
          />

          <h2 className="mt-4 text-3xl md:text-4xl font-black">
            Continue Your Sanskrit Journey
          </h2>

          <p className="mt-4 text-white/90 text-lg leading-8 max-w-3xl mx-auto">
            Study the chapters step by step, revise important grammar
            concepts and practice regularly to strengthen your Sanskrit.
          </p>

          <Link
            href="/learn"
            className="mt-7 inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-xl font-black hover:bg-orange-50 transition"
          >
            Explore All Subjects
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="bg-gray-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <Sparkles
            className="mx-auto text-yellow-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Sanskrit
          </h2>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto leading-7">
            Learn grammar, vocabulary, sentence formation, Sanskrit
            literature and important texts through structured lessons.
          </p>

          <Link
            href="/learn"
            className="mt-7 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-xl font-bold transition"
          >
            Explore All Subjects
            <ArrowRight size={18} />
          </Link>

        </div>

      </footer>

    </main>
  );
}
