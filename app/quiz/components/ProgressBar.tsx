"use client";

interface Props {

current:number;

total:number;

}

export default function ProgressBar({

current,

total

}:Props){

const percent=((current+1)/total)*100;

return(

<div>

<div className="flex justify-between mb-2">

<span>

Question {current+1}

</span>

<span>

{total}

</span>

</div>

<div className="w-full h-4 bg-gray-200 rounded-full">

<div

className="bg-blue-600 h-4 rounded-full transition-all"

style={{

width:`${percent}%`

}}

></div>

</div>

</div>

)

}