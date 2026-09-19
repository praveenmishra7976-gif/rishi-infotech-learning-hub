import { getResults } from "../lib/getResults";

export default async function ResultsTable() {

  const results = await getResults();

  return (

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-700 text-white">

          <tr>

            <th className="p-4">
              Student
            </th>

            <th className="p-4">
              Quiz
            </th>

            <th className="p-4">
              Score
            </th>

            <th className="p-4">
              Percentage
            </th>

            <th className="p-4">
              Status
            </th>

            <th className="p-4">
              Submitted
            </th>

          </tr>

        </thead>

        <tbody>

          {results.length === 0 ? (

            <tr>

              <td
                colSpan={6}
                className="text-center py-12 text-gray-500"
              >
                No quiz results available.
              </td>

            </tr>

          ) : (

            results.map((result: any) => (

              <tr
                key={result.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">

                  {result.profiles?.full_name}

                </td>

                <td className="text-center">

                  {result.quizzes?.title}

                </td>

                <td className="text-center">

                  {result.score}/{result.total_marks}

                </td>

                <td className="text-center">

                  {result.percentage}%

                </td>

                <td className="text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      result.status === "Pass"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {result.status}
                  </span>

                </td>

                <td className="text-center">

                  {new Date(
                    result.submitted_at
                  ).toLocaleDateString("en-IN")}

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}