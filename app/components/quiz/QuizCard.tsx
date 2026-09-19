"use client";

type Quiz = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type Props = {
  quiz: Quiz;
  selected: string;
  showAnswer: boolean;
  onSelect: (option: string) => void;
};

export default function QuizCard({
  quiz,
  selected,
  showAnswer,
  onSelect,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-8">
        Q{quiz.id}. {quiz.question}
      </h2>

      <div className="space-y-4">

        {quiz.options.map((option) => {
          let style =
            "border-2 border-gray-300 hover:border-blue-500";

          if (showAnswer) {
            if (option === quiz.answer) {
              style =
                "border-2 border-green-600 bg-green-100";
            } else if (
              option === selected &&
              option !== quiz.answer
            ) {
              style =
                "border-2 border-red-600 bg-red-100";
            }
          }

          return (
            <button
              key={option}
              disabled={showAnswer}
              onClick={() => onSelect(option)}
              className={`w-full text-left rounded-xl p-4 transition ${style}`}
            >
              {option}
            </button>
          );
        })}

      </div>

      {showAnswer && (
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-xl p-5">

          <h3 className="font-bold text-blue-700">
            Explanation
          </h3>

          <p className="mt-2 text-gray-700">
            {quiz.explanation}
          </p>

        </div>
      )}

    </div>
  );
}