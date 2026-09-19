"use client";

import { useState } from "react";

export default function WordCounterPage() {

  const [text,setText]=useState("");

  const words=text.trim()===""?0:text.trim().split(/\s+/).length;

  const characters=text.length;

  const lines=text===""?0:text.split("\n").length;

  return(

<main className="min-h-screen bg-slate-100">

<section className="max-w-5xl mx-auto py-20 px-6">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black mb-8">

Word Counter

</h1>

<textarea

rows={14}

value={text}

onChange={(e)=>setText(e.target.value)}

className="w-full border rounded-2xl p-5"

placeholder="Start typing..."

></textarea>

<div className="grid md:grid-cols-3 gap-6 mt-10">

<div className="bg-blue-100 rounded-2xl p-6 text-center">

<h2 className="text-3xl font-black">

{words}

</h2>

<p>Words</p>

</div>

<div className="bg-green-100 rounded-2xl p-6 text-center">

<h2 className="text-3xl font-black">

{characters}

</h2>

<p>Characters</p>

</div>

<div className="bg-purple-100 rounded-2xl p-6 text-center">

<h2 className="text-3xl font-black">

{lines}

</h2>

<p>Lines</p>

</div>

</div>

</div>

</section>

</main>

)

}