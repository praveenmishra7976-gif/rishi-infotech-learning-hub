"use client";

import { useState } from "react";
import Link from "next/link";
import { mathChapters } from "../data/mathChapters";

export default function MathSearch() {

  const [query, setQuery] = useState("");

  const filtered = mathChapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        placeholder="🔍 Search Mathematics Chapters..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border rounded-xl p-4"
      />

      {query && (

        <div className="bg-white rounded-xl shadow mt-2">

          {filtered.map((chapter) => (

            <Link
              key={chapter.id}
              href={`/mathematics/${chapter.slug}`}
              className="block px-4 py-3 hover:bg-gray-100"
            >
              {chapter.title}
            </Link>

          ))}

        </div>

      )}

    </div>
  );
}