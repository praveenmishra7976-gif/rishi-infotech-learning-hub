"use client";

import Link from "next/link";
import ChapterNavigation from "../components/ChapterNavigation";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const concepts = [
  {
    title: "What is a Linear Equation?",
    text: "A linear equation is an equation in which the highest power of the variable is 1. It can contain one or more variables.",
  },
  {
    title: "Equation in One Variable",
    text: "A linear equation in one variable can be written in the form ax + b = 0, where a is not zero.",
  },
  {
    title: "Solving an Equation",
    text: "To solve an equation, perform the same mathematical operation on both sides until the variable is isolated.",
  },
  {
    title: "Checking the Answer",
    text: "Substitute the obtained value back into the original equation to verify that both sides are equal.",
  },
];

const methods = [
  "Simplify both sides of the equation.",
  "Move variable terms to one side.",
  "Move constant terms to the other side.",
  "Divide or multiply to isolate the variable.",
  "Check the answer in the original equation.",
];

const examples = [
  {
    question: "x + 5 = 12",
    steps: ["x + 5 = 12", "x = 12 - 5", "x = 7"],
    answer: "x = 7",
  },
  {
    question: "3x = 21",
    steps: ["3x = 21", "x = 21 ÷ 3", "x = 7"],
    answer: "x = 7",
  },
  {
    question: "2x + 4 = 14",
    steps: ["2x + 4 = 14", "2x = 14 - 4", "2x = 10", "x = 5"],
    answer: "x = 5",
  },
  {
    question: "5x - 10 = 20",
    steps: ["5x - 10 = 20", "5x = 20 + 10", "5x = 30", "x = 6"],
    answer: "x = 6",
  },
];

const questions = [
  {
    question: "What is the highest power of a variable in a linear equation?",
    options: ["1", "2", "3", "4"],
    answer: "1",
  },
  {
    question: "Solve: x + 8 = 15",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Solve: 4x = 20",
    options: ["4", "5", "6", "8"],
    answer: "5",
  },
  {
    question: "Solve: 2x + 6 = 16",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },
];

export default function LinearEquationsPage() {
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

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Linear Equations
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn how to understand, simplify and solve linear equations
              step by step with easy examples and practice questions.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-purple-600" size={28} />
            <p className="mt-2 text-xl font-black text-gray-900">
              Equations
            </p>
            <p className="text-gray-500">Learn the basics</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <span className="text-3xl">✏️</span>
            <p className="mt-2 text-xl font-black text-gray-900">
              Step-by-Step
            </p>
            <p className="text-gray-500">Easy methods</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <span className="text-3xl">🧮</span>
            <p className="mt-2 text-xl font-black text-gray-900">
              Examples
            </p>
            <p className="text-gray-500">Solved problems</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />
            <p className="mt-2 text-xl font-black text-gray-900">
              {questions.length}
            </p>
            <p className="text-gray-500">MCQs</p>
          </div>
        </div>
      </section>

      {/* CONCEPTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="text-purple-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Linear Equation Concepts
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the fundamentals before solving problems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept, index) => (
            <article
              key={concept.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-black text-lg">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {concept.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {concept.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* METHOD */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Steps to Solve a Linear Equation
            </h2>

            <p className="mt-3 text-gray-500">
              Follow these steps when solving a basic equation.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-5 gap-4">
            {methods.map((method, index) => (
              <div
                key={method}
                className="rounded-2xl bg-purple-50 border border-purple-100 p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <p className="mt-4 font-bold text-gray-800 leading-relaxed">
                  {method}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULA */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-black">
            Standard Form
          </h2>

          <p className="mt-5 text-white/90 text-lg">
            A basic linear equation in one variable can be represented as:
          </p>

          <div className="mt-7 bg-white/15 border border-white/20 rounded-2xl p-7 text-center">
            <p className="text-3xl md:text-5xl font-black">
              ax + b = 0
            </p>

            <p className="mt-4 text-white/80">
              where a ≠ 0
            </p>
          </div>
        </div>
      </section>

      {/* SOLVED EXAMPLES */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="text-green-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Solved Examples
              </h2>

              <p className="text-gray-500 mt-1">
                Learn by following each calculation step.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example) => (
              <article
                key={example.question}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-7"
              >
                <h3 className="text-xl font-black text-gray-900">
                  Solve: {example.question}
                </h3>

                <div className="mt-5 space-y-2">
                  {example.steps.map((step, index) => (
                    <div
                      key={`${example.question}-${index}`}
                      className="bg-white rounded-xl px-5 py-3 border border-gray-100 font-semibold text-gray-700"
                    >
                      {step}
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-green-50 text-green-700 rounded-xl px-5 py-3 font-black">
                  Answer: {example.answer}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GRAPH */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
          <h2 className="text-3xl font-black text-gray-900">
            Understanding a Linear Graph
          </h2>

          <p className="mt-3 text-gray-600">
            A linear equation can also be represented graphically as a
            straight line.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl">
            {/* Equation-only graph: no derived points are supplied. */}
            <div className="min-h-[320px] flex items-center justify-center bg-gray-50 text-gray-400">
              Linear graph visualization
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="text-yellow-500" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Quick Practice
            </h2>

            <p className="text-gray-500 mt-1">
              Test your understanding.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {questions.map((item, index) => (
            <article
              key={item.question}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7"
            >
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="font-black text-gray-900">
                    {item.question}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {item.options.map((option) => (
                      <div
                        key={option}
                        className="rounded-xl border border-gray-200 px-4 py-3 text-gray-700 font-semibold"
                      >
                        {option}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl bg-green-50 text-green-700 px-4 py-3 font-bold">
                    Correct Answer: {item.answer}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 md:p-12">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Mathematics Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                When solving equations, remember that whatever operation you
                perform on one side must also be performed on the other side.
                Practice different types of equations regularly to build speed
                and accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="linear-equations" />


      {/* FOOTER */}

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <Sparkles className="mx-auto text-cyan-400" size={36} />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Mathematics
          </h2>

          <p className="mt-3 text-gray-400">
            Explore another chapter and continue your learning journey.
          </p>
        </div>
      </section>
    </main>
  );
}
