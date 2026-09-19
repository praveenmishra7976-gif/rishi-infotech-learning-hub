"use client";

import { saveProgress } from "@/app/lib/progress";

interface CompleteChapterProps {
  subject: string;
  slug: string;
}

export default function CompleteChapter({
  subject,
  slug,
}: CompleteChapterProps) {
  async function handleComplete() {
    await saveProgress(subject, slug, 100);

    alert("✅ Chapter Completed Successfully!");
  }

  return (
    <button
      onClick={handleComplete}
      className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition"
    >
      ✅ Mark Chapter as Completed
    </button>
  );
}