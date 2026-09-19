
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

const shabdRoop = [
  {
    word: "राम",
    meaning: "भगवान राम / पुरुष",
    gender: "पुल्लिंग",
    forms: [
      ["प्रथमा", "रामः", "राम"],
      ["द्वितीया", "रामम्", "राम को"],
      ["तृतीया", "रामेण", "राम के द्वारा"],
      ["चतुर्थी", "रामाय", "राम के लिए"],
      ["पञ्चमी", "रामात्", "राम से"],
      ["षष्ठी", "रामस्य", "राम का"],
      ["सप्तमी", "रामे", "राम में / राम पर"],
      ["सम्बोधन", "हे राम", "हे राम!"],
    ],
  },
  {
    word: "बालक",
    meaning: "लड़का",
    gender: "पुल्लिंग",
    forms: [
      ["प्रथमा", "बालकः", "लड़का"],
      ["द्वितीया", "बालकम्", "लड़के को"],
      ["तृतीया", "बालकेन", "लड़के के द्वारा"],
      ["चतुर्थी", "बालकाय", "लड़के के लिए"],
      ["पञ्चमी", "बालकात्", "लड़के से"],
      ["षष्ठी", "बालकस्य", "लड़के का"],
      ["सप्तमी", "बालके", "लड़के में / पर"],
      ["सम्बोधन", "हे बालक", "हे लड़के!"],
    ],
  },
  {
    word: "लता",
    meaning: "बेल",
    gender: "स्त्रीलिंग",
    forms: [
      ["प्रथमा", "लता", "बेल"],
      ["द्वितीया", "लताम्", "बेल को"],
      ["तृतीया", "लतया", "बेल के द्वारा"],
      ["चतुर्थी", "लतायै", "बेल के लिए"],
      ["पञ्चमी", "लतायाः", "बेल से"],
      ["षष्ठी", "लतायाः", "बेल की"],
      ["सप्तमी", "लतायाम्", "बेल में / पर"],
      ["सम्बोधन", "हे लते", "हे बेल!"],
    ],
  },
  {
    word: "फल",
    meaning: "फल",
    gender: "नपुंसकलिंग",
    forms: [
      ["प्रथमा", "फलम्", "फल"],
      ["द्वितीया", "फलम्", "फल को"],
      ["तृतीया", "फलेन", "फल के द्वारा"],
      ["चतुर्थी", "फलाय", "फल के लिए"],
      ["पञ्चमी", "फलात्", "फल से"],
      ["षष्ठी", "फलस्य", "फल का"],
      ["सप्तमी", "फले", "फल में / पर"],
      ["सम्बोधन", "हे फल", "हे फल!"],
    ],
  },
];

const vibhaktis = [
  {
    number: "1",
    name: "प्रथमा",
    question: "कौन?",
    use: "कर्ता",
  },
  {
    number: "2",
    name: "द्वितीया",
    question: "किसको? / क्या?",
    use: "कर्म",
  },
  {
    number: "3",
    name: "तृतीया",
    question: "किसके द्वारा?",
    use: "करण",
  },
  {
    number: "4",
    name: "चतुर्थी",
    question: "किसके लिए?",
    use: "सम्प्रदान",
  },
  {
    number: "5",
    name: "पञ्चमी",
    question: "किससे?",
    use: "अपादान",
  },
  {
    number: "6",
    name: "षष्ठी",
    question: "किसका?",
    use: "सम्बन्ध",
  },
  {
    number: "7",
    name: "सप्तमी",
    question: "किसमें? / कहाँ?",
    use: "अधिकरण",
  },
  {
    number: "8",
    name: "सम्बोधन",
    question: "हे!",
    use: "सम्बोधन",
  },
];

const importantPoints = [
  "शब्द के अलग-अलग रूप उसके वाक्य में प्रयोग के अनुसार बदलते हैं।",
  "संस्कृत में आठ विभक्तियाँ मानी जाती हैं।",
  "प्रथमा विभक्ति सामान्यतः कर्ता के लिए प्रयोग होती है।",
  "द्वितीया विभक्ति सामान्यतः कर्म के लिए प्रयोग होती है।",
  "षष्ठी विभक्ति सम्बन्ध बताती है, जैसे रामस्य = राम का।",
  "सप्तमी विभक्ति अधिकरण बताती है, जैसे रामे = राम में / राम पर।",
  "पुल्लिंग, स्त्रीलिंग और नपुंसकलिंग शब्दों के रूप अलग हो सकते हैं।",
  "शब्द रूप याद करने के लिए पहले विभक्ति और फिर वचन का अभ्यास करें।",
];

const quickRevision = [
  ["राम", "रामः", "रामम्", "रामस्य"],
  ["बालक", "बालकः", "बालकम्", "बालकस्य"],
  ["लता", "लता", "लताम्", "लतायाः"],
  ["फल", "फलम्", "फलम्", "फलस्य"],
];

