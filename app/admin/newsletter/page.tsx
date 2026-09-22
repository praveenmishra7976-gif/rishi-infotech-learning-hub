import { redirect } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  Mail,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import { getAdminUser } from "@/app/admin/lib/auth";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";
import NewsletterTable from "./components/NewsletterTable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Subscriber = {
  id: string;
  email: string;
  subscribed_at: string;
};

function getValidDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export default async function NewsletterAdminPage() {
  const user = await getAdminUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await adminSupabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    redirect("/unauthorized");
  }

  const { data, error } = await adminSupabase
    .from("newsletter_subscribers")
    .select("id,email,subscribed_at")
    .order("subscribed_at", { ascending: false });

  if (error) {
    console.error(
      "Get newsletter subscribers error:",
      error
    );
  }

  const subscribers = (data ?? []) as Subscriber[];

  const now = Date.now();
  const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
  const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;
  const sixtyDaysAgo = now - 60 * 24 * 60 * 60 * 1000;

  const last7Days = subscribers.filter((subscriber) => {
    const date = getValidDate(subscriber.subscribed_at);
    return date ? date.getTime() >= sevenDaysAgo : false;
  }).length;

  const last30Days = subscribers.filter((subscriber) => {
    const date = getValidDate(subscriber.subscribed_at);
    return date ? date.getTime() >= thirtyDaysAgo : false;
  }).length;

  const previous30Days = subscribers.filter((subscriber) => {
    const date = getValidDate(subscriber.subscribed_at);

    if (!date) {
      return false;
    }

    const timestamp = date.getTime();

    return (
      timestamp >= sixtyDaysAgo &&
      timestamp < thirtyDaysAgo
    );
  }).length;

  const thirtyDayChange =
    previous30Days === 0
      ? null
      : Math.round(
          ((last30Days - previous30Days) / previous30Days) *
            100
        );

  const latestSubscriber = subscribers[0] ?? null;

  const months = Array.from({ length: 6 }, (_, index) => {
    const date = new Date();

    date.setUTCDate(1);
    date.setUTCMonth(
      date.getUTCMonth() - (5 - index)
    );

    return date;
  });

  const monthlyStats = months.map((month) => {
    const year = month.getUTCFullYear();
    const monthNumber = month.getUTCMonth();

    const count = subscribers.filter((subscriber) => {
      const date = getValidDate(subscriber.subscribed_at);

      if (!date) {
        return false;
      }

      return (
        date.getUTCFullYear() === year &&
        date.getUTCMonth() === monthNumber
      );
    }).length;

    return {
      label: month.toLocaleDateString("en-IN", {
        month: "short",
        timeZone: "UTC",
      }),
      year,
      count,
    };
  });

  const maxMonthlyCount = Math.max(
    ...monthlyStats.map((item) => item.count),
    1
  );

  return (
    <main className="space-y-8">
      {/* HEADER */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
            <Mail size={28} />
          </div>

          <div>
            <h1 className="text-4xl font-black text-blue-700 md:text-5xl">
              Newsletter Subscribers
            </h1>

            <p className="mt-1 text-slate-500">
              Manage subscribers and monitor newsletter
              growth.
            </p>
          </div>
        </div>
      </div>

      {/* LIVE STATS */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {/* TOTAL */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-slate-500">
                Total Subscribers
              </p>

              <p className="mt-2 text-4xl font-black text-slate-900">
                {subscribers.length}
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* LAST 7 DAYS */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-slate-500">
                New · Last 7 Days
              </p>

              <p className="mt-2 text-4xl font-black text-slate-900">
                {last7Days}
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <CalendarDays size={24} />
            </div>
          </div>
        </div>

        {/* LAST 30 DAYS */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-slate-500">
                New · Last 30 Days
              </p>

              <p className="mt-2 text-4xl font-black text-slate-900">
                {last30Days}
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>

        {/* CHANGE */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-slate-500">
                30-Day Change
              </p>

              <p className="mt-2 text-3xl font-black text-slate-900">
                {thirtyDayChange === null
                  ? "—"
                  : `${thirtyDayChange > 0 ? "+" : ""}${thirtyDayChange}%`}
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-400">
                Compared with previous 30 days
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
              <BarChart3 size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* GROWTH + INFO */}
      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* SIX MONTH CHART */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Subscriber Growth
              </h2>

              <p className="mt-1 text-sm font-semibold text-slate-400">
                New newsletter subscribers by month
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-cyan-600">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
              Live Supabase data
            </div>
          </div>

          <div className="mt-8 flex h-64 items-end gap-3 border-b border-slate-200 px-2 pb-2 sm:gap-5">
            {monthlyStats.map((item) => {
              const height =
                item.count === 0
                  ? 4
                  : Math.max(
                      8,
                      Math.round(
                        (item.count / maxMonthlyCount) *
                          100
                      )
                    );

              return (
                <div
                  key={`${item.year}-${item.label}`}
                  className="flex h-full flex-1 flex-col justify-end"
                >
                  <div className="mb-2 text-center text-xs font-black text-slate-600">
                    {item.count}
                  </div>

                  <div className="flex h-[85%] items-end justify-center">
                    <div
                      className="w-full max-w-14 rounded-t-xl bg-cyan-500 transition-all"
                      style={{
                        height: `${height}%`,
                      }}
                      title={`${item.label} ${item.year}: ${item.count} subscribers`}
                    />
                  </div>

                  <div className="mt-3 text-center text-xs font-bold text-slate-400">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* STATUS CARD */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Newsletter Status
              </h2>

              <p className="text-sm font-semibold text-slate-400">
                Current subscriber system
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                Database
              </p>

              <p className="mt-1 font-black text-green-600">
                Connected
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                Duplicate protection
              </p>

              <p className="mt-1 font-black text-green-600">
                Enabled
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                Subscriber data
              </p>

              <p className="mt-1 font-black text-blue-700">
                Admin only
              </p>
            </div>

            {latestSubscriber && (
              <div className="rounded-2xl bg-cyan-50 p-5">
                <p className="text-xs font-black uppercase tracking-wider text-cyan-700">
                  Latest subscriber
                </p>

                <p className="mt-2 break-all font-black text-slate-900">
                  {latestSubscriber.email}
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  {getValidDate(
                    latestSubscriber.subscribed_at
                  )
                    ? new Date(
                        latestSubscriber.subscribed_at
                      ).toLocaleString("en-IN")
                    : "-"}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* TABLE */}
      <NewsletterTable subscribers={subscribers} />
    </main>
  );
}
