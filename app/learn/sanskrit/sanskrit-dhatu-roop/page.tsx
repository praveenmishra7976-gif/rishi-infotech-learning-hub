
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Sparkles,
  Star,
} from "lucide-react";

const dhatus = [
  {
    root: "पठ्",
    meaning: "पढ़ना",
    forms: [
      ["प्रथम पुरुष एकवचन", "पठति", "वह पढ़ता है"],
      ["प्रथम पुरुष द्विवचन", "पठतः", "वे दोनों पढ़ते हैं"],
      ["प्रथम पुरुष बहुवचन", "पठन्ति", "वे सब पढ़ते हैं"],
      ["मध्यम पुरुष एकवचन", "पठसि", "तुम पढ़ते हो"],
      ["मध्यम पुरुष द्विवचन", "पठथः", "तुम दोनों पढ़ते हो"],
      ["मध्यम पुरुष बहुवचन", "पठथ", "तुम सब पढ़ते हो"],
      ["उत्तम पुरुष एकवचन", "पठामि", "मैं पढ़ता हूँ"],
      ["उत्तम पुरुष द्विवचन", "पठावः", "हम दोनों पढ़ते हैं"],
      ["उत्तम पुरुष बहुवचन", "पठामः", "हम सब पढ़ते हैं"],
    ],
  },
  {
    root: "गम्",
    meaning: "जाना",
    forms: [
      ["प्रथम पुरुष एकवचन", "गच्छति", "वह जाता है"],
      ["प्रथम पुरुष द्विवचन", "गच्छतः", "वे दोनों जाते हैं"],
      ["प्रथम पुरुष बहुवचन", "गच्छन्ति", "वे सब जाते हैं"],
      ["मध्यम पुरुष एकवचन", "गच्छसि", "तुम जाते हो"],
      ["मध्यम पुरुष द्विवचन", "गच्छथः", "तुम दोनों जाते हो"],
      ["मध्यम पुरुष बहुवचन", "गच्छथ", "तुम सब जाते हो"],
      ["उत्तम पुरुष एकवचन", "गच्छामि", "मैं जाता हूँ"],
      ["उत्तम पुरुष द्विवचन", "गच्छावः", "हम दोनों जाते हैं"],
      ["उत्तम पुरुष बहुवचन", "गच्छामः", "हम सब जाते हैं"],
    ],
  },
  {
    root: "भू",
    meaning: "होना",
    forms: [
      ["प्रथम पुरुष एकवचन", "भवति", "वह होता है"],
      ["प्रथम पुरुष द्विवचन", "भवतः", "वे दोनों होते हैं"],
      ["प्रथम पुरुष बहुवचन", "भवन्ति", "वे सब होते हैं"],
      ["मध्यम पुरुष एकवचन", "भवसि", "तुम होते हो"],
      ["मध्यम पुरुष द्विवचन", "भवथः", "तुम दोनों होते हो"],
      ["मध्यम पुरुष बहुवचन", "भवथ", "तुम सब होते हो"],
      ["उत्तम पुरुष एकवचन", "भवामि", "मैं होता हूँ"],
      ["उत्तम पुरुष द्विवचन", "भवावः", "हम दोनों होते हैं"],
      ["उत्तम पुरुष बहुवचन", "भवामः", "हम सब होते हैं"],
    ],
  },
  {
    root: "कृ",
    meaning: "करना",
    forms: [
      ["प्रथम पुरुष एकवचन", "करोति", "वह करता है"],
      ["प्रथम पुरुष द्विवचन", "कुरुतः", "वे दोनों करते हैं"],
      ["प्रथम पुरुष बहुवचन", "कुर्वन्ति", "वे सब करते हैं"],
      ["मध्यम पुरुष एकवचन", "करोषि", "तुम करते हो"],
      ["मध्यम पुरुष द्विवचन", "कुरुथः", "तुम दोनों करते हो"],
      ["मध्यम पुरुष बहुवचन", "कुरुथ", "तुम सब करते हो"],
      ["उत्तम पुरुष एकवचन", "करोमि", "मैं करता हूँ"],
      ["उत्तम पुरुष द्विवचन", "कुर्वः", "हम दोनों करते हैं"],
      ["उत्तम पुरुष बहुवचन", "कुर्मः", "हम सब करते हैं"],
    ],
  },
  {
    root: "लिख्",
    meaning: "लिखना",
    forms: [
      ["प्रथम पुरुष एकवचन", "लिखति", "वह लिखता है"],
      ["प्रथम पुरुष द्विवचन", "लिखतः", "वे दोनों लिखते हैं"],
      ["प्रथम पुरुष बहुवचन", "लिखन्ति", "वे सब लिखते हैं"],
      ["मध्यम पुरुष एकवचन", "लिखसि", "तुम लिखते हो"],
      ["मध्यम पुरुष द्विवचन", "लिखथः", "तुम दोनों लिखते हो"],
      ["मध्यम पुरुष बहुवचन", "लिखथ", "तुम सब लिखते हो"],
      ["उत्तम पुरुष एकवचन", "लिखामि", "मैं लिखता हूँ"],
      ["उत्तम पुरुष द्विवचन", "लिखावः", "हम दोनों लिखते हैं"],
      ["उत्तम पुरुष बहुवचन", "लिखामः", "हम सब लिखते हैं"],
    ],
  },
  {
    root: "पिब्",
    meaning: "पीना",
    forms: [
      ["प्रथम पुरुष एकवचन", "पिबति", "वह पीता है"],
      ["प्रथम पुरुष द्विवचन", "पिबतः", "वे दोनों पीते हैं"],
      ["प्रथम पुरुष बहुवचन", "पिबन्ति", "वे सब पीते हैं"],
      ["मध्यम पुरुष एकवचन", "पिबसि", "तुम पीते हो"],
      ["मध्यम पुरुष द्विवचन", "पिबथः", "तुम दोनों पीते हो"],
      ["मध्यम पुरुष बहुवचन", "पिबथ", "तुम सब पीते हो"],
      ["उत्तम पुरुष एकवचन", "पिबामि", "मैं पीता हूँ"],
      ["उत्तम पुरुष द्विवचन", "पिबावः", "हम दोनों पीते हैं"],
      ["उत्तम पुरुष बहुवचन", "पिबामः", "हम सब पीते हैं"],
    ],
  },
];

