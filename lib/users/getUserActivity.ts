"use server";

import { createClient } from "@/lib/auth/server";

export interface UserActivity {
  id: string;
  action: string;
  created_at: string;
}

export async function getUserActivity(
  userId: string
): Promise<UserActivity[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("user_activity")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data as UserActivity[];
}