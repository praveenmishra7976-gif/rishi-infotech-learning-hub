import { NextResponse } from "next/server";
import { createClient } from "@/lib/auth/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        {
          success: false,
          message: "You must be logged in to submit a leaderboard score.",
        },
        { status: 401 }
      );
    }

    const body = await request.json();

    const score = Number(body?.score);

    if (!Number.isFinite(score)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid score.",
        },
        { status: 400 }
      );
    }

    const safeScore = Math.max(
      0,
      Math.min(100, Math.round(score))
    );

    const { data, error } = await supabase
      .from("leaderboard")
      .insert({
        user_id: user.id,
        score: safeScore,
      })
      .select("id, user_id, score, created_at")
      .single();

    if (error) {
      console.error("Leaderboard insert error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to save leaderboard score.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      leaderboard: data,
    });
  } catch (error) {
    console.error("Leaderboard submit error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
