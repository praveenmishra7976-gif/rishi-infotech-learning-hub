
import type { LeaderboardEntry } from "./page";

function getRankStyle(rank: number) {
  if (rank === 1) {
    return "bg-yellow-100 text-yellow-700";
  }

  if (rank === 2) {
    return "bg-gray-200 text-gray-700";
  }

  if (rank === 3) {
    return "bg-orange-100 text-orange-700";
  }

  return "bg-blue-50 text-blue-700";
}

function getScoreStyle(score: number) {
  if (score >= 90) {
    return "text-green-600";
  }

  if (score >= 75) {
    return "text-blue-600";
  }

  if (score >= 60) {
    return "text-orange-600";
  }

  return "text-gray-600";
}

function getStudentName(profile: LeaderboardEntry["profile"]) {
  const profileData = profile?.[0];

  return profileData?.full_name?.trim() || "Student";
}

export default function LeaderboardTable({
  leaderboard,
}: {
  leaderboard: LeaderboardEntry[];
}) {
  if (leaderboard.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-14 text-center">
        <div className="text-6xl">
          🏆
        </div>

        <h3 className="mt-5 text-2xl md:text-3xl font-black text-gray-900">
          No Rankings Yet
        </h3>

        <p className="mt-3 text-gray-500 max-w-xl mx-auto leading-7">
          Student rankings will appear here when learning scores are
          recorded in the global leaderboard.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">

          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="px-6 py-5 text-left font-black">
                Rank
              </th>

              <th className="px-6 py-5 text-left font-black">
                Student
              </th>

              <th className="px-6 py-5 text-center font-black">
                Score
              </th>

              <th className="px-6 py-5 text-right font-black">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {leaderboard.map((item, index) => {
              const rank = index + 1;
              const studentName = getStudentName(item.profile);
              const score = Number(item.score ?? 0);

              return (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${getRankStyle(
                        rank
                      )}`}
                    >
                      {rank}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                        {studentName.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p className="font-black text-gray-900">
                          {studentName}
                        </p>

                        <p className="text-sm text-gray-400">
                          Student
                        </p>
                      </div>

                    </div>
                  </td>

                  <td className="px-6 py-5 text-center">
                    <span
                      className={`text-xl font-black ${getScoreStyle(
                        score
                      )}`}
                    >
                      {score}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <span className="text-gray-500 font-medium">
                      {new Date(item.created_at).toLocaleDateString(
                        "en-IN",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden divide-y divide-gray-100">

        {leaderboard.map((item, index) => {
          const rank = index + 1;
          const studentName = getStudentName(item.profile);
          const score = Number(item.score ?? 0);

          return (
            <div
              key={item.id}
              className="p-5"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center font-black ${getRankStyle(
                    rank
                  )}`}
                >
                  {rank}
                </div>

                <div className="w-11 h-11 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                  {studentName.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0 flex-1">

                  <p className="font-black text-gray-900 truncate">
                    {studentName}
                  </p>

                  <p className="text-sm text-gray-400">
                    {new Date(item.created_at).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>

                </div>

                <div className="text-right">

                  <p
                    className={`text-xl font-black ${getScoreStyle(
                      score
                    )}`}
                  >
                    {score}
                  </p>

                  <p className="text-xs text-gray-400">
                    Score
                  </p>

                </div>

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}
