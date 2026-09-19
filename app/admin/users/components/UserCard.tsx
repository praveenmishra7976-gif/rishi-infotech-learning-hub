import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";

interface Props {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function UserCard({
  id,
  name,
  email,
  role,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center">

      <div>

        <h2 className="text-xl font-bold">
          {name}
        </h2>

        <p className="text-gray-500">
          {email}
        </p>

        <span className="inline-block mt-3 px-3 py-1 rounded-full bg-blue-600 text-white capitalize">
          {role.replace("_", " ")}
        </span>

      </div>

      <div className="flex gap-3">

        <EditUserModal
          id={id}
          name={name}
          role={role}
        />

        <DeleteUserModal
          id={id}
          name={name}
        />

      </div>

    </div>
  );
}