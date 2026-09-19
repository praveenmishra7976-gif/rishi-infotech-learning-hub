"use client";

import Link from "next/link";
import {
  ArrowRight,
  Atom,
  Beaker,
  Brain,
  BookOpen,
  CheckCircle2,
  Dna,
  FlaskConical,
  Lightbulb,
  Microscope,
  Sparkles,
  Trophy,
} from "lucide-react";

const topics = [
  {
    title: "Physics GK",
    description:
      "Important facts about motion, force, energy, electricity, light, sound and the universe.",
    icon: Atom,
  },
  {
    title: "Chemistry GK",
    description:
      "Learn important facts about elements, compounds, acids, bases, metals and chemical reactions.",
    icon: FlaskConical,
  },
  {
    title: "Biology GK",
    description:
      "Explore cells, human body, plants, animals, genetics and living organisms.",
    icon: Dna,
  },
  {
    title: "Human Body",
    description:
      "Important facts about organs, systems, blood, bones, muscles and the human body.",
    icon: Brain,
  },
  {
    title: "Space & Astronomy",
    description:
      "Learn about the Sun, Moon, planets, stars, galaxies and the universe.",
    icon: Sparkles,
  },
  {
    title: "Earth Science",
    description:
      "Understand Earth, atmosphere, rocks, minerals, earthquakes, volcanoes and climate.",
    icon: Microscope,
  },
];

const quickFacts = [
  {
    question: "What is the SI unit of force?",
    answer: "Newton",
  },
  {
    question: "What is the chemical formula of water?",
    answer: "H₂O",
  },
  {
    question: "What is the basic unit of life?",
    answer: "Cell",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What gas do humans need for respiration?",
    answer: "Oxygen",
  },
  {
    question: "What is the largest organ of the human body?",
    answer: "Skin",
  },
  {
    question: "What is the center of an atom called?",
    answer: "Nucleus",
  },
  {
    question: "Which force attracts objects toward Earth?",
    answer: "Gravity",
  },
  {
    question: "What is the boiling point of water at standard pressure?",
    answer: "100°C",
  },
  {
    question: "Which star is closest to Earth?",
    answer: "The Sun",
  },
];

const importantFacts = [
  "The Earth revolves around the Sun.",
  "The Moon is Earth's natural satellite.",
  "Light travels much faster than sound.",
  "Water freezes at 0°C under standard atmospheric pressure.",
  "Plants use photosynthesis to make food.",
  "The human heart pumps blood throughout the body.",
  "DNA carries genetic information in living organisms.",
  "The periodic table organizes chemical elements.",
];

const examTopics = [
  "Physics",
  "Chemistry",
  "Biology",
  "Human Body",
  "Space",
  "Earth Science",
  "Environment",
  "Scientific Discoveries",
];

export default function ScienceGKPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            ← Back to General Knowledge
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Science GK
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Explore important science facts from physics, chemistry,
              biology, human body, space, Earth science and modern
              scientific discoveries.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#topics"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3.5 rounded-xl font-black hover:bg-gray-100 transition"
              >
                Explore Topics
                <ArrowRight size={19} />
              </a>

              <Link
                href="/practice"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-6 py-3.5 rounded-xl font-black hover:bg-white/20 transition"
              >
                Practice MCQs
                <Trophy size={19} />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-blue-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              6
            </p>

            <p className="text-gray-500">
              Main Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Atom className="text-cyan-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              100+
            </p>

            <p className="text-gray-500">
              Science Facts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Microscope className="text-purple-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              50+
            </p>

            <p className="text-gray-500">
              Key Concepts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Trophy className="text-yellow-500" size={28} />

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

      <section
        id="topics"
        className="max-w-7xl mx-auto px-6 py-14"
      >

        <div className="flex items-center gap-3 mb-8">

          <FlaskConical
            className="text-blue-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Science Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Explore important science areas.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => {

            const Icon = topic.icon;

            return (
              <article
                key={topic.title}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7 group"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition">

                  <Icon
                    size={31}
                    className="text-blue-600 group-hover:text-white transition"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-black text-gray-900 group-hover:text-blue-600 transition">
                  {topic.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {topic.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-black">
                  Explore Topic
                  <ArrowRight size={18} />
                </div>

              </article>
            );

          })}

        </div>

      </section>

      {/* QUICK FACTS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Lightbulb
              className="text-yellow-500"
              size={34}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Quick Science Facts
              </h2>

              <p className="text-gray-500 mt-1">
                Important questions and answers for quick revision.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {quickFacts.map((fact, index) => (

              <article
                key={fact.question}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-blue-50 hover:border-blue-200 transition"
              >

                <div className="flex gap-4">

                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      {fact.question}
                    </h3>

                    <p className="mt-2 text-blue-600 font-black">
                      Answer: {fact.answer}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* IMPORTANT FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <CheckCircle2 size={30} />
            </div>

            <div className="w-full">

              <h2 className="text-3xl md:text-4xl font-black">
                Important Science Facts
              </h2>

              <p className="mt-3 text-white/90">
                Remember these facts for quick revision and examinations.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-3">

                {importantFacts.map((fact) => (

                  <div
                    key={fact}
                    className="bg-white/10 border border-white/15 rounded-xl p-4"
                  >
                    <div className="flex gap-3">

                      <CheckCircle2
                        size={20}
                        className="shrink-0 mt-0.5"
                      />

                      <span className="font-semibold">
                        {fact}
                      </span>

                    </div>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EXAM PREPARATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0">

              <Trophy
                className="text-cyan-600"
                size={30}
              />

            </div>

            <div className="w-full">

              <h2 className="text-3xl font-black text-gray-900">
                Science for Exams
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
                Revise these important science areas for school examinations,
                competitive examinations and general awareness.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {examTopics.map((topic) => (

                  <span
                    key={topic}
                    className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold"
                  >
                    {topic}
                  </span>

                ))}

              </div>

              <Link
                href="/practice"
                className="mt-7 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-black hover:bg-blue-700 transition"
              >
                Practice Science MCQs
                <ArrowRight size={19} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-8 md:p-10 text-white">

          <div className="flex items-start gap-5">

            <Lightbulb
              size={32}
              className="shrink-0 text-yellow-200"
            />

            <div>

              <h2 className="text-3xl font-black">
                Science Study Tip
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Do not only memorize science facts. Try to understand why
                things happen. Connect physics, chemistry and biology with
                examples from everyday life. This makes science easier to
                remember.
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
              ← All GK Categories
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
            Keep Learning Science
          </h2>

          <p className="mt-3 text-gray-400">
            Explore more General Knowledge topics and continue learning.
          </p>

        </div>

      </section>

    </main>
  );
}
