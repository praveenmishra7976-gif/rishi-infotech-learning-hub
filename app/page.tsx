"use client";

import FestivalAnnouncement from "./components/FestivalAnnouncement";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookMarked,
  BookOpen,
  Bot,
  Brain,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  Cpu,
  FlaskConical,
  GraduationCap,
  Heart,
  Languages,
  Library,
  Lightbulb,
  Mail,
  Microscope,
  PlayCircle,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

type SearchItem = {
  name: string;
  href: string;
  type: string;
};

const searchItems: SearchItem[] = [
  { name: "Computer", href: "/learn/computer", type: "Subject" },
  { name: "Physics", href: "/learn/physics", type: "Subject" },
  { name: "Chemistry", href: "/learn/chemistry", type: "Subject" },
  { name: "Mathematics", href: "/learn/mathematics", type: "Subject" },
  { name: "Sanskrit", href: "/learn/sanskrit", type: "Subject" },
  { name: "AI Hub", href: "/dictionary", type: "Technology" },
  { name: "Developer Hub", href: "/developer-hub", type: "Technology" },
  { name: "Practice", href: "/practice", type: "Practice" },
  { name: "Notes", href: "/learn", type: "Study" },
  { name: "Calculator", href: "/calculator", type: "Tools" },
  { name: "Daily Challenge", href: "/daily-challenge", type: "Practice" },
  { name: "Quiz", href: "/quiz", type: "Practice" },
  { name: "Bhagavad Gita", href: "/books/bhagavad-gita", type: "Wisdom" },
  { name: "Ramayan", href: "/books/ramayan", type: "Wisdom" },
];

const popularSearches = [
  { name: "Computer", href: "/learn/computer", icon: Cpu },
  { name: "Physics", href: "/learn/physics", icon: Microscope },
  { name: "Chemistry", href: "/learn/chemistry", icon: FlaskConical },
  { name: "Mathematics", href: "/learn/mathematics", icon: Calculator },
  { name: "Practice", href: "/practice", icon: Trophy },
  { name: "AI Hub", href: "/dictionary", icon: Bot },
  { name: "Bhagavad Gita", href: "/books/bhagavad-gita", icon: Sparkles },
  { name: "Ramayan", href: "/books/ramayan", icon: Heart },
];

const stats = [
  {
    number: "5+",
    label: "Learning Subjects",
    icon: GraduationCap,
  },
  {
    number: "30+",
    label: "Useful Tools",
    icon: Wrench,
  },
  {
    number: "100+",
    label: "Practice Resources",
    icon: Trophy,
  },
  {
    number: "24×7",
    label: "Learning Access",
    icon: Clock3,
  },
];

const categories = [
  {
    title: "AI Tools",
    description:
      "Explore useful AI-powered learning and productivity resources.",
    href: "/dictionary",
    icon: Bot,
    label: "AI & TECHNOLOGY",
    accent: "orange",
  },
  {
    title: "Calculator",
    description:
      "Useful calculators and study tools for everyday learning.",
    href: "/calculator",
    icon: Calculator,
    label: "STUDY TOOLS",
    accent: "blue",
  },
  {
    title: "Computer",
    description:
      "Computer basics, hardware, software, networking and security.",
    href: "/learn/computer",
    icon: Cpu,
    label: "COMPUTER",
    accent: "green",
  },
  {
    title: "Physics",
    description:
      "Learn concepts, formulas and important physics topics.",
    href: "/learn/physics",
    icon: Microscope,
    label: "SCIENCE",
    accent: "amber",
  },
  {
    title: "Chemistry",
    description:
      "Build strong chemistry fundamentals with structured learning.",
    href: "/learn/chemistry",
    icon: FlaskConical,
    label: "SCIENCE",
    accent: "orange",
  },
  {
    title: "Mathematics",
    description:
      "Practice mathematics concepts and improve problem solving.",
    href: "/learn/mathematics",
    icon: Calculator,
    label: "MATHEMATICS",
    accent: "blue",
  },
  {
    title: "Sanskrit",
    description:
      "Learn Sanskrit concepts, chapters and educational resources.",
    href: "/learn/sanskrit",
    icon: Languages,
    label: "LANGUAGE",
    accent: "green",
  },
  {
    title: "Developer Tools",
    description:
      "Practical tools for students, developers and technology learners.",
    href: "/developer-hub",
    icon: Code2,
    label: "DEVELOPER",
    accent: "amber",
  },
];

