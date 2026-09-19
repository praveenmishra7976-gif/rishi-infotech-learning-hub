"use client";

import Link from "next/link";
import {
  Brain,
  BookOpen,
  Calculator,
  Code2,
  Cpu,
  FlaskConical,
  Languages,
  Trophy,
} from "lucide-react";

const items = [
  {
    title: "Computer",
    icon: Cpu,
    href: "/computer",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Physics",
    icon: Calculator,
    href: "/physics",
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Chemistry",
    icon: FlaskConical,
    href: "/chemistry",
    color: "from-pink-600 to-red-500",
  },
  {
    title: "Mathematics",
    icon: Calculator,
    href: "/mathematics",
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Sanskrit",
    icon: Languages,
    href: "/sanskrit",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "AI Hub",
    icon: Brain,
    href: "/ai-hub",
    color: "from-purple-600 to-fuchsia-500",
  },
  {
    title: "Developer",
    icon: Code2,
    href: "/developer-hub",
    color: "from-slate-700 to-slate-900",
  },
  {
    title: "Quiz",
    icon: Trophy,
    href: "/quiz",
    color: "from-amber-500 to-orange-600",
  },
];

export default function QuickAccess() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-bold uppercase tracking-widest">
            Quick Access
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">
            Access all learning resources, AI tools, developer utilities and
            study materials from one place.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-500 text-sm">
                  Explore {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}