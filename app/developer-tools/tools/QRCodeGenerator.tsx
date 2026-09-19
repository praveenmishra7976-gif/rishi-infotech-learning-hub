"use client";

import { useState } from "react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        QR Code Generator
      </h2>

      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className="w-full border rounded-xl p-4"
      />

      {text && (

        <img
          className="mt-8 mx-auto"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}`}
          alt="QR Code"
        />

      )}

    </div>
  );
}