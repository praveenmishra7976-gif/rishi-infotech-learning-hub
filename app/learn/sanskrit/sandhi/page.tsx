
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Link2,
  Sparkles,
  Star,
} from "lucide-react";

const sandhiTypes = [
  {
    title: "स्वर सन्धि",
    english: "Vowel Sandhi",
    description:
      "दो स्वरों के मिलने पर होने वाले परिवर्तन को स्वर सन्धि कहते हैं।",
    icon: "🔤",
    examples: [
      "विद्या + आलयः = विद्यालयः",
      "देव + आलयः = देवालयः",
      "महा + ईशः = महेशः",
    ],
  },
  {
    title: "व्यंजन सन्धि",
    english: "Consonant Sandhi",
    description:
      "व्यंजन के साथ स्वर या दूसरे व्यंजन के मिलने पर होने वाले परिवर्तन को व्यंजन सन्धि कहते हैं।",
    icon: "🔗",
    examples: [
      "सत् + जनः = सज्जनः",
      "जगत् + ईशः = जगदीशः",
      "दिक् + गजः = दिग्गजः",
    ],
  },
  {
    title: "विसर्ग सन्धि",
    english: "Visarga Sandhi",
    description:
      "विसर्ग (ः) के बाद किसी वर्ण के आने पर विसर्ग में होने वाले परिवर्तन को विसर्ग सन्धि कहते हैं।",
    icon: "✨",
    examples: [
      "रामः + अस्ति = रामोऽस्ति",
      "मनः + हरः = मनोहरः",
      "नमः + ते = नमस्ते",
    ],
  },
];

const swarExamples = [
  {
    rule: "अ + अ",
    result: "आ",
    example: "देव + आलयः = देवालयः",
    meaning: "देव का स्थान",
  },
  {
    rule: "अ + इ / ई",
    result: "ए",
    example: "देव + इन्द्रः = देवेन्द्रः",
    meaning: "देव + इन्द्र",
  },
  {
    rule: "अ + उ / ऊ",
    result: "ओ",
    example: "महा + उत्सवः = महोत्सवः",
    meaning: "महान उत्सव",
  },
  {
    rule: "अ + ए / ऐ",
    result: "ऐ",
    example: "तथा + एव = तथैव",
    meaning: "उसी प्रकार",
  },
  {
    rule: "अ + ओ / औ",
    result: "औ",
    example: "वन + औषधिः = वनौषधिः",
    meaning: "वन की औषधि",
  },
];

const vyanjanExamples = [
  {
    first: "सत्",
    second: "जनः",
    result: "सज्जनः",
    explanation: "त् + ज के संयोग से ज्ज का रूप बनता है।",
  },
  {
    first: "जगत्",
    second: "ईशः",
    result: "जगदीशः",
    explanation: "त् के स्थान पर द् का परिवर्तन होता है।",
  },
  {
    first: "दिक्",
    second: "गजः",
    result: "दिग्गजः",
    explanation: "क् के स्थान पर ग् का परिवर्तन होता है।",
  },
  {
    first: "उत्",
    second: "चारणम्",
    result: "उच्चारणम्",
    explanation: "त् + च के संयोग से च्च का रूप बनता है।",
  },
];

const visargaExamples = [
  {
    original: "रामः + अस्ति",
    result: "रामोऽस्ति",
    rule: "विसर्ग के स्थान पर ओ",
  },
  {
    original: "मनः + हरः",
    result: "मनोहरः",
    rule: "विसर्ग के स्थान पर ओ",
  },
  {
    original: "नमः + ते",
    result: "नमस्ते",
    rule: "विसर्ग का स् में परिवर्तन",
  },
  {
    original: "निः + कपटः",
    result: "निष्कपटः",
    rule: "विसर्ग का ष् में परिवर्तन",
  },
];

