"use client";

type Props = {
  profile: any;
};

export default function ProgressChart({ profile }: Props) {
  const progress = Math.min(
    Math.round((profile.completed / 100) * 100),
    100
  );

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-blue-700">
        Overall Progress
      </h2>

      <div className="mt-8">

        <div className="w-full bg-gray-200 rounded-full h-5">

          <div
            className="bg-gradient-to-r from-blue-600 to-cyan-500 h-5 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />

        </div>

        <p className="mt-4 text-lg font-semibold">
          {progress}% Course Completed
        </p>

      </div>

    </div>
  );
}