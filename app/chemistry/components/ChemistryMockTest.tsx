"use client";

import { useState } from "react";
import { ClipboardCheck, Play, X } from "lucide-react";

const tests = [
  { id: 1, title: "Chemistry Basics", questions: 10 },
  { id: 2, title: "Atomic Structure", questions: 10 },
  { id: 3, title: "Periodic Classification", questions: 10 },
  { id: 4, title: "Chemical Bonding", questions: 10 },
  { id: 5, title: "States of Matter", questions: 10 },
  { id: 6, title: "Thermodynamics", questions: 10 },
];

export default function ChemistryMockTest() {
  const [selectedTest, setSelectedTest] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">
      <div className="flex items-center gap-3 mb-8">
        <ClipboardCheck className="text-green-700" size={34} />

        <div>
          <h2 className="text-3xl font-bold">
            Chemistry Mock Tests
          </h2>

          <p className="text-gray-500 mt-1">
            Practice chapter-based Chemistry tests.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {tests.map((test) => (
          <div
            key={test.id}
            className="border rounded-xl p-6 text-center hover:bg-green-50 transition"
          >
            <h3 className="font-bold">
              {test.title}
            </h3>

            <p className="mt-2 text-gray-500">
              {test.questions} practice questions
            </p>

            <button
              type="button"
              onClick={() => setSelectedTest(test.id)}
              className="mt-4 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg font-semibold"
            >
              <Play size={16} />
              Start
            </button>
          </div>
        ))}
      </div>

      {selectedTest !== null && (
        <div className="mt-8 rounded-2xl bg-green-50 border border-green-200 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-green-800">
                Mock Test {selectedTest}
              </h3>

              <p className="mt-2 text-gray-700">
                The full interactive mock-test question bank is being
                prepared. You can use the Chemistry Quiz above for
                immediate practice.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedTest(null)}
              className="p-2 rounded-lg hover:bg-green-100"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
