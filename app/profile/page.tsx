"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";
import ProfileForm from "@/app/components/profile/ProfileForm";
import ProfileStats from "@/app/components/profile/ProfileStats";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) {
      setProfile(data);
    } else {
      setProfile({
        id: user.id,
        email: user.email,
        full_name: "",
        phone: "",
        dob: "",
        class: "",
        school: "",
        city: "",
        country: "",
        bio: "",
        avatar_url: "",
        level: 1,
        xp: 0,
        streak: 0,
        completed: 0,
      });
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Loading Profile...
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-10 text-white shadow-xl">

        <h1 className="text-5xl font-bold">
          My Profile
        </h1>

        <p className="mt-3 text-blue-100">
          Manage your learning profile.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        <div className="lg:col-span-1">
          <ProfileStats profile={profile} />
        </div>

        <div className="lg:col-span-2">
          <ProfileForm profile={profile} />
        </div>

      </div>

    </main>
  );
}