"use client";

import { useState } from "react";
import { Braces } from "lucide-react";

export default function JavaScriptFormatter(){

const [code,setCode]=useState("");

function format(){

let result=code
.replace(/{/g,"{\n")
.replace(/}/g,"\n}\n")
.replace(/;/g,";\n");

setCode(result);

}

return(

<main className="min-h-screen bg-slate-100">

<section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16">

<div className="max-w-6xl mx-auto px-6">

<div className="flex gap-4 items-center">

<Braces size={50}/>

<h1 className="text-5xl font-black">

JavaScript Formatter

</h1>

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 py-16">

<div className="bg-white rounded-3xl shadow-xl p-10">

<textarea

rows={18}

value={code}

onChange={(e)=>setCode(e.target.value)}

className="w-full border rounded-2xl p-5 font-mono"

/>

<button

onClick={format}

className="w-full mt-8 bg-yellow-500 py-4 rounded-2xl text-white font-bold"

>

Format JavaScript

</button>

</div>

</section>

</main>

)

}