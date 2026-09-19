
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Languages,
  Sparkles,
  Star,
} from "lucide-react";

const vibhaktis = [
  {
    number: "प्रथमा",
    case: "Nominative",
    question: "कः? कौ? के?",
    karaka: "कर्ता",
    use: "कर्ता का बोध",
    example: "रामः पठति।",
    meaning: "राम पढ़ता है।",
    icon: "👤",
  },
  {
    number: "द्वितीया",
    case: "Accusative",
    question: "कम्? कौ? कान्?",
    karaka: "कर्म",
    use: "कर्म का बोध",
    example: "रामः पुस्तकं पठति।",
    meaning: "राम पुस्तक पढ़ता है।",
    icon: "📖",
  },
  {
    number: "तृतीया",
    case: "Instrumental",
    question: "केन? काभ्याम्? कैः?",
    karaka: "करण",
    use: "साधन या माध्यम",
    example: "रामः लेखन्या लिखति।",
    meaning: "राम कलम से लिखता है।",
    icon: "✍️",
  },
  {
    number: "चतुर्थी",
    case: "Dative",
    question: "कस्मै? काभ्याम्? केभ्यः?",
    karaka: "सम्प्रदान",
    use: "जिसके लिए कार्य हो",
    example: "रामः बालकाय फलम् ददाति।",
    meaning: "राम बालक को फल देता है।",
    icon: "🎁",
  },
  {
    number: "पञ्चमी",
    case: "Ablative",
    question: "कस्मात्? काभ्याम्? केभ्यः?",
    karaka: "अपादान",
    use: "अलगाव या स्रोत",
    example: "वृक्षात् पत्रं पतति।",
    meaning: "वृक्ष से पत्ता गिरता है।",
    icon: "🍃",
  },
  {
    number: "षष्ठी",
    case: "Genitive",
    question: "कस्य? कयोः? केषाम्?",
    karaka: "सम्बन्ध",
    use: "सम्बन्ध का बोध",
    example: "रामस्य पुस्तकम्।",
    meaning: "राम की पुस्तक।",
    icon: "🔗",
  },
  {
    number: "सप्तमी",
    case: "Locative",
    question: "कस्मिन्? कयोः? केषु?",
    karaka: "अधिकरण",
    use: "स्थान या आधार",
    example: "रामः विद्यालये पठति।",
    meaning: "राम विद्यालय में पढ़ता है।",
    icon: "🏫",
  },
  {
    number: "सम्बोधन",
    case: "Vocative",
    question: "हे! भो! अरे!",
    karaka: "सम्बोधन",
    use: "किसी को पुकारना",
    example: "हे राम! आगच्छ।",
    meaning: "हे राम! आओ।",
    icon: "📢",
  },
];

const ramaForms = [
  {
    vibhakti: "प्रथमा",
    singular: "रामः",
    dual: "रामौ",
    plural: "रामाः",
    question: "कः?",
  },
  {
    vibhakti: "द्वितीया",
    singular: "रामम्",
    dual: "रामौ",
    plural: "रामान्",
    question: "कम्?",
  },
  {
    vibhakti: "तृतीया",
    singular: "रामेण",
    dual: "रामाभ्याम्",
    plural: "रामैः",
    question: "केन?",
  },
  {
    vibhakti: "चतुर्थी",
    singular: "रामाय",
    dual: "रामाभ्याम्",
    plural: "रामेभ्यः",
    question: "कस्मै?",
  },
  {
    vibhakti: "पञ्चमी",
    singular: "रामात्",
    dual: "रामाभ्याम्",
    plural: "रामेभ्यः",
    question: "कस्मात्?",
  },
  {
    vibhakti: "षष्ठी",
    singular: "रामस्य",
    dual: "रामयोः",
    plural: "रामाणाम्",
    question: "कस्य?",
  },
  {
    vibhakti: "सप्तमी",
    singular: "रामे",
    dual: "रामयोः",
    plural: "रामेषु",
    question: "कस्मिन्?",
  },
  {
    vibhakti: "सम्बोधन",
    singular: "हे राम!",
    dual: "हे रामौ!",
    plural: "हे रामाः!",
    question: "हे!",
  },
];

