
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Languages,
  Lightbulb,
  Sparkles,
  Star,
} from "lucide-react";

const features = [
  {
    title: "प्राचीन भाषा",
    description:
      "संस्कृत भारत की प्राचीन और समृद्ध भाषाओं में से एक है।",
    icon: "📜",
  },
  {
    title: "व्यवस्थित व्याकरण",
    description:
      "संस्कृत का व्याकरण अत्यंत व्यवस्थित, विस्तृत और नियमबद्ध है।",
    icon: "📚",
  },
  {
    title: "समृद्ध साहित्य",
    description:
      "वेद, उपनिषद, रामायण, महाभारत, पुराण, काव्य और नाटक संस्कृत साहित्य की महत्वपूर्ण परंपराएँ हैं।",
    icon: "📖",
  },
  {
    title: "ज्ञान की भाषा",
    description:
      "दर्शन, आयुर्वेद, गणित, खगोल और अन्य विषयों के अनेक ग्रंथ संस्कृत में लिखे गए।",
    icon: "🧠",
  },
  {
    title: "सटीक उच्चारण",
    description:
      "संस्कृत में वर्णों के उच्चारण और शब्दों की संरचना का विशेष महत्व है।",
    icon: "🗣️",
  },
  {
    title: "भारतीय संस्कृति",
    description:
      "संस्कृत भारतीय संस्कृति, दर्शन और परंपराओं को समझने में महत्वपूर्ण सहायता करती है।",
    icon: "🇮🇳",
  },
];

const importantTopics = [
  "संस्कृत का परिचय और महत्व",
  "स्वर और व्यञ्जन",
  "संस्कृत वर्णमाला",
  "शब्द और वाक्य की मूल संरचना",
  "संज्ञा, सर्वनाम और क्रिया",
  "विभक्ति और कारक",
  "सन्धि और समास",
  "संस्कृत साहित्य का परिचय",
];

const examPoints = [
  "संस्कृत को भारतीय भाषाओं की प्राचीन और महत्वपूर्ण भाषा के रूप में जाना जाता है।",
  "संस्कृत का व्याकरण अत्यंत व्यवस्थित और विस्तृत है।",
  "वेद संस्कृत साहित्य की प्राचीनतम प्रमुख परंपराओं में शामिल हैं।",
  "रामायण के रचयिता महर्षि वाल्मीकि माने जाते हैं।",
  "महाभारत के रचयिता महर्षि वेदव्यास माने जाते हैं।",
  "कालिदास संस्कृत के प्रसिद्ध कवि और नाटककार हैं।",
];

const quickRevision = [
  ["भाषा", "संस्कृत"],
  ["प्रमुख प्राचीन ग्रंथ", "वेद"],
  ["महाकाव्य", "रामायण और महाभारत"],
  ["प्रसिद्ध कवि", "कालिदास"],
  ["व्याकरण", "व्यवस्थित एवं विस्तृत"],
  ["मुख्य अध्ययन", "वर्ण, शब्द, वाक्य और व्याकरण"],
];

const learningSteps = [
  {
    number: "01",
    title: "वर्णमाला",
    description: "स्वर, व्यञ्जन और उनके सही उच्चारण को समझें।",
  },
  {
    number: "02",
    title: "शब्द",
    description: "संस्कृत शब्दों की रचना और उनके रूपों को सीखें।",
  },
  {
    number: "03",
    title: "व्याकरण",
    description: "संज्ञा, सर्वनाम, क्रिया, विभक्ति, कारक आदि समझें।",
  },
  {
    number: "04",
    title: "साहित्य",
    description: "संस्कृत के प्रमुख ग्रंथों और साहित्यिक परंपराओं का अध्ययन करें।",
  },
];

