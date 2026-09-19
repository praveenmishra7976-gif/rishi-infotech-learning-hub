"use client";

import { useState } from "react";
import { saveBookmark } from "@/app/lib/bookmarks";

interface BookmarkProps {
  slug: string;
}

export default function Bookmark({ slug }: BookmarkProps) {
  const [saved, setSaved] = useState(false);

  async function handleBookmark() {
    await saveBookmark(slug);
    setSaved(true);
  }

  return (
    <button
      onClick={handleBookmark}
      className={`px-5 py-3 rounded-xl font-semibold transition ${
        saved
          ? "bg-yellow-400 text-black"
          : "bg-blue-700 text-white hover:bg-blue-800"
      }`}
    >
      {saved ? "★ Bookmarked" : "☆ Bookmark"}
    </button>
  );
}