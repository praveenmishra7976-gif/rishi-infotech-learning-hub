"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function CategorySelector({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-xl p-4 w-full"
    >
      <option>Notes</option>
      <option>Formula</option>
      <option>MCQ</option>
      <option>Assignment</option>
      <option>Lab Manual</option>
      <option>Cheat Sheet</option>
    </select>
  );
}