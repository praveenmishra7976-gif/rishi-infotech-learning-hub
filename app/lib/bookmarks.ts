import { supabase } from "./supabase";

export async function saveBookmark(slug: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    alert("Please login first.");
    return;
  }

  const { error } = await supabase.from("bookmarks").insert({
    user_id: user.id,
    chapter_slug: slug,
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Bookmark Saved Successfully!");
}