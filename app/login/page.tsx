"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login() {
    if (!email.trim() || !password) {
      alert("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (error) {
        console.error("Login error:", error);
        alert(error.message);
        return;
      }

      console.log("Login Success:", data);

      /*
       * Confirm that Supabase has the session.
       */
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        console.error(
          "Session verification error:",
          sessionError
        );
      }

      if (!session) {
        alert(
          "Login succeeded, but the session could not be established. Please try again."
        );
        return;
      }

      console.log("Session established:", session.user.id);

      /*
       * Login successful.
       * Send the user to the HOME page.
       */
      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Unexpected login error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter" && !loading) {
      login();
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        {/* TITLE */}

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome Back
        </p>

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          autoComplete="email"
          onChange={(event) =>
            setEmail(event.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="w-full mt-8 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="current-password"
          onChange={(event) =>
            setPassword(event.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="w-full mt-5 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
        />

        {/* LOGIN BUTTON */}

        <button
          type="button"
          onClick={login}
          disabled={loading}
          className="w-full mt-8 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl py-3 font-bold transition"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        {/* FORGOT PASSWORD */}

        <div className="mt-6 text-center">
          <Link
            href="/auth/forgot-password"
            className="text-blue-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* REGISTER */}

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?
        </p>

        <Link
          href="/register"
          className="block text-center mt-2 text-blue-700 font-bold hover:underline"
        >
          Create Account
        </Link>

      </div>
    </main>
  );
}