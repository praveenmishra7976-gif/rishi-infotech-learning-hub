import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishi Infotech Learning Hub",
  description:
    "Learn, practice, explore AI tools and use developer tools in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}