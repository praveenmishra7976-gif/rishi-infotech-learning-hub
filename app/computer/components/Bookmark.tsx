"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

interface BookmarkProps {
  slug: string;
}

export default function Bookmark({
  slug,
}: BookmarkProps) {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkBookmark();
  }, [slug]);

  async function checkBookmark() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", user.id)
      .eq("slug", slug)
      .maybeSingle();

    setSaved(!!data);
    setLoading(false);
  }

  async function toggleBookmark() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    if (saved) {
      const { error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("user_id", user.id)
        .eq("slug", slug);

      if (error) {
        alert(error.message);
        return;
      }

      setSaved(false);
    } else {
      const { error } = await supabase
        .from("bookmarks")
        .insert({
          user_id: user.id,
          slug,
        });

      if (error) {
        alert(error.message);
        return;
      }

      setSaved(true);
    }
  }

  if (loading) {
    return (
      <button
        disabled
        className="px-5 py-3 rounded-xl bg-gray-300 text-gray-600"
      >
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`px-5 py-3 rounded-xl font-semibold transition ${
        saved
          ? "bg-yellow-400 text-black"
          : "bg-blue-700 text-white hover:bg-blue-800"
      }`}
    >
      {saved ? "★ Bookmarked" : "☆ Bookmark"}
    </button>
  );
}