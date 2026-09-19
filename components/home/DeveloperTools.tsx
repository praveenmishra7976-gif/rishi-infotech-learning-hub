"use client";

import Link from "next/link";
import {
  QrCode,
  ShieldCheck,
  Palette,
  FileJson,
  Braces,
  FileCode2,
  KeyRound,
  CodeXml,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    title: "QR Generator",
    description: "Generate custom QR codes instantly.",
    href: "/developer-hub/qr-generator",
    icon: QrCode,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Password Generator",
    description: "Create strong and secure passwords.",
    href: "/developer-hub/password-generator",
    icon: KeyRound,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "JSON Formatter",
    description: "Beautify and validate JSON instantly.",
    href: "/developer-hub/json-formatter",
    icon: FileJson,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "HTML Formatter",
    description: "Format HTML code beautifully.",
    href: "/developer-hub/html-formatter",
    icon: FileCode2,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "CSS Formatter",
    description: "Clean and organize CSS code.",
    href: "/developer-hub/css-formatter",
    icon: CodeXml,
    color: "from-cyan-600 to-blue-600",
  },
  {
    title: "JavaScript Formatter",
    description: "Beautify JavaScript in one click.",
    href: "/developer-hub/js-formatter",
    icon: Braces,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Color Picker",
    description: "Choose beautiful colors easily.",
    href: "/developer-hub/color-picker",
    icon: Palette,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Security Tools",
    description: "Useful utilities for developers.",
    href: "/developer-hub/security-tools",
    icon: ShieldCheck,
    color: "from-indigo-600 to-blue-600",
  },
];

export default function DeveloperTools() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-bold uppercase tracking-widest">
            Developer Hub
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            Developer Tools
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-3xl mx-auto">
            Everything a developer needs in one place. Free online tools to
            improve productivity.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {tools.map((tool) => {

            const Icon = tool.icon;

            return (

              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white group-hover:scale-110 transition`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {tool.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-7">
                  {tool.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                  Open Tool
                  <ArrowRight size={18} />
                </div>

              </Link>

            );

          })}

        </div>

      </div>
    </section>
  );
}