"use client";

import { useState } from "react";
import {
  Search,
  BookOpen,
  Loader2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

type EncyclopediaResult = {
  title: string;
  description?: string;
  extract?: string;
  thumbnail?: {
    source?: string;
    width?: number;
    height?: number;
  };
  content_urls?: {
    desktop?: {
      page?: string;
    };
    mobile?: {
      page?: string;
    };
  };
};

export default function Encyclopedia() {
  const [topic, setTopic] = useState("");
  const [result, setResult] =
    useState<EncyclopediaResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchTopic(searchTerm?: string) {
    const value = (searchTerm ?? topic).trim();

    if (!value) {
      setError("Please enter a topic.");
      setResult(null);
      return;
    }

    setTopic(value);
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        `/api/encyclopedia?topic=${encodeURIComponent(value)}`,
        {
          method: "GET",
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const text = await response.text();

      let data: unknown;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(
          "The encyclopedia server returned an invalid response."
        );
      }

      console.log("Encyclopedia:", data);

      if (!response.ok) {
        const errorData = data as {
          error?: string;
          message?: string;
        };

        throw new Error(
          errorData.error ||
            errorData.message ||
            "Topic not found."
        );
      }

      const encyclopediaData =
        data as EncyclopediaResult;

      if (
        !encyclopediaData.title &&
        !encyclopediaData.extract
      ) {
        throw new Error(
          "No encyclopedia information was found."
        );
      }

      setResult(encyclopediaData);
    } catch (err) {
      console.error(
        "Encyclopedia search error:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Unable to search encyclopedia."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    searchTopic();
  }

  function clearSearch() {
    setTopic("");
    setResult(null);
    setError("");
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0">
          <BookOpen
            className="text-purple-700"
            size={28}
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-black text-purple-700">
            Encyclopedia
          </h1>

          <p className="mt-1 text-gray-500">
            Explore information about science,
            technology, people, places and more.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col sm:flex-row gap-3"
      >
        <input
          type="text"
          value={topic}
          onChange={(event) => {
            setTopic(event.target.value);

            if (error) {
              setError("");
            }
          }}
          placeholder="Search a topic..."
          autoComplete="off"
          className="flex-1 border border-gray-200 rounded-2xl px-5 py-4 text-lg text-gray-900 outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 disabled:bg-purple-400 text-white px-8 py-4 rounded-2xl font-bold transition"
        >
          {loading ? (
            <>
              <Loader2
                size={19}
                className="animate-spin"
              />
              Searching...
            </>
          ) : (
            <>
              <Search size={19} />
              Search
            </>
          )}
        </button>
      </form>

      <div className="mt-5 flex flex-wrap gap-2">
        {[
          "computer",
          "physics",
          "India",
          "Albert Einstein",
          "Internet",
        ].map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => searchTopic(example)}
            className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-purple-100 hover:text-purple-700 font-semibold transition"
          >
            {example}
          </button>
        ))}
      </div>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
          <div className="flex items-start gap-3">
            <AlertCircle
              size={22}
              className="shrink-0 mt-0.5"
            />

            <div className="flex-1">
              <p className="font-black">
                Search failed
              </p>

              <p className="mt-1 text-sm leading-relaxed">
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
        <div className="mt-8 rounded-3xl bg-purple-50 border border-purple-100 p-10 text-center">
          <Loader2
            size={42}
            className="mx-auto text-purple-600 animate-spin"
          />

          <p className="mt-4 text-lg font-bold text-purple-700">
            Searching Encyclopedia...
          </p>

          <p className="mt-1 text-sm text-purple-500">
            Please wait
          </p>
        </div>
      )}

      {result && !loading && (
        <article className="mt-8 rounded-3xl border border-gray-200 overflow-hidden">

          {result.thumbnail?.source && (
            <div className="bg-gray-100 flex justify-center p-4">
              <img
                src={result.thumbnail.source}
                alt={result.title}
                className="max-h-96 max-w-full object-contain"
              />
            </div>
          )}

          <div className="p-6 md:p-9">
            <h2 className="text-4xl font-black text-gray-900">
              {result.title}
            </h2>

            {result.description && (
              <p className="mt-3 text-lg font-semibold text-purple-700">
                {result.description}
              </p>
            )}

            {result.extract && (
              <div className="mt-7">
                <h3 className="text-2xl font-black text-gray-900">
                  About {result.title}
                </h3>

                <p className="mt-4 text-gray-700 leading-8 text-lg">
                  {result.extract}
                </p>
              </div>
            )}

            {result.content_urls?.desktop?.page && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href={result.content_urls.desktop.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl font-bold transition"
                >
                  Read Full Article
                  <ExternalLink size={17} />
                </a>
              </div>
            )}
          </div>
        </article>
      )}

      {!result && !error && !loading && (
        <div className="mt-8 rounded-3xl border-2 border-dashed border-gray-200 p-10 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-50 flex items-center justify-center">
            <Search
              size={30}
              className="text-purple-600"
            />
          </div>

          <h2 className="mt-5 text-2xl font-black text-gray-900">
            Search the Encyclopedia
          </h2>

          <p className="mt-2 text-gray-500 max-w-xl mx-auto">
            Search for a topic such as Computer,
            Physics, India or Internet.
          </p>
        </div>
      )}
    </div>
  );
}
