
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

const karakTypes = [
  {
    title: "कर्ता कारक",
    vibhakti: "प्रथमा विभक्ति",
    question: "कौन?",
    description:
      "जो व्यक्ति या वस्तु क्रिया को करने वाला होता है, उसे कर्ता कारक कहते हैं।",
    icon: "👤",
    examples: [
      {
        sentence: "रामः पठति।",
        meaning: "राम पढ़ता है।",
        identification: "कौन पढ़ता है? — रामः",
      },
      {
        sentence: "बालकः क्रीडति।",
        meaning: "बालक खेलता है।",
        identification: "कौन खेलता है? — बालकः",
      },
    ],
  },
  {
    title: "कर्म कारक",
    vibhakti: "द्वितीया विभक्ति",
    question: "क्या? / किसको?",
    description:
      "क्रिया का फल जिस व्यक्ति या वस्तु पर पड़ता है, उसे कर्म कारक कहते हैं।",
    icon: "🎯",
    examples: [
      {
        sentence: "रामः पुस्तकं पठति।",
        meaning: "राम पुस्तक पढ़ता है।",
        identification: "क्या पढ़ता है? — पुस्तकम्",
      },
      {
        sentence: "सीता फलम् खादति।",
        meaning: "सीता फल खाती है।",
        identification: "क्या खाती है? — फलम्",
      },
    ],
  },
  {
    title: "करण कारक",
    vibhakti: "तृतीया विभक्ति",
    question: "किससे? / किसके द्वारा?",
    description:
      "जिस साधन या माध्यम से कोई कार्य किया जाता है, उसे करण कारक कहते हैं।",
    icon: "🛠️",
    examples: [
      {
        sentence: "रामः हस्तेन लिखति।",
        meaning: "राम हाथ से लिखता है।",
        identification: "किससे लिखता है? — हस्तेन",
      },
      {
        sentence: "बालकः लेखन्या लिखति।",
        meaning: "बालक कलम से लिखता है।",
        identification: "किससे लिखता है? — लेखन्या",
      },
    ],
  },
  {
    title: "सम्प्रदान कारक",
    vibhakti: "चतुर्थी विभक्ति",
    question: "किसके लिए? / किसको?",
    description:
      "जिसके लिए या जिसको कोई वस्तु दी जाती है, उसे सम्प्रदान कारक कहते हैं।",
    icon: "🎁",
    examples: [
      {
        sentence: "रामः बालकाय पुस्तकं ददाति।",
        meaning: "राम बालक को पुस्तक देता है।",
        identification: "किसको देता है? — बालकाय",
      },
      {
        sentence: "माता पुत्राय फलम् ददाति।",
        meaning: "माता पुत्र को फल देती है।",
        identification: "किसको देती है? — पुत्राय",
      },
    ],
  },
  {
    title: "अपादान कारक",
    vibhakti: "पञ्चमी विभक्ति",
    question: "कहाँ से? / किससे अलग?",
    description:
      "जिससे किसी वस्तु या व्यक्ति का अलग होना या दूर होना प्रकट हो, उसे अपादान कारक कहते हैं।",
    icon: "↩️",
    examples: [
      {
        sentence: "वृक्षात् पत्रं पतति।",
        meaning: "वृक्ष से पत्ता गिरता है।",
        identification: "कहाँ से गिरता है? — वृक्षात्",
      },
      {
        sentence: "ग्रामात् बालकः आगच्छति।",
        meaning: "बालक गाँव से आता है।",
        identification: "कहाँ से आता है? — ग्रामात्",
      },
    ],
  },
  {
    title: "अधिकरण कारक",
    vibhakti: "सप्तमी विभक्ति",
    question: "कहाँ? / किसमें?",
    description:
      "जिस स्थान या आधार पर कोई क्रिया होती है, उसे अधिकरण कारक कहते हैं।",
    icon: "📍",
    examples: [
      {
        sentence: "गृहे बालकः पठति।",
        meaning: "बालक घर में पढ़ता है।",
        identification: "कहाँ पढ़ता है? — गृहे",
      },
      {
        sentence: "विद्यालये छात्राः पठन्ति।",
        meaning: "छात्र विद्यालय में पढ़ते हैं।",
        identification: "कहाँ पढ़ते हैं? — विद्यालये",
      },
    ],
  },
];

const relationPoints = [
  {
    number: "1",
    title: "कर्ता",
    vibhakti: "प्रथमा",
    question: "कौन?",
  },
  {
    number: "2",
    title: "कर्म",
    vibhakti: "द्वितीया",
    question: "क्या? / किसको?",
  },
  {
    number: "3",
    title: "करण",
    vibhakti: "तृतीया",
    question: "किससे? / किसके द्वारा?",
  },
  {
    number: "4",
    title: "सम्प्रदान",
    vibhakti: "चतुर्थी",
    question: "किसके लिए? / किसको?",
  },
  {
    number: "5",
    title: "अपादान",
    vibhakti: "पञ्चमी",
    question: "कहाँ से? / किससे अलग?",
  },
  {
    number: "6",
    title: "सम्बन्ध",
    vibhakti: "षष्ठी",
    question: "किसका? / किसके?",
  },
  {
    number: "7",
    title: "अधिकरण",
    vibhakti: "सप्तमी",
    question: "कहाँ? / किसमें?",
  },
  {
    number: "8",
    title: "सम्बोधन",
    vibhakti: "सम्बोधन",
    question: "हे! / अरे!",
  },
];

