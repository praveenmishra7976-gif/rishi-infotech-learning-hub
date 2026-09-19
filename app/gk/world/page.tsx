"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe2,
  HelpCircle,
  Sparkles,
} from "lucide-react";

import {
  worldGKTopics,
  worldGKQuestions,
} from "../data/worldGK";

export default function WorldGKPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <Link
            href="/gk"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold"
          >
            <ArrowLeft size={18} />
            Back to General Knowledge
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              World General Knowledge
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-black">
              World GK
            </h1>

            <p className="mt-4 text-lg text-white/90">
              Explore countries, capitals, continents, oceans,
              mountains, rivers, deserts, landmarks and international
              organizations.
            </p>

          </div>

        </div>

      </section>

      {/* CHAPTERS */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex items-center gap-3 mb-7">

          <Globe2
            className="text-blue-600"
            size={30}
          />

          <div>

            <h2 className="text-3xl font-black text-gray-900">
              World GK Chapters
            </h2>

            <p className="text-gray-500 mt-1">
              Select a chapter to learn important world facts.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {worldGKTopics.map((topic, index) => (

            <Link
              key={topic.title}
              href={`/gk/world/${index}`}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-7"
            >

              <div className="flex items-start justify-between gap-5">

                <div>

                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">

                    <BookOpen
                      className="text-blue-600"
                      size={24}
                    />

                  </div>

                  <h3 className="mt-5 text-2xl font-black text-gray-900">
                    Chapter {index + 1}: {topic.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {topic.facts.length} important facts
                  </p>

                </div>

                <ArrowRight
                  className="text-blue-600 mt-2"
                  size={25}
                />

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* MCQs */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="flex items-center gap-3 mb-7">

          <HelpCircle
            className="text-cyan-600"
            size={30}
          />

          <div>

            <h2 className="text-3xl font-black text-gray-900">
              World GK Practice Questions
            </h2>

            <p className="text-gray-500 mt-1">
              Practice important questions.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {worldGKQuestions.map((question, index) => (

            <div
              key={question.question}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >

              <div className="flex gap-3">

                <span className="w-9 h-9 shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </span>

                <h3 className="font-black text-lg text-gray-900">
                  {question.question}
                </h3>

              </div>

              <div className="mt-5 space-y-2">

                {question.options.map((option) => (

                  <div
                    key={option}
                    className={`rounded-xl px-4 py-3 border ${
                      option === question.answer
                        ? "bg-green-50 border-green-200 text-green-700"
                        : "bg-gray-50 border-gray-100 text-gray-700"
                    }`}
                  >

                    <div className="flex items-center gap-2">

                      {option === question.answer && (
                        <CheckCircle2 size={18} />
                      )}

                      <span className="font-semibold">
                        {option}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
