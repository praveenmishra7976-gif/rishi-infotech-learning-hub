"use client";

import Link from "next/link";
import { Search, Sparkles, Star, Quote } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 text-white">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2">
              <Sparkles size={18} />
              <span className="text-sm font-semibold">
                India's Smart Learning Platform
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
              Learn
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-yellow-300 bg-clip-text text-transparent">
                Everything
              </span>
              In One Place
            </h1>

            <p className="mt-8 text-lg leading-8 text-blue-100 md:text-xl">
              Computer • Physics • Chemistry • Mathematics • Sanskrit • AI
              Tools • Developer Tools • Mock Tests • Notes • Courses
            </p>

            <div className="mt-10 flex rounded-2xl bg-white p-2">
              <div className="flex items-center px-4">
                <Search className="text-gray-500" />
              </div>

              <input
                placeholder="Search notes, quizzes, AI tools..."
                className="flex-1 bg-transparent px-2 text-black outline-none"
              />

              <button className="rounded-xl bg-blue-700 px-7 py-3 font-semibold text-white">
                Search
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="rounded-xl bg-cyan-400 px-8 py-4 font-bold text-blue-950"
              >
                🚀 Start Learning
              </Link>

              <Link
                href="/premium"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold"
              >
                ⭐ Premium Membership
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <b className="text-3xl">10K+</b>
                <p className="text-blue-200">Students</p>
              </div>

              <div>
                <b className="text-3xl">500+</b>
                <p className="text-blue-200">Study Notes</p>
              </div>

              <div>
                <b className="text-3xl">100+</b>
                <p className="text-blue-200">Courses</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="max-w-lg rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">
              <Quote className="mx-auto h-12 w-12 text-yellow-300" />

              <h2 className="mt-6 text-3xl font-bold">
                Dream Big. Learn More.
              </h2>

              <p className="mt-6 text-xl italic leading-9 text-yellow-100">
                “Dream, dream, dream. Dreams transform into thoughts
                and thoughts result in action.”
              </p>

              <p className="mt-5 font-semibold text-cyan-200">
                — Dr. A. P. J. Abdul Kalam
              </p>

              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-blue-100">
                  Education is the foundation for building a better
                  future.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-7 py-3">
            <Star className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">
              India's Next Generation AI Learning Platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}