"use client";

const flashcards = [
  {
    question: "रामः means?",
    answer: "Ram",
  },
  {
    question: "फलम् means?",
    answer: "Fruit",
  },
  {
    question: "विद्यालयः means?",
    answer: "School",
  },
  {
    question: "गृहः means?",
    answer: "House",
  },
];

export default function Flashcards() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-orange-600 mb-8">
        Flashcards
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {flashcards.map((card, index) => (

          <div
            key={index}
            className="border rounded-2xl p-6 hover:border-orange-500 transition"
          >

            <h3 className="font-bold text-lg">
              {card.question}
            </h3>

            <p className="mt-4 text-orange-600 font-semibold">
              {card.answer}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}