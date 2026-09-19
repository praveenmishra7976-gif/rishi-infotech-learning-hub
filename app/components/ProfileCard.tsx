"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function ProfileCard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    loadUser();
  }, []);

  if (!user) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <div className="flex items-center gap-6">

        <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
          {user.email?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            {user.email}
          </h2>

          <p className="text-gray-500">
            Welcome to Rishi Infotech Learning Hub
          </p>
        </div>

      </div>
    </div>
  );
}