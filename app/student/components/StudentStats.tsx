import { getStudentStats } from "@/lib/student/getStudentStats";
import { getStudentDashboard } from "../lib/getStudentDashboard";

export default async function StudentStats() {
  const [stats, dashboard] = await Promise.all([
    getStudentStats(),
    getStudentDashboard(),
  ]);

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      <div className="bg-white rounded-2xl shadow p-6">

        <div className="text-3xl">
          📚
        </div>

        <h3 className="text-gray-500 mt-3">
          Courses Started
        </h3>

        <p className="text-3xl font-bold text-blue-700 mt-2">
          {dashboard.coursesStarted}
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <div className="text-3xl">
          📈
        </div>

        <h3 className="text-gray-500 mt-3">
          Learning Progress
        </h3>

        <p className="text-3xl font-bold text-green-600 mt-2">
          {dashboard.overallProgress}%
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <div className="text-3xl">
          🏆
        </div>

        <h3 className="text-gray-500 mt-3">
          Certificates
        </h3>

        <p className="text-3xl font-bold text-yellow-500 mt-2">
          {stats.certificates}
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <div className="text-3xl">
          📝
        </div>

        <h3 className="text-gray-500 mt-3">
          Quizzes Taken
        </h3>

        <p className="text-3xl font-bold text-purple-600 mt-2">
          {stats.quizzes}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Average: {stats.average}%
        </p>

      </div>

    </div>
  );
}
