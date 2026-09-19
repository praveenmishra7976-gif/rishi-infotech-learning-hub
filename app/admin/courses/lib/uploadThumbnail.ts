import { supabase } from "@/app/lib/supabase";

export async function uploadThumbnail(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("course-thumbnails")
    .upload(fileName, file);

  if (error) throw error;

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("course-thumbnails")
    .getPublicUrl(fileName);

  return publicUrl;
}