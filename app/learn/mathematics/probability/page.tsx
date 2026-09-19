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
    title: "Probability",
    description:
      "Probability is the measure of how likely an event is to occur.",
    formula: "P(E) = Favourable Outcomes / Total Outcomes",
  },
  {
    title: "Experiment",
    description:
      "An experiment is an activity that produces one or more possible outcomes.",
    formula: "Example: Tossing a coin",
  },
  {
    title: "Outcome",
    description:
      "An outcome is a possible result of an experiment.",
    formula: "Coin → Head or Tail",
  },
  {
    title: "Event",
    description:
      "An event is a collection of one or more outcomes of an experiment.",
    formula: "Example: Getting an even number",
  },
  {
    title: "Certain Event",
    description:
      "An event that is guaranteed to happen has probability 1.",
    formula: "P(E) = 1",
  },
  {
    title: "Impossible Event",
    description:
      "An event that cannot happen has probability 0.",
    formula: "P(E) = 0",
  },
];

const examples = [
  {
    question: "What is the probability of getting a head when a fair coin is tossed?",
    solution:
      "There are 1 favourable outcome and 2 total outcomes. Therefore P(Head) = 1/2.",
  },
  {
    question: "What is the probability of getting an even number on a die?",
    solution:
      "A die has 6 outcomes. Even outcomes are 2, 4 and 6, so there are 3 favourable outcomes. P(Even) = 3/6 = 1/2.",
  },
  {
    question: "What is the probability of getting a 6 on a fair die?",
    solution:
      "There is 1 favourable outcome and 6 total outcomes. Therefore P(6) = 1/6.",
  },
];

const formulas = [
  {
    title: "Basic Probability",
    formula: "P(E) = Favourable outcomes / Total outcomes",
  },
  {
    title: "Impossible Event",
    formula: "P(E) = 0",
  },
  {
    title: "Certain Event",
    formula: "P(E) = 1",
  },
  {
    title: "Complementary Event",
    formula: "P(not E) = 1 − P(E)",
  },
];

const questions = [
  {
    question: "What is the probability of getting a head when a fair coin is tossed?",
    options: ["0", "1/2", "1", "2"],
    answer: "1/2",
  },
  {
    question: "How many possible outcomes are there when a die is thrown?",
    options: ["4", "5", "6", "8"],
    answer: "6",
  },
  {
    question: "What is the probability of an impossible event?",
    options: ["0", "1/2", "1", "2"],
    answer: "0",
  },
  {
    question: "What is the probability of a certain event?",
    options: ["0", "1/4", "1/2", "1"],
    answer: "1",
  },
  {
    question: "What are the even outcomes when a die is thrown?",
    options: ["1, 3, 5", "2, 4, 6", "1, 2, 3", "4, 5, 6"],
    answer: "2, 4, 6",
  },
  {
    question: "The probability of an event is always between:",
    options: ["0 and 1", "1 and 2", "-1 and 1", "2 and 10"],
    answer: "0 and 1",
  },
];

export default function ProbabilityPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

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
              Probability
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn probability, outcomes, events, formulas and practical
              examples step by step.
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
              6
            </p>

            <p className="text-gray-500">
              Key Concepts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-indigo-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {formulas.length}
            </p>

            <p className="text-gray-500">
              Important Formulas
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <span className="text-3xl">
              🎲
            </span>

            <p className="text-3xl font-black text-gray-900 mt-2">
              {examples.length}
            </p>

            <p className="text-gray-500">
              Solved Examples
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {questions.length}
            </p>

            <p className="text-gray-500">
              MCQ Questions
            </p>
          </div>

        </div>

      </section>

      {/* BASIC CONCEPTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Calculator
            className="text-purple-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Probability Concepts
            </h2>

            <p className="text-gray-500 mt-1">
              Understand the basic ideas before solving problems.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {concepts.map((concept) => (

            <article
              key={concept.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-6"
            >

              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl">
                🎲
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                {concept.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {concept.description}
              </p>

              <div className="mt-5 rounded-xl bg-purple-50 px-4 py-3">
                <p className="font-bold text-purple-700">
                  {concept.formula}
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

            <Calculator
              className="text-purple-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Probability Formulas
              </h2>

              <p className="text-gray-500 mt-1">
                Quick revision formulas.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 gap-5">

            {formulas.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-purple-50 hover:border-purple-200 transition"
              >

                <h3 className="font-black text-gray-900 text-lg">
                  {item.title}
                </h3>

                <p className="mt-4 text-xl font-black text-purple-600">
                  {item.formula}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SOLVED EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-indigo-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Solved Examples
            </h2>

            <p className="text-gray-500 mt-1">
              Learn how probability problems are solved.
            </p>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {examples.map((example, index) => (

            <article
              key={index}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >

              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                {index + 1}
              </div>

              <h3 className="mt-5 font-black text-gray-900 leading-relaxed">
                {example.question}
              </h3>

              <div className="mt-5 rounded-2xl bg-indigo-50 p-5">
                <p className="text-indigo-800 font-semibold leading-relaxed">
                  {example.solution}
                </p>
              </div>

            </article>

          ))}

        </div>

      </section>

      {/* MCQ */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Trophy
              className="text-yellow-500"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Probability MCQs
              </h2>

              <p className="text-gray-500 mt-1">
                Practice important questions.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {questions.map((item, index) => (

              <article
                key={index}
                className="bg-gray-50 rounded-3xl border border-gray-100 p-6"
              >

                <div className="flex gap-4">

                  <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div className="flex-1">

                    <h3 className="font-black text-gray-900 leading-relaxed">
                      {item.question}
                    </h3>

                    <div className="mt-4 space-y-2">

                      {item.options.map((option) => (

                        <div
                          key={option}
                          className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-700"
                        >
                          {option}
                        </div>

                      ))}

                    </div>

                    <div className="mt-4 flex items-center gap-2 text-green-600 font-bold">
                      <CheckCircle2 size={18} />
                      Answer: {item.answer}
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
                How to Study Probability
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                First understand outcomes and events. Then learn the basic
                probability formula and solve simple coin, dice and card
                examples. Regular practice will make probability questions
                much easier.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="probability" />


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
            Explore another Mathematics chapter and continue your learning journey.
          </p>

        </div>

      </section>

    </main>
  );
}
