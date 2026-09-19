"use client";

import { useState, useTransition } from "react";
import { updateAccountStatus } from "@/lib/users/updateAccountStatus";

interface Props {
  userId: string;
  status: string;
}

export default function AccountStatusCard({
  userId,
  status,
}: Props) {
  const [currentStatus, setCurrentStatus] = useState(status);

  const [pending, startTransition] = useTransition();

  function changeStatus(
    value: "active" | "suspended" | "blocked"
  ) {
    setCurrentStatus(value);

    startTransition(async () => {
      try {
        await updateAccountStatus(
          userId,
          value
        );
      } catch (err) {
        console.error(err);

        alert("Unable to update status.");
      }
    });
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-blue-700">

        Account Status

      </h2>

      <p className="text-gray-500 mt-2">

        Enable or disable this account.

      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-8">

        <button
          disabled={pending}
          onClick={() => changeStatus("active")}
          className={`rounded-xl py-4 font-bold transition ${
            currentStatus === "active"
              ? "bg-green-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Active
        </button>

        <button
          disabled={pending}
          onClick={() => changeStatus("suspended")}
          className={`rounded-xl py-4 font-bold transition ${
            currentStatus === "suspended"
              ? "bg-yellow-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Suspend
        </button>

        <button
          disabled={pending}
          onClick={() => changeStatus("blocked")}
          className={`rounded-xl py-4 font-bold transition ${
            currentStatus === "blocked"
              ? "bg-red-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Block
        </button>

      </div>

      {pending && (

        <p className="text-blue-700 mt-5">

          Updating...

        </p>

      )}

    </div>
  );
}