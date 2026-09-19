import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return NextResponse.json({
      error: "Supabase environment variables are missing",
    });
  }

  const supabase = createClient(url, key);

  const { data, error } = await supabase
    .from("courses")
    .select("id,title,published,status")
    .order("created_at", { ascending: false });

  return NextResponse.json({
    project: url,
    count: data?.length ?? 0,
    data,
    error,
  });
}