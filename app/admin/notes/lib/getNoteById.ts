import { createClient } from "@/lib/auth/server";

export interface Note {
  id: string;
  title: string;
  subject: string;
  category: string;
  content: string;
  pdf_url: string | null;
  image_url: string | null;
  published: boolean;
}

export async function getNoteById(id: string): Promise<Note | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}