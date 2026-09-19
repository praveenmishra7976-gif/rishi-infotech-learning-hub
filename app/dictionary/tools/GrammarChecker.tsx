
"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  RotateCcw,
  SpellCheck,
} from "lucide-react";

type GrammarResponse = {
  correctedText?: string;
  suggestions?: string[];
  message?: string;
  error?: string;
};

export default function GrammarChecker() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<GrammarResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function checkGrammar() {
    const value = text.trim();

    if (!value) {
      setError("Please enter some text to check.");
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        `/api/grammar-check?text=${encodeURIComponent(value)}`,
        {
          method: "GET",
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const responseText = await response.text();

      let data: GrammarResponse;

      try {
        data = JSON.parse(responseText);
      } catch {
        console.error(
          "Grammar API returned:",
          responseText
        );

        throw new Error(
          "Grammar service returned an invalid response. Please check the API route."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            data.message ||
            "Grammar checking failed."
        );
      }

      setResult(data);
    } catch (err) {
      console.error("Grammar check error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to check grammar."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    checkGrammar();
  }

  function clearAll() {
    setText("");
    setResult(null);
    setError("");
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

      {/* HEADER */}

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
          <SpellCheck
            size={28}
            className="text-blue-700"
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-black text-blue-700">
            Grammar Checker
          </h1>

          <p className="mt-1 text-gray-500">
            Check your English writing and find grammar mistakes.
          </p>
        </div>

      </div>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="mt-8"
      >

        <textarea
          rows={10}
          value={text}
          onChange={(event) => {
            setText(event.target.value);

            if (error) {
              setError("");
            }
          }}
          placeholder="Type or paste your English text here..."
          className="w-full border border-gray-200 rounded-2xl p-5 text-lg text-gray-900 outline-none resize-y focus:ring-2 focus:ring-blue-600"
        />

        <div className="mt-4 flex flex-wrap gap-3">

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white px-7 py-3 rounded-xl font-bold transition"
          >
            {loading ? (
              <>
                <Loader2
                  size={19}
                  className="animate-spin"
                />
                Checking...
              </>
            ) : (
              <>
                <SpellCheck size={19} />
                Check Grammar
              </>
            )}
          </button>

          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-7 py-3 rounded-xl font-bold transition"
          >
            <RotateCcw size={18} />
            Clear
          </button>

        </div>

      </form>

      {/* ERROR */}

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">

          <div className="flex items-start gap-3">

            <AlertCircle
              size={23}
              className="text-red-600 shrink-0 mt-0.5"
            />

            <div>
              <p className="font-black text-red-700">
                Grammar check failed
              </p>

              <p className="mt-1 text-sm text-red-600 leading-6">
                {error}
              </p>
            </div>

          </div>

        </div>
      )}

      {/* LOADING */}

      {loading && (
        <div className="mt-8 rounded-3xl bg-blue-50 border border-blue-100 p-10 text-center">

          <Loader2
            size={40}
            className="mx-auto text-blue-600 animate-spin"
          />

          <p className="mt-4 text-lg font-black text-blue-700">
            Checking your grammar...
          </p>

          <p className="mt-1 text-sm text-blue-500">
            Please wait
          </p>

        </div>
      )}

      {/* RESULT */}

      {result && !loading && (
        <div className="mt-8 space-y-5">

          {result.correctedText && (
            <div className="rounded-3xl border border-green-200 bg-green-50 p-6">

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={25}
                  className="text-green-600"
                />

                <h2 className="text-xl font-black text-green-700">
                  Corrected Text
                </h2>

              </div>

              <p className="mt-4 text-gray-800 text-lg leading-8 whitespace-pre-wrap">
                {result.correctedText}
              </p>

            </div>
          )}

          {result.suggestions &&
            result.suggestions.length > 0 && (
              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">

                <h2 className="text-xl font-black text-blue-700">
                  Suggestions
                </h2>

                <div className="mt-4 space-y-3">

                  {result.suggestions.map(
                    (suggestion, index) => (
                      <div
                        key={`${suggestion}-${index}`}
                        className="rounded-2xl bg-white border border-blue-100 p-4"
                      >
                        <span className="font-black text-blue-600 mr-2">
                          {index + 1}.
                        </span>

                        <span className="text-gray-700">
                          {suggestion}
                        </span>
                      </div>
                    )
                  )}

                </div>

              </div>
            )}

          {!result.correctedText &&
            (!result.suggestions ||
              result.suggestions.length === 0) && (
              <div className="rounded-3xl border border-green-200 bg-green-50 p-6 text-center">

                <CheckCircle2
                  size={38}
                  className="mx-auto text-green-600"
                />

                <p className="mt-3 text-lg font-black text-green-700">
                  No grammar problems were found.
                </p>

              </div>
            )}

        </div>
      )}

      {/* EMPTY STATE */}

      {!result && !error && !loading && (
        <div className="mt-8 rounded-3xl border-2 border-dashed border-gray-200 p-8 text-center">

          <SpellCheck
            size={38}
            className="mx-auto text-gray-300"
          />

          <p className="mt-4 font-bold text-gray-500">
            Enter your text above
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Then click Check Grammar to analyze your writing.
          </p>

        </div>
      )}

    </div>
  );
}
