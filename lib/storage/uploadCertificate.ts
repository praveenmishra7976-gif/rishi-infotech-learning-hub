"use server";

import { createClient } from "@/lib/auth/server";

export async function uploadCertificate(
  file: File
) {

  const supabase = await createClient();

  const filename =
    `${Date.now()}-${file.name}`;

  const { error } =
    await supabase.storage

      .from("certificates")

      .upload(filename, file);

  if (error)
    throw new Error(error.message);

  const { data } =
    supabase.storage

      .from("certificates")

      .getPublicUrl(filename);

  return data.publicUrl;

}