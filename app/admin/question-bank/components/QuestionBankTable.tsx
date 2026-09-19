import Link from "next/link";

import { getQuestions } from "../lib/getQuestions";
import DeleteButton from "./DeleteButton";

export default async function QuestionBankTable() {
  const questions = await getQuestions();

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-700 text-white">

          <tr>

            <th className="p-4 text-left">
              Question
            </th>

            <th className="p-4 text-center">
              Subject
            </th>

            <th className="p-4 text-center">
              Chapter
            </th>

            <th className="p-4 text-center">
              Difficulty
            </th>

            <th className="p-4 text-center">
              Marks
            </th>

            <th className="p-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {questions.length === 0 ? (

            <tr>

              <td
                colSpan={6}
                className="py-12 text-center text-gray-500"
              >
                No Questions Found
              </td>

            </tr>

          ) : (

            questions.map((question) => (

              <tr
                key={question.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-4 font-medium max-w-xl">

                  {question.question}

                </td>

                <td className="text-center">

                  {question.subject}

                </td>

                <td className="text-center">

                  {question.chapter}

                </td>

                <td className="text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                      question.difficulty === "Easy"
                        ? "bg-green-600"
                        : question.difficulty === "Medium"
                        ? "bg-yellow-500"
                        : "bg-red-600"
                    }`}
                  >
                    {question.difficulty}
                  </span>

                </td>

                <td className="text-center font-semibold">

                  {question.marks}

                </td>

                <td>

                  <div className="flex justify-center items-center gap-5">

                    <Link
                      href={`/admin/question-bank/preview/${question.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Preview
                    </Link>

                    <Link
                      href={`/admin/question-bank/edit/${question.id}`}
                      className="text-green-600 hover:text-green-800 font-semibold"
                    >
                      Edit
                    </Link>

                    <DeleteButton
                      questionId={question.id}
                    />

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}