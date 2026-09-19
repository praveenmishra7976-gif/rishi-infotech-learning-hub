"use client";

import Link from "next/link";
import ChapterNavigation from "../components/ChapterNavigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const concepts = [
  {
    title: "Cost Price (CP)",
    description:
      "The price at which an article is purchased is called its Cost Price.",
    example: "If a shopkeeper buys a bag for ₹500, CP = ₹500.",
  },
  {
    title: "Selling Price (SP)",
    description:
      "The price at which an article is sold is called its Selling Price.",
    example: "If the bag is sold for ₹600, SP = ₹600.",
  },
  {
    title: "Profit",
    description:
      "When the Selling Price is greater than the Cost Price, the seller earns a profit.",
    example: "CP = ₹500, SP = ₹600 → Profit = ₹100.",
  },
  {
    title: "Loss",
    description:
      "When the Selling Price is less than the Cost Price, the seller suffers a loss.",
    example: "CP = ₹500, SP = ₹450 → Loss = ₹50.",
  },
  {
    title: "Discount",
    description:
      "Discount is the reduction given on the marked price of an article.",
    example: "Marked Price = ₹1,000, Discount = ₹100 → SP = ₹900.",
  },
  {
    title: "Marked Price",
    description:
      "The price written or displayed on an article before giving a discount is called Marked Price.",
    example: "If a shirt is marked ₹1,500, MP = ₹1,500.",
  },
];

const formulas = [
  {
    title: "Profit",
    formula: "Profit = SP − CP",
  },
  {
    title: "Loss",
    formula: "Loss = CP − SP",
  },
  {
    title: "Profit Percentage",
    formula: "Profit % = (Profit / CP) × 100",
  },
  {
    title: "Loss Percentage",
    formula: "Loss % = (Loss / CP) × 100",
  },
  {
    title: "Selling Price with Profit",
    formula: "SP = CP × (100 + Profit%) / 100",
  },
  {
    title: "Selling Price with Loss",
    formula: "SP = CP × (100 − Loss%) / 100",
  },
  {
    title: "Discount",
    formula: "Discount = MP − SP",
  },
  {
    title: "Discount Percentage",
    formula: "Discount % = (Discount / MP) × 100",
  },
];

const examples = [
  {
    question: "A product is bought for ₹500 and sold for ₹600. Find the profit.",
    steps: [
      "CP = ₹500",
      "SP = ₹600",
      "Profit = SP − CP",
      "Profit = ₹600 − ₹500 = ₹100",
    ],
    answer: "Profit = ₹100",
  },
  {
    question: "An article costs ₹800 and is sold for ₹720. Find the loss.",
    steps: [
      "CP = ₹800",
      "SP = ₹720",
      "Loss = CP − SP",
      "Loss = ₹800 − ₹720 = ₹80",
    ],
    answer: "Loss = ₹80",
  },
  {
    question: "A product costs ₹1,000 and is sold for ₹1,200. Find the profit percentage.",
    steps: [
      "CP = ₹1,000",
      "SP = ₹1,200",
      "Profit = ₹1,200 − ₹1,000 = ₹200",
      "Profit % = (₹200 / ₹1,000) × 100",
    ],
    answer: "Profit = 20%",
  },
  {
    question: "An article marked ₹2,000 is sold for ₹1,800. Find the discount percentage.",
    steps: [
      "MP = ₹2,000",
      "SP = ₹1,800",
      "Discount = ₹2,000 − ₹1,800 = ₹200",
      "Discount % = (₹200 / ₹2,000) × 100",
    ],
    answer: "Discount = 10%",
  },
];

