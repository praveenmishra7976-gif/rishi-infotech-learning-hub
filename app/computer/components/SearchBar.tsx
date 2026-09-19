"use client";

import { useState } from "react";
import Link from "next/link";
import { computerChapters } from "../data/computerChapters";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filtered = computerChapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="🔍 Search Computer Chapters..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {query && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border z-50">
          {filtered.length > 0 ? (
            filtered.map((chapter) => (
              <Link
                key={chapter.id}
                href={`/computer/${chapter.slug}`}
                className="block px-4 py-3 hover:bg-gray-100"
              >
                {chapter.title}
              </Link>
            ))
          ) : (
            <p className="px-4 py-3 text-gray-500">No chapter found.</p>
          )}
        </div>
      )}
    </div>
  );
}