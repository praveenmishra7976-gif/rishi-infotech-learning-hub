"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Languages,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const translationTopics = [
  {
    title: "Sanskrit to Hindi",
    description:
      "संस्कृत वाक्यों का सरल हिन्दी में अनुवाद करना सीखें।",
    icon: "🇮🇳",
  },
  {
    title: "Hindi to Sanskrit",
    description:
      "सरल हिन्दी वाक्यों को संस्कृत में बदलने का अभ्यास करें।",
    icon: "🔄",
  },
  {
    title: "Word Meaning",
    description:
      "महत्वपूर्ण संस्कृत शब्दों के हिन्दी अर्थ सीखें।",
    icon: "📖",
  },
  {
    title: "Sentence Translation",
    description:
      "संस्कृत वाक्यों की पहचान करके उनका सही अर्थ समझें।",
    icon: "📝",
  },
  {
    title: "Grammar Based Translation",
    description:
      "लिङ्ग, वचन, पुरुष, विभक्ति और क्रिया के आधार पर अनुवाद करें।",
    icon: "⚙️",
  },
  {
    title: "Exam Translation",
    description:
      "स्कूल और प्रतियोगी परीक्षाओं के लिए महत्वपूर्ण अनुवाद का अभ्यास करें।",
    icon: "🎯",
  },
];

const vocabulary = [
  {
    sanskrit: "विद्यालयः",
    hindi: "स्कूल / विद्यालय",
    english: "School",
  },
  {
    sanskrit: "पुस्तकम्",
    hindi: "किताब",
    english: "Book",
  },
  {
    sanskrit: "गृहम्",
    hindi: "घर",
    english: "House",
  },
  {
    sanskrit: "जलम्",
    hindi: "पानी",
    english: "Water",
  },
  {
    sanskrit: "फलम्",
    hindi: "फल",
    english: "Fruit",
  },
  {
    sanskrit: "बालकः",
    hindi: "लड़का",
    english: "Boy",
  },
  {
    sanskrit: "बालिका",
    hindi: "लड़की",
    english: "Girl",
  },
  {
    sanskrit: "शिक्षकः",
    hindi: "अध्यापक",
    english: "Teacher",
  },
];

const examples = [
  {
    sanskrit: "रामः विद्यालयं गच्छति।",
    hindi: "राम विद्यालय जाता है।",
    english: "Rama goes to school.",
  },
  {
    sanskrit: "सीता पुस्तकं पठति।",
    hindi: "सीता पुस्तक पढ़ती है।",
    english: "Sita reads a book.",
  },
  {
    sanskrit: "बालकः फलम् खादति।",
    hindi: "लड़का फल खाता है।",
    english: "The boy eats fruit.",
  },
  {
    sanskrit: "बालिका जलं पिबति।",
    hindi: "लड़की पानी पीती है।",
    english: "The girl drinks water.",
  },
  {
    sanskrit: "शिक्षकः पाठं पाठयति।",
    hindi: "अध्यापक पाठ पढ़ाता है।",
    english: "The teacher teaches the lesson.",
  },
  {
    sanskrit: "छात्राः क्रीडाङ्गणे क्रीडन्ति।",
    hindi: "छात्र खेल के मैदान में खेलते हैं।",
    english: "Students play in the playground.",
  },
];

const tips = [
  "पहले वाक्य में कर्ता पहचानें।",
  "फिर क्रिया को पहचानें।",
  "कर्म और अन्य शब्दों की भूमिका समझें।",
  "लिङ्ग और वचन पर ध्यान दें।",
  "विभक्ति के अनुसार शब्द का सम्बन्ध समझें।",
  "अनुवाद करते समय वाक्य का पूरा अर्थ समझें।",
];

