"use client";

interface ReadingProgressProps {
  current: number;
  total: number;
}

export default function ReadingProgress({
  current,
  total,
}: ReadingProgressProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <div className="flex justify-between mb-3">

        <h3 className="font-bold text-lg">
          Course Progress
        </h3>

        <span className="font-semibold text-blue-700">
          {percentage}%
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">

        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="text-gray-600 mt-3">
        Chapter {current} of {total}
      </p>

    </div>
  );
}