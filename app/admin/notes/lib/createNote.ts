"use server";

import { createClient } from "@/lib/auth/server";

export interface CreateNoteData {
  title: string;
  subject: string;
  category: string;
  content: string;
  pdf_url?: string;
  image_url?: string;
  published: boolean;
}

export async function createNote(
  note: CreateNoteData
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("notes")
    .insert(note);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}