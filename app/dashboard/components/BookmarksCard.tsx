"use client";

import Link from "next/link";

export default function BookmarksCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-blue-700">
        My Bookmarks
      </h2>

      <p className="text-gray-600 mt-4">
        View all your saved chapters.
      </p>

      <Link
        href="/bookmarks"
        className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
      >
        Open Bookmarks
      </Link>

    </div>
  );
}