import { Trophy, Medal } from "lucide-react";

const students = [
  { rank: 1, name: "Rahul", points: 985 },
  { rank: 2, name: "Priya", points: 950 },
  { rank: 3, name: "Aman", points: 930 },
  { rank: 4, name: "Neha", points: 900 },
  { rank: 5, name: "Rohan", points: 875 },
  { rank: 6, name: "Sneha", points: 850 },
];

export default function Leaderboard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <Trophy className="text-yellow-500" size={36} />

        <h2 className="text-3xl font-bold">
          Physics Leaderboard
        </h2>

      </div>

      <div className="space-y-4">

        {students.map((student) => (

          <div
            key={student.rank}
            className="flex items-center justify-between border rounded-xl p-5 hover:bg-yellow-50 transition"
          >

            <div className="flex items-center gap-4">

              <Medal className="text-yellow-500" />

              <div>

                <h3 className="font-bold">
                  #{student.rank} {student.name}
                </h3>

                <p className="text-gray-500">
                  Physics Champion
                </p>

              </div>

            </div>

            <div className="font-bold text-blue-700">
              {student.points} XP
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}