"use server";

import { createClient } from "@/lib/auth/server";

export async function uploadPDF(file: File) {

  const supabase = await createClient();

  const filename =
    `${Date.now()}-${file.name}`;

  const { error } =
    await supabase.storage

      .from("course-pdfs")

      .upload(filename, file);

  if (error)
    throw new Error(error.message);

  const { data } =
    supabase.storage

      .from("course-pdfs")

      .getPublicUrl(filename);

  return data.publicUrl;

}