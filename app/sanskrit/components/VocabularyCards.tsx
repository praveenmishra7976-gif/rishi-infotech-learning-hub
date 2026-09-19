"use client";

const words=[

["रामः","Ram"],

["फलम्","Fruit"],

["गृहः","House"],

["पुस्तकम्","Book"],

["विद्यालयः","School"]

];

export default function VocabularyCards(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-orange-600 mb-8">

Vocabulary

</h2>

<div className="grid md:grid-cols-2 gap-6">

{words.map(([word,meaning])=>(

<div

key={word}

className="border rounded-xl p-5"

>

<h3 className="text-xl font-bold">

{word}

</h3>

<p className="mt-3 text-gray-600">

{meaning}

</p>

</div>

))}

</div>

</div>

);

}