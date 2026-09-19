"use client";

import { useState } from "react";
import { Copy, RefreshCw } from "lucide-react";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

export default function LoremPage() {
  const [paragraphs, setParagraphs] = useState(3);
  const [text, setText] = useState("");

  function generate() {
    let output = "";

    for (let i = 0; i < paragraphs; i++) {
      output += lorem + "\n\n";
    }

    setText(output);
  }

  function copy() {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="max-w-5xl mx-auto py-20 px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-4xl font-black mb-8">
            Lorem Ipsum Generator
          </h1>

          <label className="font-bold">
            Paragraphs
          </label>

          <input
            type="number"
            min={1}
            max={20}
            value={paragraphs}
            onChange={(e) => setParagraphs(Number(e.target.value))}
            className="border rounded-xl p-3 w-full mt-3"
          />

          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <button
              onClick={generate}
              className="bg-blue-600 text-white py-4 rounded-xl flex justify-center gap-2"
            >
              <RefreshCw size={20}/>
              Generate
            </button>

            <button
              onClick={copy}
              className="bg-green-600 text-white py-4 rounded-xl flex justify-center gap-2"
            >
              <Copy size={20}/>
              Copy
            </button>

          </div>

          <textarea
            rows={16}
            value={text}
            readOnly
            className="w-full mt-8 border rounded-2xl p-5"
          />

        </div>

      </section>

    </main>
  );
}