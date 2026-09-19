"use client";

import CountUp from "react-countup";
import {
  Award,
  ArrowUpRight,
  BookOpen,
  Brain,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 10000,
    suffix: "+",
    title: "Students",
    description: "Learners reached",
  },
  {
    icon: BookOpen,
    number: 500,
    suffix: "+",
    title: "Study Resources",
    description: "Notes & learning materials",
  },
  {
    icon: Brain,
    number: 100,
    suffix: "+",
    title: "AI Tools",
    description: "Technology resources",
  },
  {
    icon: Award,
    number: 50,
    suffix: "+",
    title: "Certificates",
    description: "Learning achievements",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">

      {/* Background glow */}

      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
            OUR LEARNING ECOSYSTEM
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Built to Make
            <span className="block text-cyan-300">
              Learning Accessible.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Rishi Infotech Learning Hub brings learning resources, practice,
            technology and student tools together in one platform.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.08]"
              >

                {/* Top */}

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition group-hover:bg-cyan-400/15">
                    <Icon
                      size={23}
                      className="text-cyan-300"
                    />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                  />

                </div>

                {/* Number */}

                <div className="mt-8 text-4xl font-black tracking-tight sm:text-5xl">

                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />

                  <span className="text-cyan-300">
                    {item.suffix}
                  </span>

                </div>

                {/* Title */}

                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {/* Bottom line */}

                <div className="mt-6 h-px w-full bg-white/10" />

                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500 transition group-hover:text-cyan-300">
                  Growing every day
                </div>

                {/* Decoration */}

                <div className="pointer-events-none absolute -bottom-14 -right-14 h-28 w-28 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition group-hover:opacity-100" />

              </div>
            );
          })}

        </div>

        {/* Mission strip */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-white/[0.04] to-cyan-500/10 p-6 sm:p-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-black tracking-[0.2em] text-cyan-300">
                THE BIGGER GOAL
              </p>

              <h3 className="mt-2 text-xl font-black sm:text-2xl">
                Quality learning should not depend on money.
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                The platform is being built with a long-term vision of making
                useful educational resources available to students and schools
                for free.
              </p>

            </div>

            <div className="shrink-0 rounded-2xl border border-cyan-400/10 bg-cyan-400/10 px-5 py-4 text-center">

              <div className="text-2xl font-black text-cyan-300">
                FREE
              </div>

              <div className="mt-1 text-xs font-bold text-slate-400">
                LEARNING FIRST
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
