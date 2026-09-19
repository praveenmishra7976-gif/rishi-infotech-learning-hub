"use server";

import { createClient } from "@/lib/auth/server";

export async function logUserActivity(
  userId: string,
  action: string
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("user_activity")
    .insert({
      user_id: userId,
      action,
    });

  if (error) {
    throw new Error(error.message);
  }
}