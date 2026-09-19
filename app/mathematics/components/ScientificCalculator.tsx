"use client";

import { useState } from "react";

export default function ScientificCalculator() {

  const [expression, setExpression] = useState("");

  function calculate() {
    try {
      setExpression(eval(expression).toString());
    } catch {
      setExpression("Error");
    }
  }

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-purple-700 mb-8">
        Scientific Calculator
      </h2>

      <input
        className="border rounded-xl p-4 w-full"
        placeholder="Example: 5*(10+2)"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />

      <button
        onClick={calculate}
        className="mt-6 bg-purple-700 text-white px-8 py-3 rounded-xl"
      >
        Calculate
      </button>

    </div>

  );

}