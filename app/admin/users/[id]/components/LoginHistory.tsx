import { getLoginHistory } from "@/lib/users/getLoginHistory";

interface Props {
  userId: string;
}

export default async function LoginHistory({
  userId,
}: Props) {
  const history = await getLoginHistory(userId);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-8">
        Login History
      </h2>

      {history.length === 0 ? (
        <p className="text-gray-500">
          No login history available.
        </p>
      ) : (
        <div className="space-y-5">

          {history.map((login) => (

            <div
              key={login.id}
              className="border rounded-2xl p-5"
            >

              <div className="flex justify-between">

                <h3 className="font-bold">
                  {login.device}
                </h3>

                <span className="text-sm text-gray-500">
                  {new Date(
                    login.login_time
                  ).toLocaleString("en-IN")}
                </span>

              </div>

              <p className="mt-2 text-gray-500">
                Browser : {login.browser}
              </p>

              <p className="text-gray-500">
                IP Address : {login.ip_address ?? "Unknown"}
              </p>

              <p className="text-gray-500">
                Location : {login.location ?? "Unknown"}
              </p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}