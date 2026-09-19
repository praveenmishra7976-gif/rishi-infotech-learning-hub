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
    title: "What is Percentage?",
    text: "Percentage means a number expressed out of 100. The symbol used for percentage is %. For example, 25% means 25 out of 100.",
  },
  {
    title: "Converting Fraction to Percentage",
    text: "To convert a fraction into a percentage, multiply the fraction by 100.",
    formula: "Percentage = Fraction × 100",
  },
  {
    title: "Converting Decimal to Percentage",
    text: "To convert a decimal into a percentage, multiply it by 100.",
    formula: "Percentage = Decimal × 100",
  },
  {
    title: "Percentage of a Number",
    text: "To find a percentage of a number, multiply the number by the percentage and divide by 100.",
    formula: "x% of y = (x × y) / 100",
  },
];

const formulas = [
  {
    title: "Basic Percentage",
    formula: "Percentage = (Part / Whole) × 100",
  },
  {
    title: "Find the Part",
    formula: "Part = (Percentage × Whole) / 100",
  },
  {
    title: "Find the Whole",
    formula: "Whole = (Part × 100) / Percentage",
  },
  {
    title: "Percentage Increase",
    formula: "Increase % = (Increase / Original) × 100",
  },
  {
    title: "Percentage Decrease",
    formula: "Decrease % = (Decrease / Original) × 100",
  },
  {
    title: "New Value After Increase",
    formula: "New Value = Original × (100 + r) / 100",
  },
];

const examples = [
  {
    question: "Find 25% of 200.",
    steps: [
      "25% of 200 = (25 × 200) / 100",
      "= 5000 / 100",
      "= 50",
    ],
    answer: "50",
  },
  {
    question: "Convert 3/5 into a percentage.",
    steps: [
      "Percentage = (3 / 5) × 100",
      "= 0.6 × 100",
      "= 60%",
    ],
    answer: "60%",
  },
  {
    question: "Convert 0.75 into a percentage.",
    steps: [
      "Percentage = 0.75 × 100",
      "= 75%",
    ],
    answer: "75%",
  },
  {
    question: "A price increases from ₹500 to ₹600. Find the percentage increase.",
    steps: [
      "Increase = ₹600 − ₹500 = ₹100",
      "Percentage increase = (100 / 500) × 100",
      "= 20%",
    ],
    answer: "20%",
  },
];

const questions = [
  {
    question: "What does 25% mean?",
    options: ["25 out of 10", "25 out of 100", "25 out of 1000", "2.5 out of 100"],
    answer: "25 out of 100",
  },
  {
    question: "What is 20% of 150?",
    options: ["20", "25", "30", "35"],
    answer: "30",
  },
  {
    question: "Convert 0.5 into a percentage.",
    options: ["5%", "50%", "500%", "0.5%"],
    answer: "50%",
  },
  {
    question: "Convert 1/4 into a percentage.",
    options: ["10%", "20%", "25%", "40%"],
    answer: "25%",
  },
  {
    question: "A value increases from 100 to 120. What is the percentage increase?",
    options: ["10%", "15%", "20%", "25%"],
    answer: "20%",
  },
];

export default function PercentagePage() {
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
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Percentage
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn percentages step by step with formulas, conversions,
              examples, percentage increase and decrease, and practice MCQs.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-purple-600" size={28} />
            <p className="text-2xl font-black text-gray-900 mt-2">
              {concepts.length}
            </p>
            <p className="text-gray-500">Concepts</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-indigo-600" size={28} />
            <p className="text-2xl font-black text-gray-900 mt-2">
              {formulas.length}
            </p>
            <p className="text-gray-500">Formulas</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <span className="text-3xl">💯</span>
            <p className="text-2xl font-black text-gray-900 mt-2">
              {examples.length}
            </p>
            <p className="text-gray-500">Examples</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />
            <p className="text-2xl font-black text-gray-900 mt-2">
              {questions.length}
            </p>
            <p className="text-gray-500">MCQs</p>
          </div>
        </div>
      </section>

      {/* CONCEPTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-purple-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Percentage Concepts
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the fundamentals before solving problems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept) => (
            <article
              key={concept.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <CheckCircle2 size={25} />
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {concept.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {concept.text}
              </p>

              {concept.formula && (
                <div className="mt-5 rounded-xl bg-purple-50 border border-purple-100 px-5 py-4">
                  <p className="font-black text-purple-700">
                    {concept.formula}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* FORMULAS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Percentage Formulas
              </h2>

              <p className="text-gray-500 mt-1">
                Keep these formulas ready for quick calculations.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {formulas.map((formula) => (
              <article
                key={formula.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-purple-50 hover:border-purple-200 transition"
              >
                <div className="text-3xl">💯</div>

                <h3 className="mt-4 font-black text-gray-900">
                  {formula.title}
                </h3>

                <p className="mt-3 text-lg font-black text-purple-600">
                  {formula.formula}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Solved Examples
            </h2>

            <p className="text-gray-500 mt-1">
              Follow each calculation step by step.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {examples.map((example, index) => (
            <article
              key={example.question}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-gray-900">
                    {example.question}
                  </h3>

                  <div className="mt-5 space-y-2">
                    {example.steps.map((step) => (
                      <p
                        key={step}
                        className="text-gray-700 font-medium"
                      >
                        {step}
                      </p>
                    ))}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 bg-green-50 border border-green-100 px-5 py-3 rounded-xl">
                    <CheckCircle2
                      className="text-green-600"
                      size={20}
                    />

                    <span className="font-black text-green-700">
                      Answer: {example.answer}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MCQ */}

      <section className="bg-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-500" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Percentage Practice MCQs
              </h2>

              <p className="text-gray-500 mt-1">
                Test your understanding.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {questions.map((question, index) => (
              <article
                key={question.question}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7"
              >
                <div className="flex gap-3">
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </span>

                  <h3 className="font-black text-gray-900 leading-relaxed">
                    {question.question}
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={option}
                      className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700"
                    >
                      <span className="font-bold mr-2">
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>
                      {option}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl bg-green-50 border border-green-100 px-4 py-3">
                  <span className="font-black text-green-700">
                    Correct Answer: {question.answer}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Percentage Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Remember that percentage always means “out of 100”.
                Practice converting fractions, decimals and percentages
                regularly. Then move on to percentage increase, decrease,
                profit, loss and discount problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="percentage" />


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
