"use client";

import Link from "next/link";
import ChapterNavigation from "../components/ChapterNavigation";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Calculator,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const topics = [
  {
    title: "Data",
    description:
      "Learn what data is, different types of data and how data is collected.",
    icon: "📊",
  },
  {
    title: "Frequency",
    description:
      "Understand frequency and how often a value occurs in a data set.",
    icon: "🔢",
  },
  {
    title: "Tables",
    description:
      "Learn how to organize data using frequency and tally tables.",
    icon: "📋",
  },
  {
    title: "Mean",
    description:
      "Calculate the arithmetic mean or average of a given set of numbers.",
    icon: "➗",
  },
  {
    title: "Median",
    description:
      "Find the middle value of an arranged data set.",
    icon: "🎯",
  },
  {
    title: "Mode",
    description:
      "Identify the value that occurs most frequently in a data set.",
    icon: "🏆",
  },
  {
    title: "Bar Graph",
    description:
      "Represent data visually using bars of different heights or lengths.",
    icon: "📊",
  },
  {
    title: "Pie Chart",
    description:
      "Understand how data can be represented using sectors of a circle.",
    icon: "🥧",
  },
  {
    title: "Line Graph",
    description:
      "Learn how line graphs show changes and trends in data.",
    icon: "📈",
  },
];

const formulas = [
  {
    title: "Arithmetic Mean",
    formula: "Mean = Sum of observations ÷ Number of observations",
    icon: "➗",
  },
  {
    title: "Mean",
    formula: "x̄ = Σx / n",
    icon: "📊",
  },
  {
    title: "Range",
    formula: "Range = Highest value − Lowest value",
    icon: "↔️",
  },
  {
    title: "Frequency",
    formula: "Frequency = Number of times a value occurs",
    icon: "🔢",
  },
  {
    title: "Pie Chart Angle",
    formula: "Angle = Value / Total × 360°",
    icon: "⭕",
  },
  {
    title: "Percentage",
    formula: "Percentage = Part / Total × 100",
    icon: "💯",
  },
];

const examples = [
  {
    question: "Find the mean of 10, 20 and 30.",
    answer: "Mean = (10 + 20 + 30) ÷ 3 = 20",
  },
  {
    question: "Find the median of 5, 8, 12, 15, 20.",
    answer: "Median = 12",
  },
  {
    question: "Find the mode of 2, 4, 4, 6, 8.",
    answer: "Mode = 4",
  },
  {
    question: "Find the range of 10, 15, 25, 30.",
    answer: "Range = 30 − 10 = 20",
  },
];

export default function StatisticsPage() {
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

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Statistics
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn data handling, mean, median, mode, frequency,
              graphs, tables and important statistical concepts.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BarChart3
              className="text-purple-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {topics.length}
            </p>

            <p className="text-gray-500">
              Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator
              className="text-indigo-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {formulas.length}
            </p>

            <p className="text-gray-500">
              Formulas
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen
              className="text-blue-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {examples.length}
            </p>

            <p className="text-gray-500">
              Examples
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy
              className="text-yellow-500"
              size={28}
            />

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

          <BarChart3
            className="text-purple-600"
            size={34}
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Statistics Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Learn statistics step by step.
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
                  {topic.icon}
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
                Important Statistics Formulas
              </h2>

              <p className="text-gray-500 mt-1">
                Quick revision of important formulas.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {formulas.map((item) => (

              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-purple-50 hover:border-purple-200 transition"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg font-black text-purple-600">
                  {item.formula}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* EXAMPLES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-indigo-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Statistics Examples
            </h2>

            <p className="text-gray-500 mt-1">
              Practice basic statistical calculations.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {examples.map((example, index) => (

            <article
              key={example.question}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >

              <div className="flex gap-4">

                <div className="shrink-0 w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div>

                  <h3 className="font-black text-gray-900 text-lg">
                    {example.question}
                  </h3>

                  <div className="mt-4 bg-purple-50 rounded-xl p-4">
                    <p className="text-purple-700 font-bold">
                      {example.answer}
                    </p>
                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                How to Study Statistics
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                First understand the data, then learn how to organize it
                using tables and graphs. Practice calculating mean, median,
                mode and range regularly. Solving different examples will
                make statistics easier and faster.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="statistics" />


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
            Continue with Probability and explore more Mathematics topics.
          </p>

        </div>

      </section>

    </main>
  );
}
