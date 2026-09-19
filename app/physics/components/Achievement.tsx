import {
  Award,
  Star,
  Target,
  Brain,
  Flame,
  Crown,
} from "lucide-react";

const achievements = [
  {
    title: "First Chapter Completed",
    icon: Award,
    color: "text-blue-600",
  },
  {
    title: "100 MCQs Solved",
    icon: Brain,
    color: "text-green-600",
  },
  {
    title: "Formula Master",
    icon: Star,
    color: "text-yellow-500",
  },
  {
    title: "Top Performer",
    icon: Crown,
    color: "text-purple-600",
  },
  {
    title: "7 Day Streak",
    icon: Flame,
    color: "text-red-600",
  },
  {
    title: "Goal Achieved",
    icon: Target,
    color: "text-pink-600",
  },
];

export default function Achievement() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-8">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {achievements.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="border rounded-2xl p-6 hover:shadow-lg transition text-center"
            >

              <Icon
                size={48}
                className={`mx-auto ${item.color}`}
              />

              <h3 className="font-bold mt-5">
                {item.title}
              </h3>

            </div>

          );

        })}

      </div>

    </div>
  );
}