const questions = [
  {
    question: "What does CP stand for?",
    options: [
      "Cost Price",
      "Current Price",
      "Calculated Price",
      "Customer Price",
    ],
    answer: "Cost Price",
  },
  {
    question: "What does SP stand for?",
    options: [
      "Special Price",
      "Selling Price",
      "Standard Price",
      "Sale Percentage",
    ],
    answer: "Selling Price",
  },
  {
    question: "If SP is greater than CP, there is a:",
    options: ["Loss", "Profit", "Discount", "Tax"],
    answer: "Profit",
  },
  {
    question: "If CP = ₹500 and SP = ₹450, the loss is:",
    options: ["₹25", "₹50", "₹75", "₹100"],
    answer: "₹50",
  },
  {
    question: "Profit percentage is calculated on:",
    options: [
      "Selling Price",
      "Marked Price",
      "Cost Price",
      "Discount",
    ],
    answer: "Cost Price",
  },
  {
    question: "If CP = ₹1,000 and SP = ₹1,100, profit percentage is:",
    options: ["5%", "10%", "15%", "20%"],
    answer: "10%",
  },
];

export default function ProfitLossPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/learn/mathematics"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Mathematics
          </Link>

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Profit & Loss
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn Cost Price, Selling Price, profit, loss, discount and
              important formulas with simple examples.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-emerald-600" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              {concepts.length}
            </p>
            <p className="text-gray-500">Concepts</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-green-600" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              {formulas.length}
            </p>
            <p className="text-gray-500">Formulas</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <span className="text-3xl">💰</span>
            <p className="text-3xl font-black text-gray-900 mt-2">
              {examples.length}
            </p>
            <p className="text-gray-500">Examples</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              {questions.length}
            </p>
            <p className="text-gray-500">MCQs</p>
          </div>
        </div>
      </section>

      {/* BASIC CONCEPTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-emerald-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Basic Concepts
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the important terms first.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept) => (
            <article
              key={concept.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <Calculator className="text-emerald-600" size={25} />
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {concept.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {concept.description}
              </p>

              <div className="mt-4 rounded-xl bg-emerald-50 p-4">
                <p className="text-sm font-bold text-emerald-700">
                  Example
                </p>

                <p className="mt-1 text-gray-700">
                  {concept.example}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FORMULAS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="text-emerald-600" size={34} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Formulas
              </h2>

              <p className="text-gray-500 mt-1">
                Keep these formulas ready for quick revision.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {formulas.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-emerald-50 hover:border-emerald-200 transition"
              >
                <h3 className="font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg font-black text-emerald-600">
                  {item.formula}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLVED EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="text-green-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Solved Examples
            </h2>

            <p className="text-gray-500 mt-1">
              Learn how to solve Profit & Loss problems step by step.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <article
              key={example.question}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-black text-gray-900 leading-relaxed">
                    {example.question}
                  </h3>

                  <div className="mt-5 space-y-2">
                    {example.steps.map((step) => (
                      <p
                        key={step}
                        className="text-gray-600"
                      >
                        {step}
                      </p>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                    <p className="font-black text-emerald-700">
                      Answer: {example.answer}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MCQ */}

      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-500" size={34} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Profit & Loss MCQs
              </h2>

              <p className="text-gray-500 mt-1">
                Practice important questions for exams.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {questions.map((question, index) => (
              <article
                key={question.question}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-black text-gray-900">
                      {question.question}
                    </h3>

                    <div className="mt-4 grid gap-2">
                      {question.options.map((option) => (
                        <div
                          key={option}
                          className={`rounded-xl border px-4 py-3 ${
                            option === question.answer
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700 font-bold"
                              : "border-gray-100 bg-gray-50 text-gray-700"
                          }`}
                        >
                          {option === question.answer ? (
                            <span className="inline-flex items-center gap-2">
                              <CheckCircle2 size={17} />
                              {option}
                            </span>
                          ) : (
                            option
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Remember the difference between CP, SP and MP. Always
                identify the correct base before calculating a percentage.
                Profit and loss percentages are calculated using Cost Price,
                while discount percentage is calculated using Marked Price.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="profit-loss" />


      {/* FOOTER */}

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <Sparkles
            className="mx-auto text-emerald-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Mathematics
          </h2>

          <p className="mt-3 text-gray-400">
            Continue to another Mathematics chapter and improve your skills.
          </p>
        </div>
      </section>
    </main>
  );
}
