"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Feather,
  Library,
  Lightbulb,
  Sparkles,
  Star,
} from "lucide-react";

const literatureSections = [
  {
    title: "Vedic Literature",
    description:
      "वेद, ब्राह्मण, आरण्यक और उपनिषदों जैसी प्राचीन संस्कृत साहित्यिक परंपराओं का परिचय।",
    icon: "📜",
  },
  {
    title: "Ramayana",
    description:
      "महर्षि वाल्मीकि द्वारा रचित रामायण और इसके प्रमुख पात्रों तथा शिक्षाओं का अध्ययन।",
    icon: "🏹",
  },
  {
    title: "Mahabharata",
    description:
      "महर्षि वेदव्यास से संबंधित महाभारत, उसके प्रमुख पात्र और महत्वपूर्ण प्रसंग।",
    icon: "⚔️",
  },
  {
    title: "Puranas",
    description:
      "प्रमुख पुराणों, उनके विषयों और भारतीय संस्कृति में उनके महत्व को समझें।",
    icon: "🛕",
  },
  {
    title: "Sanskrit Poetry",
    description:
      "कालिदास और अन्य महान कवियों की काव्य परंपरा तथा प्रसिद्ध रचनाओं का परिचय।",
    icon: "✍️",
  },
  {
    title: "Sanskrit Drama",
    description:
      "संस्कृत नाट्य साहित्य और प्रमुख नाटककारों तथा प्रसिद्ध नाटकों का अध्ययन।",
    icon: "🎭",
  },
];

const famousWorks = [
  {
    work: "रामायण",
    author: "महर्षि वाल्मीकि",
    type: "महाकाव्य",
    description:
      "श्रीराम के जीवन, आदर्शों, कर्तव्य और धर्म का वर्णन करने वाला प्रसिद्ध संस्कृत महाकाव्य।",
  },
  {
    work: "महाभारत",
    author: "महर्षि वेदव्यास",
    type: "महाकाव्य",
    description:
      "कुरु वंश, पाण्डवों और कौरवों तथा धर्म-अधर्म के संघर्ष का विस्तृत वर्णन।",
  },
  {
    work: "अभिज्ञानशाकुन्तलम्",
    author: "कालिदास",
    type: "नाटक",
    description:
      "राजा दुष्यन्त और शकुन्तला की कथा पर आधारित प्रसिद्ध संस्कृत नाटक।",
  },
  {
    work: "मेघदूतम्",
    author: "कालिदास",
    type: "काव्य",
    description:
      "विरही यक्ष द्वारा मेघ के माध्यम से संदेश भेजने की सुंदर काव्यात्मक रचना।",
  },
  {
    work: "रघुवंशम्",
    author: "कालिदास",
    type: "महाकाव्य",
    description:
      "रघु वंश के महान राजाओं का वर्णन करने वाला प्रसिद्ध संस्कृत महाकाव्य।",
  },
  {
    work: "कुमारसम्भवम्",
    author: "कालिदास",
    type: "महाकाव्य",
    description:
      "भगवान शिव और पार्वती से संबंधित कथा तथा कुमार कार्तिकेय के जन्म का काव्यात्मक वर्णन।",
  },
  {
    work: "मुद्राराक्षसम्",
    author: "विशाखदत्त",
    type: "नाटक",
    description:
      "चाणक्य, चन्द्रगुप्त और राक्षस से संबंधित राजनीतिक घटनाओं पर आधारित संस्कृत नाटक।",
  },
  {
    work: "हितोपदेशः",
    author: "नारायण पण्डित",
    type: "नीति साहित्य",
    description:
      "कहानियों और नीति-वचनों के माध्यम से जीवन की व्यावहारिक शिक्षा देने वाली रचना।",
  },
];

const authors = [
  {
    name: "कालिदास",
    work: "अभिज्ञानशाकुन्तलम्, मेघदूतम्, रघुवंशम्",
    icon: "🌟",
  },
  {
    name: "वाल्मीकि",
    work: "रामायण",
    icon: "📜",
  },
  {
    name: "वेदव्यास",
    work: "महाभारत",
    icon: "📚",
  },
  {
    name: "भास",
    work: "स्वप्नवासवदत्तम् और अन्य नाटक",
    icon: "🎭",
  },
  {
    name: "विशाखदत्त",
    work: "मुद्राराक्षसम्",
    icon: "✒️",
  },
  {
    name: "बाणभट्ट",
    work: "हर्षचरितम्, कादम्बरी",
    icon: "🖋️",
  },
];

const examPoints = [
  "प्रमुख संस्कृत कवियों और उनकी रचनाओं को याद करें।",
  "रामायण और महाभारत के रचयिता तथा प्रमुख विशेषताएँ जानें।",
  "कालिदास की प्रमुख रचनाओं का अध्ययन करें।",
  "संस्कृत नाटक और महाकाव्य में अंतर समझें।",
  "प्रमुख साहित्यिक रचनाओं के लेखक और विधा याद रखें।",
  "रचनाओं की मुख्य विषय-वस्तु और विशेषताओं को समझें।",
];

