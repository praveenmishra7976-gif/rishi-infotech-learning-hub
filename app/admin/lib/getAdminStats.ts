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

async function getRoleCount(
  roles: string[]
): Promise<number> {
  const { count, error } = await adminSupabase
    .from("profiles")
    .select("*", {
      count: "exact",
      head: true,
    })
    .in("role", roles);

  if (error) {
    console.error(
      `Admin role stats error for ${roles.join(", ")}:`,
      error
    );

    return 0;
  }

  return count ?? 0;
}

export async function getAdminStats() {
  const [
    users,
    students,
    teachers,
    administrators,
    subjects,
    notes,
    quizzes,
    videos,
    downloads,
  ] = await Promise.all([
    getCount("profiles"),
    getRoleCount(["student"]),
    getRoleCount(["teacher"]),
    getRoleCount(["admin", "super_admin"]),
    getCount("subjects"),
    getCount("notes"),
    getCount("quizzes"),
    getCount("videos"),
    getCount("downloads"),
  ]);

  return {
    users: users.count,
    students,
    teachers,
    administrators,
    subjects: subjects.count,
    notes: notes.count,
    quizzes: quizzes.count,
    videos: videos.count,
    downloads: downloads.count,
  };
}
