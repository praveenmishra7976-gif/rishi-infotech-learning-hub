"use client";

import { useState, useTransition } from "react";
import { createUser } from "@/lib/users/createUser";

export default function AddUserModal() {
  const [open, setOpen] = useState(false);

  const [pending, startTransition] = useTransition();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [role, setRole] = useState("student");

  function submit(e: React.FormEvent) {
    e.preventDefault();

    startTransition(async () => {
      await createUser({
        full_name: name,
        email,
        role,
      });

      setOpen(false);

      setName("");

      setEmail("");

      setRole("student");
    });
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        + Add User
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

          <div className="bg-white rounded-3xl p-8 w-full max-w-lg">

            <h2 className="text-3xl font-bold mb-6">
              Add User
            </h2>

            <form
              onSubmit={submit}
              className="space-y-5"
            >

              <input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Full Name"
                className="border rounded-xl p-4 w-full"
              />

              <input
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Email"
                className="border rounded-xl p-4 w-full"
              />

              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                className="border rounded-xl p-4 w-full"
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
                  className="bg-green-600 text-white px-6 py-3 rounded-xl"
                >
                  {pending
                    ? "Creating..."
                    : "Create User"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}
    </>
  );
}