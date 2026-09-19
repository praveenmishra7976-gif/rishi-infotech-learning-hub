"use client";

import Link from "next/link";
import ChapterNavigation from "../components/ChapterNavigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Calculator,
  Sparkles,
  Trophy,
} from "lucide-react";

const concepts = [
  {
    title: "Ratio",
    description:
      "A ratio compares two quantities of the same kind. It shows how much one quantity is compared with another.",
    example: "Example: 2 : 3 means 2 parts compared with 3 parts.",
  },
  {
    title: "Proportion",
    description:
      "A proportion states that two ratios are equal.",
    example: "Example: 2 : 3 = 4 : 6.",
  },
  {
    title: "Equivalent Ratios",
    description:
      "Equivalent ratios have the same value even when their numbers are different.",
    example: "2 : 3 = 4 : 6 = 6 : 9.",
  },
  {
    title: "Direct Proportion",
    description:
      "When one quantity increases, the other quantity also increases in the same relationship.",
    example: "More items usually require more total cost at a fixed price per item.",
  },
];

const keyPoints = [
  "Ratio is written using the symbol :",
  "Both quantities in a ratio should normally have the same units.",
  "Ratios can be simplified by dividing both terms by their common factor.",
  "A proportion compares two equal ratios.",
  "Cross multiplication can be used to solve proportions.",
  "Equivalent ratios represent the same relationship.",
];

const examples = [
  {
    question: "Simplify 12 : 18",
    solution: "Divide both terms by 6 → 12 : 18 = 2 : 3",
  },
  {
    question: "Find x: 3 : 5 = x : 20",
    solution: "3 × 20 = 5x → 60 = 5x → x = 12",
  },
  {
    question: "If 4 pens cost ₹40, what is the cost of 7 pens?",
    solution: "1 pen = ₹10 → 7 pens = ₹70",
  },
];

const questions = [
  {
    question: "What does the ratio 2 : 5 compare?",
    options: [
      "Two quantities",
      "Only one quantity",
      "Three quantities",
      "No quantities",
    ],
    answer: "Two quantities",
  },
  {
    question: "What is the simplest form of 15 : 25?",
    options: ["2 : 5", "3 : 5", "5 : 3", "3 : 7"],
    answer: "3 : 5",
  },
  {
    question: "If 2 : 3 = 8 : x, what is x?",
    options: ["10", "12", "14", "16"],
    answer: "12",
  },
  {
    question: "Which method is commonly used to solve a proportion?",
    options: [
      "Cross multiplication",
      "Only addition",
      "Only subtraction",
      "Only division",
    ],
    answer: "Cross multiplication",
  },
];

export default function RatioAndProportionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
          <Link
            href="/learn/mathematics"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Mathematics
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Mathematics Chapter
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Ratio & Proportion
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn ratios, proportions, equivalent ratios and practical
              applications with simple explanations and examples.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-7 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-purple-600" size={28} />

            <p className="mt-2 text-2xl font-black text-gray-900">
              4
            </p>

            <p className="text-gray-500">
              Main Concepts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-indigo-600" size={28} />

            <p className="mt-2 text-2xl font-black text-gray-900">
              {examples.length}
            </p>

            <p className="text-gray-500">
              Solved Examples
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <span className="text-3xl">⚖️</span>

            <p className="mt-2 text-2xl font-black text-gray-900">
              Easy
            </p>

            <p className="text-gray-500">
              Difficulty
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />

            <p className="mt-2 text-2xl font-black text-gray-900">
              4
            </p>

            <p className="text-gray-500">
              Practice MCQs
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">
            <div className="flex items-center gap-3">
              <BookOpen className="text-purple-600" size={30} />

              <h2 className="text-3xl font-black text-gray-900">
                What is Ratio & Proportion?
              </h2>
            </div>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Ratio is a mathematical way of comparing two quantities.
              Proportion tells us that two ratios are equal. These concepts
              are widely used in mathematics and everyday situations such
              as prices, quantities, distances, recipes and measurements.
            </p>

            <div className="mt-7 rounded-2xl bg-purple-50 border border-purple-100 p-6">
              <p className="text-sm font-bold text-purple-700 uppercase tracking-wide">
                Basic Relationship
              </p>

              <p className="mt-3 text-2xl md:text-3xl font-black text-purple-800">
                a : b = c : d
              </p>

              <p className="mt-3 text-gray-600">
                In a proportion, the product of the extremes equals the
                product of the means:
              </p>

              <p className="mt-3 text-xl font-black text-gray-900">
                a × d = b × c
              </p>
            </div>
          </div>

          <aside className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-7">
            <Lightbulb size={32} />

            <h2 className="mt-5 text-2xl font-black">
              Study Tip
            </h2>

            <p className="mt-3 text-white/90 leading-relaxed">
              Always simplify a ratio before comparing it with another
              ratio. When solving proportions, cross multiplication is
              usually the easiest method.
            </p>
          </aside>
        </div>
      </section>

      {/* CONCEPTS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Concepts
              </h2>

              <p className="text-gray-500 mt-1">
                Understand the basic ideas step by step.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {concepts.map((concept, index) => (
              <article
                key={concept.title}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-7 hover:bg-purple-50 hover:border-purple-200 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-black text-gray-900">
                    {concept.title}
                  </h3>
                </div>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  {concept.description}
                </p>

                <div className="mt-4 rounded-xl bg-white border border-gray-100 p-4">
                  <p className="text-purple-700 font-semibold">
                    {concept.example}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEY POINTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">
          <h2 className="text-3xl font-black text-gray-900">
            Key Points to Remember
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-7">
            {keyPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4"
              >
                <CheckCircle2
                  className="text-green-600 shrink-0 mt-0.5"
                  size={21}
                />

                <p className="text-gray-700 font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLVED EXAMPLES */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="text-indigo-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Solved Examples
              </h2>

              <p className="text-gray-500 mt-1">
                Learn how to solve common ratio and proportion problems.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <article
                key={example.question}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-lg font-black text-gray-900">
                  {example.question}
                </h3>

                <div className="mt-5 rounded-2xl bg-white border border-indigo-100 p-5">
                  <p className="text-gray-700 leading-relaxed">
                    {example.solution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MCQ */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="text-yellow-500" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Practice MCQs
            </h2>

            <p className="text-gray-500 mt-1">
              Test your understanding of Ratio & Proportion.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {questions.map((item, index) => (
            <article
              key={item.question}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="font-black text-gray-900">
                    {item.question}
                  </h3>

                  <div className="mt-5 grid gap-2">
                    {item.options.map((option) => (
                      <div
                        key={option}
                        className={`rounded-xl border px-4 py-3 ${
                          option === item.answer
                            ? "border-green-200 bg-green-50 text-green-700 font-bold"
                            : "border-gray-100 bg-gray-50 text-gray-600"
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-green-700 font-bold">
                    Answer: {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="ratio-and-proportion" />


      {/* FOOTER */}

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <Sparkles
            className="mx-auto text-cyan-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Mathematics
          </h2>

          <p className="mt-3 text-gray-400">
            Continue to the next Mathematics chapter.
          </p>
        </div>
      </section>
    </main>
  );
}
