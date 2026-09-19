
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Sparkles,
  UserRound,
} from "lucide-react";

const pronounTypes = [
  {
    title: "पुरुषवाचक सर्वनाम",
    english: "Personal Pronoun",
    description: "जो सर्वनाम बोलने वाले, सुनने वाले या किसी अन्य व्यक्ति का बोध कराते हैं।",
    examples: "अहम्, त्वम्, सः, सा, तत्",
  },
  {
    title: "निश्चयवाचक सर्वनाम",
    english: "Demonstrative Pronoun",
    description: "जो किसी निश्चित व्यक्ति या वस्तु की ओर संकेत करते हैं।",
    examples: "अयम्, इयम्, इदम्, असौ",
  },
  {
    title: "प्रश्नवाचक सर्वनाम",
    english: "Interrogative Pronoun",
    description: "जिनका प्रयोग प्रश्न पूछने के लिए किया जाता है।",
    examples: "कः, का, किम्",
  },
  {
    title: "सम्बन्धवाचक सर्वनाम",
    english: "Relative Pronoun",
    description: "जो दो वाक्यों या विचारों के बीच सम्बन्ध स्थापित करते हैं।",
    examples: "यः, या, यत्",
  },
  {
    title: "अनिश्चयवाचक सर्वनाम",
    english: "Indefinite Pronoun",
    description: "जो किसी निश्चित व्यक्ति या वस्तु का स्पष्ट बोध नहीं कराते।",
    examples: "कश्चित्, काचित्, किञ्चित्",
  },
  {
    title: "निजवाचक सर्वनाम",
    english: "Reflexive Pronoun",
    description: "जो कर्ता के अपने ही होने का बोध कराते हैं।",
    examples: "स्वयम्, आत्मन्",
  },
];

const personalPronouns = [
  {
    person: "प्रथम पुरुष",
    meaning: "First Person",
    singular: "अहम्",
    dual: "आवाम्",
    plural: "वयम्",
  },
  {
    person: "द्वितीय पुरुष",
    meaning: "Second Person",
    singular: "त्वम्",
    dual: "युवाम्",
    plural: "यूयम्",
  },
  {
    person: "तृतीय पुरुष",
    meaning: "Third Person",
    singular: "सः / सा / तत्",
    dual: "तौ / ते / ते",
    plural: "ते / ताः / तानि",
  },
];

const questionWords = [
  {
    word: "कः",
    meaning: "कौन? — पुल्लिंग",
  },
  {
    word: "का",
    meaning: "कौन? — स्त्रीलिंग",
  },
  {
    word: "किम्",
    meaning: "क्या? — नपुंसकलिंग",
  },
];

const examples = [
  {
    sanskrit: "अहम् छात्रः अस्मि।",
    hindi: "मैं छात्र हूँ।",
  },
  {
    sanskrit: "त्वम् पठसि।",
    hindi: "तुम पढ़ते हो।",
  },
  {
    sanskrit: "सः विद्यालयं गच्छति।",
    hindi: "वह विद्यालय जाता है।",
  },
  {
    sanskrit: "सा पुस्तकं पठति।",
    hindi: "वह पुस्तक पढ़ती है।",
  },
  {
    sanskrit: "वयम् संस्कृतं पठामः।",
    hindi: "हम संस्कृत पढ़ते हैं।",
  },
  {
    sanskrit: "कः आगच्छति?",
    hindi: "कौन आ रहा है?",
  },
];

const importantPoints = [
  "सर्वनाम संज्ञा के स्थान पर प्रयुक्त होने वाले शब्द हैं।",
  "अहम्, आवाम् और वयम् प्रथम पुरुष के सर्वनाम हैं।",
  "त्वम्, युवाम् और यूयम् द्वितीय पुरुष के सर्वनाम हैं।",
  "सः, सा और तत् तृतीय पुरुष के प्रमुख सर्वनाम हैं।",
  "कः, का और किम् प्रश्न पूछने के लिए प्रयोग होते हैं।",
  "सर्वनामों का सही प्रयोग वचन, लिंग और विभक्ति के अनुसार समझना चाहिए।",
];

