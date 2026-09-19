"use client";

const flashcards = [
  {
    question: "What is the value of π ?",
    answer: "3.14159",
  },
  {
    question: "What is Pythagoras Theorem?",
    answer: "a² + b² = c²",
  },
  {
    question: "Derivative of x² ?",
    answer: "2x",
  },
  {
    question: "Integral of x ?",
    answer: "x²/2 + C",
  },
];

export default function Flashcards() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-purple-700 mb-8">
        Flashcards
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {flashcards.map((card, index) => (

          <div
            key={index}
            className="border rounded-2xl p-6 hover:border-purple-600 transition"
          >

            <h3 className="font-bold text-lg">
              Q. {card.question}
            </h3>

            <p className="mt-4 text-purple-700 font-semibold">
              {card.answer}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}