"use client";

interface Props {
  current: number;
  total: number;
}

export default function ReadingProgress({
  current,
  total,
}: Props) {
  const progress = Math.round(
    (current / total) * 100
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between mb-4">

        <h2 className="font-bold">
          Reading Progress
        </h2>

        <span className="text-orange-600 font-bold">
          {progress}%
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">

        <div
          className="bg-orange-600 h-3 rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <p className="mt-4 text-gray-600">
        Chapter {current} of {total}
      </p>

    </div>
  );
}