export default function SanskritShabdRoopPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 via-purple-700 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/learn/sanskrit/sanskrit-dhatu-roop"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Dhatu Roop
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              संस्कृत शब्द रूप
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत के प्रमुख शब्दों के रूप, विभक्तियाँ, हिन्दी
              अर्थ और उनके प्रयोग को सरल तरीके से सीखें।
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
                शब्द रूप का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                संस्कृत में संज्ञा और सर्वनाम शब्दों के रूप उनके
                वाक्य में प्रयोग के अनुसार बदलते हैं। इन बदले हुए
                रूपों को शब्द रूप कहा जाता है। शब्द रूपों में
                विभक्ति और वचन का विशेष महत्व होता है।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  शब्द + विभक्ति + वचन = शब्द रूप
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIBHAKTI INTRO */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <Star className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              आठ विभक्तियाँ
            </h2>

            <p className="text-gray-500 mt-1">
              शब्द रूप समझने के लिए विभक्तियों को पहचानना जरूरी है।
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vibhaktis.map((item) => (
            <article
              key={item.name}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                {item.number}
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {item.name}
              </h3>

              <p className="mt-3 text-indigo-700 font-bold">
                {item.question}
              </p>

              <p className="mt-2 text-gray-500">
                प्रयोग: {item.use}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SHABD ROOP TABLES */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-indigo-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                प्रमुख शब्द रूप
              </h2>

              <p className="text-gray-500 mt-1">
                एकवचन के प्रमुख विभक्ति रूप और उनके हिन्दी अर्थ।
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {shabdRoop.map((word) => (
              <article
                key={word.word}
                className="bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-2xl font-black">
                      श
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-black">
                        {word.word}
                      </h3>

                      <p className="mt-1 text-white/90 font-semibold">
                        {word.meaning} · {word.gender}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] border-collapse">
                      <thead>
                        <tr className="bg-indigo-50">
                          <th className="text-left p-4 font-black text-indigo-800">
                            विभक्ति
                          </th>

                          <th className="text-left p-4 font-black text-indigo-800">
                            शब्द रूप
                          </th>

                          <th className="text-left p-4 font-black text-indigo-800">
                            हिन्दी अर्थ
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {word.forms.map((form) => (
                          <tr
                            key={`${word.word}-${form[0]}`}
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
        </div>
      </section>

      {/* THREE VACHANS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-center gap-3 mb-7">
            <Sparkles className="text-purple-600" size={30} />

            <h2 className="text-3xl font-black text-gray-900">
              तीनों वचन
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-indigo-50 p-6">
              <h3 className="text-xl font-black text-indigo-800">
                एकवचन
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                एक व्यक्ति या वस्तु के लिए प्रयोग किया जाता है।
              </p>

              <p className="mt-3 font-bold text-indigo-700">
                उदाहरण: रामः
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-6">
              <h3 className="text-xl font-black text-purple-800">
                द्विवचन
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                दो व्यक्तियों या वस्तुओं के लिए प्रयोग किया जाता है।
              </p>

              <p className="mt-3 font-bold text-purple-700">
                उदाहरण: रामौ
              </p>
            </div>

            <div className="rounded-2xl bg-fuchsia-50 p-6">
              <h3 className="text-xl font-black text-fuchsia-800">
                बहुवचन
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                दो से अधिक व्यक्तियों या वस्तुओं के लिए प्रयोग किया जाता है।
              </p>

              <p className="mt-3 font-bold text-fuchsia-700">
                उदाहरण: रामाः
              </p>
            </div>
          </div>
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
                शब्द रूप याद करने की ट्रिक
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed">
                पहले शब्द का लिंग पहचानें। फिर आठों विभक्तियों को
                क्रम से पढ़ें। इसके बाद एकवचन, द्विवचन और बहुवचन
                का अलग-अलग अभ्यास करें।
              </p>

              <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="font-black">1. शब्द पहचानें</p>
                  <p className="mt-2 text-white/80">
                    राम, लता, फल
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="font-black">2. लिंग पहचानें</p>
                  <p className="mt-2 text-white/80">
                    पुल्लिंग / स्त्रीलिंग / नपुंसकलिंग
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="font-black">3. विभक्ति देखें</p>
                  <p className="mt-2 text-white/80">
                    प्रथमा से सम्बोधन
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="font-black">4. वचन देखें</p>
                  <p className="mt-2 text-white/80">
                    एक / दो / अनेक
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
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-4 font-black text-indigo-800">
                    शब्द
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    प्रथमा
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    द्वितीया
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    षष्ठी
                  </th>
                </tr>
              </thead>

              <tbody>
                {quickRevision.map((item) => (
                  <tr
                    key={item[0]}
                    className="border-b border-gray-100"
                  >
                    <td className="p-4 text-lg font-black text-gray-900">
                      {item[0]}
                    </td>

                    <td className="p-4 font-bold text-indigo-700">
                      {item[1]}
                    </td>

                    <td className="p-4 font-bold text-indigo-700">
                      {item[2]}
                    </td>

                    <td className="p-4 font-bold text-indigo-700">
                      {item[3]}
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
                परीक्षा की तैयारी के लिए महत्वपूर्ण बातें।
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
              href="/learn/sanskrit/sanskrit-dhatu-roop"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Dhatu Roop
            </Link>

            <Link
              href="/learn/sanskrit/sanskrit-grammar"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              Sanskrit Grammar
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
            Sanskrit Shabd Roop Complete
          </h2>

          <p className="mt-3 text-gray-400">
            संस्कृत शब्द रूप का अध्ययन पूरा करें और आगे बढ़ें।
          </p>
        </div>
      </section>
    </main>
  );
}
