import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const word = request.nextUrl.searchParams
    .get("word")
    ?.trim();

  if (!word) {
    return NextResponse.json(
      { error: "Please enter a word." },
      { status: 400 }
    );
  }

  try {
    const url =
      "https://api.dictionaryapi.dev/api/v2/entries/en/" +
      encodeURIComponent(word);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
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
            "Dictionary service returned an invalid response.",
        },
        { status: 502 }
      );
    }

    if (!response.ok) {
      const errorData = data as {
        message?: string;
      };

      return NextResponse.json(
        {
          error:
            errorData?.message ||
            `Word "${word}" was not found.`,
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
      "Free Dictionary API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to connect to the free dictionary service.",
      },
      { status: 502 }
    );
  }
}
