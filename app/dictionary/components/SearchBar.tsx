"use client";

import { useState } from "react";

export default function SearchBar() {

  const [search, setSearch] = useState("");

  return (

    <div className="mb-8">

      <input
        type="text"
        placeholder="Search any word..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="w-full border rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
      />

    </div>

  );

}