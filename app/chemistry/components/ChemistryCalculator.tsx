"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

export default function ChemistryCalculator() {
  const [mass, setMass] = useState("");
  const [molarMass, setMolarMass] = useState("");

  const result = useMemo(() => {
    const massValue = Number(mass);
    const molarMassValue = Number(molarMass);

    if (
      !mass.trim() ||
      !molarMass.trim() ||
      !Number.isFinite(massValue) ||
      !Number.isFinite(molarMassValue) ||
      massValue < 0 ||
      molarMassValue <= 0
    ) {
      return null;
    }

    return massValue / molarMassValue;
  }, [mass, molarMass]);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <Calculator className="text-green-700" size={28} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Chemistry Calculator
          </h2>

          <p className="text-gray-500 mt-1">
            Calculate the number of moles from mass and molar mass.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Mass (g)
          </label>

          <input
            type="number"
            min="0"
            step="any"
            placeholder="Example: 18"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            className="border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Molar Mass (g/mol)
          </label>

          <input
            type="number"
            min="0"
            step="any"
            placeholder="Example: 18"
            value={molarMass}
            onChange={(e) => setMolarMass(e.target.value)}
            className="border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="mt-8 bg-green-50 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-gray-900">
          Number of Moles
        </h3>

        {result === null ? (
          <p className="text-gray-400 text-lg mt-3">
            Enter valid positive values.
          </p>
        ) : (
          <p className="text-3xl font-bold text-green-700 mt-3">
            {result.toFixed(4)} mol
          </p>
        )}
      </div>

      <div className="mt-5 rounded-2xl bg-blue-50 border border-blue-100 p-5">
        <p className="font-bold text-blue-800">
          Formula
        </p>

        <p className="mt-2 text-blue-700">
          Number of moles = Mass ÷ Molar Mass
        </p>
      </div>
    </div>
  );
}
