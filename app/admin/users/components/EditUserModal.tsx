"use client";

import { useState, useTransition } from "react";
import { updateUser } from "@/lib/users/updateUser";

interface Props {
  id: string;
  name: string;
  role: string;
}

export default function EditUserModal({
  id,
  name,
  role,
}: Props) {

  const [open, setOpen] = useState(false);

  const [pending, startTransition] = useTransition();

  const [fullName, setFullName] = useState(name);

  const [userRole, setUserRole] = useState(role);

  function submit(e: React.FormEvent) {

    e.preventDefault();

    startTransition(async () => {

      await updateUser({

        id,

        full_name: fullName,

        role: userRole,

      });

      setOpen(false);

    });

  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Edit
      </button>

      {open && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-3xl p-8 w-full max-w-lg">

            <h2 className="text-3xl font-bold mb-8">

              Edit User

            </h2>

            <form
              onSubmit={submit}
              className="space-y-5"
            >

              <input

                value={fullName}

                onChange={(e) => setFullName(e.target.value)}

                className="border rounded-xl p-4 w-full"

              />

              <select

                value={userRole}

                onChange={(e) => setUserRole(e.target.value)}

                className="border rounded-xl p-4 w-full"

              >

                <option value="student">Student</option>

                <option value="teacher">Teacher</option>

                <option value="admin">Admin</option>

                <option value="super_admin">Super Admin</option>

              </select>

              <div className="flex justify-end gap-4">

                <button

                  type="button"

                  onClick={() => setOpen(false)}

                  className="bg-gray-200 px-6 py-3 rounded-xl"

                >

                  Cancel

                </button>

                <button

                  disabled={pending}

                  className="bg-blue-700 text-white px-6 py-3 rounded-xl"

                >

                  {pending ? "Saving..." : "Save"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}
    </>
  );
}