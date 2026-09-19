"use server";

import { createClient } from "@/lib/auth/server";
import { revalidatePath } from "next/cache";

interface CreateUserProps {
  full_name: string;
  email: string;
  role: string;
}

export async function createUser({
  full_name,
  email,
  role,
}: CreateUserProps) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .insert({
      full_name,
      email,
      role,
    });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/users");
}