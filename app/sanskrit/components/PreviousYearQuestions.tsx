"use client";

const questions=[

"Explain Sandhi.",

"Write Ram Shabd Roop.",

"Explain Karak.",

"Write 10 Sanskrit words.",

"Translate simple Sanskrit sentence."

];

export default function PreviousYearQuestions(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-orange-600 mb-8">

Previous Year Questions

</h2>

<div className="space-y-4">

{questions.map((item,index)=>(

<div
key={index}
className="border rounded-xl p-5"
>

{index+1}. {item}

</div>

))}

</div>

</div>

);

}