const sandhiVicheda = [
  {
    word: "विद्यालयः",
    split: "विद्या + आलयः",
    type: "स्वर सन्धि",
  },
  {
    word: "महोत्सवः",
    split: "महा + उत्सवः",
    type: "स्वर सन्धि",
  },
  {
    word: "सज्जनः",
    split: "सत् + जनः",
    type: "व्यंजन सन्धि",
  },
  {
    word: "दिग्गजः",
    split: "दिक् + गजः",
    type: "व्यंजन सन्धि",
  },
  {
    word: "मनोहरः",
    split: "मनः + हरः",
    type: "विसर्ग सन्धि",
  },
  {
    word: "नमस्ते",
    split: "नमः + ते",
    type: "विसर्ग सन्धि",
  },
  {
    word: "देवेन्द्रः",
    split: "देव + इन्द्रः",
    type: "स्वर सन्धि",
  },
  {
    word: "जगदीशः",
    split: "जगत् + ईशः",
    type: "व्यंजन सन्धि",
  },
];

const examPoints = [
  "सन्धि का अर्थ है दो वर्णों के मिलने से होने वाला परिवर्तन।",
  "स्वरों के मेल से होने वाली सन्धि को स्वर सन्धि कहते हैं।",
  "व्यंजनों के मेल से होने वाली सन्धि को व्यंजन सन्धि कहते हैं।",
  "विसर्ग (ः) के कारण होने वाले परिवर्तन को विसर्ग सन्धि कहते हैं।",
  "सन्धि-विच्छेद में संयुक्त शब्द को उसके मूल शब्दों में अलग किया जाता है।",
  "विद्यालयः का सन्धि-विच्छेद विद्या + आलयः है।",
  "सज्जनः का सन्धि-विच्छेद सत् + जनः है।",
  "मनोहरः का सन्धि-विच्छेद मनः + हरः है।",
];

const memoryTricks = [
  {
    title: "स्वर सन्धि",
    trick: "स्वर + स्वर",
    icon: "🔤",
  },
  {
    title: "व्यंजन सन्धि",
    trick: "व्यंजन में परिवर्तन",
    icon: "🔗",
  },
  {
    title: "विसर्ग सन्धि",
    trick: "ः का परिवर्तन",
    icon: "✨",
  },
];

