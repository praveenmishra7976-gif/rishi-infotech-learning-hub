"use client";

export default function ResultCard({
  score,
  total,
  percentage,
  passed,
}: {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

      <h1 className="text-5xl font-bold mb-8">
        Quiz Result
      </h1>

      <h2 className="text-3xl">
        {score} / {total}
      </h2>

      <h3 className="text-2xl mt-5">
        {percentage.toFixed(1)}%
      </h3>

      <div className="mt-8">

        {passed ? (
          <div className="bg-green-600 text-white rounded-xl py-4 text-2xl">
            🎉 PASSED
          </div>
        ) : (
          <div className="bg-red-600 text-white rounded-xl py-4 text-2xl">
            ❌ FAILED
          </div>
        )}

      </div>

    </div>
  );
}