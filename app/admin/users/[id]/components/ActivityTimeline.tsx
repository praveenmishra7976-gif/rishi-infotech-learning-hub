import { getUserActivity } from "@/lib/users/getUserActivity";

interface Props {
  userId: string;
}

export default async function ActivityTimeline({
  userId,
}: Props) {
  const activities =
    await getUserActivity(userId);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-8">
        Activity Timeline
      </h2>

      {activities.length === 0 ? (
        <p className="text-gray-500">
          No activity found.
        </p>
      ) : (
        <div className="space-y-8">

          {activities.map((item) => (

            <div
              key={item.id}
              className="flex gap-5"
            >

              <div className="w-4 h-4 rounded-full bg-blue-700 mt-2" />

              <div>

                <h3 className="font-semibold">
                  {item.action}
                </h3>

                <p className="text-gray-500 mt-1">

                  {new Date(
                    item.created_at
                  ).toLocaleString("en-IN")}

                </p>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}