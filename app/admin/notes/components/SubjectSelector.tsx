"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SubjectSelector({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-xl p-4 w-full"
    >
      <option>Computer</option>
      <option>Physics</option>
      <option>Chemistry</option>
      <option>Mathematics</option>
      <option>Sanskrit</option>
      <option>General Knowledge</option>
    </select>
  );
}