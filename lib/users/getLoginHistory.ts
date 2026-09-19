"use server";

import { createClient } from "@/lib/auth/server";

export interface LoginHistoryItem {
  id: string;
  device: string;
  browser: string;
  ip_address: string | null;
  location: string | null;
  login_time: string;
}

export async function getLoginHistory(
  userId: string
): Promise<LoginHistoryItem[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("login_history")
    .select("*")
    .eq("user_id", userId)
    .order("login_time", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data as LoginHistoryItem[];
}