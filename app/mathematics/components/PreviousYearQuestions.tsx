"use client";

const questions=[

"Solve x²-5x+6=0",

"Find HCF of 24 and 36",

"Find area of circle radius 7cm",

"State Pythagoras Theorem",

"Find derivative of x³"

];

export default function PreviousYearQuestions(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-purple-700 mb-8">

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