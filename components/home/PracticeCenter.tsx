"use client";

import Link from "next/link";
import {
  CircleHelp,
  ClipboardCheck,
  FileText,
  CalendarDays,
  Layers3,
  Trophy,
  ArrowRight,
} from "lucide-react";

const practice = [
  {
    title: "MCQ Practice",
    description: "Thousands of chapter-wise MCQs with instant results.",
    icon: CircleHelp,
    href: "/practice/mcq",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Mock Tests",
    description: "Full-length exams with score analysis.",
    icon: ClipboardCheck,
    href: "/practice/mock-tests",
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Previous Papers",
    description: "Download previous year solved question papers.",
    icon: FileText,
    href: "/practice/previous-papers",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Daily Quiz",
    description: "Daily quiz to improve your knowledge.",
    icon: CalendarDays,
    href: "/practice/daily-quiz",
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Flash Cards",
    description: "Memorize formulas and concepts quickly.",
    icon: Layers3,
    href: "/practice/flashcards",
    color: "from-indigo-600 to-blue-600",
  },
  {
    title: "Leaderboard",
    description: "Compete with students across India.",
    icon: Trophy,
    href: "/practice/leaderboard",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function PracticeCenter() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-cyan-400 font-bold uppercase tracking-widest">
            Practice Center
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Practice Makes Perfect
          </h2>

          <p className="mt-5 text-slate-300 text-lg max-w-3xl mx-auto">
            Test your knowledge with quizzes, mock tests, previous papers,
            flashcards and compete with other students.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {practice.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-7">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-cyan-300 font-semibold group-hover:gap-4 transition-all">
                  Start Practice
                  <ArrowRight size={18} />
                </div>

              </Link>

            );

          })}

        </div>

      </div>
    </section>
  );
}