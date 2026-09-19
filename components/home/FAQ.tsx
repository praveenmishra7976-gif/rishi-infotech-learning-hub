"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Rishi Infotech Learning Hub free?",
    answer:
      "Yes. Most study notes, quizzes and learning resources are free. Premium content is also available.",
  },
  {
    question: "Can I download PDF notes?",
    answer:
      "Yes. You can download free and premium PDF notes directly from the Notes section.",
  },
  {
    question: "Do I get AI learning tools?",
    answer:
      "Yes. Our AI Hub provides AI Chat, AI Writing, AI Coding, AI Image and many more tools.",
  },
  {
    question: "Can I practice MCQs and Mock Tests?",
    answer:
      "Absolutely. We provide chapter-wise MCQs, Daily Quiz, Mock Tests and Previous Year Papers.",
  },
  {
    question: "Is the website mobile friendly?",
    answer:
      "Yes. The website is fully responsive and works perfectly on mobile, tablet and desktop devices.",
  },
  {
    question: "Do I need an account?",
    answer:
      "Creating an account is recommended so you can save progress, bookmarks and quiz scores.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-bold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Find answers to common questions about Rishi Infotech Learning Hub.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq) => (

            <details
              key={faq.question}
              className="group bg-white rounded-2xl shadow-md p-6"
            >

              <summary className="flex justify-between items-center cursor-pointer list-none">

                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown className="group-open:rotate-180 transition-transform" />

              </summary>

              <p className="mt-5 text-gray-600 leading-8">
                {faq.answer}
              </p>

            </details>

          ))}

        </div>

      </div>
    </section>
  );
}