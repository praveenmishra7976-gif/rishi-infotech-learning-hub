import { FlaskConical } from "lucide-react";

const formulas = [
  "n = mass / molar mass",
  "N = n × Nₐ",
  "PV = nRT",
  "M = moles / volume of solution in litres",
  "m = moles / mass of solvent in kg",
  "Density = mass / volume",
  "pH = −log[H⁺]",
  "pOH = −log[OH⁻]",
  "ΔG = ΔH − TΔS",
  "Molecular mass = sum of atomic masses",
];

export default function FormulaCards() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">
      <div className="flex gap-3 items-center mb-8">
        <FlaskConical className="text-green-700" size={32} />

        <h2 className="text-3xl font-bold">
          Chemistry Formula Cards
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {formulas.map((formula) => (
          <div
            key={formula}
            className="bg-green-50 rounded-xl p-6 text-center text-lg font-bold hover:shadow-lg transition"
          >
            {formula}
          </div>
        ))}
      </div>
    </div>
  );
}
