"use client";

import { useState } from "react";
import { KeyRound, Copy, RefreshCw } from "lucide-react";

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  function generatePassword() {
    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 text-white py-16">

        <div className="max-w-5xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <KeyRound size={50} />

            <div>

              <h1 className="text-5xl font-black">
                Password Generator
              </h1>

              <p className="mt-3 text-green-100">
                Generate secure random passwords instantly.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <label className="font-bold text-xl">
            Password Length
          </label>

          <input
            type="range"
            min={6}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mt-5"
          />

          <div className="text-center text-3xl font-black mt-3">

            {length}

          </div>

          <button
            onClick={generatePassword}
            className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold flex justify-center items-center gap-3 transition"
          >

            <RefreshCw size={22} />

            Generate Password

          </button>

          <div className="mt-10">

            <label className="font-bold">
              Generated Password
            </label>

            <div className="flex mt-4">

              <input
                value={password}
                readOnly
                className="flex-1 border rounded-l-2xl px-5 py-4 outline-none"
              />

              <button
                onClick={copyPassword}
                className="bg-blue-600 hover:bg-blue-700 px-6 rounded-r-2xl text-white transition"
              >

                <Copy size={22} />

              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}