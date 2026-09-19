"use client";

import { useState } from "react";

interface QuizCardProps {
  question: string;
  options: string[];
  selected: number | null;
  onSelect: (index: number) => void;
}

export default function QuizCard({
  question,
  options,
  selected,
  onSelect,
}: QuizCardProps) {
  const [testClick, setTestClick] = useState("");

  return (
    <div className="w-full bg-white rounded-3xl border-2 border-gray-200 shadow-lg p-6 md:p-8">

      <div className="mb-8">
        <div className="inline-block rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-black">
          QUESTION
        </div>

        <h2 className="mt-5 text-2xl md:text-3xl font-black text-gray-900">
          {question}
        </h2>
      </div>

      <div className="space-y-4">

        {options.map((option, index) => (
          <button
            key={`${index}-${option}`}
            type="button"
            onClick={() => {
              console.log("OPTION CLICKED:", index);
              setTestClick(`Clicked option ${String.fromCharCode(65 + index)}`);
              onSelect(index);
            }}
            style={{
              pointerEvents: "auto",
              position: "relative",
              zIndex: 50,
            }}
            className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left cursor-pointer ${
              selected === index
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            <span className="w-12 h-12 shrink-0 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center font-black">
              {String.fromCharCode(65 + index)}
            </span>

            <span className="flex-1 font-bold text-lg">
              {option}
            </span>

            {selected === index && (
              <span className="font-black text-2xl">
                ✓
              </span>
            )}
          </button>
        ))}

      </div>

      <div className="mt-8 p-5 rounded-2xl bg-yellow-50 border-2 border-yellow-300">
        <p className="font-black text-yellow-800">
          Click Test
        </p>

        <p className="mt-2 text-yellow-900">
          {testClick || "No option clicked yet"}
        </p>

        <p className="mt-2 text-sm font-bold text-gray-700">
          React selected value:{" "}
          {selected === null ? "None" : String.fromCharCode(65 + selected)}
        </p>
      </div>

    </div>
  );
}
