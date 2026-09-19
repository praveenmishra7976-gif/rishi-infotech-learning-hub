"use client";

import { useState } from "react";

export default function EquationSolver() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const result =
    a && b
      ? (-Number(b) / Number(a)).toFixed(2)
      : "";

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-purple-700 mb-6">
        Linear Equation Solver
      </h2>

      <input
        placeholder="a"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border rounded-xl p-4 w-full mb-4"
      />

      <input
        placeholder="b"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="border rounded-xl p-4 w-full"
      />

      <p className="mt-6 text-xl">
        x = {result || "--"}
      </p>

    </div>
  );
}