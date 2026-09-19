"use client";

import { useState } from "react";

const questions = [

{
question:"SI unit of Force?",
options:["Newton","Joule","Pascal","Volt"],
answer:"Newton"
},

{
question:"Formula of Force?",
options:["F=ma","P=W/t","KE=mgh","V=IR"],
answer:"F=ma"
},

{
question:"Unit of Energy?",
options:["Joule","Newton","Ampere","Tesla"],
answer:"Joule"
},

{
question:"Acceleration due to gravity?",
options:["9.8","8.8","10.8","11.8"],
answer:"9.8"
},

{
question:"Formula of Work?",
options:["W=Fs","P=VI","V=IR","F=mg"],
answer:"W=Fs"
}

];

export default function Quiz(){

const[selected,setSelected]=useState<string[]>([]);

const[submitted,setSubmitted]=useState(false);

const score=questions.reduce((total,q,index)=>{

return selected[index]===q.answer
?total+1
:total;

},0);

return(

<div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

<h2 className="text-3xl font-bold text-blue-700 mb-8">

Physics Quiz

</h2>

{questions.map((q,index)=>(

<div key={index} className="mb-8">

<h3 className="font-semibold mb-4">

{index+1}. {q.question}

</h3>

{q.options.map((option)=>(

<label
key={option}
className="block mb-2 cursor-pointer"
>

<input
type="radio"
name={`q${index}`}
value={option}
className="mr-3"
onChange={()=>{

const temp=[...selected];

temp[index]=option;

setSelected(temp);

}}
/>

{option}

</label>

))}

</div>

))}

{!submitted?(
<button
onClick={()=>setSubmitted(true)}
className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl"
>

Submit Quiz

</button>

):(

<div className="mt-8 bg-green-100 rounded-xl p-6">

<h2 className="text-2xl font-bold text-green-700">

Your Score

</h2>

<p className="text-xl mt-2">

{score} / {questions.length}

</p>

</div>

)}

</div>

);

}