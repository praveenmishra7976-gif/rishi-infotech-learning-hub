"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { physicsChapters } from "../../data/physicsChapters";

export default function PhysicsSearch() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return physicsChapters.filter((chapter) =>
      chapter.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="relative">

        <Search
          className="absolute left-4 top-4 text-gray-500"
          size={22}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Physics Chapters..."
          className="w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {search && (

        <div className="mt-6 space-y-3">

          {filtered.length === 0 && (
            <p className="text-gray-500">
              No chapter found.
            </p>
          )}

          {filtered.map((chapter) => (

            <Link
              key={chapter.id}
              href={`/physics/${chapter.slug}`}
              className="block border rounded-xl p-4 hover:bg-blue-50"
            >
              <h3 className="font-bold">
                {chapter.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {chapter.description}
              </p>

            </Link>

          ))}

        </div>

      )}

    </div>
  );
}