"use client";

import Link from "next/link";
import {
  Brain,
  Trophy,
  ClipboardCheck,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const practice = [
  {
    title: "MCQ Quiz",
    desc: "Practice chapter-wise MCQs with instant results.",
    icon: Brain,
    color: "from-blue-600 to-cyan-500",
    href: "/practice/mcq",
  },
  {
    title: "Mock Tests",
    desc: "Full-length mock exams with score analysis.",
    icon: ClipboardCheck,
    color: "from-green-600 to-emerald-500",
    href: "/practice/mock-tests",
  },
  {
    title: "Daily Quiz",
    desc: "Attempt daily quizzes and improve consistency.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    href: "/quiz",
  },
  {
    title: "Previous Papers",
    desc: "Download and solve previous year question papers.",
    icon: BookOpen,
    color: "from-purple-600 to-pink-500",
    href: "/practice/mock-tests",
  },
];

export default function PracticeCenter() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-bold uppercase tracking-widest">
            Practice Center
          </span>

          <h2 className="text-5xl font-black mt-3 text-slate-900">
            Test Your Knowledge
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Improve your skills with quizzes, mock tests and previous papers.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {practice.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl bg-slate-50 border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition overflow-hidden"
              >

                <div
                  className={`bg-gradient-to-r ${item.color} p-8 flex justify-center`}
                >
                  <Icon size={60} className="text-white" />
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center text-blue-600 font-semibold">

                    Start Practice

                    <ArrowRight
                      className="ml-2 group-hover:translate-x-2 transition"
                      size={18}
                    />

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}