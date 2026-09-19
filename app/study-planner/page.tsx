"use client";

import { useState } from "react";

export default function StudyPlanner() {
  const [goal, setGoal] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask() {
    if (!goal.trim()) return;

    setTasks([...tasks, goal]);
    setGoal("");
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-700">
          AI Study Planner
        </h1>

        <p className="mt-3 text-gray-600">
          Plan your daily study goals.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Example: Finish Chapter 1"
            className="w-full border rounded-xl p-4"
          />

          <button
            onClick={addTask}
            className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Add Goal
          </button>

        </div>

        <div className="mt-10 space-y-4">

          {tasks.map((task, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow p-5"
            >
              ✅ {task}
            </div>

          ))}

        </div>

      </div>

    </main>
  );
}