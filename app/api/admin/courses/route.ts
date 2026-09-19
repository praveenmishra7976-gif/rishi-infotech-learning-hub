import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Courses API is working",
  });
}

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: "Course creation API is not configured yet.",
    },
    { status: 501 }
  );
}
