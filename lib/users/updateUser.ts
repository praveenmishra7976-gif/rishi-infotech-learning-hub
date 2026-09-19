"use server";

import { createClient } from "@/lib/auth/server";
import { revalidatePath } from "next/cache";

interface UpdateProps {
  id: string;
  full_name: string;
  role: string;
}

export async function updateUser({
  id,
  full_name,
  role,
}: UpdateProps) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({
      full_name,
      role,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/users");
}