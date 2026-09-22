"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Eye,
  Mail,
  Search,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";

interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  role: string;
  avatar_url: string | null;
  status: string;
  email_verified: boolean;
  created_at: string;
}

interface Props {
  users: UserProfile[];
}

function normalizeRole(role: string | null | undefined) {
  return (role || "").trim().toLowerCase();
}

function formatRole(role: string | null | undefined) {
  const normalized = normalizeRole(role);

  switch (normalized) {
    case "super_admin":
      return "Super Admin";
    case "admin":
      return "Admin";
    case "teacher":
      return "Teacher";
    case "student":
      return "Student";
    default:
      return role || "Unknown";
  }
}

function roleBadgeClass(role: string | null | undefined) {
  switch (normalizeRole(role)) {
    case "super_admin":
      return "bg-red-100 text-red-700 border-red-200";
    case "admin":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "teacher":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "student":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}

function statusBadgeClass(status: string | null | undefined) {
  switch ((status || "").toLowerCase()) {
    case "active":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "suspended":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "blocked":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}

function formatStatus(status: string | null | undefined) {
  const value = (status || "unknown").replace(/_/g, " ");

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatDate(value: string | null | undefined) {
  if (!value) {
    return "—";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function UserManagementTable({ users }: Props) {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return users.filter((user) => {
      const matchesSearch =
        !query ||
        (user.full_name || "").toLowerCase().includes(query) ||
        (user.email || "").toLowerCase().includes(query) ||
        (user.id || "").toLowerCase().includes(query);

      const matchesRole =
        roleFilter === "all" ||
        normalizeRole(user.role) === roleFilter;

      return matchesSearch && matchesRole;
    });
  }, [users, search, roleFilter]);

  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-lg">
      <div className="border-b border-slate-200 p-5 md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900">
              Registered Users
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Showing {filteredUsers.length} of {users.length} users.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 md:flex-row lg:w-auto">
            <div className="relative min-w-0 flex-1 md:w-96">
              <Search
                size={19}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, email or ID..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <select
              value={roleFilter}
              onChange={(event) => setRoleFilter(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            >
              <option value="all">All Roles</option>
              <option value="student">Students</option>
              <option value="teacher">Teachers</option>
              <option value="admin">Admins</option>
              <option value="super_admin">Super Admins</option>
            </select>
          </div>
        </div>
      </div>

      {filteredUsers.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-400">
            <UserRound size={30} />
          </div>

          <h3 className="mt-5 text-xl font-black text-slate-900">
            No users found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Try changing the search text or role filter.
          </p>
        </div>
      ) : (
        <>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1100px]">
              <thead className="bg-slate-900 text-left text-xs uppercase tracking-wide text-white">
                <tr>
                  <th className="px-5 py-4">User</th>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Role</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Verification</th>
                  <th className="px-5 py-4">Created</th>
                  <th className="px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-3">
                        {user.avatar_url ? (
                          <img
                            src={user.avatar_url}
                            alt={user.full_name || "User"}
                            className="h-11 w-11 rounded-2xl object-cover"
                          />
                        ) : (
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                            <UserRound size={20} />
                          </div>
                        )}

                        <div className="min-w-0">
                          <p className="truncate font-bold text-slate-900">
                            {user.full_name || "Unnamed User"}
                          </p>

                          <p
                            title={user.id}
                            className="max-w-[220px] truncate text-xs text-slate-400"
                          >
                            {user.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Mail size={16} className="text-slate-400" />
                        <span className="max-w-[250px] truncate">
                          {user.email || "—"}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${roleBadgeClass(
                          user.role
                        )}`}
                      >
                        <ShieldCheck size={14} />
                        {formatRole(user.role)}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-bold ${statusBadgeClass(
                          user.status
                        )}`}
                      >
                        {formatStatus(user.status)}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      {user.email_verified ? (
                        <span className="text-sm font-semibold text-emerald-600">
                          Verified
                        </span>
                      ) : (
                        <span className="text-sm font-semibold text-slate-400">
                          Not verified
                        </span>
                      )}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-sm text-slate-500">
                      {formatDate(user.created_at)}
                    </td>

                    <td className="px-5 py-5">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/users/${user.id}`}
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Eye size={16} />
                          View
                        </Link>

                        <EditUserModal
                          id={user.id}
                          name={user.full_name || ""}
                          role={normalizeRole(user.role)}
                        />

                        <DeleteUserModal
                          id={user.id}
                          name={user.full_name || user.email || "this user"}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4 p-4 md:hidden">
            {filteredUsers.map((user) => (
              <article
                key={user.id}
                className="rounded-2xl border border-slate-200 p-4"
              >
                <div className="flex items-start gap-3">
                  {user.avatar_url ? (
                    <img
                      src={user.avatar_url}
                      alt={user.full_name || "User"}
                      className="h-12 w-12 rounded-2xl object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <UserRound size={20} />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-bold text-slate-900">
                      {user.full_name || "Unnamed User"}
                    </h3>

                    <p className="mt-1 truncate text-sm text-slate-500">
                      {user.email || "—"}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-bold ${roleBadgeClass(
                          user.role
                        )}`}
                      >
                        {formatRole(user.role)}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-bold ${statusBadgeClass(
                          user.status
                        )}`}
                      >
                        {formatStatus(user.status)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link
                    href={`/admin/users/${user.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700"
                  >
                    <Eye size={16} />
                    View
                  </Link>

                  <EditUserModal
                    id={user.id}
                    name={user.full_name || ""}
                    role={normalizeRole(user.role)}
                  />

                  <DeleteUserModal
                    id={user.id}
                    name={user.full_name || user.email || "this user"}
                  />

                  <div className="flex items-center justify-center rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-500">
                    {formatDate(user.created_at)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
