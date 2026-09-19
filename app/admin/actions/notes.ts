"use server";

import { adminSupabase } from "../lib/supabaseAdmin";

export async function getNotes() {

  const { data } = await adminSupabase
    .from("notes")
    .select("*")
    .order("created_at", { ascending: false });

  return data;
}

export async function createNote(note: any) {

  await adminSupabase
    .from("notes")
    .insert(note);
}

export async function deleteNote(id: string) {

  await adminSupabase
    .from("notes")
    .delete()
    .eq("id", id);
}