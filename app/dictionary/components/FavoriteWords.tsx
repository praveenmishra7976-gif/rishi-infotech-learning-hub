
"use client";

import { Heart, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "dictionaryFavoriteWords";

export default function FavoriteWords() {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setWords(
            parsed.filter(
              (word): word is string =>
                typeof word === "string"
            )
          );
        }
      }
    } catch {
      setWords([]);
    }
  }, []);

  function removeFavorite(word: string) {
    const updated = words.filter(
      (item) => item !== word
    );

    setWords(updated);

    if (updated.length > 0) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  if (words.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-8 mt-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <Heart size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Favorite Words
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Save important words for quick revision.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-100 p-6 text-center">
          <Heart
            size={32}
            className="mx-auto text-gray-300"
          />

          <p className="mt-3 font-semibold text-gray-500">
            No favorite words yet.
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Favorite a word from the dictionary to save it here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-8 mt-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <Heart size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Favorite Words
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Words saved for revision.
            </p>
          </div>
        </div>

        <span className="rounded-full bg-red-50 text-red-600 px-3 py-1 text-sm font-black">
          {words.length}
        </span>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        {words.map((word) => (
          <div
            key={word}
            className="flex items-center justify-between gap-3 rounded-2xl bg-gray-50 border border-gray-100 p-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Heart
                size={18}
                className="text-red-500 fill-red-500 shrink-0"
              />

              <span className="font-bold text-gray-700 truncate">
                {word}
              </span>
            </div>

            <button
              type="button"
              onClick={() => removeFavorite(word)}
              title={`Remove ${word} from favorites`}
              className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-200 transition shrink-0"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
