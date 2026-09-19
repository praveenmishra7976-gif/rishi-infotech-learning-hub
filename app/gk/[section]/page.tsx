"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import {
  indianGKTopics,
  indianGKQuestions,
} from "../data/indianGK";

import {
  worldGKTopics,
  worldGKQuestions,
} from "../data/worldGK";

import {
  historyGKTopics,
  historyGKQuestions,
} from "../data/historyGK";

import {
  geographyGKTopics,
  geographyGKQuestions,
} from "../data/geographyGK";

import {
  polityGKTopics,
  polityGKQuestions,
} from "../data/polityGK";

import {
  scienceGKTopics,
  scienceGKQuestions,
} from "../data/scienceGK";

import {
  sportsGKTopics,
  sportsGKQuestions,
} from "../data/sportsGK";

import {
  awardsGKTopics,
  awardsGKQuestions,
} from "../data/awardsGK";

import {
  personsGKTopics,
  personsGKQuestions,
} from "../data/personsGK";

import {
  currentAffairsTopics,
} from "../data/currentAffairs";

type Topic = {
  title: string;
  description?: string;
  facts?: string[];
};

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type SectionData = {
  title: string;
  description: string;
  emoji: string;
  topics: Topic[];
  questions: Question[];
};

const sections: Record<string, SectionData> = {
  "indian-gk": {
    title: "Indian GK",
    description:
      "Important facts about India, states, capitals, national symbols, places, rivers, mountains and more.",
    emoji: "🇮🇳",
    topics: indianGKTopics,
    questions: indianGKQuestions,
  },

  "world-gk": {
    title: "World GK",
    description:
      "Countries, capitals, currencies, continents, oceans, organizations and important world facts.",
    emoji: "🌍",
    topics: worldGKTopics,
    questions: worldGKQuestions,
  },

  history: {
    title: "History",
    description:
      "Learn ancient, medieval and modern history with important events, empires, movements and personalities.",
    emoji: "🏛️",
    topics: historyGKTopics,
    questions: historyGKQuestions,
  },

  geography: {
    title: "Geography",
    description:
      "Explore Earth, continents, oceans, mountains, rivers, climate, resources and Indian geography.",
    emoji: "🗺️",
    topics: geographyGKTopics,
    questions: geographyGKQuestions,
  },

  "indian-polity": {
    title: "Indian Polity",
    description:
      "Learn about the Indian Constitution, Fundamental Rights, Parliament, President, Prime Minister, courts and governance.",
    emoji: "⚖️",
    topics: polityGKTopics,
    questions: polityGKQuestions,
  },

  "science-gk": {
    title: "Science GK",
    description:
      "Important general science facts covering Physics, Chemistry, Biology, Space, Technology and everyday science.",
    emoji: "🔬",
    topics: scienceGKTopics,
    questions: scienceGKQuestions,
  },

  "sports-gk": {
    title: "Sports GK",
    description:
      "Learn about cricket, football, hockey, tennis, badminton, Olympics, tournaments, players and awards.",
    emoji: "🏆",
    topics: sportsGKTopics,
    questions: sportsGKQuestions,
  },

  "awards-honours": {
    title: "Awards & Honours",
    description:
      "Important national and international awards, prizes, medals and honours.",
    emoji: "🏅",
    topics: awardsGKTopics,
    questions: awardsGKQuestions,
  },

  "important-persons": {
    title: "Important Persons",
    description:
      "Learn about important leaders, freedom fighters, scientists, authors, artists, sportspersons and world leaders.",
    emoji: "👤",
    topics: personsGKTopics,
    questions: personsGKQuestions,
  },

  "current-affairs": {
    title: "Current Affairs",
    description:
      "Important current events, national developments, international events, appointments, awards, sports and technology.",
    emoji: "📰",
    topics: currentAffairsTopics,
    questions: [],
  },
};

