import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const text =
      typeof body?.text === "string"
        ? body.text.trim()
        : "";

    if (!text) {
      return NextResponse.json(
        { error: "Please enter some text to check." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.languagetool.org/v2/check",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: new URLSearchParams({
          text,
          language: "en-US",
        }).toString(),
        cache: "no-store",
      }
    );

    const contentType =
      response.headers.get("content-type") || "";

    const responseText = await response.text();

    if (!contentType.includes("application/json")) {
      console.error(
        "Grammar service returned non-JSON:",
        responseText.slice(0, 500)
      );

      return NextResponse.json(
        {
          error:
            "Grammar service returned an invalid response.",
        },
        { status: 502 }
      );
    }

    let data: unknown;

    try {
      data = JSON.parse(responseText);
    } catch {
      return NextResponse.json(
        {
          error:
            "Grammar service returned invalid JSON.",
        },
        { status: 502 }
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Grammar service request failed.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Grammar API error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to connect to the grammar service.",
      },
      { status: 500 }
    );
  }
}
