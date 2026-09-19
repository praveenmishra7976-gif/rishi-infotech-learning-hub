"use client";

import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  lessons: number;
};

export default function ChapterCard({
  title,
  description,
  href,
  lessons,
}: Props) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer border border-gray-100">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-gray-800">
            {title}
          </h2>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            {lessons} Lessons
          </span>

        </div>

        <p className="mt-4 text-gray-600">
          {description}
        </p>

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Open Chapter
        </button>

      </div>
    </Link>
  );
}