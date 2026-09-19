
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const lakaras = [
  {
    name: "लट् लकार",
    english: "Present Tense",
    use: "वर्तमान काल",
    description:
      "वर्तमान समय में होने वाले कार्य को बताने के लिए लट् लकार का प्रयोग किया जाता है।",
    example: "रामः पठति।",
    meaning: "राम पढ़ता है।",
    icon: "⏱️",
  },
  {
    name: "लङ् लकार",
    english: "Past Tense",
    use: "भूतकाल",
    description:
      "बीते हुए समय में हुए कार्य को बताने के लिए लङ् लकार का प्रयोग किया जाता है।",
    example: "रामः अपठत्।",
    meaning: "राम ने पढ़ा।",
    icon: "⏮️",
  },
  {
    name: "लृट् लकार",
    english: "Future Tense",
    use: "भविष्यत् काल",
    description:
      "भविष्य में होने वाले कार्य को बताने के लिए लृट् लकार का प्रयोग किया जाता है।",
    example: "रामः पठिष्यति।",
    meaning: "राम पढ़ेगा।",
    icon: "🔮",
  },
  {
    name: "लोट् लकार",
    english: "Imperative Mood",
    use: "आज्ञा, प्रार्थना, उपदेश",
    description:
      "आज्ञा, निवेदन, प्रार्थना, उपदेश या अनुमति का भाव व्यक्त करने के लिए लोट् लकार का प्रयोग होता है।",
    example: "पठतु।",
    meaning: "पढ़े / पढ़िए।",
    icon: "📢",
  },
  {
    name: "विधिलिङ् लकार",
    english: "Optative Mood",
    use: "चाहिए, संभावना, इच्छा",
    description:
      "इच्छा, संभावना, सलाह या कर्तव्य का भाव व्यक्त करने के लिए विधिलिङ् का प्रयोग किया जाता है।",
    example: "सः पठेत्।",
    meaning: "उसे पढ़ना चाहिए।",
    icon: "💡",
  },
];

const presentForms = [
  {
    person: "प्रथम पुरुष",
    singular: "पठति",
    dual: "पठतः",
    plural: "पठन्ति",
  },
  {
    person: "मध्यम पुरुष",
    singular: "पठसि",
    dual: "पठथः",
    plural: "पठथ",
  },
  {
    person: "उत्तम पुरुष",
    singular: "पठामि",
    dual: "पठावः",
    plural: "पठामः",
  },
];

const pastForms = [
  {
    person: "प्रथम पुरुष",
    singular: "अपठत्",
    dual: "अपठताम्",
    plural: "अपठन्",
  },
  {
    person: "मध्यम पुरुष",
    singular: "अपठः",
    dual: "अपठतम्",
    plural: "अपठत",
  },
  {
    person: "उत्तम पुरुष",
    singular: "अपठम्",
    dual: "अपठाव",
    plural: "अपठाम",
  },
];

const futureForms = [
  {
    person: "प्रथम पुरुष",
    singular: "पठिष्यति",
    dual: "पठिष्यतः",
    plural: "पठिष्यन्ति",
  },
  {
    person: "मध्यम पुरुष",
    singular: "पठिष्यसि",
    dual: "पठिष्यथः",
    plural: "पठिष्यथ",
  },
  {
    person: "उत्तम पुरुष",
    singular: "पठिष्यामि",
    dual: "पठिष्यावः",
    plural: "पठिष्यामः",
  },
];

const examples = [
  {
    lakara: "लट्",
    sentence: "बालकः विद्यालयं गच्छति।",
    meaning: "बालक विद्यालय जाता है।",
  },
  {
    lakara: "लङ्",
    sentence: "बालकः विद्यालयम् अगच्छत्।",
    meaning: "बालक विद्यालय गया।",
  },
  {
    lakara: "लृट्",
    sentence: "बालकः विद्यालयं गमिष्यति।",
    meaning: "बालक विद्यालय जाएगा।",
  },
  {
    lakara: "लोट्",
    sentence: "विद्यालयं गच्छतु।",
    meaning: "विद्यालय जाए।",
  },
  {
    lakara: "विधिलिङ्",
    sentence: "बालकः विद्यालयं गच्छेत्।",
    meaning: "बालक को विद्यालय जाना चाहिए।",
  },
];

