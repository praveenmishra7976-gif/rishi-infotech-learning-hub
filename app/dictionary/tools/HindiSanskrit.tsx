"use client";

import { useState } from "react";

export default function HindiSanskrit(){

const [word,setWord]=useState("");

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h1 className="text-3xl font-bold text-blue-700">

Hindi → Sanskrit

</h1>

<input

value={word}

onChange={(e)=>setWord(e.target.value)}

placeholder="हिंदी शब्द"

className="w-full border rounded-xl p-4 mt-8"

/>

<div className="mt-8 bg-gray-100 rounded-xl p-6">

Hindi to Sanskrit Translation

</div>

</div>

);

}