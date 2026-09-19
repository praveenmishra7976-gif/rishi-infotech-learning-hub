"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import { signIn } from "@/lib/auth/auth";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function login() {

    if (!email || !password) {

      alert("Please fill all fields.");

      return;

    }

    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {

      alert(error.message);

      setLoading(false);

      return;

    }

    alert("Login Successful!");

    router.push("/dashboard");

  }

  return (

    <main className="min-h-screen bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 flex items-center justify-center">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-black text-center">

          Student Login

        </h1>

        <p className="text-center text-gray-500 mt-2">

          Welcome back

        </p>

        <div className="mt-8">

          <label className="font-semibold">

            Email

          </label>

          <div className="flex items-center border rounded-xl mt-2">

            <Mail className="ml-4 text-gray-500"/>

            <input
              type="email"
              className="w-full p-4 outline-none"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="font-semibold">

            Password

          </label>

          <div className="flex items-center border rounded-xl mt-2">

            <Lock className="ml-4 text-gray-500"/>

            <input
              type="password"
              className="w-full p-4 outline-none"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

          </div>

        </div>

        <button
          onClick={login}
          disabled={loading}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
        >

          {loading ? "Signing In..." : "Login"}

        </button>

        <div className="flex justify-between mt-6">

          <a
            href="/auth/register"
            className="text-blue-600 font-semibold"
          >

            Register

          </a>

          <a
            href="/auth/forgot-password"
            className="text-blue-600 font-semibold"
          >

            Forgot Password?

          </a>

        </div>

      </div>

    </main>

  );

}