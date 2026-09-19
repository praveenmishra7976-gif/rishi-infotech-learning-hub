
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const subhashitas = [
  {
    number: 1,
    verse: "विद्या ददाति विनयं विनयाद् याति पात्रताम्।",
    meaning:
      "विद्या मनुष्य को विनम्रता देती है और विनम्रता से योग्यता प्राप्त होती है।",
    lesson: "विद्या के साथ विनम्रता भी आवश्यक है।",
  },
  {
    number: 2,
    verse: "सत्यमेव जयते नानृतम्।",
    meaning:
      "सत्य की ही विजय होती है, असत्य की नहीं।",
    lesson: "हमेशा सत्य का पालन करना चाहिए।",
  },
  {
    number: 3,
    verse: "उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः।",
    meaning:
      "कार्य केवल इच्छा करने से नहीं, बल्कि परिश्रम करने से सफल होते हैं।",
    lesson: "सफलता के लिए मेहनत आवश्यक है।",
  },
  {
    number: 4,
    verse: "अयं निजः परो वेति गणना लघुचेतसाम्।",
    meaning:
      "यह अपना है और यह पराया है — ऐसा विचार छोटे मन वाले लोग करते हैं।",
    lesson: "सभी के प्रति समान और उदार भावना रखनी चाहिए।",
  },
  {
    number: 5,
    verse: "परोपकाराय फलन्ति वृक्षाः।",
    meaning:
      "वृक्ष दूसरों के उपकार के लिए फल देते हैं।",
    lesson: "हमें भी दूसरों के हित में कार्य करना चाहिए।",
  },
  {
    number: 6,
    verse: "जननी जन्मभूमिश्च स्वर्गादपि गरीयसी।",
    meaning:
      "माता और जन्मभूमि स्वर्ग से भी बढ़कर हैं।",
    lesson: "माता और मातृभूमि का सम्मान करना चाहिए।",
  },
  {
    number: 7,
    verse: "क्षमा वीरस्य भूषणम्।",
    meaning:
      "क्षमा वीर व्यक्ति का आभूषण है।",
    lesson: "सच्चा वीर वही है जो क्षमा करना जानता है।",
  },
  {
    number: 8,
    verse: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।",
    meaning:
      "इस संसार में ज्ञान के समान पवित्र कुछ भी नहीं है।",
    lesson: "ज्ञान मनुष्य के जीवन को श्रेष्ठ बनाता है।",
  },
];

const values = [
  {
    title: "सत्य",
    description:
      "सुभाषित हमें सत्य बोलने और सत्य के मार्ग पर चलने की प्रेरणा देते हैं।",
    icon: "🪔",
  },
  {
    title: "विद्या",
    description:
      "ज्ञान और शिक्षा को जीवन की महत्वपूर्ण संपत्ति माना गया है।",
    icon: "📚",
  },
  {
    title: "परिश्रम",
    description:
      "मेहनत, प्रयास और निरंतर अभ्यास से सफलता प्राप्त करने की शिक्षा मिलती है।",
    icon: "💪",
  },
  {
    title: "विनम्रता",
    description:
      "ज्ञान के साथ विनम्रता रखना एक श्रेष्ठ गुण माना जाता है।",
    icon: "🙏",
  },
  {
    title: "परोपकार",
    description:
      "दूसरों की सहायता और कल्याण करना मानव जीवन का महत्वपूर्ण उद्देश्य है।",
    icon: "🤝",
  },
  {
    title: "देशप्रेम",
    description:
      "माता, मातृभूमि और समाज के प्रति सम्मान एवं प्रेम की भावना विकसित होती है।",
    icon: "🇮🇳",
  },
];

const examPoints = [
  "सुभाषित का अर्थ है — अच्छी या सुंदर कही गई बात।",
  "सुभाषितों में नीति, ज्ञान, सदाचार और जीवन-मूल्यों की शिक्षा मिलती है।",
  "विद्या, सत्य, परिश्रम, विनय और परोपकार प्रमुख विषय हैं।",
  "परीक्षा में श्लोक का अर्थ और भावार्थ पूछा जा सकता है।",
  "प्रमुख सुभाषितों की पहली पंक्ति और उनका अर्थ याद रखें।",
  "श्लोक के माध्यम से मिलने वाली नैतिक शिक्षा को समझना महत्वपूर्ण है।",
];

