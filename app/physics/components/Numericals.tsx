"use client";

import { Calculator } from "lucide-react";

const numericals = [
  {
    question: "A body of mass 5 kg accelerates at 2 m/s². Find the force.",
    answer: "F = ma = 5 × 2 = 10 N",
  },
  {
    question: "A body moves 20 m under a force of 10 N. Find the work done.",
    answer: "W = Fs = 10 × 20 = 200 J",
  },
  {
    question: "A 2 kg object is lifted to 10 m. Find the potential energy.",
    answer: "PE = mgh = 2 × 9.8 × 10 = 196 J",
  },
  {
    question: "A 4 kg object moves at 5 m/s. Find kinetic energy.",
    answer: "KE = ½mv² = 0.5 × 4 × 25 = 50 J",
  },
  {
    question: "A machine does 1000 J work in 20 s. Find power.",
    answer: "P = W/t = 1000 ÷ 20 = 50 W",
  },
];

export default function Numericals() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <Calculator className="text-green-700" />

        <h2 className="text-3xl font-bold">
          Numerical Practice
        </h2>

      </div>

      <div className="space-y-6">

        {numericals.map((item, index) => (

          <div
            key={index}
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >

            <h3 className="font-bold text-lg">

              Q{index + 1}. {item.question}

            </h3>

            <div className="mt-4 bg-green-50 rounded-xl p-4">

              <strong>Answer:</strong>

              <p className="mt-2">
                {item.answer}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}