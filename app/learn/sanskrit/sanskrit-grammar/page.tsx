
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

const grammarTopics = [
  {
    title: "वर्ण एवं उच्चारण",
    english: "Letters & Pronunciation",
    description:
      "संस्कृत वर्णमाला, स्वर, व्यंजन और उनके सही उच्चारण को समझें।",
    icon: "🔤",
    href: "/learn/sanskrit/sanskrit-alphabet",
  },
  {
    title: "संज्ञा",
    english: "Noun",
    description:
      "संज्ञा के प्रकार, लिंग और संस्कृत वाक्यों में उनके प्रयोग का अध्ययन करें।",
    icon: "📖",
    href: "/learn/sanskrit/sangya",
  },
  {
    title: "सर्वनाम",
    english: "Pronoun",
    description:
      "संस्कृत सर्वनामों और उनके विभिन्न रूपों तथा प्रयोग को सीखें।",
    icon: "👤",
    href: "/learn/sanskrit/sarvanam",
  },
  {
    title: "क्रिया",
    english: "Verb",
    description:
      "धातु, क्रिया के रूप और वाक्यों में क्रिया के प्रयोग को समझें।",
    icon: "✍️",
    href: "/learn/sanskrit/kriya",
  },
  {
    title: "लकार",
    english: "Lakara",
    description:
      "वर्तमान, भूत और भविष्य से संबंधित प्रमुख लकारों का अध्ययन करें।",
    icon: "⏳",
    href: "/learn/sanskrit/lakara",
  },
  {
    title: "विभक्ति",
    english: "Cases",
    description:
      "आठों विभक्तियों और उनके वाक्य में प्रयोग को उदाहरणों के साथ सीखें।",
    icon: "📝",
    href: "/learn/sanskrit/vibhakti",
  },
  {
    title: "सन्धि",
    english: "Sandhi",
    description:
      "स्वर, व्यंजन और विसर्ग सन्धि के नियम तथा उदाहरण समझें।",
    icon: "🔗",
    href: "/learn/sanskrit/sandhi",
  },
  {
    title: "समास",
    english: "Compound Words",
    description:
      "अव्ययीभाव, तत्पुरुष, कर्मधारय, द्वन्द्व और बहुव्रीहि समास सीखें।",
    icon: "🧩",
    href: "/learn/sanskrit/samas",
  },
  {
    title: "कारक",
    english: "Karaka",
    description:
      "कर्ता, कर्म, करण, सम्प्रदान, अपादान और अधिकरण आदि कारकों को समझें।",
    icon: "📚",
    href: "/learn/sanskrit/karak",
  },
  {
    title: "शब्द रूप",
    english: "Shabd Roop",
    description:
      "राम, बालक, लता, फल आदि प्रमुख शब्दों के रूपों का अभ्यास करें।",
    icon: "📜",
    href: "/learn/sanskrit/sanskrit-shabd-roop",
  },
  {
    title: "धातु रूप",
    english: "Dhatu Roop",
    description:
      "प्रमुख संस्कृत धातुओं के रूप और उनके विभिन्न लकारों में प्रयोग सीखें।",
    icon: "⚙️",
    href: "/learn/sanskrit/sanskrit-dhatu-roop",
  },
  {
    title: "अनुवाद",
    english: "Translation",
    description:
      "संस्कृत से हिन्दी और हिन्दी से संस्कृत वाक्यों का अनुवाद सीखें।",
    icon: "🌐",
    href: "/learn/sanskrit/translation",
  },
];

