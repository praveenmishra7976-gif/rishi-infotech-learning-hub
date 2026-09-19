"use client";

import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                <GraduationCap className="text-white" size={30} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  Rishi Infotech
                </h2>
                <p className="text-blue-400">Learning Hub</p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-gray-400">
              Learn Computer, Physics, Chemistry, Mathematics, Sanskrit,
              AI Tools and Developer Tools in one premium platform.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition"
              >
                
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center transition"
              >
                
              </a>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Learning</h3>

            <div className="space-y-4">
              <Link href="/computer" className="block hover:text-blue-400">
                Computer
              </Link>

              <Link href="/physics" className="block hover:text-blue-400">
                Physics
              </Link>

              <Link href="/chemistry" className="block hover:text-blue-400">
                Chemistry
              </Link>

              <Link href="/mathematics" className="block hover:text-blue-400">
                Mathematics
              </Link>

              <Link href="/sanskrit" className="block hover:text-blue-400">
                Sanskrit
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Tools</h3>

            <div className="space-y-4">
              <Link href="/ai-hub" className="block hover:text-blue-400">
                AI Hub
              </Link>

              <Link href="/developer-hub" className="block hover:text-blue-400">
                Developer Hub
              </Link>

              <Link href="/practice" className="block hover:text-blue-400">
                Practice Center
              </Link>

              <Link href="/downloads" className="block hover:text-blue-400">
                Downloads
              </Link>

              <Link href="/blog" className="block hover:text-blue-400">
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Mail className="text-blue-500" size={20} />
                <span>support@rishiinfotech.com</span>
              </div>

              <div className="flex gap-3">
                <Phone className="text-blue-500" size={20} />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-500" size={20} />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center">
            © 2026 Rishi Infotech Learning Hub. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-blue-400">
              Terms
            </Link>

            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}