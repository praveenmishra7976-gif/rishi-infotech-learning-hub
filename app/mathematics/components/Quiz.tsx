"use client";

const questions = [

{
question:"Value of √16 ?",
options:["2","3","4","5"],
answer:"4"
},

{
question:"10² = ?",
options:["20","100","10","1000"],
answer:"100"
}

];

export default function Quiz(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-purple-700 mb-8">

Quiz

</h2>

{questions.map((q,index)=>(

<div
key={index}
className="mb-8"
>

<h3 className="font-bold mb-4">

{index+1}. {q.question}

</h3>

<div className="grid md:grid-cols-2 gap-4">

{q.options.map((option)=>(

<button

key={option}

className="border rounded-xl p-3 hover:bg-purple-700 hover:text-white transition"

>

{option}

</button>

))}

</div>

</div>

))}

</div>

);

}