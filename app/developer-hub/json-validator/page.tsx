"use client";

import { useState } from "react";

export default function JSONValidator() {

  const [json, setJson] = useState("");
  const [result, setResult] = useState("");

  function validate() {
    try {
      JSON.parse(json);
      setResult("✅ Valid JSON");
    } catch {
      setResult("❌ Invalid JSON");
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          JSON Validator
        </h1>

        <textarea
          rows={12}
          value={json}
          onChange={(e)=>setJson(e.target.value)}
          className="w-full border rounded-xl p-4 mt-8"
        />

        <button
          onClick={validate}
          className="w-full mt-6 bg-blue-700 text-white py-4 rounded-xl"
        >
          Validate JSON
        </button>

        <div className="mt-8 text-2xl font-bold text-center">
          {result}
        </div>

      </div>

    </main>
  );
}