const examPoints = [
  "कारक का संबंध क्रिया और संज्ञा या सर्वनाम के बीच होता है।",
  "कर्ता कारक में प्रायः प्रथमा विभक्ति का प्रयोग होता है।",
  "कर्म कारक में द्वितीया विभक्ति का प्रयोग होता है।",
  "करण कारक में तृतीया विभक्ति का प्रयोग होता है।",
  "सम्प्रदान कारक में चतुर्थी विभक्ति का प्रयोग होता है।",
  "अपादान कारक में पञ्चमी विभक्ति का प्रयोग होता है।",
  "सम्बन्ध कारक में षष्ठी विभक्ति का प्रयोग होता है।",
  "अधिकरण कारक में सप्तमी विभक्ति का प्रयोग होता है।",
  "सम्बोधन का प्रयोग किसी व्यक्ति को पुकारने या संबोधित करने के लिए होता है।",
];

const memoryTricks = [
  {
    title: "कर्ता",
    formula: "कौन?",
    icon: "👤",
  },
  {
    title: "कर्म",
    formula: "क्या? / किसको?",
    icon: "🎯",
  },
  {
    title: "करण",
    formula: "किससे?",
    icon: "🛠️",
  },
  {
    title: "सम्प्रदान",
    formula: "किसके लिए?",
    icon: "🎁",
  },
  {
    title: "अपादान",
    formula: "कहाँ से?",
    icon: "↩️",
  },
  {
    title: "सम्बन्ध",
    formula: "किसका?",
    icon: "🔗",
  },
  {
    title: "अधिकरण",
    formula: "कहाँ?",
    icon: "📍",
  },
  {
    title: "सम्बोधन",
    formula: "हे! / अरे!",
    icon: "📣",
  },
];

const quickExamples = [
  {
    sentence: "रामः पठति।",
    karak: "कर्ता",
    vibhakti: "प्रथमा",
    question: "कौन?",
    answer: "रामः",
  },
  {
    sentence: "रामः पुस्तकं पठति।",
    karak: "कर्म",
    vibhakti: "द्वितीया",
    question: "क्या?",
    answer: "पुस्तकम्",
  },
  {
    sentence: "रामः हस्तेन लिखति।",
    karak: "करण",
    vibhakti: "तृतीया",
    question: "किससे?",
    answer: "हस्तेन",
  },
  {
    sentence: "रामः बालकाय फलम् ददाति।",
    karak: "सम्प्रदान",
    vibhakti: "चतुर्थी",
    question: "किसको?",
    answer: "बालकाय",
  },
  {
    sentence: "वृक्षात् पत्रं पतति।",
    karak: "अपादान",
    vibhakti: "पञ्चमी",
    question: "कहाँ से?",
    answer: "वृक्षात्",
  },
  {
    sentence: "रामस्य पुस्तकम् अस्ति।",
    karak: "सम्बन्ध",
    vibhakti: "षष्ठी",
    question: "किसका?",
    answer: "रामस्य",
  },
  {
    sentence: "गृहे बालकः पठति।",
    karak: "अधिकरण",
    vibhakti: "सप्तमी",
    question: "कहाँ?",
    answer: "गृहे",
  },
  {
    sentence: "हे राम!",
    karak: "सम्बोधन",
    vibhakti: "सम्बोधन",
    question: "किसे पुकार रहे हैं?",
    answer: "राम",
  },
];

