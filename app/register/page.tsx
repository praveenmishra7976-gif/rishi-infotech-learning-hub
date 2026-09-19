"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

async function register() {
  try {
    setLoading(true);

    alert("Register Started");

    console.log("Creating user...");

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: name.trim(),
        },
      },
    });

    console.log("DATA =>", data);
    console.log("ERROR =>", error);

    if (error) {
      alert("Supabase Error:\n" + error.message);
      return;
    }

    alert("SUCCESS");

    router.push("/login");
  } catch (err) {
    console.log("FULL ERROR =>", err);

    if (err instanceof Error) {
      alert(err.message);
    } else {
      alert(JSON.stringify(err, null, 2));
    }
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-100 p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join Rishi Infotech Learning Hub
        </p>

        <input
          type="text"
          placeholder="Full Name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-8 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-5 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-5 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          onClick={register}
          disabled={loading}
          className="w-full mt-8 bg-blue-700 hover:bg-blue-800 text-white rounded-xl py-3 font-bold transition disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?
        </p>

        <Link
          href="/login"
          className="block text-center mt-2 text-blue-700 font-bold hover:underline"
        >
          Login
        </Link>

      </div>
    </main>
  );
}