"use client";

export default function Achievement() {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-orange-600 mb-8">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-yellow-100 rounded-2xl p-6 text-center">

          <div className="text-5xl">
            🏆
          </div>

          <h3 className="font-bold mt-4">
            Sanskrit Beginner
          </h3>

        </div>

        <div className="bg-green-100 rounded-2xl p-6 text-center">

          <div className="text-5xl">
            ⭐
          </div>

          <h3 className="font-bold mt-4">
            Grammar Master
          </h3>

        </div>

        <div className="bg-blue-100 rounded-2xl p-6 text-center">

          <div className="text-5xl">
            🎯
          </div>

          <h3 className="font-bold mt-4">
            Quiz Champion
          </h3>

        </div>

      </div>

    </div>

  );

}