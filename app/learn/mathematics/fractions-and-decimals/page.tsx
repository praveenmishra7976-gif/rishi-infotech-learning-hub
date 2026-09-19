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

const topics = [
  {
    title: "Fractions",
    description:
      "Understand proper, improper and mixed fractions with simple examples.",
  },
  {
    title: "Equivalent Fractions",
    description:
      "Learn how different fractions can represent the same value.",
  },
  {
    title: "Simplifying Fractions",
    description:
      "Reduce fractions to their simplest form using common factors.",
  },
  {
    title: "Decimal Numbers",
    description:
      "Learn decimal places, tenths, hundredths and thousandths.",
  },
  {
    title: "Fraction to Decimal",
    description:
      "Convert fractions into decimal numbers using division.",
  },
  {
    title: "Decimal to Fraction",
    description:
      "Convert terminating decimals into fractions in simplest form.",
  },
];

const examples = [
  {
    question: "1/2 + 1/4",
    answer: "3/4",
  },
  {
    question: "3/4 − 1/4",
    answer: "1/2",
  },
  {
    question: "2/5 × 3/4",
    answer: "3/10",
  },
  {
    question: "3/4 ÷ 2/3",
    answer: "9/8",
  },
];

const quickFacts = [
  "A fraction has a numerator and a denominator.",
  "The denominator cannot be zero.",
  "A proper fraction has a numerator smaller than its denominator.",
  "An improper fraction has a numerator equal to or greater than its denominator.",
  "0.5 is equal to 1/2.",
  "0.25 is equal to 1/4.",
];

export default function FractionsAndDecimalsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
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

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Fractions & Decimals
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn fractions and decimals step by step with concepts,
              conversions, operations, examples and practice questions.
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

            <p className="text-gray-500">
              Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-indigo-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {examples.length}
            </p>

            <p className="text-gray-500">
              Examples
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <span className="text-3xl">
              ➗
            </span>

            <p className="text-3xl font-black text-gray-900 mt-2">
              Easy
            </p>

            <p className="text-gray-500">
              Learning
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              —
            </p>

            <p className="text-gray-500">
              MCQ Practice
            </p>
          </div>
        </div>
      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Calculator
            className="text-purple-600"
            size={34}
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Fractions & Decimals Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Build your foundation step by step.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl">
                  {index < 3 ? "➗" : "🔢"}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Topic {index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-purple-600 transition">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-purple-600 font-bold">
                Topic Overview
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BASIC CONCEPT */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-purple-50 p-8">
              <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center text-2xl font-black">
                a/b
              </div>

              <h2 className="mt-5 text-3xl font-black text-gray-900">
                Understanding a Fraction
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                A fraction represents a part of a whole. The number above
                the line is called the numerator and the number below the
                line is called the denominator.
              </p>

              <div className="mt-6 bg-white rounded-2xl p-6 text-center shadow-sm">
                <p className="text-4xl font-black text-purple-600">
                  3
                </p>

                <div className="h-1 bg-gray-800 max-w-20 mx-auto my-2" />

                <p className="text-4xl font-black text-purple-600">
                  5
                </p>

                <p className="mt-4 text-gray-500 font-semibold">
                  3 = Numerator &nbsp; | &nbsp; 5 = Denominator
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-indigo-50 p-8">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-black">
                0.5
              </div>

              <h2 className="mt-5 text-3xl font-black text-gray-900">
                Understanding Decimals
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Decimal numbers represent values using a decimal point.
                Digits after the decimal point represent tenths, hundredths,
                thousandths and so on.
              </p>

              <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-3xl font-black text-indigo-600 text-center">
                  0.5 = 5/10 = 1/2
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen
            className="text-purple-600"
            size={32}
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Solved Examples
            </h2>

            <p className="text-gray-500 mt-1">
              Practice basic fraction operations.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {examples.map((example) => (
            <article
              key={example.question}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <p className="text-2xl font-black text-gray-900">
                {example.question}
              </p>

              <div className="my-5 h-px bg-gray-200" />

              <div className="flex items-center gap-2 text-green-600 font-black">
                <CheckCircle2 size={20} />
                Answer
              </div>

              <p className="mt-2 text-2xl font-black text-purple-600">
                {example.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* QUICK FACTS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles
              className="text-cyan-600"
              size={32}
            />

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Quick Revision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {quickFacts.map((fact) => (
              <div
                key={fact}
                className="flex items-start gap-3 bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <CheckCircle2
                  className="text-green-500 shrink-0 mt-0.5"
                  size={21}
                />

                <p className="text-gray-700 font-semibold leading-relaxed">
                  {fact}
                </p>
              </div>
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
                Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                First understand what the numerator and denominator mean.
                Then practice converting fractions into decimals and decimals
                into fractions. Finally, solve addition, subtraction,
                multiplication and division problems regularly.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="fractions-and-decimals" />


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
            Continue to the next Mathematics chapter and strengthen your
            concepts.
          </p>
        </div>
      </section>
    </main>
  );
}
