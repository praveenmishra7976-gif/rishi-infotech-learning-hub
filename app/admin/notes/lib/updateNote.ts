"use server";

import { createClient } from "@/lib/auth/server";
import { CreateNoteData } from "./createNote";

export async function updateNote(
  id: string,
  note: CreateNoteData
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("notes")
    .update(note)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}