import { redirect } from "next/navigation";
import {
  Users,
  BookOpen,
  FileQuestion,
  Video,
  Download,
  GraduationCap,
  Mail,
  Activity,
  TrendingUp,
  LogIn,
  CreditCard,
  BarChart3,
} from "lucide-react";

import { getAdminUser } from "@/app/admin/lib/auth";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type CountResult = {
  count: number;
  error?: unknown;
};

async function getCount(
  table: string,
  filters: Array<{
    type: "gte" | "lt" | "eq";
    column: string;
    value: string;
  }> = []
): Promise<number> {
  let query = adminSupabase
    .from(table)
    .select("*", {
      count: "exact",
      head: true,
    });

  for (const filter of filters) {
    if (filter.type === "gte") {
      query = query.gte(
        filter.column,
        filter.value
      );
    }

    if (filter.type === "lt") {
      query = query.lt(
        filter.column,
        filter.value
      );
    }

    if (filter.type === "eq") {
      query = query.eq(
        filter.column,
        filter.value
      );
    }
  }

  const { count, error } = await query;

  if (error) {
    console.error(
      `Analytics count error for ${table}:`,
      error
    );

    return 0;
  }

  return count ?? 0;
}

function getMonthStarts() {
  const months: Date[] = [];

  for (let index = 5; index >= 0; index--) {
    const date = new Date();

    date.setUTCHours(0, 0, 0, 0);
    date.setUTCDate(1);
    date.setUTCMonth(
      date.getUTCMonth() - index
    );

    months.push(date);
  }

  return months;
}

