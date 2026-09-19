"use client";

import { useState } from "react";
import { Copy, RefreshCw } from "lucide-react";

export default function UUIDGeneratorPage() {

  const [uuid, setUuid] = useState("");

  function generate() {
    setUuid(crypto.randomUUID());
  }

  function copy() {
    navigator.clipboard.writeText(uuid);
    alert("Copied!");
  }

  return (

<main className="min-h-screen bg-slate-100">

<section className="max-w-3xl mx-auto py-20 px-6">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black mb-8">

UUID Generator

</h1>

<input

readOnly

value={uuid}

className="w-full border rounded-xl p-4"

/>

<div className="grid grid-cols-2 gap-4 mt-8">

<button

onClick={generate}

className="bg-blue-600 text-white py-4 rounded-xl flex justify-center gap-2"

>

<RefreshCw size={20}/>

Generate

</button>

<button

onClick={copy}

className="bg-green-600 text-white py-4 rounded-xl flex justify-center gap-2"

>

<Copy size={20}/>

Copy

</button>

</div>

</div>

</section>

</main>

)

}