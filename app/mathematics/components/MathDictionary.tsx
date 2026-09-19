"use client";

const words=[

["Algebra","Study of variables."],

["Factor","A number that divides another exactly."],

["Prime Number","Number divisible only by 1 and itself."],

["Equation","Mathematical statement with '=' sign."],

["Polygon","Closed figure with many sides."]

];

export default function MathDictionary(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-purple-700 mb-8">

Math Dictionary

</h2>

<div className="space-y-4">

{words.map(([word,meaning])=>(

<div
key={word}
className="border rounded-xl p-5"
>

<h3 className="font-bold">

{word}

</h3>

<p className="text-gray-600 mt-2">

{meaning}

</p>

</div>

))}

</div>

</div>

);

}