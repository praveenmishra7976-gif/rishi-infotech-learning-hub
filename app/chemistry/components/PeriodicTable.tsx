"use client";

const elements = [
  "H","He",
  "Li","Be","B","C","N","O","F","Ne",
  "Na","Mg","Al","Si","P","S","Cl","Ar",
  "K","Ca"
];

export default function PeriodicTable() {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-green-700 mb-8">
        Mini Periodic Table
      </h2>

      <div className="grid grid-cols-5 md:grid-cols-10 gap-3">

        {elements.map((e)=>(
          <div
            key={e}
            className="bg-green-100 rounded-xl p-4 text-center font-bold hover:bg-green-300 transition"
          >
            {e}
          </div>
        ))}

      </div>

    </div>

  );

}