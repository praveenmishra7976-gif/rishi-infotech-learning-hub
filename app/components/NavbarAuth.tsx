"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

export default function NavbarAuth() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!mounted) return;

      setUser(user);
      setLoading(false);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return;

        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function logout() {
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error);
      setLoading(false);
      return;
    }

    setUser(null);

    router.replace("/");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="w-24 h-10 rounded-xl bg-gray-200 animate-pulse" />
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col md:flex-row gap-3">
        <Link
          href="/login"
          className="px-5 py-2.5 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition text-center"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition text-center"
        >
          Create Account
        </Link>
      </div>
    );
  }

  const name =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email ||
    "User";

  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">

      <Link href="/dashboard">
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xl">
            {initial}
          </div>

          <div className="hidden lg:block">
            <p className="font-bold text-gray-900">
              {name}
            </p>

            <p className="text-sm text-gray-500">
              Dashboard
            </p>
          </div>

        </div>
      </Link>

      <button
        type="button"
        onClick={logout}
        className="bg-red-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-red-700 transition"
      >
        Logout
      </button>

    </div>
  );
}
