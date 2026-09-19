"use client";

export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-5xl">📚</h2>
        <h3 className="text-3xl font-bold mt-4">0</h3>
        <p className="text-gray-500 mt-2">
          Chapters Completed
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-5xl">⭐</h2>
        <h3 className="text-3xl font-bold mt-4">0</h3>
        <p className="text-gray-500 mt-2">
          Bookmarks
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-5xl">🏆</h2>
        <h3 className="text-3xl font-bold mt-4">0</h3>
        <p className="text-gray-500 mt-2">
          Achievements
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-5xl">🎓</h2>
        <h3 className="text-3xl font-bold mt-4">0</h3>
        <p className="text-gray-500 mt-2">
          Certificates
        </p>
      </div>

    </div>
  );
}