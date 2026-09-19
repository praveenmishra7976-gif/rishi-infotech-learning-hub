"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative w-full max-w-md">

      <Search
        className="absolute left-3 top-3 text-gray-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Search students..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-600"
      />

    </div>
  );
}