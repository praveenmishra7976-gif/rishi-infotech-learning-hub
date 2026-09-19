"use server";

import { createClient } from "@/lib/auth/server";
import { revalidatePath } from "next/cache";

export async function updateEmailVerification(
  userId: string,
  verified: boolean
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({
      email_verified: verified,
    })
    .eq("id", userId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(`/admin/users/${userId}`);
  revalidatePath("/admin/users");
}