"use client";

type Props = {
  current: number;
  total: number;
};

export default function QuizProgress({
  current,
  total,
}: Props) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full">

      <div className="flex justify-between mb-2">

        <span className="font-semibold">
          Progress
        </span>

        <span className="font-semibold">
          {current + 1}/{total}
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">

        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}