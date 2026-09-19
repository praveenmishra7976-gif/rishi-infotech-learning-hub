"use client";

import { useState } from "react";

export default function UrlEncoder() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-700">
        URL Encoder / Decoder
      </h2>

      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded-xl p-4 mt-6"
      />

      <div className="flex gap-4 mt-6">

        <button
          onClick={() => setResult(encodeURIComponent(text))}
          className="bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Encode
        </button>

        <button
          onClick={() => {
            try {
              setResult(decodeURIComponent(text));
            } catch {
              setResult("Invalid URL");
            }
          }}
          className="bg-green-700 text-white px-6 py-3 rounded-xl"
        >
          Decode
        </button>

      </div>

      <textarea
        rows={6}
        readOnly
        value={result}
        className="w-full border rounded-xl p-4 mt-6"
      />

    </div>

  );

}