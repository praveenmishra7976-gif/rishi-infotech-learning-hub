"use client";

import { useTransition } from "react";
import { sendPasswordReset } from "@/lib/users/sendPasswordReset";

interface Props {
  email: string;
}

export default function PasswordResetCard({
  email,
}: Props) {
  const [pending, startTransition] =
    useTransition();

  function reset() {
    startTransition(async () => {
      try {
        await sendPasswordReset(email);

        alert(
          "Password reset email sent successfully."
        );
      } catch (err) {
        console.error(err);

        alert(
          "Unable to send password reset email."
        );
      }
    });
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-blue-700">
        Password Reset
      </h2>

      <p className="text-gray-500 mt-2">
        Send a password reset email to the user.
      </p>

      <div className="mt-8">

        <button
          disabled={pending}
          onClick={reset}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold"
        >
          {pending
            ? "Sending..."
            : "Send Reset Email"}
        </button>

      </div>

    </div>
  );
}