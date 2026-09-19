"use client";

import { Search } from "lucide-react";
import { useState } from "react";

const suggestions = [
  "Computer Notes",
  "Physics Notes",
  "Chemistry Notes",
  "Maths Notes",
  "Sanskrit Notes",
  "AI Hub",
  "Developer Hub",
  "Calculator",
  "QR Generator",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative max-w-2xl mx-auto">

      <div className="flex items-center bg-white rounded-2xl shadow-xl px-5 py-3">

        <Search className="text-gray-500" />

        <input
          className="ml-3 w-full outline-none"
          placeholder="Search anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

      </div>

      {query && (
        <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg z-50">

          {filtered.length ? (
            filtered.map((item) => (
              <div
                key={item}
                className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-5 py-3 text-gray-500">
              No results found
            </div>
          )}

        </div>
      )}

    </div>
  );
}