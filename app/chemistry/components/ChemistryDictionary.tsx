"use client";

import { BookOpen } from "lucide-react";

const dictionary = [
  {
    term: "Atom",
    meaning: "The smallest unit of an element that retains the chemical properties of that element.",
  },
  {
    term: "Molecule",
    meaning: "A group of two or more atoms chemically bonded together.",
  },
  {
    term: "Mole",
    meaning: "The amount of substance containing approximately 6.022 × 10²³ particles.",
  },
  {
    term: "Element",
    meaning: "A pure substance made up of atoms having the same atomic number.",
  },
  {
    term: "Compound",
    meaning: "A substance formed when two or more elements combine chemically in a fixed ratio.",
  },
  {
    term: "Ion",
    meaning: "An atom or group of atoms carrying a net electric charge.",
  },
  {
    term: "Acid",
    meaning: "A substance that can donate hydrogen ions or increase hydrogen-ion concentration in aqueous solution.",
  },
  {
    term: "Base",
    meaning: "A substance that accepts hydrogen ions or produces hydroxide ions in aqueous solution.",
  },
  {
    term: "Catalyst",
    meaning: "A substance that changes the rate of a chemical reaction without being consumed overall.",
  },
  {
    term: "Molarity",
    meaning: "The number of moles of solute present in one litre of solution.",
  },
];

export default function ChemistryDictionary() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="text-green-700" size={34} />

        <h2 className="text-3xl font-bold">
          Chemistry Dictionary
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {dictionary.map((item) => (
          <div
            key={item.term}
            className="border rounded-2xl p-5 hover:bg-green-50 transition"
          >
            <h3 className="font-bold text-xl text-green-700">
              {item.term}
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              {item.meaning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
