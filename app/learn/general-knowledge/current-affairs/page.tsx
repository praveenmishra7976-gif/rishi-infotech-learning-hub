"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Globe2,
  Lightbulb,
  Newspaper,
  Sparkles,
  Trophy,
} from "lucide-react";

const topics = [
  {
    title: "National Current Affairs",
    description:
      "Important recent events, government initiatives, national developments and major announcements in India.",
    icon: "🇮🇳",
  },
  {
    title: "International Current Affairs",
    description:
      "Important events, international relations, global organizations and major developments around the world.",
    icon: "🌍",
  },
  {
    title: "Science & Technology",
    description:
      "Recent developments in science, space, technology, artificial intelligence and innovation.",
    icon: "🔬",
  },
  {
    title: "Economy & Banking",
    description:
      "Important economic developments, banking updates, financial terms and major policy decisions.",
    icon: "💰",
  },
  {
    title: "Government Schemes",
    description:
      "Important government schemes, programmes, missions and initiatives for citizens and students.",
    icon: "🏛️",
  },
  {
    title: "Sports Current Affairs",
    description:
      "Major tournaments, championships, records, awards and important sports events.",
    icon: "🏆",
  },
  {
    title: "Awards & Honours",
    description:
      "Important national and international awards, honours and recognitions.",
    icon: "🥇",
  },
  {
    title: "Appointments",
    description:
      "Important appointments, leadership changes and newly appointed officials.",
    icon: "👤",
  },
  {
    title: "Defence & Security",
    description:
      "Important defence exercises, military developments, security updates and related events.",
    icon: "🛡️",
  },
  {
    title: "Environment",
    description:
      "Climate change, environmental programmes, wildlife, conservation and important environmental events.",
    icon: "🌱",
  },
];

const quickRevision = [
  {
    title: "Current Affairs",
    value: "Recent Important Events",
    icon: "📰",
  },
  {
    title: "National",
    value: "India",
    icon: "🇮🇳",
  },
  {
    title: "International",
    value: "World",
    icon: "🌍",
  },
  {
    title: "Science",
    value: "Technology & Innovation",
    icon: "🔬",
  },
  {
    title: "Sports",
    value: "Tournaments & Records",
    icon: "🏆",
  },
  {
    title: "Awards",
    value: "Honours & Recognition",
    icon: "🏅",
  },
];

const examTips = [
  "Read current affairs regularly.",
  "Focus on important national and international events.",
  "Make short revision notes.",
  "Remember important names, dates and places.",
  "Practice current affairs MCQs.",
  "Revise weekly and monthly.",
];

export default function CurrentAffairsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to General Knowledge
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Current Affairs
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Stay updated with important national, international,
              science, technology, economy, sports, awards and
              government-related events.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen
              className="text-blue-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              10+
            </p>

            <p className="text-gray-500">
              Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Newspaper
              className="text-cyan-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              Daily
            </p>

            <p className="text-gray-500">
              Updates
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Globe2
              className="text-purple-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              India +
            </p>

            <p className="text-gray-500">
              World
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy
              className="text-yellow-500"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              MCQ
            </p>

            <p className="text-gray-500">
              Practice
            </p>
          </div>

        </div>

      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Newspaper
            className="text-blue-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Current Affairs Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Explore important current affairs categories.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => (

            <article
              key={topic.title}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl group-hover:bg-cyan-50 transition">
                  {topic.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  GK
                </span>

              </div>

              <h3 className="mt-6 text-xl font-black text-gray-900 group-hover:text-blue-600 transition">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold">
                Explore Topic
                <ArrowRight size={18} />
              </div>

            </article>

          ))}

        </div>

      </section>

      {/* QUICK REVISION */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <CalendarDays
              className="text-cyan-600"
              size={34}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Quick Revision
              </h2>

              <p className="text-gray-500 mt-1">
                Remember the major current affairs categories.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {quickRevision.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-blue-50 hover:border-blue-200 transition"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 font-bold text-blue-600">
                  {item.value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* STUDY METHOD */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                How to Study Current Affairs
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Current affairs become easier when you study them
                regularly and organize information by topic. Focus
                on important events and revise them frequently.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-3">

                {examTips.map((tip, index) => (

                  <div
                    key={tip}
                    className="bg-white/10 border border-white/15 rounded-xl p-4"
                  >

                    <span className="font-black">
                      {index + 1}.
                    </span>{" "}

                    {tip}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* IMPORTANT NOTE */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0">

              <CheckCircle2
                className="text-cyan-600"
                size={30}
              />

            </div>

            <div>

              <h2 className="text-3xl font-black text-gray-900">
                Exam Preparation Tip
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                For competitive examinations, pay special attention
                to important appointments, awards, government schemes,
                sports events, science and technology developments,
                national events and international organizations.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">

          <div className="flex flex-col sm:flex-row gap-4 justify-between">

            <Link
              href="/learn/general-knowledge"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              All GK Categories
            </Link>

            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700"
            >
              All Subjects
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <Sparkles
            className="mx-auto text-cyan-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning
          </h2>

          <p className="mt-3 text-gray-400">
            Stay informed, revise regularly and keep improving your GK.
          </p>

        </div>

      </section>

    </main>
  );
}
