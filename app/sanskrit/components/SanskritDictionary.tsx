"use client";

const words = [

["रामः","Ram"],

["फलम्","Fruit"],

["गृहः","House"],

["पुस्तकम्","Book"],

["विद्यालयः","School"],

["जलम्","Water"],

["गजः","Elephant"]

];

export default function SanskritDictionary(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-orange-600 mb-8">

Sanskrit Dictionary

</h2>

<div className="space-y-4">

{words.map(([word,meaning])=>(

<div
key={word}
className="border rounded-xl p-5"
>

<h3 className="text-xl font-bold">

{word}

</h3>

<p className="mt-2 text-gray-600">

{meaning}

</p>

</div>

))}

</div>

</div>

);

}