const endings = [
  {
    person: "प्रथम पुरुष",
    singular: "ति",
    dual: "तः",
    plural: "न्ति",
    meaning: "वह / वे दोनों / वे सब",
  },
  {
    person: "मध्यम पुरुष",
    singular: "सि",
    dual: "थः",
    plural: "थ",
    meaning: "तुम / तुम दोनों / तुम सब",
  },
  {
    person: "उत्तम पुरुष",
    singular: "मि",
    dual: "वः",
    plural: "मः",
    meaning: "मैं / हम दोनों / हम सब",
  },
];

const importantPoints = [
  "धातु वह मूल शब्द है जिससे क्रिया के रूप बनते हैं।",
  "धातु रूप में पुरुष और वचन के अनुसार क्रिया का रूप बदलता है।",
  "संस्कृत में तीन पुरुष होते हैं — प्रथम, मध्यम और उत्तम।",
  "तीन वचन होते हैं — एकवचन, द्विवचन और बहुवचन।",
  "लट् लकार का प्रयोग सामान्य वर्तमान काल के लिए किया जाता है।",
  "पठ् धातु का वर्तमान रूप — पठति, पठतः, पठन्ति आदि होता है।",
  "गम् धातु का वर्तमान रूप बनाते समय गम् से गच्छ रूप प्राप्त होता है।",
  "धातु रूप याद करने के लिए पहले पुरुष और फिर वचन को पहचानें।",
];

const quickRevision = [
  ["पठ्", "पठति", "पढ़ना"],
  ["गम्", "गच्छति", "जाना"],
  ["भू", "भवति", "होना"],
  ["कृ", "करोति", "करना"],
  ["लिख्", "लिखति", "लिखना"],
  ["पिब्", "पिबति", "पीना"],
];

