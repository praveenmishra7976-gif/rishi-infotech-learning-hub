"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

type Props = {
  title: string;
  url: string;
};

export default function BookmarkButton({
  title,
  url,
}: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    checkBookmark();
  }, []);

  async function checkBookmark() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", user.id)
      .eq("url", url)
      .maybeSingle();

    setSaved(!!data);
  }

  async function toggleBookmark() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    if (!saved) {
      const { error } = await supabase
        .from("bookmarks")
        .insert({
          user_id: user.id,
          title,
          url,
        });

      if (!error) setSaved(true);
    } else {
      const { error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("user_id", user.id)
        .eq("url", url);

      if (!error) setSaved(false);
    }
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`w-full py-3 rounded-xl text-white transition ${
        saved
          ? "bg-green-600"
          : "bg-yellow-500"
      }`}
    >
      {saved ? "✅ Saved" : "🔖 Bookmark"}
    </button>
  );
}