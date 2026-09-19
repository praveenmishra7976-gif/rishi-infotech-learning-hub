"use client";

import { useState } from "react";
import QRCode from "react-qr-code";
import { QrCode, Download } from "lucide-react";

export default function QRGeneratorPage() {
  const [text, setText] = useState(
    "https://rishi-infotech-learning-hub.vercel.app"
  );

  const downloadQR = () => {
    const svg = document.getElementById("qr-code");

    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);

    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");

    const img = new Image();

    img.onload = () => {
      canvas.width = 512;
      canvas.height = 512;

      ctx?.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");

      downloadLink.download = "qr-code.png";

      downloadLink.href = pngFile;

      downloadLink.click();
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <QrCode size={50} />

            <div>

              <h1 className="text-5xl font-black">
                QR Code Generator
              </h1>

              <p className="mt-3 text-blue-100">
                Generate and download QR codes instantly.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Enter Text or URL
            </h2>

            <textarea
              rows={8}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border rounded-2xl p-5 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter URL, text, email or phone number"
            />

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center">

            <div className="bg-white p-5 rounded-2xl">

              <QRCode
                id="qr-code"
                value={text}
                size={250}
              />

            </div>

            <button
              onClick={downloadQR}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition"
            >

              <Download size={22} />

              Download QR

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}