const grammarRules = [
  {
    title: "लिंग",
    description:
      "संस्कृत में शब्द मुख्यतः तीन लिंगों में पाए जाते हैं — पुल्लिंग, स्त्रीलिंग और नपुंसकलिंग।",
    icon: "⚖️",
  },
  {
    title: "वचन",
    description:
      "संस्कृत में तीन वचन होते हैं — एकवचन, द्विवचन और बहुवचन।",
    icon: "🔢",
  },
  {
    title: "विभक्ति",
    description:
      "संस्कृत में आठ विभक्तियाँ होती हैं जो शब्दों के वाक्यगत संबंध को बताती हैं।",
    icon: "📝",
  },
  {
    title: "पुरुष",
    description:
      "क्रिया के प्रयोग में उत्तम, मध्यम और प्रथम पुरुष का महत्वपूर्ण स्थान है।",
    icon: "👥",
  },
  {
    title: "काल एवं लकार",
    description:
      "क्रिया के समय और भाव को व्यक्त करने के लिए विभिन्न लकारों का प्रयोग किया जाता है।",
    icon: "⏰",
  },
  {
    title: "सन्धि",
    description:
      "दो वर्णों या शब्दों के मिलने पर होने वाले ध्वनि परिवर्तन को सन्धि कहते हैं।",
    icon: "🔗",
  },
];

const examPoints = [
  "संस्कृत में तीन लिंग और तीन वचन होते हैं।",
  "संस्कृत में आठ विभक्तियाँ मानी जाती हैं।",
  "शब्द रूप में विभक्ति और वचन के अनुसार परिवर्तन होता है।",
  "धातु रूप में पुरुष, वचन और लकार का विशेष महत्व है।",
  "सन्धि में दो वर्णों के मिलने से परिवर्तन होता है।",
  "समास में दो या अधिक शब्द मिलकर एक संक्षिप्त पद बनाते हैं।",
  "कारक शब्दों के बीच कर्ता, कर्म आदि संबंध को स्पष्ट करते हैं।",
  "परीक्षा में शब्द रूप और धातु रूप का नियमित अभ्यास बहुत उपयोगी है।",
];

const quickRevision = [
  ["लिंग", "पुल्लिंग, स्त्रीलिंग, नपुंसकलिंग"],
  ["वचन", "एकवचन, द्विवचन, बहुवचन"],
  ["विभक्ति", "आठ"],
  ["पुरुष", "उत्तम, मध्यम, प्रथम"],
  ["सन्धि", "स्वर, व्यंजन, विसर्ग"],
  ["समास", "अव्ययीभाव, तत्पुरुष, द्वन्द्व, बहुव्रीहि आदि"],
  ["कारक", "कर्ता, कर्म, करण, सम्प्रदान, अपादान, सम्बन्ध, अधिकरण"],
];

