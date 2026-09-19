"use client";

import { useState } from "react";
import { GraduationCap } from "lucide-react";

export default function Certificate() {

  const [name, setName] = useState("");

  return (

    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <GraduationCap
          className="text-blue-700"
          size={36}
        />

        <h2 className="text-3xl font-bold">

          Certificate Generator

        </h2>

      </div>

      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter Student Name"
        className="w-full border rounded-xl p-4"
      />

      {name && (

        <div className="mt-10 border-4 border-blue-700 rounded-3xl p-10 text-center bg-gradient-to-r from-blue-50 to-cyan-50">

          <h2 className="text-4xl font-bold text-blue-700">
            Certificate of Completion
          </h2>

          <p className="mt-8 text-xl">
            This certificate is proudly presented to
          </p>

          <h1 className="text-5xl font-bold mt-6 text-green-700">
            {name}
          </h1>

          <p className="mt-8 text-lg">
            For successfully completing the
          </p>

          <h3 className="text-2xl font-bold mt-3">
            Physics Learning Module
          </h3>

          <p className="mt-8 text-gray-500">
            Rishi Infotech Learning Hub
          </p>

        </div>

      )}

    </div>

  );

}