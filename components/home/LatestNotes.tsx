"use client";

import Link from "next/link";
import {
  Eye,
  Download,
  Crown,
  BookOpen,
  Atom,
  FlaskConical,
  Calculator,
} from "lucide-react";

const notes = [
  {
    title: "Introduction to Computers",
    category: "Computer",
    lessons: "PDF + Notes",
    premium: false,
    href: "/computer",
    icon: BookOpen,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Motion & Laws",
    category: "Physics",
    lessons: "PDF + Notes",
    premium: false,
    href: "/physics",
    icon: Atom,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Atomic Structure",
    category: "Chemistry",
    lessons: "Premium PDF",
    premium: true,
    href: "/chemistry",
    icon: FlaskConical,
    color: "from-pink-600 to-red-500",
  },
  {
    title: "Algebra Basics",
    category: "Mathematics",
    lessons: "Premium PDF",
    premium: true,
    href: "/mathematics",
    icon: Calculator,
    color: "from-green-600 to-emerald-500",
  },
];

export default function LatestNotes() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-14">

          <div>

            <span className="text-blue-600 font-bold uppercase tracking-widest">
              Downloads
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">
              Latest Notes
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              Fresh study material updated regularly.
            </p>

          </div>

          <Link
            href="/notes"
            className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all"
          >
            View All →
          </Link>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {notes.map((note) => {

            const Icon = note.icon;

            return (

              <div
                key={note.title}
                className="rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >

                <div
                  className={`h-40 bg-gradient-to-r ${note.color} flex items-center justify-center relative`}
                >

                  <Icon size={70} className="text-white" />

                  {note.premium && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black rounded-full px-3 py-1 flex items-center gap-1 text-xs font-bold">
                      <Crown size={14} />
                      Premium
                    </div>
                  )}

                </div>

                <div className="p-6">

                  <span className="text-sm font-semibold text-blue-600">
                    {note.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {note.title}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {note.lessons}
                  </p>

                  <div className="mt-8 flex gap-3">

                    <Link
                      href={note.href}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 flex justify-center items-center gap-2 transition"
                    >
                      <Eye size={18} />
                      View
                    </Link>

                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 flex justify-center items-center gap-2 transition">
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