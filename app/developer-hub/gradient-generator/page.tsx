"use client";

import { useState } from "react";
import { Sparkles, Copy } from "lucide-react";

export default function GradientGeneratorPage() {
  const [color1, setColor1] = useState("#2563eb");
  const [color2, setColor2] = useState("#9333ea");
  const [angle, setAngle] = useState(90);

  const css = `background: linear-gradient(${angle}deg, ${color1}, ${color2});`;

  function copyCSS() {
    navigator.clipboard.writeText(css);
    alert("CSS Copied!");
  }

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <Sparkles size={50} />

            <div>

              <h1 className="text-5xl font-black">
                Gradient Generator
              </h1>

              <p className="mt-3 text-purple-100">
                Create beautiful CSS gradients instantly.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Generator */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="grid md:grid-cols-2 gap-10">

            <div>

              <label className="font-bold text-lg">
                First Color
              </label>

              <input
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="w-full h-20 mt-3"
              />

            </div>

            <div>

              <label className="font-bold text-lg">
                Second Color
              </label>

              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="w-full h-20 mt-3"
              />

            </div>

          </div>

          <div className="mt-10">

            <label className="font-bold text-lg">
              Angle : {angle}°
            </label>

            <input
              type="range"
              min={0}
              max={360}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full mt-4"
            />

          </div>

          <div
            className="mt-12 rounded-3xl h-64 shadow-xl"
            style={{
              background: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
            }}
          />

          <div className="mt-10 bg-slate-900 rounded-2xl p-6">

            <div className="flex justify-between items-center">

              <h2 className="text-white font-bold">
                CSS Code
              </h2>

              <button
                onClick={copyCSS}
                className="text-white hover:text-green-400"
              >
                <Copy />
              </button>

            </div>

            <pre className="text-green-400 mt-5 overflow-auto">

{css}

            </pre>

          </div>

        </div>

      </section>

    </main>
  );
}
