"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Landmark,
} from "lucide-react";

import { indianGKTopics } from "../../data/indianGK";

export default function IndianGKChapterPage() {
  const params = useParams();

  const chapterId = Number(params.chapterId);

  const topic = indianGKTopics[chapterId];

  if (!topic) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

        <div className="bg-white rounded-3xl shadow-lg p-10 text-center max-w-lg">

          <h1 className="text-3xl font-black text-gray-900">
            Chapter Not Found
          </h1>

          <p className="text-gray-500 mt-3">
            The Indian GK chapter you are looking for does not exist.
          </p>

          <Link
            href="/gk/indian"
            className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
          >
            <ArrowLeft size={18} />
            Back to Indian GK
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

        <div className="max-w-5xl mx-auto px-6 py-14">

          <Link
            href="/gk/indian"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Indian GK
          </Link>

          <div className="mt-8">

            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm font-bold">
              <Landmark size={17} />
              Indian GK
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-black">
              Chapter {chapterId + 1}: {topic.title}
            </h1>

            <p className="mt-4 text-lg text-white/90">
              Important facts for students and competitive exam preparation.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-7 md:p-10">

          <div className="flex items-center gap-3 mb-8">

            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">

              <BookOpen
                className="text-blue-600"
                size={25}
              />

            </div>

            <div>

              <h2 className="text-2xl font-black text-gray-900">
                Important Facts
              </h2>

              <p className="text-gray-500">
                {topic.facts.length} facts in this chapter
              </p>

            </div>

          </div>

          <div className="space-y-4">

            {topic.facts.map((fact, index) => (

              <div
                key={fact}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >

                <div className="shrink-0 w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">

                  <CheckCircle2
                    className="text-green-600"
                    size={20}
                  />

                </div>

                <div>

                  <span className="text-sm font-bold text-blue-600">
                    Fact {index + 1}
                  </span>

                  <p className="mt-1 text-lg font-semibold text-gray-800">
                    {fact}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* NAVIGATION */}

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">

          {chapterId > 0 ? (

            <Link
              href={`/gk/indian/${chapterId - 1}`}
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-800 px-6 py-4 rounded-xl font-bold hover:border-blue-500"
            >
              <ArrowLeft size={18} />
              Previous Chapter
            </Link>

          ) : (
            <div />
          )}

          {chapterId < indianGKTopics.length - 1 ? (

            <Link
              href={`/gk/indian/${chapterId + 1}`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold"
            >
              Next Chapter
              <ArrowRight size={18} />
            </Link>

          ) : (

            <Link
              href="/gk/indian"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold"
            >
              All Indian GK
              <ArrowRight size={18} />
            </Link>

          )}

        </div>

      </section>

    </main>
  );
}
