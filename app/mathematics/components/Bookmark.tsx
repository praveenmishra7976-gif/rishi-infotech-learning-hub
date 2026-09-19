"use client";

import { useState } from "react";

interface BookmarkProps {
  slug: string;
}

export default function Bookmark({ slug }: BookmarkProps) {
  const [saved, setSaved] = useState(false);

  function toggleBookmark() {
    setSaved(!saved);
    console.log("Bookmarked:", slug);
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`px-5 py-3 rounded-xl font-semibold transition ${
        saved
          ? "bg-yellow-400 text-black"
          : "bg-purple-700 text-white hover:bg-purple-800"
      }`}
    >
      {saved ? "★ Bookmarked" : "☆ Bookmark"}
    </button>
  );
}