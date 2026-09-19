
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

const samasTypes = [
  {
    title: "अव्ययीभाव समास",
    english: "Avyayibhava Samasa",
    description:
      "जिस समास में पहला पद प्रधान होता है और पूरा समस्त पद अव्यय के रूप में प्रयोग होता है, उसे अव्ययीभाव समास कहते हैं।",
    icon: "🔹",
    examples: [
      {
        word: "यथाशक्ति",
        vigraha: "शक्तिम् अनतिक्रम्य",
        meaning: "शक्ति के अनुसार",
      },
      {
        word: "प्रतिदिनम्",
        vigraha: "दिनं दिनं प्रति",
        meaning: "प्रत्येक दिन",
      },
      {
        word: "यथाक्रमम्",
        vigraha: "क्रमम् अनतिक्रम्य",
        meaning: "क्रम के अनुसार",
      },
    ],
  },
  {
    title: "तत्पुरुष समास",
    english: "Tatpurusha Samasa",
    description:
      "जिस समास में उत्तर पद प्रधान होता है और दोनों पदों के बीच विभक्ति का संबंध होता है, उसे तत्पुरुष समास कहते हैं।",
    icon: "📚",
    examples: [
      {
        word: "राजपुत्रः",
        vigraha: "राज्ञः पुत्रः",
        meaning: "राजा का पुत्र",
      },
      {
        word: "ग्रामगतः",
        vigraha: "ग्रामं गतः",
        meaning: "गाँव को गया हुआ",
      },
      {
        word: "देवपूजा",
        vigraha: "देवस्य पूजा",
        meaning: "देव की पूजा",
      },
    ],
  },
  {
    title: "कर्मधारय समास",
    english: "Karmadharaya Samasa",
    description:
      "जिस समास में एक पद विशेषण और दूसरा पद विशेष्य होता है तथा दोनों में समानाधिकरण संबंध होता है, उसे कर्मधारय समास कहते हैं।",
    icon: "⭐",
    examples: [
      {
        word: "नीलोत्पलम्",
        vigraha: "नीलम् उत्पलम्",
        meaning: "नीला कमल",
      },
      {
        word: "महापुरुषः",
        vigraha: "महान् पुरुषः",
        meaning: "महान पुरुष",
      },
      {
        word: "पीताम्बरः",
        vigraha: "पीतम् अम्बरम् यस्य सः",
        meaning: "पीले वस्त्र वाला",
      },
    ],
  },
  {
    title: "द्विगु समास",
    english: "Dvigu Samasa",
    description:
      "जिस समास का पहला पद संख्यावाचक होता है और पूरा समस्त पद किसी समूह या समुदाय का बोध कराता है, उसे द्विगु समास कहते हैं।",
    icon: "🔢",
    examples: [
      {
        word: "त्रिभुवनम्",
        vigraha: "त्रयाणां भुवनानां समाहारः",
        meaning: "तीन भुवनों का समूह",
      },
      {
        word: "पञ्चवटी",
        vigraha: "पञ्चानां वटानां समाहारः",
        meaning: "पाँच वट वृक्षों का समूह",
      },
      {
        word: "चतुर्युगम्",
        vigraha: "चतसृणां युगानां समाहारः",
        meaning: "चार युगों का समूह",
      },
    ],
  },
  {
    title: "द्वन्द्व समास",
    english: "Dvandva Samasa",
    description:
      "जिस समास में दोनों पद समान रूप से प्रधान होते हैं और उनके बीच 'और' का भाव होता है, उसे द्वन्द्व समास कहते हैं।",
    icon: "⚖️",
    examples: [
      {
        word: "माता-पितरौ",
        vigraha: "माता च पिता च",
        meaning: "माता और पिता",
      },
      {
        word: "रामलक्ष्मणौ",
        vigraha: "रामश्च लक्ष्मणश्च",
        meaning: "राम और लक्ष्मण",
      },
      {
        word: "सुखदुःखे",
        vigraha: "सुखं च दुःखं च",
        meaning: "सुख और दुःख",
      },
    ],
  },
  {
    title: "बहुव्रीहि समास",
    english: "Bahuvrihi Samasa",
    description:
      "जिस समास में दोनों पदों में से कोई भी पद प्रधान नहीं होता और समस्त पद किसी अन्य व्यक्ति या वस्तु का बोध कराता है, उसे बहुव्रीहि समास कहते हैं।",
    icon: "👑",
    examples: [
      {
        word: "पीताम्बरः",
        vigraha: "पीतम् अम्बरम् यस्य सः",
        meaning: "जिसका वस्त्र पीला है",
      },
      {
        word: "चतुर्भुजः",
        vigraha: "चतस्रः भुजाः यस्य सः",
        meaning: "जिसकी चार भुजाएँ हैं",
      },
      {
        word: "नीलकण्ठः",
        vigraha: "नीलः कण्ठः यस्य सः",
        meaning: "जिसका कंठ नीला है",
      },
    ],
  },
];

