"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ChevronDown,
  Code2,
  FlaskConical,
  GraduationCap,
  Laptop,
  Menu,
  Microscope,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import NavbarAuth from "./NavbarAuth";

type DropdownItem = {
  name: string;
  href: string;
  icon: ReactNode;
  description: string;
};

const learnItems: DropdownItem[] = [
  {
    name: "Computer",
    href: "/learn/computer",
    icon: <Laptop size={19} />,
    description: "Computer basics, hardware & technology",
  },
  {
    name: "Physics",
    href: "/learn/physics",
    icon: <Microscope size={19} />,
    description: "Explore physics concepts",
  },
  {
    name: "Chemistry",
    href: "/learn/chemistry",
    icon: <FlaskConical size={19} />,
    description: "Learn chemistry concepts",
  },
  {
    name: "Mathematics",
    href: "/learn/mathematics",
    icon: <Calculator size={19} />,
    description: "Build strong mathematical skills",
  },
  {
    name: "Sanskrit",
    href: "/learn/sanskrit",
    icon: <BookOpen size={19} />,
    description: "Learn Sanskrit language & literature",
  },
];

const practiceItems: DropdownItem[] = [
  {
    name: "Quiz",
    href: "/quiz",
    icon: <GraduationCap size={19} />,
    description: "Test your knowledge",
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: <Trophy size={19} />,
    description: "See learning rankings",
  },
  {
    name: "Study Planner",
    href: "/study-planner",
    icon: <BookOpen size={19} />,
    description: "Plan your study journey",
  },
];

const toolItems: DropdownItem[] = [
  {
    name: "Developer Hub",
    href: "/developer-hub",
    icon: <Code2 size={19} />,
    description: "Useful tools for developers",
  },
  {
    name: "AI Hub",
    href: "/dictionary",
    icon: <Sparkles size={19} />,
    description: "Explore AI-powered resources",
  },
  {
    name: "Calculator",
    href: "/calculator",
    icon: <Calculator size={19} />,
    description: "Quick calculations",
  },
  {
    name: "Dictionary",
    href: "/dictionary",
    icon: <BookOpen size={19} />,
    description: "Search words and meanings",
  },
  {
    name: "Translator",
    href: "/dictionary/ai-translator",
    icon: <ArrowRight size={19} />,
    description: "Translate between languages",
  },
];

function DesktopDropdown({
  label,
  items,
  pathname,
}: {
  label: string;
  items: DropdownItem[];
  pathname: string;
}) {
  const active = items.some((item) => pathname.startsWith(item.href));

  const parentHref =
    label === "Learn"
      ? "/learn"
      : label === "Practice"
        ? "/practice"
        : "/dictionary";

  return (
    <div className="group relative">
      <div
        className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold transition ${
          active
            ? "festival-nav-active"
            : "festival-nav-item"
        }`}
      >
        <Link href={parentHref} className="flex items-center">
          {label}
        </Link>

        <ChevronDown
          size={15}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-full z-[100] w-80 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="festival-dropdown overflow-hidden rounded-2xl border p-2 shadow-2xl">
          {items.map((item) => {
            const itemActive = pathname.startsWith(item.href);

            return (
              <Link
                key={`${item.name}-${item.href}`}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                  itemActive
                    ? "festival-dropdown-active"
                    : "festival-dropdown-item"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    itemActive
                      ? "festival-icon-active"
                      : "festival-icon"
                  }`}
                >
                  {item.icon}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-black">
                    {item.name}
                  </span>

                  <span className="mt-0.5 block text-xs leading-5 festival-muted">
                    {item.description}
                  </span>
                </span>

                <ArrowRight
                  size={15}
                  className="shrink-0 festival-arrow transition-transform group-hover/item:translate-x-0.5"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type NavbarProps = {
  websiteName?: string | null;
  logoUrl?: string | null;
};

export default function Navbar({
  websiteName,
  logoUrl,
}: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const displayWebsiteName =
    websiteName?.trim() || "Rishi Infotech Learning Hub";

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navClass = (href: string) =>
    isActive(href)
      ? "festival-nav-active"
      : "festival-nav-item";

  return (
    <header className="festival-navbar sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* BRAND */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="festival-logo flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl text-sm font-black text-white shadow-lg transition-transform group-hover:-rotate-2">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={displayWebsiteName}
                className="h-full w-full object-contain bg-white"
              />
            ) : (
              "RI"
            )}
          </div>

          <div className="hidden max-w-[220px] sm:block">
            <div className="text-base font-black leading-tight tracking-tight festival-heading">
              {displayWebsiteName}
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.18em] festival-primary">
              Learning Hub
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-1 lg:flex">

          <Link
            href="/"
            className={`rounded-xl px-3 py-2 text-sm font-bold transition ${navClass("/")}`}
          >
            Home
          </Link>

          <DesktopDropdown
            label="Learn"
            items={learnItems}
            pathname={pathname}
          />

          <DesktopDropdown
            label="Practice"
            items={practiceItems}
            pathname={pathname}
          />

          <DesktopDropdown
            label="Tools"
            items={toolItems}
            pathname={pathname}
          />

          <Link
            href="/blog"
            className={`rounded-xl px-3 py-2 text-sm font-bold transition ${navClass("/blog")}`}
          >
            Blog
          </Link>

          <Link
            href="/dashboard"
            className={`rounded-xl px-3 py-2 text-sm font-bold transition ${navClass("/dashboard")}`}
          >
            Dashboard
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-3 lg:flex">

          <Link
            href="/premium"
            className="festival-premium rounded-xl px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            💎 Premium
          </Link>

          <NavbarAuth />
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="festival-mobile-button rounded-xl border p-2.5 transition lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="festival-mobile-menu border-t shadow-xl lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6">

            <div className="grid gap-1">

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 font-bold ${navClass("/")}`}
              >
                Home
              </Link>

              <Link
                href="/learn"
                onClick={() => setOpen(false)}
                className="festival-nav-item rounded-xl px-4 py-3 font-bold"
              >
                📚 Learn
              </Link>

              <div className="festival-mobile-submenu ml-3 grid border-l-2 pl-3">
                {learnItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="festival-nav-item rounded-xl px-4 py-2.5 text-sm font-semibold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/practice"
                onClick={() => setOpen(false)}
                className="festival-nav-item rounded-xl px-4 py-3 font-bold"
              >
                🎯 Practice
              </Link>

              <div className="festival-mobile-submenu ml-3 grid border-l-2 pl-3">
                {practiceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="festival-nav-item rounded-xl px-4 py-2.5 text-sm font-semibold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/dictionary"
                onClick={() => setOpen(false)}
                className="festival-nav-item rounded-xl px-4 py-3 font-bold"
              >
                🛠️ Tools
              </Link>

              <div className="festival-mobile-submenu ml-3 grid border-l-2 pl-3">
                {toolItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="festival-nav-item rounded-xl px-4 py-2.5 text-sm font-semibold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 font-bold ${navClass("/blog")}`}
              >
                📝 Blog
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 font-bold ${navClass("/dashboard")}`}
              >
                📊 Dashboard
              </Link>

              <Link
                href="/premium"
                onClick={() => setOpen(false)}
                className="festival-premium mt-2 rounded-xl px-4 py-3 text-center font-black text-white"
              >
                💎 Premium
              </Link>

              <div className="mt-2">
                <NavbarAuth />
              </div>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
