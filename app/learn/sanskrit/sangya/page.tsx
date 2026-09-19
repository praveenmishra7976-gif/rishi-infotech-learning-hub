
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const genders = [
  {
    title: "पुल्लिंग",
    english: "Masculine",
    examples: ["रामः", "बालकः", "गजः", "वृक्षः"],
    description: "जिन संज्ञा शब्दों से पुरुष या पुरुषवाचक वस्तु का बोध होता है।",
  },
  {
    title: "स्त्रीलिंग",
    english: "Feminine",
    examples: ["सीता", "बालिका", "नदी", "लता"],
    description: "जिन संज्ञा शब्दों से स्त्री या स्त्रीवाचक वस्तु का बोध होता है।",
  },
  {
    title: "नपुंसकलिंग",
    english: "Neuter",
    examples: ["फलम्", "जलम्", "पुस्तकम्", "वनम्"],
    description: "जिन संज्ञा शब्दों का प्रयोग न पुरुष के लिए और न स्त्री के लिए होता है।",
  },
];

const nounTypes = [
  {
    title: "व्यक्तिवाचक संज्ञा",
    description: "किसी विशेष व्यक्ति, स्थान या वस्तु के नाम का बोध कराने वाले शब्द।",
    examples: "रामः, सीता, गङ्गा, भारतम्",
  },
  {
    title: "जातिवाचक संज्ञा",
    description: "पूरी जाति, वर्ग या समूह के सामान्य नाम का बोध कराने वाले शब्द।",
    examples: "बालकः, पक्षी, वृक्षः, नदी",
  },
  {
    title: "द्रव्यवाचक संज्ञा",
    description: "किसी पदार्थ या द्रव्य का बोध कराने वाले शब्द।",
    examples: "जलम्, सुवर्णम्, दुग्धम्",
  },
  {
    title: "भाववाचक संज्ञा",
    description: "गुण, अवस्था, भाव या कार्य का बोध कराने वाले शब्द।",
    examples: "सौन्दर्यम्, मित्रता, ज्ञानम्",
  },
];

const examples = [
  {
    noun: "रामः",
    meaning: "राम",
    gender: "पुल्लिंग",
  },
  {
    noun: "सीता",
    meaning: "सीता",
    gender: "स्त्रीलिंग",
  },
  {
    noun: "फलम्",
    meaning: "फल",
    gender: "नपुंसकलिंग",
  },
  {
    noun: "गजः",
    meaning: "हाथी",
    gender: "पुल्लिंग",
  },
  {
    noun: "नदी",
    meaning: "नदी",
    gender: "स्त्रीलिंग",
  },
  {
    noun: "पुस्तकम्",
    meaning: "पुस्तक",
    gender: "नपुंसकलिंग",
  },
];

const importantPoints = [
  "संज्ञा किसी व्यक्ति, वस्तु, स्थान, पदार्थ या भाव के नाम को बताती है।",
  "संस्कृत में संज्ञा शब्दों का लिंग जानना बहुत महत्वपूर्ण है।",
  "मुख्य तीन लिंग हैं — पुल्लिंग, स्त्रीलिंग और नपुंसकलिंग।",
  "संज्ञा शब्दों के रूप वचन और विभक्ति के अनुसार बदल सकते हैं।",
  "रामः पुल्लिंग, सीता स्त्रीलिंग और फलम् नपुंसकलिंग का उदाहरण है।",
  "संज्ञा के सही रूप सीखने के लिए शब्दरूप का अभ्यास करें।",
];

export default function SangyaPage() {
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
              संज्ञा (Noun)
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत में संज्ञा शब्द, उनके लिंग, प्रकार और प्रयोग को
              सरल उदाहरणों के साथ सीखें।
            </p>
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
                संज्ञा का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                किसी व्यक्ति, वस्तु, स्थान, पदार्थ, प्राणी या भाव के
                नाम को संज्ञा कहते हैं। संस्कृत व्याकरण में संज्ञा
                शब्दों का विशेष महत्व है क्योंकि इनके रूप लिंग,
                वचन और विभक्ति के अनुसार बदलते हैं।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  नाम → संज्ञा → लिंग → वचन → विभक्ति → शब्दरूप
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GENDER */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              संज्ञा के तीन लिंग
            </h2>

            <p className="text-gray-500 mt-1">
              Three Genders in Sanskrit
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {genders.map((gender) => (
            <article
              key={gender.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-2xl font-black text-indigo-600">
                {gender.title.charAt(0)}
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {gender.title}
              </h3>

              <p className="mt-1 text-sm font-bold text-indigo-600">
                {gender.english}
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {gender.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {gender.examples.map((example) => (
                  <span
                    key={example}
                    className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 font-bold text-gray-700"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TYPES */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                संज्ञा के प्रमुख प्रकार
              </h2>

              <p className="text-gray-500 mt-1">
                Major Types of Nouns
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {nounTypes.map((type, index) => (
              <article
                key={type.title}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-gray-900">
                      {type.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {type.description}
                    </p>

                    <div className="mt-4 rounded-2xl bg-white border border-gray-100 p-4">
                      <p className="text-sm font-bold text-gray-500">
                        उदाहरण
                      </p>

                      <p className="mt-1 font-black text-purple-700">
                        {type.examples}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              संज्ञा के उदाहरण
            </h2>

            <p className="text-gray-500 mt-1">
              Common Sanskrit Noun Examples
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-4 font-black text-indigo-800">
                    संस्कृत शब्द
                  </th>
                  <th className="text-left p-4 font-black text-indigo-800">
                    अर्थ
                  </th>
                  <th className="text-left p-4 font-black text-indigo-800">
                    लिंग
                  </th>
                </tr>
              </thead>

              <tbody>
                {examples.map((example) => (
                  <tr
                    key={example.noun}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="p-4 font-black text-gray-900">
                      {example.noun}
                    </td>

                    <td className="p-4 text-gray-600">
                      {example.meaning}
                    </td>

                    <td className="p-4 font-bold text-indigo-700">
                      {example.gender}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IMPORTANT POINTS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Important Exam Points
              </h2>

              <p className="mt-3 text-white/90">
                परीक्षा में संज्ञा से संबंधित इन बातों पर विशेष ध्यान दें।
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                {importantPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 bg-white/10 rounded-2xl p-4"
                  >
                    <CheckCircle size={22} className="shrink-0 mt-1" />

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
              href="/learn/sanskrit/sanskrit-alphabet"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Sanskrit Alphabet
            </Link>

            <Link
              href="/learn/sanskrit/sarvanam"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              सर्वनाम (Pronoun)
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
            Sanskrit Noun Study Complete
          </h2>

          <p className="mt-3 text-gray-400">
            Practice Sanskrit nouns with gender, number and case forms.
          </p>
        </div>
      </section>
    </main>
  );
}
