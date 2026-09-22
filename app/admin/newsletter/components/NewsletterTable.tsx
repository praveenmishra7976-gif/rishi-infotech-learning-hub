"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Trash2,
  Mail,
  CalendarDays,
  RefreshCw,
} from "lucide-react";

type Subscriber = {
  id: string;
  email: string;
  subscribed_at: string;
};

export default function NewsletterTable({
  subscribers,
}: {
  subscribers: Subscriber[];
}) {
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState(subscribers);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filteredSubscribers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return rows;
    }

    return rows.filter((subscriber) =>
      subscriber.email.toLowerCase().includes(query)
    );
  }, [rows, search]);

  async function deleteSubscriber(id: string) {
    const subscriber = rows.find((item) => item.id === id);

    if (!subscriber) {
      return;
    }

    const confirmed = window.confirm(
      `Remove ${subscriber.email} from the newsletter?`
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(id);

    try {
      const response = await fetch("/api/admin/newsletter", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        window.alert(
          result.message || "Unable to remove subscriber."
        );
        return;
      }

      setRows((current) =>
        current.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Delete subscriber error:", error);
      window.alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* SEARCH + COUNT */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-xl">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search subscriber email..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-sm border border-slate-200">
          <Mail size={18} className="text-cyan-600" />

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Subscribers
            </p>

            <p className="text-lg font-black text-slate-900">
              {rows.length}
            </p>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 text-left text-sm font-black">
                  Email
                </th>

                <th className="p-4 text-left text-sm font-black">
                  Subscribed
                </th>

                <th className="p-4 text-center text-sm font-black">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredSubscribers.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="p-12 text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                      <RefreshCw
                        size={24}
                        className="text-slate-400"
                      />
                    </div>

                    <p className="mt-4 font-black text-slate-700">
                      No subscribers found
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Try a different search or wait for new
                      newsletter signups.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredSubscribers.map((subscriber) => (
                  <tr
                    key={subscriber.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                          <Mail size={18} />
                        </div>

                        <span className="font-bold text-slate-800">
                          {subscriber.email}
                        </span>
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                        <CalendarDays
                          size={16}
                          className="text-slate-400"
                        />

                        {subscriber.subscribed_at
                          ? new Date(
                              subscriber.subscribed_at
                            ).toLocaleString()
                          : "-"}
                      </div>
                    </td>

                    <td className="p-4 text-center">
                      <button
                        type="button"
                        onClick={() =>
                          deleteSubscriber(subscriber.id)
                        }
                        disabled={
                          deletingId === subscriber.id
                        }
                        className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-black text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <Trash2 size={16} />
                        {deletingId === subscriber.id
                          ? "Removing..."
                          : "Remove"}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
