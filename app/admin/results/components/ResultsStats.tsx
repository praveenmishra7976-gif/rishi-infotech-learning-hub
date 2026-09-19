import { getResultsStats } from "../lib/getResultsStats";

export default async function ResultsStats() {

  const stats =
    await getResultsStats();

  return (

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-2xl shadow p-6">

        <h3 className="text-gray-500">
          Attempts
        </h3>

        <p className="text-3xl font-bold text-blue-700 mt-2">
          {stats.totalAttempts}
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <h3 className="text-gray-500">
          Passed
        </h3>

        <p className="text-3xl font-bold text-green-600 mt-2">
          {stats.passed}
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <h3 className="text-gray-500">
          Failed
        </h3>

        <p className="text-3xl font-bold text-red-600 mt-2">
          {stats.failed}
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <h3 className="text-gray-500">
          Average %
        </h3>

        <p className="text-3xl font-bold text-purple-600 mt-2">
          {stats.average}%
        </p>

      </div>

    </div>

  );

}