"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function WifiQR() {
  const [ssid, setSSID] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState("WPA");

  const wifiString = `WIFI:T:${security};S:${ssid};P:${password};;`;

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="max-w-5xl mx-auto py-20 px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-4xl font-black mb-10">
            WiFi QR Generator
          </h1>

          <input
            placeholder="WiFi Name"
            value={ssid}
            onChange={(e)=>setSSID(e.target.value)}
            className="w-full border rounded-xl p-4 mb-5"
          />

          <input
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border rounded-xl p-4 mb-5"
          />

          <select
            value={security}
            onChange={(e)=>setSecurity(e.target.value)}
            className="w-full border rounded-xl p-4"
          >
            <option>WPA</option>
            <option>WEP</option>
            <option>nopass</option>
          </select>

          <div className="flex justify-center mt-10">

            <QRCode
              value={wifiString}
              size={250}
            />

          </div>

        </div>

      </section>

    </main>
  );
}