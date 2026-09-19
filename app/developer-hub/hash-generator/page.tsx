"use client";

import { useState } from "react";
import { ShieldCheck, Copy } from "lucide-react";

export default function HashGeneratorPage() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");

  async function generateHash() {
    if (!text) return;

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const buffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(buffer));

    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(hashHex);
  }

  function copyHash() {
    navigator.clipboard.writeText(hash);
    alert("Hash Copied!");
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <ShieldCheck size={50} />

            <div>

              <h1 className="text-5xl font-black">
                SHA-256 Hash Generator
              </h1>

              <p className="mt-3 text-slate-200">
                Generate secure SHA-256 hashes instantly.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <textarea
            rows={8}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full border rounded-2xl p-5"
          />

          <button
            onClick={generateHash}
            className="w-full mt-8 bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold"
          >
            Generate Hash
          </button>

          <div className="mt-10">

            <div className="flex justify-between">

              <h2 className="font-bold text-xl">
                SHA-256
              </h2>

              <button
                onClick={copyHash}
              >
                <Copy />
              </button>

            </div>

            <textarea
              readOnly
              rows={8}
              value={hash}
              className="w-full mt-5 border rounded-2xl p-5 bg-slate-100 font-mono text-sm"
            />

          </div>

        </div>

      </section>

    </main>
  );
}