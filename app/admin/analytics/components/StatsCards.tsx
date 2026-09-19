type Props = {
  students: number;
  premiumUsers: number;
  payments: number;
  revenue: number;
};

export default function StatsCards({
  students,
  premiumUsers,
  payments,
  revenue,
}: Props) {
  return (
    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-gray-500">Students</h2>

        <p className="text-4xl font-bold mt-3">
          {students}
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-gray-500">
          Premium Users
        </h2>

        <p className="text-4xl font-bold mt-3">
          {premiumUsers}
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-gray-500">
          Payments
        </h2>

        <p className="text-4xl font-bold mt-3">
          {payments}
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-gray-500">
          Revenue
        </h2>

        <p className="text-4xl font-bold mt-3">
          ₹{revenue}
        </p>
      </div>

    </div>
  );
}