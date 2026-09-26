"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const status = searchParams.get("status");

    if (status === "suspended") {
      setMessage(
        "Your account is suspended. Please contact the administrator."
      );
    } else if (status === "blocked") {
      setMessage(
        "Your account has been blocked. Please contact the administrator."
      );
    }
  }, [searchParams]);

  async function login() {
    setMessage("");

    if (!email.trim() || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const cleanEmail = email.trim().toLowerCase();

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });

      if (error) {
        console.error("Login error:", error);
        setMessage(error.message);
        return;
      }

      if (!data.user) {
        setMessage("Unable to sign in. Please try again.");
        return;
      }

      /*
       * Check the user's account status immediately after authentication.
       */
      const { data: profile, error: profileError } =
        await supabase
          .from("profiles")
          .select("status")
          .eq("id", data.user.id)
          .maybeSingle();

      if (profileError) {
        console.error(
          "Profile status lookup error:",
          profileError
        );

        await supabase.auth.signOut();

        setMessage(
          "Your account could not be verified. Please contact the administrator."
        );

        return;
      }

      const status = String(
        profile?.status || "active"
      ).toLowerCase();

      if (status === "suspended") {
        await supabase.auth.signOut();

        setMessage(
          "Your account is suspended. Please contact the administrator."
        );

        return;
      }

      if (status === "blocked") {
        await supabase.auth.signOut();

        setMessage(
          "Your account has been blocked. Please contact the administrator."
        );

        return;
      }

      /*
       * Confirm that Supabase has a session.
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
        setMessage(
          "Login succeeded, but the session could not be established. Please try again."
        );
        return;
      }

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Unexpected login error:", error);

      setMessage(
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
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <h1 className="text-center text-4xl font-bold text-blue-700">
          Login
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Welcome Back
        </p>

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
          className="mt-8 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
        />

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
          className="mt-5 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
        />

        {message && (
          <div
            role="alert"
            className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold leading-6 text-red-700"
          >
            {message}
          </div>
        )}

        <button
          type="button"
          onClick={login}
          disabled={loading}
          className="mt-8 w-full rounded-xl bg-blue-700 py-3 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        <div className="mt-6 text-center">
          <Link
            href="/auth/forgot-password"
            className="text-blue-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?
        </p>

        <Link
          href="/register"
          className="mt-2 block text-center font-bold text-blue-700 hover:underline"
        >
          Create Account
        </Link>
      </div>
    </main>
  );
}
