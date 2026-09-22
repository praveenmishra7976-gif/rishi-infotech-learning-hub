import { redirect } from "next/navigation";
import {
  Users,
  BookOpen,
  FileQuestion,
  Video,
  Download,
  FolderTree,
  Activity,
  RefreshCw,
} from "lucide-react";

import { getAdminUser } from "@/app/admin/lib/auth";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";
import { getAdminStats } from "@/app/admin/lib/getAdminStats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DashboardPage() {
  const user = await getAdminUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile, error: profileError } =
    await adminSupabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

  if (
    profileError ||
    profile?.role !== "admin"
  ) {
    redirect("/unauthorized");
  }

  const stats = await getAdminStats();

  const cards = [
    {
      title: "Users",
      value: stats.users,
      icon: <Users size={34} />,
      color: "bg-blue-600",
    },
    {
      title: "Subjects",
      value: stats.subjects,
      icon: <FolderTree size={34} />,
      color: "bg-purple-600",
    },
    {
      title: "Notes",
      value: stats.notes,
      icon: <BookOpen size={34} />,
      color: "bg-green-600",
    },
    {
      title: "Quizzes",
      value: stats.quizzes,
      icon: <FileQuestion size={34} />,
      color: "bg-yellow-500",
    },
    {
      title: "Videos",
      value: stats.videos,
      icon: <Video size={34} />,
      color: "bg-red-500",
    },
    {
      title: "Downloads",
      value: stats.downloads,
      icon: <Download size={34} />,
      color: "bg-cyan-600",
    },
  ];

  const totalResources =
    stats.subjects +
    stats.notes +
    stats.quizzes +
    stats.videos +
    stats.downloads;

  return (
    <main className="space-y-10">
      {/* HEADER */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
              <Activity size={25} />
            </div>

            <div>
              <h1 className="text-4xl font-black text-slate-900 md:text-5xl">
                Dashboard
              </h1>

              <p className="mt-1 text-slate-500">
                Live website statistics from Supabase.
              </p>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-black text-green-700 md:self-auto">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          Live data
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`${card.color} flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-sm`}
            >
              {card.icon}
            </div>

            <h2 className="mt-5 text-sm font-bold uppercase tracking-wide text-gray-500">
              {card.title}
            </h2>

            <p className="mt-2 text-4xl font-black text-slate-900">
              {card.value.toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>

      {/* OVERVIEW */}
      <div className="grid gap-8 lg:grid-cols-2">
        <section className="rounded-3xl bg-white p-8 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Activity size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Platform Overview
              </h2>

              <p className="mt-1 text-sm font-semibold text-slate-400">
                Current content counts
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
              <span className="font-bold text-slate-600">
                Total learning resources
              </span>

              <span className="text-xl font-black text-blue-700">
                {totalResources.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
              <span className="font-bold text-slate-600">
                Notes + quizzes
              </span>

              <span className="text-xl font-black text-green-600">
                {(
                  stats.notes + stats.quizzes
                ).toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
              <span className="font-bold text-slate-600">
                Videos + downloads
              </span>

              <span className="text-xl font-black text-cyan-600">
                {(
                  stats.videos + stats.downloads
                ).toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </section>

        {/* SYSTEM STATUS */}
        <section className="rounded-3xl bg-white p-8 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <RefreshCw size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                System Status
              </h2>

              <p className="mt-1 text-sm font-semibold text-slate-400">
                Dashboard data sources
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {[
              "Users database",
              "Subjects database",
              "Notes database",
              "Quiz database",
              "Video database",
              "Downloads database",
            ].map((label) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl border border-slate-100 px-5 py-4"
              >
                <span className="font-bold text-slate-700">
                  {label}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-black text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Connected
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
