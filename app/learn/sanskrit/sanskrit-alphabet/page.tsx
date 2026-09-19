
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Languages,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const vowels = [
  { letter: "अ", name: "अकार", sound: "a" },
  { letter: "आ", name: "आकार", sound: "ā" },
  { letter: "इ", name: "इकार", sound: "i" },
  { letter: "ई", name: "ईकार", sound: "ī" },
  { letter: "उ", name: "उकार", sound: "u" },
  { letter: "ऊ", name: "ऊकार", sound: "ū" },
  { letter: "ऋ", name: "ऋकार", sound: "ṛ" },
  { letter: "ॠ", name: "ॠकार", sound: "ṝ" },
  { letter: "ऌ", name: "ऌकार", sound: "ḷ" },
  { letter: "ए", name: "एकार", sound: "e" },
  { letter: "ऐ", name: "ऐकार", sound: "ai" },
  { letter: "ओ", name: "ओकार", sound: "o" },
  { letter: "औ", name: "औकार", sound: "au" },
];

const consonants = [
  {
    group: "क-वर्ग",
    letters: ["क", "ख", "ग", "घ", "ङ"],
  },
  {
    group: "च-वर्ग",
    letters: ["च", "छ", "ज", "झ", "ञ"],
  },
  {
    group: "ट-वर्ग",
    letters: ["ट", "ठ", "ड", "ढ", "ण"],
  },
  {
    group: "त-वर्ग",
    letters: ["त", "थ", "द", "ध", "न"],
  },
  {
    group: "प-वर्ग",
    letters: ["प", "फ", "ब", "भ", "म"],
  },
  {
    group: "अन्तःस्थ",
    letters: ["य", "र", "ल", "व"],
  },
  {
    group: "ऊष्म",
    letters: ["श", "ष", "स", "ह"],
  },
];

const specialLetters = [
  { letter: "ं", name: "अनुस्वार", example: "अं" },
  { letter: "ः", name: "विसर्ग", example: "अः" },
  { letter: "ँ", name: "चन्द्रबिन्दु", example: "अँ" },
];

const basics = [
  "संस्कृत की लिपि मुख्य रूप से देवनागरी है।",
  "स्वर स्वतंत्र रूप से उच्चारित किए जा सकते हैं।",
  "व्यंजन के उच्चारण में सामान्यतः स्वर का सहयोग होता है।",
  "क-वर्ग से प-वर्ग तक पाँच-पाँच व्यंजन होते हैं।",
  "य, र, ल, व को अन्तःस्थ व्यंजन कहा जाता है।",
  "श, ष, स, ह को ऊष्म व्यंजन कहा जाता है।",
];

export default function SanskritAlphabetPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 via-purple-700 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
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

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Sanskrit Alphabet
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत वर्णमाला के स्वर, व्यंजन, उच्चारण और देवनागरी
              अक्षरों को सरल तरीके से सीखें।
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Languages className="text-indigo-600" size={30} />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                संस्कृत वर्णमाला का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                संस्कृत भाषा के अक्षरों को मुख्य रूप से स्वर और व्यंजन
                में समझा जाता है। संस्कृत सीखने के लिए सही उच्चारण,
                अक्षर पहचान और वर्णों का क्रम समझना बहुत महत्वपूर्ण है।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  याद रखने का तरीका
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  स्वर → व्यंजन → उच्चारण → शब्द निर्माण
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOWELS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              संस्कृत स्वर
            </h2>

            <p className="text-gray-500 mt-1">
              Sanskrit Vowels
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {vowels.map((item) => (
            <article
              key={item.letter}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-5xl font-black text-indigo-600">
                {item.letter}
              </div>

              <h3 className="mt-3 font-black text-gray-900">
                {item.name}
              </h3>

              <p className="mt-1 text-gray-500">
                {item.sound}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CONSONANTS */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Languages className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                संस्कृत व्यंजन
              </h2>

              <p className="text-gray-500 mt-1">
                Sanskrit Consonants
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {consonants.map((group) => (
              <div
                key={group.group}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6"
              >
                <h3 className="text-xl font-black text-purple-700">
                  {group.group}
                </h3>

                <div className="mt-5 grid grid-cols-5 sm:grid-cols-7 gap-3">
                  {group.letters.map((letter) => (
                    <div
                      key={letter}
                      className="bg-white rounded-2xl border border-gray-100 p-4 text-center shadow-sm"
                    >
                      <span className="text-3xl md:text-4xl font-black text-gray-900">
                        {letter}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL LETTERS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              विशेष वर्ण
            </h2>

            <p className="text-gray-500 mt-1">
              Special Sanskrit Characters
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {specialLetters.map((item) => (
            <article
              key={item.letter}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 text-center"
            >
              <div className="text-5xl font-black text-indigo-600">
                {item.letter}
              </div>

              <h3 className="mt-4 text-xl font-black text-gray-900">
                {item.name}
              </h3>

              <p className="mt-2 text-gray-500">
                उदाहरण: {item.example}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* BASIC POINTS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Important Points
              </h2>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                {basics.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 bg-white/10 rounded-2xl p-4"
                  >
                    <CheckCircle
                      size={22}
                      className="shrink-0 mt-1"
                    />

                    <p className="text-white/95 leading-relaxed">
                      {index + 1}. {point}
                    </p>
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
              href="/learn/sanskrit"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Back to Sanskrit
            </Link>

            <Link
              href="/learn/sanskrit/swar-and-vyanjan"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              Swar & Vyanjan
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <Sparkles className="mx-auto text-purple-400" size={36} />

          <h2 className="mt-4 text-3xl font-black">
            Sanskrit Alphabet Complete
          </h2>

          <p className="mt-3 text-gray-400">
            Practice स्वर, व्यंजन and their pronunciation regularly.
          </p>
        </div>
      </section>
    </main>
  );
}