export default function SanskritLiteraturePage() {
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
              Sanskrit Literature
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              संस्कृत साहित्य के प्रमुख ग्रंथों, कवियों, नाटककारों,
              महाकाव्यों और प्रसिद्ध रचनाओं का सरल अध्ययन करें।
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Library
                className="text-indigo-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                संस्कृत साहित्य का परिचय
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                संस्कृत साहित्य भारतीय ज्ञान, दर्शन, संस्कृति और
                कला की एक महत्वपूर्ण परंपरा है। इसमें वेद,
                उपनिषद, महाकाव्य, पुराण, काव्य, नाटक और नीति
                साहित्य जैसी अनेक विधाएँ शामिल हैं।
              </p>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">

                <p className="font-black text-indigo-800">
                  Literature Study Formula
                </p>

                <p className="mt-2 text-gray-700 font-semibold">
                  लेखक → रचना → साहित्यिक विधा → मुख्य विषय → विशेषता
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* LITERATURE SECTIONS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-indigo-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Major Areas of Sanskrit Literature
            </h2>

            <p className="text-gray-500 mt-1">
              संस्कृत साहित्य की प्रमुख विधाएँ और परंपराएँ।
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {literatureSections.map((section, index) => (

            <article
              key={section.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="flex items-start justify-between">

                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl">
                  {section.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {index + 1}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {section.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {section.description}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* FAMOUS WORKS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Feather
              className="text-indigo-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Famous Sanskrit Works
              </h2>

              <p className="text-gray-500 mt-1">
                महत्वपूर्ण रचनाएँ, लेखक और साहित्यिक विधाएँ।
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {famousWorks.map((item, index) => (

              <article
                key={item.work}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6 hover:bg-indigo-50 hover:border-indigo-200 transition"
              >

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="text-xl font-black text-gray-900">
                        {item.work}
                      </h3>

                      <span className="text-xs font-black bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                        {item.type}
                      </span>

                    </div>

                    <p className="mt-3 font-bold text-indigo-700">
                      लेखक: {item.author}
                    </p>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* AUTHORS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Star
            className="text-purple-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Famous Sanskrit Authors
            </h2>

            <p className="text-gray-500 mt-1">
              प्रमुख कवियों और लेखकों की महत्वपूर्ण रचनाएँ।
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {authors.map((author) => (

            <div
              key={author.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl">
                  {author.icon}
                </div>

                <div>

                  <h3 className="font-black text-gray-900 text-lg">
                    {author.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {author.work}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* IMPORTANT EXAM POINTS */}

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
                परीक्षा की तैयारी के लिए इन बिंदुओं पर विशेष ध्यान दें।
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">

                {examPoints.map((point, index) => (

                  <div
                    key={point}
                    className="flex items-start gap-3 bg-white/10 rounded-2xl p-4"
                  >

                    <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-black">
                      {index + 1}
                    </span>

                    <p className="text-white/95 leading-relaxed">
                      {point}
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

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="flex items-center gap-3">

            <BookOpen
              className="text-indigo-600"
              size={30}
            />

            <h2 className="text-3xl font-black text-gray-900">
              Quick Revision
            </h2>

          </div>

          <div className="mt-7 overflow-x-auto">

            <table className="w-full min-w-[650px] border-collapse">

              <thead>

                <tr className="bg-indigo-50">

                  <th className="text-left p-4 font-black text-indigo-800">
                    लेखक
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    प्रमुख रचना
                  </th>

                  <th className="text-left p-4 font-black text-indigo-800">
                    विधा
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">वाल्मीकि</td>
                  <td className="p-4">रामायण</td>
                  <td className="p-4 text-gray-500">महाकाव्य</td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">वेदव्यास</td>
                  <td className="p-4">महाभारत</td>
                  <td className="p-4 text-gray-500">महाकाव्य</td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">कालिदास</td>
                  <td className="p-4">मेघदूतम्</td>
                  <td className="p-4 text-gray-500">काव्य</td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">कालिदास</td>
                  <td className="p-4">अभिज्ञानशाकुन्तलम्</td>
                  <td className="p-4 text-gray-500">नाटक</td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold">विशाखदत्त</td>
                  <td className="p-4">मुद्राराक्षसम्</td>
                  <td className="p-4 text-gray-500">नाटक</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold">बाणभट्ट</td>
                  <td className="p-4">कादम्बरी</td>
                  <td className="p-4 text-gray-500">गद्य साहित्य</td>
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
              href="/learn/sanskrit/subhashitani"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Subhashitani
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
            Sanskrit Learning Complete
          </h2>

          <p className="mt-3 text-gray-400">
            You have completed all major Sanskrit chapters.
          </p>

        </div>

      </section>

    </main>
  );
}
