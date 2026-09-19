"use client";

import { Beaker, Atom } from "lucide-react";

const formulas = [
  {
    title: "Density",
    formula: "Density = Mass / Volume",
  },
  {
    title: "Molarity",
    formula: "Molarity = Moles / Volume of Solution",
  },
  {
    title: "Normality",
    formula: "Normality = Gram Equivalent / Volume of Solution",
  },
  {
    title: "Percentage Composition",
    formula: "% = (Mass of Solute / Mass of Solution) × 100",
  },
  {
    title: "Ideal Gas Law",
    formula: "PV = nRT",
  },
  {
    title: "pH",
    formula: "pH = -log[H⁺]",
  },
  {
    title: "pOH",
    formula: "pOH = -log[OH⁻]",
  },
  {
    title: "Water Ion Product",
    formula: "pH + pOH = 14",
  },
  {
    title: "Avogadro Constant",
    formula: "1 Mole = 6.022 × 10²³ Particles",
  },
  {
    title: "Molecular Mass",
    formula: "Sum of Atomic Masses of all Atoms",
  },
  {
    title: "Empirical Formula",
    formula: "Simplest Whole Number Ratio of Atoms",
  },
  {
    title: "Heat Energy",
    formula: "Q = m × c × ΔT",
  },
  {
    title: "Charles Law",
    formula: "V₁/T₁ = V₂/T₂",
  },
  {
    title: "Boyle's Law",
    formula: "P₁V₁ = P₂V₂",
  },
  {
    title: "Combined Gas Law",
    formula: "(P₁V₁)/T₁ = (P₂V₂)/T₂",
  },
];

export default function ChemistryFormulaPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-green-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Beaker size={36} />
            </div>

            <div>

              <h1 className="text-5xl font-black">
                Chemistry Formula Sheet
              </h1>

              <p className="mt-3 text-green-100 text-lg">
                Most Important Chemistry Formulas for Quick Revision
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Formula Cards */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {formulas.map((item) => (

            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8"
            >

              <div className="w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center">

                <Atom size={28} />

              </div>

              <h2 className="text-2xl font-bold mt-6">
                {item.title}
              </h2>

              <p className="mt-5 text-lg text-gray-700 leading-8">
                {item.formula}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}