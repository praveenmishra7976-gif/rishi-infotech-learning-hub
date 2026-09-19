"use client";

import { useState } from "react";
import Link from "next/link";

type Chapter = {
  id: number;
  title: string;
  slug: string;
  description: string;
};

export default function ChapterSearch({
  chapters,
}: {
  chapters: Chapter[];
}) {
  const [search, setSearch] = useState("");

  const filtered = chapters.filter(
    (chapter) =>
      chapter.title.toLowerCase().includes(search.toLowerCase()) ||
      chapter.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="🔍 Search Chapters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl p-4 mb-6"
      />

      <div className="space-y-3">
        {filtered.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/computer/${chapter.slug}`}
            className="block bg-gray-100 hover:bg-blue-100 rounded-xl p-3"
          >
            {chapter.id}. {chapter.title}
          </Link>
        ))}
      </div>
    </div>
  );
}