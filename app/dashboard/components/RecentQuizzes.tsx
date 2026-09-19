type Quiz = {
  id: string;
  score: number;
  percentage: number;
  passed: boolean;
};

export default function RecentQuizzes({
  quizzes,
}: {
  quizzes: Quiz[];
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Recent Quizzes
      </h2>

      <div className="space-y-4">

        {quizzes.map((quiz) => (

          <div
            key={quiz.id}
            className="border rounded-xl p-4 flex justify-between"
          >

            <div>

              <p className="font-semibold">
                Score: {quiz.score}
              </p>

              <p>
                {quiz.percentage.toFixed(1)}%
              </p>

            </div>

            <div>

              {quiz.passed ? (
                <span className="bg-green-600 text-white px-4 py-2 rounded-lg">
                  Passed
                </span>
              ) : (
                <span className="bg-red-600 text-white px-4 py-2 rounded-lg">
                  Failed
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}