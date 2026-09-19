"use server";

import { createClient } from "@/lib/auth/server";
import { revalidatePath } from "next/cache";

export async function updateAccountStatus(
  userId: string,
  status: "active" | "suspended" | "blocked"
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({
      status,
    })
    .eq("id", userId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(`/admin/users/${userId}`);
  revalidatePath("/admin/users");
}