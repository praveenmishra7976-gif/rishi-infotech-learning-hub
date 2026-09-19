import {
  BookOpen,
  Award,
  FileText,
  Clock,
} from "lucide-react";

const cards = [
  {
    title: "Courses",
    value: "18",
    icon: BookOpen,
    color: "bg-blue-600",
  },
  {
    title: "Certificates",
    value: "6",
    icon: Award,
    color: "bg-green-600",
  },
  {
    title: "Notes",
    value: "245",
    icon: FileText,
    color: "bg-purple-600",
  },
  {
    title: "Study Hours",
    value: "156",
    icon: Clock,
    color: "bg-orange-600",
  },
];

export default function DashboardCards() {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-3xl shadow-lg p-6"
          >

            <div
              className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center text-white`}
            >
              <Icon size={28} />
            </div>

            <h2 className="mt-6 text-4xl font-bold">
              {card.value}
            </h2>

            <p className="text-gray-500 mt-2">
              {card.title}
            </p>

          </div>
        );
      })}

    </section>
  );
}