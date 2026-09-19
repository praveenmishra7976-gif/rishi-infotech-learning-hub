import Link from "next/link";
import { Brain, Trophy, FileCheck } from "lucide-react";

export default function Practice() {
  const items = [
    {
      title: "MCQ Quiz",
      icon: <Brain size={45} className="text-blue-600" />,
      desc: "Practice chapter-wise quizzes.",
    },
    {
      title: "Mock Tests",
      icon: <FileCheck size={45} className="text-green-600" />,
      desc: "Full-length exam preparation.",
    },
    {
      title: "Daily Challenge",
      icon: <Trophy size={45} className="text-orange-600" />,
      desc: "Improve your speed every day.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Practice Center
        </h2>

        <p className="text-center mt-4 text-blue-100">
          Learn, Practice and Improve Every Day.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white text-black rounded-3xl p-8 shadow-xl"
            >
              {item.icon}

              <h3 className="text-2xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <Link
            href="/dashboard"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
          >
            Start Practice
          </Link>
        </div>

      </div>
    </section>
  );
}