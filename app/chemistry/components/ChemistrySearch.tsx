"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { chemistryChapters } from "../data/chemistryChapters";

export default function ChemistrySearch() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return [];

    return chemistryChapters.filter(
      (chapter) =>
        chapter.title.toLowerCase().includes(query) ||
        chapter.description.toLowerCase().includes(query) ||
        chapter.content.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">
      <div className="relative">
        <Search
          className="absolute left-4 top-4 text-gray-500"
          size={22}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Chemistry Chapters..."
          className="w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {search.trim() && (
        <div className="mt-6 space-y-3">
          {filtered.length === 0 ? (
            <p className="text-gray-500">
              No Chemistry chapter found.
            </p>
          ) : (
            filtered.map((chapter) => (
              <Link
                key={chapter.id}
                href={`/chemistry/${chapter.slug}`}
                className="block border rounded-xl p-4 hover:bg-green-50 transition"
              >
                <h3 className="font-bold text-gray-900">
                  {chapter.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {chapter.description}
                </p>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
