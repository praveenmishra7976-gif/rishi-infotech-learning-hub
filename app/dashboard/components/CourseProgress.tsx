type Progress = {
  completed: number;
  total: number;
};

export default function CourseProgress({
  completed,
  total,
}: Progress) {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Course Progress
      </h2>

      <div className="w-full h-6 rounded-full bg-gray-200 overflow-hidden">

        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="flex justify-between mt-4">

        <span>
          {completed} Lessons
        </span>

        <span className="font-bold">
          {percentage}%
        </span>

      </div>

    </div>
  );
}