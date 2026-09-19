"use client";

import { useState, useTransition } from "react";
import { updateUserProfile } from "@/lib/users/updateUserProfile";

interface Props {
  userId: string;
  fullName: string;
  role: string;
}

export default function UserRoleCard({
  userId,
  fullName,
  role,
}: Props) {
  const [currentRole, setCurrentRole] =
    useState(role);

  const [pending, startTransition] =
    useTransition();

  function saveRole() {
    startTransition(async () => {
      try {
        await updateUserProfile({
          id: userId,
          full_name: fullName,
          role: currentRole,
        });

        alert("Role updated successfully.");
      } catch (err) {
        console.error(err);

        alert("Unable to update role.");
      }
    });
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-blue-700">

        Role Management

      </h2>

      <p className="text-gray-500 mt-2">

        Change this user's role.

      </p>

      <div className="mt-8">

        <label className="block font-semibold mb-3">

          User Role

        </label>

        <select
          value={currentRole}
          onChange={(e) =>
            setCurrentRole(e.target.value)
          }
          className="w-full border rounded-xl p-4"
        >

          <option value="student">
            Student
          </option>

          <option value="teacher">
            Teacher
          </option>

          <option value="admin">
            Admin
          </option>

          <option value="super_admin">
            Super Admin
          </option>

        </select>

      </div>

      <button
        disabled={pending}
        onClick={saveRole}
        className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-semibold"
      >
        {pending
          ? "Updating..."
          : "Save Role"}
      </button>

    </div>
  );
}