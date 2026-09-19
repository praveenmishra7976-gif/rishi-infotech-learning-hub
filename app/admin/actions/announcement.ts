"use server";

import { adminSupabase } from "../lib/supabaseAdmin";

export async function getAnnouncements() {

  const { data } = await adminSupabase
    .from("announcements")
    .select("*");

  return data;
}

export async function createAnnouncement(item: any) {

  await adminSupabase
    .from("announcements")
    .insert(item);
}

export async function deleteAnnouncement(id: string) {

  await adminSupabase
    .from("announcements")
    .delete()
    .eq("id", id);
}