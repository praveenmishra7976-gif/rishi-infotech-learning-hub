"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/users/createUser";

export default function AddUserModal() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function resetForm() {
    setName("");
    setEmail("");
    setRole("student");
    setPassword("");
    setConfirmPassword("");
    setError("");
  }

  function closeModal() {
    if (pending) return;

    setOpen(false);
    resetForm();
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName) {
      setError("Please enter the user's full name.");
      return;
    }

    if (!cleanEmail) {
      setError("Please enter the user's email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    startTransition(async () => {
      try {
        await createUser({
          full_name: cleanName,
          email: cleanEmail,
          role,
          password,
        });

        setOpen(false);
        resetForm();
        router.refresh();
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to create the user."
        );
      }
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setError("");
          setOpen(true);
        }}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
      >
        <span className="text-xl leading-none">+</span>
        Add User
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-slate-900">
                Add User
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Create a real login account and matching profile.
              </p>
            </div>

            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Full Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  autoComplete="name"
                  disabled={pending}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  autoComplete="email"
                  disabled={pending}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Role
                </label>

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  disabled={pending}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-50"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Initial Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  autoComplete="new-password"
                  disabled={pending}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-50"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Give this password securely to the new user.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter password again"
                  autoComplete="new-password"
                  disabled={pending}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-50"
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-6 text-red-700"
                >
                  {error}
                </div>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={pending}
                  className="rounded-2xl bg-slate-100 px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={pending}
                  className="rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {pending ? "Creating..." : "Create User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
