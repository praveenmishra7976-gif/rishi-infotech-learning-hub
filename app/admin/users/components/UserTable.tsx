import UserCard from "./UserCard";
import { getUsers } from "@/lib/users/getUsers";

export default async function UserTable() {

  const users = await getUsers();

  if (users.length === 0) {

    return (

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

        No Users Found

      </div>

    );

  }

  return (

    <div className="space-y-5">

      {users.map((user) => (

        <UserCard

          key={user.id}

          id={user.id}

          name={user.full_name}

          email={user.email}

          role={user.role}

        />

      ))}

    </div>

  );

}