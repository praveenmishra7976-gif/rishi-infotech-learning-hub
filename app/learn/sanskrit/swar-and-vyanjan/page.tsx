
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Languages,
  Lightbulb,
  Mic,
  Sparkles,
  Volume2,
} from "lucide-react";
const swaras = [
  {
    letter: "अ",
    name: "अकार",
    sound: "a",
    example: "अग्निः",
    meaning: "Fire",
  },
  {
    letter: "आ",
    name: "आकार",
    sound: "ā",
    example: "आकाशः",
    meaning: "Sky",
  },
  {
    letter: "इ",
    name: "इकार",
    sound: "i",
    example: "इन्द्रः",
    meaning: "Indra",
  },
  {
    letter: "ई",
    name: "ईकार",
    sound: "ī",
    example: "ईश्वरः",
    meaning: "God",
  },
  {
    letter: "उ",
    name: "उकार",
    sound: "u",
    example: "उदयः",
    meaning: "Rise",
  },
  {
    letter: "ऊ",
    name: "ऊकार",
    sound: "ū",
    example: "ऊर्णा",
    meaning: "Wool",
  },
  {
    letter: "ऋ",
    name: "ऋकार",
    sound: "ṛ",
    example: "ऋषिः",
    meaning: "Sage",
  },
  {
    letter: "ॠ",
    name: "ॠकार",
    sound: "ṝ",
    example: "ॠकारः",
    meaning: "Vowel sound",
  },
  {
    letter: "ऌ",
    name: "ऌकार",
    sound: "ḷ",
    example: "ऌकारः",
    meaning: "Vowel sound",
  },
  {
    letter: "ए",
    name: "एकार",
    sound: "e",
    example: "एकम्",
    meaning: "One",
  },
  {
    letter: "ऐ",
    name: "ऐकार",
    sound: "ai",
    example: "ऐश्वर्यम्",
    meaning: "Prosperity",
  },
  {
    letter: "ओ",
    name: "ओकार",
    sound: "o",
    example: "ओषधिः",
    meaning: "Medicine",
  },
  {
    letter: "औ",
    name: "औकार",
    sound: "au",
    example: "औषधम्",
    meaning: "Medicine",
  },
];

const consonantGroups = [
  {
    group: "क-वर्ग",
    place: "कण्ठ्य",
    description: "These sounds are mainly produced from the throat.",
    letters: [
      ["क", "ka"],
      ["ख", "kha"],
      ["ग", "ga"],
      ["घ", "gha"],
      ["ङ", "ṅa"],
    ],
  },
  {
    group: "च-वर्ग",
    place: "तालव्य",
    description: "These sounds are mainly produced near the palate.",
    letters: [
      ["च", "ca"],
      ["छ", "cha"],
      ["ज", "ja"],
      ["झ", "jha"],
      ["ञ", "ña"],
    ],
  },
  {
    group: "ट-वर्ग",
    place: "मूर्धन्य",
    description: "These are retroflex sounds produced with the tongue raised toward the palate.",
    letters: [
      ["ट", "ṭa"],
      ["ठ", "ṭha"],
      ["ड", "ḍa"],
      ["ढ", "ḍha"],
      ["ण", "ṇa"],
    ],
  },
  {
    group: "त-वर्ग",
    place: "दन्त्य",
    description: "These sounds are produced with the tongue near the teeth.",
    letters: [
      ["त", "ta"],
      ["थ", "tha"],
      ["द", "da"],
      ["ध", "dha"],
      ["न", "na"],
    ],
  },
  {
    group: "प-वर्ग",
    place: "ओष्ठ्य",
    description: "These sounds are mainly produced with the lips.",
    letters: [
      ["प", "pa"],
      ["फ", "pha"],
      ["ब", "ba"],
      ["भ", "bha"],
      ["म", "ma"],
    ],
  },
];

const antahstha = [
  ["य", "ya", "यकार"],
  ["र", "ra", "रकार"],
  ["ल", "la", "लकार"],
  ["व", "va", "वकार"],
];

const ushma = [
  ["श", "śa", "तालव्य"],
  ["ष", "ṣa", "मूर्धन्य"],
  ["स", "sa", "दन्त्य"],
  ["ह", "ha", "कण्ठ्य"],
];

