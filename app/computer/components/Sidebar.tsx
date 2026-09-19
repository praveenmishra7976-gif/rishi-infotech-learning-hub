"use client";

import Link from "next/link";
import { computerChapters } from "../data/computerChapters";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white shadow-lg min-h-screen p-6">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Computer Chapters
      </h2>

      <div className="space-y-2">

        {computerChapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/computer/${chapter.slug}`}
            className="block p-3 rounded-xl hover:bg-blue-100"
          >
            {chapter.title}
          </Link>
        ))}

      </div>

    </aside>
  );
}