import { adminSupabase } from "./supabaseAdmin";

type CountResult = {
  table: string;
  count: number;
};

async function getCount(table: string): Promise<CountResult> {
  const { count, error } = await adminSupabase
    .from(table)
    .select("*", {
      count: "exact",
      head: true,
    });

  if (error) {
    console.error(
      `Admin stats error for ${table}:`,
      error
    );

    return {
      table,
      count: 0,
    };
  }

  return {
    table,
    count: count ?? 0,
  };
}

export async function getAdminStats() {
  const results = await Promise.all([
    getCount("users"),
    getCount("subjects"),
    getCount("notes"),
    getCount("quizzes"),
    getCount("videos"),
    getCount("downloads"),
  ]);

  const stats = Object.fromEntries(
    results.map((item) => [
      item.table,
      item.count,
    ])
  ) as Record<string, number>;

  return {
    users: stats.users ?? 0,
    subjects: stats.subjects ?? 0,
    notes: stats.notes ?? 0,
    quizzes: stats.quizzes ?? 0,
    videos: stats.videos ?? 0,
    downloads: stats.downloads ?? 0,
  };
}
