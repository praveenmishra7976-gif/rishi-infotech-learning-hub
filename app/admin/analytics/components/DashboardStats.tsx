import { getDashboardStats } from "../lib/getDashboardStats";

export default async function DashboardStats() {
  const stats = await getDashboardStats();

  const cards = [
    {
      title: "Students",
      value: stats.students,
      color: "bg-blue-600",
      icon: "👨‍🎓",
    },
    {
      title: "Premium Users",
      value: stats.premiumUsers,
      color: "bg-green-600",
      icon: "⭐",
    },
    {
      title: "Payments",
      value: stats.payments,
      color: "bg-purple-600",
      icon: "💳",
    },
    {
      title: "Revenue",
      value: `₹${stats.revenue}`,
      color: "bg-orange-600",
      icon: "💰",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} rounded-3xl shadow-xl text-white p-8`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg opacity-90">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {card.value}
              </h2>
            </div>

            <div className="text-5xl">
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
