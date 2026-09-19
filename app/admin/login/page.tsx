"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Shield,
  Lock,
  Mail,
} from "lucide-react";
import { signIn } from "@/lib/auth/auth";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login() {
    if (!email.trim() || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await signIn(
        email.trim(),
        password
      );

      if (error) {
        console.error(
          "Admin login error:",
          error
        );

        alert(error.message);
        return;
      }

      if (!data.session || !data.user) {
        console.error(
          "No Supabase session:",
          data
        );

        alert(
          "Login failed. Supabase session was not created."
        );

        return;
      }

      console.log(
        "ADMIN USER:",
        data.user
      );

      console.log(
        "ADMIN SESSION CREATED"
      );

      alert("Admin Login Successful!");

      router.replace("/admin/dashboard");
      router.refresh();

    } catch (error) {
      console.error(
        "Unexpected login error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Unable to login."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 flex justify-center items-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
            <Shield
              size={40}
              className="text-white"
            />
          </div>
        </div>

        <h1 className="text-4xl font-black text-center mt-6">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Rishi Infotech Learning Hub
        </p>

        <div className="mt-10">

          <label className="font-semibold text-gray-900">
            Admin Email
          </label>

          <div className="flex items-center border rounded-xl mt-2">

            <Mail
              className="ml-4 text-gray-500"
              size={20}
            />

            <input
              type="email"
              className="w-full p-4 outline-none rounded-xl"
              placeholder="Admin Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              autoComplete="email"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="font-semibold text-gray-900">
            Password
          </label>

          <div className="flex items-center border rounded-xl mt-2">

            <Lock
              className="ml-4 text-gray-500"
              size={20}
            />

            <input
              type="password"
              className="w-full p-4 outline-none rounded-xl"
              placeholder="Admin Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              autoComplete="current-password"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  login();
                }
              }}
            />

          </div>

        </div>

        <button
          type="button"
          onClick={login}
          disabled={loading}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition"
        >
          {loading
            ? "Signing In..."
            : "Admin Login"}
        </button>

        <div className="mt-8 bg-slate-100 rounded-xl p-4 text-sm text-gray-600">

          <p className="font-semibold text-gray-800">
            Use your Supabase Admin account
          </p>

          <p className="mt-1">
            Enter the email and password of the
            account created in Supabase Authentication.
          </p>

        </div>

      </div>

    </main>
  );
}
