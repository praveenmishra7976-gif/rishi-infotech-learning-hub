import { UserProfile } from "@/lib/users/getUserById";

interface Props {
  user: UserProfile;
}

export default function UserInfo({
  user,
}: Props) {
  return (
    <div>

      <h2 className="text-3xl font-bold text-center">

        {user.full_name}

      </h2>

      <p className="text-center text-gray-500 mt-2">

        {user.email}

      </p>

      <div className="mt-8 space-y-5">

        <div className="flex justify-between">

          <span className="font-semibold">
            User ID
          </span>

          <span className="text-gray-500">

            {user.id}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="font-semibold">

            Role

          </span>

          <span className="capitalize bg-blue-600 text-white px-3 py-1 rounded-full">

            {user.role.replace("_", " ")}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="font-semibold">

            Status

          </span>

          <span
            className={`px-3 py-1 rounded-full text-white ${
              user.status === "active"
                ? "bg-green-600"
                : user.status === "suspended"
                ? "bg-yellow-500"
                : "bg-red-600"
            }`}
          >
            {user.status}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="font-semibold">

            Email Verified

          </span>

          <span
            className={`px-3 py-1 rounded-full text-white ${
              user.email_verified
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {user.email_verified
              ? "Verified"
              : "Not Verified"}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="font-semibold">

            Joined

          </span>

          <span className="text-gray-500">

            {new Date(
              user.created_at
            ).toLocaleDateString("en-IN")}

          </span>

        </div>

      </div>

    </div>
  );
}