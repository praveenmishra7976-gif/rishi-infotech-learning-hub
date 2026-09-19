"use client";

import { BookOpen, CheckCircle } from "lucide-react";

const questions = [
  {
    question: "संस्कृत भाषा को क्या कहा जाता है?",
    options: [
      "देववाणी",
      "राजभाषा",
      "राष्ट्रभाषा",
      "लोकभाषा",
    ],
    answer: "देववाणी",
  },
  {
    question: "संधि कितने प्रकार की होती है?",
    options: [
      "2",
      "3",
      "4",
      "5",
    ],
    answer: "3",
  },
  {
    question: "समास का अर्थ क्या है?",
    options: [
      "शब्दों का मेल",
      "वाक्य",
      "अलंकार",
      "क्रिया",
    ],
    answer: "शब्दों का मेल",
  },
  {
    question: "रामः शब्द किस लिंग का है?",
    options: [
      "पुल्लिंग",
      "स्त्रीलिंग",
      "नपुंसकलिंग",
      "कोई नहीं",
    ],
    answer: "पुल्लिंग",
  },
  {
    question: "बालिका शब्द किस लिंग का है?",
    options: [
      "पुल्लिंग",
      "स्त्रीलिंग",
      "नपुंसकलिंग",
      "इनमें से कोई नहीं",
    ],
    answer: "स्त्रीलिंग",
  },
  {
    question: "अहम् का अर्थ क्या है?",
    options: [
      "मैं",
      "तुम",
      "वह",
      "हम",
    ],
    answer: "मैं",
  },
  {
    question: "भवतः का अर्थ क्या है?",
    options: [
      "आपका",
      "मेरा",
      "उसका",
      "हमारा",
    ],
    answer: "आपका",
  },
  {
    question: "गच्छति का अर्थ क्या है?",
    options: [
      "जाता है",
      "खाता है",
      "सोता है",
      "पढ़ता है",
    ],
    answer: "जाता है",
  },
  {
    question: "विद्या शब्द का अर्थ क्या है?",
    options: [
      "ज्ञान",
      "जल",
      "फल",
      "पुस्तक",
    ],
    answer: "ज्ञान",
  },
  {
    question: "धातु रूप किससे संबंधित है?",
    options: [
      "क्रिया",
      "संज्ञा",
      "सर्वनाम",
      "विशेषण",
    ],
    answer: "क्रिया",
  },
];

export default function SanskritMCQPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero Section */}

      <section className="bg-orange-700 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <BookOpen size={48} />

            <div>

              <h1 className="text-5xl font-black">
                Sanskrit MCQ Practice
              </h1>

              <p className="mt-3 text-orange-100 text-lg">
                संस्कृत व्याकरण एवं भाषा के महत्वपूर्ण प्रश्न
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Questions */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="space-y-8">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-2xl font-bold mb-6">

                प्रश्न {index + 1}. {q.question}

              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                {q.options.map((option, i) => (

                  <button
                    key={i}
                    className="border rounded-xl p-4 hover:bg-orange-50 transition text-left"
                  >
                    {option}
                  </button>

                ))}

              </div>

              <div className="mt-6 flex items-center gap-3 text-green-600 font-semibold">

                <CheckCircle size={22} />

                सही उत्तर : {q.answer}

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}