import { createClient } from "@/lib/auth/server";

export async function getMembership() {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase

    .from("memberships")

    .select("*")

    .eq("user_id", user.id)

    .eq("status", "active")

    .single();

  return data;

}