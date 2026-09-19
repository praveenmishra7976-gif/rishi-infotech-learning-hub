"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { physicsChapters } from "../../data/physicsChapters";

export default function Sidebar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const filtered = physicsChapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="w-72 min-h-screen bg-white shadow-lg p-6 sticky top-0 overflow-y-auto">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        ⚛️ Physics Notes
      </h2>

      <input
        type="text"
        placeholder="Search Chapter..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 mb-6"
      />

      <div className="space-y-2">

        {filtered.map((chapter) => (

          <Link
            key={chapter.id}
            href={`/physics/${chapter.slug}`}
            className={`block px-4 py-3 rounded-lg transition ${
              pathname === `/physics/${chapter.slug}`
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-100"
            }`}
          >
            {chapter.title}
          </Link>

        ))}

      </div>

    </aside>
  );
}