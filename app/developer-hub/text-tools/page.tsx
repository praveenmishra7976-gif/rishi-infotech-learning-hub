"use client";

import { useState } from "react";

export default function TextCasePage(){

const [text,setText]=useState("");

return(

<main className="min-h-screen bg-slate-100">

<section className="max-w-5xl mx-auto py-20 px-6">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black mb-8">

Text Case Converter

</h1>

<textarea

rows={10}

value={text}

onChange={(e)=>setText(e.target.value)}

className="w-full border rounded-2xl p-5"

/>

<div className="grid md:grid-cols-4 gap-4 mt-8">

<button
onClick={()=>setText(text.toUpperCase())}
className="bg-blue-600 text-white py-3 rounded-xl"
>
UPPERCASE
</button>

<button
onClick={()=>setText(text.toLowerCase())}
className="bg-green-600 text-white py-3 rounded-xl"
>
lowercase
</button>

<button
onClick={()=>setText(text.replace(/\b\w/g,c=>c.toUpperCase()))}
className="bg-purple-600 text-white py-3 rounded-xl"
>
Title Case
</button>

<button
onClick={()=>setText("")}
className="bg-red-600 text-white py-3 rounded-xl"
>
Clear
</button>

</div>

</div>

</section>

</main>

)

}