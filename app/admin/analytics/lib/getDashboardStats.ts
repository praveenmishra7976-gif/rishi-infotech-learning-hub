import { supabase } from "@/app/lib/supabase";

export async function getDashboardStats() {
  try {
    const [
      { count: students },
      { count: premiumUsers },
      { count: payments },
      { data: paymentData },
    ] = await Promise.all([
      supabase
        .from("profiles")
        .select("*", { count: "exact", head: true }),

      supabase
        .from("memberships")
        .select("*", { count: "exact", head: true })
        .eq("status", "active"),

      supabase
        .from("payments")
        .select("*", { count: "exact", head: true }),

      supabase
        .from("payments")
        .select("amount")
        .eq("status", "paid"),
    ]);

    const revenue =
      paymentData?.reduce((sum, item) => sum + (item.amount || 0), 0) || 0;

    return {
      students: students || 0,
      premiumUsers: premiumUsers || 0,
      payments: payments || 0,
      revenue,
    };
  } catch (error) {
    console.error("Dashboard Stats Error:", error);

    return {
      students: 0,
      premiumUsers: 0,
      payments: 0,
      revenue: 0,
    };
  }
}