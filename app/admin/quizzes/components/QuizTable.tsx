"use client";

import { deleteQuiz } from "../lib/deleteQuiz";

export default function QuizTable({
  quizzes,
}: {
  quizzes: any[];
}) {

  async function remove(id: string) {

    if (!confirm("Delete Quiz?"))
      return;

    await deleteQuiz(id);

    window.location.reload();
  }

  return (

    <div className="bg-white rounded-3xl shadow-xl overflow-x-auto">

      <table className="w-full">

        <thead className="bg-blue-700 text-white">

          <tr>

            <th className="p-4">Title</th>
            <th className="p-4">Duration</th>
            <th className="p-4">Passing</th>
            <th className="p-4">Actions</th>

          </tr>

        </thead>

        <tbody>

          {quizzes.map((quiz) => (

            <tr
              key={quiz.id}
              className="border-b"
            >

              <td>{quiz.title}</td>

              <td>
                {quiz.duration} min
              </td>

              <td>
                {quiz.passing_marks}
              </td>

              <td>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">
                  Edit
                </button>

                <button
                  onClick={() =>
                    remove(quiz.id)
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}