export default function SanskritTranslationPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-500 text-white">

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
              Sanskrit Translation
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत से हिन्दी और हिन्दी से संस्कृत अनुवाद
              सरल उदाहरणों, शब्दार्थ और व्याकरण के साथ सीखें।
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <Languages
                className="text-emerald-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                संस्कृत अनुवाद क्या है?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                किसी संस्कृत शब्द या वाक्य का सही अर्थ दूसरी
                भाषा में बताना अनुवाद कहलाता है। संस्कृत
                अनुवाद करते समय शब्दों के अर्थ के साथ-साथ
                लिङ्ग, वचन, विभक्ति, पुरुष और क्रिया को समझना
                बहुत महत्वपूर्ण है।
              </p>

              <div className="mt-5 rounded-2xl bg-emerald-50 p-5">

                <p className="font-black text-emerald-800">
                  Translation Formula
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  शब्द पहचानें → व्याकरण समझें → वाक्य का अर्थ
                  समझें → सही अनुवाद लिखें
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-emerald-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Translation Topics
            </h2>

            <p className="text-gray-500 mt-1">
              अनुवाद सीखने के महत्वपूर्ण भाग।
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {translationTopics.map((topic, index) => (

            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="flex items-start justify-between">

                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl">
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

      {/* VOCABULARY */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <BookOpen
              className="text-emerald-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Sanskrit Vocabulary
              </h2>

              <p className="text-gray-500 mt-1">
                रोज़ाना उपयोग के महत्वपूर्ण शब्द।
              </p>

            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[600px] border-collapse">

              <thead>

                <tr className="bg-emerald-50">

                  <th className="text-left p-4 font-black text-emerald-800">
                    संस्कृत
                  </th>

                  <th className="text-left p-4 font-black text-emerald-800">
                    हिन्दी
                  </th>

                  <th className="text-left p-4 font-black text-emerald-800">
                    English
                  </th>

                </tr>

              </thead>

              <tbody>

                {vocabulary.map((word) => (

                  <tr
                    key={word.sanskrit}
                    className="border-b border-gray-100"
                  >

                    <td className="p-4 font-black text-gray-900">
                      {word.sanskrit}
                    </td>

                    <td className="p-4 text-gray-700">
                      {word.hindi}
                    </td>

                    <td className="p-4 text-gray-500">
                      {word.english}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Languages
            className="text-emerald-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Translation Examples
            </h2>

            <p className="text-gray-500 mt-1">
              संस्कृत वाक्यों का हिन्दी और English अर्थ।
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {examples.map((example) => (

            <article
              key={example.sanskrit}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >

              <div className="rounded-2xl bg-emerald-50 p-5">

                <p className="text-2xl font-black text-emerald-700">
                  {example.sanskrit}
                </p>

              </div>

              <div className="mt-5 space-y-3">

                <div>

                  <p className="text-xs font-black text-gray-400">
                    हिन्दी
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    {example.hindi}
                  </p>

                </div>

                <div>

                  <p className="text-xs font-black text-gray-400">
                    English
                  </p>

                  <p className="mt-1 text-gray-700">
                    {example.english}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* HOW TO TRANSLATE */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">

              <Lightbulb size={30} />

            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                How to Translate Sanskrit
              </h2>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">

                {tips.map((tip, index) => (

                  <div
                    key={tip}
                    className="flex items-start gap-3 bg-white/10 rounded-xl p-4"
                  >

                    <span className="w-7 h-7 shrink-0 rounded-lg bg-white text-emerald-700 flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </span>

                    <p className="text-white/95">
                      {tip}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PRACTICE */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="flex items-center gap-3">

            <CheckCircle2
              className="text-emerald-600"
              size={30}
            />

            <h2 className="text-3xl font-black text-gray-900">
              Translation Practice
            </h2>

          </div>

          <p className="mt-3 text-gray-500">
            पहले स्वयं अनुवाद करें, फिर नीचे दिए उदाहरण से
            अपना उत्तर जाँचें।
          </p>

          <div className="mt-7 grid md:grid-cols-2 gap-5">

            {[
              {
                q: "रामः फलम् खादति।",
                a: "राम फल खाता है।",
              },
              {
                q: "सीता विद्यालयं गच्छति।",
                a: "सीता विद्यालय जाती है।",
              },
              {
                q: "बालकः पुस्तकं पठति।",
                a: "लड़का पुस्तक पढ़ता है।",
              },
              {
                q: "छात्राः क्रीडन्ति।",
                a: "छात्र खेलते हैं।",
              },
            ].map((item, index) => (

              <div
                key={item.q}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-5"
              >

                <div className="flex gap-4">

                  <span className="w-9 h-9 shrink-0 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </span>

                  <div>

                    <p className="text-lg font-black text-gray-900">
                      {item.q}
                    </p>

                    <p className="mt-3 text-emerald-700 font-bold">
                      उत्तर: {item.a}
                    </p>

                  </div>

                </div>

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
              href="/learn/sanskrit/sanskrit-grammar"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Sanskrit Grammar
            </Link>

            <Link
              href="/learn/sanskrit/subhashitani"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700"
            >
              Next: Subhashitani
              <ArrowRight size={18} />
            </Link>

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
            Keep Learning Sanskrit
          </h2>

          <p className="mt-3 text-gray-400">
            Continue with Subhashitani and Sanskrit Literature.
          </p>

        </div>

      </section>

    </main>
  );
}