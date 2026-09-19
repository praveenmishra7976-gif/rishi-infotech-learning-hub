"use client";

import { useState } from "react";
import {
  FileJson,
  Copy,
  Download,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function JSONFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");

  function formatJSON() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setStatus("Valid JSON ✅");
    } catch {
      setOutput("");
      setStatus("Invalid JSON ❌");
    }
  }

  function minifyJSON() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setStatus("JSON Minified ✅");
    } catch {
      setOutput("");
      setStatus("Invalid JSON ❌");
    }
  }

  function copyOutput() {
    navigator.clipboard.writeText(output);
    alert("Copied!");
  }

  function downloadJSON() {
    const blob = new Blob([output], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "formatted.json";

    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <FileJson size={50} />

            <div>

              <h1 className="text-5xl font-black">
                JSON Formatter
              </h1>

              <p className="mt-3 text-blue-100">
                Validate, Beautify & Minify JSON.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold mb-5">
              Input JSON
            </h2>

            <textarea
              rows={20}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='{"name":"Rishi","age":21}'
              className="w-full border rounded-2xl p-5 font-mono outline-none"
            />

            <div className="flex gap-4 mt-6">

              <button
                onClick={formatJSON}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold"
              >
                Beautify
              </button>

              <button
                onClick={minifyJSON}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
              >
                Minify
              </button>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                Output
              </h2>

              <div className="flex gap-3">

                <button
                  onClick={copyOutput}
                  className="text-blue-600"
                >
                  <Copy size={22} />
                </button>

                <button
                  onClick={downloadJSON}
                  className="text-green-600"
                >
                  <Download size={22} />
                </button>

              </div>

            </div>

            <pre className="mt-6 bg-slate-900 text-green-400 rounded-2xl p-5 overflow-auto h-[420px] text-sm">

{output}

            </pre>

            <div className="mt-6 flex items-center gap-3">

              {status.includes("Valid") ? (
                <CheckCircle className="text-green-600" />
              ) : status.includes("Invalid") ? (
                <AlertCircle className="text-red-600" />
              ) : null}

              <span className="font-semibold">
                {status}
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}