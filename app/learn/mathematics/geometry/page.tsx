"use client";

import Link from "next/link";
import ChapterNavigation from "../components/ChapterNavigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react";

const topics = [
  {
    title: "Basic Geometry",
    description:
      "Learn points, lines, line segments, rays, planes and basic geometric concepts.",
    icon: "📐",
  },
  {
    title: "Angles",
    description:
      "Understand acute, right, obtuse, straight, reflex and complete angles.",
    icon: "📏",
  },
  {
    title: "Triangles",
    description:
      "Learn types of triangles, properties, angles and important triangle formulas.",
    icon: "🔺",
  },
  {
    title: "Quadrilaterals",
    description:
      "Study square, rectangle, parallelogram, rhombus, trapezium and their properties.",
    icon: "⬜",
  },
  {
    title: "Polygons",
    description:
      "Understand polygons, regular polygons, interior angles and exterior angles.",
    icon: "⬡",
  },
  {
    title: "Circles",
    description:
      "Learn radius, diameter, circumference, chord, arc, sector and circle formulas.",
    icon: "⭕",
  },
  {
    title: "Symmetry",
    description:
      "Understand lines of symmetry, rotational symmetry and symmetrical shapes.",
    icon: "🪞",
  },
  {
    title: "Coordinate Geometry",
    description:
      "Learn coordinates, x-axis, y-axis, quadrants and plotting points.",
    icon: "📊",
  },
];

const formulas = [
  {
    title: "Perimeter of Rectangle",
    formula: "P = 2(l + b)",
    icon: "▭",
  },
  {
    title: "Area of Rectangle",
    formula: "A = l × b",
    icon: "📐",
  },
  {
    title: "Area of Square",
    formula: "A = a²",
    icon: "⬜",
  },
  {
    title: "Area of Triangle",
    formula: "A = ½ × b × h",
    icon: "🔺",
  },
  {
    title: "Circumference of Circle",
    formula: "C = 2πr",
    icon: "⭕",
  },
  {
    title: "Area of Circle",
    formula: "A = πr²",
    icon: "🔵",
  },
];

const facts = [
  "A triangle has three sides and three angles.",
  "The sum of angles of a triangle is 180°.",
  "The sum of angles of a quadrilateral is 360°.",
  "A square has four equal sides and four right angles.",
  "The diameter of a circle is twice its radius.",
  "A straight angle measures 180°.",
];

export default function GeometryPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <Link
            href="/learn/mathematics"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Mathematics
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black">
              Geometry
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn geometry step by step with shapes, angles, triangles,
              circles, formulas, properties and practical examples.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-purple-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {facts.length}
            </p>

            <p className="text-gray-500">
              Key Facts
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Calculator className="text-indigo-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {formulas.length}
            </p>

            <p className="text-gray-500">
              Formulas
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <span className="text-3xl">
              📐
            </span>

            <p className="text-3xl font-black text-gray-900 mt-2">
              {topics.length}
            </p>

            <p className="text-gray-500">
              Topics
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <Trophy
              className="text-yellow-500"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              —
            </p>

            <p className="text-gray-500">
              MCQ Practice
            </p>

          </div>

        </div>

      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-purple-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Geometry Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Explore important concepts of geometry.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic, index) => (

            <article
              key={topic.title}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl">
                  {topic.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Topic {index + 1}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-purple-600 transition">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* FORMULAS */}

      <section className="bg-white border-y">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Calculator
              className="text-purple-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Geometry Formulas
              </h2>

              <p className="text-gray-500 mt-1">
                Quick revision of important formulas.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {formulas.map((item) => (

              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-purple-50 hover:border-purple-200 transition"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-xl font-black text-purple-600">
                  {item.formula}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* IMPORTANT FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Sparkles
            className="text-indigo-600"
            size={32}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Important Geometry Facts
            </h2>

            <p className="text-gray-500 mt-1">
              Remember these points for quick revision.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {facts.map((fact, index) => (

            <div
              key={fact}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4"
            >

              <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black">
                {index + 1}
              </div>

              <p className="text-gray-700 font-semibold leading-relaxed">
                {fact}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <Lightbulb size={30} />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black">
                How to Study Geometry
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                First understand the shape and its properties. Then learn
                the relevant formula and solve examples step by step.
                Drawing diagrams while solving problems can make geometry
                much easier to understand.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* NAVIGATION */}

      <ChapterNavigation currentSlug="geometry" />


      {/* FOOTER */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center">

          <Sparkles
            className="mx-auto text-cyan-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning Mathematics
          </h2>

          <p className="mt-3 text-gray-400">
            Explore more Mathematics chapters and continue your learning journey.
          </p>

        </div>

      </section>

    </main>
  );
}