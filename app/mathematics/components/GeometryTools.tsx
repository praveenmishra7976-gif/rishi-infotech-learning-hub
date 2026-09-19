"use client";

import { useState } from "react";

export default function GeometryTools() {

  const [side, setSide] = useState("");

  const area = side
    ? Number(side) * Number(side)
    : 0;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-purple-700 mb-6">
        Geometry Tool
      </h2>

      <input
        value={side}
        onChange={(e) => setSide(e.target.value)}
        placeholder="Square Side"
        className="border rounded-xl p-4 w-full"
      />

      <p className="mt-6 text-xl">
        Area = {area}
      </p>

    </div>
  );
}