import { supabase } from "@/app/lib/supabase";

export async function uploadVideo(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("lesson-videos")
    .upload(fileName, file);

  if (error) throw error;

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("lesson-videos")
    .getPublicUrl(fileName);

  return publicUrl;
}