export default function KarakPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 via-purple-700 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/learn/sanskrit/samas"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Samas
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              कारक
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत व्याकरण में कारक, विभक्ति, उनके प्रश्न,
              उदाहरण और आसान पहचान की विधियाँ सीखें।
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
                कारक का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                वाक्य में क्रिया के साथ संज्ञा या सर्वनाम का जो
                संबंध होता है, उसे कारक कहते हैं। संस्कृत में
                कारक का अध्ययन विभक्ति के साथ किया जाता है।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  संज्ञा / सर्वनाम + क्रिया से संबंध = कारक
                </p>

                <p className="mt-3 text-gray-600">
                  कारक को पहचानने के लिए प्रश्न पूछना सबसे आसान
                  तरीका है — कौन? क्या? किससे? किसको? कहाँ से?
                  किसका? कहाँ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EIGHT RELATIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <Star className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              कारक और विभक्ति
            </h2>

            <p className="text-gray-500 mt-1">
              कारक की पहचान और संबंधित विभक्ति
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {relationPoints.map((item) => (
            <article
              key={item.number}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                  {item.number}
                </span>

                <span className="text-xs font-black bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full">
                  {item.vibhakti}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-indigo-700 font-bold">
                {item.question}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* KARAK TYPES */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-indigo-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                छह प्रमुख कारक
              </h2>

              <p className="text-gray-500 mt-1">
                Six main grammatical Karakas
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {karakTypes.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6 hover:bg-indigo-50 hover:border-indigo-200 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>

                  <span className="text-xs font-black bg-white text-gray-600 px-3 py-1.5 rounded-full">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm font-bold text-indigo-600">
                  {item.vibhakti}
                </p>

                <div className="mt-4 rounded-2xl bg-white p-4">
                  <p className="text-sm font-black text-indigo-700">
                    पहचान: {item.question}
                  </p>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 space-y-3">
                  {item.examples.map((example) => (
                    <div
                      key={example.sentence}
                      className="rounded-2xl bg-white border border-gray-100 p-4"
                    >
                      <p className="font-black text-gray-900">
                        {example.sentence}
                      </p>

                      <p className="mt-2 text-sm text-gray-600">
                        {example.meaning}
                      </p>

                      <p className="mt-2 text-sm font-bold text-indigo-700">
                        {example.identification}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEMORY TRICKS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="text-yellow-500" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              कारक याद रखने की आसान ट्रिक
            </h2>

            <p className="text-gray-500 mt-1">
              Quick Memory Guide
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {memoryTricks.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{item.icon}</span>

                <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center text-sm font-black">
                  {index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-indigo-700 font-bold">
                {item.formula}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK EXAMPLES */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-indigo-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                कारक के महत्वपूर्ण उदाहरण
              </h2>

              <p className="text-gray-500 mt-1">
                Important examples for practice
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="text-left p-4 font-black">
                      वाक्य
                    </th>

                    <th className="text-left p-4 font-black">
                      कारक
                    </th>

                    <th className="text-left p-4 font-black">
                      विभक्ति
                    </th>

                    <th className="text-left p-4 font-black">
                      प्रश्न
                    </th>

                    <th className="text-left p-4 font-black">
                      उत्तर
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {quickExamples.map((item) => (
                    <tr
                      key={item.sentence}
                      className="border-b border-gray-200 last:border-0 bg-white"
                    >
                      <td className="p-4 font-black text-gray-900">
                        {item.sentence}
                      </td>

                      <td className="p-4">
                        <span className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-black">
                          {item.karak}
                        </span>
                      </td>

                      <td className="p-4 text-gray-600 font-semibold">
                        {item.vibhakti}
                      </td>

                      <td className="p-4 text-gray-600">
                        {item.question}
                      </td>

                      <td className="p-4 font-bold text-indigo-700">
                        {item.answer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                परीक्षा की तैयारी के लिए इन बिंदुओं को अवश्य याद रखें।
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
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-4 font-black text-indigo-800">
                    कारक
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    विभक्ति
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    पहचान
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">कर्ता</td>
                  <td className="p-4">प्रथमा</td>
                  <td className="p-4 text-indigo-700 font-bold">
                    कौन?
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">कर्म</td>
                  <td className="p-4">द्वितीया</td>
                  <td className="p-4 text-indigo-700 font-bold">
                    क्या? / किसको?
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">करण</td>
                  <td className="p-4">तृतीया</td>
                  <td className="p-4 text-indigo-700 font-bold">
                    किससे?
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">सम्प्रदान</td>
                  <td className="p-4">चतुर्थी</td>
                  <td className="p-4 text-indigo-700 font-bold">
                    किसके लिए? / किसको?
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">अपादान</td>
                  <td className="p-4">पञ्चमी</td>
                  <td className="p-4 text-indigo-700 font-bold">
                    कहाँ से?
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">सम्बन्ध</td>
                  <td className="p-4">षष्ठी</td>
                  <td className="p-4 text-indigo-700 font-bold">
                    किसका?
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">अधिकरण</td>
                  <td className="p-4">सप्तमी</td>
                  <td className="p-4 text-indigo-700 font-bold">
                    कहाँ? / किसमें?
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-black">सम्बोधन</td>
                  <td className="p-4">सम्बोधन</td>
                  <td className="p-4 text-indigo-700 font-bold">
                    हे! / अरे!
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
              href="/learn/sanskrit/samas"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              समास
            </Link>

            <Link
              href="/learn/sanskrit/sanskrit-dhatu-roop"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              Sanskrit Dhatu Roop
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
            Sanskrit Karak Complete
          </h2>

          <p className="mt-3 text-gray-400">
            कारक, विभक्ति और उनके महत्वपूर्ण उदाहरणों का अध्ययन पूरा करें।
          </p>
        </div>
      </section>
    </main>
  );
}