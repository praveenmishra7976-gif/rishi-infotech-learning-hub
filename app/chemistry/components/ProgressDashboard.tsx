"use client";

import { useEffect, useState } from "react";
import { BarChart3, Bookmark, CheckCircle2, Target } from "lucide-react";
import { chemistryChapters } from "../data/chemistryChapters";

const COMPLETED_KEY = "chemistryCompletedChapters";
const BOOKMARKS_KEY = "chemistryBookmarks";
const PROGRESS_EVENT = "chemistryProgressUpdated";

export default function ProgressDashboard() {
  const [completedCount, setCompletedCount] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useEffect(() => {
    function loadProgress() {
      try {
        const completed: string[] = JSON.parse(
          localStorage.getItem(COMPLETED_KEY) || "[]"
        );

        const bookmarks: string[] = JSON.parse(
          localStorage.getItem(BOOKMARKS_KEY) || "[]"
        );

        const validChapterSlugs = new Set(
          chemistryChapters.map((chapter) => chapter.slug)
        );

        const validCompleted = completed.filter((slug) =>
          validChapterSlugs.has(slug)
        );

        const validBookmarks = bookmarks.filter((slug) =>
          validChapterSlugs.has(slug)
        );

        setCompletedCount(validCompleted.length);
        setBookmarkCount(validBookmarks.length);
      } catch {
        setCompletedCount(0);
        setBookmarkCount(0);
      }
    }

    loadProgress();

    window.addEventListener("storage", loadProgress);
    window.addEventListener(PROGRESS_EVENT, loadProgress);

    return () => {
      window.removeEventListener("storage", loadProgress);
      window.removeEventListener(PROGRESS_EVENT, loadProgress);
    };
  }, []);

  const totalChapters = chemistryChapters.length;

  const percentage =
    totalChapters > 0
      ? Math.round((completedCount / totalChapters) * 100)
      : 0;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
          <BarChart3
            className="text-blue-700"
            size={30}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Chemistry Learning Progress
          </h2>

          <p className="text-gray-500 mt-1">
            Your progress is saved in this browser.
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-blue-50 rounded-2xl p-6 text-center">
          <CheckCircle2
            className="mx-auto text-blue-700"
            size={30}
          />

          <h3 className="text-4xl font-bold text-blue-700 mt-3">
            {completedCount}/{totalChapters}
          </h3>

          <p className="mt-2 text-gray-700">
            Chapters Completed
          </p>
        </div>

        <div className="bg-red-50 rounded-2xl p-6 text-center">
          <Bookmark
            className="mx-auto text-red-600"
            size={30}
          />

          <h3 className="text-4xl font-bold text-red-600 mt-3">
            {bookmarkCount}
          </h3>

          <p className="mt-2 text-gray-700">
            Bookmarked Chapters
          </p>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-6 text-center">
          <Target
            className="mx-auto text-yellow-600"
            size={30}
          />

          <h3 className="text-4xl font-bold text-yellow-700 mt-3">
            {percentage}%
          </h3>

          <p className="mt-2 text-gray-700">
            Course Progress
          </p>
        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
          <span>Course Progress</span>
          <span>{percentage}%</span>
        </div>

        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-green-500 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

      </div>

    </div>
  );
}
