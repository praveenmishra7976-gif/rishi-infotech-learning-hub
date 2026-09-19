"use server";

import { adminSupabase } from "../lib/supabaseAdmin";

export async function getUsers() {

  const { data, error } = await adminSupabase
    .from("users")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function createUser(user: {
  name: string;
  email: string;
  role: string;
}) {

  const { error } = await adminSupabase
    .from("users")
    .insert(user);

  if (error) throw error;
}

export async function deleteUser(id: string) {

  const { error } = await adminSupabase
    .from("users")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function updateUser(
  id: string,
  user: {
    name: string;
    email: string;
    role: string;
  }
) {

  const { error } = await adminSupabase
    .from("users")
    .update(user)
    .eq("id", id);

  if (error) throw error;
}