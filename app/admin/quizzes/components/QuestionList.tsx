interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Props {
  questions: Question[];
}

export default function QuestionList({
  questions,
}: Props) {
  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Added Questions
      </h2>

      {questions.length === 0 ? (
        <p className="text-gray-500">
          No questions added yet.
        </p>
      ) : (
        questions.map((q, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6"
          >
            <h3 className="font-bold text-lg">
              Q{index + 1}. {q.question}
            </h3>

            <div className="mt-4 space-y-2">

              {q.options.map((option, i) => (
                <div key={i}>
                  {String.fromCharCode(65 + i)}.
                  {" "}
                  {option}
                </div>
              ))}

            </div>

            <div className="mt-4 text-green-700 font-semibold">
              Correct Answer: {q.answer}
            </div>

          </div>
        ))
      )}

    </div>
  );
}