"use client";

import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="uppercase tracking-widest font-bold text-blue-100">
          Newsletter
        </span>

        <h2 className="text-5xl font-black mt-4">
          Stay Updated
        </h2>

        <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
          Get the latest study notes, AI tools, quizzes and updates directly in your inbox.
        </p>

        <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl p-2 flex shadow-2xl">

          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 rounded-xl outline-none text-black"
          />

          <button className="bg-blue-700 hover:bg-blue-800 transition px-8 rounded-xl flex items-center gap-2 font-bold text-white">
            <Send size={18} />
            Subscribe
          </button>

        </div>

        <p className="mt-6 text-sm text-blue-100">
          No spam. Unsubscribe anytime.
        </p>

      </div>

    </section>
  );
}