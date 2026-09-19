"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { physicsChapters } from "../../data/physicsChapters";

export default function FavoriteChapters() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("physicsBookmarks") || "[]"
    );
    setFavorites(data);
  }, []);

  const favoriteChapters = physicsChapters.filter((chapter) =>
    favorites.includes(chapter.slug)
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <Heart className="text-red-600" size={32} />

        <h2 className="text-3xl font-bold">
          Favorite Chapters
        </h2>

      </div>

      {favoriteChapters.length === 0 ? (

        <p className="text-gray-500">
          No bookmarked chapters yet.
        </p>

      ) : (

        <div className="space-y-4">

          {favoriteChapters.map((chapter) => (

            <Link
              key={chapter.id}
              href={`/physics/${chapter.slug}`}
              className="block border rounded-xl p-5 hover:bg-red-50 transition"
            >

              <h3 className="font-bold text-lg">
                {chapter.title}
              </h3>

              <p className="text-gray-500">
                {chapter.description}
              </p>

            </Link>

          ))}

        </div>

      )}

    </div>
  );
}