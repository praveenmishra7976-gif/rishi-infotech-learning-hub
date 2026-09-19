"use client";

import { useState } from "react";

export default function ScientificCalculator() {

const [expression,setExpression]=useState("");

const [result,setResult]=useState("");

function calculate(){

try{

const value=Function(`"use strict";return (${expression})`)();

setResult(String(value));

}catch{

setResult("Error");

}

}

return(

<main className="min-h-screen bg-slate-100">

<section className="max-w-xl mx-auto py-20">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black mb-8">

Scientific Calculator

</h1>

<input

value={expression}

onChange={(e)=>setExpression(e.target.value)}

className="w-full border rounded-xl p-4"

placeholder="2+5*8"

/>

<button

onClick={calculate}

className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl"

>

Calculate

</button>

<div className="mt-8 text-2xl font-black">

{result}

</div>

</div>

</section>

</main>

)

}