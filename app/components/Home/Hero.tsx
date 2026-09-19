"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  Code2,
  Search,
  Sparkles,
  Trophy,
} from "lucide-react";
import { useState } from "react";

const suggestions = [
  "Computer",
  "Physics",
  "Chemistry",
  "Mathematics",
  "Sanskrit",
  "AI Hub",
  "Developer Hub",
  "Practice",
  "Notes",
];

const suggestionLinks: Record<string, string> = {
  Computer: "/learn/computer",
  Physics: "/learn/physics",
  Chemistry: "/learn/chemistry",
  Mathematics: "/learn/mathematics",
  Sanskrit: "/learn/sanskrit",
  "AI Hub": "/dictionary",
  "Developer Hub": "/developer-hub",
  Practice: "/practice",
  Notes: "/learn",
};

export default function Hero() {
  const [search, setSearch] = useState("");

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.35),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(6,182,212,0.28),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(79,70,229,0.25),transparent_35%)]" />

      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:px-8">

        {/* Top badge */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-blue-100 shadow-lg backdrop-blur-xl">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20">
              <Sparkles size={14} className="text-cyan-300" />
            </span>

            India's Learning & Technology Hub

          </div>

        </div>

        {/* Main */}

        <div className="mx-auto mt-9 max-w-5xl text-center">

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">

            Learn.
            <span className="text-cyan-300"> Practice.</span>
            <br />

            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
              Build Your Future.
            </span>

          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Welcome to{" "}
            <span className="font-bold text-white">
              Rishi Infotech Learning Hub
            </span>{" "}
            — a free learning platform for students to learn subjects,
            practice questions, explore technology and build real-world
            skills.
          </p>

          {/* Kalam quote */}

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-5 shadow-xl backdrop-blur-xl">

            <div className="flex items-start justify-center gap-3 text-left">

              <div className="mt-1 shrink-0">
                <Sparkles size={20} className="text-cyan-300" />
              </div>

              <div>
                <p className="text-base font-semibold leading-7 text-blue-50 sm:text-lg">
                  “Dream, dream, dream. Dreams transform into thoughts and
                  thoughts result in action.”
                </p>

                <p className="mt-2 text-sm font-bold text-cyan-300">
                  — Dr. A. P. J. Abdul Kalam
                </p>
              </div>

            </div>

          </div>

          {/* CTA */}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/learn"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-black text-slate-900 shadow-2xl shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-50 sm:px-8 sm:text-lg"
            >
              <BookOpen size={21} />

              Start Learning

              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/practice"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-7 py-4 text-base font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10 sm:px-8 sm:text-lg"
            >
              <Trophy size={21} className="text-cyan-300" />

              Start Practice
            </Link>

          </div>

          {/* Trust points */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-300">

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-300" />
              Free Learning
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-300" />
              Interactive Practice
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-300" />
              Technology Resources
            </div>

          </div>

          {/* Search */}

          <div className="relative mx-auto mt-12 max-w-3xl">

            <div className="rounded-2xl border border-white/10 bg-white p-2 shadow-2xl">

              <div className="flex items-center">

                <Search
                  size={23}
                  className="ml-4 shrink-0 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search subjects, notes, practice, AI tools..."
                  className="w-full px-4 py-4 text-slate-900 outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  className="hidden rounded-xl bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-blue-900 sm:block"
                >
                  Search
                </button>

              </div>

            </div>

            {search.trim() && (
              <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-2xl">

                {filtered.length > 0 ? (
                  filtered.map((item) => (
                    <Link
                      key={item}
                      href={suggestionLinks[item] || "/learn"}
                      onClick={() => setSearch("")}
                      className="flex items-center justify-between border-b border-slate-100 px-5 py-4 font-semibold text-slate-800 transition last:border-b-0 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <span>{item}</span>

                      <ArrowRight size={17} />
                    </Link>
                  ))
                ) : (
                  <div className="px-6 py-5 text-slate-500">
                    No matching result found.
                  </div>
                )}

              </div>
            )}

          </div>

        </div>

        {/* Feature cards */}

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-3">

          <div className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.09]">

            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15">
                <BookOpen size={25} className="text-blue-300" />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
              />

            </div>

            <h3 className="mt-5 text-xl font-black">
              Learn Smarter
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Structured subjects, chapters, lessons and notes designed for
              easy learning.
            </p>

          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.09]">

            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15">
                <Trophy size={25} className="text-cyan-300" />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
              />

            </div>

            <h3 className="mt-5 text-xl font-black">
              Practice & Improve
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              MCQs, quizzes and mock tests help students build confidence and
              improve performance.
            </p>

          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.09]">

            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15">
                <Code2 size={25} className="text-purple-300" />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
              />

            </div>

            <h3 className="mt-5 text-xl font-black">
              Build With Technology
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Explore AI resources and developer tools to turn learning into
              practical skills.
            </p>

          </div>

        </div>

        {/* Bottom indicator */}

        <div className="mt-16 flex justify-center">

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            <Bot size={15} className="text-cyan-400" />
            Learn • Practice • Build • Grow
          </div>

        </div>

      </div>

    </section>
  );
}
