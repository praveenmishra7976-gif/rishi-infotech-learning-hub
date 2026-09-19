"use client";

export default function ProgressDashboard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-purple-700 mb-8">
        Progress Dashboard
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-purple-100 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold text-purple-700">14</h3>
          <p>Total Chapters</p>
        </div>

        <div className="bg-green-100 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold text-green-700">0</h3>
          <p>Completed</p>
        </div>

        <div className="bg-blue-100 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-700">0%</h3>
          <p>Progress</p>
        </div>

        <div className="bg-yellow-100 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-bold text-yellow-700">1</h3>
          <p>Current Level</p>
        </div>

      </div>

    </div>
  );
}