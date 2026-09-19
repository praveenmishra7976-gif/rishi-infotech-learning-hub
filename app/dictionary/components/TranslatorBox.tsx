"use client";

import { useState } from "react";

export default function TranslatorBox() {

  const [input, setInput] = useState("");

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-2xl font-bold text-blue-700">

        Translator

      </h2>

      <textarea

        rows={6}
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className="w-full border rounded-xl p-4 mt-6"
        placeholder="Enter text..."

      />

      <button

        className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"

      >

        Translate

      </button>

      <textarea

        rows={6}
        readOnly
        value={input}
        className="w-full border rounded-xl p-4 mt-6"

      />

    </div>

  );

}