export async function submitQuiz(payload: {
  quizId: string;
  userId: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
}) {
  const res = await fetch("/api/quiz/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to submit quiz");
  }

  return res.json();
}
