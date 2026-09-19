
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Trophy,
} from "lucide-react";

const subjects = [
  {
    id: "computer",
    name: "Computer",
    icon: "💻",
    description:
      "Practice computer fundamentals, hardware, software, internet and technology questions.",
  },
  {
    id: "physics",
    name: "Physics",
    icon: "⚛️",
    description:
      "Test your understanding of motion, force, energy, electricity and other Physics concepts.",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "🧪",
    description:
      "Practice questions about atoms, elements, reactions, acids, bases and chemistry fundamentals.",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "📐",
    description:
      "Improve your Mathematics skills with questions from numbers, algebra, geometry and more.",
  },
  {
    id: "sanskrit",
    name: "Sanskrit",
    icon: "📜",
    description:
      "Practice Sanskrit grammar, vocabulary, literature and language concepts.",
  },
  {
    id: "gk",
    name: "General Knowledge",
    icon: "🌍",
    description:
      "Test your knowledge of general awareness and useful everyday facts.",
  },
];

export default function PracticeMCQPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-indigo-700 to-cyan-600 text-white">

        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20">

          <Link
            href="/practice"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-bold transition"
          >
            <ArrowLeft size={18} />
            Back to Practice
          </Link>

          <div className="mt-10 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-black">
              <Brain size={16} />
              PRACTICE CENTER
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              MCQ Practice
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Choose a subject and start solving multiple-choice questions.
              Practice regularly, improve your accuracy and strengthen your
              knowledge.
            </p>

          </div>

          {/* INFO */}

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-4xl">

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">

              <Brain size={24} />

              <p className="mt-3 font-black text-lg">
                MCQ Practice
              </p>

              <p className="mt-1 text-sm text-white/75">
                Subject-wise questions
              </p>

            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">

              <Clock3 size={24} />

              <p className="mt-3 font-black text-lg">
                Timed Questions
              </p>

              <p className="mt-1 text-sm text-white/75">
                60 seconds per question
              </p>

            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">

              <Trophy size={24} />

              <p className="mt-3 font-black text-lg">
                Track Your Score
              </p>

              <p className="mt-1 text-sm text-white/75">
                See your final result
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* SUBJECT SELECTION */}
      {/* ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-4 py-2 text-sm font-black">
            <BookOpen size={16} />
            CHOOSE YOUR SUBJECT
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-black text-gray-900">
            Start Your MCQ Quiz
          </h2>

          <p className="mt-3 text-gray-600 text-lg">
            Select any subject below to begin your quiz.
          </p>

        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {subjects.map((subject) => (

            <Link
              key={subject.id}
              href={`/quiz?subject=${subject.id}`}
              className="group block bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-200 overflow-hidden"
            >

              {/* CARD TOP */}

              <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-7 text-white">

                <div className="flex items-center justify-between">

                  <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-4xl">
                    {subject.icon}
                  </div>

                  <div className="text-white/80">
                    <Brain size={22} />
                  </div>

                </div>

                <h3 className="mt-6 text-2xl font-black">
                  {subject.name}
                </h3>

              </div>

              {/* CARD BODY */}

              <div className="p-7">

                <p className="text-gray-600 leading-7">
                  {subject.description}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="inline-flex items-center gap-2 text-blue-600 font-black">
                    Start Quiz
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </span>

                  <span className="text-xs font-black text-gray-400 uppercase">
                    MCQ
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* ===================================================== */}
      {/* HOW IT WORKS */}
      {/* ===================================================== */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">

          <div className="text-center">

            <p className="text-sm font-black tracking-widest text-blue-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-black text-gray-900">
              Learn • Practice • Improve
            </h2>

          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7">

              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xl">
                1
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Choose a Subject
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Select Computer, Physics, Chemistry, Mathematics, Sanskrit
                or General Knowledge.
              </p>

            </div>

            <div className="rounded-3xl bg-green-50 border border-green-100 p-7">

              <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center font-black text-xl">
                2
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Solve Questions
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Select the answer you think is correct and move through the
                questions one by one.
              </p>

            </div>

            <div className="rounded-3xl bg-orange-50 border border-orange-100 p-7">

              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-xl">
                3
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Check Your Score
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Finish the quiz and see your score on the result page.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* TRUST / FEATURE STRIP */}
      {/* ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white p-8 md:p-10">

          <div className="grid md:grid-cols-3 gap-8 items-center">

            <div>

              <div className="flex items-center gap-2 text-green-400 font-black">
                <CheckCircle2 size={20} />
                Free Student Practice
              </div>

              <p className="mt-3 text-white/70 leading-7">
                Practice your subjects without any complicated setup.
              </p>

            </div>

            <div>

              <div className="flex items-center gap-2 text-cyan-400 font-black">
                <CheckCircle2 size={20} />
                Subject-wise Learning
              </div>

              <p className="mt-3 text-white/70 leading-7">
                Focus on the subject you want to improve.
              </p>

            </div>

            <div>

              <div className="flex items-center gap-2 text-orange-400 font-black">
                <CheckCircle2 size={20} />
                Practice Regularly
              </div>

              <p className="mt-3 text-white/70 leading-7">
                Regular practice helps build confidence and accuracy.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer className="bg-gray-950 text-white mt-4">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <div className="text-4xl">
            🧠
          </div>

          <h2 className="mt-4 text-3xl font-black">
            Keep Practicing
          </h2>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto leading-7">
            Choose a subject, solve questions and keep improving your
            knowledge with Rishi Infotech.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold transition"
          >
            <ArrowLeft size={18} />
            Back to Practice Center
          </Link>

        </div>

      </footer>

    </main>
  );
}
