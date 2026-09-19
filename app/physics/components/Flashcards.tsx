"use client";

import { useState } from "react";
import { Layers3 } from "lucide-react";

const flashcards = [
  {
    question: "SI Unit of Force",
    answer: "Newton (N)",
  },
  {
    question: "Formula of Force",
    answer: "F = ma",
  },
  {
    question: "Formula of Work",
    answer: "W = Fs",
  },
  {
    question: "Formula of Power",
    answer: "P = W/t",
  },
  {
    question: "Formula of Kinetic Energy",
    answer: "KE = ½mv²",
  },
  {
    question: "Formula of Potential Energy",
    answer: "PE = mgh",
  },
  {
    question: "Acceleration due to Gravity",
    answer: "9.8 m/s²",
  },
  {
    question: "Universal Gravitation",
    answer: "F = Gm₁m₂/r²",
  },
];

export default function Flashcards() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <Layers3 className="text-purple-700" size={34} />

        <h2 className="text-3xl font-bold">
          Physics Flashcards
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {flashcards.map((card, index) => (

          <button
            key={index}
            onClick={() =>
              setOpenCard(
                openCard === index ? null : index
              )
            }
            className="h-44 rounded-2xl shadow-lg border bg-gradient-to-br from-blue-50 to-white hover:scale-105 duration-300 p-6 text-left"
          >

            {openCard === index ? (

              <div>

                <p className="text-gray-500 text-sm">
                  Answer
                </p>

                <h3 className="font-bold text-xl text-green-700 mt-4">
                  {card.answer}
                </h3>

              </div>

            ) : (

              <div>

                <p className="text-gray-500 text-sm">
                  Question
                </p>

                <h3 className="font-bold text-xl mt-4">
                  {card.question}
                </h3>

              </div>

            )}

          </button>

        ))}

      </div>

    </div>
  );
}