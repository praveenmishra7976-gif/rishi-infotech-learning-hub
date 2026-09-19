"use server";

import { createClient } from "@/lib/auth/server";

export async function sendPasswordReset(
  email: string
) {
  const supabase = await createClient();

  const { error } =
    await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo:
          `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
      }
    );

  if (error) {
    throw new Error(error.message);
  }

  return {
    success: true,
  };
}