const quickRevision = [
  ["विद्या", "ज्ञान और विनम्रता"],
  ["सत्य", "सत्य की विजय"],
  ["उद्यम", "परिश्रम से सफलता"],
  ["परोपकार", "दूसरों की सहायता"],
  ["क्षमा", "वीरता का गुण"],
  ["जन्मभूमि", "माता और मातृभूमि का सम्मान"],
];

export default function SubhashitaniPage() {
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
              Sanskrit Subhashitani
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत के प्रसिद्ध सुभाषितों, उनके सरल अर्थ,
              जीवन-मूल्यों और महत्वपूर्ण शिक्षाओं का अध्ययन करें।
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Quote className="text-indigo-600" size={30} />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                सुभाषितानि का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                सुभाषित का अर्थ है अच्छी, सुंदर और हितकारी बात।
                संस्कृत साहित्य में अनेक ऐसे श्लोक और पद्य मिलते हैं
                जो मनुष्य को सत्य, ज्ञान, परिश्रम, विनम्रता, परोपकार
                और सदाचार की शिक्षा देते हैं।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  Subhashita Learning Formula
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  श्लोक → शब्दार्थ → भावार्थ → शिक्षा → जीवन में प्रयोग
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBHASHITAS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              प्रसिद्ध संस्कृत सुभाषित
            </h2>

            <p className="text-gray-500 mt-1">
              महत्वपूर्ण श्लोक और उनके सरल अर्थ।
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {subhashitas.map((item) => (
            <article
              key={item.number}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                  {item.number}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Quote
                      className="text-indigo-500"
                      size={20}
                    />

                    <span className="text-sm font-black text-indigo-600">
                      सुभाषित
                    </span>
                  </div>

                  <p className="mt-4 text-xl md:text-2xl font-black text-gray-900 leading-relaxed">
                    {item.verse}
                  </p>

                  <div className="mt-5 rounded-2xl bg-indigo-50 p-4">
                    <p className="text-sm font-black text-indigo-800">
                      सरल अर्थ
                    </p>

                    <p className="mt-2 text-gray-700 leading-relaxed">
                      {item.meaning}
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl bg-gray-50 p-4">
                    <p className="text-sm font-black text-gray-700">
                      जीवन शिक्षा
                    </p>

                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {item.lesson}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Star className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                सुभाषितों से मिलने वाले जीवन-मूल्य
              </h2>

              <p className="text-gray-500 mt-1">
                संस्कृत सुभाषितों की प्रमुख शिक्षाएँ।
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6 hover:bg-indigo-50 hover:border-indigo-200 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl">
                  {value.icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL QUOTE */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Quote size={30} />
            </div>

            <div>
              <p className="text-sm font-bold text-white/70">
                प्रेरणादायक सुभाषित
              </p>

              <h2 className="mt-3 text-2xl md:text-4xl font-black leading-relaxed">
                उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः।
              </h2>

              <p className="mt-5 text-white/90 text-lg leading-relaxed">
                केवल इच्छा करने से कार्य पूरे नहीं होते। सफलता के
                लिए निरंतर प्रयास और परिश्रम आवश्यक है।
              </p>
            </div>
          </div>
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
            <table className="w-full min-w-[650px] border-collapse">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-4 font-black text-indigo-800">
                    विषय
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    मुख्य शिक्षा
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
                Subhashitani Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed">
                सुभाषितों को केवल याद न करें। प्रत्येक श्लोक का
                अर्थ और उससे मिलने वाली शिक्षा समझें। रोज़ कुछ
                सुभाषित पढ़ने और उनका अर्थ लिखने का अभ्यास करें।
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-white/10 rounded-xl px-4 py-2 font-bold">
                  श्लोक पढ़ें
                </span>

                <span className="bg-white/10 rounded-xl px-4 py-2 font-bold">
                  अर्थ समझें
                </span>

                <span className="bg-white/10 rounded-xl px-4 py-2 font-bold">
                  याद करें
                </span>

                <span className="bg-white/10 rounded-xl px-4 py-2 font-bold">
                  जीवन में अपनाएँ
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
              href="/learn/sanskrit/sanskrit-literature"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Sanskrit Literature
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
            Sanskrit Subhashitani Complete
          </h2>

          <p className="mt-3 text-gray-400">
            संस्कृत के प्रेरणादायक सुभाषितों और जीवन-मूल्यों का अध्ययन करें।
          </p>
        </div>
      </section>
    </main>
  );
}

