import { createClient } from "@/lib/auth/server";

export async function getResultsStats() {

  const supabase = await createClient();

  const { data } = await supabase
    .from("quiz_results")
    .select("*");

  const results = data ?? [];

  const totalAttempts = results.length;

  const passed = results.filter(
    (r) => r.status === "Pass"
  ).length;

  const failed = totalAttempts - passed;

  const average =
    totalAttempts === 0
      ? 0
      : Math.round(
          results.reduce(
            (sum, r) => sum + Number(r.percentage),
            0
          ) / totalAttempts
        );

  return {

    totalAttempts,

    passed,

    failed,

    average,

  };

}