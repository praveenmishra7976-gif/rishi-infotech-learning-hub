import { createClient } from "@/lib/auth/server";

export interface Note {
  id: string;
  title: string;
  subject: string;
  category: string;
  published: boolean;
  created_at: string;
}

export async function getNotes(): Promise<Note[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data as Note[];
}