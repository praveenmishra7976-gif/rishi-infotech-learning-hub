"use client";

import Link from "next/link";
import { Bell, UserCircle, LogOut } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8 shadow-sm">

      <div>

        <h1 className="text-3xl font-black text-slate-800">
          Rishi Infotech Learning Hub
        </h1>

        <p className="text-gray-500 text-sm">
          Administration Dashboard
        </p>

      </div>

      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell size={24} />

          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle size={42} className="text-blue-600" />

          <div>

            <h2 className="font-bold">
              Administrator
            </h2>

            <p className="text-sm text-gray-500">
              admin@rishiinfotech.com
            </p>

          </div>

        </div>

        <Link
          href="/admin/login"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition text-white px-5 py-3 rounded-xl"
        >
          <LogOut size={18} />
          Logout
        </Link>

      </div>

    </header>
  );
}