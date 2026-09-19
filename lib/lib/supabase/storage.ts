import { supabase } from "./client";

export async function uploadFile(

bucket: string,

file: File

){

const fileName = `${Date.now()}-${file.name}`;

const { data, error } = await supabase.storage

.from(bucket)

.upload(fileName,file);

if(error){

throw error;

}

const { data: url } = supabase.storage

.from(bucket)

.getPublicUrl(fileName);

return url.publicUrl;

}