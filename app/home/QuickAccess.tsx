"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  ClipboardCheck,
  FileBadge,
  LayoutDashboard,
  Trophy,
} from "lucide-react";

const items = [
  {
    title: "Daily Challenge",
    description: "A fresh challenge to sharpen your knowledge every day.",
    link: "/daily-challenge",
    icon: Trophy,
    number: "01",
    label: "CHALLENGE",
  },
  {
    title: "Quiz",
    description: "Test your knowledge with interactive subject quizzes.",
    link: "/quiz",
    icon: ClipboardCheck,
    number: "02",
    label: "PRACTICE",
  },
  {
    title: "Achievements",
    description: "Track milestones and celebrate your learning progress.",
    link: "/achievements",
    icon: Award,
    number: "03",
    label: "PROGRESS",
  },
  {
    title: "Student Dashboard",
    description: "Keep your courses, progress and learning activity together.",
    link: "/student-dashboard",
    icon: LayoutDashboard,
    number: "04",
    label: "DASHBOARD",
  },
  {
    title: "Certificates",
    description: "Access and manage certificates earned through learning.",
    link: "/certificate",
    icon: FileBadge,
    number: "05",
    label: "CERTIFICATES",
  },
];

export default function QuickAccess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">

      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black tracking-[0.18em] text-blue-700">
              QUICK ACCESS
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Your Learning,
              <span className="block text-blue-600">
                One Click Away.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Jump directly into quizzes, challenges, achievements, your
              dashboard and certificates.
            </p>

          </div>

          <Link
            href="/learn"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 hover:shadow-md"
          >
            Explore Learning

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

        {/* Cards */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.link}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >

                {/* Number */}

                <div className="absolute right-5 top-5 text-xs font-black tracking-widest text-slate-200 transition-colors group-hover:text-blue-100">
                  {item.number}
                </div>

                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200">
                  <Icon size={26} strokeWidth={2} />
                </div>

                {/* Label */}

                <div className="mt-6 text-[10px] font-black tracking-[0.2em] text-blue-600">
                  {item.label}
                </div>

                {/* Title */}

                <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {/* Action */}

                <div className="mt-5 flex items-center gap-2 text-sm font-black text-slate-900">

                  Open

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

                {/* Hover glow */}

                <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              </Link>
            );
          })}

        </div>

        {/* Bottom strip */}

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-xl sm:p-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-black tracking-[0.2em] text-cyan-300">
                LEARNING HUB
              </p>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Everything you need to keep learning.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Learn new concepts, practice regularly and track your journey.
              </p>

            </div>

            <Link
              href="/practice"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-50"
            >
              Start Practicing

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
