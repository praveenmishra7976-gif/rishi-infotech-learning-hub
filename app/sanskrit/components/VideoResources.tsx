"use client";

const videos=[

"Sanskrit Introduction",

"Varnamala",

"Sandhi",

"Samas",

"Karak"

];

export default function VideoResources(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-orange-600 mb-8">

Video Resources

</h2>

<div className="space-y-4">

{videos.map((video,index)=>(

<div
key={index}
className="border rounded-xl p-5 flex justify-between items-center"
>

<span>{video}</span>

<button
className="bg-red-600 text-white px-5 py-2 rounded-xl"
>

Watch

</button>

</div>

))}

</div>

</div>

);

}