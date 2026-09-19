"use client";

import { BookOpen } from "lucide-react";

const topics = [
  {
    title: "संधि",
    description: "स्वर, व्यंजन तथा विसर्ग संधि का अध्ययन।",
  },
  {
    title: "समास",
    description: "अव्ययीभाव, तत्पुरुष, कर्मधारय, द्विगु, बहुव्रीहि।",
  },
  {
    title: "शब्द रूप",
    description: "राम, बालक, फल, नदी, गुरु आदि।",
  },
  {
    title: "धातु रूप",
    description: "गम्, पठ्, लिख्, खाद्, पिब् आदि धातुएँ।",
  },
  {
    title: "कारक",
    description: "कर्ता, कर्म, करण, सम्प्रदान, अपादान, अधिकरण।",
  },
  {
    title: "विभक्ति",
    description: "प्रथमा से सप्तमी विभक्ति तक।",
  },
  {
    title: "वचन",
    description: "एकवचन, द्विवचन तथा बहुवचन।",
  },
  {
    title: "लकार",
    description: "लट्, लङ्, लृट्, लोट्, विधिलिङ् आदि।",
  },
  {
    title: "उपसर्ग",
    description: "प्र, परा, सम्, अनु, वि, प्रति आदि।",
  },
  {
    title: "अनुवाद",
    description: "हिन्दी से संस्कृत तथा संस्कृत से हिन्दी।",
  },
  {
    title: "व्याकरण",
    description: "महत्वपूर्ण नियम एवं उदाहरण।",
  },
  {
    title: "अभ्यास प्रश्न",
    description: "परीक्षा हेतु महत्वपूर्ण प्रश्न।",
  },
];

export default function SanskritReferencePage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-orange-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <BookOpen size={50} />

            <div>

              <h1 className="text-5xl font-black">
                Sanskrit Grammar Reference
              </h1>

              <p className="mt-3 text-orange-100 text-lg">
                संस्कृत व्याकरण के महत्वपूर्ण विषय
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {topics.map((topic) => (

            <div
              key={topic.title}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white">

                <BookOpen size={30} />

              </div>

              <h2 className="text-2xl font-bold mt-6">

                {topic.title}

              </h2>

              <p className="mt-4 text-gray-600 leading-7">

                {topic.description}

              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}