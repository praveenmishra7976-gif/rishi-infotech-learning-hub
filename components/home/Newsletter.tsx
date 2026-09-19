"use client";

import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto shadow-xl">
          <Mail size={44} />
        </div>

        <h2 className="mt-8 text-4xl md:text-5xl font-black">
          Stay Updated
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto leading-8">
          Subscribe to receive the latest Notes, AI Tools, Study Materials,
          Quiz Updates and New Courses directly in your inbox.
        </p>

        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row gap-2">

          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-xl outline-none text-black text-lg"
          />

          <button className="bg-blue-700 hover:bg-blue-800 transition text-white font-bold rounded-xl px-8 py-4 flex items-center justify-center gap-2">
            <Send size={20} />
            Subscribe
          </button>

        </div>

        <p className="mt-6 text-sm text-blue-100">
          We respect your privacy. No spam, only valuable educational content.
        </p>

      </div>

    </section>
  );
}