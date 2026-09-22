import { redirect } from "next/navigation";
import { Mail, ShieldCheck, Users } from "lucide-react";

import { getAdminUser } from "@/app/admin/lib/auth";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";
import NewsletterTable from "./components/NewsletterTable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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

  const subscribers = data ?? [];

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
              Manage people who subscribed to your website
              updates.
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
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

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-500">
                Protected Access
              </p>

              <p className="mt-2 text-lg font-black text-green-600">
                Admin Only
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <ShieldCheck size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <NewsletterTable subscribers={subscribers} />
    </main>
  );
}
