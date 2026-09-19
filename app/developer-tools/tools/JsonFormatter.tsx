"use client";

import { useState } from "react";

export default function JsonFormatter(){

const [input,setInput]=useState("");

const [output,setOutput]=useState("");

function formatJson(){

try{

setOutput(JSON.stringify(JSON.parse(input),null,2));

}

catch{

setOutput("Invalid JSON");

}

}

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h2 className="text-3xl font-bold text-blue-700">

JSON Formatter

</h2>

<textarea

rows={8}

className="w-full border rounded-xl p-4 mt-6"

value={input}

onChange={(e)=>setInput(e.target.value)}

placeholder='{"name":"Rishi"}'

/>

<button

onClick={formatJson}

className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"

>

Format JSON

</button>

<textarea

rows={8}

readOnly

value={output}

className="w-full border rounded-xl p-4 mt-6"

/>

</div>

);

}