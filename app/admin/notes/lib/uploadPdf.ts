"use server";

import { createClient } from "@/lib/auth/server";

export async function uploadPdf(file: File) {
  const supabase = await createClient();

  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("notes")
    .upload(`pdf/${fileName}`, file);

  if (error) {
    throw new Error(error.message);
  }

  const { data: publicUrl } = supabase.storage
    .from("notes")
    .getPublicUrl(data.path);

  return publicUrl.publicUrl;
}