import { supabase } from "@/app/lib/supabase";

export async function uploadAssignment(
  file: File
) {
  const filename =
    Date.now() + "-" + file.name;

  const { error } = await supabase.storage
    .from("assignment-files")
    .upload(filename, file);

  if (error) throw error;

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("assignment-files")
    .getPublicUrl(filename);

  return publicUrl;
}