import { createClient } from "@/lib/auth/server";

export interface NotesStats {
  month: string;
  notes: number;
}

export async function getNotesStats(): Promise<NotesStats[]> {
  const supabase = await createClient();

  const { data } = await supabase
    .from("notes")
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
    notes: 0,
  }));

  data?.forEach((note) => {
    const month = new Date(note.created_at).getMonth();
    stats[month].notes++;
  });

  return stats;
}