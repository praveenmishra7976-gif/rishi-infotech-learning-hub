import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Mail,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main footer */}

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-black">
                RI
              </div>

              <div>
                <h2 className="text-xl font-black">
                  Rishi Infotech
                </h2>

                <p className="text-xs font-bold text-slate-500">
                  Learning Hub
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              A free learning platform helping students learn subjects,
              practice concepts, explore technology and build useful skills.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-400">
              <ShieldCheck size={16} className="text-cyan-400" />
              Free education for students
            </div>

          </div>

          {/* Learning */}

          <div>

            <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">
              Learning
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/learn"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                <BookOpen size={15} />
                Learn
              </Link>

              <Link
                href="/practice"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                <Trophy size={15} />
                Practice
              </Link>

              <Link
                href="/learn"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                <Sparkles size={15} />
                Notes
              </Link>

              <Link
                href="/quiz"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                <GraduationCap size={15} />
                Quizzes
              </Link>

            </div>

          </div>

          {/* Subjects */}

          <div>

            <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">
              Subjects
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/learn/computer"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Computer
              </Link>

              <Link
                href="/learn/physics"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Physics
              </Link>

              <Link
                href="/learn/chemistry"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Chemistry
              </Link>

              <Link
                href="/learn/mathematics"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Mathematics
              </Link>

              <Link
                href="/learn/sanskrit"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Sanskrit
              </Link>

            </div>

          </div>

          {/* Technology / Contact */}

          <div>

            <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">
              Technology
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/dictionary"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                <Sparkles size={15} />
                AI Hub
              </Link>

              <Link
                href="/developer-hub"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                <Code2 size={15} />
                Developer Hub
              </Link>

              <Link
                href="/calculator"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                <ArrowRight size={15} />
                Study Tools
              </Link>

            </div>

            <div className="mt-7">

              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Mail size={16} className="text-cyan-400" />
                support@rishiinfotech.com
              </div>

            </div>

          </div>

        </div>

        {/* Mission banner */}

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-[10px] font-black tracking-[0.2em] text-cyan-300">
                OUR VISION
              </p>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Build a future where schools and students can access useful
                digital learning resources without financial barriers.
              </p>

            </div>

            <Link
              href="/learn"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-black text-white"
            >
              Start Learning
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </p>

          <p>
            Founded by{" "}
            <span className="font-bold text-slate-300">
              Praveen Mishra
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}
