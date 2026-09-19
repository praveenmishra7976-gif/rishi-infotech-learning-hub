"use client";

import { useState } from "react";
import {
  Users,
  Search,
  UserPlus,
  Pencil,
  Trash2,
} from "lucide-react";

interface UserType {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function UsersPage() {

  const [search, setSearch] = useState("");

  const [users, setUsers] = useState<UserType[]>([
    {
      id: 1,
      name: "Rishi",
      email: "rishi@gmail.com",
      role: "Student",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      role: "Student",
    },
    {
      id: 3,
      name: "Amit",
      email: "amit@gmail.com",
      role: "Teacher",
    },
    {
      id: 4,
      name: "Priya",
      email: "priya@gmail.com",
      role: "Student",
    },
    {
      id: 5,
      name: "Admin",
      email: "admin@gmail.com",
      role: "Administrator",
    },
  ]);

  function deleteUser(id: number) {

    if (confirm("Delete this user?")) {

      setUsers(users.filter((user) => user.id !== id));

    }

  }

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <main>

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-5xl font-black">

            Users

          </h1>

          <p className="text-gray-500 mt-2">

            Manage all registered users

          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-4 rounded-xl flex gap-2">

          <UserPlus />

          Add User

        </button>

      </div>

      <div className="mt-10 bg-white rounded-3xl shadow-xl p-6">

        <div className="flex items-center border rounded-xl">

          <Search className="ml-4 text-gray-500" />

          <input
            placeholder="Search User..."
            className="w-full p-4 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-xl mt-8 overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">

            <tr>

              <th className="p-5 text-left">ID</th>

              <th className="p-5 text-left">Name</th>

              <th className="p-5 text-left">Email</th>

              <th className="p-5 text-left">Role</th>

              <th className="p-5 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((user) => (

              <tr
                key={user.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-5">

                  {user.id}

                </td>

                <td className="p-5 font-bold">

                  {user.name}

                </td>

                <td className="p-5">

                  {user.email}

                </td>

                <td className="p-5">

                  {user.role}

                </td>

                <td className="p-5">

                  <div className="flex justify-center gap-4">

                    <button className="bg-yellow-500 text-white p-3 rounded-xl">

                      <Pencil size={18} />

                    </button>

                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-600 text-white p-3 rounded-xl"
                    >

                      <Trash2 size={18} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="grid md:grid-cols-4 gap-8 mt-12">

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

          <Users
            size={45}
            className="mx-auto text-blue-600"
          />

          <h2 className="text-4xl font-black mt-4">

            {users.length}

          </h2>

          <p>

            Total Users

          </p>

        </div>

      </div>

    </main>

  );

}