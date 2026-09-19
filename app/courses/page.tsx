"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Atom,
  Calculator,
  Monitor,
  Languages,
  Bot,
} from "lucide-react";

const courses = [
  {
    title: "Computer Fundamentals",
    icon: Monitor,
    emoji: "💻",
    desc: "Computer Fundamentals, Hardware, Software, Internet, Cyber Security and MCQs.",
    href: "/learn/computer",
    color: "blue",
  },
  {
    title: "Physics Complete Guide",
    icon: Atom,
    emoji: "⚛️",
    desc: "Physics concepts, chapters, formulas, laws, examples and practice questions.",
    href: "/learn/physics",
    color: "cyan",
  },
  {
    title: "Chemistry Complete Guide",
    icon: FlaskIcon,
    emoji: "🧪",
    desc: "Atoms, molecules, reactions, periodic table, organic chemistry and more.",
    href: "/learn/chemistry",
    color: "purple",
  },
  {
    title: "Mathematics Complete Guide",
    icon: Calculator,
    emoji: "📐",
    desc: "Mathematics concepts, formulas, examples, tricks and practice questions.",
    href: "/learn/mathematics",
    color: "green",
  },
  {
    title: "Sanskrit Complete Guide",
    icon: Languages,
    emoji: "📖",
    desc: "Sanskrit grammar, translation, literature, exercises and important topics.",
    href: "/learn/sanskrit",
    color: "orange",
  },
  
];

function FlaskIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontSize: size,
        lineHeight: 1,
      }}
    >
      🧪
    </span>
  );
}

const colorClasses: Record<
  string,
  {
    bg: string;
    iconBg: string;
    iconText: string;
    button: string;
    buttonHover: string;
  }
> = {
  blue: {
    bg: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100",
    iconText: "text-blue-700",
    button: "bg-blue-600",
    buttonHover: "hover:bg-blue-700",
  },
  cyan: {
    bg: "from-cyan-50 to-blue-50",
    iconBg: "bg-cyan-100",
    iconText: "text-cyan-700",
    button: "bg-cyan-600",
    buttonHover: "hover:bg-cyan-700",
  },
  purple: {
    bg: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-100",
    iconText: "text-purple-700",
    button: "bg-purple-600",
    buttonHover: "hover:bg-purple-700",
  },
  green: {
    bg: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconText: "text-green-700",
    button: "bg-green-600",
    buttonHover: "hover:bg-green-700",
  },
  orange: {
    bg: "from-orange-50 to-yellow-50",
    iconBg: "bg-orange-100",
    iconText: "text-orange-700",
    button: "bg-orange-600",
    buttonHover: "hover:bg-orange-700",
  },
  pink: {
    bg: "from-pink-50 to-purple-50",
    iconBg: "bg-pink-100",
    iconText: "text-pink-700",
    button: "bg-pink-600",
    buttonHover: "hover:bg-pink-700",
  },
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
            <BookOpen size={18} />
            Rishi Infotech Learning Hub
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-black">
            Our Courses
          </h1>

          <p className="mt-5 max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
            Learn Computer, Physics, Chemistry, Mathematics, Sanskrit and
            Artificial Intelligence with structured study materials,
            chapters and practice resources.
          </p>

        </div>
      </section>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Explore Courses
          </h2>

          <p className="mt-2 text-gray-600">
            Select a course to start learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {courses.map((course) => {
            const colors = colorClasses[course.color];
            const Icon = course.icon;

            return (
              <div
                key={course.title}
                className={`bg-gradient-to-br ${colors.bg} rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-7`}
              >

                {/* ICON */}
                <div className="flex items-start justify-between">

                  <div
                    className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center`}
                  >
                    {course.title.includes("Chemistry") ? (
                      <span className="text-4xl">
                        {course.emoji}
                      </span>
                    ) : (
                      <Icon
                        size={32}
                        className={colors.iconText}
                      />
                    )}
                  </div>

                  <span className="text-3xl">
                    {course.emoji}
                  </span>

                </div>

                {/* CONTENT */}
                <h3 className="mt-6 text-2xl font-black text-gray-900">
                  {course.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed min-h-[80px]">
                  {course.desc}
                </p>

                {/* BUTTON */}
                <Link
                  href={course.href}
                  className={`mt-6 w-full inline-flex items-center justify-center gap-2 ${colors.button} ${colors.buttonHover} text-white px-6 py-3.5 rounded-xl font-bold transition`}
                >
                  Start Learning
                  <ArrowRight size={18} />
                </Link>

              </div>
            );
          })}

        </div>

      </section>

      {/* INFO */}
      <section className="bg-white border-y border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="rounded-2xl bg-blue-50 p-6">
              <BookOpen className="text-blue-600" size={30} />

              <h3 className="mt-4 text-xl font-black text-gray-900">
                Structured Learning
              </h3>

              <p className="mt-2 text-gray-600">
                Study subjects through organized chapters and topics.
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-6">
              <Calculator className="text-green-600" size={30} />

              <h3 className="mt-4 text-xl font-black text-gray-900">
                Practice
              </h3>

              <p className="mt-2 text-gray-600">
                Improve your preparation with formulas, MCQs and practice.
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-6">
              <Bot className="text-purple-600" size={30} />

              <h3 className="mt-4 text-xl font-black text-gray-900">
                AI Learning
              </h3>

              <p className="mt-2 text-gray-600">
                Use modern AI tools to make learning easier and faster.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
