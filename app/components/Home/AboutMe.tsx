"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookText,
  Code2,
  GraduationCap,
  Heart,
  Lightbulb,
  Library,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Technology & Learning",
    description:
      "Using technology to create useful learning resources for students, teachers and learners.",
  },
  {
    icon: Lightbulb,
    title: "Learning for Everyone",
    description:
      "Our goal is to make quality educational resources accessible without financial barriers.",
  },
  {
    icon: Heart,
    title: "Education with Purpose",
    description:
      "Rishi Infotech Learning Hub is built with the belief that every child deserves an opportunity to learn.",
  },
  {
    icon: Rocket,
    title: "Building for the Future",
    description:
      "We are working toward making this platform useful for schools, teachers and students across India.",
  },
];

const knowledgeSections = [
  {
    icon: "🪷",
    title: "Bhagavad Gita",
    subtitle: "Wisdom & Life Lessons",
    description:
      "Explore timeless teachings about knowledge, duty, discipline, courage and life.",
    href: "/learn",
  },
  {
    icon: "📖",
    title: "Ramayan",
    subtitle: "Values & Stories",
    description:
      "Discover stories and values that teach truth, responsibility, respect and good character.",
    href: "/learn",
  },
  {
    icon: "📚",
    title: "Books & Knowledge",
    subtitle: "Read & Discover",
    description:
      "A growing collection of educational books and useful resources for students and learners.",
    href: "/learn",
  },
];

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Background decoration */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700 shadow-sm">

            <Users size={17} />

            About Rishi Infotech Learning Hub

          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">

            Learning, Knowledge &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Good Values
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Rishi Infotech Learning Hub is a free educational platform created
            to bring modern education, technology, books and timeless knowledge
            together in one place.
          </p>

        </div>

        {/* Main About Card */}

        <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">

          <div className="grid lg:grid-cols-[0.85fr_1.5fr]">

            {/* Founder Side */}

            <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 p-8 text-white sm:p-10 lg:p-12">

              {/* Decorative circles */}

              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

              <div className="relative">

                {/* Founder Avatar */}

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl font-black shadow-xl backdrop-blur-md">
                  PM
                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                  Founder & Creator
                </p>

                <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                  Praveen Mishra
                </h3>

                <p className="mt-3 text-base font-medium text-blue-100">
                  Rishi Infotech Learning Hub
                </p>

                <div className="my-8 h-px w-full bg-white/15" />

                {/* Founder Details */}

                <div className="space-y-6">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <GraduationCap
                        size={22}
                        className="text-cyan-300"
                      />
                    </div>

                    <div>

                      <p className="font-bold">
                        Computer Science Background
                      </p>

                      <p className="mt-1 text-sm leading-6 text-blue-100">
                        B.Tech in Computer Science — course not completed.
                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Code2
                        size={22}
                        className="text-cyan-300"
                      />
                    </div>

                    <div>

                      <p className="font-bold">
                        Working in Technology
                      </p>

                      <p className="mt-1 text-sm leading-6 text-blue-100">
                        Currently working in a software company and building
                        useful digital solutions.
                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <BookOpen
                        size={22}
                        className="text-cyan-300"
                      />
                    </div>

                    <div>

                      <p className="font-bold">
                        Free Education Mission
                      </p>

                      <p className="mt-1 text-sm leading-6 text-blue-100">
                        Creating resources that students can access without
                        worrying about financial limitations.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Story Side */}

            <div className="p-7 sm:p-10 lg:p-12">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <Heart
                    size={23}
                    className="text-blue-600"
                  />
                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                    Our Story
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-slate-900">
                    Why We Built This Platform
                  </h3>

                </div>

              </div>

              <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                Rishi Infotech Learning Hub was created with a simple idea:
                <strong className="text-slate-900">
                  {" "}
                  learning should be available to everyone.
                </strong>
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Students can learn subjects, practice questions, explore
                technology, read useful resources and develop practical
                skills — all from one platform.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Along with modern education and technology, we also believe in
                the importance of knowledge, values and wisdom passed through
                generations.
              </p>

              {/* Mission Quote */}

              <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-cyan-50 to-purple-50 p-6">

                <div className="flex items-start gap-4">

                  <Sparkles
                    size={23}
                    className="mt-1 shrink-0 text-blue-600"
                  />

                  <div>

                    <p className="text-lg font-bold leading-8 text-blue-950 sm:text-xl">
                      "Education should help us gain knowledge, develop good
                      values and build a better future."
                    </p>

                    <p className="mt-3 text-sm font-semibold text-blue-600">
                      — The vision behind Rishi Infotech Learning Hub
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Knowledge Section */}

        <div className="mx-auto mt-16 max-w-6xl">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-blue-600">

              <Library size={18} />

              Knowledge Beyond Classrooms

            </div>

            <h3 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Learn From Books, Wisdom & Stories
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Education is not limited to textbooks. We want learners to
              discover knowledge from academics, books, stories and timeless
              wisdom.
            </p>

          </div>

          {/* Knowledge Cards */}

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {knowledgeSections.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >

                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-50 transition group-hover:scale-150" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-4xl shadow-sm">
                      {item.icon}
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                    />

                  </div>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                    {item.subtitle}
                  </p>

                  <h4 className="mt-2 text-2xl font-black text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-black text-blue-600">
                    Explore Knowledge
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

        {/* Highlights */}

        <div className="mx-auto mt-16 max-w-6xl">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon
                      size={23}
                      className="text-blue-600"
                    />
                  </div>

                  <h4 className="mt-5 font-black text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

        {/* Future Vision */}

        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-blue-800 p-8 text-white shadow-2xl sm:p-10">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Rocket
                    size={24}
                    className="text-cyan-300"
                  />
                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                    Our Future Vision
                  </p>

                  <h3 className="mt-1 text-2xl font-black sm:text-3xl">
                    Education Without Financial Barriers
                  </h3>

                </div>

              </div>

              <p className="mt-5 text-base leading-8 text-blue-100 sm:text-lg">
                Our long-term goal is to make Rishi Infotech Learning Hub
                available to schools across India for free, helping teachers
                teach children and giving students access to quality learning
                resources, books and knowledge.
              </p>

            </div>

            <Link
              href="/learn"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50"
            >
              <BookText size={20} />

              Start Learning

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}