"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

const atomicMasses: Record<string, number> = {
  H: 1.008,
  He: 4.003,
  Li: 6.94,
  Be: 9.012,
  B: 10.81,
  C: 12.011,
  N: 14.007,
  O: 15.999,
  F: 18.998,
  Ne: 20.18,
  Ar: 39.948,
  Na: 22.99,
  Mg: 24.305,
  Al: 26.982,
  Si: 28.085,
  P: 30.974,
  S: 32.06,
  Cl: 35.45,
  K: 39.098,
  Ca: 40.078,
  Fe: 55.845,
  Cu: 63.546,
  Zn: 65.38,
  Ag: 107.868,
  I: 126.904,
  Ba: 137.327,
  Au: 196.967,
  Hg: 200.592,
  Pb: 207.2,
};

function calculateMolarMass(formula: string): number | null {
  const cleaned = formula.replace(/\s+/g, "");

  if (!cleaned) return null;

  const tokens = cleaned.match(/[A-Z][a-z]?\d*|\d+|[()]/g);

  if (!tokens || tokens.join("") !== cleaned) {
    return null;
  }

  const stack: number[] = [0];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === "(") {
      stack.push(0);
      continue;
    }

    if (token === ")") {
      if (stack.length === 1) return null;

      const groupMass = stack.pop() ?? 0;

      const next = tokens[i + 1];

      let multiplier = 1;

      if (next && /^\d+$/.test(next)) {
        multiplier = Number(next);
        i++;
      }

      stack[stack.length - 1] += groupMass * multiplier;
      continue;
    }

    if (/^\d+$/.test(token)) {
      return null;
    }

    const match = token.match(/^([A-Z][a-z]?)(\d*)$/);

    if (!match) return null;

    const symbol = match[1];
    const count = match[2] ? Number(match[2]) : 1;

    const mass = atomicMasses[symbol];

    if (!mass) return null;

    stack[stack.length - 1] += mass * count;
  }

  if (stack.length !== 1 || stack[0] <= 0) {
    return null;
  }

  return stack[0];
}

export default function MolarMassCalculator() {
  const [formula, setFormula] = useState("");

  const result = useMemo(
    () => calculateMolarMass(formula),
    [formula]
  );

  const hasInput = formula.trim().length > 0;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <Calculator
            className="text-green-700"
            size={28}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Molar Mass Calculator
          </h2>

          <p className="text-gray-500 mt-1">
            Enter a chemical formula to calculate its molar mass.
          </p>
        </div>

      </div>

      <input
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="Example: H2O, CO2, H2SO4, NaCl"
        className="border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <div className="mt-8 bg-gray-50 rounded-2xl p-6">

        <h3 className="text-lg font-bold text-gray-800">
          Molar Mass
        </h3>

        {!hasInput ? (
          <p className="text-3xl text-gray-400 mt-3">
            --
          </p>
        ) : result !== null ? (
          <p className="text-3xl font-bold text-green-700 mt-3">
            {result.toFixed(3)} g/mol
          </p>
        ) : (
          <p className="text-lg font-semibold text-red-600 mt-3">
            Invalid or unsupported chemical formula.
          </p>
        )}

      </div>

      <div className="mt-5 text-sm text-gray-500">
        <p>
          Supported examples: H₂O, CO₂, NaCl, H₂SO₄, CaCO₃, NH₃
        </p>
      </div>

    </div>
  );
}
