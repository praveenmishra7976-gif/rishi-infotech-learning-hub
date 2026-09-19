"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { History } from "lucide-react";
import { physicsChapters } from "../../data/physicsChapters";

export default function RecentlyViewed() {

  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {

    const data = JSON.parse(
      localStorage.getItem("physicsRecent") || "[]"
    );

    setRecent(data);

  }, []);

  const chapters = physicsChapters.filter((chapter) =>
    recent.includes(chapter.slug)
  );

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <History className="text-blue-700" size={32} />

        <h2 className="text-3xl font-bold">

          Recently Viewed

        </h2>

      </div>

      {chapters.length === 0 ? (

        <p className="text-gray-500">

          No recently viewed chapters.

        </p>

      ) : (

        <div className="space-y-4">

          {chapters.map((chapter) => (

            <Link
              key={chapter.id}
              href={`/physics/${chapter.slug}`}
              className="block border rounded-xl p-5 hover:bg-blue-50 transition"
            >

              <h3 className="font-bold">

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