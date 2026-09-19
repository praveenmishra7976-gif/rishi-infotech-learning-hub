"use client";

import { useState } from "react";

export default function CssFormatter() {

  const [css, setCss] = useState("");

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-700">
        CSS Formatter
      </h2>

      <textarea
        rows={12}
        value={css}
        onChange={(e) => setCss(e.target.value)}
        className="w-full border rounded-xl p-4 mt-6 font-mono"
        placeholder="body{color:red;}"
      />

      <p className="mt-6 text-gray-600">
        Paste your CSS here for formatting (advanced formatting can be added later).
      </p>

    </div>

  );

}