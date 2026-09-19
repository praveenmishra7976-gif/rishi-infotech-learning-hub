"use client";

import Link from "next/link";
import {
  Bot,
  Image,
  Video,
  Code2,
  PenSquare,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    title: "AI Chat",
    desc: "Chat with powerful AI assistants",
    icon: Bot,
    color: "from-blue-500 to-cyan-500",
    href: "/ai/chat",
  },
  {
    title: "AI Image",
    desc: "Generate amazing AI images",
    icon: Image,
    color: "from-pink-500 to-red-500",
    href: "/ai/image",
  },
  {
    title: "AI Video",
    desc: "Create videos with AI",
    icon: Video,
    color: "from-purple-500 to-indigo-500",
    href: "/ai/video",
  },
  {
    title: "AI Coding",
    desc: "Generate code instantly",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    href: "/ai/coding",
  },
  {
    title: "AI Writing",
    desc: "Write blogs, emails & notes",
    icon: PenSquare,
    color: "from-orange-500 to-yellow-500",
    href: "/ai/writing",
  },
  {
    title: "AI Productivity",
    desc: "Boost your daily workflow",
    icon: Briefcase,
    color: "from-indigo-500 to-violet-500",
    href: "/ai/productivity",
  },
];

export default function AIHub() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest">
            AI Hub
          </span>

          <h2 className="text-5xl font-black mt-3 text-slate-900">
            Latest AI Tools
          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
            Explore powerful AI tools for learning, coding, image generation,
            writing and productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <Link
                key={index}
                href={tool.href}
                className="group rounded-3xl bg-white shadow-xl border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${tool.color} p-8 flex justify-center`}
                >
                  <Icon
                    size={60}
                    className="text-white group-hover:scale-110 transition"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {tool.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {tool.desc}
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-blue-600 font-semibold">
                      Open Tool
                    </span>

                    <ArrowRight className="text-blue-600 group-hover:translate-x-2 transition" />

                  </div>

                </div>
              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}
