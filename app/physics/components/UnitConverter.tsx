"use client";

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";

export default function UnitConverter() {

  const [meter, setMeter] = useState("");

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex gap-3 items-center mb-8">

        <ArrowRightLeft
          className="text-green-700"
          size={34}
        />

        <h2 className="text-3xl font-bold">
          Meter ⇄ Centimeter
        </h2>

      </div>

      <input
        type="number"
        placeholder="Enter Meter"
        value={meter}
        onChange={(e)=>setMeter(e.target.value)}
        className="border rounded-xl p-4 w-full"
      />

      <div className="mt-8 bg-green-50 rounded-xl p-5">

        <h3 className="text-xl font-bold">

          {(Number(meter)*100).toFixed(2)} cm

        </h3>

      </div>

    </div>

  );

}