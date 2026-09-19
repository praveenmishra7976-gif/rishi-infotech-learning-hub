
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Sparkles,
  Zap,
} from "lucide-react";

const verbTypes = [
  {
    title: "सकर्मक क्रिया",
    english: "Transitive Verb",
    description:
      "जिस क्रिया का फल या प्रभाव किसी कर्म पर पड़ता है, उसे सकर्मक क्रिया कहते हैं।",
    examples: "रामः पुस्तकं पठति। बालकः फलम् खादति।",
  },
  {
    title: "अकर्मक क्रिया",
    english: "Intransitive Verb",
    description:
      "जिस क्रिया को अपने अर्थ को पूरा करने के लिए किसी कर्म की आवश्यकता नहीं होती, उसे अकर्मक क्रिया कहते हैं।",
    examples: "बालकः हसति। रामः गच्छति।",
  },
  {
    title: "सहायक क्रिया",
    english: "Auxiliary Verb",
    description:
      "जो क्रिया मुख्य क्रिया के अर्थ को स्पष्ट करने या काल आदि का बोध कराने में सहायता करती है।",
    examples: "अहम् छात्रः अस्मि। सः पठितवान् अस्ति।",
  },
];

const persons = [
  {
    person: "प्रथम पुरुष",
    english: "Third Person",
    singular: "पठति",
    dual: "पठतः",
    plural: "पठन्ति",
  },
  {
    person: "मध्यम पुरुष",
    english: "Second Person",
    singular: "पठसि",
    dual: "पठथः",
    plural: "पठथ",
  },
  {
    person: "उत्तम पुरुष",
    english: "First Person",
    singular: "पठामि",
    dual: "पठावः",
    plural: "पठामः",
  },
];

const commonVerbs = [
  {
    verb: "पठ्",
    meaning: "पढ़ना",
    example: "रामः पुस्तकं पठति।",
  },
  {
    verb: "लिख्",
    meaning: "लिखना",
    example: "सीता पत्रं लिखति।",
  },
  {
    verb: "गम्",
    meaning: "जाना",
    example: "बालकः विद्यालयं गच्छति।",
  },
  {
    verb: "खाद्",
    meaning: "खाना",
    example: "बालकः फलम् खादति।",
  },
  {
    verb: "पिब्",
    meaning: "पीना",
    example: "रामः जलं पिबति।",
  },
  {
    verb: "क्रीड्",
    meaning: "खेलना",
    example: "बालकाः क्रीडन्ति।",
  },
  {
    verb: "हस्",
    meaning: "हँसना",
    example: "बालिका हसति।",
  },
  {
    verb: "धाव्",
    meaning: "दौड़ना",
    example: "अश्वः धावति।",
  },
];

const sentences = [
  {
    sanskrit: "रामः विद्यालयं गच्छति।",
    hindi: "राम विद्यालय जाता है।",
    verb: "गच्छति",
  },
  {
    sanskrit: "सीता पुस्तकं पठति।",
    hindi: "सीता पुस्तक पढ़ती है।",
    verb: "पठति",
  },
  {
    sanskrit: "बालकः फलम् खादति।",
    hindi: "बालक फल खाता है।",
    verb: "खादति",
  },
  {
    sanskrit: "बालिका जलं पिबति।",
    hindi: "बालिका पानी पीती है।",
    verb: "पिबति",
  },
  {
    sanskrit: "छात्राः संस्कृतं लिखन्ति।",
    hindi: "छात्र संस्कृत लिखते हैं।",
    verb: "लिखन्ति",
  },
  {
    sanskrit: "बालकाः उद्याने क्रीडन्ति।",
    hindi: "बच्चे बगीचे में खेलते हैं।",
    verb: "क्रीडन्ति",
  },
];

