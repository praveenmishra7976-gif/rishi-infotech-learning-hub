"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const chapters = [
  {
    id: "number-system",
    title: "Number System",
  },
  {
    id: "fractions-and-decimals",
    title: "Fractions & Decimals",
  },
  {
    id: "ratio-and-proportion",
    title: "Ratio & Proportion",
  },
  {
    id: "percentage",
    title: "Percentage",
  },
  {
    id: "profit-loss",
    title: "Profit & Loss",
  },
  {
    id: "algebra",
    title: "Algebra",
  },
  {
    id: "linear-equations",
    title: "Linear Equations",
  },
  {
    id: "geometry",
    title: "Geometry",
  },
  {
    id: "mensuration",
    title: "Mensuration",
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
  },
  {
    id: "statistics",
    title: "Statistics",
  },
  {
    id: "probability",
    title: "Probability",
  },
];

type ChapterNavigationProps = {
  currentSlug: string;
};

export default function ChapterNavigation({
  currentSlug,
}: ChapterNavigationProps) {
  const currentIndex = chapters.findIndex(
    (chapter) => chapter.id === currentSlug
  );

  const previous =
    currentIndex > 0 ? chapters[currentIndex - 1] : null;

  const next =
    currentIndex >= 0 && currentIndex < chapters.length - 1
      ? chapters[currentIndex + 1]
      : null;

  return (
    <section className="max-w-7xl mx-auto px-6 pb-14">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
        <div className="grid md:grid-cols-2 gap-4">
          {previous ? (
            <Link
              href={`/learn/mathematics/${previous.id}`}
              className="group rounded-2xl border border-gray-200 p-5 hover:border-purple-300 hover:bg-purple-50 transition"
            >
              <p className="text-sm font-bold text-gray-500">
                Previous Chapter
              </p>

              <div className="mt-2 flex items-center gap-3">
                <ArrowLeft
                  size={20}
                  className="text-purple-600 group-hover:-translate-x-1 transition"
                />

                <p className="font-black text-gray-900">
                  {previous.title}
                </p>
              </div>
            </Link>
          ) : (
            <Link
              href="/learn/mathematics"
              className="group rounded-2xl border border-gray-200 p-5 hover:border-purple-300 hover:bg-purple-50 transition"
            >
              <p className="text-sm font-bold text-gray-500">
                Mathematics Course
              </p>

              <div className="mt-2 flex items-center gap-3">
                <ArrowLeft
                  size={20}
                  className="text-purple-600 group-hover:-translate-x-1 transition"
                />

                <p className="font-black text-gray-900">
                  All Mathematics Chapters
                </p>
              </div>
            </Link>
          )}

          {next ? (
            <Link
              href={`/learn/mathematics/${next.id}`}
              className="group rounded-2xl bg-purple-600 text-white p-5 hover:bg-purple-700 transition"
            >
              <p className="text-sm font-bold text-purple-100">
                Next Chapter
              </p>

              <div className="mt-2 flex items-center justify-end gap-3">
                <p className="font-black text-right">
                  {next.title}
                </p>

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </div>
            </Link>
          ) : (
            <Link
              href="/learn/mathematics"
              className="group rounded-2xl bg-purple-600 text-white p-5 hover:bg-purple-700 transition"
            >
              <p className="text-sm font-bold text-purple-100">
                Course Complete
              </p>

              <div className="mt-2 flex items-center justify-end gap-3">
                <p className="font-black">
                  Finish Mathematics
                </p>

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
