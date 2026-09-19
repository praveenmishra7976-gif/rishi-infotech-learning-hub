"use server";

import { createClient } from "@/lib/auth/server";

export async function deleteNote(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}