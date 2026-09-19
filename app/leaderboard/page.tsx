import LeaderboardTable from "./LeaderboardTable";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

export type LeaderboardEntry = {
  id: string;
  user_id: string | null;
  course_id: string | null;
  score: number | null;
  created_at: string;
  profile:
    | {
        full_name: string | null;
        avatar_url: string | null;
      }[]
    | null;
};

type ProfileRow = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
};

async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  /*
   * ------------------------------------------------------------
   * GET LEADERBOARD SCORES
   * ------------------------------------------------------------
   */

  const { data: leaderboardData, error: leaderboardError } =
    await adminSupabase
      .from("leaderboard")
      .select(
        "id, user_id, course_id, score, created_at"
      )
      .order("score", { ascending: false })
      .order("created_at", { ascending: true });

  if (leaderboardError) {
    console.error(
      "Get leaderboard scores error:",
      leaderboardError
    );

    return [];
  }

  const rows = leaderboardData ?? [];

  /*
   * ------------------------------------------------------------
   * GET STUDENT PROFILES SEPARATELY
   * ------------------------------------------------------------
   *
   * We intentionally do not depend on a Supabase relationship
   * name such as leaderboard_user_id_fkey.
   */

  const userIds = Array.from(
    new Set(
      rows
        .map((row) => row.user_id)
        .filter(
          (userId): userId is string =>
            typeof userId === "string" &&
            userId.length > 0
        )
    )
  );

  let profiles: ProfileRow[] = [];

  if (userIds.length > 0) {
    const { data: profileData, error: profileError } =
      await adminSupabase
        .from("profiles")
        .select("id, full_name, avatar_url")
        .in("id", userIds);

    if (profileError) {
      console.error(
        "Get leaderboard profiles error:",
        profileError
      );
    } else {
      profiles = profileData ?? [];
    }
  }

  /*
   * ------------------------------------------------------------
   * CREATE PROFILE LOOKUP
   * ------------------------------------------------------------
   */

  const profileMap = new Map<string, ProfileRow>();

  for (const profile of profiles) {
    profileMap.set(profile.id, profile);
  }

  /*
   * ------------------------------------------------------------
   * ONE ENTRY PER STUDENT
   * ------------------------------------------------------------
   *
   * Supabase keeps every attempt.
   * The public leaderboard displays only the student's
   * highest percentage.
   */

  const bestByStudent = new Map<
    string,
    LeaderboardEntry
  >();

  for (const row of rows) {
    if (!row.user_id) {
      continue;
    }

    const profile = profileMap.get(row.user_id);

    const entry: LeaderboardEntry = {
      id: row.id,
      user_id: row.user_id,
      course_id: row.course_id,
      score: row.score,
      created_at: row.created_at,
      profile: profile
        ? [
            {
              full_name: profile.full_name,
              avatar_url: profile.avatar_url,
            },
          ]
        : null,
    };

    const existing = bestByStudent.get(row.user_id);

    if (!existing) {
      bestByStudent.set(row.user_id, entry);
      continue;
    }

    const currentScore = Number(row.score ?? 0);
    const existingScore = Number(existing.score ?? 0);

    if (currentScore > existingScore) {
      bestByStudent.set(row.user_id, entry);
    }
  }

  /*
   * ------------------------------------------------------------
   * SORT BEST STUDENTS
   * ------------------------------------------------------------
   */

  return Array.from(bestByStudent.values()).sort(
    (a, b) => {
      const scoreDifference =
        Number(b.score ?? 0) -
        Number(a.score ?? 0);

      if (scoreDifference !== 0) {
        return scoreDifference;
      }

      return (
        new Date(a.created_at).getTime() -
        new Date(b.created_at).getTime()
      );
    }
  );
}

export default async function LeaderboardPage() {
  const leaderboard = await getLeaderboard();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Indian tricolour accent */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 via-white to-green-600">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm font-bold text-gray-700 shadow-sm">
              🏆 Student Achievement
            </div>

            <h1 className="mt-5 text-4xl font-black text-gray-900 md:text-6xl">
              Global Leaderboard
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
              See student performance and celebrate learning progress
              across Rishi Infotech Learning Hub.
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-gray-900 md:text-4xl">
            Top Students
          </h2>

          <p className="mt-2 text-lg text-gray-500">
            Each student appears once using their highest recorded
            percentage.
          </p>
        </div>

        <LeaderboardTable leaderboard={leaderboard} />

        <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
              📚
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900">
                Keep Learning
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Complete quizzes and practice regularly to build your
                learning record and improve your performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="text-xl font-black">
            🇮🇳 Rishi Infotech Learning Hub
          </p>

          <p className="mt-2 text-gray-400">
            Free education and technology resources for students.
          </p>
        </div>

        <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />
      </footer>
    </main>
  );
}
