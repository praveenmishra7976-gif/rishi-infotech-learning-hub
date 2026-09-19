"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  Trophy,
} from "lucide-react";

import {
  gkSections,
  gkFacts,
  gkQuestions,
} from "./data/gkData";

export default function GKPage() {
  const [search, setSearch] = useState("");
  const [showAllFacts, setShowAllFacts] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});

  const filteredSections = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return gkSections;
    }

    return gkSections.filter((section) => {
      const sectionMatch =
        section.title.toLowerCase().includes(value) ||
        section.description.toLowerCase().includes(value);

      const topicMatch = section.topics.some((topic) =>
        topic.toLowerCase().includes(value)
      );

      return sectionMatch || topicMatch;
    });
  }, [search]);

  const visibleFacts = showAllFacts
    ? gkFacts
    : gkFacts.slice(0, 8);

  const score = gkQuestions.reduce(
    (total, question, index) => {
      if (selectedAnswers[index] === question.answer) {
        return total + 1;
      }

      return total;
    },
    0
  );

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">

              <Sparkles size={17} />

              Rishi Infotech Learning Hub

            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              General Knowledge
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">

              Learn Indian GK, World GK, History, Geography,
              Indian Polity, Science, Sports, Awards,
              Important Persons, Current Affairs and more.

            </p>

            {/* SEARCH */}

            <div className="mt-8 relative max-w-3xl">

              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search GK topics..."
                className="w-full rounded-2xl bg-white text-gray-900 pl-14 pr-5 py-5 outline-none shadow-xl placeholder:text-gray-400"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* QUICK STATS */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <p className="text-3xl font-black text-blue-600">
              {gkSections.length}
            </p>

            <p className="text-gray-500 mt-1">
              GK Sections
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <p className="text-3xl font-black text-cyan-600">
              {gkSections.reduce(
                (total, section) =>
                  total + section.topics.length,
                0
              )}
            </p>

            <p className="text-gray-500 mt-1">
              Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <p className="text-3xl font-black text-green-600">
              {gkFacts.length}
            </p>

            <p className="text-gray-500 mt-1">
              Quick Facts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <p className="text-3xl font-black text-purple-600">
              {gkQuestions.length}
            </p>

            <p className="text-gray-500 mt-1">
              GK Questions
            </p>
          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* GK SECTIONS */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-blue-600"
            size={30}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              GK Sections
            </h2>

            <p className="text-gray-500 mt-1">
              Choose a section and start learning.
            </p>

          </div>

        </div>

        {filteredSections.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-sm p-12 text-center">

            <Search
              className="mx-auto text-gray-400"
              size={48}
            />

            <h3 className="mt-5 text-2xl font-black">
              No GK section found
            </h3>

            <p className="mt-2 text-gray-500">
              Try searching for another topic.
            </p>

          </div>

        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredSections.map((section) => (

              <article
                key={section.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6 group"
              >

                {/* ICON */}

                <div className="flex items-center justify-between">

                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl group-hover:scale-110 transition">

                    {section.emoji}

                  </div>

                  <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">

                    {section.topics.length} topics

                  </span>

                </div>

                {/* TITLE */}

                <h3 className="mt-5 text-xl font-black text-gray-900">

                  {section.title}

                </h3>

                {/* DESCRIPTION */}

                <p className="mt-3 text-gray-600 leading-relaxed line-clamp-3">

                  {section.description}

                </p>

                {/* TOPICS */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {section.topics
                    .slice(0, 5)
                    .map((topic) => (

                      <span
                        key={topic}
                        className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full"
                      >
                        {topic}
                      </span>

                    ))}

                </div>

                {/* OPEN CHAPTER */}

                <Link
                  href={`/gk/${section.id}`}
                  className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-xl transition"
                >

                  Explore Section

                  <ArrowRight size={18} />

                </Link>

              </article>

            ))}

          </div>

        )}

      </section>

      {/* ================================================= */}
      {/* ALL TOPICS */}
      {/* ================================================= */}

      <section className="bg-white border-y">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="mb-10">

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Explore All GK Topics
            </h2>

            <p className="mt-2 text-gray-500">
              Complete General Knowledge topic list.
            </p>

          </div>

          <div className="space-y-10">

            {gkSections.map((section) => (

              <div key={section.id}>

                <div className="flex items-center justify-between gap-4 mb-5">

                  <div className="flex items-center gap-3">

                    <span className="text-3xl">
                      {section.emoji}
                    </span>

                    <h3 className="text-2xl font-black text-gray-900">
                      {section.title}
                    </h3>

                  </div>

                  <Link
                    href={`/gk/${section.id}`}
                    className="hidden sm:inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800"
                  >
                    Open
                    <ArrowRight size={17} />
                  </Link>

                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                  {section.topics.map((topic) => (

                    <div
                      key={topic}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-semibold text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition"
                    >

                      {topic}

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* QUICK FACTS */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">

          <div>

            <div className="flex items-center gap-3">

              <Brain
                className="text-purple-600"
                size={30}
              />

              <h2 className="text-3xl md:text-4xl font-black">
                GK Quick Facts
              </h2>

            </div>

            <p className="text-gray-500 mt-2">
              Important questions and answers for quick revision.
            </p>

          </div>

          <button
            type="button"
            onClick={() =>
              setShowAllFacts(!showAllFacts)
            }
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-xl"
          >

            {showAllFacts ? (
              <>
                Show Less
                <ChevronUp size={18} />
              </>
            ) : (
              <>
                Show All Facts
                <ChevronDown size={18} />
              </>
            )}

          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {visibleFacts.map((fact, index) => (

            <div
              key={`${fact.question}-${index}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >

              <p className="text-sm font-bold text-blue-600 mb-2">
                {fact.section}
              </p>

              <h3 className="font-bold text-gray-900">
                {fact.question}
              </h3>

              <p className="mt-3 text-lg font-black text-green-600">
                {fact.answer}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================================================= */}
      {/* QUIZ */}
      {/* ================================================= */}

      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border-y">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <div className="flex items-center gap-3">

                <Trophy
                  className="text-yellow-500"
                  size={32}
                />

                <h2 className="text-3xl md:text-4xl font-black">
                  GK Practice Quiz
                </h2>

              </div>

              <p className="mt-3 text-gray-600">
                Test your General Knowledge with multiple-choice questions.
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                setShowQuiz(!showQuiz)
              }
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl"
            >

              {showQuiz
                ? "Hide Quiz"
                : "Start GK Quiz"}

            </button>

          </div>

          {showQuiz && (

            <div className="mt-10 space-y-6">

              {gkQuestions.map(
                (question, index) => (

                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-sm border p-6"
                  >

                    <div className="flex items-start gap-3">

                      <span className="w-9 h-9 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black">

                        {index + 1}

                      </span>

                      <div className="flex-1">

                        <p className="text-sm text-blue-600 font-bold mb-2">
                          {question.section}
                        </p>

                        <h3 className="text-lg font-black text-gray-900">
                          {question.question}
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-3 mt-5">

                          {question.options.map(
                            (option) => {

                              const selected =
                                selectedAnswers[index] ===
                                option;

                              const correct =
                                option ===
                                question.answer;

                              let classes =
                                "border-gray-200 bg-white hover:border-blue-400";

                              if (selected) {
                                classes =
                                  "border-blue-500 bg-blue-50 text-blue-700";
                              }

                              if (
                                selected &&
                                correct
                              ) {
                                classes =
                                  "border-green-500 bg-green-50 text-green-700";
                              }

                              if (
                                selected &&
                                !correct
                              ) {
                                classes =
                                  "border-red-500 bg-red-50 text-red-700";
                              }

                              return (

                                <button
                                  key={option}
                                  type="button"
                                  onClick={() =>
                                    setSelectedAnswers(
                                      (previous) => ({
                                        ...previous,
                                        [index]:
                                          option,
                                      })
                                    )
                                  }
                                  className={`text-left border-2 rounded-xl p-4 font-semibold transition ${classes}`}
                                >

                                  {option}

                                </button>

                              );
                            }
                          )}

                        </div>

                        {selectedAnswers[index] && (

                          <div className="mt-4 flex items-center gap-2 text-sm font-bold">

                            {selectedAnswers[index] ===
                            question.answer ? (
                              <>
                                <CheckCircle2
                                  size={18}
                                  className="text-green-600"
                                />

                                <span className="text-green-600">
                                  Correct answer!
                                </span>
                              </>
                            ) : (
                              <span className="text-red-600">
                                Correct answer:{" "}
                                {question.answer}
                              </span>
                            )}

                          </div>

                        )}

                      </div>

                    </div>

                  </div>

                )
              )}

              <div className="bg-white rounded-2xl shadow-lg border p-6 text-center">

                <p className="text-gray-500">
                  Your current score
                </p>

                <p className="text-4xl font-black text-blue-600 mt-2">
                  {score} / {gkQuestions.length}
                </p>

              </div>

            </div>

          )}

        </div>

      </section>

      {/* ================================================= */}
      {/* EXAM PREPARATION */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">

          <h2 className="text-3xl md:text-4xl font-black">
            Prepare for Competitive Exams
          </h2>

          <p className="mt-4 text-white/90 max-w-3xl leading-relaxed">

            Use General Knowledge to prepare for SSC,
            Railway, Banking, UPSC, State Government Exams,
            Police Exams, Defence Exams and school examinations.

          </p>

          <div className="mt-7 flex flex-wrap gap-3">

            {[
              "SSC",
              "Railway",
              "Banking",
              "UPSC",
              "State Exams",
              "Police",
              "Defence",
              "School Exams",
            ].map((exam) => (

              <span
                key={exam}
                className="bg-white/15 border border-white/20 rounded-full px-4 py-2 font-bold"
              >
                {exam}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FOOTER CTA */}
      {/* ================================================= */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 text-center">

          <Sparkles
            className="mx-auto text-cyan-400"
            size={38}
          />

          <h2 className="mt-5 text-3xl md:text-4xl font-black">
            Keep Learning Every Day
          </h2>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Explore more subjects and improve your knowledge
            with Rishi Infotech Learning Hub.
          </p>

          <Link
            href="/learn"
            className="mt-7 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl"
          >

            Explore Learning

            <ArrowRight size={19} />

          </Link>

        </div>

      </section>

    </main>
  );
}