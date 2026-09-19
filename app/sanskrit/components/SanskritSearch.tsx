"use client";

import { useState } from "react";
import Link from "next/link";
import { sanskritChapters } from "../data/sanskritChapters";

export default function SanskritSearch() {

  const [query, setQuery] = useState("");

  const filtered = sanskritChapters.filter((chapter) =>
    chapter.title
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="mt-10">

      <input
        className="border rounded-xl p-4 w-full"
        placeholder="Search Chapter..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      {query && (

        <div className="bg-white rounded-xl shadow mt-2">

          {filtered.map((chapter) => (

            <Link
              key={chapter.id}
              href={`/sanskrit/${chapter.slug}`}
              className="block px-4 py-3 hover:bg-orange-50"
            >
              {chapter.title}
            </Link>

          ))}

        </div>

      )}

    </div>
  );
}