"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Flame,
  Star,
  Gift,
  Home,
} from "lucide-react";

const challenge = {
  question: "Which language is primarily used for styling web pages?",
  options: [
    "Python",
    "Java",
    "CSS",
    "C++",
  ],
  answer: 2,
};

export default function DailyChallengePage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const [message, setMessage] = useState("");

  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);

  const [loaded, setLoaded] = useState(false);

  /*
   * Load saved challenge data only in the browser.
   * This prevents localStorage errors during Next.js prerendering.
   */
  useEffect(() => {
    try {
      const savedXp = Number(
        window.localStorage.getItem("dailyXP") || 0
      );

      const savedStreak = Number(
        window.localStorage.getItem("dailyStreak") || 0
      );

      const lastChallenge =
        window.localStorage.getItem("lastChallenge");

      const today = new Date().toDateString();

      setXp(savedXp);
      setStreak(savedStreak);

      /*
       * If today's challenge was already completed,
       * prevent another submission.
       */
      if (lastChallenge === today) {
        setCompleted(true);
        setMessage("Today's challenge already completed.");
      }
    } catch (error) {
      console.error(
        "Failed to load daily challenge data:",
        error
      );
    } finally {
      setLoaded(true);
    }
  }, []);

  function submit() {
    if (selected === null) {
      alert("Please select an answer.");
      return;
    }

    if (completed) {
      alert("Today's challenge already completed.");
      return;
    }

    const today = new Date().toDateString();

    if (selected === challenge.answer) {
      const newXp = xp + 50;
      const newStreak = streak + 1;

      try {
        window.localStorage.setItem(
          "dailyXP",
          String(newXp)
        );

        window.localStorage.setItem(
          "dailyStreak",
          String(newStreak)
        );

        window.localStorage.setItem(
          "lastChallenge",
          today
        );
      } catch (error) {
        console.error(
          "Failed to save daily challenge data:",
          error
        );
      }

      setXp(newXp);
      setStreak(newStreak);
      setMessage("🎉 Correct! +50 XP Earned");
    } else {
      try {
        window.localStorage.setItem(
          "lastChallenge",
          today
        );
      } catch (error) {
        console.error(
          "Failed to save challenge status:",
          error
        );
      }

      setMessage("❌ Wrong Answer. Try again tomorrow.");
    }

    setCompleted(true);
  }

  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <Calendar size={50} />

            <div>

              <h1 className="text-5xl font-black">
                Daily Challenge
              </h1>

              <p className="mt-3 text-blue-100">
                Complete today's challenge and earn XP.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CHALLENGE */}

      <section className="max-w-5xl mx-auto py-16 px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-black mb-8 text-gray-900">
            {challenge.question}
          </h2>

          <div className="space-y-4">

            {challenge.options.map((option, index) => (

              <button
                key={index}
                type="button"
                disabled={completed}
                onClick={() => setSelected(index)}
                className={`w-full text-left p-5 rounded-xl border transition font-semibold ${
                  selected === index
                    ? "bg-blue-600 text-white border-blue-600"
                    : completed
                    ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                    : "hover:bg-slate-100 border-gray-300"
                }`}
              >
                {option}
              </button>

            ))}

          </div>

          <button
            type="button"
            onClick={submit}
            disabled={!loaded || completed}
            className={`w-full mt-8 text-white py-4 rounded-2xl font-bold transition ${
              !loaded || completed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {!loaded
              ? "Loading..."
              : completed
              ? "Challenge Completed"
              : "Submit Challenge"}
          </button>

          {message && (

            <div
              className={`mt-8 text-center text-2xl font-bold ${
                message.includes("Correct")
                  ? "text-green-600"
                  : message.includes("Wrong")
                  ? "text-red-600"
                  : "text-blue-600"
              }`}
            >
              {message}
            </div>

          )}

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* XP */}

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

            <Star
              className="mx-auto text-yellow-500"
              size={40}
            />

            <h2 className="text-3xl font-black mt-4 text-gray-900">
              {xp}
            </h2>

            <p className="text-gray-600">
              Total XP
            </p>

          </div>

          {/* STREAK */}

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

            <Flame
              className="mx-auto text-red-500"
              size={40}
            />

            <h2 className="text-3xl font-black mt-4 text-gray-900">
              {streak}
            </h2>

            <p className="text-gray-600">
              Daily Streak
            </p>

          </div>

          {/* REWARD */}

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

            <Gift
              className="mx-auto text-green-500"
              size={40}
            />

            <h2 className="text-3xl font-black mt-4 text-gray-900">
              +50 XP
            </h2>

            <p className="text-gray-600">
              Today's Reward
            </p>

          </div>

        </div>

        {/* HOME */}

        <div className="mt-12">

          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl inline-flex items-center gap-3 font-bold transition"
          >
            <Home size={20} />
            Home
          </Link>

        </div>

      </section>

    </main>
  );
}