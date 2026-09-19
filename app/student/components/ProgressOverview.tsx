import { getStudentDashboard } from "../lib/getStudentDashboard";

export default async function ProgressOverview() {
  const stats = await getStudentDashboard();

  const remainingLessons = Math.max(
    0,
    stats.totalLessons - stats.completedLessons
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <p className="text-blue-600 font-bold uppercase tracking-wide text-sm">
            Learning Analytics
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1">
            Learning Progress
          </h2>

          <p className="text-gray-500 mt-2">
            Your real-time course and lesson progress.
          </p>
        </div>

        <div className="text-left sm:text-right">

          <p className="text-4xl font-black text-blue-600">
            {stats.overallProgress}%
          </p>

          <p className="text-sm font-semibold text-gray-500">
            Overall Progress
          </p>

        </div>

      </div>

      <div className="mt-8">

        <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">

          <div
            className="bg-gradient-to-r from-blue-600 to-cyan-500 h-5 rounded-full transition-all duration-700"
            style={{
              width: `${Math.min(
                Math.max(stats.overallProgress, 0),
                100
              )}%`,
            }}
          />

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        <div className="rounded-2xl bg-blue-50 p-5">

          <p className="text-2xl font-black text-blue-700">
            {stats.coursesStarted}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Courses Started
          </p>

        </div>

        <div className="rounded-2xl bg-green-50 p-5">

          <p className="text-2xl font-black text-green-700">
            {stats.coursesCompleted}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Completed
          </p>

        </div>

        <div className="rounded-2xl bg-orange-50 p-5">

          <p className="text-2xl font-black text-orange-700">
            {stats.coursesInProgress}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            In Progress
          </p>

        </div>

        <div className="rounded-2xl bg-purple-50 p-5">

          <p className="text-2xl font-black text-purple-700">
            {stats.completedLessons}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Lessons Done
          </p>

        </div>

      </div>

      {stats.coursesStarted === 0 ? (

        <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-200 p-6 text-center">

          <div className="text-4xl">
            📚
          </div>

          <h3 className="mt-3 font-black text-gray-900">
            Start your learning journey
          </h3>

          <p className="text-gray-500 mt-1">
            Enroll in a course and your progress will appear here.
          </p>

        </div>

      ) : (

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <p className="text-gray-600">

            <span className="font-bold text-gray-900">
              {stats.completedLessons}
            </span>{" "}
            lessons completed

            {remainingLessons > 0 && (
              <>
                {" "}·{" "}
                <span className="font-bold text-gray-900">
                  {remainingLessons}
                </span>{" "}
                remaining
              </>
            )}

          </p>

          {stats.coursesCompleted > 0 && (
            <p className="font-bold text-green-600">
              🏆 {stats.coursesCompleted} course
              {stats.coursesCompleted === 1 ? "" : "s"} completed
            </p>
          )}

        </div>

      )}

    </div>
  );
}
