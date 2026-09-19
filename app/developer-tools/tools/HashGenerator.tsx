"use client";

import { useState } from "react";

export default function HashGenerator() {

  const [text, setText] = useState("");
  const [hash, setHash] = useState("");

  async function generateHash() {

    const data = new TextEncoder().encode(text);

    const digest = await crypto.subtle.digest("SHA-256", data);

    const result = Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(result);

  }

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-700">
        SHA-256 Hash Generator
      </h2>

      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded-xl p-4 mt-6"
      />

      <button
        onClick={generateHash}
        className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"
      >
        Generate Hash
      </button>

      <textarea
        rows={6}
        readOnly
        value={hash}
        className="w-full border rounded-xl p-4 mt-6"
      />

    </div>

  );

}