"use client";

import Link from "next/link";
import { Clock3, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "dictionaryRecentSearches";

export default function RecentSearches() {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setWords(
            parsed
              .filter(
                (word): word is string =>
                  typeof word === "string"
              )
              .slice(0, 10)
          );
        }
      }
    } catch {
      setWords([]);
    }
  }, []);

  function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
    setWords([]);
  }

  if (words.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-8 mt-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Clock3 size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Recent Searches
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your recent dictionary searches will appear here.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-100 p-6 text-center">
          <Search
            size={30}
            className="mx-auto text-gray-300"
          />

          <p className="mt-3 font-semibold text-gray-500">
            No recent searches yet.
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Search for a word to see it here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-8 mt-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Clock3 size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Recent Searches
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your recently searched words.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={clearHistory}
          className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
        >
          <Trash2 size={16} />
          Clear
        </button>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        {words.map((word) => (
          <Link
            key={word}
            href={`/dictionary/dictionary-api?word=${encodeURIComponent(word)}`}
            className="group flex items-center gap-3 rounded-2xl bg-gray-50 border border-gray-100 p-4 hover:bg-blue-50 hover:border-blue-100 transition"
          >
            <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <Search
                size={17}
                className="text-blue-600"
              />
            </div>

            <span className="font-bold text-gray-700 group-hover:text-blue-700">
              {word}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
