"use client";

import { useState } from "react";

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function testRegex() {
    try {
      const regex = new RegExp(pattern, "g");
      const matches = text.match(regex);

      if (matches) {
        setResult(matches.join(", "));
      } else {
        setResult("No Match Found");
      }
    } catch {
      setResult("Invalid Regular Expression");
    }
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="max-w-5xl mx-auto py-20 px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-4xl font-black mb-8">
            Regex Tester
          </h1>

          <input
            value={pattern}
            onChange={(e)=>setPattern(e.target.value)}
            placeholder="Regex Pattern"
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows={10}
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full border rounded-xl p-4 mt-6"
          />

          <button
            onClick={testRegex}
            className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-bold"
          >
            Test Regex
          </button>

          <div className="mt-8 p-5 rounded-xl bg-slate-100">

            <strong>Result:</strong>

            <p className="mt-3 break-all">
              {result}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}