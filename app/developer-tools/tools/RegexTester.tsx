"use client";

import { useState } from "react";

export default function RegexTester() {

  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function testRegex() {

    try {

      const regex = new RegExp(pattern);

      if (regex.test(text)) {
        setResult("✅ Match Found");
      } else {
        setResult("❌ No Match");
      }

    } catch {

      setResult("Invalid Regular Expression");

    }

  }

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-700">
        Regex Tester
      </h2>

      <input
        className="w-full border rounded-xl p-4 mt-6"
        placeholder="Regex Pattern"
        value={pattern}
        onChange={(e)=>setPattern(e.target.value)}
      />

      <textarea
        rows={6}
        className="w-full border rounded-xl p-4 mt-6"
        placeholder="Enter Text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />

      <button
        onClick={testRegex}
        className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"
      >
        Test Regex
      </button>

      <div className="mt-8 bg-gray-100 rounded-xl p-6">

        <h3 className="font-bold">
          Result
        </h3>

        <p className="mt-3">
          {result}
        </p>

      </div>

    </div>

  );

}