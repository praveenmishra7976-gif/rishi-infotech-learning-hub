"use client";

import { useState } from "react";

export default function SearchCourses() {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses..."
        className="w-full border rounded-xl p-4"
      />

    </div>
  );
}