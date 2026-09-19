export type ProgressAttemptType =
  | "mcq"
  | "mock-test"
  | "daily-quiz";

export interface ProgressAttempt {
  id: string;
  type: ProgressAttemptType;
  typeName: string;
  subject: string;
  subjectName: string;
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
}

const STORAGE_KEY = "learningProgress";

export function saveProgressAttempt(
  attempt: Omit<ProgressAttempt, "id" | "completedAt">
) {
  try {
    const existing: ProgressAttempt[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    const newAttempt: ProgressAttempt = {
      ...attempt,
      id: `${attempt.type}-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`,
      completedAt: new Date().toISOString(),
    };

    existing.unshift(newAttempt);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(existing)
    );

    return newAttempt;
  } catch (error) {
    console.error("Failed to save learning progress:", error);
    return null;
  }
}
