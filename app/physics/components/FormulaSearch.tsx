"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const formulas = [

"Force = F = ma",

"Work = W = Fs",

"Power = P = W/t",

"Potential Energy = PE = mgh",

"Kinetic Energy = KE = ½mv²",

"Momentum = p = mv",

"Gravitation = F = Gm₁m₂/r²",

"Ohm's Law = V = IR"

];

export default function FormulaSearch(){

const[text,setText]=useState("");

const result=useMemo(()=>{

return formulas.filter((item)=>

item.toLowerCase().includes(text.toLowerCase())

);

},[text]);

return(

<div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

<div className="relative mb-8">

<Search
className="absolute left-4 top-4 text-gray-500"
/>

<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Search Formula..."
className="w-full border rounded-xl pl-12 py-4"
/>

</div>

<div className="space-y-3">

{result.map((formula,index)=>(

<div
key={index}
className="border rounded-xl p-4 hover:bg-blue-50"
>

{formula}

</div>

))}

</div>

</div>

);

}