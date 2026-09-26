"use client";

import { useState } from "react";
import { createClient } from "@/lib/auth/client";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    try {
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });

      if (loginError) {
        setError(loginError.message);
        return;
      }

      if (!data.user) {
        setError("Unable to sign in. Please try again.");
        return;
      }

      /*
       * Check the account status stored in profiles.
       */
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("status, role")
        .eq("id", data.user.id)
        .maybeSingle();

      if (profileError) {
        await supabase.auth.signOut();

        setError(
          "Your account could not be verified. Please contact the administrator."
        );

        return;
      }

      const status = String(profile?.status || "active").toLowerCase();

      if (status === "suspended") {
        await supabase.auth.signOut();

        setError(
          "Your account is suspended. Please contact the administrator."
        );

        return;
      }

      if (status === "blocked") {
        await supabase.auth.signOut();

        setError(
          "Your account has been blocked. Please contact the administrator."
        );

        return;
      }

      /*
       * Active account.
       * Admin users continue through /admin.
       * Other authenticated users can use the normal dashboard.
       */
      const role = String(profile?.role || "").toLowerCase();

      if (role === "admin" || role === "super_admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }

      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={login}
      className="w-full max-w-md space-y-6 rounded-3xl bg-white p-10 shadow-xl"
    >
      <div>
        <h1 className="text-3xl font-bold text-blue-700">
          Login
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Sign in to your Rishi Infotech account.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Email
        </label>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          disabled={loading}
          required
          className="w-full rounded-xl border p-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:bg-gray-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Password
        </label>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          disabled={loading}
          required
          className="w-full rounded-xl border p-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:bg-gray-100"
        />
      </div>

      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold leading-6 text-red-700"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-700 py-4 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Login"}
      </button>
    </form>
  );
}
