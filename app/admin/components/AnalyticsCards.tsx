interface CardProps {
  title: string;
  value: string;
  color: string;
}

function Card({ title, value, color }: CardProps) {
  return (
    <div className={`${color} text-white rounded-2xl p-6 shadow-lg`}>
      <h2 className="text-3xl font-bold">{value}</h2>
      <p className="mt-2">{title}</p>
    </div>
  );
}

export default function AnalyticsCards() {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <Card
        title="Total Users"
        value="1,245"
        color="bg-blue-600"
      />

      <Card
        title="Notes"
        value="250"
        color="bg-green-600"
      />

      <Card
        title="Quizzes"
        value="520"
        color="bg-orange-600"
      />

      <Card
        title="AI Tools"
        value="15"
        color="bg-purple-600"
      />

    </div>
  );
}