const importantPoints = [
  "क्रिया से किसी कार्य के करने, होने या अवस्था का बोध होता है।",
  "संस्कृत में क्रिया का रूप पुरुष और वचन के अनुसार बदलता है।",
  "प्रथम पुरुष में पठति, पठतः और पठन्ति जैसे रूप आते हैं।",
  "मध्यम पुरुष में पठसि, पठथः और पठथ जैसे रूप आते हैं।",
  "उत्तम पुरुष में पठामि, पठावः और पठामः जैसे रूप आते हैं।",
  "सकर्मक क्रिया के साथ सामान्यतः कर्म का प्रयोग होता है।",
  "अकर्मक क्रिया को अपने अर्थ के लिए कर्म की आवश्यकता नहीं होती।",
  "क्रिया के सही रूप के लिए धातु, पुरुष और वचन को पहचानना आवश्यक है।",
];

export default function KriyaPage() {
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
              क्रिया (Verb)
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत में क्रिया, उसके प्रकार, पुरुष, वचन और प्रयोग को
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
              <Zap className="text-indigo-600" size={30} />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                क्रिया का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                जिस शब्द से किसी कार्य के करने, होने या किसी अवस्था का
                बोध होता है, उसे क्रिया कहते हैं। जैसे पठति अर्थात पढ़ता
                है, गच्छति अर्थात जाता है और खादति अर्थात खाता है।
                संस्कृत व्याकरण में क्रिया का रूप पुरुष, वचन, काल और
                धातु के अनुसार बदलता है।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="font-black text-indigo-800">
                  आसान सूत्र
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  कार्य → क्रिया → पुरुष + वचन → क्रिया-रूप
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-sm font-bold text-white/70">
                संस्कृत
              </p>
              <p className="mt-2 text-2xl font-black">
                क्रिया
              </p>
              <p className="mt-2 text-white/85">
                कार्य का बोध कराने वाला शब्द
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-sm font-bold text-white/70">
                उदाहरण
              </p>
              <p className="mt-2 text-2xl font-black">
                पठति
              </p>
              <p className="mt-2 text-white/85">
                पढ़ता / पढ़ती है
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-sm font-bold text-white/70">
                पहचान
              </p>
              <p className="mt-2 text-2xl font-black">
                क्या करता है?
              </p>
              <p className="mt-2 text-white/85">
                प्रश्न पूछकर क्रिया पहचानें।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                क्रिया के प्रमुख प्रकार
              </h2>

              <p className="text-gray-500 mt-1">
                Major Types of Verbs
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {verbTypes.map((type, index) => (
              <article
                key={type.title}
                className="bg-gray-50 rounded-3xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center font-black text-purple-700">
                    {index + 1}
                  </div>

                  <span className="text-xs font-black bg-white text-gray-600 px-3 py-1.5 rounded-full border border-gray-100">
                    {type.english}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {type.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {type.description}
                </p>

                <div className="mt-5 rounded-2xl bg-white border border-gray-100 p-4">
                  <p className="text-sm font-bold text-gray-500">
                    उदाहरण
                  </p>

                  <p className="mt-2 font-black text-purple-700 leading-relaxed">
                    {type.examples}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERSON & NUMBER */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              पुरुष और वचन के अनुसार क्रिया
            </h2>

            <p className="text-gray-500 mt-1">
              Verb Forms by Person and Number
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="text-left p-4 font-black text-indigo-800">
                    पुरुष
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    English
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
                {persons.map((item) => (
                  <tr
                    key={item.person}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="p-4 font-black text-gray-900">
                      {item.person}
                    </td>

                    <td className="p-4 text-gray-500 font-semibold">
                      {item.english}
                    </td>

                    <td className="p-4 font-black text-indigo-700">
                      {item.singular}
                    </td>

                    <td className="p-4 font-black text-indigo-700">
                      {item.dual}
                    </td>

                    <td className="p-4 font-black text-indigo-700">
                      {item.plural}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <div className="rounded-3xl bg-indigo-50 border border-indigo-100 p-6">
            <p className="font-black text-indigo-800">
              एकवचन
            </p>

            <p className="mt-2 text-gray-700">
              एक व्यक्ति या वस्तु के लिए।
            </p>

            <p className="mt-3 text-xl font-black text-indigo-700">
              पठति
            </p>
          </div>

          <div className="rounded-3xl bg-purple-50 border border-purple-100 p-6">
            <p className="font-black text-purple-800">
              द्विवचन
            </p>

            <p className="mt-2 text-gray-700">
              दो व्यक्तियों या वस्तुओं के लिए।
            </p>

            <p className="mt-3 text-xl font-black text-purple-700">
              पठतः
            </p>
          </div>

          <div className="rounded-3xl bg-fuchsia-50 border border-fuchsia-100 p-6">
            <p className="font-black text-fuchsia-800">
              बहुवचन
            </p>

            <p className="mt-2 text-gray-700">
              दो से अधिक व्यक्तियों या वस्तुओं के लिए।
            </p>

            <p className="mt-3 text-xl font-black text-fuchsia-700">
              पठन्ति
            </p>
          </div>
        </div>
      </section>

      {/* COMMON DHATUS */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="text-fuchsia-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                सामान्य संस्कृत क्रियाएँ
              </h2>

              <p className="text-gray-500 mt-1">
                Common Sanskrit Verbs
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commonVerbs.map((item) => (
              <article
                key={item.verb}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-6 hover:shadow-lg transition"
              >
                <div className="text-3xl font-black text-fuchsia-600">
                  {item.verb}
                </div>

                <p className="mt-2 font-bold text-gray-900">
                  {item.meaning}
                </p>

                <div className="mt-4 rounded-2xl bg-white border border-gray-100 p-4">
                  <p className="text-sm text-gray-500 font-bold">
                    वाक्य
                  </p>

                  <p className="mt-1 text-gray-700 font-semibold leading-relaxed">
                    {item.example}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SENTENCE EXAMPLES */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              वाक्यों में क्रिया
            </h2>

            <p className="text-gray-500 mt-1">
              Verbs in Sanskrit Sentences
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {sentences.map((sentence, index) => (
            <article
              key={sentence.sanskrit}
              className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div className="min-w-0">
                  <p className="text-xl font-black text-gray-900">
                    {sentence.sanskrit}
                  </p>

                  <p className="mt-2 text-gray-600">
                    {sentence.hindi}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2">
                    <span className="text-sm font-bold text-gray-500">
                      क्रिया:
                    </span>

                    <span className="font-black text-indigo-700">
                      {sentence.verb}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* QUICK RULE */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 md:p-12">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                क्रिया पहचानने की आसान विधि
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed">
                किसी भी संस्कृत वाक्य को पढ़ते समय यह देखें कि कर्ता
                क्या कर रहा है या क्या हो रहा है। जो शब्द उस कार्य या
                अवस्था को बताता है, वही क्रिया है।
              </p>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="text-sm text-white/70 font-bold">
                    Step 1
                  </p>

                  <p className="mt-2 font-black">
                    कर्ता पहचानें
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="text-sm text-white/70 font-bold">
                    Step 2
                  </p>

                  <p className="mt-2 font-black">
                    कार्य पूछें
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="text-sm text-white/70 font-bold">
                    Step 3
                  </p>

                  <p className="mt-2 font-black">
                    क्रिया पहचानें
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT POINTS */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-amber-50 flex items-center justify-center">
              <Lightbulb className="text-amber-600" size={30} />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Exam Points
              </h2>

              <p className="mt-3 text-gray-600">
                परीक्षा की तैयारी के लिए इन बातों को विशेष रूप से याद रखें।
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                {importantPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 bg-gray-50 rounded-2xl p-4 border border-gray-100"
                  >
                    <CheckCircle
                      size={22}
                      className="text-indigo-600 shrink-0 mt-1"
                    />

                    <p className="text-gray-700 leading-relaxed">
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
              href="/learn/sanskrit/sarvanam"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
              सर्वनाम (Pronoun)
            </Link>

            <Link
              href="/learn/sanskrit/lakara"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
            >
              लकार (Tense & Mood)
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
            Sanskrit Verb Study Complete
          </h2>

          <p className="mt-3 text-gray-400">
            Learn Sanskrit verbs, dhatus, person, number and sentence usage.
          </p>
        </div>
      </section>
    </main>
  );
}

