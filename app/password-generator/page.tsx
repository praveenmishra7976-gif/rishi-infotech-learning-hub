"use client";

import { useState } from "react";

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let pass = "";

    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(pass);
  };

  const copyPassword = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-purple-700">
          Password Generator
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Generate strong and secure passwords instantly.
        </p>

        <label className="block mt-8 font-semibold">
          Password Length: {length}
        </label>

        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full mt-2"
        />

        <input
          type="text"
          value={password}
          readOnly
          placeholder="Generated Password"
          className="w-full border rounded-xl p-4 mt-6"
        />

        <div className="grid grid-cols-2 gap-4 mt-6">

          <button
            onClick={generatePassword}
            className="bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800"
          >
            Generate
          </button>

          <button
            onClick={copyPassword}
            className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
          >
            Copy
          </button>

        </div>

      </div>
    </main>
  );
}