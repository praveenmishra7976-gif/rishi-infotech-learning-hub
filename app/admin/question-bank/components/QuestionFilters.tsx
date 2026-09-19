"use client";

export default function QuestionFilters() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      <div className="grid md:grid-cols-5 gap-4">

        <input
          placeholder="Search Question..."
          className="border rounded-xl p-3"
        />

        <select className="border rounded-xl p-3">
          <option>All Subjects</option>
          <option>Computer</option>
          <option>Physics</option>
          <option>Chemistry</option>
          <option>Mathematics</option>
          <option>Sanskrit</option>
        </select>

        <input
          placeholder="Chapter"
          className="border rounded-xl p-3"
        />

        <select className="border rounded-xl p-3">
          <option>Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button className="bg-blue-700 text-white rounded-xl">
          Search
        </button>

      </div>

    </div>
  );
}