export default function IntroductionToSanskritPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-500 text-white">
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
              Introduction to Sanskrit
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत भाषा का इतिहास, महत्व, विशेषताएँ और मूल
              संरचना सरल भाषा में समझें।
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 font-semibold">
                📚 Beginner Friendly
              </span>

              <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 font-semibold">
                🇮🇳 संस्कृत
              </span>

              <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 font-semibold">
                🎓 Free Learning
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center">
              <Languages
                className="text-orange-600"
                size={30}
              />
            </div>

            <div className="flex-1">

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                संस्कृत भाषा का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                संस्कृत भारत की प्राचीन और समृद्ध भाषाओं में से एक है।
                भारतीय ज्ञान, दर्शन, साहित्य, संस्कृति और परंपरा के
                विकास में संस्कृत का महत्वपूर्ण योगदान रहा है।
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                संस्कृत साहित्य में वेद, उपनिषद, रामायण, महाभारत,
                पुराण, काव्य, नाटक और अनेक दार्शनिक एवं वैज्ञानिक
                ग्रंथ शामिल हैं।
              </p>

              <div className="mt-6 rounded-2xl bg-orange-50 border border-orange-100 p-5">

                <p className="font-black text-orange-800">
                  Basic Learning Formula
                </p>

                <p className="mt-2 text-gray-700 font-bold text-lg">
                  वर्ण → शब्द → वाक्य → व्याकरण → साहित्य
                </p>

                <p className="mt-3 text-gray-600">
                  संस्कृत सीखने के लिए पहले वर्णों और उच्चारण को समझना,
                  फिर शब्द एवं वाक्य की संरचना और उसके बाद व्याकरण का
                  अध्ययन करना उपयोगी होता है।
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-orange-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              संस्कृत की प्रमुख विशेषताएँ
            </h2>

            <p className="text-gray-500 mt-1">
              संस्कृत भाषा की महत्वपूर्ण विशेषताओं को समझें।
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => (

            <article
              key={feature.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="flex items-start justify-between">

                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {index + 1}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* IMPORTANT TOPICS */}
      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Star
              className="text-amber-500"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Sanskrit Topics
              </h2>

              <p className="text-gray-500 mt-1">
                आगे पढ़ने के लिए महत्वपूर्ण विषय।
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {importantTopics.map((topic, index) => (

              <div
                key={topic}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-5 hover:bg-orange-50 hover:border-orange-200 transition"
              >

                <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <p className="mt-4 font-bold text-gray-800 leading-relaxed">
                  {topic}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BASIC STRUCTURE */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black">
                Sanskrit Learning Structure
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed">
                संस्कृत सीखते समय पहले वर्णमाला और उच्चारण को समझना,
                फिर शब्दों तथा वाक्यों की संरचना और उसके बाद व्याकरण
                का अध्ययन करना उपयोगी होता है।
              </p>

              <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {learningSteps.map((step) => (

                  <div
                    key={step.number}
                    className="bg-white/10 rounded-2xl p-5 border border-white/10"
                  >

                    <span className="text-sm font-black text-white/70">
                      {step.number}
                    </span>

                    <p className="mt-2 text-lg font-black">
                      {step.title}
                    </p>

                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                      {step.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EXAM POINTS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-center gap-3 mb-7">

            <CheckCircle
              className="text-green-600"
              size={32}
            />

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

            {examPoints.map((point, index) => (

              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-gray-50 border border-gray-100 p-5"
              >

                <span className="w-8 h-8 shrink-0 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black">
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

      {/* QUICK REVISION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-center gap-3 mb-7">

            <BookOpen
              className="text-orange-600"
              size={30}
            />

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Quick Revision
            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px] border-collapse">

              <thead>

                <tr className="bg-orange-50">

                  <th className="text-left p-4 font-black text-orange-800">
                    विषय
                  </th>

                  <th className="text-left p-4 font-black text-orange-800">
                    मुख्य जानकारी
                  </th>

                </tr>

              </thead>

              <tbody>

                {quickRevision.map((item) => (

                  <tr
                    key={item[0]}
                    className="border-b border-gray-100"
                  >

                    <td className="p-4 font-black text-gray-900">
                      {item[0]}
                    </td>

                    <td className="p-4 text-gray-600">
                      {item[1]}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* NEXT TOPICS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-orange-50 border border-orange-100 rounded-3xl p-7 md:p-10">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center">
              <BookOpen size={25} />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                अब आगे क्या पढ़ें?
              </h2>

              <p className="mt-2 text-gray-600 leading-relaxed">
                संस्कृत की मूल जानकारी के बाद वर्णमाला और उच्चारण
                का अध्ययन करें।
              </p>

            </div>

          </div>

          <div className="mt-6 flex flex-wrap gap-3">

            <Link
              href="/learn/sanskrit/sanskrit-alphabet"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-xl font-bold transition"
            >
              Sanskrit Alphabet
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/learn/sanskrit/sandhi"
              className="inline-flex items-center gap-2 bg-white hover:bg-orange-100 border border-orange-200 text-orange-700 px-5 py-3 rounded-xl font-bold transition"
            >
              सन्धि
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/learn/sanskrit/samas"
              className="inline-flex items-center gap-2 bg-white hover:bg-orange-100 border border-orange-200 text-orange-700 px-5 py-3 rounded-xl font-bold transition"
            >
              समास
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>
            {/* NAVIGATION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">

          <div className="flex flex-col sm:flex-row gap-4 justify-between">

            <Link
              href="/learn/sanskrit"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Back to Sanskrit
            </Link>

            <Link
              href="/learn/sanskrit/sanskrit-alphabet"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700"
            >
              Next: Sanskrit Alphabet
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <Sparkles
            className="mx-auto text-amber-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Sanskrit Introduction Complete
          </h2>

          <p className="mt-3 text-gray-400">
            संस्कृत सीखने की यात्रा यहीं से शुरू करें।
          </p>

          <Link
            href="/learn/sanskrit/sanskrit-alphabet"
            className="inline-flex items-center gap-2 mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            Start Sanskrit Alphabet
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}
