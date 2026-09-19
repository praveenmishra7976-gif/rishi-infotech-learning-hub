"use client";

import { useEffect, useRef } from "react";

interface TimerProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  onTimeout: () => void;
}

const TOTAL_TIME = 60;

export default function Timer({
  time,
  setTime,
  onTimeout,
}: TimerProps) {

  const timeoutHandledRef = useRef(false);

  /*
   * Reset timeout protection whenever a new question starts.
   */
  useEffect(() => {
    if (time > 0) {
      timeoutHandledRef.current = false;
    }
  }, [time]);

  /*
   * Countdown.
   */
  useEffect(() => {

    if (time <= 0) {

      if (!timeoutHandledRef.current) {
        timeoutHandledRef.current = true;
        onTimeout();
      }

      return;
    }

    const timer = window.setTimeout(() => {
      setTime((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };

  }, [time, setTime, onTimeout]);

  const percentage = Math.max(
    0,
    Math.min((time / TOTAL_TIME) * 100, 100)
  );

  const isCritical = time <= 10;

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

      {/* TIMER HEADER */}

      <div className="flex items-center justify-between gap-4 mb-3">

        <div>

          <p className="text-sm font-black uppercase tracking-wider text-gray-500">
            Time Left
          </p>

          <p
            className={`mt-1 text-2xl font-black ${
              isCritical
                ? "text-red-600"
                : "text-gray-900"
            }`}
          >
            {time}s
          </p>

        </div>

        <div
          className={`
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            text-xl
            ${
              isCritical
                ? "bg-red-100"
                : "bg-blue-50"
            }
          `}
        >
          ⏱️
        </div>

      </div>

      {/* PROGRESS */}

      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">

        <div
          className={`
            h-full
            rounded-full
            transition-all
            duration-1000
            ${
              isCritical
                ? "bg-red-600"
                : "bg-blue-600"
            }
          `}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      {/* MESSAGE */}

      <div className="mt-3 flex items-center justify-between text-xs font-bold">

        <span className="text-gray-500">
          60 seconds per question
        </span>

        {isCritical && (
          <span className="text-red-600 animate-pulse">
            Hurry! Time is running out.
          </span>
        )}

      </div>

    </div>
  );
}