export default function SandhiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 via-purple-700 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/learn/sanskrit/vibhakti"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Vibhakti
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              सन्धि
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत व्याकरण में सन्धि के प्रकार, नियम, उदाहरण और
              सन्धि-विच्छेद को सरल हिन्दी में सीखें।
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Link2 className="text-indigo-600" size={30} />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                सन्धि का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                दो वर्णों के पास-पास आने पर उनके मेल से जो परिवर्तन
                होता है, उसे सन्धि कहते हैं। संस्कृत भाषा में शब्दों
                को सुन्दर और सरल उच्चारण योग्य बनाने में सन्धि का
                महत्वपूर्ण योगदान है।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  पहला शब्द + दूसरा शब्द → सन्धि → नया शब्द
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF SANDHI */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              सन्धि के प्रमुख प्रकार
            </h2>

            <p className="text-gray-500 mt-1">
              Three Major Types of Sanskrit Sandhi
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sandhiTypes.map((item, index) => (
            <article
              key={item.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm font-bold text-indigo-600">
                {item.english}
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-5 space-y-3">
                {item.examples.map((example) => (
                  <div
                    key={example}
                    className="rounded-2xl bg-indigo-50 p-4 font-bold text-gray-800"
                  >
                    {example}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SWAR SANDHI */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Star className="text-indigo-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                स्वर सन्धि — उदाहरण और नियम
              </h2>

              <p className="text-gray-500 mt-1">
                Vowel Sandhi Examples
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {swarExamples.map((item) => (
              <article
                key={item.rule}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6 hover:bg-indigo-50 hover:border-indigo-200 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-indigo-600 text-white px-4 py-2 font-black">
                    {item.rule}
                  </span>

                  <span className="text-xl font-black text-purple-700">
                    {item.result}
                  </span>
                </div>

                <p className="mt-5 text-lg font-black text-gray-900">
                  {item.example}
                </p>

                <p className="mt-2 text-gray-600">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VYANJAN SANDHI */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Link2 className="text-purple-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              व्यंजन सन्धि — प्रमुख उदाहरण
            </h2>

            <p className="text-gray-500 mt-1">
              Consonant Sandhi Examples
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {vyanjanExamples.map((item, index) => (
            <article
              key={item.result}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-black text-gray-900">
                  {item.first}
                </span>

                <span className="text-purple-600 font-black">+</span>

                <span className="font-black text-gray-900">
                  {item.second}
                </span>

                <span className="text-purple-600 font-black">=</span>

                <span className="rounded-xl bg-purple-600 text-white px-4 py-2 font-black">
                  {item.result}
                </span>
              </div>

              <div className="mt-5 rounded-2xl bg-purple-50 p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.explanation}
                </p>
              </div>

              <span className="mt-4 inline-block text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                उदाहरण {index + 1}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* VISARGA SANDHI */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-fuchsia-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                विसर्ग सन्धि — प्रमुख उदाहरण
              </h2>

              <p className="text-gray-500 mt-1">
                Visarga Sandhi Examples
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {visargaExamples.map((item) => (
              <article
                key={item.result}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6"
              >
                <p className="text-lg font-bold text-gray-700">
                  {item.original}
                </p>

                <div className="mt-4 rounded-2xl bg-fuchsia-50 p-5">
                  <p className="text-2xl font-black text-fuchsia-700">
                    {item.result}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-600">
                    {item.rule}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SANDHI VICHHEDA */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              सन्धि-विच्छेद
            </h2>

            <p className="text-gray-500 mt-1">
              संयुक्त शब्द को मूल शब्दों में अलग करना
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="text-left p-4 font-black">
                    सन्धि शब्द
                  </th>

                  <th className="text-left p-4 font-black">
                    सन्धि-विच्छेद
                  </th>

                  <th className="text-left p-4 font-black">
                    प्रकार
                  </th>
                </tr>
              </thead>

              <tbody>
                {sandhiVicheda.map((item) => (
                  <tr
                    key={item.word}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="p-4 font-black text-gray-900">
                      {item.word}
                    </td>

                    <td className="p-4 font-bold text-indigo-700">
                      {item.split}
                    </td>

                    <td className="p-4">
                      <span className="inline-block rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-sm font-black">
                        {item.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MEMORY TRICKS */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-yellow-500" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                सन्धि याद रखने की आसान ट्रिक
              </h2>

              <p className="text-gray-500 mt-1">
                Quick Memory Guide
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {memoryTricks.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl">
                    {item.icon}
                  </div>

                  <span className="w-9 h-9 rounded-xl bg-white flex items-center justify-center font-black text-indigo-700">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 font-bold text-indigo-700">
                  {item.trick}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAM POINTS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black">
                Important Exam Points
              </h2>

              <p className="mt-3 text-white/90">
                परीक्षा में सन्धि और सन्धि-विच्छेद से जुड़े प्रश्न
                अक्सर पूछे जाते हैं।
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                {examPoints.map((point, index) => (
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

      {/* QUICK REVISION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-center gap-3 mb-7">
            <BookOpen className="text-indigo-600" size={30} />

            <h2 className="text-3xl font-black text-gray-900">
              Quick Revision
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-4 font-black text-indigo-800">
                    प्रकार
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    पहचान
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    उदाहरण
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">
                    स्वर सन्धि
                  </td>

                  <td className="p-4 text-gray-600">
                    स्वर + स्वर
                  </td>

                  <td className="p-4 font-bold text-indigo-700">
                    देव + इन्द्रः = देवेन्द्रः
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">
                    व्यंजन सन्धि
                  </td>

                  <td className="p-4 text-gray-600">
                    व्यंजन में परिवर्तन
                  </td>

                  <td className="p-4 font-bold text-indigo-700">
                    सत् + जनः = सज्जनः
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-black">
                    विसर्ग सन्धि
                  </td>

                  <td className="p-4 text-gray-600">
                    विसर्ग (ः) में परिवर्तन
                  </td>

                  <td className="p-4 font-bold text-indigo-700">
                    मनः + हरः = मनोहरः
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/learn/sanskrit/vibhakti"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              विभक्ति
            </Link>

            <Link
              href="/learn/sanskrit/samas"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              समास
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
            Sanskrit Sandhi Complete
          </h2>

          <p className="mt-3 text-gray-400">
            सन्धि, सन्धि-विच्छेद और प्रमुख उदाहरणों का अध्ययन पूरा करें।
          </p>
        </div>
      </section>
    </main>
  );
}