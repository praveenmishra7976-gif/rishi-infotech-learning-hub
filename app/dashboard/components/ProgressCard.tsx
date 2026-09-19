export default function ProgressCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Overall Progress
      </h2>

      <div className="flex justify-center">

        <div className="relative w-44 h-44">

          <svg
            className="w-44 h-44 -rotate-90"
            viewBox="0 0 160 160"
          >

            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />

            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="#2563EB"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="408"
              strokeDashoffset="102"
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h2 className="text-4xl font-bold">
              75%
            </h2>

            <p className="text-gray-500">
              Completed
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}