"use client";

import { useState } from "react";

export default function TimestampConverter() {

  const [timestamp, setTimestamp] = useState("");

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-700">
        Timestamp Converter
      </h2>

      <input
        type="number"
        placeholder="Enter Unix Timestamp"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        className="w-full border rounded-xl p-4 mt-6"
      />

      {timestamp && !isNaN(Number(timestamp)) && (

        <div className="mt-8 bg-gray-100 rounded-xl p-6">

          <h3 className="font-bold text-xl">
            Date & Time
          </h3>

          <p className="mt-3">

            {new Date(Number(timestamp) * 1000).toLocaleString()}

          </p>

        </div>

      )}

    </div>

  );

}