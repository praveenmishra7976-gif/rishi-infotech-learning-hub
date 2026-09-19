import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/app/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      user_id,
      course_id,
      quiz_id,
    } = body;

    const certificate_number = "RI-" + Date.now();

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("certificates")
      .insert({
        user_id,
        course_id,
        quiz_id,
        certificate_number,
      })
      .select()
      .single();

    if (error) {
      console.error("Certificate insert error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      certificate: data,
    });
  } catch (err) {
    console.error("Certificate API error:", err);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
