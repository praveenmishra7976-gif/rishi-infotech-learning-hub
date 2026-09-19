import Link from "next/link";
import {
  BookOpen,
  FileText,
  PlayCircle,
  Download,
  Brain,
} from "lucide-react";

const cards = [
  {
    title: "Physics Notes",
    href: "/physics/notes",
    icon: <BookOpen size={40} />,
    color: "bg-blue-600",
  },
  {
    title: "Physics MCQ",
    href: "/physics/mcq",
    icon: <Brain size={40} />,
    color: "bg-purple-600",
  },
  {
    title: "Physics Videos",
    href: "/physics/videos",
    icon: <PlayCircle size={40} />,
    color: "bg-red-600",
  },
  {
    title: "Physics Downloads",
    href: "/physics/downloads",
    icon: <Download size={40} />,
    color: "bg-green-600",
  },
  {
    title: "Formula Sheet",
    href: "/physics/formulas",
    icon: <FileText size={40} />,
    color: "bg-orange-600",
  },
];

export default function PhysicsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-indigo-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-black">
            Physics Learning Hub
          </h1>

          <p className="mt-4 text-indigo-100 text-lg">
            Notes • Formulas • MCQs • Videos • Downloads
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cards.map((card) => (

            <Link
              key={card.title}
              href={card.href}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8"
            >

              <div
                className={`w-16 h-16 rounded-2xl ${card.color} text-white flex items-center justify-center`}
              >
                {card.icon}
              </div>

              <h2 className="text-2xl font-bold mt-6">
                {card.title}
              </h2>

              <p className="text-gray-500 mt-2">
                Open {card.title}
              </p>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}