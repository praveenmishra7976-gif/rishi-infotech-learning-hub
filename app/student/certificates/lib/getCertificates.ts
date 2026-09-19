import { createClient } from "@/lib/auth/server";

export async function getCertificates() {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data } = await supabase

    .from("certificates")

    .select(`
      *,
      courses(title)
    `)

    .eq("student_id", user.id)

    .order("issued_at", {
      ascending: false,
    });

  return data ?? [];

}