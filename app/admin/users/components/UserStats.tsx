export default function UserStats() {
  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      color: "bg-blue-600",
    },
    {
      title: "Teachers",
      value: "24",
      color: "bg-green-600",
    },
    {
      title: "Admins",
      value: "4",
      color: "bg-orange-600",
    },
    {
      title: "Students",
      value: "1,220",
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`${item.color} text-white rounded-2xl p-6 shadow-lg`}
        >
          <h2 className="text-4xl font-bold">
            {item.value}
          </h2>

          <p className="mt-3">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}