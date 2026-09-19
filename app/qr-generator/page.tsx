"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRGeneratorPage() {
  const [text, setText] = useState("https://rishiinfotech.com");

  return (
    <main className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-purple-700">
          QR Code Generator
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Enter any text or URL to generate a QR Code.
        </p>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL..."
          className="w-full border rounded-xl p-4 mt-8"
        />

        <div className="bg-white p-8 rounded-xl mt-8 flex justify-center">
          <QRCode value={text || " "} size={220} />
        </div>

      </div>

    </main>
  );
}