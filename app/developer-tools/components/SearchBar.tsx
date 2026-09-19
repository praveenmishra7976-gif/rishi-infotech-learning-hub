"use client";

import { useState } from "react";

export default function SearchBar() {

  const [search, setSearch] = useState("");

  return (

    <div className="mb-8">

      <input
        type="text"
        placeholder="Search Developer Tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />

    </div>

  );

}