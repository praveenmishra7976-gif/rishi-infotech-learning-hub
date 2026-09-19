"use client";

import { FileText } from "lucide-react";

const papers = [
  {
    year: "2025",
    question: "Explain the mole concept and its importance in chemical calculations.",
  },
  {
    year: "2024",
    question: "Explain the electronic configuration of an atom using the shell model.",
  },
  {
    year: "2023",
    question: "Explain the periodic trends in atomic radius and ionization energy.",
  },
  {
    year: "2022",
    question: "Differentiate between ionic and covalent bonding with suitable examples.",
  },
  {
    year: "2021",
    question: "State Boyle's law and explain its relationship between pressure and volume.",
  },
];

export default function PreviousYearQuestions() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">
      <div className="flex gap-3 items-center mb-8">
        <FileText className="text-red-700" size={30} />

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Previous Year Questions
          </h2>

          <p className="text-gray-500 mt-1">
            Chemistry practice questions arranged by year.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {papers.map((paper) => (
          <div
            key={paper.year}
            className="border border-gray-200 rounded-2xl p-5 hover:bg-red-50 hover:border-red-200 transition"
          >
            <h3 className="font-bold text-red-700">
              {paper.year}
            </h3>

            <p className="mt-2 text-gray-700 leading-7">
              {paper.question}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-yellow-50 border border-yellow-100 p-5">
        <p className="text-sm text-yellow-800 font-semibold">
          These are practice questions for revision. Official previous-year
          paper PDFs will be added when the actual papers are available.
        </p>
      </div>
    </div>
  );
}
