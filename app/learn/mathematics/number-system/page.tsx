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
    title: "Natural Numbers",
    description:
      "Natural numbers are counting numbers such as 1, 2, 3, 4, 5 and so on.",
    example: "1, 2, 3, 4, 5, ...",
  },
  {
    title: "Whole Numbers",
    description:
      "Whole numbers include zero together with all natural numbers.",
    example: "0, 1, 2, 3, 4, 5, ...",
  },
  {
    title: "Integers",
    description:
      "Integers include positive numbers, negative numbers and zero.",
    example: "... -3, -2, -1, 0, 1, 2, 3 ...",
  },
  {
    title: "Rational Numbers",
    description:
      "A rational number can be written in the form p/q, where q is not zero.",
    example: "1/2, 3/4, -5/7, 2",
  },
  {
    title: "Irrational Numbers",
    description:
      "Irrational numbers cannot be expressed as a simple fraction of two integers.",
    example: "√2, √3, π",
  },
  {
    title: "Real Numbers",
    description:
      "Real numbers include both rational and irrational numbers.",
    example: "−5, 0, 2/3, √2, π",
  },
];

const numberSystems = [
  {
    name: "Decimal",
    base: "10",
    digits: "0–9",
    example: "245",
  },
  {
    name: "Binary",
    base: "2",
    digits: "0, 1",
    example: "1011",
  },
  {
    name: "Octal",
    base: "8",
    digits: "0–7",
    example: "157",
  },
  {
    name: "Hexadecimal",
    base: "16",
    digits: "0–9, A–F",
    example: "2F",
  },
];

const questions = [
  {
    question: "Which of the following is a natural number?",
    options: ["-2", "0", "5", "1/2"],
    answer: "5",
  },
  {
    question: "Which number is neither positive nor negative?",
    options: ["-1", "0", "1", "10"],
    answer: "0",
  },
  {
    question: "Which number system uses base 2?",
    options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
    answer: "Binary",
  },
  {
    question: "Which of the following is irrational?",
    options: ["2", "3/4", "√2", "5"],
    answer: "√2",
  },
  {
    question: "What is the base of the decimal number system?",
    options: ["2", "8", "10", "16"],
    answer: "10",
  },
];

export default function NumberSystemPage() {
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
            Mathematics
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Number System
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn natural numbers, whole numbers, integers, rational
              numbers, irrational numbers, real numbers and different
              number systems.
            </p>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                <BookOpen className="text-purple-600" size={26} />
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                What is a Number System?
              </h2>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              A number system is a method of representing and classifying
              numbers. Mathematics uses different types of numbers to
              perform calculations, solve problems and describe quantities.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The main number sets commonly studied are natural numbers,
              whole numbers, integers, rational numbers, irrational numbers
              and real numbers.
            </p>

          </div>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-7 text-white">

            <Calculator size={32} />

            <h2 className="mt-5 text-2xl font-black">
              Quick Revision
            </h2>

            <div className="mt-5 space-y-3 text-white/90">
              <p>Natural → 1, 2, 3, ...</p>
              <p>Whole → 0, 1, 2, ...</p>
              <p>Integer → ..., -2, -1, 0, 1, 2, ...</p>
              <p>Rational → p/q</p>
              <p>Real → Rational + Irrational</p>
            </div>

          </div>

        </div>
      </section>

      {/* CONCEPTS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen className="text-purple-600" size={32} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Types of Numbers
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the major types of numbers.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {concepts.map((concept) => (
            <article
              key={concept.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-6"
            >

              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                <Calculator className="text-purple-600" size={25} />
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {concept.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {concept.description}
              </p>

              <div className="mt-5 rounded-xl bg-gray-50 border border-gray-100 p-4">
                <p className="text-sm font-bold text-gray-500">
                  Example
                </p>

                <p className="mt-1 font-black text-purple-600">
                  {concept.example}
                </p>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* NUMBER SYSTEMS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Calculator className="text-indigo-600" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Common Number Systems
              </h2>

              <p className="text-gray-500 mt-1">
                Learn the base and digits used by common number systems.
              </p>
            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px] border-collapse">

              <thead>
                <tr className="bg-purple-50">
                  <th className="text-left p-4 font-black text-gray-900">
                    Number System
                  </th>
                  <th className="text-left p-4 font-black text-gray-900">
                    Base
                  </th>
                  <th className="text-left p-4 font-black text-gray-900">
                    Digits
                  </th>
                  <th className="text-left p-4 font-black text-gray-900">
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>

                {numberSystems.map((system) => (
                  <tr
                    key={system.name}
                    className="border-b border-gray-100"
                  >
                    <td className="p-4 font-bold text-gray-900">
                      {system.name}
                    </td>

                    <td className="p-4 font-black text-purple-600">
                      {system.base}
                    </td>

                    <td className="p-4 text-gray-600">
                      {system.digits}
                    </td>

                    <td className="p-4 font-black text-indigo-600">
                      {system.example}
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>
      </section>

      {/* IMPORTANT POINTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">

          <h2 className="text-3xl font-black text-gray-900">
            Important Points
          </h2>

          <div className="mt-7 grid md:grid-cols-2 gap-4">

            {[
              "Natural numbers are used for counting.",
              "Whole numbers include zero.",
              "Integers include positive and negative whole numbers.",
              "Every integer is a rational number.",
              "Rational numbers can be represented as p/q.",
              "Irrational numbers cannot be represented as p/q.",
              "Real numbers include rational and irrational numbers.",
              "Binary uses only 0 and 1.",
            ].map((point) => (
              <div
                key={point}
                className="flex gap-3 items-start rounded-2xl bg-gray-50 p-4"
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

      {/* MCQ */}

      <section className="bg-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Trophy className="text-yellow-500" size={32} />

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Number System MCQs
              </h2>

              <p className="text-gray-500 mt-1">
                Practice these questions for quick revision.
              </p>
            </div>

          </div>

          <div className="space-y-5">

            {questions.map((item, index) => (

              <article
                key={item.question}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >

                <div className="flex gap-4">

                  <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div className="flex-1">

                    <h3 className="font-black text-gray-900 text-lg">
                      {item.question}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-3 mt-5">

                      {item.options.map((option) => (
                        <div
                          key={option}
                          className={`rounded-xl border p-4 ${
                            option === item.answer
                              ? "border-green-200 bg-green-50 text-green-700"
                              : "border-gray-100 bg-gray-50 text-gray-700"
                          }`}
                        >
                          {option === item.answer && (
                            <CheckCircle2
                              className="inline mr-2"
                              size={17}
                            />
                          )}

                          {option}
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
                First understand the difference between each type of number.
                Then practice converting numbers between different number
                systems. Regular practice will make calculations faster.
              </p>

            </div>

          </div>

        </div>
      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="number-system" />


      {/* FOOTER */}

      <footer className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <Sparkles
            className="mx-auto text-cyan-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Mathematics
          </h2>

          <p className="mt-3 text-gray-400">
            Explore the next Mathematics chapter and continue learning.
          </p>

        </div>

      </footer>

    </main>
  );
}
