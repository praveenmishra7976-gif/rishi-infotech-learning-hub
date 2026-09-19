"use client";

import { useState } from "react";
import { FileCode, Copy, RotateCcw } from "lucide-react";

export default function HTMLFormatterPage() {
  const [input, setInput] = useState("");

  function formatHTML() {
    let formatted = input
      .replace(/></g, ">\n<")
      .replace(/\s{2,}/g, " ");

    setInput(formatted);
  }

  function copyCode() {
    navigator.clipboard.writeText(input);
    alert("Copied!");
  }

  function clearAll() {
    setInput("");
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <FileCode size={50} />

            <div>

              <h1 className="text-5xl font-black">
                HTML Formatter
              </h1>

              <p className="mt-3">
                Beautify your HTML code.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <textarea
            rows={18}
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className="w-full border rounded-2xl p-5 font-mono"
            placeholder="<html><body>Hello</body></html>"
          />

          <div className="grid md:grid-cols-3 gap-5 mt-8">

            <button
              onClick={formatHTML}
              className="bg-blue-600 text-white py-3 rounded-xl font-bold"
            >
              Format
            </button>

            <button
              onClick={copyCode}
              className="bg-green-600 text-white py-3 rounded-xl flex justify-center items-center gap-2"
            >
              <Copy size={18}/>
              Copy
            </button>

            <button
              onClick={clearAll}
              className="bg-red-600 text-white py-3 rounded-xl flex justify-center items-center gap-2"
            >
              <RotateCcw size={18}/>
              Clear
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}