const quickExamples = [
  {
    word: "राजपुत्रः",
    vigraha: "राज्ञः पुत्रः",
    type: "तत्पुरुष",
  },
  {
    word: "नीलोत्पलम्",
    vigraha: "नीलम् उत्पलम्",
    type: "कर्मधारय",
  },
  {
    word: "त्रिभुवनम्",
    vigraha: "त्रयाणां भुवनानां समाहारः",
    type: "द्विगु",
  },
  {
    word: "माता-पितरौ",
    vigraha: "माता च पिता च",
    type: "द्वन्द्व",
  },
  {
    word: "चतुर्भुजः",
    vigraha: "चतस्रः भुजाः यस्य सः",
    type: "बहुव्रीहि",
  },
  {
    word: "यथाशक्ति",
    vigraha: "शक्तिम् अनतिक्रम्य",
    type: "अव्ययीभाव",
  },
];

const identification = [
  {
    clue: "पहला पद प्रधान",
    type: "अव्ययीभाव",
    trick: "अव्यय जैसा प्रयोग",
  },
  {
    clue: "उत्तर पद प्रधान",
    type: "तत्पुरुष",
    trick: "विभक्ति संबंध",
  },
  {
    clue: "विशेषण + विशेष्य",
    type: "कर्मधारय",
    trick: "कैसा? कौन?",
  },
  {
    clue: "संख्या से शुरुआत",
    type: "द्विगु",
    trick: "समूह का बोध",
  },
  {
    clue: "दोनों पद प्रधान",
    type: "द्वन्द्व",
    trick: "और का भाव",
  },
  {
    clue: "कोई पद प्रधान नहीं",
    type: "बहुव्रीहि",
    trick: "किसी अन्य का बोध",
  },
];

const examPoints = [
  "समास का अर्थ है दो या दो से अधिक शब्दों को संक्षिप्त करके एक शब्द बनाना।",
  "समास से बने शब्द को समस्त पद कहते हैं।",
  "समस्त पद को उसके मूल पदों में अलग करने को समास-विग्रह कहते हैं।",
  "अव्ययीभाव समास में पहला पद प्रधान होता है।",
  "तत्पुरुष समास में उत्तर पद प्रधान होता है।",
  "कर्मधारय में विशेषण और विशेष्य का संबंध होता है।",
  "द्विगु समास का पहला पद प्रायः संख्यावाचक होता है।",
  "द्वन्द्व समास में 'और' का भाव पाया जाता है।",
  "बहुव्रीहि समास में समस्त पद किसी अन्य व्यक्ति या वस्तु का बोध कराता है।",
];

const memoryTricks = [
  {
    title: "अव्ययीभाव",
    formula: "पहला पद प्रधान",
    icon: "🔹",
  },
  {
    title: "तत्पुरुष",
    formula: "दूसरा पद प्रधान",
    icon: "📚",
  },
  {
    title: "कर्मधारय",
    formula: "विशेषण + विशेष्य",
    icon: "⭐",
  },
  {
    title: "द्विगु",
    formula: "संख्या + समूह",
    icon: "🔢",
  },
  {
    title: "द्वन्द्व",
    formula: "दोनों पद प्रधान",
    icon: "⚖️",
  },
  {
    title: "बहुव्रीहि",
    formula: "अन्य का बोध",
    icon: "👑",
  },
];

