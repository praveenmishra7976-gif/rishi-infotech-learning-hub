"use client";

import { useEffect } from "react";

type FestivalThemeProps = {
  theme?: string | null;
};

function normalizeTheme(theme?: string | null) {
  if (!theme) {
    return "default";
  }

  const normalized = theme
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/\s+/g, "-");

  // Keep the CSS/database naming consistent.
  if (normalized === "results") {
    return "results-achievement";
  }

  return normalized;
}

export default function FestivalTheme({
  theme,
}: FestivalThemeProps) {
  useEffect(() => {
    const selectedTheme = normalizeTheme(theme);

    document.documentElement.setAttribute(
      "data-festival-theme",
      selectedTheme
    );

    document.body.setAttribute(
      "data-festival-theme",
      selectedTheme
    );
  }, [theme]);

  return (
    <div
      aria-hidden="true"
      className="festival-visual-layer"
    >
      <div className="festival-decoration festival-decoration-one" />
      <div className="festival-decoration festival-decoration-two" />
      <div className="festival-decoration festival-decoration-three" />

      <div className="festival-tricolor-line" />

      <div className="festival-diyas">
        <span>🪔</span>
        <span>🪔</span>
        <span>🪔</span>
      </div>

      <div className="festival-holi-colors">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="festival-stars">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
      </div>
    </div>
  );
}
