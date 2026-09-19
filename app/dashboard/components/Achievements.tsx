import { Trophy, Medal, Star, Award } from "lucide-react";

const achievements = [
  {
    title: "Top Performer",
    icon: Trophy,
    color: "bg-yellow-500",
  },
  {
    title: "7 Day Streak",
    icon: Medal,
    color: "bg-green-500",
  },
  {
    title: "Quiz Master",
    icon: Star,
    color: "bg-blue-500",
  },
  {
    title: "Certificate",
    icon: Award,
    color: "bg-purple-500",
  },
];

export default function Achievements() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Achievements
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border p-5 text-center hover:shadow-lg transition"
            >
              <div
                className={`w-14 h-14 mx-auto rounded-full ${item.color} flex items-center justify-center text-white`}
              >
                <Icon size={26} />
              </div>

              <p className="mt-4 font-semibold">
                {item.title}
              </p>
            </div>
          );
        })}

      </div>

    </div>
  );
}