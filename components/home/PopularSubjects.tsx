"use client";

import Link from "next/link";
import {
  Monitor,
  Atom,
  Calculator,
  BookOpen,
  Languages,
  Brain,
  ArrowRight,
} from "lucide-react";

const subjects = [
  {
    title: "Computer",
    description: "Programming, Networking, OS, DBMS & more",
    lessons: "120+ Lessons",
    href: "/computer",
    color: "from-blue-600 to-cyan-500",
    icon: Monitor,
  },
  {
    title: "Physics",
    description: "Mechanics, Electricity, Optics & Numericals",
    lessons: "95+ Lessons",
    href: "/physics",
    color: "from-indigo-600 to-blue-500",
    icon: Atom,
  },
  {
    title: "Chemistry",
    description: "Organic, Inorganic & Physical Chemistry",
    lessons: "100+ Lessons",
    href: "/chemistry",
    color: "from-pink-600 to-red-500",
    icon: Brain,
  },
  {
    title: "Mathematics",
    description: "Algebra, Calculus, Geometry & Statistics",
    lessons: "130+ Lessons",
    href: "/mathematics",
    color: "from-green-600 to-emerald-500",
    icon: Calculator,
  },
  {
    title: "Sanskrit",
    description: "Grammar, Literature & Vocabulary",
    lessons: "60+ Lessons",
    href: "/sanskrit",
    color: "from-yellow-500 to-orange-500",
    icon: Languages,
  },
  {
    title: "General Knowledge",
    description: "Current Affairs & Competitive Exams",
    lessons: "200+ Topics",
    href: "/gk",
    color: "from-purple-600 to-fuchsia-500",
    icon: BookOpen,
  },
];

export default function PopularSubjects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest">
            Learn
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            Popular Subjects
          </h2>

          <p className="mt-5 text-gray-500 text-lg max-w-3xl mx-auto">
            Choose your favourite subject and start learning with premium
            notes, quizzes, videos and AI-powered assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <Link
                key={subject.title}
                href={subject.href}
                className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`h-44 bg-gradient-to-br ${subject.color} flex items-center justify-center`}
                >
                  <Icon
                    size={72}
                    className="text-white group-hover:scale-110 transition"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {subject.title}
                  </h3>

                  <p className="mt-3 text-gray-500 leading-7">
                    {subject.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                      {subject.lessons}
                    </span>

                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                      Explore
                      <ArrowRight size={18} />
                    </div>
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