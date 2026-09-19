"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth/auth";

export default function LogoutPage() {

  const router = useRouter();

  useEffect(() => {

    async function logout() {

      await signOut();

      router.push("/");

    }

    logout();

  }, []);

  return (

    <main className="min-h-screen flex items-center justify-center">

      <h1 className="text-3xl font-bold">

        Logging out...

      </h1>

    </main>

  );

}