import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{
    word: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  try {
    const { word } = await params;

    const appId = process.env.OXFORD_APP_ID;
    const appKey = process.env.OXFORD_APP_KEY;

    if (!appId || !appKey) {
      return NextResponse.json(
        {
          error: "Oxford Dictionary API credentials are not configured.",
        },
        { status: 500 }
      );
    }

    const cleanWord = decodeURIComponent(word).trim();

    if (!cleanWord) {
      return NextResponse.json(
        {
          error: "Please provide a word.",
        },
        { status: 400 }
      );
    }

    const url =
      `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/` +
      encodeURIComponent(cleanWord);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        app_id: appId,
        app_key: appKey,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data?.error ||
            `Oxford Dictionary API returned status ${response.status}.`,
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Oxford Dictionary API error:", error);

    return NextResponse.json(
      {
        error: "Unable to connect to Oxford Dictionary API.",
      },
      { status: 500 }
    );
  }
}
