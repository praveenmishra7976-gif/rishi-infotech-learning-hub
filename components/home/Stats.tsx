"use client";

import { GraduationCap, BookOpen, Brain, Trophy } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "10K+",
    title: "Students",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: BookOpen,
    value: "500+",
    title: "Study Notes",
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: Brain,
    value: "50+",
    title: "AI Tools",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: Trophy,
    value: "100+",
    title: "Courses",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest font-bold text-cyan-100">
            Our Achievement
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Trusted By Thousands
          </h2>

          <p className="mt-5 text-blue-100 text-lg max-w-3xl mx-auto">
            Rishi Infotech Learning Hub helps students learn smarter with
            premium study material, AI tools and practice resources.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >

                <div
                  className={`mx-auto w-18 h-18 rounded-3xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl`}
                >
                  <Icon size={36} className="text-white" />
                </div>

                <h3 className="mt-8 text-5xl font-black">
                  {item.value}
                </h3>

                <p className="mt-3 text-blue-100 text-lg font-medium">
                  {item.title}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}