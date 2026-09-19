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

const topics = [
  {
    title: "Variables",
    description:
      "Learn how letters and symbols are used to represent unknown or changing values.",
    icon: "🔤",
  },
  {
    title: "Algebraic Expressions",
    description:
      "Understand terms, coefficients, constants and variables in algebraic expressions.",
    icon: "🧮",
  },
  {
    title: "Like & Unlike Terms",
    description:
      "Learn how to identify and combine like terms in algebraic expressions.",
    icon: "➕",
  },
  {
    title: "Algebraic Identities",
    description:
      "Study important identities used for simplifying and solving algebraic expressions.",
    icon: "📐",
  },
  {
    title: "Linear Equations",
    description:
      "Learn how to solve equations containing variables and constants.",
    icon: "✏️",
  },
  {
    title: "Factorisation",
    description:
      "Understand how algebraic expressions can be written as products of factors.",
    icon: "🔢",
  },
];

const formulas = [
  {
    title: "Square of a Sum",
    formula: "(a + b)² = a² + 2ab + b²",
  },
  {
    title: "Square of a Difference",
    formula: "(a - b)² = a² - 2ab + b²",
  },
  {
    title: "Difference of Squares",
    formula: "a² - b² = (a + b)(a - b)",
  },
  {
    title: "Product of Sum & Difference",
    formula: "(a + b)(a - b) = a² - b²",
  },
  {
    title: "Cube of a Sum",
    formula: "(a + b)³ = a³ + 3a²b + 3ab² + b³",
  },
  {
    title: "Cube of a Difference",
    formula: "(a - b)³ = a³ - 3a²b + 3ab² - b³",
  },
];

const keyPoints = [
  "A variable represents an unknown or changing value.",
  "A constant has a fixed value.",
  "A coefficient is a numerical factor multiplied by a variable.",
  "An algebraic expression contains numbers, variables and mathematical operations.",
  "Like terms have the same variables with the same powers.",
  "An equation contains an equality sign (=).",
];

const examples = [
  {
    question: "Simplify: 3x + 5x",
    answer: "8x",
    explanation: "3x and 5x are like terms, so their coefficients are added.",
  },
  {
    question: "Simplify: 7a - 2a",
    answer: "5a",
    explanation: "Subtract the coefficients of the like terms: 7 - 2 = 5.",
  },
  {
    question: "Solve: x + 5 = 12",
    answer: "x = 7",
    explanation: "Subtract 5 from both sides: x = 12 - 5 = 7.",
  },
];

const mcqs = [
  {
    question: "Which of the following is a variable?",
    options: ["5", "x", "20", "100"],
    answer: "x",
  },
  {
    question: "What is the coefficient of x in 7x?",
    options: ["x", "7", "1", "0"],
    answer: "7",
  },
  {
    question: "Which terms are like terms?",
    options: ["3x and 5x", "3x and 5y", "x and x²", "2a and 3b"],
    answer: "3x and 5x",
  },
  {
    question: "What is the value of x if x + 4 = 10?",
    options: ["4", "5", "6", "7"],
    answer: "6",
  },
];

export default function AlgebraPage() {
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
              Algebra
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn variables, expressions, algebraic identities,
              equations, factorisation and practical problem solving
              step by step.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-purple-600" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              {topics.length}
            </p>
            <p className="text-gray-500">Topics</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-indigo-600" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              {formulas.length}
            </p>
            <p className="text-gray-500">Formulas</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <span className="text-3xl">🧮</span>
            <p className="text-3xl font-black text-gray-900 mt-2">
              {examples.length}
            </p>
            <p className="text-gray-500">Examples</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />
            <p className="text-3xl font-black text-gray-900 mt-2">
              {mcqs.length}
            </p>
            <p className="text-gray-500">MCQs</p>
          </div>
        </div>
      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="text-purple-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Algebra Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the basic building blocks of algebra.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl">
                  {topic.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Topic {index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* KEY CONCEPTS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-purple-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Algebra Concepts
              </h2>

              <p className="text-gray-500 mt-1">
                Remember these basic concepts.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {keyPoints.map((point, index) => (
              <div
                key={point}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <CheckCircle2
                  className="text-purple-600 shrink-0 mt-0.5"
                  size={23}
                />

                <div>
                  <span className="text-xs font-bold text-purple-600">
                    POINT {index + 1}
                  </span>

                  <p className="mt-1 text-gray-700 font-semibold leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="text-indigo-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Algebraic Identities
            </h2>

            <p className="text-gray-500 mt-1">
              Useful formulas for solving algebra problems.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {formulas.map((formula) => (
            <article
              key={formula.title}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 hover:shadow-lg hover:border-purple-200 transition"
            >
              <h3 className="font-black text-gray-900">
                {formula.title}
              </h3>

              <p className="mt-4 text-lg md:text-xl font-black text-purple-600 break-words">
                {formula.formula}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SOLVED EXAMPLES */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-yellow-500" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Solved Examples
              </h2>

              <p className="text-gray-500 mt-1">
                Learn algebra by following the steps.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <article
                key={example.question}
                className="rounded-3xl bg-gray-50 border border-gray-100 p-6"
              >
                <span className="inline-flex px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-black">
                  Example {index + 1}
                </span>

                <h3 className="mt-5 text-lg font-black text-gray-900">
                  {example.question}
                </h3>

                <div className="mt-5 rounded-2xl bg-purple-600 text-white p-5">
                  <p className="text-sm text-white/80 font-semibold">
                    Answer
                  </p>

                  <p className="mt-1 text-2xl font-black">
                    {example.answer}
                  </p>
                </div>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  {example.explanation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MCQ */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-600 text-white p-8 md:p-12">
          <div className="flex items-center gap-3">
            <Trophy size={30} />

            <span className="font-bold">
              Quick Practice
            </span>
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-black">
            Algebra MCQ Practice
          </h2>

          <p className="mt-3 text-white/90">
            Test your understanding with these quick questions.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {mcqs.map((mcq, index) => (
              <article
                key={mcq.question}
                className="bg-white text-gray-900 rounded-2xl p-6"
              >
                <p className="text-sm font-black text-purple-600">
                  Question {index + 1}
                </p>

                <h3 className="mt-2 font-black">
                  {mcq.question}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {mcq.options.map((option) => (
                    <div
                      key={option}
                      className="rounded-xl bg-gray-50 border border-gray-100 px-3 py-2 text-sm font-semibold"
                    >
                      {option}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm">
                  <span className="font-bold text-green-600">
                    Answer:
                  </span>{" "}
                  {mcq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                How to Study Algebra
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Start with variables and expressions, understand like
                terms, learn important identities and then practice
                equations. Solve problems step by step instead of only
                memorizing formulas.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl font-semibold">
                  Understand
                </span>

                <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl font-semibold">
                  Learn Formula
                </span>

                <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl font-semibold">
                  Solve Examples
                </span>

                <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl font-semibold">
                  Practice
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="algebra" />


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
            Continue to the next Mathematics chapter and strengthen
            your problem-solving skills.
          </p>
        </div>
      </section>
    </main>
  );
}
