"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function UserGrowthChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "Users",

        data: [
          5,
          10,
          18,
          20,
          25,
          30,
          42,
          50,
          62,
          70,
          81,
          95,
        ],

        borderColor: "#2563EB",

        backgroundColor: "#3B82F6",

        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-8">
        User Growth
      </h2>

      <Line data={data} />

    </div>
  );
}