export default function SanskritGrammarPage() {
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
              Sanskrit Grammar
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत व्याकरण के प्रमुख नियमों, शब्द रूप, धातु रूप,
              सन्धि, समास, कारक, विभक्ति और भाषा की मूल संरचना को
              सरल तरीके से सीखें।
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Languages className="text-indigo-600" size={30} />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                संस्कृत व्याकरण का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                व्याकरण भाषा को सही ढंग से बोलने, पढ़ने, लिखने और
                समझने के नियमों का अध्ययन है। संस्कृत व्याकरण में
                वर्ण, शब्द, धातु, विभक्ति, लिंग, वचन, पुरुष, लकार,
                सन्धि और समास जैसे विषय महत्वपूर्ण हैं।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  Grammar Learning Formula
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  वर्ण → शब्द → रूप → वाक्य → अर्थ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TOPICS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Sanskrit Grammar Topics
            </h2>

            <p className="text-gray-500 mt-1">
              संस्कृत व्याकरण के सभी प्रमुख विषय।
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {grammarTopics.map((topic, index) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="group"
            >
              <article className="h-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 p-6">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl">
                    {topic.icon}
                  </div>

                  <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-indigo-700 transition">
                  {topic.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-indigo-600">
                  {topic.english}
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {topic.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-indigo-700 font-bold">
                  Study Chapter
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* BASIC GRAMMAR RULES */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Star className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Basic Grammar Rules
              </h2>

              <p className="text-gray-500 mt-1">
                व्याकरण के मूल नियम जिन्हें हर विद्यार्थी को जानना चाहिए।
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grammarRules.map((rule) => (
              <article
                key={rule.title}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6 hover:bg-indigo-50 hover:border-indigo-200 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl">
                  {rule.icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {rule.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {rule.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THREE VACHANS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-center gap-3 mb-7">
            <BookOpen className="text-indigo-600" size={30} />

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              संस्कृत के तीन वचन
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
                उदाहरण: बालकः
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
                उदाहरण: बालकौ
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
                उदाहरण: बालकाः
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIBHAKTI */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-black">
            आठ विभक्तियाँ
          </h2>

          <p className="mt-3 text-white/90">
            संस्कृत व्याकरण में आठ प्रमुख विभक्तियाँ मानी जाती हैं।
          </p>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["1", "प्रथमा", "कर्ता"],
              ["2", "द्वितीया", "कर्म"],
              ["3", "तृतीया", "करण"],
              ["4", "चतुर्थी", "सम्प्रदान"],
              ["5", "पञ्चमी", "अपादान"],
              ["6", "षष्ठी", "सम्बन्ध"],
              ["7", "सप्तमी", "अधिकरण"],
              ["8", "सम्बोधन", "सम्बोधन"],
            ].map((item) => (
              <div
                key={item[1]}
                className="bg-white/10 rounded-2xl p-5"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-black">
                  {item[0]}
                </div>

                <h3 className="mt-4 font-black text-lg">
                  {item[1]}
                </h3>

                <p className="mt-1 text-white/80">
                  {item[2]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORD + DHATU ROOP */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/learn/sanskrit/sanskrit-shabd-roop"
            className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-7 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl">
              📜
            </div>

            <h2 className="mt-5 text-2xl font-black text-gray-900 group-hover:text-indigo-700">
              Sanskrit Shabd Roop
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              राम, बालक, लता, फल आदि प्रमुख शब्दों के रूप और
              विभक्तियों का अभ्यास करें।
            </p>

            <div className="mt-5 inline-flex items-center gap-2 font-bold text-indigo-700">
              Open Shabd Roop
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </div>
          </Link>

          <Link
            href="/learn/sanskrit/sanskrit-dhatu-roop"
            className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-7 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl">
              ⚙️
            </div>

            <h2 className="mt-5 text-2xl font-black text-gray-900 group-hover:text-purple-700">
              Sanskrit Dhatu Roop
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              प्रमुख धातुओं के रूप, लकार और वाक्य प्रयोग को
              उदाहरणों के साथ सीखें।
            </p>

            <div className="mt-5 inline-flex items-center gap-2 font-bold text-purple-700">
              Open Dhatu Roop
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* IMPORTANT EXAM POINTS */}
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
            {examPoints.map((point, index) => (
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

      {/* QUICK REVISION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-center gap-3 mb-7">
            <Lightbulb className="text-indigo-600" size={30} />

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Quick Revision
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-4 font-black text-indigo-800">
                    विषय
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
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

      {/* STUDY TIP */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Sanskrit Grammar Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed">
                संस्कृत व्याकरण को केवल याद करने के बजाय उदाहरणों
                के साथ समझें। रोज़ थोड़ा-थोड़ा शब्द रूप, धातु रूप,
                सन्धि और समास का अभ्यास करें। इससे परीक्षा में
                प्रश्न हल करना आसान होगा।
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-white/10 rounded-xl px-4 py-2 font-bold">
                  पढ़ें
                </span>

                <span className="bg-white/10 rounded-xl px-4 py-2 font-bold">
                  समझें
                </span>

                <span className="bg-white/10 rounded-xl px-4 py-2 font-bold">
                  लिखें
                </span>

                <span className="bg-white/10 rounded-xl px-4 py-2 font-bold">
                  अभ्यास करें
                </span>
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
              href="/learn/sanskrit/sanskrit-shabd-roop"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Shabd Roop
            </Link>

            <Link
              href="/learn/sanskrit"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              Back to Sanskrit
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
            Sanskrit Grammar Complete
          </h2>

          <p className="mt-3 text-gray-400">
            संस्कृत व्याकरण के प्रमुख विषयों का अध्ययन करें और
            अपने ज्ञान को मजबूत बनाएं।
          </p>
        </div>
      </section>
    </main>
  );
}

