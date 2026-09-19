import { createClient } from "@/lib/auth/server";

export interface LoginStats {
  day: string;
  logins: number;
}

export async function getLoginStats(): Promise<LoginStats[]> {
  const supabase = await createClient();

  const { data } = await supabase
    .from("login_history")
    .select("login_time");

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const stats = days.map((d) => ({
    day: d,
    logins: 0,
  }));

  data?.forEach((login) => {
    const date = new Date(login.login_time);

    let day = date.getDay();

    day = day === 0 ? 6 : day - 1;

    stats[day].logins++;
  });

  return stats;
}