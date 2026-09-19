
"use client";

import { FormEvent, useState } from "react";
import {
  Search,
  Loader2,
  AlertCircle,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

type Definition = {
  synonyms?: string[];
};

type Meaning = {
  synonyms?: string[];
  definitions?: Definition[];
};

type DictionaryEntry = {
  word?: string;
  meanings?: Meaning[];
};

export default function SynonymFinder() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchSynonyms(searchTerm?: string) {
    const value = (searchTerm ?? word).trim();

    if (!value) {
      setError("Please enter a word.");
      setSynonyms([]);
      return;
    }

    setWord(value);
    setLoading(true);
    setError("");
    setSynonyms([]);

    try {
      const response = await fetch(
        `/api/free-dictionary?word=${encodeURIComponent(value)}`,
        {
          method: "GET",
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data: unknown = await response.json();

      if (!response.ok) {
        const errorData = data as {
          error?: string;
          message?: string;
        };

        throw new Error(
          errorData.error ||
            errorData.message ||
            "Word not found."
        );
      }

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("No dictionary information was found.");
      }

      const entry = data[0] as DictionaryEntry;

      const foundSynonyms = [
        ...new Set(
          (entry.meanings || []).flatMap((meaning) => [
            ...(meaning.synonyms || []),
            ...(meaning.definitions || []).flatMap(
              (definition) => definition.synonyms || []
            ),
          ])
        ),
      ].filter(
        (synonym) =>
          synonym.toLowerCase() !== value.toLowerCase()
      );

      if (foundSynonyms.length === 0) {
        throw new Error(
          `No synonyms were found for "${value}".`
        );
      }

      setSynonyms(foundSynonyms);
    } catch (err) {
      console.error("Synonym search error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to find synonyms."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    searchSynonyms();
  }

  function clearSearch() {
    setWord("");
    setSynonyms([]);
    setError("");
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
          <BookOpen size={28} />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-black text-blue-700">
            Synonym Finder
          </h1>

          <p className="mt-1 text-gray-500">
            Find words with similar meanings instantly.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col sm:flex-row gap-3"
      >
        <input
          type="text"
          value={word}
          onChange={(event) => {
            setWord(event.target.value);

            if (error) {
              setError("");
            }
          }}
          placeholder="Enter an English word..."
          autoComplete="off"
          className="flex-1 border border-gray-200 rounded-2xl px-5 py-4 text-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white px-8 py-4 rounded-2xl font-bold transition"
        >
          {loading ? (
            <>
              <Loader2
                size={20}
                className="animate-spin"
              />
              Searching...
            </>
          ) : (
            <>
              <Search size={20} />
              Find Synonyms
            </>
          )}
        </button>
      </form>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="text-sm text-gray-500 py-2">
          Try:
        </span>

        {["happy", "big", "fast", "smart", "beautiful"].map(
          (example) => (
            <button
              key={example}
              type="button"
              onClick={() => searchSynonyms(example)}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-blue-100 hover:text-blue-700 font-semibold text-sm transition"
            >
              {example}
            </button>
          )
        )}
      </div>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
          <div className="flex items-start gap-3">
            <AlertCircle
              size={22}
              className="shrink-0 mt-0.5"
            />

            <div>
              <p className="font-black">
                Search failed
              </p>

              <p className="mt-1 text-sm">
                {error}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={clearSearch}
            className="mt-4 ml-8 text-sm font-bold underline"
          >
            Clear search
          </button>
        </div>
      )}

      {loading && (
        <div className="mt-8 rounded-3xl bg-blue-50 border border-blue-100 p-10 text-center">
          <Loader2
            size={42}
            className="mx-auto text-blue-600 animate-spin"
          />

          <p className="mt-4 text-lg font-bold text-blue-700">
            Finding synonyms...
          </p>

          <p className="mt-1 text-sm text-blue-500">
            Please wait
          </p>
        </div>
      )}

      {synonyms.length > 0 && !loading && (
        <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">

          <div className="flex items-center gap-3">
            <CheckCircle2
              className="text-blue-600"
              size={25}
            />

            <div>
              <p className="text-sm font-black text-blue-600 uppercase">
                Synonyms for
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                {word}
              </h2>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {synonyms.map((synonym) => (
              <div
                key={synonym}
                className="rounded-2xl bg-white border border-blue-100 p-4 font-bold text-gray-800 shadow-sm"
              >
                {synonym}
              </div>
            ))}
          </div>

        </div>
      )}

      {!synonyms.length && !error && !loading && (
        <div className="mt-8 rounded-3xl border-2 border-dashed border-gray-200 p-10 text-center">
          <Search
            size={34}
            className="mx-auto text-gray-300"
          />

          <p className="mt-4 font-bold text-gray-500">
            Search a word to find its synonyms.
          </p>
        </div>
      )}

    </div>
  );
}