export default function SanskritDhatuRoopPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 via-purple-700 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/learn/sanskrit/karak"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Karak
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              संस्कृत धातु रूप
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत की प्रमुख धातुओं के वर्तमानकालीन रूप,
              पुरुष, वचन और उनके हिन्दी अर्थ सरल तरीके से सीखें।
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
                धातु रूप का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                संस्कृत में क्रिया का मूल रूप धातु कहलाता है। धातु
                से अलग-अलग पुरुष, वचन और लकार के अनुसार क्रिया के
                विभिन्न रूप बनते हैं। जैसे पठ् धातु से पठति,
                पठतः और पठन्ति आदि रूप बनते हैं।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  धातु + पुरुष + वचन + लकार = धातु रूप
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSON AND NUMBER */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <Star className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              पुरुष और वचन
            </h2>

            <p className="text-gray-500 mt-1">
              धातु रूप समझने के लिए तीन पुरुष और तीन वचन
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <div className="text-4xl">👥</div>
            <h3 className="mt-5 text-2xl font-black text-gray-900">
              प्रथम पुरुष
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              जिसके बारे में बात की जा रही हो — वह, वे दोनों,
              वे सब।
            </p>
          </article>

          <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <div className="text-4xl">👉</div>
            <h3 className="mt-5 text-2xl font-black text-gray-900">
              मध्यम पुरुष
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              जिससे बात की जा रही हो — तुम, तुम दोनों,
              तुम सब।
            </p>
          </article>

          <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <div className="text-4xl">🙋</div>
            <h3 className="mt-5 text-2xl font-black text-gray-900">
              उत्तम पुरुष
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              बोलने वाला स्वयं — मैं, हम दोनों, हम सब।
            </p>
          </article>
        </div>

        <div className="mt-7 bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
          <h3 className="text-2xl font-black text-gray-900">
            तीन वचन
          </h3>

          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-indigo-50 p-5">
              <p className="font-black text-indigo-800">
                एकवचन
              </p>
              <p className="mt-2 text-gray-600">
                एक व्यक्ति या वस्तु
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5">
              <p className="font-black text-purple-800">
                द्विवचन
              </p>
              <p className="mt-2 text-gray-600">
                दो व्यक्ति या वस्तुएँ
              </p>
            </div>

            <div className="rounded-2xl bg-fuchsia-50 p-5">
              <p className="font-black text-fuchsia-800">
                बहुवचन
              </p>
              <p className="mt-2 text-gray-600">
                दो से अधिक व्यक्ति या वस्तुएँ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENDINGS */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-indigo-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                लट् लकार के सामान्य प्रत्यय
              </h2>

              <p className="text-gray-500 mt-1">
                वर्तमान काल के रूप पहचानने में सहायक
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-100">
            <table className="w-full min-w-[750px] border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="text-left p-4 font-black">
                    पुरुष
                  </th>
                  <th className="text-left p-4 font-black">
                    एकवचन
                  </th>
                  <th className="text-left p-4 font-black">
                    द्विवचन
                  </th>
                  <th className="text-left p-4 font-black">
                    बहुवचन
                  </th>
                  <th className="text-left p-4 font-black">
                    अर्थ
                  </th>
                </tr>
              </thead>

              <tbody>
                {endings.map((item) => (
                  <tr
                    key={item.person}
                    className="border-b border-gray-100 bg-white"
                  >
                    <td className="p-4 font-black text-gray-900">
                      {item.person}
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
                    <td className="p-4 text-gray-600">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DHATU TABLES */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-purple-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              प्रमुख धातु रूप
            </h2>

            <p className="text-gray-500 mt-1">
              लट् लकार — वर्तमान काल
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {dhatus.map((dhatu) => (
            <article
              key={dhatu.root}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-2xl font-black">
                    धा
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-black">
                      {dhatu.root}
                    </h3>

                    <p className="mt-1 text-white/90 font-semibold">
                      अर्थ — {dhatu.meaning}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[750px] border-collapse">
                    <thead>
                      <tr className="bg-indigo-50">
                        <th className="text-left p-4 font-black text-indigo-800">
                          पुरुष / वचन
                        </th>
                        <th className="text-left p-4 font-black text-indigo-800">
                          धातु रूप
                        </th>
                        <th className="text-left p-4 font-black text-indigo-800">
                          हिन्दी अर्थ
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {dhatu.forms.map((form) => (
                        <tr
                          key={`${dhatu.root}-${form[0]}`}
                          className="border-b border-gray-100"
                        >
                          <td className="p-4 font-semibold text-gray-700">
                            {form[0]}
                          </td>

                          <td className="p-4 text-xl font-black text-indigo-700">
                            {form[1]}
                          </td>

                          <td className="p-4 text-gray-600">
                            {form[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LEARNING TRICK */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                धातु रूप याद करने की ट्रिक
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed">
                पहले धातु और उसका अर्थ याद करें। फिर प्रथम,
                मध्यम और उत्तम पुरुष को अलग-अलग पढ़ें। इसके
                बाद एकवचन, द्विवचन और बहुवचन के रूपों को क्रम
                से दोहराएँ।
              </p>

              <div className="mt-7 grid sm:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="font-black">प्रथम पुरुष</p>
                  <p className="mt-2 text-white/80">
                    ति → तः → न्ति
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="font-black">मध्यम पुरुष</p>
                  <p className="mt-2 text-white/80">
                    सि → थः → थ
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="font-black">उत्तम पुरुष</p>
                  <p className="mt-2 text-white/80">
                    मि → वः → मः
                  </p>
                </div>
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
                    धातु
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    प्रथम पुरुष एकवचन
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    अर्थ
                  </th>
                </tr>
              </thead>

              <tbody>
                {quickRevision.map((item) => (
                  <tr
                    key={item[0]}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="p-4 text-xl font-black text-gray-900">
                      {item[0]}
                    </td>

                    <td className="p-4 text-lg font-bold text-indigo-700">
                      {item[1]}
                    </td>

                    <td className="p-4 text-gray-600">
                      {item[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EXAM POINTS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-center gap-3 mb-7">
            <CheckCircle className="text-green-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Exam Points
              </h2>

              <p className="text-gray-500 mt-1">
                परीक्षा के लिए महत्वपूर्ण तथ्य
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {importantPoints.map((point, index) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-gray-50 border border-gray-100 p-5"
              >
                <span className="w-8 h-8 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </span>

                <p className="text-gray-700 leading-relaxed font-medium">
                  {point}
                </p>
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
              href="/learn/sanskrit/karak"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              कारक
            </Link>

            <Link
              href="/learn/sanskrit/sanskrit-shabd-roop"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              Sanskrit Shabd Roop
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
            Sanskrit Dhatu Roop Complete
          </h2>

          <p className="mt-3 text-gray-400">
            प्रमुख धातुओं के वर्तमानकालीन रूपों का अध्ययन पूरा करें।
          </p>
        </div>
      </section>
    </main>
  );
}
