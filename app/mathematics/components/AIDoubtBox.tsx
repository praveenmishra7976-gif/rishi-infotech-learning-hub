"use client";

import { useState } from "react";

export default function AIDoubtBox(){

const [question,setQuestion]=useState("");

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-purple-700 mb-8">

AI Doubt Box

</h2>

<textarea

className="border rounded-xl p-4 w-full"

rows={5}

placeholder="Ask your Mathematics doubt..."

value={question}

onChange={(e)=>setQuestion(e.target.value)}

/>

<button

className="mt-6 bg-purple-700 text-white px-8 py-3 rounded-xl"

>

Ask AI

</button>

</div>

);

}