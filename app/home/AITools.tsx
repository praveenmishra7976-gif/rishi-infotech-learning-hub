"use client";

import Link from "next/link";
import {
  Brain,
  Bot,
  Image,
  FileText,
  Code2,
  Sparkles,
  ArrowRight,
  Wand2,
} from "lucide-react";

const tools = [
  {
    title: "AI Teacher",
    description: "Learn every subject with your personal AI teacher.",
    href: "/ai-teacher",
    icon: Bot,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "AI Tutor",
    description: "Get instant answers to your doubts anytime.",
    href: "/ai-tutor",
    icon: Brain,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "AI Image Generator",
    description: "Generate stunning AI images in seconds.",
    href: "/ai-image",
    icon: Image,
    color: "from-pink-600 to-red-500",
  },
  {
    title: "AI Notes",
    description: "Generate smart study notes automatically.",
    href: "/ai-notes",
    icon: FileText,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "AI Code",
    description: "Generate HTML, CSS, JavaScript and React code.",
    href: "/ai-code",
    icon: Code2,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "AI Quiz",
    description: "Create unlimited MCQs using Artificial Intelligence.",
    href: "/ai-quiz",
    icon: Wand2,
    color: "from-indigo-600 to-blue-500",
  },
];

export default function AITools() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-5 py-2">

            <Sparkles size={18} />

            <span className="font-semibold">
              Artificial Intelligence
            </span>

          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-black">
            AI Learning Hub
          </h2>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto text-lg leading-8">
            Experience next-generation learning with Artificial Intelligence.
            Chat with AI, generate notes, quizzes, images and much more.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tools.map((tool) => {

            const Icon = tool.icon;

            return (

              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,.5)]"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center group-hover:scale-110 transition`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {tool.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-7">
                  {tool.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-cyan-300 font-semibold group-hover:gap-4 transition-all">
                  Explore
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