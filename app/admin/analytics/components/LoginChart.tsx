"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function LoginChart() {
  const data = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],

    datasets: [
      {
        label: "Logins",

        data: [18, 22, 30, 40, 55, 48, 60],

        backgroundColor: [
          "#2563EB",
          "#3B82F6",
          "#60A5FA",
          "#2563EB",
          "#3B82F6",
          "#60A5FA",
          "#2563EB",
        ],

        borderRadius: 12,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-8">
        Weekly Login Analytics
      </h2>

      <Bar
        data={data}
        options={options}
      />

    </div>
  );
}