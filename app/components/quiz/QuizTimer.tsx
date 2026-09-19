"use client";

import { useEffect, useState } from "react";

type Props = {
  initialMinutes: number;
  onTimeUp: () => void;
};

export default function QuizTimer({
  initialMinutes,
  onTimeUp,
}: Props) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-red-50 border border-red-300 rounded-xl px-5 py-3">

      <p className="text-red-700 font-bold text-lg">
        ⏱ Time Left
      </p>

      <p className="text-3xl font-bold mt-2">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>

    </div>
  );
}