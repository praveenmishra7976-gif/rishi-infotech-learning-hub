"use client";

import { useState } from "react";

export default function AIDoubtBox(){

const [question,setQuestion]=useState("");

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-orange-600 mb-8">

AI Doubt Box

</h2>

<textarea

rows={5}

className="border rounded-xl p-4 w-full"

placeholder="Ask your Sanskrit doubt..."

value={question}

onChange={(e)=>setQuestion(e.target.value)}

/>

<button

className="mt-6 bg-orange-600 text-white px-8 py-3 rounded-xl"

>

Ask AI

</button>

</div>

);

}