"use client";

import CountUp from "react-countup";
import {
  Users,
  BookOpen,
  FileText,
  Bot,
  Award,
  Star,
} from "lucide-react";

const stats = [
  {
    title: "Students",
    value: 50000,
    suffix: "+",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    title: "Courses",
    value: 250,
    suffix: "+",
    icon: BookOpen,
    color: "bg-green-600",
  },
  {
    title: "Study Notes",
    value: 8000,
    suffix: "+",
    icon: FileText,
    color: "bg-orange-600",
  },
  {
    title: "AI Tools",
    value: 40,
    suffix: "+",
    icon: Bot,
    color: "bg-purple-600",
  },
  {
    title: "Certificates",
    value: 12000,
    suffix: "+",
    icon: Award,
    color: "bg-pink-600",
  },
  {
    title: "Reviews",
    value: 4.9,
    suffix: "/5",
    icon: Star,
    color: "bg-yellow-500",
  },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our Achievement
          </h2>

          <p className="text-blue-100 mt-4">
            Trusted by thousands of students across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:bg-white/20 transition"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${item.color} flex items-center justify-center mb-6`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-bold">
                  <CountUp
                    end={item.value}
                    duration={3}
                    decimals={item.title === "Reviews" ? 1 : 0}
                  />
                  {item.suffix}
                </h3>

                <p className="mt-3 text-blue-100">
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