import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
}

export default function AdminCard({
  title,
  value,
  icon,
  color,
}: Props) {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <div
        className={`w-16 h-16 rounded-2xl ${color} text-white flex items-center justify-center`}
      >
        {icon}
      </div>

      <h3 className="mt-6 text-gray-500">
        {title}
      </h3>

      <h2 className="text-4xl font-black mt-2">
        {value}
      </h2>

    </div>

  );
}