const sentenceExamples = [
  {
    title: "प्रथमा",
    sentence: "बालकः पठति।",
    meaning: "बालक पढ़ता है।",
    explanation: "बालकः कर्ता है, इसलिए प्रथमा विभक्ति।",
  },
  {
    title: "द्वितीया",
    sentence: "बालकः पुस्तकं पठति।",
    meaning: "बालक पुस्तक पढ़ता है।",
    explanation: "पुस्तकम् कर्म है, इसलिए द्वितीया विभक्ति।",
  },
  {
    title: "तृतीया",
    sentence: "बालकः लेखन्या लिखति।",
    meaning: "बालक कलम से लिखता है।",
    explanation: "लेखन्या साधन है, इसलिए तृतीया विभक्ति।",
  },
  {
    title: "चतुर्थी",
    sentence: "माता पुत्राय फलम् ददाति।",
    meaning: "माता पुत्र को फल देती है।",
    explanation: "पुत्राय जिसके लिए दिया गया, इसलिए चतुर्थी विभक्ति।",
  },
  {
    title: "पञ्चमी",
    sentence: "वृक्षात् पत्रं पतति।",
    meaning: "वृक्ष से पत्ता गिरता है।",
    explanation: "वृक्ष से अलगाव का भाव है, इसलिए पञ्चमी विभक्ति।",
  },
  {
    title: "षष्ठी",
    sentence: "रामस्य गृहं सुन्दरम् अस्ति।",
    meaning: "राम का घर सुंदर है।",
    explanation: "रामस्य सम्बन्ध बताता है, इसलिए षष्ठी विभक्ति।",
  },
  {
    title: "सप्तमी",
    sentence: "छात्रः विद्यालये पठति।",
    meaning: "छात्र विद्यालय में पढ़ता है।",
    explanation: "विद्यालये स्थान बताता है, इसलिए सप्तमी विभक्ति।",
  },
  {
    title: "सम्बोधन",
    sentence: "हे मित्र! आगच्छ।",
    meaning: "हे मित्र! आओ।",
    explanation: "किसी को पुकारने के लिए सम्बोधन का प्रयोग होता है।",
  },
];

const examPoints = [
  "संस्कृत में सामान्यतः आठ विभक्तियाँ मानी जाती हैं।",
  "प्रथमा विभक्ति से कर्ता का बोध होता है।",
  "द्वितीया विभक्ति से कर्म का बोध होता है।",
  "तृतीया विभक्ति से करण या साधन का बोध होता है।",
  "चतुर्थी विभक्ति से सम्प्रदान का बोध होता है।",
  "पञ्चमी विभक्ति से अपादान या अलगाव का बोध होता है।",
  "षष्ठी विभक्ति से सम्बन्ध का बोध होता है।",
  "सप्तमी विभक्ति से अधिकरण या स्थान का बोध होता है।",
  "सम्बोधन विभक्ति का प्रयोग किसी को पुकारने के लिए होता है।",
];

const memoryTricks = [
  {
    title: "प्रथमा",
    trick: "कर्ता",
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "द्वितीया",
    trick: "कर्म",
    color: "bg-red-50 text-red-700",
  },
  {
    title: "तृतीया",
    trick: "से / द्वारा",
    color: "bg-green-50 text-green-700",
  },
  {
    title: "चतुर्थी",
    trick: "के लिए / को",
    color: "bg-yellow-50 text-yellow-700",
  },
  {
    title: "पञ्चमी",
    trick: "से अलग",
    color: "bg-orange-50 text-orange-700",
  },
  {
    title: "षष्ठी",
    trick: "का / के / की",
    color: "bg-purple-50 text-purple-700",
  },
  {
    title: "सप्तमी",
    trick: "में / पर",
    color: "bg-pink-50 text-pink-700",
  },
  {
    title: "सम्बोधन",
    trick: "हे!",
    color: "bg-indigo-50 text-indigo-700",
  },
];