export default function SamasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 via-purple-700 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/learn/sanskrit/sandhi"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Sandhi
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              समास
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत व्याकरण में समास के प्रमुख प्रकार, समास-विग्रह,
              उदाहरण और आसान पहचान की विधियाँ सीखें।
            </p>
          </div>
        </div>
      </section>

      {/* SAMAS VIDEO */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="bg-white rounded-3xl border border-indigo-100 shadow-lg overflow-hidden">

          <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-600 px-6 md:px-8 py-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-7 h-7"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black">
                  समास का वीडियो पाठ
                </h2>

                <p className="text-white/80 mt-1">
                  Watch and learn Sanskrit Samasa
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 md:p-8">

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-xl">

              <iframe
                src="https://www.youtube.com/embed/PVdoPEJrjeA?rel=0"
                title="संस्कृत समास - Sanskrit Samas"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>
                <p className="font-black text-gray-900">
                  🎥 समास — Complete Video Lesson
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  समास के प्रकार, समास-विग्रह और उदाहरण वीडियो के माध्यम से सीखें।
                </p>
              </div>

              <a
                href="https://www.youtube.com/watch?v=PVdoPEJrjeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-bold transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8Z" />
                  <path
                    d="m9.75 15.5 5.75-3.5-5.75-3.5v7Z"
                    fill="white"
                  />
                </svg>
                Watch on YouTube
              </a>

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
                समास का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                दो या दो से अधिक शब्दों को संक्षिप्त करके एक शब्द बनाने
                की प्रक्रिया को समास कहते हैं। समास से भाषा संक्षिप्त,
                प्रभावशाली और सुंदर बनती है।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  दो या अधिक पद → संक्षिप्त रूप → समस्त पद
                </p>

                <p className="mt-3 text-gray-600">
                  समस्त पद को उसके मूल शब्दों में अलग करने को
                  <span className="font-black text-indigo-700">
                    {" "}
                    समास-विग्रह
                  </span>{" "}
                  कहते हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <Star className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              समास के प्रमुख प्रकार
            </h2>

            <p className="text-gray-500 mt-1">
              Six important types of Sanskrit Samasa
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samasTypes.map((item, index) => (
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

              <h3 className="mt-5 text-xl font-black text-gray-900">
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
                    key={example.word}
                    className="rounded-2xl bg-indigo-50 p-4"
                  >
                    <p className="font-black text-gray-900">
                      {example.word}
                    </p>

                    <p className="mt-1 text-sm font-bold text-indigo-700">
                      विग्रह: {example.vigraha}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {example.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* IDENTIFICATION */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-yellow-500" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                समास की पहचान कैसे करें?
              </h2>

              <p className="text-gray-500 mt-1">
                Easy identification tricks
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {identification.map((item, index) => (
              <article
                key={item.type}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6 hover:bg-indigo-50 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </span>

                  <span className="text-xs font-black bg-white text-gray-600 px-3 py-1.5 rounded-full">
                    पहचान
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {item.type}
                </h3>

                <p className="mt-3 font-bold text-indigo-700">
                  {item.clue}
                </p>

                <p className="mt-2 text-gray-600">
                  {item.trick}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIGRAHA */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              समास-विग्रह के महत्वपूर्ण उदाहरण
            </h2>

            <p className="text-gray-500 mt-1">
              Important Samasa Vigraha examples
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="text-left p-4 font-black">
                    समस्त पद
                  </th>

                  <th className="text-left p-4 font-black">
                    समास-विग्रह
                  </th>

                  <th className="text-left p-4 font-black">
                    समास
                  </th>
                </tr>
              </thead>

              <tbody>
                {quickExamples.map((item) => (
                  <tr
                    key={item.word}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="p-4 font-black text-gray-900">
                      {item.word}
                    </td>

                    <td className="p-4 font-bold text-indigo-700">
                      {item.vigraha}
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
            <Sparkles className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                समास याद रखने की आसान ट्रिक
              </h2>

              <p className="text-gray-500 mt-1">
                Quick Memory Guide
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  {item.formula}
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
                    समास
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
                    अव्ययीभाव
                  </td>

                  <td className="p-4 text-gray-600">
                    पहला पद प्रधान
                  </td>

                  <td className="p-4 font-bold text-indigo-700">
                    यथाशक्ति
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">
                    तत्पुरुष
                  </td>

                  <td className="p-4 text-gray-600">
                    उत्तर पद प्रधान
                  </td>

                  <td className="p-4 font-bold text-indigo-700">
                    राजपुत्रः
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">
                    कर्मधारय
                  </td>

                  <td className="p-4 text-gray-600">
                    विशेषण + विशेष्य
                  </td>

                  <td className="p-4 font-bold text-indigo-700">
                    नीलोत्पलम्
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">
                    द्विगु
                  </td>

                  <td className="p-4 text-gray-600">
                    संख्या + समूह
                  </td>

                  <td className="p-4 font-bold text-indigo-700">
                    त्रिभुवनम्
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-black">
                    द्वन्द्व
                  </td>

                  <td className="p-4 text-gray-600">
                    दोनों पद प्रधान
                  </td>

                  <td className="p-4 font-bold text-indigo-700">
                    माता-पितरौ
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-black">
                    बहुव्रीहि
                  </td>

                  <td className="p-4 text-gray-600">
                    अन्य का बोध
                  </td>

                  <td className="p-4 font-bold text-indigo-700">
                    चतुर्भुजः
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
              href="/learn/sanskrit/sandhi"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              सन्धि
            </Link>

            <Link
              href="/learn/sanskrit/karak"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              कारक
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
            Sanskrit Samas Complete
          </h2>

          <p className="mt-3 text-gray-400">
            समास के प्रमुख प्रकार, विग्रह और उदाहरणों का अध्ययन पूरा करें।
          </p>
        </div>
      </section>
    </main>
  );
}