const examPoints = [
  "लट् लकार का प्रयोग वर्तमान काल के लिए होता है।",
  "लङ् लकार का प्रयोग भूतकाल के लिए होता है।",
  "लृट् लकार का प्रयोग भविष्यत् काल के लिए होता है।",
  "लोट् लकार से आज्ञा, प्रार्थना, उपदेश और अनुमति का भाव व्यक्त होता है।",
  "विधिलिङ् से इच्छा, संभावना, सलाह और कर्तव्य का भाव व्यक्त हो सकता है।",
  "प्रत्येक लकार में पुरुष और वचन के अनुसार क्रिया-रूप बदलते हैं।",
];

const quickRevision = [
  {
    lakara: "लट्",
    kaal: "वर्तमान काल",
    example: "पठति",
  },
  {
    lakara: "लङ्",
    kaal: "भूतकाल",
    example: "अपठत्",
  },
  {
    lakara: "लृट्",
    kaal: "भविष्यत् काल",
    example: "पठिष्यति",
  },
  {
    lakara: "लोट्",
    kaal: "आज्ञा / प्रार्थना",
    example: "पठतु",
  },
  {
    lakara: "विधिलिङ्",
    kaal: "इच्छा / चाहिए / संभावना",
    example: "पठेत्",
  },
];