export default function GKSectionPage() {
  const params = useParams();

  const sectionId = String(params.section || "");

  const section = sections[sectionId];

  if (!section) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

        <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center">

          <div className="text-6xl">
            📚
          </div>

          <h1 className="mt-6 text-3xl font-black text-gray-900">
            GK Section Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The General Knowledge section you are looking
            for does not exist.
          </p>

          <Link
            href="/gk"
            className="mt-7 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl"
          >
            <ArrowLeft size={18} />
            Back to General Knowledge
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">

          <Link
            href="/gk"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to General Knowledge
          </Link>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">

            <div className="w-20 h-20 rounded-3xl bg-white/15 border border-white/20 flex items-center justify-center text-5xl">
              {section.emoji}
            </div>

            <div>

              <p className="text-white/80 font-semibold">
                Rishi Infotech Learning Hub
              </p>

              <h1 className="mt-1 text-4xl md:text-5xl font-black">
                {section.title}
              </h1>

            </div>

          </div>

          <p className="mt-6 max-w-4xl text-lg md:text-xl text-white/90 leading-relaxed">
            {section.description}
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}

        <div className="flex items-center gap-3 mb-8">

          <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">

            <BookOpen
              size={26}
              className="text-blue-600"
            />

          </div>

          <div>

            <h2 className="text-3xl font-black text-gray-900">
              Study Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Learn important facts topic by topic.
            </p>

          </div>

        </div>

        {/* TOPICS */}

        {section.topics.length === 0 ? (

          <div className="bg-white rounded-3xl border p-10 text-center">

            <h3 className="text-2xl font-black">
              Topics coming soon
            </h3>

            <p className="mt-2 text-gray-500">
              More content will be added soon.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {section.topics.map((topic, index) => (

              <article
                key={`${topic.title}-${index}`}
                className="bg-white rounded-3xl shadow-sm hover:shadow-lg border border-gray-100 p-7 transition"
              >

                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div className="flex-1">

                    <h3 className="text-xl md:text-2xl font-black text-gray-900">
                      {topic.title}
                    </h3>

                    {topic.description && (
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        {topic.description}
                      </p>
                    )}

                  </div>

                </div>

                {topic.facts &&
                  topic.facts.length > 0 && (

                    <div className="mt-6 border-t border-gray-100 pt-5">

                      <h4 className="font-bold text-gray-900 mb-3">
                        Important Facts
                      </h4>

                      <ul className="space-y-3">

                        {topic.facts.map(
                          (fact, factIndex) => (

                            <li
                              key={`${fact}-${factIndex}`}
                              className="flex items-start gap-3 text-gray-700 leading-relaxed"
                            >

                              <CheckCircle2
                                size={19}
                                className="text-green-500 shrink-0 mt-1"
                              />

                              <span>
                                {fact}
                              </span>

                            </li>

                          )
                        )}

                      </ul>

                    </div>

                  )}

              </article>

            ))}

          </div>

        )}

        {/* QUIZ */}

        {section.questions.length > 0 && (

          <section className="mt-14">

            <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-3xl p-8 md:p-10">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">

                  <Sparkles size={25} />

                </div>

                <div>

                  <h2 className="text-3xl font-black">
                    Quick GK Quiz
                  </h2>

                  <p className="mt-1 text-white/80">
                    Test your knowledge.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-7 space-y-6">

              {section.questions.map(
                (question, index) => (

                  <article
                    key={`${question.question}-${index}`}
                    className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8"
                  >

                    <div className="flex items-start gap-4">

                      <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                        {index + 1}
                      </div>

                      <div className="flex-1">

                        <h3 className="text-lg md:text-xl font-black text-gray-900 leading-relaxed">
                          {question.question}
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-3 mt-6">

                          {question.options.map(
                            (option) => (

                              <div
                                key={option}
                                className="border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl p-4 font-semibold text-gray-700 transition"
                              >
                                {option}
                              </div>

                            )
                          )}

                        </div>

                        <div className="mt-5 rounded-xl bg-green-50 border border-green-200 p-4">

                          <p className="text-sm font-bold text-green-700">
                            Correct Answer
                          </p>

                          <p className="mt-1 text-green-800 font-black">
                            {question.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </article>

                )
              )}

            </div>

          </section>

        )}

        {/* NAVIGATION */}

        <div className="mt-14 flex flex-col sm:flex-row gap-4">

          <Link
            href="/gk"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl transition"
          >
            <ArrowLeft size={19} />
            All GK Sections
          </Link>

          <Link
            href="/learn"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-4 rounded-xl transition"
          >
            Explore Learning
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-gray-900 text-white mt-10">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <div className="text-4xl">
            {section.emoji}
          </div>

          <h2 className="mt-4 text-2xl font-black">
            {section.title}
          </h2>

          <p className="mt-2 text-gray-400">
            Rishi Infotech Learning Hub
          </p>

        </div>

      </footer>

    </main>
  );
}