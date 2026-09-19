"use client";

import { useState } from "react";
import { Palette, Copy, RotateCcw } from "lucide-react";

export default function CSSFormatterPage() {

  const [css,setCss]=useState("");

  function formatCSS(){

    let result=css
      .replace(/{/g,"{\n")
      .replace(/}/g,"\n}\n")
      .replace(/;/g,";\n");

    setCss(result);

  }

  return(

<main className="min-h-screen bg-slate-100">

<section className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16">

<div className="max-w-6xl mx-auto px-6">

<div className="flex gap-4 items-center">

<Palette size={50}/>

<div>

<h1 className="text-5xl font-black">

CSS Formatter

</h1>

</div>

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 py-16">

<div className="bg-white rounded-3xl shadow-xl p-10">

<textarea
rows={18}
value={css}
onChange={(e)=>setCss(e.target.value)}
className="w-full border rounded-2xl p-5 font-mono"
/>

<div className="grid md:grid-cols-3 gap-5 mt-8">

<button
onClick={formatCSS}
className="bg-blue-600 text-white py-3 rounded-xl"
>

Format

</button>

<button
onClick={()=>navigator.clipboard.writeText(css)}
className="bg-green-600 text-white py-3 rounded-xl flex justify-center gap-2"
>

<Copy size={18}/>

Copy

</button>

<button
onClick={()=>setCss("")}
className="bg-red-600 text-white py-3 rounded-xl flex justify-center gap-2"
>

<RotateCcw size={18}/>

Clear

</button>

</div>

</div>

</section>

</main>

  )

}