export default function SarvanamPage() {
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
              सर्वनाम (Pronoun)
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत सर्वनाम के प्रकार, पुरुष, वचन और प्रयोग को
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
              <UserRound className="text-indigo-600" size={30} />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                सर्वनाम का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                संज्ञा के स्थान पर जिन शब्दों का प्रयोग किया जाता है,
                उन्हें सर्वनाम कहते हैं। जैसे रामः पठति के स्थान पर
                सः पठति कहा जा सकता है। संस्कृत में सर्वनामों के
                विभिन्न रूप पुरुष, वचन, लिंग और विभक्ति के अनुसार
                प्रयोग किए जाते हैं।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  संज्ञा → उसके स्थान पर शब्द → सर्वनाम
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              सर्वनाम के प्रमुख प्रकार
            </h2>

            <p className="text-gray-500 mt-1">
              Major Types of Sanskrit Pronouns
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pronounTypes.map((type, index) => (
            <article
              key={type.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center font-black text-indigo-600">
                  {index + 1}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {type.english}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {type.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {type.description}
              </p>

              <div className="mt-4 rounded-2xl bg-indigo-50 p-4">
                <p className="text-sm font-bold text-gray-500">
                  उदाहरण
                </p>

                <p className="mt-1 font-black text-indigo-700">
                  {type.examples}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PERSONAL PRONOUNS */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                पुरुषवाचक सर्वनाम
              </h2>

              <p className="text-gray-500 mt-1">
                Personal Pronouns
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="text-left p-4 font-black text-purple-800">
                      पुरुष
                    </th>

                    <th className="text-left p-4 font-black text-purple-800">
                      English
                    </th>

                    <th className="text-left p-4 font-black text-purple-800">
                      एकवचन
                    </th>

                    <th className="text-left p-4 font-black text-purple-800">
                      द्विवचन
                    </th>

                    <th className="text-left p-4 font-black text-purple-800">
                      बहुवचन
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {personalPronouns.map((item) => (
                    <tr
                      key={item.person}
                      className="border-b border-gray-200 last:border-0"
                    >
                      <td className="p-4 font-black text-gray-900">
                        {item.person}
                      </td>

                      <td className="p-4 text-gray-500 font-semibold">
                        {item.meaning}
                      </td>

                      <td className="p-4 font-bold text-indigo-700">
                        {item.singular}
                      </td>

                      <td className="p-4 font-bold text-indigo-700">
                        {item.dual}
                      </td>

                      <td className="p-4 font-bold text-indigo-700">
                        {item.plural}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTION PRONOUNS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              प्रश्नवाचक सर्वनाम
            </h2>

            <p className="text-gray-500 mt-1">
              Interrogative Pronouns
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {questionWords.map((item) => (
            <article
              key={item.word}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl font-black text-indigo-600">
                {item.word}
              </div>

              <p className="mt-4 text-gray-600 font-semibold">
                {item.meaning}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                वाक्यों में सर्वनाम
              </h2>

              <p className="text-gray-500 mt-1">
                Pronouns in Sentences
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {examples.map((example, index) => (
              <article
                key={example.sanskrit}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div>
                    <p className="text-xl font-black text-gray-900">
                      {example.sanskrit}
                    </p>

                    <p className="mt-2 text-gray-600">
                      {example.hindi}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT POINTS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
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
                परीक्षा की तैयारी के लिए इन बातों को याद रखें।
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                {importantPoints.map((point, index) => (
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
              href="/learn/sanskrit/sangya"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              संज्ञा (Noun)
            </Link>

            <Link
              href="/learn/sanskrit/kriya"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              क्रिया (Verb)
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
            Sanskrit Pronoun Study Complete
          </h2>

          <p className="mt-3 text-gray-400">
            Practice पुरुषवाचक, प्रश्नवाचक और अन्य सर्वनाम regularly.
          </p>
        </div>
      </section>
    </main>
  );
}

