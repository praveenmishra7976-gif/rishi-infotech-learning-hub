"use client";

import { useState } from "react";

export default function UUIDGenerator() {

  const [uuid, setUuid] = useState("");

  function generate() {

    setUuid(crypto.randomUUID());

  }

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-700">
        UUID Generator
      </h2>

      <button
        onClick={generate}
        className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"
      >
        Generate UUID
      </button>

      <textarea
        readOnly
        rows={4}
        value={uuid}
        className="w-full border rounded-xl p-4 mt-6"
      />

    </div>

  );

}