function FormsTable({
  title,
  subtitle,
  forms,
}: {
  title: string;
  subtitle: string;
  forms: {
    person: string;
    singular: string;
    dual: string;
    plural: string;
  }[];
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-14">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
        <div className="flex items-start gap-4 mb-7">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
            <BookOpen className="text-indigo-600" size={26} />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              {title}
            </h2>
            <p className="mt-1 text-gray-500">{subtitle}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="text-left p-4 font-black text-indigo-800">
                  पुरुष
                </th>
                <th className="text-left p-4 font-black text-indigo-800">
                  एकवचन
                </th>
                <th className="text-left p-4 font-black text-indigo-800">
                  द्विवचन
                </th>
                <th className="text-left p-4 font-black text-indigo-800">
                  बहुवचन
                </th>
              </tr>
            </thead>

            <tbody>
              {forms.map((form) => (
                <tr
                  key={form.person}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="p-4 font-black text-gray-900">
                    {form.person}
                  </td>
                  <td className="p-4 font-bold text-indigo-700">
                    {form.singular}
                  </td>
                  <td className="p-4 font-bold text-indigo-700">
                    {form.dual}
                  </td>
                  <td className="p-4 font-bold text-indigo-700">
                    {form.plural}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function LakaraPage() {
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
              लकार
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत के प्रमुख लकारों को सरल भाषा, क्रिया-रूप,
              उदाहरण और अभ्यास के साथ सीखें।
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Clock className="text-indigo-600" size={30} />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                लकार का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                संस्कृत व्याकरण में क्रिया के काल और भाव को व्यक्त
                करने के लिए विभिन्न लकारों का प्रयोग किया जाता है।
                लकार के अनुसार क्रिया का रूप बदलता है।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  लकार → काल / भाव → पुरुष + वचन → क्रिया-रूप
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAKARA CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              प्रमुख लकार
            </h2>
            <p className="text-gray-500 mt-1">
              Important Sanskrit Lakara Forms
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lakaras.map((item, index) => (
            <article
              key={item.name}
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

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {item.name}
              </h3>

              <p className="mt-1 text-sm font-bold text-indigo-600">
                {item.english}
              </p>

              <div className="mt-3 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-black text-purple-700">
                {item.use}
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-4">
                <p className="text-xs font-bold text-gray-500">
                  उदाहरण
                </p>

                <p className="mt-1 font-black text-indigo-700">
                  {item.example}
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  {item.meaning}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRESENT FORMS */}
      <FormsTable
        title="लट् लकार — पठ् धातु"
        subtitle="वर्तमान काल — To read / पढ़ना"
        forms={presentForms}
      />

      {/* PAST FORMS */}
      <FormsTable
        title="लङ् लकार — पठ् धातु"
        subtitle="भूतकाल — Past tense"
        forms={pastForms}
      />

      {/* FUTURE FORMS */}
      <FormsTable
        title="लृट् लकार — पठ् धातु"
        subtitle="भविष्यत् काल — Future tense"
        forms={futureForms}
      />

      {/* EXAMPLES */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                लकार के वाक्य उदाहरण
              </h2>

              <p className="text-gray-500 mt-1">
                Lakara Examples in Sanskrit
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {examples.map((example, index) => (
              <article
                key={example.sentence}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6 hover:bg-indigo-50 hover:border-indigo-200 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div>
                    <span className="inline-block text-xs font-black bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                      {example.lakara}
                    </span>

                    <p className="mt-3 text-xl font-black text-gray-900">
                      {example.sentence}
                    </p>

                    <p className="mt-2 text-gray-600">
                      {example.meaning}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EASY COMPARISON */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-center gap-3 mb-7">
            <Clock className="text-indigo-600" size={30} />

            <div>
              <h2 className="text-3xl font-black text-gray-900">
                एक नजर में लकार
              </h2>

              <p className="text-gray-500 mt-1">
                Quick Lakara Revision
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-4 font-black text-indigo-800">
                    लकार
                  </th>
                  <th className="text-left p-4 font-black text-indigo-800">
                    प्रयोग
                  </th>
                  <th className="text-left p-4 font-black text-indigo-800">
                    उदाहरण
                  </th>
                </tr>
              </thead>

              <tbody>
                {quickRevision.map((item) => (
                  <tr
                    key={item.lakara}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="p-4 font-black text-gray-900">
                      {item.lakara}
                    </td>

                    <td className="p-4 text-gray-600">
                      {item.kaal}
                    </td>

                    <td className="p-4 font-bold text-indigo-700">
                      {item.example}
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
                परीक्षा की तैयारी के लिए इन बातों को याद रखें।
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

      {/* MEMORY TRICK */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <h2 className="text-3xl font-black text-gray-900">
            याद रखने की आसान ट्रिक
          </h2>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="rounded-2xl bg-blue-50 p-5 text-center">
              <p className="text-2xl font-black text-blue-700">
                लट्
              </p>
              <p className="mt-2 font-bold text-gray-700">
                अभी
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-5 text-center">
              <p className="text-2xl font-black text-red-700">
                लङ्
              </p>
              <p className="mt-2 font-bold text-gray-700">
                पहले
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-5 text-center">
              <p className="text-2xl font-black text-green-700">
                लृट्
              </p>
              <p className="mt-2 font-bold text-gray-700">
                आगे
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5 text-center">
              <p className="text-2xl font-black text-orange-700">
                लोट्
              </p>
              <p className="mt-2 font-bold text-gray-700">
                आदेश
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5 text-center">
              <p className="text-2xl font-black text-purple-700">
                विधिलिङ्
              </p>
              <p className="mt-2 font-bold text-gray-700">
                चाहिए
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/learn/sanskrit/kriya"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              क्रिया (Verb)
            </Link>

            <Link
              href="/learn/sanskrit/vibhakti"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              विभक्ति
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
            Sanskrit Lakara Complete
          </h2>

          <p className="mt-3 text-gray-400">
            लकार के काल और भाव को समझकर संस्कृत क्रिया-रूप का अभ्यास करें।
          </p>
        </div>
      </section>
    </main>
  );
}


