"use server";

import { adminSupabase } from "../lib/supabaseAdmin";

export async function getAITools() {

  const { data } = await adminSupabase
    .from("ai_tools")
    .select("*");

  return data;
}

export async function createAITool(tool: any) {

  await adminSupabase
    .from("ai_tools")
    .insert(tool);
}

export async function deleteAITool(id: string) {

  await adminSupabase
    .from("ai_tools")
    .delete()
    .eq("id", id);
}