function getNextMonth(date: Date) {
  const next = new Date(date);

  next.setUTCMonth(next.getUTCMonth() + 1);

  return next;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default async function AnalyticsPage() {
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

  const now = new Date();

  const sevenDaysAgo = new Date(
    now.getTime() -
      7 * 24 * 60 * 60 * 1000
  );

  const fourteenDaysAgo = new Date(
    now.getTime() -
      14 * 24 * 60 * 60 * 1000
  );

  const thirtyDaysAgo = new Date(
    now.getTime() -
      30 * 24 * 60 * 60 * 1000
  );

  const sixMonthStart = new Date();

  sixMonthStart.setUTCHours(0, 0, 0, 0);
  sixMonthStart.setUTCDate(1);
  sixMonthStart.setUTCMonth(
    sixMonthStart.getUTCMonth() - 5
  );

  const [
    users,
    courses,
    notes,
    quizzes,
    videos,
    downloads,
    quizAttempts30d,
    newsletterSubscribers,
    newUsers7d,
    previousUsers7d,
    logins7d,
    paidPayments,
  ] = await Promise.all([
    getCount("profiles"),

    getCount("courses"),

    getCount("notes"),

    getCount("quizzes"),

    getCount("videos"),

    getCount("downloads"),

    getCount("quiz_attempts", [
      {
        type: "gte",
        column: "created_at",
        value: thirtyDaysAgo.toISOString(),
      },
    ]),

    getCount("newsletter_subscribers"),

    getCount("profiles", [
      {
        type: "gte",
        column: "created_at",
        value: sevenDaysAgo.toISOString(),
      },
    ]),

    getCount("profiles", [
      {
        type: "gte",
        column: "created_at",
        value: fourteenDaysAgo.toISOString(),
      },
      {
        type: "lt",
        column: "created_at",
        value: sevenDaysAgo.toISOString(),
      },
    ]),

    getCount("login_history", [
      {
        type: "gte",
        column: "login_time",
        value: sevenDaysAgo.toISOString(),
      },
    ]),

    getCount("payments", [
      {
        type: "eq",
        column: "status",
        value: "paid",
      },
    ]),
  ]);

  const [
    { data: profileDates, error: profileDatesError },
    { data: noteDates, error: noteDatesError },
  ] = await Promise.all([
    adminSupabase
      .from("profiles")
      .select("created_at")
      .gte(
        "created_at",
        sixMonthStart.toISOString()
      ),

    adminSupabase
      .from("notes")
      .select("created_at")
      .gte(
        "created_at",
        thirtyDaysAgo.toISOString()
      ),
  ]);

  if (profileDatesError) {
    console.error(
      "Analytics profile history error:",
      profileDatesError
    );
  }

  if (noteDatesError) {
    console.error(
      "Analytics note history error:",
      noteDatesError
    );
  }

  const { data: paidPaymentData, error: paidPaymentError } =
    await adminSupabase
      .from("payments")
      .select("amount")
      .eq("status", "paid");

  if (paidPaymentError) {
    console.error(
      "Analytics payment history error:",
      paidPaymentError
    );
  }

  const revenue =
    paidPaymentData?.reduce(
      (sum, item) =>
        sum + Number(item.amount || 0),
      0
    ) ?? 0;

  let weeklyGrowth: number | null = null;

  if (previousUsers7d === 0) {
    weeklyGrowth =
      newUsers7d > 0 ? null : 0;
  } else {
    weeklyGrowth = Math.round(
      ((newUsers7d - previousUsers7d) /
        previousUsers7d) *
        100
    );
  }

  const monthStarts = getMonthStarts();

  const monthlyUsers = monthStarts.map(
    (monthStart) => {
      const monthEnd = getNextMonth(
        monthStart
      );

      const count =
        profileDates?.filter((item) => {
          const createdAt = new Date(
            item.created_at
          );

          return (
            createdAt >= monthStart &&
            createdAt < monthEnd
          );
        }).length ?? 0;

      return {
        label: monthStart.toLocaleDateString(
          "en-IN",
          {
            month: "short",
            timeZone: "UTC",
          }
        ),
        year:
          monthStart.getUTCFullYear(),
        users: count,
      };
    }
  );

  const maxMonthlyUsers = Math.max(
    ...monthlyUsers.map(
      (item) => item.users
    ),
    1
  );

  const notesLast30Days =
    noteDates?.length ?? 0;

  const cards = [
    {
      title: "Registered Users",
      value: users,
      icon: <Users size={30} />,
      color: "bg-blue-600",
    },
    {
      title: "Courses",
      value: courses,
      icon: <GraduationCap size={30} />,
      color: "bg-indigo-600",
    },
    {
      title: "Study Notes",
      value: notes,
      icon: <BookOpen size={30} />,
      color: "bg-green-600",
    },
    {
      title: "Quizzes",
      value: quizzes,
      icon: <FileQuestion size={30} />,
      color: "bg-yellow-500",
    },
    {
      title: "Videos",
      value: videos,
      icon: <Video size={30} />,
      color: "bg-red-500",
    },
    {
      title: "Downloads",
      value: downloads,
      icon: <Download size={30} />,
      color: "bg-cyan-600",
    },
    {
      title: "Quiz Attempts · 30 Days",
      value: quizAttempts30d,
      icon: <Activity size={30} />,
      color: "bg-purple-600",
    },
    {
      title: "Newsletter Subscribers",
      value: newsletterSubscribers,
      icon: <Mail size={30} />,
      color: "bg-pink-600",
    },
  ];

  return (
    <main className="space-y-10">
      {/* HEADER */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <BarChart3 size={28} />
            </div>

            <div>
              <h1 className="text-4xl font-black text-slate-900 md:text-5xl">
                Analytics Dashboard
              </h1>

              <p className="mt-1 text-slate-500">
                Real-time statistics from your
                Supabase data.
              </p>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-full bg-green-50 px-4 py-2.5 text-sm font-black text-green-700 lg:self-auto">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          Live database metrics
        </div>
      </div>

      {/* LIVE CARDS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`${card.color} flex h-14 w-14 items-center justify-center rounded-2xl text-white`}
            >
              {card.icon}
            </div>

            <p className="mt-5 text-sm font-bold text-slate-500">
              {card.title}
            </p>

            <p className="mt-2 text-4xl font-black text-slate-900">
              {card.value.toLocaleString(
                "en-IN"
              )}
            </p>
          </div>
        ))}
      </div>

      {/* ACTIVITY SUMMARY */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <TrendingUp
              size={22}
              className="text-green-600"
            />

            <span className="font-black text-slate-800">
              New Users · 7 Days
            </span>
          </div>

          <p className="mt-5 text-3xl font-black text-slate-900">
            {newUsers7d}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <TrendingUp
              size={22}
              className="text-blue-600"
            />

            <span className="font-black text-slate-800">
              Weekly Growth
            </span>
          </div>

          <p className="mt-5 text-3xl font-black text-slate-900">
            {weeklyGrowth === null
              ? "New"
              : `${weeklyGrowth > 0 ? "+" : ""}${weeklyGrowth}%`}
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-400">
            Compared with the previous 7 days
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <LogIn
              size={22}
              className="text-cyan-600"
            />

            <span className="font-black text-slate-800">
              Logins · 7 Days
            </span>
          </div>

          <p className="mt-5 text-3xl font-black text-slate-900">
            {logins7d.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <CreditCard
              size={22}
              className="text-orange-600"
            />

            <span className="font-black text-slate-800">
              Paid Revenue
            </span>
          </div>

          <p className="mt-5 text-3xl font-black text-slate-900">
            {formatCurrency(revenue)}
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-400">
            {paidPayments} paid payments
          </p>
        </div>
      </div>

      {/* USER GROWTH */}
      <section className="rounded-3xl bg-white p-6 shadow-xl md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              User Growth
            </h2>

            <p className="mt-1 text-sm font-semibold text-slate-400">
              New registered users over the last
              six months
            </p>
          </div>

          <div className="text-sm font-bold text-blue-600">
            Live profile data
          </div>
        </div>

        <div className="mt-10 flex h-72 items-end gap-3 border-b border-slate-200 px-2 pb-2 sm:gap-5">
          {monthlyUsers.map((item) => {
            const height =
              item.users === 0
                ? 3
                : Math.max(
                    7,
                    Math.round(
                      (item.users /
                        maxMonthlyUsers) *
                        100
                    )
                  );

            return (
              <div
                key={`${item.year}-${item.label}`}
                className="flex h-full flex-1 flex-col justify-end"
              >
                <div className="mb-2 text-center text-xs font-black text-slate-600">
                  {item.users}
                </div>

                <div className="flex h-[84%] items-end justify-center">
                  <div
                    className="w-full max-w-16 rounded-t-2xl bg-blue-600 transition-all"
                    style={{
                      height: `${height}%`,
                    }}
                    title={`${item.label} ${item.year}: ${item.users} users`}
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

      {/* CURRENT ACTIVITY */}
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl bg-white p-7 shadow-lg">
          <div className="flex items-center gap-3">
            <Activity
              size={24}
              className="text-blue-600"
            />

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Current Activity
              </h2>

              <p className="text-sm font-semibold text-slate-400">
                Measured from available database activity
              </p>
            </div>
          </div>

          <div className="mt-7 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
              <span className="font-bold text-slate-600">
                New users · 7 days
              </span>

              <span className="font-black text-blue-700">
                {newUsers7d}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
              <span className="font-bold text-slate-600">
                Notes added · 30 days
              </span>

              <span className="font-black text-green-700">
                {notesLast30Days}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
              <span className="font-bold text-slate-600">
                Quiz attempts · 30 days
              </span>

              <span className="font-black text-purple-700">
                {quizAttempts30d}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
              <span className="font-bold text-slate-600">
                Newsletter subscribers
              </span>

              <span className="font-black text-pink-700">
                {newsletterSubscribers}
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-7 shadow-lg">
          <div className="flex items-center gap-3">
            <CreditCard
              size={24}
              className="text-orange-600"
            />

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Payments
              </h2>

              <p className="text-sm font-semibold text-slate-400">
                Values calculated from paid payment records
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-3xl bg-orange-50 p-7">
            <p className="text-sm font-bold text-orange-700">
              Total Paid Revenue
            </p>

            <p className="mt-2 text-4xl font-black text-slate-900">
              {formatCurrency(revenue)}
            </p>

            <p className="mt-3 text-sm font-semibold text-slate-500">
              {paidPayments.toLocaleString(
                "en-IN"
              )} paid payment
              {paidPayments === 1 ? "" : "s"} recorded.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-black uppercase tracking-wider text-slate-400">
              Visitor analytics
            </p>

            <p className="mt-2 font-bold text-slate-700">
              Not shown because the current project
              does not have a visitor-tracking table.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
