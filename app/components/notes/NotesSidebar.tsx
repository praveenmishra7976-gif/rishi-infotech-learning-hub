"use client";

import Link from "next/link";

type Chapter = {
  title: string;
  href: string;
};

type NotesSidebarProps = {
  chapters: Chapter[];
};

export default function NotesSidebar({
  chapters,
}: NotesSidebarProps) {
  return (
    <aside className="sticky top-24 bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold text-blue-700">
        📚 Chapters
      </h2>

      <div className="mt-6 space-y-3">

        {chapters.map((chapter) => (

          <Link
            key={chapter.href}
            href={chapter.href}
            className="block rounded-xl border border-gray-200 px-4 py-3 hover:bg-blue-50 hover:border-blue-500 transition"
          >
            {chapter.title}
          </Link>

        ))}

      </div>

    </aside>
  );
}