"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  ClipboardCheck,
  Trophy,
  BookOpen,
  History,
  BarChart3,
} from "lucide-react";

const practiceOptions = [
  {
    title: "MCQ Quiz",
    description:
      "Practice multiple-choice questions across Computer, Physics, Chemistry, Mathematics, Sanskrit and General Knowledge.",
    icon: Brain,
    href: "/practice/mcq",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Mock Tests",
    description:
      "Take full-length subject tests and prepare yourself for exams with timed practice.",
    icon: ClipboardCheck,
    href: "/practice/mock-tests",
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Daily Quiz",
    description:
      "Challenge yourself with regular quizzes and improve your consistency every day.",
    icon: Trophy,
    href: "/practice/daily-quiz",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Previous Papers",
    description:
      "Practice important questions and previous examination papers to improve your preparation.",
    icon: BookOpen,
    href: "/practice/mock-tests",
    color: "from-purple-600 to-pink-500",
  },
];

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-800 via-indigo-700 to-cyan-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            ← Back to Learn
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Brain size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Practice Center
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Test your knowledge with quizzes, mock tests and regular
              practice. Learn, practice and improve every day.
            </p>

          </div>

        </div>

      </section>

      {/* PRACTICE OPTIONS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Choose Your Practice
          </h2>

          <p className="mt-3 text-gray-600">
            Select an activity and start practicing.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {practiceOptions.map((item) => {

            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition overflow-hidden"
              >

                <div
                  className={`bg-gradient-to-r ${item.color} p-8 flex justify-center`}
                >
                  <Icon
                    size={58}
                    className="text-white"
                  />
                </div>

                <div className="p-7">

                  <h3 className="text-xl font-black text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold">

                    Start Practice

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />

                  </div>

                </div>

              </Link>
            );

          })}

        </div>

      </section>

      {/* QUIZ SYSTEM */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">

              <BarChart3
                size={30}
                className="text-indigo-600"
              />

            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Track Your Progress
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Review your previous quiz attempts, check your results and
                monitor your learning progress.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <Link
                  href="/practice/mcq"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
                >
                  <Brain size={18} />
                  Start Quiz
                </Link>

                <Link
                  href="/quiz/history"
                  className="inline-flex items-center gap-2 border border-gray-200 px-5 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition"
                >
                  <History size={18} />
                  Quiz History
                </Link>

                <Link
                  href="/quiz/leaderboard"
                  className="inline-flex items-center gap-2 border border-gray-200 px-5 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition"
                >
                  <Trophy size={18} />
                  Leaderboard
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <Brain
            className="mx-auto text-cyan-400"
            size={38}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Practicing
          </h2>

          <p className="mt-3 text-gray-400">
            Regular practice is the key to better performance.
          </p>

        </div>

      </section>

    </main>
  );
}
