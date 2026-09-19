"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is Rishi Infotech Learning Hub free?",
    answer:
      "Yes. Most notes, quizzes and learning materials are free. Premium content will also be available.",
  },
  {
    question: "Can I download PDF notes?",
    answer:
      "Yes. PDF notes are available for many subjects and more are added regularly.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes. Certificates will be available after completing selected courses and quizzes.",
  },
  {
    question: "Can I use AI tools for free?",
    answer:
      "Basic AI tools are free. Advanced AI tools may require a premium membership.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-bold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-5xl font-black mt-3">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-3xl border shadow-sm overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 text-left font-bold text-lg hover:bg-slate-50"
              >

                {faq.question}

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (
                <div className="px-8 pb-8 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}