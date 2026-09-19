"use client";

import { useState } from "react";

export default function UnitConverter() {
  const [cm, setCm] = useState("");

  const meter =
    cm === "" ? 0 : Number(cm) / 100;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-purple-700 mb-8">
        Unit Converter
      </h2>

      <input
        className="border rounded-xl p-4 w-full"
        placeholder="Centimeter"
        value={cm}
        onChange={(e)=>setCm(e.target.value)}
      />

      <p className="mt-6 text-xl">
        Meter = {meter}
      </p>

    </div>
  );
}