"use client";

const students=[

["Rish",980],

["Rahul",900],

["Aman",860],

["Neha",820]

];

export default function Leaderboard(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-purple-700 mb-8">

Leaderboard

</h2>

<div className="space-y-4">

{students.map(([name,score],index)=>(

<div

key={index}

className="flex justify-between border rounded-xl p-4"

>

<span>

#{index+1} {name}

</span>

<span>

{score} XP

</span>

</div>

))}

</div>

</div>

);

}