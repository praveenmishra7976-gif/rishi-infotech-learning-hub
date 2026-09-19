export async function askAI(
  prompt: string,
  systemPrompt?: string
) {
  const res = await fetch("/api/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      systemPrompt,
    }),
  });

  const data = await res.json();

  return data.result;
}