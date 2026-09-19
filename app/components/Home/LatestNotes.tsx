"use client";

import Link from "next/link";
import {
  Monitor,
  Atom,
  Calculator,
  Download,
  Eye,
} from "lucide-react";

const notes = [
  {
    subject: "Computer",
    title: "Introduction to Computers",
    icon: Monitor,
    color: "bg-blue-600",
    href: "/computer",
  },
  {
    subject: "Physics",
    title: "Motion & Laws",
    icon: Atom,
    color: "bg-green-600",
    href: "/physics",
  },
  {
    subject: "Mathematics",
    title: "Algebra Basics",
    icon: Calculator,
    color: "bg-purple-600",
    href: "/mathematics",
  },
];

export default function LatestNotes() {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-14">

          <div>

            <span className="text-blue-600 font-bold uppercase tracking-widest">
              Latest Notes
            </span>

            <h2 className="text-5xl font-black mt-3">
              Fresh Study Material
            </h2>

            <p className="text-gray-600 mt-4">
              Updated regularly for students.
            </p>

          </div>

          <Link
            href="/learn"
            className="text-blue-600 font-bold hover:underline"
          >
            View All →
          </Link>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {notes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >

                <div className={`${item.color} p-8`}>

                  <Icon
                    size={60}
                    className="text-white"
                  />

                </div>

                <div className="p-8">

                  <span className="text-blue-600 font-bold">
                    {item.subject}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
                    {item.title}
                  </h3>

                  <div className="flex gap-4 mt-8">

                    <Link
                      href={item.href}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 flex justify-center items-center gap-2"
                    >
                      <Eye size={18} />
                      View
                    </Link>

                    <button
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 flex justify-center items-center gap-2"
                    >
                      <Download size={18} />
                      PDF
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}