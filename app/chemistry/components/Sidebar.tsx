"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { chemistryChapters } from "../data/chemistryChapters";

export default function Sidebar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const filtered = chemistryChapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="w-72 min-h-screen bg-white shadow-lg p-6 sticky top-0 overflow-y-auto">

      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        ⚗️ Chemistry Notes
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Chemistry chapters
      </p>

      <input
        type="text"
        placeholder="Search Chemistry Chapter..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="space-y-2">

        {filtered.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/chemistry/${chapter.slug}`}
            className={`block px-4 py-3 rounded-lg transition ${
              pathname === `/chemistry/${chapter.slug}`
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-100 text-gray-700"
            }`}
          >
            {chapter.title}
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-gray-500 px-2 py-4">
            No Chemistry chapter found.
          </p>
        )}

      </div>

    </aside>
  );
}
