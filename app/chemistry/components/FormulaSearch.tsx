"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const formulas = [
  "Moles = mass / molar mass",
  "Number of particles = moles × Avogadro constant",
  "Molarity = moles of solute / volume in litres",
  "Molality = moles of solute / mass of solvent in kg",
  "PV = nRT",
  "Density = mass / volume",
  "Molecular mass = sum of atomic masses",
  "ΔG = ΔH − TΔS",
  "pH = −log[H⁺]",
  "pOH = −log[OH⁻]",
];

export default function FormulaSearch() {
  const [text, setText] = useState("");

  const result = useMemo(() => {
    const query = text.trim().toLowerCase();

    if (!query) return formulas;

    return formulas.filter((formula) =>
      formula.toLowerCase().includes(query)
    );
  }, [text]);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">
      <div className="relative mb-8">
        <Search
          className="absolute left-4 top-4 text-gray-500"
          size={22}
        />

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search Chemistry Formula..."
          className="w-full border rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="space-y-3">
        {result.map((formula) => (
          <div
            key={formula}
            className="border rounded-xl p-4 hover:bg-green-50 transition font-semibold"
          >
            {formula}
          </div>
        ))}

        {result.length === 0 && (
          <p className="text-gray-500">
            No matching Chemistry formula found.
          </p>
        )}
      </div>
    </div>
  );
}
