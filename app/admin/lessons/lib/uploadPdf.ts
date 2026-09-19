import { supabase } from "@/app/lib/supabase";

export async function uploadPdf(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("lesson-pdfs")
    .upload(fileName, file);

  if (error) throw error;

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("lesson-pdfs")
    .getPublicUrl(fileName);

  return publicUrl;
}