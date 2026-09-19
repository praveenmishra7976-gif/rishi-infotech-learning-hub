"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  Lightbulb,
  RotateCcw,
  Scale,
  Sparkles,
  Target,
  Trophy,
  XCircle,
} from "lucide-react";

import {
  physicsChapters,
  physicsQuestions,
} from "../data/physicsData";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

export default function PhysicsChapterPage() {
  const params = useParams();

  const chapterId = String(params.chapterId || "");

  const chapter = physicsChapters.find(
    (item) => item.id === chapterId
  );

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});

  const [showResults, setShowResults] = useState(false);

  const [quizScore, setQuizScore] = useState<number | null>(
    null
  );

  if (!chapter) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">
          <div className="text-6xl">📚</div>

          <h1 className="mt-5 text-3xl md:text-4xl font-black text-gray-900">
            Chapter Not Found
          </h1>

          <p className="mt-3 text-gray-500 leading-relaxed">
            The Physics chapter you are looking for could not be
            found. Please return to the Physics chapters and select
            another chapter.
          </p>

          <Link
            href="/learn/physics"
            className="mt-7 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            <ArrowLeft size={18} />
            Back to Physics
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = physicsChapters.findIndex(
    (item) => item.id === chapter.id
  );

  const previousChapter =
    currentIndex > 0
      ? physicsChapters[currentIndex - 1]
      : null;

  const nextChapter =
    currentIndex < physicsChapters.length - 1
      ? physicsChapters[currentIndex + 1]
      : null;

  const chapterQuestions: Question[] = useMemo(() => {
    if (!physicsQuestions || physicsQuestions.length === 0) {
      return [];
    }

    const start = currentIndex * 2;

    return [
      physicsQuestions[start % physicsQuestions.length] as Question,
      physicsQuestions[
        (start + 1) % physicsQuestions.length
      ] as Question,
    ];
  }, [currentIndex]);

  function handleAnswer(
    questionIndex: number,
    option: string
  ) {
    if (showResults) {
      return;
    }

    setSelectedAnswers((previous) => ({
      ...previous,
      [questionIndex]: option,
    }));
  }

  function checkAnswers() {
    if (chapterQuestions.length === 0) {
      return;
    }

    let score = 0;

    chapterQuestions.forEach((question, index) => {
      if (
        selectedAnswers[index] === question.answer
      ) {
        score++;
      }
    });

    setQuizScore(score);
    setShowResults(true);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  function resetQuiz() {
    setSelectedAnswers({});
    setShowResults(false);
    setQuizScore(null);
  }

  const answeredCount = Object.keys(
    selectedAnswers
  ).length;

  const allAnswered =
    chapterQuestions.length > 0 &&
    answeredCount === chapterQuestions.length;

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">

          <Link
            href="/learn/physics"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Physics
          </Link>

          <div className="mt-8 flex items-start gap-5">

            <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center text-4xl">
              {chapter.icon}
            </div>

            <div className="min-w-0">

              <p className="text-white/75 font-semibold">
                Physics • Chapter {currentIndex + 1}
              </p>

              <h1 className="mt-2 text-3xl md:text-5xl font-black leading-tight">
                {chapter.title}
              </h1>

              <p className="mt-4 text-lg text-white/90 max-w-3xl leading-relaxed">
                {chapter.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl text-sm font-semibold">
                  📖 {chapter.detailedTopics.length} Concepts
                </span>

                <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl text-sm font-semibold">
                  🧮 {chapter.formulas.length} Formulas
                </span>

                <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl text-sm font-semibold">
                  ⚖️ {chapter.laws.length} Laws
                </span>

                <span className="bg-white/15 border border-white/20 px-4 py-2 rounded-xl text-sm font-semibold">
                  🎯 {chapter.topics.length} Topics
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-12">

        {/* ===================================================
            LEARNING OBJECTIVES
        ==================================================== */}

        <section className="mb-14">

          <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-7 md:p-9">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Target size={25} />
              </div>

              <div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  What You Will Learn
                </h2>

                <p className="mt-2 text-gray-500 leading-relaxed">
                  By completing this chapter, you should understand
                  the important concepts, formulas, laws and
                  real-life applications related to{" "}
                  <span className="font-bold text-blue-600">
                    {chapter.title}
                  </span>
                  .
                </p>

              </div>

            </div>

            <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

              {chapter.topics.map((topic, index) => (

                <div
                  key={topic}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4"
                >

                  <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-black">
                    {index + 1}
                  </div>

                  <span className="text-gray-700 font-semibold">
                    {topic}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ===================================================
            DETAILED LESSON
        ==================================================== */}

        <section>

          <div className="flex items-center gap-3 mb-7">

            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen size={28} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Detailed Lesson
              </h2>

              <p className="mt-1 text-gray-500">
                Learn each concept step by step with explanations
                and examples.
              </p>

            </div>

          </div>

          <div className="space-y-6">

            {chapter.detailedTopics.map(
              (topic, index) => (

                <article
                  key={topic.title}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition"
                >

                  <div className="p-7 md:p-9">

                    <div className="flex items-start gap-4">

                      <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg">
                        {index + 1}
                      </div>

                      <div className="min-w-0 flex-1">

                        <h3 className="text-2xl font-black text-gray-900">
                          {topic.title}
                        </h3>

                        <p className="mt-4 text-gray-700 leading-8 text-base md:text-lg">
                          {topic.explanation}
                        </p>

                        {topic.example && (
                          <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-100 p-5">

                            <div className="flex items-start gap-3">

                              <Lightbulb
                                className="text-amber-500 shrink-0 mt-1"
                                size={22}
                              />

                              <div>

                                <p className="font-black text-amber-800">
                                  Real-Life Example
                                </p>

                                <p className="mt-2 text-amber-900 leading-7">
                                  {topic.example}
                                </p>

                              </div>

                            </div>

                          </div>
                        )}

                      </div>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        </section>

        {/* ===================================================
            FORMULAS
        ==================================================== */}

        <section className="mt-16">

          <div className="flex items-center gap-3 mb-7">

            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Calculator size={27} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Formulas
              </h2>

              <p className="mt-1 text-gray-500">
                Keep these formulas ready for numerical
                problems and revision.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {chapter.formulas.map(
              (formula, index) => (

                <div
                  key={formula}
                  className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6 hover:shadow-md transition"
                >

                  <div className="flex items-start gap-4">

                    <div className="w-9 h-9 shrink-0 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-black">
                      {index + 1}
                    </div>

                    <p className="text-lg md:text-xl font-black text-purple-700 leading-relaxed">
                      {formula}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </section>

        {/* ===================================================
            LAWS & PRINCIPLES
        ==================================================== */}

        <section className="mt-16">

          <div className="flex items-center gap-3 mb-7">

            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Scale size={27} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Laws & Principles
              </h2>

              <p className="mt-1 text-gray-500">
                Important laws and principles to remember.
              </p>

            </div>

          </div>

          <div className="space-y-4">

            {chapter.laws.map(
              (law, index) => (

                <div
                  key={law}
                  className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm"
                >

                  <div className="flex items-start gap-4">

                    <div className="w-9 h-9 shrink-0 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                      {index + 1}
                    </div>

                    <p className="text-gray-700 text-base md:text-lg leading-8 font-medium">
                      {law}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </section>

        {/* ===================================================
            QUICK REVISION
        ==================================================== */}

        <section className="mt-16">

          <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-3xl p-8 md:p-10 text-white">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
                <Sparkles size={25} />
              </div>

              <div>

                <h2 className="text-2xl md:text-3xl font-black">
                  Quick Revision
                </h2>

                <p className="mt-2 text-white/85 leading-relaxed">
                  Before moving to the next chapter, quickly
                  revise these key areas.
                </p>

              </div>

            </div>

            <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

              <div className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <BookOpen size={22} />

                <p className="mt-3 font-black">
                  Concepts
                </p>

                <p className="mt-1 text-sm text-white/75">
                  {chapter.detailedTopics.length} concepts
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <Calculator size={22} />

                <p className="mt-3 font-black">
                  Formulas
                </p>

                <p className="mt-1 text-sm text-white/75">
                  {chapter.formulas.length} formulas
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <Scale size={22} />

                <p className="mt-3 font-black">
                  Laws
                </p>

                <p className="mt-1 text-sm text-white/75">
                  {chapter.laws.length} laws
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <Brain size={22} />

                <p className="mt-3 font-black">
                  Practice
                </p>

                <p className="mt-1 text-sm text-white/75">
                  {chapterQuestions.length} questions
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            PRACTICE MCQs
        ==================================================== */}

        <section className="mt-16">

          <div className="flex items-center gap-3 mb-7">

            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Trophy size={27} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Chapter Practice
              </h2>

              <p className="mt-1 text-gray-500">
                Test your understanding with quick MCQs.
              </p>

            </div>

          </div>

          {chapterQuestions.length > 0 ? (

            <div className="space-y-6">

              {chapterQuestions.map(
                (question, questionIndex) => {

                  const selected =
                    selectedAnswers[questionIndex];

                  return (
                    <div
                      key={`${question.question}-${questionIndex}`}
                      className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8"
                    >

                      <div className="flex items-start gap-4">

                        <div className="w-10 h-10 shrink-0 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black">
                          {questionIndex + 1}
                        </div>

                        <div className="flex-1">

                          <h3 className="text-lg md:text-xl font-black text-gray-900 leading-relaxed">
                            {question.question}
                          </h3>

                          <div className="mt-5 grid sm:grid-cols-2 gap-3">

                            {question.options.map(
                              (option) => {

                                const isSelected =
                                  selected === option;

                                const isCorrect =
                                  showResults &&
                                  option === question.answer;

                                const isWrong =
                                  showResults &&
                                  isSelected &&
                                  option !== question.answer;

                                let optionClass =
                                  "border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50";

                                if (
                                  isSelected &&
                                  !showResults
                                ) {
                                  optionClass =
                                    "border-blue-500 bg-blue-50 text-blue-700";
                                }

                                if (isCorrect) {
                                  optionClass =
                                    "border-green-500 bg-green-50 text-green-700";
                                }

                                if (isWrong) {
                                  optionClass =
                                    "border-red-500 bg-red-50 text-red-700";
                                }

                                return (
                                  <button
                                    key={option}
                                    type="button"
                                    disabled={showResults}
                                    onClick={() =>
                                      handleAnswer(
                                        questionIndex,
                                        option
                                      )
                                    }
                                    className={`text-left rounded-xl border p-4 font-semibold transition ${
                                      optionClass
                                    } ${
                                      showResults
                                        ? "cursor-default"
                                        : "cursor-pointer"
                                    }`}
                                  >

                                    <div className="flex items-center justify-between gap-3">

                                      <span>
                                        {option}
                                      </span>

                                      {isCorrect && (
                                        <CheckCircle2
                                          size={20}
                                          className="text-green-600 shrink-0"
                                        />
                                      )}

                                      {isWrong && (
                                        <XCircle
                                          size={20}
                                          className="text-red-600 shrink-0"
                                        />
                                      )}

                                    </div>

                                  </button>
                                );
                              }
                            )}

                          </div>

                          {showResults && (

                            <div
                              className={`mt-5 rounded-xl p-4 font-semibold ${
                                selected === question.answer
                                  ? "bg-green-50 text-green-700 border border-green-100"
                                  : "bg-red-50 text-red-700 border border-red-100"
                              }`}
                            >

                              {selected === question.answer ? (

                                <div className="flex items-center gap-2">
                                  <CheckCircle2 size={20} />
                                  Correct answer!
                                </div>

                              ) : (

                                <div>

                                  <div className="flex items-center gap-2">
                                    <XCircle size={20} />
                                    Incorrect answer.
                                  </div>

                                  <p className="mt-2">
                                    Correct answer:{" "}
                                    <span className="font-black">
                                      {question.answer}
                                    </span>
                                  </p>

                                </div>

                              )}

                            </div>

                          )}

                        </div>

                      </div>

                    </div>
                  );
                }
              )}

              {/* QUIZ CONTROLS */}

              <div className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6 md:p-8">

                {!showResults ? (

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

                    <div>

                      <p className="font-black text-gray-900">
                        {answeredCount} of{" "}
                        {chapterQuestions.length} answered
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Select an answer for every question,
                        then check your answers.
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={checkAnswers}
                      disabled={!allAnswered}
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black transition ${
                        allAnswered
                          ? "bg-orange-500 text-white hover:bg-orange-600"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <CheckCircle2 size={19} />
                      Check Answers
                    </button>

                  </div>

                ) : (

                  <div className="text-center">

                    <div className="mx-auto w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                      <Trophy size={32} />
                    </div>

                    <h3 className="mt-4 text-2xl md:text-3xl font-black text-gray-900">
                      Practice Complete!
                    </h3>

                    <p className="mt-2 text-gray-500">
                      You scored
                    </p>

                    <p className="mt-1 text-4xl font-black text-blue-600">
                      {quizScore} / {chapterQuestions.length}
                    </p>

                    <p className="mt-3 text-gray-600">
                      {quizScore === chapterQuestions.length
                        ? "Excellent! You got every question correct. 🎉"
                        : quizScore !== null &&
                          quizScore >=
                            Math.ceil(
                              chapterQuestions.length / 2
                            )
                        ? "Good work! Review the incorrect answers and try again."
                        : "Keep learning and try the practice again."}
                    </p>

                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
                    >
                      <RotateCcw size={18} />
                      Try Again
                    </button>

                  </div>

                )}

              </div>

            </div>

          ) : (

            <div className="bg-white rounded-3xl border border-gray-100 p-8 text-center">

              <div className="text-5xl">
                📝
              </div>

              <h3 className="mt-4 text-xl font-black text-gray-900">
                Practice Questions Coming Soon
              </h3>

              <p className="mt-2 text-gray-500">
                More questions will be added for this chapter.
              </p>

            </div>

          )}

        </section>

        {/* ===================================================
            CHAPTER NAVIGATION
        ==================================================== */}

        <section className="mt-16">

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ArrowRight size={23} />
              </div>

              <div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  Continue Learning
                </h2>

                <p className="text-gray-500 mt-1">
                  Continue to another Physics chapter.
                </p>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-4">

              {previousChapter ? (

                <Link
                  href={`/learn/physics/${previousChapter.id}`}
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:border-blue-300 hover:bg-blue-50 transition"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm">
                      {previousChapter.icon}
                    </div>

                    <div className="min-w-0">

                      <p className="text-xs font-black text-gray-400 uppercase">
                        Previous Chapter
                      </p>

                      <h3 className="mt-1 font-black text-gray-900 group-hover:text-blue-600">
                        {previousChapter.title}
                      </h3>

                    </div>

                    <ArrowLeft
                      size={20}
                      className="ml-auto text-gray-400 group-hover:text-blue-600 shrink-0"
                    />

                  </div>

                </Link>

              ) : (

                <Link
                  href="/learn/physics"
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:border-blue-300 hover:bg-blue-50 transition"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                      <BookOpen
                        size={22}
                        className="text-blue-600"
                      />
                    </div>

                    <div>

                      <p className="text-xs font-black text-gray-400 uppercase">
                        Back
                      </p>

                      <h3 className="mt-1 font-black text-gray-900 group-hover:text-blue-600">
                        All Physics Chapters
                      </h3>

                    </div>

                    <ArrowLeft
                      size={20}
                      className="ml-auto text-gray-400 group-hover:text-blue-600"
                    />

                  </div>

                </Link>

              )}

              {nextChapter ? (

                <Link
                  href={`/learn/physics/${nextChapter.id}`}
                  className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-5 hover:border-blue-300 hover:bg-blue-50 transition"
                >

                  <div className="flex items-center gap-4">

                    <div className="min-w-0">

                      <p className="text-xs font-black text-blue-500 uppercase">
                        Next Chapter
                      </p>

                      <h3 className="mt-1 font-black text-gray-900 group-hover:text-blue-600">
                        {nextChapter.title}
                      </h3>

                    </div>

                    <div className="ml-auto w-11 h-11 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm">
                      {nextChapter.icon}
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-blue-500 group-hover:translate-x-1 transition shrink-0"
                    />

                  </div>

                </Link>

              ) : (

                <Link
                  href="/learn/physics"
                  className="group rounded-2xl border border-green-100 bg-green-50/50 p-5 hover:border-green-300 hover:bg-green-50 transition"
                >

                  <div className="flex items-center gap-4">

                    <div>

                      <p className="text-xs font-black text-green-600 uppercase">
                        Completed
                      </p>

                      <h3 className="mt-1 font-black text-gray-900 group-hover:text-green-600">
                        All Physics Chapters
                      </h3>

                    </div>

                    <CheckCircle2
                      size={28}
                      className="ml-auto text-green-600"
                    />

                  </div>

                </Link>

              )}

            </div>

          </div>

        </section>

        {/* ===================================================
            FINAL CTA
        ==================================================== */}

        <section className="mt-12">

          <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-8 md:p-12 text-white text-center">

            <div className="mx-auto w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
              <Sparkles size={28} />
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-black">
              Keep Learning Physics 🚀
            </h2>

            <p className="mt-3 text-white/85 max-w-2xl mx-auto leading-relaxed">
              Understand the concept, revise the formulas,
              practice MCQs and continue to the next chapter.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">

              <Link
                href="/learn/physics"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-black hover:bg-gray-100 transition"
              >
                <BookOpen size={19} />
                All Physics Chapters
              </Link>

              {nextChapter && (
                <Link
                  href={`/learn/physics/${nextChapter.id}`}
                  className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-6 py-3 rounded-xl font-black hover:bg-white/25 transition"
                >
                  Next Chapter
                  <ArrowRight size={19} />
                </Link>
              )}

            </div>

          </div>

        </section>

      </section>

    </main>
  );
}