const updates = [
  {
    title: "Computer Learning",
    description:
      "Learn computer basics, hardware, software, internet and cyber security.",
    href: "/learn/computer",
    icon: Cpu,
    tag: "LEARNING",
  },
  {
    title: "Practice Center",
    description:
      "Test your knowledge with MCQs, quizzes and regular practice.",
    href: "/practice",
    icon: Trophy,
    tag: "PRACTICE",
  },
  {
    title: "AI Hub",
    description:
      "Discover AI resources and practical technology tools.",
    href: "/dictionary",
    icon: Bot,
    tag: "TECHNOLOGY",
  },
  {
    title: "Developer Hub",
    description:
      "Useful coding, security, formatting and developer utilities.",
    href: "/developer-hub",
    icon: Wrench,
    tag: "TOOLS",
  },
];

const learningPaths = [
  {
    title: "Start Learning",
    description:
      "Build your foundation with school subjects and structured chapters.",
    href: "/learn",
    icon: BookOpen,
    tag: "FOUNDATION",
  },
  {
    title: "Practice Daily",
    description:
      "Strengthen concepts through MCQs, quizzes and mock tests.",
    href: "/practice",
    icon: Target,
    tag: "PRACTICE",
  },
  {
    title: "Explore Technology",
    description:
      "Discover AI, computers, coding and useful technology resources.",
    href: "/developer-hub",
    icon: Rocket,
    tag: "TECHNOLOGY",
  },
  {
    title: "Read & Reflect",
    description:
      "Explore books, wisdom, stories and values beyond examinations.",
    href: "#books-wisdom",
    icon: Library,
    tag: "WISDOM",
  },
];

const benefits = [
  {
    title: "Learn at your own pace",
    text:
      "Study concepts whenever you have time and return to difficult topics whenever needed.",
    icon: Clock3,
  },
  {
    title: "Practice what you learn",
    text:
      "Use questions and quizzes to turn passive reading into active learning.",
    icon: Target,
  },
  {
    title: "Build modern skills",
    text:
      "Learn computers, AI, development and technology alongside school subjects.",
    icon: Code2,
  },
  {
    title: "Grow with confidence",
    text:
      "Regular learning and practice can help students become confident problem solvers.",
    icon: Trophy,
  },
];

const books = [
  {
    title: "Bhagavad Gita",
    subtitle: "Wisdom for life",
    description:
      "Explore practical reflections on duty, discipline, knowledge and balance.",
    href: "/books/bhagavad-gita",
    icon: Sparkles,
    tone: "orange",
  },
  {
    title: "Ramayan",
    subtitle: "Stories & values",
    description:
      "Read meaningful stories and explore timeless lessons in an accessible format.",
    href: "/books/ramayan",
    icon: BookMarked,
    tone: "green",
  },
  {
    title: "Learning Library",
    subtitle: "More resources",
    description:
      "Keep exploring subjects, notes, practice resources and educational content.",
    href: "/learn",
    icon: Library,
    tone: "blue",
  },
];

const testimonials = [
  {
    name: "Ankit",
    role: "Student",
    initials: "A",
    text:
      "The notes and practice quizzes are easy to understand. Everything feels organised in one place.",
  },
  {
    name: "Priya",
    role: "Student",
    initials: "P",
    text:
      "I like the combination of study material, practice and technology resources. It saves time.",
  },
  {
    name: "Rahul",
    role: "Learner",
    initials: "R",
    text:
      "The learning sections and tools make revision much easier, especially when I want quick practice.",
  },
];

