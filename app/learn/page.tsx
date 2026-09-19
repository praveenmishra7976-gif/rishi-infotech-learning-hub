"use client";

import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BookOpen,
  Calculator,
  Code2,
  FlaskConical,
  Globe,
  Languages,
  Sparkles,
  Trophy,
} from "lucide-react";

const subjects = [
  {
    id: "physics",
    title: "Physics",
    description:
      "Learn motion, force, work, energy, heat, light, electricity, magnetism and modern physics.",
    icon: "⚛️",
    color: "blue",
    chapters: "11 Chapters",
    href: "/learn/physics",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description:
      "Study atoms, molecules, elements, compounds, reactions, acids, bases, metals and more.",
    icon: "🧪",
    color: "green",
    chapters: "15 Chapters",
    href: "/learn/chemistry",
  },
  {
    id: "mathematics",
    title: "Mathematics",
    description:
      "Learn numbers, algebra, geometry, mensuration, statistics, probability and important formulas.",
    icon: "📐",
    color: "purple",
    chapters: "12 Chapters",
    href: "/learn/mathematics",
  },
  {
    id: "sanskrit",
    title: "Sanskrit",
    description:
      "Learn Sanskrit grammar, vocabulary, sentences, literature, shlokas and important concepts.",
    icon: "📜",
    color: "orange",
    chapters: "18 Chapters",
    href: "/learn/sanskrit",
  },
  {
    id: "computer",
    title: "Computer",
    description:
      "Learn computer fundamentals, hardware, software, internet, networking, cybersecurity and technology.",
    icon: "💻",
    color: "cyan",
    chapters: "15+ Chapters",
    href: "/learn/computer",
  },
  {
    id: "general-knowledge",
    title: "General Knowledge",
    description:
      "Explore Indian GK, world GK, history, geography, polity, science, sports and current affairs.",
    icon: "🌍",
    color: "red",
    chapters: "10+ Sections",
    href: "/learn/general-knowledge",
  },
];

const formulas = [
  {
    title: "Physics",
    formula: "F = ma",
    icon: "⚛️",
  },
  {
    title: "Chemistry",
    formula: "H₂O",
    icon: "🧪",
  },
  {
    title: "Mathematics",
    formula: "a² + b² = c²",
    icon: "📐",
  },
  {
    title: "Computer",
    formula: "Binary: 0 & 1",
    icon: "💻",
  },
];

const features = [
  {
    title: "Chapter-wise Learning",
    description:
      "Study every subject chapter by chapter with simple explanations.",
    icon: BookOpen,
  },
  {
    title: "Important Formulas",
    description:
      "Quickly revise important formulas, laws and key concepts.",
    icon: Calculator,
  },
  {
    title: "Practice Questions",
    description:
      "Test your knowledge with MCQs and practice questions.",
    icon: Trophy,
  },
  {
    title: "Learn Technology",
    description:
      "Build computer and technology knowledge from basic to advanced.",
    icon: Code2,
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
            <Sparkles size={17} />
            Rishi Infotech Learning Hub
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
            Learn Everything
            <br />
            In One Place
          </h1>

          <p className="mt-5 max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
            Explore Physics, Chemistry, Mathematics, Sanskrit, Computer
            and General Knowledge with chapter-wise notes, formulas,
            concepts and practice questions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#subjects"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3.5 rounded-xl font-black hover:bg-gray-100 transition"
            >
              Start Learning
              <ArrowRight size={19} />
            </a>

            <Link
              href="/practice"
              className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-6 py-3.5 rounded-xl font-black hover:bg-white/20 transition"
            >
              Practice MCQs
              <Trophy size={19} />
            </Link>

          </div>

        </div>

      </section>

      {/* SUBJECTS */}

      <section
        id="subjects"
        className="max-w-7xl mx-auto px-6 py-14"
      >

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-blue-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Explore Subjects
            </h2>

            <p className="text-gray-500 mt-1">
              Choose a subject and start learning.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {subjects.map((subject) => (

            <Link
              key={subject.id}
              href={subject.href}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl">
                  {subject.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {subject.chapters}
                </span>

              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900 group-hover:text-blue-600 transition">
                {subject.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {subject.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-blue-600 font-black">
                Open Subject
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </span>

            </Link>

          ))}

        </div>

      </section>

      {/* QUICK REVISION */}

      <section className="bg-white border-y">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Calculator
              className="text-purple-600"
              size={34}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Quick Revision
              </h2>

              <p className="text-gray-500 mt-1">
                Important formulas and concepts at a glance.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {formulas.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-blue-50 hover:border-blue-200 transition"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-xl font-black text-blue-600">
                  {item.formula}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-black">
            LEARNING FEATURES
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
            Everything You Need to Learn
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            A simple and organized learning experience for students.
          </p>

        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm"
              >

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon
                    className="text-blue-600"
                    size={25}
                  />
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );

          })}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">

        <div className="max-w-5xl mx-auto px-6 py-14 text-center">

          <Sparkles
            className="mx-auto text-cyan-200"
            size={40}
          />

          <h2 className="mt-5 text-3xl md:text-5xl font-black">
            Start Your Learning Journey
          </h2>

          <p className="mt-4 text-white/90 text-lg">
            Choose a subject, open a chapter and learn something new today.
          </p>

          <a
            href="#subjects"
            className="mt-7 inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-4 rounded-xl font-black hover:bg-gray-100 transition"
          >
            Explore Subjects
            <ArrowRight size={19} />
          </a>

        </div>

      </section>

    </main>
  );
}