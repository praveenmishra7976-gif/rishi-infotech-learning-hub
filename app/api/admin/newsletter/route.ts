import { NextResponse } from "next/server";
import { getAdminUser } from "@/app/admin/lib/auth";
import { adminSupabase } from "@/app/admin/lib/supabaseAdmin";

async function requireAdmin() {
  const user = await getAdminUser();

  if (!user) {
    return null;
  }

  const { data: profile, error } = await adminSupabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error || profile?.role !== "admin") {
    return null;
  }

  return user;
}

export async function DELETE(request: Request) {
  try {
    const admin = await requireAdmin();

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        { status: 401 }
      );
    }

    const body = await request.json();
    const id = String(body?.id ?? "").trim();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Subscriber ID is required.",
        },
        { status: 400 }
      );
    }

    const { error } = await adminSupabase
      .from("newsletter_subscribers")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Delete newsletter subscriber error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to delete subscriber.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Subscriber removed successfully.",
    });
  } catch (error) {
    console.error("Newsletter admin DELETE error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
