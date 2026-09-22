import {
  Users,
  UserCheck,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import AddUserModal from "./components/AddUserModal";
import UserManagementTable from "./components/UserManagementTable";
import { getUsers } from "@/lib/users/getUsers";

function normalizeRole(role: string | null | undefined) {
  return (role || "").trim().toLowerCase();
}

export default async function UsersPage() {
  const users = await getUsers();

  const totalUsers = users.length;

  const students = users.filter(
    (user) => normalizeRole(user.role) === "student"
  ).length;

  const teachers = users.filter(
    (user) => normalizeRole(user.role) === "teacher"
  ).length;

  const administrators = users.filter((user) => {
    const role = normalizeRole(user.role);
    return role === "admin" || role === "super_admin";
  }).length;

  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      description: "All registered profiles",
      icon: Users,
      iconClass: "bg-blue-100 text-blue-700",
      valueClass: "text-blue-700",
    },
    {
      title: "Students",
      value: students,
      description: "Student accounts",
      icon: GraduationCap,
      iconClass: "bg-purple-100 text-purple-700",
      valueClass: "text-purple-700",
    },
    {
      title: "Teachers",
      value: teachers,
      description: "Teacher accounts",
      icon: UserCheck,
      iconClass: "bg-emerald-100 text-emerald-700",
      valueClass: "text-emerald-700",
    },
    {
      title: "Administrators",
      value: administrators,
      description: "Admin + super admin",
      icon: ShieldCheck,
      iconClass: "bg-orange-100 text-orange-700",
      valueClass: "text-orange-700",
    },
  ];

  return (
    <main className="space-y-8">
      <section className="flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-lg md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Users size={26} />
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Users
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage all registered users and their roles.
              </p>
            </div>
          </div>
        </div>

        <AddUserModal />
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {item.title}
                  </p>

                  <p
                    className={`mt-3 text-4xl font-black ${item.valueClass}`}
                  >
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconClass}`}
                >
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <UserManagementTable users={users} />
    </main>
  );
}
