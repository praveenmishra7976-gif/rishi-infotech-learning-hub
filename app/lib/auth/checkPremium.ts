import { supabase } from "@/app/lib/supabase";

export async function checkPremium(userId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from("profiles")
    .select("premium")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Premium check failed:", error);
    return false;
  }

  return data?.premium === true;
}
