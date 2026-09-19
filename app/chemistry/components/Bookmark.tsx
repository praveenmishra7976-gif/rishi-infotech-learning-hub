"use client";

import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";

const STORAGE_KEY = "chemistryBookmarks";
const PROGRESS_EVENT = "chemistryProgressUpdated";

type Props = {
  slug: string;
};

export default function BookmarkButton({ slug }: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const bookmarks: string[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      setSaved(bookmarks.includes(slug));
    } catch {
      setSaved(false);
    }
  }, [slug]);

  function toggleBookmark() {
    try {
      const bookmarks: string[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      const updated = bookmarks.includes(slug)
        ? bookmarks.filter((item) => item !== slug)
        : [...bookmarks, slug];

      const nextSaved = updated.includes(slug);

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      setSaved(nextSaved);

      window.dispatchEvent(
        new Event(PROGRESS_EVENT)
      );
    } catch {
      setSaved(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      aria-pressed={saved}
      className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition ${
        saved
          ? "bg-yellow-500 text-white hover:bg-yellow-600"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      <Bookmark
        size={20}
        fill={saved ? "currentColor" : "none"}
      />

      {saved ? "Bookmarked" : "Bookmark"}
    </button>
  );
}
