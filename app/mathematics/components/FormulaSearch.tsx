"use client";

import { useState } from "react";

const formulas = [

"Quadratic Formula",

"Pythagoras Theorem",

"Area of Circle",

"Volume of Cube",

"Simple Interest",

"Compound Interest",

"Trigonometric Identities"

];

export default function FormulaSearch(){

const [query,setQuery]=useState("");

const filtered=formulas.filter((item)=>
item.toLowerCase().includes(query.toLowerCase())
);

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-purple-700 mb-6">

Formula Search

</h2>

<input

className="border rounded-xl p-4 w-full"

placeholder="Search Formula..."

value={query}

onChange={(e)=>setQuery(e.target.value)}

/>

<div className="mt-6 space-y-3">

{filtered.map((item,index)=>(

<div
key={index}
className="border rounded-xl p-4"
>

{item}

</div>

))}

</div>

</div>

);

}