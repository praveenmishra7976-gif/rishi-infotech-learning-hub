type Props = {
  courses: number;
  quizzes: number;
  certificates: number;
};

export default function StatsCards({
  courses,
  quizzes,
  certificates,
}: Props) {
  const cards = [
    {
      title: "Courses",
      value: courses,
      color: "bg-blue-600",
    },
    {
      title: "Quizzes",
      value: quizzes,
      color: "bg-green-600",
    },
    {
      title: "Certificates",
      value: certificates,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`${card.color} text-white rounded-3xl p-8`}
        >

          <h3 className="text-xl">
            {card.title}
          </h3>

          <p className="text-5xl font-bold mt-4">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
}