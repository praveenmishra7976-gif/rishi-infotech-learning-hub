"use client";

import { useEffect } from "react";

type FestivalThemeProps = {
  theme?: string | null;
};

export default function FestivalTheme({
  theme,
}: FestivalThemeProps) {
  useEffect(() => {
    const selectedTheme = theme || "default";

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
