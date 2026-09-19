"use client";

const questions = [

{
question:"रामः means?",
options:["Tree","Ram","Book","River"],
answer:"Ram"
},

{
question:"फलम् means?",
options:["Fruit","School","House","Sun"],
answer:"Fruit"
}

];

export default function Quiz(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-orange-600 mb-8">

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
className="border rounded-xl p-3 hover:bg-orange-600 hover:text-white transition"
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