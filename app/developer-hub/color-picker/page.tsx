"use client";

import { useState } from "react";
import { Palette, Copy } from "lucide-react";

export default function ColorPickerPage() {
  const [color, setColor] = useState("#2563eb");

  function hexToRgb(hex: string) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    return `${r}, ${g}, ${b}`;
  }

  function copy(text: string) {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <Palette size={50} />

            <div>

              <h1 className="text-5xl font-black">
                Color Picker
              </h1>

              <p className="mt-3 text-pink-100">
                Choose colors and copy HEX & RGB instantly.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="flex justify-center">

            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-52 h-52 cursor-pointer border-0"
            />

          </div>

          <div
            className="w-full h-40 rounded-3xl mt-10 shadow-lg"
            style={{ background: color }}
          />

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="bg-slate-100 rounded-2xl p-6">

              <h2 className="font-bold text-xl">
                HEX
              </h2>

              <div className="flex justify-between items-center mt-4">

                <span className="text-xl font-mono">
                  {color}
                </span>

                <button
                  onClick={() => copy(color)}
                >
                  <Copy />
                </button>

              </div>

            </div>

            <div className="bg-slate-100 rounded-2xl p-6">

              <h2 className="font-bold text-xl">
                RGB
              </h2>

              <div className="flex justify-between items-center mt-4">

                <span className="text-xl font-mono">
                  rgb({hexToRgb(color)})
                </span>

                <button
                  onClick={() => copy(`rgb(${hexToRgb(color)})`)}
                >
                  <Copy />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}