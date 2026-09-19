import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

import Navbar from "./components/Navbar";
import FestivalTheme from "./components/FestivalTheme";
import { getSettings } from "./admin/actions/settings";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  const websiteName =
    settings?.website_name?.trim() ||
    "Rishi Infotech Learning Hub";

  return {
    title: websiteName,
    description: "All-in-One Learning Platform",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();

  const festivalTheme =
    settings?.festival_theme || "default";

  const websiteName =
    settings?.website_name?.trim() ||
    "Rishi Infotech Learning Hub";

  const logoUrl =
    settings?.logo || null;

  return (
    <html
      lang="en"
      data-festival-theme={festivalTheme}
    >
      <body>
        <FestivalTheme theme={festivalTheme} />

        <Navbar
          websiteName={websiteName}
          logoUrl={logoUrl}
        />

        {children}

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
