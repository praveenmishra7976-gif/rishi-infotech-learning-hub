"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { History } from "lucide-react";
import { chemistryChapters } from "../data/chemistryChapters";

const STORAGE_KEY = "chemistryRecent";
const MAX_RECENT = 5;

type Props = {
  currentSlug?: string;
};

export default function RecentlyViewed({ currentSlug }: Props) {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored: string[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      let updated = stored.filter((slug) =>
        chemistryChapters.some((chapter) => chapter.slug === slug)
      );

      if (currentSlug) {
        updated = [
          currentSlug,
          ...updated.filter((slug) => slug !== currentSlug),
        ].slice(0, MAX_RECENT);

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(updated)
        );
      }

      setRecent(updated);
    } catch {
      setRecent(currentSlug ? [currentSlug] : []);
    }
  }, [currentSlug]);

  const chapters = recent
    .map((slug) =>
      chemistryChapters.find((chapter) => chapter.slug === slug)
    )
    .filter(
      (chapter): chapter is (typeof chemistryChapters)[number] =>
        Boolean(chapter)
    );

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
          <History
            className="text-blue-700"
            size={28}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Recently Viewed
          </h2>

          <p className="text-gray-500 mt-1">
            Chemistry chapters you recently opened.
          </p>
        </div>

      </div>

      {chapters.length === 0 ? (
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
          <p className="text-gray-500">
            No recently viewed Chemistry chapters yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/chemistry/${chapter.slug}`}
              className="block border border-gray-200 rounded-xl p-5 hover:bg-blue-50 hover:border-blue-200 transition"
            >
              <h3 className="font-bold text-gray-900">
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
