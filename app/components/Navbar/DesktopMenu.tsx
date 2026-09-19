"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function DesktopMenu() {
  return (
    <div className="hidden lg:flex items-center gap-8 font-medium">

      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>

      {/* Learn */}

      <div className="relative group">

        <button className="flex items-center gap-1 hover:text-blue-600">
          Learn
          <ChevronDown size={16} />
        </button>

        <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl w-64 p-2 z-50">

          <Link href="/computer" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            💻 Computer
          </Link>

          <Link href="/physics" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            ⚛️ Physics
          </Link>

          <Link href="/chemistry" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            🧪 Chemistry
          </Link>

          <Link href="/mathematics" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            📐 Mathematics
          </Link>

          <Link href="/sanskrit" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            📜 Sanskrit
          </Link>

        </div>

      </div>

      {/* Practice */}

      <div className="relative group">

        <button className="flex items-center gap-1 hover:text-blue-600">
          Practice
          <ChevronDown size={16} />
        </button>

        <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl w-64 p-2 z-50">

          <Link href="/quiz" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            📝 Quiz
          </Link>

          <Link href="/leaderboard" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            🏆 Leaderboard
          </Link>

          <Link href="/study-planner" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            📅 Study Planner
          </Link>

        </div>

      </div>

      {/* Tools */}

      <div className="relative group">

        <button className="flex items-center gap-1 hover:text-blue-600">
          Tools
          <ChevronDown size={16} />
        </button>

        <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl w-72 p-2 z-50">

          <Link href="/developer-tools" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            🛠 Developer Tools
          </Link>

          <Link href="/dictionary" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            📖 Dictionary
          </Link>

          <Link href="/translator" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            🌐 Translator
          </Link>

          <Link href="/calculator" className="block px-4 py-3 hover:bg-blue-50 rounded-lg">
            🧮 Calculator
          </Link>

        </div>

      </div>

      

      <Link href="/dashboard" className="hover:text-blue-600">
        Dashboard
      </Link>

      <Link
        href="/premium"
        className="rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-2 text-white font-semibold"
      >
        💎 Premium
      </Link>

    </div>
  );
}