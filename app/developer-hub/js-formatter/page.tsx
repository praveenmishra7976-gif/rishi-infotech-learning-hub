"use client";

import { useState } from "react";

export default function JSFormatter() {

  const [code, setCode] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          JavaScript Formatter
        </h1>

        <textarea
          rows={15}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border rounded-xl p-4 mt-8"
          placeholder="console.log('Hello');"
        />

      </div>

    </main>
  );
}