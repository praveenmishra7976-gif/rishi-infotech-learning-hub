"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function QuizChart() {
  const data = {
    labels: [
      "Passed",
      "Failed",
      "Pending",
    ],

    datasets: [
      {
        data: [420, 80, 35],
        backgroundColor: [
          "#10B981",
          "#EF4444",
          "#F59E0B",
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-purple-700 mb-8">
        Quiz Statistics
      </h2>

      <Doughnut data={data} />

    </div>
  );
}