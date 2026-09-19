"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import {
  User,
  Mail,
  Calendar,
  Save,
} from "lucide-react";

export default function ProfilePage() {

  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {

    loadProfile();

  }, []);

  async function loadProfile() {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {

      setEmail(user.email || "");

      setName(
        user.user_metadata?.full_name || ""
      );

    }

    setLoading(false);

  }

  async function saveProfile() {

    const { error } =
      await supabase.auth.updateUser({

        data: {

          full_name: name,

        },

      });

    if (error) {

      alert(error.message);

      return;

    }

    alert("Profile Updated Successfully");

  }

  if (loading) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        Loading...

      </main>

    );

  }

  return (

    <main className="max-w-3xl mx-auto py-14 px-6">

      <div className="bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-black mb-8">

          My Profile

        </h1>

        <div className="space-y-8">

          <div>

            <label className="font-bold flex items-center gap-2">

              <User size={18}/>

              Full Name

            </label>

            <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="border rounded-xl p-4 mt-3 w-full"
            />

          </div>

          <div>

            <label className="font-bold flex items-center gap-2">

              <Mail size={18}/>

              Email

            </label>

            <input
              value={email}
              disabled
              className="border rounded-xl p-4 mt-3 w-full bg-gray-100"
            />

          </div>

          <div>

            <label className="font-bold flex items-center gap-2">

              <Calendar size={18}/>

              Account Status

            </label>

            <input
              value="Active"
              disabled
              className="border rounded-xl p-4 mt-3 w-full bg-gray-100"
            />

          </div>

          <button
            onClick={saveProfile}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex gap-2"
          >

            <Save/>

            Save Changes

          </button>

        </div>

      </div>

    </main>

  );

}