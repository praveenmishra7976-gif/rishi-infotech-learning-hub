"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

type Props = {
  profile: any;
};

export default function ProfileForm({ profile }: Props) {

  const [form, setForm] = useState(profile);

  async function saveProfile() {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        ...form,
        updated_at: new Date(),
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Profile Saved Successfully");
  }

  function change(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-blue-700 mb-8">

        Edit Profile

      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          name="full_name"
          value={form.full_name}
          onChange={change}
          placeholder="Full Name"
          className="border rounded-xl p-4"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={change}
          placeholder="Phone Number"
          className="border rounded-xl p-4"
        />

        <input
          name="class"
          value={form.class}
          onChange={change}
          placeholder="Class"
          className="border rounded-xl p-4"
        />

        <input
          name="school"
          value={form.school}
          onChange={change}
          placeholder="School / College"
          className="border rounded-xl p-4"
        />

        <input
          name="city"
          value={form.city}
          onChange={change}
          placeholder="City"
          className="border rounded-xl p-4"
        />

        <input
          name="country"
          value={form.country}
          onChange={change}
          placeholder="Country"
          className="border rounded-xl p-4"
        />

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={change}
          className="border rounded-xl p-4"
        />

      </div>

      <textarea
        name="bio"
        value={form.bio}
        onChange={change}
        placeholder="Write something about yourself..."
        rows={5}
        className="border rounded-xl p-4 w-full mt-6"
      />

      <button
        onClick={saveProfile}
        className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold"
      >
        Save Profile
      </button>

    </div>
  );
}