"use server";

import { createClient } from "@/lib/auth/server";
import { revalidatePath } from "next/cache";

export async function uploadAvatar(
  userId: string,
  file: File
) {
  const supabase = await createClient();

  const extension = file.name.split(".").pop();

  const fileName = `${userId}.${extension}`;

  const path = `avatars/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(path, file, {
      upsert: true,
      cacheControl: "3600",
    });

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data } = supabase.storage
    .from("avatars")
    .getPublicUrl(path);

  const avatarUrl = data.publicUrl;

  const { error: dbError } = await supabase
    .from("profiles")
    .update({
      avatar_url: avatarUrl,
    })
    .eq("id", userId);

  if (dbError) {
    throw new Error(dbError.message);
  }

  revalidatePath(`/admin/users/${userId}`);

  return avatarUrl;
}