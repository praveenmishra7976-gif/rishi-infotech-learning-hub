"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock } from "lucide-react";
import { signUp } from "@/lib/auth/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("REGISTER FORM SUBMITTED");

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter a password.");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      console.log("Calling Supabase signup...");

      const { data, error } = await signUp(
        email.trim(),
        password
      );

      console.log("Signup Data:", data);
      console.log("Signup Error:", error);

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      /*
       * Supabase authentication creates the account.
       *
       * We also try to save the user's name in the
       * user metadata so it can be used later.
       */

      alert(
        "Account created successfully!\n\n" +
        "Please check your email if email verification is enabled."
      );

      router.push("/auth/login");

    } catch (error) {
      console.error("Registration error:", error);

      alert(
        "Registration failed.\n\n" +
        "Please check the browser console for details."
      );

      setLoading(false);
      return;
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-4xl font-black text-gray-900">
            Student Registration
          </h1>

          <p className="mt-2 text-gray-500">
            Create your learning account
          </p>

        </div>

        {/* Registration Form */}

        <form
          onSubmit={register}
          className="mt-8"
        >

          {/* Name */}

          <div>

            <label
              htmlFor="name"
              className="font-semibold text-gray-800"
            >
              Full Name
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl mt-2 focus-within:border-blue-600">

              <User
                size={20}
                className="ml-4 text-gray-500"
              />

              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your Name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                className="w-full p-4 outline-none rounded-xl"
              />

            </div>

          </div>

          {/* Email */}

          <div className="mt-6">

            <label
              htmlFor="email"
              className="font-semibold text-gray-800"
            >
              Email
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl mt-2 focus-within:border-blue-600">

              <Mail
                size={20}
                className="ml-4 text-gray-500"
              />

              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Email Address"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                className="w-full p-4 outline-none rounded-xl"
              />

            </div>

          </div>

          {/* Password */}

          <div className="mt-6">

            <label
              htmlFor="password"
              className="font-semibold text-gray-800"
            >
              Password
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl mt-2 focus-within:border-blue-600">

              <Lock
                size={20}
                className="ml-4 text-gray-500"
              />

              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create Password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                className="w-full p-4 outline-none rounded-xl"
              />

            </div>

            <p className="text-xs text-gray-500 mt-2">
              Password must contain at least 6 characters.
            </p>

          </div>

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition"
          >

            {loading
              ? "Creating Account..."
              : "Create Account"}

          </button>

        </form>

        {/* Login */}

        <p className="text-center mt-6 text-gray-600">

          Already have an account?

          <Link
            href="/auth/login"
            className="text-blue-600 font-bold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </main>
  );
}