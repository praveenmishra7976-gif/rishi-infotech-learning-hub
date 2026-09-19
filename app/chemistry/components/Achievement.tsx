"use client";

import { useEffect, useState } from "react";
import {
  Award,
  Star,
  Target,
  Brain,
  Flame,
  Crown,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { chemistryChapters } from "../data/chemistryChapters";

const COMPLETED_KEY = "chemistryCompletedChapters";
const BOOKMARKS_KEY = "chemistryBookmarks";
const QUIZ_KEY = "chemistryQuizResults";
const PROGRESS_EVENT = "chemistryProgressUpdated";

type QuizResult = {
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
};

type AchievementItem = {
  title: string;
  description: string;
  icon: typeof Award;
  color: string;
  unlocked: boolean;
};

function readArray(key: string): unknown[] {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");

    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export default function Achievement() {
  const [completedCount, setCompletedCount] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    const refresh = () => {
      const completed = readArray(COMPLETED_KEY).filter(
        (item): item is string => typeof item === "string"
      );

      const bookmarks = readArray(BOOKMARKS_KEY).filter(
        (item): item is string => typeof item === "string"
      );

      const results = readArray(QUIZ_KEY).filter(
        (item): item is QuizResult =>
          typeof item === "object" &&
          item !== null &&
          typeof (item as QuizResult).score === "number" &&
          typeof (item as QuizResult).total === "number" &&
          typeof (item as QuizResult).percentage === "number"
      );

      setCompletedCount(completed.length);
      setBookmarkCount(bookmarks.length);
      setQuizResults(results);
    };

    refresh();

    window.addEventListener("storage", refresh);
    window.addEventListener(PROGRESS_EVENT, refresh);

    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener(PROGRESS_EVENT, refresh);
    };
  }, []);

  const totalChapters = chemistryChapters.length;

  const totalQuestionsSolved = quizResults.reduce(
    (total, result) => total + result.total,
    0
  );

  const bestPercentage = quizResults.reduce(
    (best, result) => Math.max(best, result.percentage),
    0
  );

  const achievements: AchievementItem[] = [
    {
      title: "First Chapter Completed",
      description: "Complete your first Chemistry chapter.",
      icon: Award,
      color: "text-blue-600",
      unlocked: completedCount >= 1,
    },
    {
      title: "100 MCQs Solved",
      description: "Solve at least 100 Chemistry quiz questions.",
      icon: Brain,
      color: "text-green-600",
      unlocked: totalQuestionsSolved >= 100,
    },
    {
      title: "Formula Master",
      description: "Bookmark all Chemistry chapters for revision.",
      icon: Star,
      color: "text-yellow-500",
      unlocked: bookmarkCount >= totalChapters,
    },
    {
      title: "Top Performer",
      description: "Score 80% or higher in a Chemistry quiz.",
      icon: Crown,
      color: "text-purple-600",
      unlocked: bestPercentage >= 80,
    },
    {
      title: "7 Day Streak",
      description: "A Chemistry study streak system will unlock this later.",
      icon: Flame,
      color: "text-red-600",
      unlocked: false,
    },
    {
      title: "Goal Achieved",
      description: "Complete all Chemistry chapters.",
      icon: Target,
      color: "text-pink-600",
      unlocked: completedCount >= totalChapters,
    },
  ];

  const unlockedCount = achievements.filter(
    (achievement) => achievement.unlocked
  ).length;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Achievements
          </h2>

          <p className="text-gray-500 mt-1">
            {unlockedCount} of {achievements.length} achievements unlocked
          </p>

        </div>

        <div className="rounded-2xl bg-blue-50 border border-blue-100 px-5 py-3">

          <p className="text-sm font-bold text-blue-600">
            CHEMISTRY PROGRESS
          </p>

          <p className="mt-1 font-black text-gray-900">
            {completedCount} / {totalChapters} chapters completed
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {achievements.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`relative border rounded-2xl p-6 text-center transition ${
                item.unlocked
                  ? "border-green-200 bg-green-50/40 hover:shadow-lg"
                  : "border-gray-200 bg-gray-50/70"
              }`}
            >

              <div
                className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                  item.unlocked
                    ? "bg-white"
                    : "bg-gray-200"
                }`}
              >

                {item.unlocked ? (
                  <Icon
                    size={42}
                    className={item.color}
                  />
                ) : (
                  <Lock
                    size={30}
                    className="text-gray-400"
                  />
                )}

              </div>

              {item.unlocked && (
                <div className="absolute top-4 right-4">
                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />
                </div>
              )}

              <h3
                className={`font-bold mt-5 ${
                  item.unlocked
                    ? "text-gray-900"
                    : "text-gray-500"
                }`}
              >
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-6">
                {item.description}
              </p>

              <div
                className={`mt-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-black ${
                  item.unlocked
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {item.unlocked ? "UNLOCKED" : "LOCKED"}
              </div>

            </div>
          );
        })}

      </div>

      <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-5">

        <p className="font-bold text-gray-900">
          Quiz progress
        </p>

        <p className="mt-1 text-sm text-gray-500">
          {quizResults.length} quiz attempt
          {quizResults.length === 1 ? "" : "s"} •{" "}
          {totalQuestionsSolved} questions solved • Best score:{" "}
          {bestPercentage}%
        </p>

      </div>

    </div>
  );
}
