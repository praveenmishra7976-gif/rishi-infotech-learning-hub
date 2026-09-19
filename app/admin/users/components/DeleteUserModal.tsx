"use client";

import { useState, useTransition } from "react";
import { deleteUser } from "@/lib/users/deleteUser";

interface Props {
  id: string;
  name: string;
}

export default function DeleteUserModal({
  id,
  name,
}: Props) {

  const [open, setOpen] = useState(false);

  const [pending, startTransition] = useTransition();

  function remove() {

    startTransition(async () => {

      await deleteUser(id);

      setOpen(false);

    });

  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
      >
        Delete
      </button>

      {open && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-3xl p-8 max-w-md w-full">

            <h2 className="text-3xl font-bold text-red-600">

              Delete User

            </h2>

            <p className="mt-5">

              Delete <strong>{name}</strong> ?

            </p>

            <div className="flex justify-end gap-4 mt-8">

              <button

                onClick={() => setOpen(false)}

                className="bg-gray-200 px-6 py-3 rounded-xl"

              >

                Cancel

              </button>

              <button

                disabled={pending}

                onClick={remove}

                className="bg-red-600 text-white px-6 py-3 rounded-xl"

              >

                {pending ? "Deleting..." : "Delete"}

              </button>

            </div>

          </div>

        </div>

      )}
    </>
  );
}