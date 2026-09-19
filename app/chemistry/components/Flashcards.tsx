"use client";

import { useState } from "react";
import { Layers3 } from "lucide-react";

const flashcards = [
  {
    question: "What is the SI unit of amount of substance?",
    answer: "Mole (mol)",
  },
  {
    question: "What is Avogadro constant?",
    answer: "Approximately 6.022 × 10²³ particles per mole.",
  },
  {
    question: "What is the formula for number of moles?",
    answer: "n = mass / molar mass",
  },
  {
    question: "What is the ideal gas equation?",
    answer: "PV = nRT",
  },
  {
    question: "What is an ionic bond?",
    answer: "An electrostatic attraction between oppositely charged ions.",
  },
  {
    question: "What is a covalent bond?",
    answer: "A chemical bond formed by sharing electron pairs between atoms.",
  },
  {
    question: "What is a catalyst?",
    answer: "A substance that changes reaction rate without being consumed overall.",
  },
  {
    question: "What is pH?",
    answer: "A measure related to the hydrogen-ion concentration of a solution.",
  },
];

export default function Flashcards() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">
      <div className="flex items-center gap-3 mb-8">
        <Layers3 className="text-purple-700" size={34} />

        <h2 className="text-3xl font-bold">
          Chemistry Flashcards
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {flashcards.map((card, index) => (
          <button
            type="button"
            key={card.question}
            onClick={() =>
              setOpenCard(openCard === index ? null : index)
            }
            className="min-h-44 rounded-2xl shadow-lg border bg-gradient-to-br from-green-50 to-white hover:scale-105 duration-300 p-6 text-left"
          >
            {openCard === index ? (
              <div>
                <p className="text-gray-500 text-sm">
                  Answer
                </p>

                <h3 className="font-bold text-lg text-green-700 mt-4 leading-7">
                  {card.answer}
                </h3>
              </div>
            ) : (
              <div>
                <p className="text-gray-500 text-sm">
                  Question
                </p>

                <h3 className="font-bold text-lg mt-4 leading-7">
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
