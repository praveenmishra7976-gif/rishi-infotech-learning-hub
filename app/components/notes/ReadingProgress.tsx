"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent = (scrollTop / docHeight) * 100;

      setProgress(percent);
    }

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[99999]">

      <div
        className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>
  );
}