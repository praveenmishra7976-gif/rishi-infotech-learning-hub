"use client";

type Props = {
  current: number;
  total: number;
};

export default function ReadingProgress({
  current,
  total,
}: Props) {

  const progress = (current / total) * 100;

  return (

    <div className="mb-8">

      <div className="flex justify-between mb-2">

        <span className="font-semibold">

          Reading Progress

        </span>

        <span>

          {current} / {total}

        </span>

      </div>

      <div className="h-4 bg-gray-300 rounded-full overflow-hidden">

        <div
          className="h-full bg-blue-700 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>

  );

}