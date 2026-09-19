import { createClient } from "@/lib/auth/server";

export interface GrowthData {
  month: string;
  users: number;
}

export async function getUserGrowth(): Promise<GrowthData[]> {
  const supabase = await createClient();

  const { data } = await supabase
    .from("profiles")
    .select("created_at");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const stats = months.map((m) => ({
    month: m,
    users: 0,
  }));

  data?.forEach((user) => {
    const month = new Date(user.created_at).getMonth();
    stats[month].users++;
  });

  return stats;
}