"use client";

import { useState } from "react";

export default function TimestampConverter() {

  const [timestamp, setTimestamp] = useState("");

  function current() {
    setTimestamp(Date.now().toString());
  }

  function convert() {
    alert(new Date(Number(timestamp)).toString());
  }

  return (

<main className="min-h-screen bg-slate-100">

<section className="max-w-3xl mx-auto py-20 px-6">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black mb-8">

Timestamp Converter

</h1>

<input

value={timestamp}

onChange={(e)=>setTimestamp(e.target.value)}

placeholder="Enter timestamp"

className="w-full border rounded-xl p-4"

/>

<div className="grid grid-cols-2 gap-4 mt-8">

<button

onClick={current}

className="bg-blue-600 text-white py-4 rounded-xl"

>

Current Timestamp

</button>

<button

onClick={convert}

className="bg-green-600 text-white py-4 rounded-xl"

>

Convert

</button>

</div>

</div>

</section>

</main>

)

}