import { supabase } from "@/lib/supabase/client";

export async function addBookmark(
  userId: string,
  noteId: string
) {

  return await supabase
    .from("bookmarks")
    .insert({

      user_id: userId,

      note_id: noteId,

    });

}

export async function removeBookmark(id:string){

  return await supabase

  .from("bookmarks")

  .delete()

  .eq("id",id);

}

export async function getBookmarks(userId:string){

  return await supabase

  .from("bookmarks")

  .select("*")

  .eq("user_id",userId);

}