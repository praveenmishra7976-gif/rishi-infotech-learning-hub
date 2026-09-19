import { Medal, Trophy } from "lucide-react";

const students = [
  { rank: 1, name: "Student 1", points: 985 },
  { rank: 2, name: "Student 2", points: 950 },
  { rank: 3, name: "Student 3", points: 930 },
  { rank: 4, name: "Student 4", points: 900 },
  { rank: 5, name: "Student 5", points: 875 },
  { rank: 6, name: "Student 6", points: 850 },
];

export default function Leaderboard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center">
          <Trophy
            className="text-yellow-500"
            size={30}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Chemistry Leaderboard
          </h2>

          <p className="text-gray-500 mt-1">
            Sample Chemistry learning rankings.
          </p>
        </div>

      </div>

      <div className="space-y-4">

        {students.map((student) => (
          <div
            key={student.rank}
            className="flex items-center justify-between border border-gray-200 rounded-xl p-5 hover:bg-yellow-50 transition"
          >

            <div className="flex items-center gap-4">

              <Medal
                className="text-yellow-500 shrink-0"
                size={24}
              />

              <div>
                <h3 className="font-bold text-gray-900">
                  #{student.rank} {student.name}
                </h3>

                <p className="text-gray-500">
                  Chemistry Learner
                </p>
              </div>

            </div>

            <div className="font-bold text-blue-700">
              {student.points} XP
            </div>

          </div>
        ))}

      </div>

      <p className="mt-6 text-sm text-gray-500">
        These are sample rankings. A live student leaderboard will be
        connected to the learning database later.
      </p>

    </div>
  );
}
