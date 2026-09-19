"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Braces,
  Code2,
  FileJson,
  Palette,
  QrCode,
  Shield,
  Sparkles,
} from "lucide-react";

const tools = [
  {
    title: "QR Generator",
    desc: "Create QR codes instantly.",
    icon: QrCode,
    href: "/developer-hub/qr-generator",
    tag: "UTILITY",
  },
  {
    title: "Password Generator",
    desc: "Generate strong secure passwords.",
    icon: Shield,
    href: "/developer-hub/password-generator",
    tag: "SECURITY",
  },
  {
    title: "JSON Formatter",
    desc: "Format and beautify JSON data.",
    icon: FileJson,
    href: "/developer-hub/json-formatter",
    tag: "DATA",
  },
  {
    title: "HTML Formatter",
    desc: "Clean and format HTML code.",
    icon: Braces,
    href: "/developer-hub/html-formatter",
    tag: "WEB",
  },
  {
    title: "CSS Tools",
    desc: "Format and optimize CSS.",
    icon: Palette,
    href: "/developer-hub/css-formatter",
    tag: "STYLING",
  },
  {
    title: "JavaScript Tools",
    desc: "Useful tools for JavaScript development.",
    icon: Code2,
    href: "/developer-hub/js-formatter",
    tag: "CODE",
  },
];

export default function DeveloperTools() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">

      {/* Background */}

      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black tracking-[0.18em] text-blue-700 shadow-sm">
              <Code2 size={15} />
              DEVELOPER HUB
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Powerful Tools.
              <span className="block text-blue-600">
                Simple & Fast.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Useful developer utilities for coding, formatting, security and
              everyday technical work — all available in one place.
            </p>

          </div>

          <Link
            href="/developer-hub"
            className="group inline-flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-900"
          >
            Explore Developer Hub

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

        {/* Tool grid */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200">
                    <Icon size={23} />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                    <ArrowUpRight size={17} />
                  </div>

                </div>

                <div className="mt-6">

                  <div className="text-[10px] font-black tracking-[0.2em] text-blue-600">
                    {tool.tag}
                  </div>

                  <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {tool.desc}
                  </p>

                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-700">
                  Open tool

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Hover decoration */}

                <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-blue-100/60 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

              </Link>
            );
          })}

        </div>

        {/* Bottom banner */}

        <div className="mt-8 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-xl sm:p-9">

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Sparkles size={23} className="text-cyan-300" />
              </div>

              <div>

                <p className="text-xs font-black tracking-[0.2em] text-cyan-300">
                  BUILT FOR LEARNERS & DEVELOPERS
                </p>

                <h3 className="mt-2 text-xl font-black sm:text-2xl">
                  Learn technology by actually using it.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Explore practical tools while building your technical
                  knowledge and development skills.
                </p>

              </div>

            </div>

            <Link
              href="/developer-hub"
              className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-50"
            >
              View All Tools
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