const pronunciationPoints = [
  "स्वर स्वतंत्र रूप से उच्चारित किए जा सकते हैं।",
  "व्यंजन का सामान्य उच्चारण किसी स्वर के सहयोग से होता है।",
  "क-वर्ग से प-वर्ग तक प्रत्येक वर्ग में पाँच-पाँच व्यंजन होते हैं।",
  "प्रत्येक वर्ग के पहले दो वर्ण सामान्यतः अघोष/महाप्राण-अल्पप्राण भेद को समझने में उपयोगी हैं।",
  "य, र, ल, व को अन्तःस्थ व्यंजन कहा जाता है।",
  "श, ष, स, ह को ऊष्म व्यंजन कहा जाता है।",
  "सही उच्चारण के लिए वर्ण के उच्चारण-स्थान को समझना महत्वपूर्ण है।",
  "संस्कृत शब्दों को पढ़ते समय दीर्घ और ह्रस्व स्वरों का ध्यान रखना चाहिए।",
];

const vowelLength = [
  {
    title: "ह्रस्व स्वर",
    description: "जिन स्वरों के उच्चारण में अपेक्षाकृत कम समय लगता है।",
    examples: "अ, इ, उ, ऋ, ऌ",
  },
  {
    title: "दीर्घ स्वर",
    description: "जिन स्वरों के उच्चारण में ह्रस्व स्वर की तुलना में अधिक समय लगता है।",
    examples: "आ, ई, ऊ, ॠ, ए, ऐ, ओ, औ",
  },
];

const examples = [
  {
    word: "रामः",
    split: "रा + म + ः",
    meaning: "Rama",
  },
  {
    word: "गजः",
    split: "ग + ज + ः",
    meaning: "Elephant",
  },
  {
    word: "नदी",
    split: "न + दी",
    meaning: "River",
  },
  {
    word: "फलम्",
    split: "फ + ल + म्",
    meaning: "Fruit",
  },
  {
    word: "देवः",
    split: "दे + व + ः",
    meaning: "God",
  },
  {
    word: "गुरुः",
    split: "गु + र + ु + ः",
    meaning: "Teacher",
  },
];

