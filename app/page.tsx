
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
  Clock3,
  Code2,
  Cpu,
  FlaskConical,
  GraduationCap,
  Heart,
  Languages,
  Library,
  Lightbulb,
  Microscope,
  PlayCircle,
  Rocket,
  School,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Wrench,
  Zap,
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
  { name: "Bhagavad Gita", href: "#bhagavad-gita", type: "Wisdom" },
  { name: "Ramayan", href: "#ramayan", type: "Indian Epic" },
  { name: "Books", href: "#books-wisdom", type: "Books" },
];

const popularSearches = [
  { name: "Computer", href: "/learn/computer", icon: Cpu },
  { name: "Physics", href: "/learn/physics", icon: Microscope },
  { name: "Chemistry", href: "/learn/chemistry", icon: FlaskConical },
  { name: "Mathematics", href: "/learn/mathematics", icon: Calculator },
  { name: "Practice", href: "/practice", icon: Trophy },
  { name: "AI Hub", href: "/dictionary", icon: Bot },
  { name: "Bhagavad Gita", href: "#bhagavad-gita", icon: Sparkles },
  { name: "Ramayan", href: "#ramayan", icon: Heart },
];

const categories = [
  {
    title: "AI Tools",
    description:
      "Explore useful AI-powered learning and productivity resources.",
    href: "/dictionary",
    icon: Bot,
    label: "AI & TECHNOLOGY",
    number: "01",
  },
  {
    title: "Calculator",
    description:
      "Useful calculators and study tools for everyday learning.",
    href: "/calculator",
    icon: Calculator,
    label: "STUDY TOOLS",
    number: "02",
  },
  {
    title: "Computer",
    description:
      "Computer basics, hardware, software, networking and security.",
    href: "/learn/computer",
    icon: Cpu,
    label: "COMPUTER",
    number: "03",
  },
  {
    title: "Physics",
    description:
      "Learn concepts, formulas and important physics topics.",
    href: "/learn/physics",
    icon: Microscope,
    label: "SCIENCE",
    number: "04",
  },
  {
    title: "Chemistry",
    description:
      "Build strong chemistry fundamentals with structured learning.",
    href: "/learn/chemistry",
    icon: FlaskConical,
    label: "SCIENCE",
    number: "05",
  },
  {
    title: "Mathematics",
    description:
      "Practice mathematics concepts and improve problem solving.",
    href: "/learn/mathematics",
    icon: Calculator,
    label: "MATHEMATICS",
    number: "06",
  },
  {
    title: "Sanskrit",
    description:
      "Learn Sanskrit concepts, chapters and educational resources.",
    href: "/learn/sanskrit",
    icon: Languages,
    label: "LANGUAGE",
    number: "07",
  },
  {
    title: "Developer Tools",
    description:
      "Practical tools for students, developers and technology learners.",
    href: "/developer-hub",
    icon: Code2,
    label: "DEVELOPER",
    number: "08",
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
    href: "/dictionary",
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

const studentBenefits = [
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
    id: "bhagavad-gita",
    title: "Bhagavad Gita",
    subtitle: "Wisdom for life",
    description:
      "Explore selected chapters and practical reflections on duty, discipline, knowledge and balance.",
    label: "WISDOM",
    number: "01",
    href: "/books/bhagavad-gita",
    icon: Sparkles,
    className:
      "from-amber-50 via-white to-orange-50 border-amber-200",
    iconClass: "bg-amber-500 text-white",
    textClass: "text-amber-700",
  },
  {
    id: "ramayan",
    title: "Ramayan",
    subtitle: "Stories & character",
    description:
      "Discover important stories and values such as courage, friendship, devotion, leadership and duty.",
    label: "INDIAN EPIC",
    number: "02",
    href: "/books/ramayan",
    icon: Heart,
    className:
      "from-rose-50 via-white to-orange-50 border-rose-200",
    iconClass: "bg-rose-600 text-white",
    textClass: "text-rose-700",
  },
  {
    id: "educational-books",
    title: "Educational Books",
    subtitle: "Learn & explore",
    description:
      "Explore school subjects, notes, chapters, practice material and useful educational resources.",
    label: "EDUCATION",
    number: "03",
    href: "#educational-books",
    icon: GraduationCap,
    className:
      "from-blue-50 via-white to-cyan-50 border-blue-200",
    iconClass: "bg-blue-600 text-white",
    textClass: "text-blue-700",
  },
];

const stats = [
  {
    number: "9+",
    label: "Learning Chapters",
    icon: BookOpen,
  },
  {
    number: "50+",
    label: "Topics",
    icon: Brain,
  },
  {
    number: "100+",
    label: "Practice Questions",
    icon: Trophy,
  },
  {
    number: "FREE",
    label: "Student Learning",
    icon: Heart,
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredResults = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return [];

    return searchItems.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.type.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="festival-home relative overflow-x-hidden bg-white text-slate-950">

      <FestivalAnnouncement />
{/* ======================================================= */}
<div className="relative z-10">

        {/* ===================================================== */}
        {/* TRICOLOUR TOP STRIP */}
        {/* ===================================================== */}

        <div className="h-1.5 flex">
          <div className="w-1/3 bg-orange-500" />
          <div className="w-1/3 bg-white" />
          <div className="w-1/3 bg-green-600" />
        </div>

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="relative overflow-hidden bg-white">

          {/* Soft Indian tricolour atmosphere */}

          <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />
          <div className="pointer-events-none absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-green-100/70 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16 lg:py-20">

            <div className="grid items-center gap-10 lg:grid-cols-[220px_minmax(0,1fr)_260px]">

              {/* ================================================= */}
              {/* FOUNDER / BRAND */}
              {/* ================================================= */}

              <div className="order-2 lg:order-1">

                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5">

                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600" />

                  <div className="flex items-center gap-3">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-white to-green-600 p-[2px]">

                      <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-blue-900 text-lg font-black text-white">
                        RI
                      </div>

                    </div>

                    <div className="min-w-0">

                      <p className="text-[10px] font-black tracking-[0.18em] text-slate-400">
                        EDUCATION PLATFORM
                      </p>

                      <p className="mt-1 truncate text-sm font-black text-blue-900">
                        RISHI INFOTECH
                      </p>

                    </div>

                  </div>

                  <div className="mt-7">

                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-black tracking-wider text-orange-700">
                      <Star size={12} />
                      FOUNDER & EDUCATOR
                    </div>

                    <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                      Praveen Mishra
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Building accessible learning resources for students,
                      schools and technology learners.
                    </p>

                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                        <Heart size={18} />
                      </div>

                      <div>

                        <p className="text-[10px] font-black tracking-widest text-slate-400">
                          OUR MISSION
                        </p>

                        <p className="mt-1 text-sm font-black text-slate-800">
                          Knowledge for everyone
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* ================================================= */}
              {/* MAIN HERO */}
              {/* ================================================= */}

              <div className="order-1 min-w-0 text-center lg:order-2">

                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-blue-800 shadow-sm">
                  <Sparkles size={14} />
                  FREE LEARNING PLATFORM FOR STUDENTS
                </div>

                <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl xl:text-[4.4rem]">

                  Learn today.

                  <span className="block text-blue-900">
                    Build your future.
                  </span>

                  <span className="relative inline-block text-slate-950">

                    Grow with confidence.

                    <span className="absolute -bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 via-blue-700 to-green-600" />

                  </span>

                </h1>

                <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                  Learn school subjects, practice questions, explore
                  technology and discover useful educational resources —
                  all in one student-friendly platform.
                </p>

                {/* SEARCH */}

                <div className="relative mx-auto mt-8 max-w-2xl text-left">

                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-blue-900/10 transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50 md:px-5 md:py-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Search size={20} />
                    </div>

                    <input
                      value={search}
                      onChange={(event) =>
                        setSearch(event.target.value)
                      }
                      placeholder="Search subjects, tools, practice..."
                      className="min-w-0 w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400 md:text-base"
                    />

                    <div className="hidden shrink-0 rounded-lg bg-slate-50 px-3 py-2 text-[10px] font-black tracking-wider text-slate-400 sm:block">
                      SEARCH
                    </div>

                  </div>

                  {search.trim() && (
                    <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

                      {filteredResults.length > 0 ? (

                        filteredResults.slice(0, 7).map((item) => (

                          <Link
                            key={`${item.name}-${item.href}`}
                            href={item.href}
                            onClick={() => setSearch("")}
                            className="flex items-center justify-between gap-4 border-b border-slate-50 px-5 py-4 transition last:border-0 hover:bg-blue-50"
                          >

                            <div className="min-w-0">

                              <p className="truncate font-black text-slate-800">
                                {item.name}
                              </p>

                              <p className="mt-1 text-xs font-semibold text-slate-400">
                                {item.type}
                              </p>

                            </div>

                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                              <ArrowUpRight size={16} />
                            </div>

                          </Link>

                        ))

                      ) : (

                        <div className="px-5 py-7 text-center">

                          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
                            <Search size={18} />
                          </div>

                          <p className="mt-3 font-black text-slate-700">
                            No matching resource found
                          </p>

                          <p className="mt-1 text-sm text-slate-400">
                            Try Computer, Physics, Practice or AI.
                          </p>

                        </div>

                      )}

                    </div>
                  )}

                </div>

                {/* TRUST BADGES */}

                <div className="mt-6 flex flex-wrap justify-center gap-2.5">

                  <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3.5 py-2 text-xs font-bold text-green-700">
                    <ShieldCheck size={14} />
                    Student Friendly
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3.5 py-2 text-xs font-bold text-orange-700">
                    <Award size={14} />
                    Free Resources
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700">
                    <School size={14} />
                    School Ready
                  </div>

                </div>

                {/* ACTIONS */}

                <div className="mt-7 flex flex-wrap justify-center gap-3">

                  <Link
                    href="/learn"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-950"
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

                </div>

              </div>

              {/* ================================================= */}
              {/* KNOWLEDGE CARD */}
              {/* ================================================= */}

              <div className="order-3">

                <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-green-50 p-5 shadow-xl shadow-blue-900/5">

                  <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-green-100/60 blur-2xl" />

                  <div className="relative">

                    <div className="flex items-center justify-between gap-3">

                      <div>

                        <p className="text-[10px] font-black tracking-[0.16em] text-blue-600">
                          KNOWLEDGE HUB
                        </p>

                        <p className="mt-1 text-lg font-black text-slate-900">
                          Learn • Practice • Grow
                        </p>

                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white shadow-sm">
                        <BookOpen size={19} />
                      </div>

                    </div>

                    <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

                      <div className="flex h-32 items-end justify-center gap-2">

                        <div className="flex h-24 w-14 -rotate-6 items-end justify-center rounded-lg border border-orange-200 bg-orange-100 pb-3 shadow-sm">
                          <BookMarked className="text-orange-600" size={25} />
                        </div>

                        <div className="z-10 flex h-28 w-16 items-end justify-center rounded-lg border border-blue-200 bg-blue-100 pb-3 shadow-md">
                          <GraduationCap className="text-blue-700" size={32} />
                        </div>

                        <div className="flex h-24 w-14 rotate-6 items-end justify-center rounded-lg border border-green-200 bg-green-100 pb-3 shadow-sm">
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

                  </div>

                </div>

              </div>

            </div>

            {/* POPULAR SEARCHES */}

            <div className="mt-10 border-t border-slate-100 pt-7 text-center">

              <p className="text-[10px] font-black tracking-[0.2em] text-slate-400">
                POPULAR SEARCHES
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">

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

        </section>

        {/* ===================================================== */}
        {/* STATS */}
        {/* ===================================================== */}

        <section className="border-y border-slate-100 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6 py-8">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

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
                    className="rounded-2xl bg-white border border-slate-200 p-5 flex items-center gap-4"
                  >

                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconClass}`}
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

        <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

            <div>

              <p className="text-xs font-black tracking-widest text-orange-600">
                HOW TO BEGIN
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-950">
                Choose your learning path
              </h2>

              <p className="mt-3 max-w-2xl text-slate-500">
                Start with what you need today and continue building
                your knowledge step by step.
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

          <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

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
                  className="group rounded-3xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition"
                >

                  <div className="flex items-center justify-between">

                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconClass}`}
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
                      className="group-hover:translate-x-1 transition"
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

            {/* SECTION HEADER */}

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
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-blue-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md md:self-auto"
              >
                Explore learning
                <ArrowRight size={17} />
              </Link>

            </div>

            {/* CATEGORY GRID */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {categories.map((category, index) => {

                const Icon = category.icon;

                const styles = [
                  {
                    icon: "bg-orange-50 text-orange-600",
                    badge: "bg-orange-50 text-orange-700 border-orange-100",
                    line: "bg-orange-500",
                    glow: "group-hover:shadow-orange-100/70",
                  },
                  {
                    icon: "bg-blue-50 text-blue-700",
                    badge: "bg-blue-50 text-blue-700 border-blue-100",
                    line: "bg-blue-600",
                    glow: "group-hover:shadow-blue-100/70",
                  },
                  {
                    icon: "bg-green-50 text-green-600",
                    badge: "bg-green-50 text-green-700 border-green-100",
                    line: "bg-green-600",
                    glow: "group-hover:shadow-green-100/70",
                  },
                  {
                    icon: "bg-amber-50 text-amber-600",
                    badge: "bg-amber-50 text-amber-700 border-amber-100",
                    line: "bg-amber-500",
                    glow: "group-hover:shadow-amber-100/70",
                  },
                ][index % 4];

                return (
                  <Link
                    key={category.title}
                    href={category.href}
                    className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-2xl ${styles.glow}`}
                  >

                    {/* TOP ACCENT */}

                    <div
                      className={`absolute left-0 right-0 top-0 h-1 ${styles.line}`}
                    />

                    {/* NUMBER */}

                    <div className="flex items-start justify-between">

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles.icon} transition duration-300 group-hover:scale-105`}
                      >
                        <Icon size={27} />
                      </div>

                      <span className="text-3xl font-black tracking-tight text-slate-100 transition group-hover:text-slate-200">
                        {category.number}
                      </span>

                    </div>

                    {/* CATEGORY LABEL */}

                    <div className="mt-6">

                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-black tracking-[0.14em] ${styles.badge}`}
                      >
                        {category.label}
                      </span>

                    </div>

                    {/* TITLE */}

                    <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950 md:text-2xl">
                      {category.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                      {category.description}
                    </p>

                    {/* LINK */}

                    <div className="mt-6 flex items-center justify-between">

                      <span className="inline-flex items-center gap-2 text-sm font-black text-blue-900">
                        Open resource
                        <ArrowUpRight
                          size={16}
                          className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </span>

                      <div className="h-2 w-2 rounded-full bg-slate-200 transition group-hover:bg-blue-600" />

                    </div>

                  </Link>
                );

              })}

            </div>

            {/* SMALL TRUST LINE */}

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

        <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20">

          {/* SOFT TRICOLOUR GLOW */}

          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">

            {/* SECTION HEADER */}

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

              <div className="max-w-3xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-black tracking-widest text-green-700">
                  <Sparkles size={14} />
                  LATEST UPDATES
                </div>

                <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-slate-950">
                  Keep learning.
                  <span className="block text-blue-800">
                    Keep moving forward.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-base md:text-lg leading-8 text-slate-500">
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

            {/* UPDATE CARDS */}

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

                    {/* TOP ACCENT */}

                    <div
                      className={`absolute left-0 right-0 top-0 h-1 ${accent.line}`}
                    />

                    {/* ICON + TAG */}

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

                    {/* CONTENT */}

                    <h3 className="mt-6 text-xl font-black text-slate-950">
                      {update.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                      {update.description}
                    </p>

                    {/* ACTION */}

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                      <span className="text-sm font-black text-blue-800">
                        Explore resource
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-blue-800 transition group-hover:bg-blue-800 group-hover:text-white">
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-0.5"
                        />
                      </span>

                    </div>

                  </Link>
                );

              })}

            </div>

            {/* TRUST LINE */}

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-slate-200 pt-7 text-xs font-bold text-slate-400">

              <div className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-green-600" />
                Student-friendly resources
              </div>

              <div className="inline-flex items-center gap-2">
                <ShieldCheck size={15} className="text-blue-600" />
                Easy to explore
              </div>

              <div className="inline-flex items-center gap-2">
                <Heart size={15} className="text-orange-500" />
                Built for students
              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* WHY STUDENTS */}
        {/* ===================================================== */}

        <section className="relative overflow-hidden bg-white py-16 md:py-20">

          <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">

            <div className="why-students-panel overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 shadow-xl">

              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                {/* LEFT MESSAGE */}

                <div className="relative p-8 md:p-12 lg:p-14">

                  <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/10" />
                  <div className="absolute right-14 top-14 h-12 w-12 rounded-full border border-white/10" />

                  <div className="relative">

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black tracking-widest text-white">
                      <Star size={15} className="text-orange-300" />
                      BUILT FOR STUDENTS
                    </div>

                    <h2 className="mt-7 text-3xl md:text-5xl font-black leading-tight text-white">

                      Learning should feel

                      <span className="block text-orange-300">
                        simple and useful.
                      </span>

                    </h2>

                    <p className="mt-5 max-w-xl text-base md:text-lg leading-8 text-blue-100">
                      Rishi Infotech Learning Hub brings study material,
                      practice, technology and useful resources together
                      so students can learn without unnecessary complexity.
                    </p>

                    {/* APPROACH / FOCUS */}

                    <div className="mt-9 grid sm:grid-cols-2 gap-3">

                      <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">

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

                      <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">

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

                {/* RIGHT BENEFITS */}

                <div className="bg-white p-8 md:p-12 lg:p-14">

                  <div className="mb-7">

                    <p className="text-xs font-black tracking-widest text-blue-700">
                      WHY IT HELPS
                    </p>

                    <h3 className="mt-2 text-2xl md:text-3xl font-black text-slate-950">
                      A better way to learn
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Simple features designed around everyday student needs.
                    </p>

                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">

                    {studentBenefits.map((benefit, index) => {

                      const Icon = benefit.icon;

                      const styles =
                        index === 0
                          ? {
                              icon: "bg-orange-50 text-orange-600",
                              number: "bg-orange-50 text-orange-700",
                            }
                          : index === 1
                          ? {
                              icon: "bg-blue-50 text-blue-700",
                              number: "bg-blue-50 text-blue-700",
                            }
                          : index === 2
                          ? {
                              icon: "bg-green-50 text-green-700",
                              number: "bg-green-50 text-green-700",
                            }
                          : {
                              icon: "bg-amber-50 text-amber-700",
                              number: "bg-amber-50 text-amber-700",
                            };

                      return (
                        <div
                          key={benefit.title}
                          className="group rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                        >

                          <div className="flex items-start justify-between gap-4">

                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
                            >
                              <Icon size={21} />
                            </div>

                            <span
                              className={`flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[10px] font-black ${styles.number}`}
                            >
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



        {/* ===================================================== */}
        {/* BOOKS & WISDOM */}
        {/* ===================================================== */}

        <section
          id="books-wisdom"
          className="relative overflow-hidden border-y border-orange-100 bg-gradient-to-br from-orange-50/70 via-white to-green-50/70"
        >

          {/* SOFT BACKGROUND DETAILS */}

          <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">

            {/* HEADER */}

            <div className="mx-auto max-w-3xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-black tracking-widest text-orange-700 shadow-sm">
                <Sparkles size={15} />
                BOOKS & WISDOM
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-slate-950">
                Learn beyond the classroom.
              </h2>

              <p className="mt-4 text-base md:text-lg leading-8 text-slate-500">
                Education is not only about examinations. Explore stories,
                values, wisdom and meaningful resources that encourage
                thoughtful learning.
              </p>

            </div>

            {/* BOOK CARDS */}

            <div className="mt-10 grid gap-6 lg:grid-cols-3">

              {books.map((book, index) => {

                const Icon = book.icon;

                const accent =
                  index % 3 === 0
                    ? {
                        top: "bg-orange-500",
                        icon: "bg-orange-50 text-orange-600",
                        number: "text-orange-600",
                        button: "text-orange-700 hover:bg-orange-50",
                      }
                    : index % 3 === 1
                    ? {
                        top: "bg-blue-700",
                        icon: "bg-blue-50 text-blue-700",
                        number: "text-blue-700",
                        button: "text-blue-700 hover:bg-blue-50",
                      }
                    : {
                        top: "bg-green-600",
                        icon: "bg-green-50 text-green-700",
                        number: "text-green-700",
                        button: "text-green-700 hover:bg-green-50",
                      };

                return (
                  <div
                    key={book.id}
                    id={book.id}
                    className={`group relative overflow-hidden scroll-mt-24 rounded-3xl border bg-gradient-to-br p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${book.className}`}
                  >

                    {/* TOP ACCENT */}

                    <div
                      className={`absolute left-0 right-0 top-0 h-1 ${accent.top}`}
                    />

                    <div className="flex items-start justify-between gap-4">

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon}`}
                      >
                        <Icon size={28} />
                      </div>

                      <span
                        className={`text-xs font-black tracking-widest ${accent.number}`}
                      >
                        {book.number}
                      </span>

                    </div>

                    <p
                      className={`book-card-label mt-7 text-xs font-black tracking-widest ${book.textClass}`}
                    >
                      {book.label}
                    </p>

                    <h3 className="book-card-title mt-2 text-2xl font-black">
                      {book.title}
                    </h3>

                    <p
                      className={`book-card-subtitle mt-1 font-bold ${book.textClass}`}
                    >
                      {book.subtitle}
                    </p>

                    <p className="book-card-description mt-4 min-h-[84px] text-sm leading-7">
                      {book.description}
                    </p>

                    {/* BOOK ACTION */}

                    {book.href.startsWith("/") ? (

                      <Link
                        href={book.href}
                        className={`mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black shadow-sm transition hover:shadow-md ${accent.button}`}
                      >
                        Explore
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </Link>

                    ) : (

                      <a
                        href={book.href}
                        className={`mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black shadow-sm transition hover:shadow-md ${accent.button}`}
                      >
                        Explore
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </a>

                    )}

                  </div>
                );

              })}

            </div>

            {/* EDUCATIONAL RESOURCES */}

            <div
              id="educational-books"
              className="scroll-mt-24 mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >

              <div className="grid lg:grid-cols-[1fr_auto] items-center gap-6 p-7 md:p-9">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <BookMarked size={25} />
                  </div>

                  <div>

                    <p className="text-xs font-black tracking-widest text-blue-700">
                      EDUCATIONAL RESOURCES
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-950">
                      Continue your learning journey
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm md:text-base leading-7 text-slate-500">
                      Explore available subjects, chapters and practice
                      resources through the main learning centre.
                    </p>

                  </div>

                </div>

                <Link
                  href="/learn"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-800 px-5 py-3 font-black text-white shadow-sm transition hover:bg-blue-900 hover:shadow-lg"
                >
                  Browse Learning
                  <ArrowRight size={17} />
                </Link>

              </div>

              {/* TRICOLOUR DETAIL */}

              <div className="flex h-1">
                <div className="w-1/3 bg-orange-500" />
                <div className="w-1/3 bg-white" />
                <div className="w-1/3 bg-green-600" />
              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* PRACTICE CENTER */}
        {/* ===================================================== */}

        <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <div className="rounded-[2rem] bg-slate-950 text-white overflow-hidden">

            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

              <div className="p-8 md:p-12">

                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs font-black">
                  <Trophy size={15} />
                  PRACTICE CENTER
                </div>

                <h2 className="mt-6 text-3xl md:text-5xl font-black leading-tight">

                  Learn it.

                  <span className="block text-orange-400">
                    Practice it.
                  </span>

                  Remember it.

                </h2>

                <p className="mt-5 text-slate-400 leading-8">
                  Regular practice helps students check their understanding
                  and identify topics that need more attention.
                </p>

                <Link
                  href="/practice"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition"
                >
                  Open Practice Center
                  <ArrowRight size={18} />
                </Link>

              </div>

              <div className="bg-slate-900 p-8 md:p-12">

                <div className="grid sm:grid-cols-2 gap-4">

                  <Link
                    href="/practice/mcq"
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                  >
                    <Trophy className="text-orange-400" size={25} />

                    <h3 className="mt-5 font-black text-lg">
                      MCQ Practice
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Test concepts with multiple-choice questions.
                    </p>
                  </Link>

                  <Link
                    href="/practice/mock-tests"
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                  >
                    <Target className="text-green-400" size={25} />

                    <h3 className="mt-5 font-black text-lg">
                      Mock Tests
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Practice with longer test-style sessions.
                    </p>
                  </Link>

                  <Link
                    href="/quiz"
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                  >
                    <Brain className="text-blue-400" size={25} />

                    <h3 className="mt-5 font-black text-lg">
                      Quiz
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Challenge yourself with subject quizzes.
                    </p>
                  </Link>

                  <Link
                    href="/daily-challenge"
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                  >
                    <Zap className="text-yellow-400" size={25} />

                    <h3 className="mt-5 font-black text-lg">
                      Daily Challenge
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Make learning a daily habit.
                    </p>
                  </Link>

                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="flex items-center justify-between">

                    <p className="font-black">
                      Keep improving
                    </p>

                    <span className="text-xs text-slate-400">
                      DAILY PRACTICE
                    </span>

                  </div>

                  <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-orange-400 via-white to-green-500" />
                  </div>

                  <div className="mt-3 flex justify-between text-xs text-slate-500">
                    <span>Learn</span>
                    <span>Practice</span>
                    <span>Improve</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* SCHOOL MISSION */}
        {/* ===================================================== */}

        <section className="bg-slate-50 border-y border-slate-100">

          <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

            <div className="grid lg:grid-cols-2 gap-8 items-center">

              <div>

                <p className="text-xs font-black tracking-widest text-orange-600">
                  OUR MISSION
                </p>

                <h2 className="mt-3 text-3xl md:text-5xl font-black leading-tight">

                  Free and useful education

                  <span className="block text-blue-800">
                    for every student.
                  </span>

                </h2>

                <p className="mt-5 text-slate-500 leading-8 max-w-xl">
                  The vision behind Rishi Infotech Learning Hub is to
                  make quality educational resources easier to access.
                  The platform is designed to support students,
                  teachers and schools with practical digital learning.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-3">
                    <CheckCircle2
                      className="text-green-600"
                      size={20}
                    />
                    <span className="font-bold text-slate-700">
                      Accessible resources
                    </span>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-3">
                    <CheckCircle2
                      className="text-green-600"
                      size={20}
                    />
                    <span className="font-bold text-slate-700">
                      Student focused
                    </span>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-3">
                    <CheckCircle2
                      className="text-green-600"
                      size={20}
                    />
                    <span className="font-bold text-slate-700">
                      Technology enabled
                    </span>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-3">
                    <CheckCircle2
                      className="text-green-600"
                      size={20}
                    />
                    <span className="font-bold text-slate-700">
                      Built for growth
                    </span>
                  </div>

                </div>

              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 md:p-9 shadow-xl shadow-blue-900/5">

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-blue-800 text-white flex items-center justify-center font-black text-xl">
                    RI
                  </div>

                  <div>

                    <p className="text-xs font-black tracking-widest text-blue-700">
                      RISHI INFOTECH
                    </p>

                    <h3 className="mt-1 text-2xl font-black">
                      Learning for the future
                    </h3>

                  </div>

                </div>

                <div className="school-mission-highlight mt-8 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-green-50 border border-slate-100 p-6">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                      <Lightbulb size={22} />
                    </div>

                    <p className="font-black text-slate-900">
                      Education + Technology
                    </p>

                  </div>

                  <p className="mt-5 text-slate-600 leading-7">
                    Students should have access to clear explanations,
                    useful tools, practice opportunities and resources
                    that help them become independent learners.
                  </p>

                </div>

                <div className="mt-6 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                    <Users size={20} />
                  </div>

                  <div>

                    <p className="font-black text-slate-800">
                      Designed with schools in mind
                    </p>

                    <p className="text-sm text-slate-400">
                      A platform built to grow with learners.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* SAVE WATER • SAVE LIFE • SAVE BOYS */}
        {/* ===================================================== */}

        <section className="border-y border-green-100 bg-gradient-to-r from-green-50 via-white to-orange-50">

          <div className="max-w-7xl mx-auto px-6 py-8">

            <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8">

              <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-center">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-3xl">
                    💧
                  </span>
                </div>

                <div>

                  <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">

                    <p className="text-lg md:text-2xl font-black tracking-wide text-blue-800">
                      SAVE WATER
                    </p>

                    <span className="text-slate-300 font-black">
                      •
                    </span>

                    <p className="text-lg md:text-2xl font-black tracking-wide text-green-700">
                      SAVE LIFE
                    </p>

                    <span className="text-slate-300 font-black">
                      •
                    </span>

                    <p className="text-lg md:text-2xl font-black tracking-wide text-orange-600">
                      SAVE BOYS
                    </p>

                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    Protect water, protect life, protect our future.
                  </p>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                  <span className="text-3xl">
                    🌱
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* FUTURE VISION */}
        {/* ===================================================== */}

        <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <div className="rounded-[2rem] border border-green-100 bg-gradient-to-r from-green-50 via-white to-blue-50 p-8 md:p-12">

            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-green-200 px-4 py-2 text-xs font-black text-green-700">
                  <Rocket size={15} />
                  FUTURE VISION
                </div>

                <h2 className="mt-5 text-3xl md:text-5xl font-black text-slate-950">

                  From one learning hub

                  <span className="block text-blue-800">
                    to many schools.
                  </span>

                </h2>

                <p className="mt-4 max-w-3xl text-slate-500 leading-8">
                  The long-term vision is to make this platform useful
                  for students and educational communities across many
                  schools, with practical learning resources that are
                  simple to access and easy to understand.
                </p>

              </div>

              <div className="w-28 h-28 rounded-3xl bg-white border border-slate-200 shadow-lg flex items-center justify-center">

                <School
                  size={48}
                  className="text-blue-800"
                />

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* FINAL CTA */}
        {/* ===================================================== */}

        <section className="px-6 pb-16 md:pb-20">

          <div className="max-w-7xl mx-auto rounded-[2rem] bg-blue-800 text-white overflow-hidden">

            <div className="relative p-8 md:p-14 text-center">

              <div className="absolute inset-0 opacity-20">

                <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-orange-400 blur-3xl" />

                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-green-400 blur-3xl" />

              </div>

              <div className="relative">

                <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <GraduationCap size={30} />
                </div>

                <h2 className="mt-6 text-3xl md:text-5xl font-black">
                  Ready to start learning?
                </h2>

                <p className="mt-4 max-w-2xl mx-auto text-blue-100 leading-7">
                  Choose a subject, practice a quiz, explore technology
                  or discover something new today.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">

                  <Link
                    href="/learn"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-800 px-6 py-3.5 font-black hover:bg-slate-100 transition"
                  >
                    Start Learning
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/practice"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-black text-white hover:bg-white/20 transition"
                  >
                    Practice Now
                    <Trophy size={18} />
                  </Link>

                  <a
                    href="#books-wisdom"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-black text-white hover:bg-white/20 transition"
                  >
                    Explore Books
                    <BookOpen size={18} />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* BOTTOM TRICOLOUR STRIP */}
        {/* ===================================================== */}

        <div className="h-2 flex">

          <div className="w-1/3 bg-orange-500" />

          <div className="w-1/3 bg-white border-y border-slate-100" />

          <div className="w-1/3 bg-green-600" />

        </div>

      </div>

    </main>
  );
}
