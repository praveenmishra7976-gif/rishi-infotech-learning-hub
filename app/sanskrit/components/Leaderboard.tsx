"use client";

const students = [

  { name: "Rish", score: 980 },

  { name: "Rahul", score: 930 },

  { name: "Aman", score: 900 },

  { name: "Neha", score: 875 },

  { name: "Priya", score: 850 },

];

export default function Leaderboard() {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-orange-600 mb-8">
        Leaderboard
      </h2>

      <div className="space-y-4">

        {students.map((student, index) => (

          <div
            key={index}
            className="flex justify-between items-center border rounded-xl p-5"
          >

            <div>

              <span className="font-bold">
                #{index + 1}
              </span>

              <span className="ml-4">
                {student.name}
              </span>

            </div>

            <span className="font-bold text-orange-600">
              {student.score} XP
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}