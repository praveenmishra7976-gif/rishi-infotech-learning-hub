"use client";

import { useState } from "react";
import { Globe, Copy, RotateCcw } from "lucide-react";

export default function URLEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function encodeURL() {
    setOutput(encodeURIComponent(input));
  }

  function decodeURL() {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      alert("Invalid Encoded URL");
    }
  }

  function copyOutput() {
    navigator.clipboard.writeText(output);
    alert("Copied!");
  }

  function clearAll() {
    setInput("");
    setOutput("");
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <Globe size={50} />

            <div>

              <h1 className="text-5xl font-black">
                URL Encoder & Decoder
              </h1>

              <p className="mt-3 text-blue-100">
                Encode and Decode URLs instantly.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <textarea
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter URL..."
            className="w-full border rounded-2xl p-5"
          />

          <div className="grid md:grid-cols-4 gap-4 mt-8">

            <button
              onClick={encodeURL}
              className="bg-blue-600 text-white py-3 rounded-xl font-bold"
            >
              Encode
            </button>

            <button
              onClick={decodeURL}
              className="bg-green-600 text-white py-3 rounded-xl font-bold"
            >
              Decode
            </button>

            <button
              onClick={copyOutput}
              className="bg-purple-600 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2"
            >
              <Copy size={18} />
              Copy
            </button>

            <button
              onClick={clearAll}
              className="bg-red-600 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2"
            >
              <RotateCcw size={18} />
              Clear
            </button>

          </div>

          <textarea
            rows={8}
            readOnly
            value={output}
            className="w-full border rounded-2xl p-5 mt-10 bg-slate-100"
          />

        </div>

      </section>

    </main>
  );
}