"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { chemistryChapters } from "../data/chemistryChapters";

const STORAGE_KEY = "chemistryBookmarks";
const PROGRESS_EVENT = "chemistryProgressUpdated";

function readFavorites(): string[] {
  try {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    if (!Array.isArray(data)) {
      return [];
    }

    return data.filter(
      (item): item is string => typeof item === "string"
    );
  } catch {
    return [];
  }
}

export default function FavoriteChapters() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const refreshFavorites = () => {
      setFavorites(readFavorites());
    };

    refreshFavorites();

    window.addEventListener("storage", refreshFavorites);
    window.addEventListener(PROGRESS_EVENT, refreshFavorites);

    return () => {
      window.removeEventListener("storage", refreshFavorites);
      window.removeEventListener(PROGRESS_EVENT, refreshFavorites);
    };
  }, []);

  const favoriteChapters = chemistryChapters.filter((chapter) =>
    favorites.includes(chapter.slug)
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center">
          <Heart className="text-red-600" size={28} />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Favorite Chapters
          </h2>

          <p className="text-gray-500 mt-1">
            Your bookmarked Chemistry chapters.
          </p>

        </div>

      </div>

      {favoriteChapters.length === 0 ? (

        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">

          <p className="text-gray-500">
            No bookmarked Chemistry chapters yet.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {favoriteChapters.map((chapter) => (

            <Link
              key={chapter.id}
              href={`/chemistry/${chapter.slug}`}
              className="block border border-gray-200 rounded-xl p-5 hover:bg-red-50 hover:border-red-200 transition"
            >

              <h3 className="font-bold text-lg text-gray-900">
                {chapter.title}
              </h3>

              <p className="text-gray-500 mt-1">
                {chapter.description}
              </p>

            </Link>

          ))}

        </div>

      )}

    </div>
  );
}
