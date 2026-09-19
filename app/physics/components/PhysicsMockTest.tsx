"use client";

import { ClipboardCheck } from "lucide-react";

export default function PhysicsMockTest() {

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <ClipboardCheck
          className="text-green-700"
          size={34}
        />

        <h2 className="text-3xl font-bold">
          Physics Mock Test
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        {[1,2,3,4,5,6].map((test)=>(
          <div
            key={test}
            className="border rounded-xl p-6 text-center hover:bg-green-50"
          >

            <h3 className="font-bold">
              Mock Test {test}
            </h3>

            <p className="mt-2 text-gray-500">
              50 Questions
            </p>

            <button className="mt-4 bg-green-700 text-white px-5 py-2 rounded-lg">
              Start
            </button>

          </div>
        ))}

      </div>

    </div>

  );

}