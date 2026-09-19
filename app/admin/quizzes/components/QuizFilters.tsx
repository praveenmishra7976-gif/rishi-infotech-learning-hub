"use client";

export default function QuizFilters() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      <div className="grid md:grid-cols-4 gap-4">

        <input
          placeholder="Search Quiz..."
          className="border rounded-xl p-3"
        />

        <select className="border rounded-xl p-3">

          <option>
            All Subjects
          </option>

          <option>
            Computer
          </option>

          <option>
            Physics
          </option>

          <option>
            Chemistry
          </option>

          <option>
            Mathematics
          </option>

        </select>

        <select className="border rounded-xl p-3">

          <option>
            All Status
          </option>

          <option>
            Published
          </option>

          <option>
            Draft
          </option>

        </select>

        <button className="bg-blue-700 text-white rounded-xl">
          Search
        </button>

      </div>

    </div>
  );
}