const faqItems = [
  {
    question: "What can I learn on Rishi Infotech Learning Hub?",
    answer:
      "You can explore Computer, Physics, Chemistry, Mathematics, Sanskrit, practice resources, useful tools and technology learning.",
  },
  {
    question: "Is the learning material free?",
    answer:
      "The platform is designed around accessible learning resources. Many learning and practice features are available without a paid membership.",
  },
  {
    question: "Can I practice quizzes and MCQs?",
    answer:
      "Yes. You can use the Practice Center, quizzes, MCQs and mock tests to reinforce what you learn.",
  },
  {
    question: "Can I use the website on mobile?",
    answer:
      "Yes. The homepage and learning sections are designed to work across mobile, tablet and desktop screens.",
  },
];

function accentClasses(accent: string) {
  switch (accent) {
    case "orange":
      return {
        icon: "bg-orange-50 text-orange-600",
        badge: "border-orange-100 bg-orange-50 text-orange-700",
        line: "bg-orange-500",
      };
    case "green":
      return {
        icon: "bg-green-50 text-green-700",
        badge: "border-green-100 bg-green-50 text-green-700",
        line: "bg-green-600",
      };
    case "amber":
      return {
        icon: "bg-amber-50 text-amber-700",
        badge: "border-amber-100 bg-amber-50 text-amber-700",
        line: "bg-amber-500",
      };
    default:
      return {
        icon: "bg-blue-50 text-blue-700",
        badge: "border-blue-100 bg-blue-50 text-blue-700",
        line: "bg-blue-700",
      };
  }
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredResults = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return [];
    }

    return searchItems
      .filter((item) => {
        return (
          item.name.toLowerCase().includes(value) ||
          item.type.toLowerCase().includes(value)
        );
      })
      .slice(0, 8);
  }, [query]);

  function handleSearchSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (filteredResults[0]) {
      window.location.href = filteredResults[0].href;
      return;
    }

    setShowResults(true);
  }

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <FestivalAnnouncement />

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-10 md:pb-16 md:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr_0.9fr]">
            {/* FOUNDER / IDENTITY CARD */}
            <div className="order-2 lg:order-1">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-600 text-2xl font-black text-white shadow-lg">
                    RI
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                      Founder & Learning Vision
                    </p>
                    <h2 className="mt-1 text-xl font-black text-slate-950">
                      Praveen Mishra
                    </h2>
                    <p className="text-sm font-semibold text-blue-700">
                      Rishi Infotech
                    </p>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="mt-0.5 shrink-0 text-orange-500" size={20} />
                    <p className="text-sm leading-6 text-slate-600">
                      Learning should be accessible, practical and useful
                      for students at every step.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                    <p className="text-2xl font-black text-blue-900">
                      Free
                    </p>
                    <p className="mt-1 text-xs font-bold text-blue-600">
                      Learning focus
                    </p>
                  </div>

                  <div className="rounded-2xl border border-green-100 bg-green-50 p-4">
                    <p className="text-2xl font-black text-green-700">
                      India
                    </p>
                    <p className="mt-1 text-xs font-bold text-green-600">
                      Student-first
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN HERO */}
            <div className="order-1 lg:order-2">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-800">
                  <Sparkles size={14} />
                  India's Learning & Technology Hub
                </div>

                <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-6xl lg:text-[4.7rem] lg:leading-[1.02]">
                  Learn.
                  <span className="block text-blue-800">
                    Practice.
                  </span>
                  <span className="block text-orange-500">
                    Build Your Future.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                  Learn everything in one place with school subjects,
                  practice resources, AI tools, developer utilities and
                  meaningful educational content.
                </p>

                {/* SEARCH */}
                <div className="relative mt-8">
                  <form
                    onSubmit={handleSearchSubmit}
                    className="flex rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60"
                  >
                    <div className="flex items-center px-3 text-slate-400">
                      <Search size={21} />
                    </div>

                    <input
                      value={query}
                      onChange={(event) => {
                        setQuery(event.target.value);
                        setShowResults(true);
                      }}
                      onFocus={() => setShowResults(true)}
                      placeholder="Search notes, subjects, quizzes, tools..."
                      className="min-w-0 flex-1 bg-transparent px-2 py-3.5 text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400 md:text-base"
                    />

                    <button
                      type="submit"
                      className="rounded-xl bg-blue-800 px-5 py-3.5 text-sm font-black text-white transition hover:bg-blue-900 md:px-7"
                    >
                      Search
                    </button>
                  </form>

                  {showResults && query.trim() && (
                    <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                      {filteredResults.length ? (
                        filteredResults.map((item) => (
                          <Link
                            key={`${item.name}-${item.href}`}
                            href={item.href}
                            className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 transition last:border-b-0 hover:bg-blue-50"
                            onClick={() => setShowResults(false)}
                          >
                            <div>
                              <p className="font-black text-slate-900">
                                {item.name}
                              </p>
                              <p className="text-xs font-bold text-slate-400">
                                {item.type}
                              </p>
                            </div>

                            <ArrowUpRight
                              size={18}
                              className="text-blue-700"
                            />
                          </Link>
                        ))
                      ) : (
                        <div className="px-5 py-5">
                          <p className="font-black text-slate-800">
                            No matching resource found
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Try Computer, Physics, Practice, AI or Calculator.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Free Learning",
                    "Interactive Practice",
                    "Technology Resources",
                    "Student Friendly",
                  ].map((item, index) => (
                    <span
                      key={item}
                      className={`rounded-full px-3.5 py-2 text-xs font-black ${
                        index % 4 === 0
                          ? "bg-orange-50 text-orange-700"
                          : index % 4 === 1
                          ? "bg-blue-50 text-blue-700"
                          : index % 4 === 2
                          ? "bg-green-50 text-green-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/learn"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-800 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-800/20 transition hover:-translate-y-0.5 hover:bg-blue-900"
                  >
                    Start Learning
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    href="/practice"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-900"
                  >
                    Practice Now
                    <PlayCircle size={17} />
                  </Link>

                  <Link
                    href="/premium"
                    className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-6 py-3.5 text-sm font-black text-amber-700 transition hover:-translate-y-0.5 hover:bg-amber-100"
                  >
                    Premium
                    <Star size={17} />
                  </Link>
                </div>
              </div>

              {/* POPULAR SEARCHES */}
              <div className="mt-8 border-t border-slate-100 pt-7">
                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400">
                  POPULAR SEARCHES
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {popularSearches.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                      >
                        <Icon size={14} />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* KNOWLEDGE ILLUSTRATION */}
            <div className="order-3">
              <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-green-50 p-5 shadow-xl shadow-blue-900/5">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-100/70 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-orange-100/70 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black tracking-[0.16em] text-blue-600">
                        KNOWLEDGE HUB
                      </p>
                      <p className="mt-1 text-lg font-black text-slate-900">
                        Learn • Practice • Grow
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-white shadow-sm">
                      <BookOpen size={19} />
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex h-32 items-end justify-center gap-2">
                      <div className="-rotate-6 flex h-24 w-14 items-end justify-center rounded-lg border border-orange-200 bg-orange-100 pb-3 shadow-sm">
                        <BookMarked className="text-orange-600" size={25} />
                      </div>

                      <div className="z-10 flex h-28 w-16 items-end justify-center rounded-lg border border-blue-200 bg-blue-100 pb-3 shadow-md">
                        <GraduationCap className="text-blue-700" size={32} />
                      </div>

                      <div className="rotate-6 flex h-24 w-14 items-end justify-center rounded-lg border border-green-200 bg-green-100 pb-3 shadow-sm">
                        <Library className="text-green-600" size={25} />
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <p className="text-sm font-black text-slate-800">
                        One place for learning
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Subjects • Tools • Practice • Wisdom
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm">
                      <p className="text-xl font-black text-blue-900">
                        5+
                      </p>
                      <p className="mt-0.5 text-[11px] font-bold text-slate-400">
                        Subjects
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm">
                      <p className="text-xl font-black text-green-600">
                        30+
                      </p>
                      <p className="mt-0.5 text-[11px] font-bold text-slate-400">
                        Tools
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl border border-blue-100 bg-blue-900 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-blue-200" size={20} />
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-blue-200">
                          STUDENT FOCUS
                        </p>
                        <p className="mt-0.5 text-sm font-bold">
                          Learn • Practice • Improve
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* STATS */}
      {/* ===================================================== */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-7">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              const iconClass =
                index === 0
                  ? "bg-orange-50 text-orange-600"
                  : index === 1
                  ? "bg-blue-50 text-blue-700"
                  : index === 2
                  ? "bg-green-50 text-green-600"
                  : "bg-rose-50 text-rose-600";

              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
                  >
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="text-2xl font-black text-slate-900">
                      {stat.number}
                    </p>
                    <p className="text-xs font-bold text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* LEARNING PATHS */}
      {/* ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black tracking-widest text-orange-600">
              HOW TO BEGIN
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
              Choose your learning path
            </h2>

            <p className="mt-3 max-w-2xl text-slate-500">
              Start with what you need today and keep building your
              knowledge step by step.
            </p>
          </div>

          <Link
            href="/learn"
            className="inline-flex items-center gap-2 font-black text-blue-800 hover:text-blue-600"
          >
            Explore learning
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {learningPaths.map((item, index) => {
            const Icon = item.icon;

            const iconClass =
              index === 0
                ? "bg-blue-50 text-blue-700"
                : index === 1
                ? "bg-orange-50 text-orange-600"
                : index === 2
                ? "bg-green-50 text-green-600"
                : "bg-amber-50 text-amber-600";

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass}`}
                  >
                    <Icon size={25} />
                  </div>

                  <span className="text-xs font-black text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-6 text-xs font-black tracking-widest text-slate-400">
                  {item.tag}
                </p>

                <h3 className="mt-2 text-xl font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-black text-blue-800">
                  Explore
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===================================================== */}
      {/* EXPLORE CATEGORIES */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden border-y border-slate-100 bg-slate-50">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-black tracking-[0.16em] text-blue-700 shadow-sm">
                <BookOpen size={13} />
                EXPLORE THE PLATFORM
              </div>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                Everything students need to learn
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                Explore school subjects, practical tools and technology
                resources — organised in one simple learning experience.
              </p>
            </div>

            <Link
              href="/learn"
              className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-blue-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              Explore learning
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const styles = accentClasses(category.accent);

              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-2xl"
                >
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 ${styles.line}`}
                  />

                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles.icon} transition group-hover:scale-105`}
                    >
                      <Icon size={27} />
                    </div>

                    <span className="text-3xl font-black tracking-tight text-slate-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-6">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-black tracking-[0.14em] ${styles.badge}`}
                    >
                      {category.label}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950 md:text-2xl">
                    {category.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-black text-blue-900">
                      Open resource
                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>

                    <div className="h-2 w-2 rounded-full bg-slate-200 transition group-hover:bg-blue-600" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-slate-200 pt-7 text-xs font-bold text-slate-400">
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={15} className="text-green-600" />
              Student-friendly resources
            </div>

            <div className="inline-flex items-center gap-2">
              <ShieldCheck size={15} className="text-blue-600" />
              Simple learning experience
            </div>

            <div className="inline-flex items-center gap-2">
              <Heart size={15} className="text-orange-500" />
              Built for learning
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* LATEST UPDATES */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-black tracking-widest text-green-700">
                <Sparkles size={14} />
                LATEST UPDATES
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Keep learning.
                <span className="block text-blue-800">
                  Keep moving forward.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                Discover useful learning resources, practice activities
                and technology tools designed to help students learn
                something valuable every day.
              </p>
            </div>

            <Link
              href="/learn"
              className="group inline-flex w-fit items-center gap-2 rounded-xl bg-blue-800 px-5 py-3 font-black text-white shadow-sm transition hover:bg-blue-900 hover:shadow-lg"
            >
              View all learning
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {updates.map((update, index) => {
              const Icon = update.icon;

              const accent =
                index % 4 === 0
                  ? {
                      icon: "bg-orange-50 text-orange-600",
                      line: "bg-orange-500",
                      badge: "bg-orange-50 text-orange-700",
                    }
                  : index % 4 === 1
                  ? {
                      icon: "bg-blue-50 text-blue-700",
                      line: "bg-blue-700",
                      badge: "bg-blue-50 text-blue-700",
                    }
                  : index % 4 === 2
                  ? {
                      icon: "bg-green-50 text-green-700",
                      line: "bg-green-600",
                      badge: "bg-green-50 text-green-700",
                    }
                  : {
                      icon: "bg-indigo-50 text-indigo-700",
                      line: "bg-indigo-600",
                      badge: "bg-indigo-50 text-indigo-700",
                    };

              return (
                <Link
                  key={update.title}
                  href={update.href}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 ${accent.line}`}
                  />

                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.icon}`}
                    >
                      <Icon size={24} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black tracking-widest ${accent.badge}`}
                    >
                      {update.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {update.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                    {update.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-black text-blue-800">
                      Explore resource
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-blue-800 transition group-hover:bg-blue-800 group-hover:text-white">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* WHY STUDENTS */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20">
        <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 shadow-xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative p-8 md:p-12 lg:p-14">
                <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/10" />
                <div className="absolute right-14 top-14 h-12 w-12 rounded-full border border-white/10" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black tracking-widest text-white">
                    <Star size={15} className="text-orange-300" />
                    BUILT FOR STUDENTS
                  </div>

                  <h2 className="mt-7 text-3xl font-black leading-tight text-white md:text-5xl">
                    Learning should feel
                    <span className="block text-orange-300">
                      simple and useful.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-8 text-blue-100 md:text-lg">
                    Study material, practice, technology and useful resources
                    come together in one focused learning experience.
                  </p>

                  <div className="mt-9 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/15 text-orange-300">
                          <BookOpen size={20} />
                        </div>

                        <div>
                          <p className="text-[10px] font-black tracking-widest text-blue-200">
                            APPROACH
                          </p>

                          <p className="mt-1 font-black text-white">
                            Learn + Practice
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/15 text-green-300">
                          <CheckCircle2 size={20} />
                        </div>

                        <div>
                          <p className="text-[10px] font-black tracking-widest text-blue-200">
                            FOCUS
                          </p>

                          <p className="mt-1 font-black text-white">
                            Understanding
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 lg:p-14">
                <div className="mb-7">
                  <p className="text-xs font-black tracking-widest text-blue-700">
                    WHY IT HELPS
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
                    A better way to learn
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Simple features designed around everyday student needs.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;

                    const iconClass =
                      index === 0
                        ? "bg-orange-50 text-orange-600"
                        : index === 1
                        ? "bg-blue-50 text-blue-700"
                        : index === 2
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700";

                    return (
                      <div
                        key={benefit.title}
                        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
                          >
                            <Icon size={21} />
                          </div>

                          <span className="text-xs font-black text-slate-300">
                            0{index + 1}
                          </span>
                        </div>

                        <h4 className="mt-5 text-lg font-black text-slate-950">
                          {benefit.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {benefit.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* BOOKS & WISDOM */}
      {/* ===================================================== */}
      <section
        id="books-wisdom"
        className="relative overflow-hidden border-y border-orange-100 bg-gradient-to-br from-orange-50/70 via-white to-green-50/70"
      >
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-black tracking-widest text-orange-700 shadow-sm">
              <Sparkles size={15} />
              BOOKS & WISDOM
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Learn beyond the classroom.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-500 md:text-lg">
              Education is not only about examinations. Explore stories,
              values, wisdom and meaningful resources that encourage
              thoughtful learning.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {books.map((book, index) => {
              const Icon = book.icon;

              const tone =
                book.tone === "orange"
                  ? {
                      icon: "bg-orange-100 text-orange-700",
                      badge: "bg-orange-50 text-orange-700",
                    }
                  : book.tone === "green"
                  ? {
                      icon: "bg-green-100 text-green-700",
                      badge: "bg-green-50 text-green-700",
                    }
                  : {
                      icon: "bg-blue-100 text-blue-700",
                      badge: "bg-blue-50 text-blue-700",
                    };

              return (
                <Link
                  key={book.title}
                  href={book.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tone.icon}`}
                    >
                      <Icon size={27} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black tracking-widest ${tone.badge}`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-black tracking-widest text-slate-400">
                    {book.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-slate-950">
                    {book.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {book.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-blue-800">
                    Explore book
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* TESTIMONIALS */}
      {/* ===================================================== */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-widest text-blue-700">
              STUDENT REVIEWS
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Loved by learners
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-500">
              A simple learning experience designed around clarity,
              practice and useful resources.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <div className="flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className="fill-current"
                    />
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  “{item.text}”
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-black text-white ${
                      index === 0
                        ? "bg-blue-700"
                        : index === 1
                        ? "bg-purple-600"
                        : "bg-green-600"
                    }`}
                  >
                    {item.initials}
                  </div>

                  <div>
                    <h3 className="font-black text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-sm font-semibold text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FAQ */}
      {/* ===================================================== */}
      <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-widest text-orange-600">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Questions, answered.
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-base font-black text-slate-900 md:text-lg">
                    {item.question}
                  </h3>

                  <ChevronDown
                    size={20}
                    className="shrink-0 text-slate-400 transition group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-500">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* NEWSLETTER */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 text-white md:py-20">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-orange-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
            <Mail size={34} />
          </div>

          <h2 className="mt-7 text-3xl font-black md:text-5xl">
            Stay Updated
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
            Keep up with new Notes, tools, learning resources,
            quiz updates and courses.
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none"
            />

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-black text-white transition hover:bg-orange-600"
            >
              Subscribe
              <ArrowRight size={17} />
            </button>
          </div>

          <p className="mt-4 text-xs font-semibold text-blue-200">
            Useful updates. No unnecessary clutter.
          </p>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}
      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-sm font-black text-white">
                  RI
                </div>

                <div>
                  <p className="font-black text-white">
                    Rishi Infotech
                  </p>

                  <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                    Learning Hub
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                Free education for students with learning resources,
                practice opportunities and useful technology tools.
              </p>
            </div>

            <div>
              <h3 className="font-black text-white">
                Learn
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  href="/learn/computer"
                  className="block hover:text-white"
                >
                  Computer
                </Link>
                <Link
                  href="/learn/physics"
                  className="block hover:text-white"
                >
                  Physics
                </Link>
                <Link
                  href="/learn/chemistry"
                  className="block hover:text-white"
                >
                  Chemistry
                </Link>
                <Link
                  href="/learn/mathematics"
                  className="block hover:text-white"
                >
                  Mathematics
                </Link>
                <Link
                  href="/learn/sanskrit"
                  className="block hover:text-white"
                >
                  Sanskrit
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-black text-white">
                Practice & Tools
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  href="/practice"
                  className="block hover:text-white"
                >
                  Practice
                </Link>
                <Link
                  href="/quiz"
                  className="block hover:text-white"
                >
                  Quiz
                </Link>
                <Link
                  href="/daily-challenge"
                  className="block hover:text-white"
                >
                  Daily Challenge
                </Link>
                <Link
                  href="/dictionary"
                  className="block hover:text-white"
                >
                  AI Hub
                </Link>
                <Link
                  href="/developer-hub"
                  className="block hover:text-white"
                >
                  Developer Hub
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-black text-white">
                Website
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  href="/blog"
                  className="block hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  href="/courses"
                  className="block hover:text-white"
                >
                  Courses
                </Link>
                <Link
                  href="/contact"
                  className="block hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/premium"
                  className="block hover:text-white"
                >
                  Premium
                </Link>
                <Link
                  href="/profile"
                  className="block hover:text-white"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Rishi Infotech Learning Hub.
              All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <span>Free Education for Students</span>
              <span>•</span>
              <span>Learn • Practice • Grow</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
