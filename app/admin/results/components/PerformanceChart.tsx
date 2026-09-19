"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data?: {
    name: string;
    score: number;
  }[];
}

export default function PerformanceChart({
  data = [],
}: Props) {

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6">

        Student Performance

      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer>

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <Tooltip />

            <Bar
              dataKey="score"
              fill="#2563EB"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}