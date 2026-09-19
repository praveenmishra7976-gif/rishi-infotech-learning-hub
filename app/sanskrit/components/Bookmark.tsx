"use client";

import { useState } from "react";

interface Props {
  slug: string;
}

export default function Bookmark({ slug }: Props) {
  const [saved, setSaved] = useState(false);

  function toggle() {
    setSaved(!saved);
    console.log("Bookmarked:", slug);
  }

  return (
    <button
      onClick={toggle}
      className={`px-6 py-3 rounded-xl font-bold transition ${
        saved
          ? "bg-yellow-400 text-black"
          : "bg-orange-600 text-white hover:bg-orange-700"
      }`}
    >
      {saved ? "★ Bookmarked" : "☆ Bookmark"}
    </button>
  );
}