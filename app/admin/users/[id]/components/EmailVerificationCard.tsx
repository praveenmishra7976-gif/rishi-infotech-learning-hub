"use client";

import { useState, useTransition } from "react";
import { updateEmailVerification } from "@/lib/users/updateEmailVerification";

interface Props {
  userId: string;
  verified: boolean;
}

export default function EmailVerificationCard({
  userId,
  verified,
}: Props) {
  const [isVerified, setVerified] =
    useState(verified);

  const [pending, startTransition] =
    useTransition();

  function update(value: boolean) {
    setVerified(value);

    startTransition(async () => {
      try {
        await updateEmailVerification(
          userId,
          value
        );
      } catch (err) {
        console.error(err);

        alert("Unable to update.");
      }
    });
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-blue-700">
            Email Verification
          </h2>

          <p className="text-gray-500 mt-2">
            Manage email verification.
          </p>

        </div>

        <span
          className={`px-4 py-2 rounded-full text-white font-semibold ${
            isVerified
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {isVerified
            ? "Verified"
            : "Not Verified"}
        </span>

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          disabled={pending}
          onClick={() => update(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
        >
          Verify
        </button>

        <button
          disabled={pending}
          onClick={() => update(false)}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
        >
          Remove Verification
        </button>

      </div>

      {pending && (
        <p className="mt-5 text-blue-700">
          Updating...
        </p>
      )}

    </div>
  );
}