export default function VibhaktiPage() {
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
              विभक्ति
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत की आठ विभक्तियों को सरल हिन्दी में समझें।
              कारक, प्रश्न, शब्द-रूप, उदाहरण और परीक्षा उपयोगी
              बिंदुओं के साथ अध्ययन करें।
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
                विभक्ति का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                संस्कृत व्याकरण में संज्ञा या सर्वनाम शब्दों के
                वाक्य में दूसरे शब्दों के साथ सम्बन्ध को व्यक्त
                करने के लिए विभक्ति का प्रयोग किया जाता है।
                विभक्ति के अनुसार शब्द का रूप बदलता है।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  विभक्ति → कारक / सम्बन्ध → प्रश्न → शब्द-रूप
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EIGHT VIBHAKTIS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              संस्कृत की आठ विभक्तियाँ
            </h2>

            <p className="text-gray-500 mt-1">
              Eight Vibhaktis of Sanskrit Grammar
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {vibhaktis.map((item, index) => (
            <article
              key={item.number}
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
                {item.number}
              </h3>

              <p className="mt-1 text-sm font-bold text-indigo-600">
                {item.case}
              </p>

              <div className="mt-3 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-black text-purple-700">
                {item.karaka}
              </div>

              <p className="mt-4 text-sm font-bold text-gray-700">
                प्रयोग: {item.use}
              </p>

              <div className="mt-4 rounded-2xl bg-gray-50 p-4">
                <p className="text-xs font-bold text-gray-500">
                  प्रश्न
                </p>

                <p className="mt-1 font-black text-indigo-700">
                  {item.question}
                </p>
              </div>

              <div className="mt-3 rounded-2xl bg-indigo-50 p-4">
                <p className="text-xs font-bold text-gray-500">
                  उदाहरण
                </p>

                <p className="mt-1 font-black text-gray-900">
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

      {/* RAMA SHABD ROOP */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                राम शब्द-रूप — विभक्ति अभ्यास
              </h2>

              <p className="text-gray-500 mt-1">
                राम शब्द के एकवचन, द्विवचन और बहुवचन रूप
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-5 md:p-7">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="text-left p-4 font-black">
                      विभक्ति
                    </th>

                    <th className="text-left p-4 font-black">
                      प्रश्न
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
                  </tr>
                </thead>

                <tbody>
                  {ramaForms.map((row) => (
                    <tr
                      key={row.vibhakti}
                      className="border-b border-gray-200 last:border-0"
                    >
                      <td className="p-4 font-black text-gray-900">
                        {row.vibhakti}
                      </td>

                      <td className="p-4 font-bold text-purple-700">
                        {row.question}
                      </td>

                      <td className="p-4 font-bold text-indigo-700">
                        {row.singular}
                      </td>

                      <td className="p-4 font-bold text-indigo-700">
                        {row.dual}
                      </td>

                      <td className="p-4 font-bold text-indigo-700">
                        {row.plural}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SENTENCE EXAMPLES */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Star className="text-purple-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              विभक्ति के वाक्य उदाहरण
            </h2>

            <p className="text-gray-500 mt-1">
              Sentence Examples with Easy Explanation
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {sentenceExamples.map((item, index) => (
            <article
              key={item.sentence}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <span className="inline-block text-xs font-black bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                    {item.title}
                  </span>

                  <p className="mt-3 text-xl font-black text-gray-900">
                    {item.sentence}
                  </p>

                  <p className="mt-2 font-semibold text-gray-600">
                    अर्थ: {item.meaning}
                  </p>

                  <div className="mt-4 rounded-2xl bg-indigo-50 p-4">
                    <p className="text-sm font-bold text-indigo-800">
                      क्यों?
                    </p>

                    <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MEMORY TRICK */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-yellow-500" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                विभक्ति याद रखने की आसान ट्रिक
              </h2>

              <p className="text-gray-500 mt-1">
                Quick Memory Guide
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {memoryTricks.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl p-5 ${item.color}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-black">
                    {item.title}
                  </p>

                  <span className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center font-black">
                    {index + 1}
                  </span>
                </div>

                <p className="mt-3 font-bold">
                  {item.trick}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT EXAM POINTS */}
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
                परीक्षा की तैयारी के लिए इन बिंदुओं को जरूर याद रखें।
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
                    विभक्ति
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    कारक
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    मुख्य अर्थ
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    उदाहरण
                  </th>
                </tr>
              </thead>

              <tbody>
                {vibhaktis.map((item) => (
                  <tr
                    key={item.number}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="p-4 font-black text-gray-900">
                      {item.number}
                    </td>

                    <td className="p-4 font-bold text-purple-700">
                      {item.karaka}
                    </td>

                    <td className="p-4 text-gray-600">
                      {item.use}
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

      {/* NAVIGATION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/learn/sanskrit/lakara"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              लकार
            </Link>

            <Link
              href="/learn/sanskrit/sandhi"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700"
            >
              सन्धि
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
            Sanskrit Vibhakti Complete
          </h2>

          <p className="mt-3 text-gray-400">
            विभक्ति, कारक और शब्द-रूप को उदाहरणों के साथ समझें।
          </p>
        </div>
      </section>
    </main>
  );
}

