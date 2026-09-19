"use client";

import { useEffect } from "react";

type FestivalThemeProviderProps = {
  theme?: string | null;
  children: React.ReactNode;
};

function normalizeTheme(theme?: string | null) {
  if (!theme) return "default";

  return theme
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/\s+/g, "-");
}

export default function FestivalThemeProvider({
  theme,
  children,
}: FestivalThemeProviderProps) {
  useEffect(() => {
    const normalizedTheme = normalizeTheme(theme);

    document.documentElement.setAttribute(
      "data-festival-theme",
      normalizedTheme
    );

    return () => {
      document.documentElement.removeAttribute("data-festival-theme");
    };
  }, [theme]);

  return <>{children}</>;
}
