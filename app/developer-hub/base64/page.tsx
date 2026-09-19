"use client";

import { useState } from "react";
import { Binary, Copy, RotateCcw } from "lucide-react";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function encode() {
    try {
      setOutput(btoa(input));
    } catch {
      alert("Unable to encode.");
    }
  }

  function decode() {
    try {
      setOutput(atob(input));
    } catch {
      alert("Invalid Base64 String");
    }
  }

  function copy() {
    navigator.clipboard.writeText(output);
    alert("Copied!");
  }

  function clearAll() {
    setInput("");
    setOutput("");
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <Binary size={50} />

            <div>

              <h1 className="text-5xl font-black">
                Base64 Encoder & Decoder
              </h1>

              <p className="mt-3 text-blue-100">
                Encode or Decode Base64 instantly.
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
            placeholder="Enter text or Base64..."
            className="w-full border rounded-2xl p-5"
          />

          <div className="grid md:grid-cols-4 gap-4 mt-8">

            <button
              onClick={encode}
              className="bg-blue-600 text-white py-3 rounded-xl font-bold"
            >
              Encode
            </button>

            <button
              onClick={decode}
              className="bg-green-600 text-white py-3 rounded-xl font-bold"
            >
              Decode
            </button>

            <button
              onClick={copy}
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