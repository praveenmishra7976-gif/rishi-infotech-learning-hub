"use client";

import { BookOpen } from "lucide-react";

const dictionary = [
  {
    term: "Force",
    meaning: "A push or pull acting on an object.",
  },
  {
    term: "Velocity",
    meaning: "Speed in a particular direction.",
  },
  {
    term: "Acceleration",
    meaning: "Rate of change of velocity.",
  },
  {
    term: "Momentum",
    meaning: "Product of mass and velocity.",
  },
  {
    term: "Energy",
    meaning: "Capacity to do work.",
  },
  {
    term: "Power",
    meaning: "Rate of doing work.",
  },
  {
    term: "Density",
    meaning: "Mass per unit volume.",
  },
  {
    term: "Pressure",
    meaning: "Force per unit area.",
  },
];

export default function PhysicsDictionary() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="text-blue-700" size={34} />
        <h2 className="text-3xl font-bold">
          Physics Dictionary
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {dictionary.map((item, index) => (

          <div
            key={index}
            className="border rounded-2xl p-5 hover:bg-blue-50 transition"
          >

            <h3 className="font-bold text-xl text-blue-700">
              {item.term}
            </h3>

            <p className="mt-2 text-gray-600">
              {item.meaning}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}