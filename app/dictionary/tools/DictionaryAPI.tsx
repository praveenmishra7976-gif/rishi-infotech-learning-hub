"use client";

import { FormEvent, useState } from "react";
import {
  Search,
  BookOpen,
  Volume2,
  Loader2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

type Definition = {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
};

type Phonetic = {
  text?: string;
  audio?: string;
};

type DictionaryResult = {
  word: string;
  phonetic?: string;
  phonetics?: Phonetic[];
  meanings: Meaning[];
  sourceUrls?: string[];
};

export default function DictionaryAPI() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState<DictionaryResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchWord(value?: string) {
    const searchValue = (value ?? word).trim();

    if (!searchValue) {
      setError("Please enter a word.");
      setResult(null);
      return;
    }

    setWord(searchValue);
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        `/api/free-dictionary?word=${encodeURIComponent(searchValue)}`,
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
          "The dictionary server returned an invalid response."
        );
      }

      console.log("Free Dictionary:", data);

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
        throw new Error(
          "No dictionary information was found for this word."
        );
      }

      const entry = data[0] as {
        word?: string;
        phonetic?: string;
        phonetics?: Phonetic[];
        meanings?: Meaning[];
        sourceUrls?: string[];
      };

      const meanings = Array.isArray(entry.meanings)
        ? entry.meanings
        : [];

      if (meanings.length === 0) {
        throw new Error(
          "The dictionary returned the word but no meanings."
        );
      }

      setResult({
        word: entry.word || searchValue,
        phonetic: entry.phonetic || "",
        phonetics: Array.isArray(entry.phonetics)
          ? entry.phonetics
          : [],
        meanings,
        sourceUrls: Array.isArray(entry.sourceUrls)
          ? entry.sourceUrls
          : [],
      });
    } catch (err) {
      console.error("Dictionary search error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to search the dictionary."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    searchWord();
  }

  function playAudio() {
    if (!result) return;

    const audioUrl = result.phonetics?.find(
      (item) => item.audio
    )?.audio;

    if (!audioUrl) {
      speakWord();
      return;
    }

    const audio = new Audio(audioUrl);

    audio.play().catch(() => {
      speakWord();
    });
  }

  function speakWord() {
    if (
      !result?.word ||
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      return;
    }

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(result.word);

    speech.lang = "en-US";
    speech.rate = 0.85;

    window.speechSynthesis.speak(speech);
  }

  function clearSearch() {
    setWord("");
    setResult(null);
    setError("");
  }

  const allDefinitions =
    result?.meanings.flatMap((meaning) =>
      meaning.definitions.map((definition) => ({
        ...definition,
        partOfSpeech: meaning.partOfSpeech,
      }))
    ) || [];

  const synonyms = result
    ? [
        ...new Set(
          result.meanings.flatMap((meaning) => [
            ...(meaning.synonyms || []),
            ...meaning.definitions.flatMap(
              (definition) => definition.synonyms || []
            ),
          ])
        ),
      ]
    : [];

  const antonyms = result
    ? [
        ...new Set(
          result.meanings.flatMap((meaning) => [
            ...(meaning.antonyms || []),
            ...meaning.definitions.flatMap(
              (definition) => definition.antonyms || []
            ),
          ])
        ),
      ]
    : [];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
          <BookOpen
            className="text-blue-700"
            size={28}
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-black text-blue-700">
            Free Dictionary
          </h1>

          <p className="text-gray-500 mt-1">
            Free meanings, pronunciation, examples,
            synonyms and antonyms.
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
          placeholder="Search any English word..."
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
              Search
            </>
          )}
        </button>
      </form>

      {!result && !error && !loading && (
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 py-2">
            Try:
          </span>

          {[
            "computer",
            "apple",
            "education",
            "technology",
            "knowledge",
          ].map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => searchWord(example)}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-blue-100 hover:text-blue-700 font-semibold text-sm transition"
            >
              {example}
            </button>
          ))}
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
          <div className="flex items-start gap-3">
            <AlertCircle
              size={23}
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
        <div className="mt-8 rounded-3xl bg-blue-50 border border-blue-100 p-10 text-center">
          <Loader2
            size={42}
            className="mx-auto text-blue-600 animate-spin"
          />

          <p className="mt-4 text-lg font-bold text-blue-700">
            Searching dictionary...
          </p>

          <p className="mt-1 text-sm text-blue-500">
            Please wait
          </p>
        </div>
      )}

      {result && !loading && (
        <div className="mt-8 rounded-3xl border border-gray-200 overflow-hidden">

          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white p-7 md:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

              <div>
                <h2 className="text-4xl md:text-5xl font-black">
                  {result.word}
                </h2>

                {result.phonetic && (
                  <p className="mt-3 text-xl text-white/85">
                    {result.phonetic}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={playAudio}
                  title="Play pronunciation"
                  className="w-12 h-12 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center transition"
                >
                  <Volume2 size={23} />
                </button>

                <button
                  type="button"
                  onClick={speakWord}
                  className="px-5 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold transition"
                >
                  Speak
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-9">

            <section>
              <h3 className="text-2xl font-black text-gray-900">
                Meanings
              </h3>

              <div className="mt-5 space-y-4">
                {allDefinitions.map(
                  (definition, index) => (
                    <div
                      key={`${definition.definition}-${index}`}
                      className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
                    >
                      <div className="flex items-start gap-4">

                        <span className="w-9 h-9 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                          {index + 1}
                        </span>

                        <div className="flex-1">
                          <span className="inline-block mb-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase">
                            {definition.partOfSpeech}
                          </span>

                          <p className="text-gray-700 leading-relaxed font-medium">
                            {definition.definition}
                          </p>

                          {definition.example && (
                            <div className="mt-4 p-4 rounded-xl bg-white border border-gray-200">
                              <p className="text-xs font-black text-gray-500 uppercase">
                                Example
                              </p>

                              <p className="mt-1 text-gray-600 italic">
                                “{definition.example}”
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            {synonyms.length > 0 && (
              <section className="mt-10">
                <h3 className="text-2xl font-black text-gray-900">
                  Synonyms
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {synonyms.slice(0, 40).map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-green-50 text-green-700 border border-green-100 font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {antonyms.length > 0 && (
              <section className="mt-8">
                <h3 className="text-2xl font-black text-gray-900">
                  Antonyms
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {antonyms.slice(0, 40).map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-red-50 text-red-700 border border-red-100 font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {result.sourceUrls &&
              result.sourceUrls.length > 0 && (
                <section className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Dictionary source
                  </p>

                  <div className="mt-2">
                    {result.sourceUrls.map((url) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                      >
                        View source
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                </section>
              )}

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Dictionary data provided by Free Dictionary API.
              </p>
            </div>
          </div>
        </div>
      )}

      {!result && !error && !loading && (
        <div className="mt-8 rounded-3xl border-2 border-dashed border-gray-200 p-10 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
            <Search
              size={30}
              className="text-blue-600"
            />
          </div>

          <h2 className="mt-5 text-2xl font-black text-gray-900">
            Search the Dictionary
          </h2>

          <p className="mt-2 text-gray-500 max-w-lg mx-auto">
            Enter an English word above to see its
            meaning, pronunciation, examples,
            synonyms and antonyms.
          </p>
        </div>
      )}
    </div>
  );
}
