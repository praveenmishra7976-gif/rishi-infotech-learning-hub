"use client";

import { useState } from "react";

export default function JsFormatter() {

  const [js, setJs] = useState("");

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-700">
        JavaScript Formatter
      </h2>

      <textarea
        rows={12}
        value={js}
        onChange={(e) => setJs(e.target.value)}
        className="w-full border rounded-xl p-4 mt-6 font-mono"
        placeholder="console.log('Hello');"
      />

      <p className="mt-6 text-gray-600">
        JavaScript formatter preview.
      </p>

    </div>

  );

}