export default function SwarAndVyanjanPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 via-purple-700 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/learn/sanskrit/sanskrit-alphabet"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Sanskrit Alphabet
          </Link>

          <div className="mt-8 max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Sanskrit Swar & Vyanjan
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत के स्वर और व्यंजन, उनके उच्चारण, उच्चारण-स्थान,
              वर्गीकरण और शब्दों में प्रयोग को सरल उदाहरणों के साथ सीखें।
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 font-bold">
                स्वर
              </span>

              <span className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 font-bold">
                व्यंजन
              </span>

              <span className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 font-bold">
                उच्चारण
              </span>

              <span className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 font-bold">
                उच्चारण-स्थान
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <BookOpen className="text-indigo-600" size={30} />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                स्वर और व्यंजन का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                संस्कृत वर्णमाला को समझने के लिए स्वर और व्यंजन का
                अंतर जानना आवश्यक है। स्वर ऐसे वर्ण हैं जिनका उच्चारण
                स्वतंत्र रूप से किया जा सकता है, जबकि व्यंजन के उच्चारण
                में सामान्यतः स्वर का सहयोग रहता है।
              </p>

              <div className="mt-6 grid md:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-indigo-50 p-5">
                  <h3 className="font-black text-indigo-800 text-xl">
                    स्वर
                  </h3>

                  <p className="mt-2 text-gray-700 leading-relaxed">
                    अ, आ, इ, ई, उ, ऊ आदि ऐसे वर्ण हैं जिनका उच्चारण
                    स्वतंत्र रूप से किया जा सकता है।
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-50 p-5">
                  <h3 className="font-black text-purple-800 text-xl">
                    व्यंजन
                  </h3>

                  <p className="mt-2 text-gray-700 leading-relaxed">
                    क, ख, ग, च, ट, त, प आदि वर्णों का पूर्ण उच्चारण
                    सामान्यतः स्वर के सहयोग से होता है।
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-100 p-5">
                <p className="font-black text-gray-900">
                  Learning Formula
                </p>

                <p className="mt-2 text-indigo-700 font-bold">
                  स्वर → व्यंजन → उच्चारण-स्थान → शब्द निर्माण
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SWAR */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <Volume2 className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              संस्कृत स्वर
            </h2>

            <p className="text-gray-500 mt-1">
              Sanskrit Vowels — स्वर और उनका उच्चारण
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {swaras.map((item) => (
            <article
              key={item.letter}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 flex items-center justify-center">
                <span className="text-4xl font-black text-indigo-700">
                  {item.letter}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-black text-gray-900">
                {item.name}
              </h3>

              <p className="mt-1 text-indigo-600 font-bold">
                /{item.sound}/
              </p>

              <p className="mt-3 text-sm font-semibold text-gray-700">
                {item.example}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {item.meaning}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* VOWEL LENGTH */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Mic className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                ह्रस्व और दीर्घ स्वर
              </h2>

              <p className="text-gray-500 mt-1">
                Short and Long Vowels
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {vowelLength.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-7"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <span className="text-2xl font-black text-purple-700">
                    अ
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 rounded-2xl bg-white border border-gray-100 p-4">
                  <p className="text-sm font-bold text-gray-500">
                    उदाहरण
                  </p>

                  <p className="mt-1 text-xl font-black text-purple-700">
                    {item.examples}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSONANTS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              संस्कृत व्यंजन
            </h2>

            <p className="text-gray-500 mt-1">
              Sanskrit Consonants — व्यंजन वर्ग
            </p>
          </div>
        </div>

        <div className="space-y-7">
          {consonantGroups.map((group) => (
            <article
              key={group.group}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-black text-indigo-700">
                    {group.group}
                  </h3>

                  <p className="mt-1 font-bold text-gray-500">
                    उच्चारण-स्थान: {group.place}
                  </p>
                </div>

                <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
                  5 वर्ण
                </span>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {group.description}
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {group.letters.map(([letter, sound]) => (
                  <div
                    key={letter}
                    className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-center hover:bg-indigo-50 hover:border-indigo-200 transition"
                  >
                    <div className="text-4xl font-black text-gray-900">
                      {letter}
                    </div>

                    <p className="mt-2 text-sm font-bold text-indigo-600">
                      {sound}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ANTAHSTHA */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Languages className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                अन्तःस्थ व्यंजन
              </h2>

              <p className="text-gray-500 mt-1">
                Semi-vowels
              </p>
            </div>
          </div>

          <p className="max-w-4xl text-gray-600 leading-relaxed mb-7">
            य, र, ल और व को संस्कृत में अन्तःस्थ व्यंजन कहा जाता है।
            ये स्वर और व्यंजन के बीच के ध्वनि-स्वरूप से जुड़े हुए माने
            जाते हैं।
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {antahstha.map(([letter, sound, name]) => (
              <article
                key={letter}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-6 text-center hover:bg-purple-50 hover:border-purple-200 transition"
              >
                <div className="text-5xl font-black text-purple-700">
                  {letter}
                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {name}
                </h3>

                <p className="mt-1 font-bold text-purple-600">
                  /{sound}/
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* USHMA */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Volume2 className="text-fuchsia-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                ऊष्म व्यंजन
              </h2>

              <p className="text-gray-500 mt-1">
                Sibilants and Aspirate
              </p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-4xl mb-7">
            श, ष, स और ह को ऊष्म व्यंजन कहा जाता है। इनके उच्चारण में
            वायु के प्रवाह और घर्षण का विशेष महत्व होता है।
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {ushma.map(([letter, sound, place]) => (
              <article
                key={letter}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-6 text-center"
              >
                <div className="text-5xl font-black text-fuchsia-700">
                  {letter}
                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  /{sound}/
                </h3>

                <p className="mt-2 text-sm font-bold text-gray-500">
                  {place}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRONUNCIATION PLACES */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Mic size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                उच्चारण-स्थान
              </h2>

              <p className="mt-1 text-white/80">
                Places of Articulation
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              ["कण्ठ्य", "कण्ठ", "क, ख, ग, घ, ह"],
              ["तालव्य", "तालु", "च, छ, ज, झ, श"],
              ["मूर्धन्य", "मूर्धा", "ट, ठ, ड, ढ, ष"],
              ["दन्त्य", "दाँत", "त, थ, द, ध, स"],
              ["ओष्ठ्य", "ओष्ठ", "प, फ, ब, भ, म"],
            ].map(([title, place, examples]) => (
              <div
                key={title}
                className="bg-white/10 border border-white/15 rounded-2xl p-5"
              >
                <h3 className="text-xl font-black">
                  {title}
                </h3>

                <p className="mt-2 text-white/80 font-semibold">
                  स्थान: {place}
                </p>

                <p className="mt-3 text-white/95 leading-relaxed">
                  {examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORD EXAMPLES */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              स्वर और व्यंजन से शब्द निर्माण
            </h2>

            <p className="text-gray-500 mt-1">
              Learn by seeing letters inside Sanskrit words.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {examples.map((item) => (
            <article
              key={item.word}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl font-black text-indigo-700">
                {item.word}
              </div>

              <p className="mt-3 text-gray-600 font-semibold">
                {item.split}
              </p>

              <div className="mt-4 inline-flex rounded-xl bg-indigo-50 px-4 py-2">
                <span className="font-bold text-indigo-700">
                  {item.meaning}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* IMPORTANT POINTS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black">
                Important Points
              </h2>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                {pronunciationPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 bg-white/10 border border-white/10 rounded-2xl p-5"
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

      {/* QUICK REVISION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-center gap-3 mb-7">
            <BookOpen className="text-indigo-600" size={30} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Quick Revision
              </h2>

              <p className="text-gray-500 mt-1">
                परीक्षा से पहले जल्दी दोहराने के लिए।
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-4 font-black text-indigo-800">
                    विषय
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    मुख्य जानकारी
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["स्वर", "अ, आ, इ, ई, उ, ऊ, ऋ, ॠ, ऌ, ए, ऐ, ओ, औ"],
                  ["क-वर्ग", "क, ख, ग, घ, ङ"],
                  ["च-वर्ग", "च, छ, ज, झ, ञ"],
                  ["ट-वर्ग", "ट, ठ, ड, ढ, ण"],
                  ["त-वर्ग", "त, थ, द, ध, न"],
                  ["प-वर्ग", "प, फ, ब, भ, म"],
                  ["अन्तःस्थ", "य, र, ल, व"],
                  ["ऊष्म", "श, ष, स, ह"],
                ].map(([topic, information]) => (
                  <tr
                    key={topic}
                    className="border-b border-gray-100"
                  >
                    <td className="p-4 font-black text-gray-900">
                      {topic}
                    </td>

                    <td className="p-4 font-semibold text-gray-600">
                      {information}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* STUDY TIP */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Lightbulb className="text-indigo-600" size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Sanskrit Pronunciation Study Tip
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                संस्कृत सीखते समय केवल वर्णों को याद न करें। उन्हें
                बोलकर और लिखकर अभ्यास करें। पहले स्वर का सही उच्चारण
                करें, फिर व्यंजन को स्वर के साथ जोड़कर पढ़ें — जैसे
                क, का, कि, की, कु, कू। इसके बाद इन्हीं वर्णों से बने
                सरल शब्दों को पढ़ने का अभ्यास करें।
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "देखें",
                  "सुनें",
                  "बोलें",
                  "लिखें",
                  "अभ्यास करें",
                ].map((item, index) => (
                  <span
                    key={item}
                    className="rounded-xl bg-indigo-50 border border-indigo-100 px-4 py-2 font-bold text-indigo-700"
                  >
                    {index + 1}. {item}
                  </span>
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
              href="/learn/sanskrit/sanskrit-alphabet"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
              Sanskrit Alphabet
            </Link>

            <Link
              href="/learn/sanskrit/sangya"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
            >
              Next: संज्ञा
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <Sparkles
            className="mx-auto text-purple-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Sanskrit Swar & Vyanjan Complete
          </h2>

          <p className="mt-3 text-gray-400">
            स्वर, व्यंजन और उनके उच्चारण का नियमित अभ्यास करें।
          </p>
        </div>
      </section>
    </main>
  );
}
