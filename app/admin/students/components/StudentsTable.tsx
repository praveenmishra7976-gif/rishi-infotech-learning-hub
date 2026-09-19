"use client";

import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";

type Student = {
  id: string;
  full_name?: string;
  email?: string;
  created_at?: string;
};

export default function StudentsTable({
  students,
}: {
  students: Student[];
}) {
  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const name = student.full_name?.toLowerCase() || "";
      const email = student.email?.toLowerCase() || "";

      return (
        name.includes(search.toLowerCase()) ||
        email.includes(search.toLowerCase())
      );
    });
  }, [students, search]);

  return (
    <div className="space-y-6">

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4 text-left">Name</th>

              <th className="p-4 text-left">Email</th>

              <th className="p-4 text-left">Joined</th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredStudents.length === 0 ? (

              <tr>

                <td
                  colSpan={4}
                  className="text-center p-8 text-gray-500"
                >
                  No students found.
                </td>

              </tr>

            ) : (

              filteredStudents.map((student) => (

                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">
                    {student.full_name || "Student"}
                  </td>

                  <td className="p-4">
                    {student.email}
                  </td>

                  <td className="p-4">
                    {student.created_at
                      ? new Date(
                          student.created_at
                        ).toLocaleDateString()
                      : "-"}
                  </td>

                  <td className="p-4 text-center space-x-2">

                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                      View
                    </button>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                      Edit
                    </button>

                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}