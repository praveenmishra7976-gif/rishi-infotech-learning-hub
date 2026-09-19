"use client";

import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";

type Props = {
  slug: string;
};

export default function BookmarkButton({ slug }: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const bookmarks: string[] = JSON.parse(
      localStorage.getItem("physicsBookmarks") || "[]"
    );

    setSaved(bookmarks.includes(slug));
  }, [slug]);

  function toggleBookmark() {
    const bookmarks: string[] = JSON.parse(
      localStorage.getItem("physicsBookmarks") || "[]"
    );

    let updated: string[];

    if (bookmarks.includes(slug)) {
      updated = bookmarks.filter((item) => item !== slug);
      setSaved(false);
    } else {
      updated = [...bookmarks, slug];
      setSaved(true);
    }

    localStorage.setItem(
      "physicsBookmarks",
      JSON.stringify(updated)
    );
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
        saved
          ? "bg-yellow-500 text-white"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
      {saved ? "Bookmarked" : "Bookmark"}
    </button>
  );
}