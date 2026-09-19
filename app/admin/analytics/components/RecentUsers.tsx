import { getRecentUsers } from "../lib/getRecentUsers";

export default async function RecentUsers() {
  const users = await getRecentUsers();

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Recent Users
      </h2>

      <div className="space-y-4">

        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div className="flex items-center gap-4">

              <img
                src={
                  user.avatar_url ??
                  "https://ui-avatars.com/api/?name=User"
                }
                className="w-12 h-12 rounded-full"
                alt={user.full_name}
              />

              <div>
                <h3 className="font-semibold">
                  {user.full_name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {user.email}
                </p>
              </div>

            </div>

            <span className="bg-blue-600 text-white px-3 py-1 rounded-full capitalize">
              {user.role}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}