import { Question } from "../lib/getQuestionById";

interface Props {
  question: Question;
}

export default function QuestionPreview({
  question,
}: Props) {

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">

      <h2 className="text-2xl font-bold">
        {question.question}
      </h2>

      <div className="space-y-3">

        <p>A. {question.option_a}</p>

        <p>B. {question.option_b}</p>

        <p>C. {question.option_c}</p>

        <p>D. {question.option_d}</p>

      </div>

      <div className="bg-green-100 rounded-xl p-4">

        <strong>
          Correct Answer:
        </strong>{" "}
        {question.correct_answer}

      </div>

      <div className="bg-blue-50 rounded-xl p-4">

        <strong>
          Explanation:
        </strong>

        <p className="mt-2">
          {question.explanation}
        </p>

      </div>

    </div>

  );

}