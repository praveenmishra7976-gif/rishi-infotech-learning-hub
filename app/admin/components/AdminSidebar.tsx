"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  FileQuestion,
  Video,
  Download,
  FolderTree,
  BarChart3,
  Settings,
  Shield,
  Layers,
  BookMarked,
  Mail,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Notes",
    href: "/admin/notes",
    icon: BookOpen,
  },
  {
    name: "Courses",
    href: "/admin/courses",
    icon: GraduationCap,
  },
  {
    name: "Chapters",
    href: "/admin/chapters",
    icon: Layers,
  },
  {
    name: "Lessons",
    href: "/admin/lessons",
    icon: BookMarked,
  },
  {
    name: "Quizzes",
    href: "/admin/quizzes",
    icon: FileQuestion,
  },
  {
    name: "Videos",
    href: "/admin/videos",
    icon: Video,
  },
  {
    name: "Downloads",
    href: "/admin/downloads",
    icon: Download,
  },
  {
    name: "Subjects",
    href: "/admin/subjects",
    icon: FolderTree,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Newsletter",
    href: "/admin/newsletter",
    icon: Mail,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-[calc(100vh-5rem)] bg-slate-900 text-white sticky top-20 overflow-y-auto shrink-0">

      {/* Admin Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">

          <Shield
            className="text-cyan-400 shrink-0"
            size={34}
          />

          <div>
            <h1 className="font-black text-xl">
              Admin Panel
            </h1>

            <p className="text-sm text-slate-400">
              Rishi Infotech
            </p>
          </div>

        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 pb-10">

        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                active
                  ? "bg-cyan-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} className="shrink-0" />

              <span className="font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}