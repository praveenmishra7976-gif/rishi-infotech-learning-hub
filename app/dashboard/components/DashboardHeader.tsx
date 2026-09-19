"use client";

import Link from "next/link";
import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="bg-white rounded-3xl shadow-lg p-6 flex flex-col lg:flex-row items-center justify-between gap-5">

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Student Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back to Rishi Infotech Learning Hub
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-11 pr-4 py-3 rounded-xl border outline-none w-64"
          />

        </div>

        <button className="relative p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </button>

        <Link
          href="/profile"
          className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold"
        >
          R
        </Link>

      </div>

    </header>
  );
}