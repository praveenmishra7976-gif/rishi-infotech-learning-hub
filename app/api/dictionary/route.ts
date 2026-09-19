import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const word = request.nextUrl.searchParams.get("word")?.trim();

    if (!word) {
      return NextResponse.json(
        { error: "Please enter a word." },
        { status: 400 }
      );
    }

    const appId = process.env.OXFORD_APP_ID;
    const appKey = process.env.OXFORD_APP_KEY;
    const baseUrl = process.env.OXFORD_API_BASE_URL;

    if (!appId || !appKey || !baseUrl) {
      return NextResponse.json(
        { error: "Oxford Dictionary API configuration is missing." },
        { status: 500 }
      );
    }

    const cleanBaseUrl = baseUrl.replace(/\/+$/, "");

    const url = `${cleanBaseUrl}/entries/en/${encodeURIComponent(
      word.toLowerCase()
    )}?fields=definitions%2Cexamples%2Cpronunciations&strictMatch=false`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        app_id: appId,
        app_key: appKey,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data?.error ||
            data?.message ||
            `Oxford API error (${response.status})`,
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Dictionary API error:", error);

    return NextResponse.json(
      { error: "Unable to connect to Oxford Dictionary API." },
      { status: 500 }
    );
  }
}
