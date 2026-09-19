"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Sparkles,
} from "lucide-react";

type FestivalInfo = {
  title: string;
  subtitle: string;
  message: string;
  icon: string;
};

const festivalInfo: Record<string, FestivalInfo> = {
  diwali: {
    title: "Diwali Special",
    subtitle: "Festival of Lights",
    message:
      "Celebrate learning, knowledge and new beginnings with Rishi Infotech Learning Hub.",
    icon: "🪔",
  },

  holi: {
    title: "Holi Special",
    subtitle: "Festival of Colours",
    message:
      "Add colour to your learning journey with knowledge, practice and creativity.",
    icon: "🎨",
  },

  navratri: {
    title: "Navratri Special",
    subtitle: "Nine Days of Celebration",
    message:
      "Celebrate learning, strength and positive beginnings throughout Navratri.",
    icon: "🌺",
  },

  dussehra: {
    title: "Dussehra Special",
    subtitle: "Festival of Victory",
    message:
      "Keep learning, keep improving and move forward with knowledge and confidence.",
    icon: "🏹",
  },

  eid: {
    title: "Eid Special",
    subtitle: "Eid Mubarak",
    message:
      "Wishing students a joyful celebration filled with learning, kindness and growth.",
    icon: "🌙",
  },

  christmas: {
    title: "Christmas Special",
    subtitle: "Season of Joy",
    message:
      "Celebrate the season with curiosity, kindness and a fresh spirit of learning.",
    icon: "🎄",
  },

  "guru-nanak": {
    title: "Guru Nanak Jayanti",
    subtitle: "A Celebration of Wisdom",
    message:
      "Explore learning with humility, knowledge, service and positive values.",
    icon: "🪯",
  },

  "independence-day": {
    title: "Independence Day",
    subtitle: "Jai Hind",
    message:
      "Celebrate India's spirit of freedom while continuing your journey of education.",
    icon: "🇮🇳",
  },

  "republic-day": {
    title: "Republic Day",
    subtitle: "Proud to be Indian",
    message:
      "Celebrate the values of knowledge, responsibility and learning.",
    icon: "🇮🇳",
  },

  "gandhi-jayanti": {
    title: "Gandhi Jayanti",
    subtitle: "A Day of Values",
    message:
      "Learn with simplicity, discipline and a spirit of positive change.",
    icon: "🕊️",
  },

  "constitution-day": {
    title: "Constitution Day",
    subtitle: "Samvidhan Diwas",
    message:
      "Learn about the values and principles that shape India's democracy.",
    icon: "📜",
  },

  "teachers-day": {
    title: "Teachers' Day",
    subtitle: "Celebrating Educators",
    message:
      "A special moment to appreciate teachers who guide students towards knowledge.",
    icon: "👨‍🏫",
  },

  "childrens-day": {
    title: "Children's Day",
    subtitle: "Celebrating Young Learners",
    message:
      "Keep exploring, asking questions and discovering something new every day.",
    icon: "🧒",
  },

  "national-science-day": {
    title: "National Science Day",
    subtitle: "Explore • Discover • Understand",
    message:
      "Turn curiosity into knowledge through science and experimentation.",
    icon: "🔬",
  },

  "international-yoga-day": {
    title: "International Yoga Day",
    subtitle: "Mind • Body • Learning",
    message:
      "Balance concentration, wellbeing and learning with a positive daily routine.",
    icon: "🧘",
  },

  "world-environment-day": {
    title: "World Environment Day",
    subtitle: "Learn • Protect • Grow",
    message:
      "Learn today to help build a cleaner and more sustainable future.",
    icon: "🌱",
  },

  "new-academic-year": {
    title: "New Academic Year",
    subtitle: "A Fresh Start",
    message:
      "Start the new academic year with curiosity, consistency and confidence.",
    icon: "📚",
  },

  "exam-season": {
    title: "Exam Season",
    subtitle: "Prepare with Confidence",
    message:
      "Revise your subjects, practise regularly and prepare with confidence.",
    icon: "📝",
  },

  "results-achievement": {
    title: "Results & Achievement",
    subtitle: "Celebrate Your Progress",
    message:
      "Every completed lesson and every practice session is a step forward.",
    icon: "🏆",
  },
};

export default function FestivalAnnouncement() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-festival-theme") ||
      "default";

    setTheme(currentTheme);
  }, []);

  if (!theme || theme === "default") {
    return null;
  }

  const festival = festivalInfo[theme];

  if (!festival) {
    return null;
  }

  return (
    <section className="festival-announcement relative overflow-hidden border-b border-slate-200">
      <div className="festival-announcement-glow festival-announcement-glow-one" />
      <div className="festival-announcement-glow festival-announcement-glow-two" />

      <div className="relative mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-col gap-4 rounded-2xl border border-white/60 bg-white/75 p-4 shadow-sm backdrop-blur-md md:flex-row md:items-center md:justify-between md:p-5">

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
              {festival.icon}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.18em] text-[var(--festival-primary)]">
                  <Sparkles size={13} />
                  SPECIAL EVENT
                </span>

                <span className="text-slate-300">•</span>

                <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-slate-400">
                  <CalendarDays size={12} />
                  RISHI INFOTECH
                </span>
              </div>

              <h2 className="mt-1 text-lg font-black text-[var(--festival-text)] md:text-xl">
                {festival.title}
              </h2>

              <p className="mt-0.5 text-xs font-bold text-[var(--festival-primary)]">
                {festival.subtitle}
              </p>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--festival-text-soft)]">
                {festival.message}
              </p>
            </div>
          </div>

          <Link
            href="/learn"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--festival-gradient)] px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore Learning
            <BookOpen size={17} />
            <ArrowRight size={16} />
          </Link>

        </div>
      </div>
    </section>
  );
}
