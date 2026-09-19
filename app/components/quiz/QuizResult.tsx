"use client";

type Props = {
  score: number;
  total: number;
  onRetry: () => void;
};

export default function QuizResult({
  score,
  total,
  onRetry,
}: Props) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

      <div className="text-7xl">🎉</div>

      <h1 className="text-4xl font-bold text-blue-700 mt-6">
        Quiz Completed
      </h1>

      <p className="mt-3 text-gray-500">
        Congratulations!
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-blue-50 rounded-2xl p-6">
          <h2 className="font-semibold text-lg">Score</h2>
          <p className="text-4xl font-bold text-blue-700 mt-3">
            {score}/{total}
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-6">
          <h2 className="font-semibold text-lg">Percentage</h2>
          <p className="text-4xl font-bold text-green-600 mt-3">
            {percentage}%
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-6">
          <h2 className="font-semibold text-lg">Grade</h2>
          <p className="text-3xl font-bold mt-3">
            {percentage >= 90
              ? "A+"
              : percentage >= 75
              ? "A"
              : percentage >= 60
              ? "B"
              : percentage >= 40
              ? "C"
              : "D"}
          </p>
        </div>

      </div>

      <button
        onClick={onRetry}
        className="mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl transition"
      >
        Retry Quiz
      </button>

    </div>
  );
}