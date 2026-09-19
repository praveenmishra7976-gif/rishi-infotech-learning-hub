export default function ActivityHeatmap() {

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-orange-700 mb-6">

        Weekly Activity

      </h2>

      <div className="grid grid-cols-7 gap-3">

        {Array.from({ length: 35 }).map((_, i) => (

          <div
            key={i}
            className={`aspect-square rounded-lg ${
              Math.random() > 0.6
                ? "bg-green-600"
                : Math.random() > 0.4
                ? "bg-green-400"
                : "bg-gray-200"
            }`}
          />

        ))}

      </div>

      <div className="flex justify-between mt-6 text-sm text-gray-500">

        <span>Less</span>

        <span>More</span>

      </div>

    </div>

  );
}