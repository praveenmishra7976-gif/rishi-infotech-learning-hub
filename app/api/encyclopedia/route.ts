import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const topic = request.nextUrl.searchParams
    .get("topic")
    ?.trim();

  if (!topic) {
    return NextResponse.json(
      { error: "Please enter a topic." },
      { status: 400 }
    );
  }

  try {
    const url =
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
      encodeURIComponent(topic.replace(/\s+/g, "_"));

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Rishi-Infotech-Learning-Hub/1.0",
      },
      cache: "no-store",
    });

    const text = await response.text();

    let data: unknown;

    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        {
          error:
            "Encyclopedia service returned an invalid response.",
        },
        { status: 502 }
      );
    }

    if (!response.ok) {
      const errorData = data as {
        detail?: string;
        message?: string;
      };

      return NextResponse.json(
        {
          error:
            errorData?.detail ||
            errorData?.message ||
            `Topic "${topic}" was not found.`,
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
    console.error(
      "Encyclopedia API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to connect to the encyclopedia service.",
      },
      { status: 502 }
    );
  }
}
