"use client";

import { useState } from "react";

export default function SpellChecker(){

const [text,setText]=useState("");

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h1 className="text-3xl font-bold text-blue-700">

Spell Checker

</h1>

<textarea

rows={8}

value={text}

onChange={(e)=>setText(e.target.value)}

className="w-full border rounded-xl p-4 mt-8"

/>

<button

className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"

>

Check Spelling

</button>

<div className="mt-8 bg-gray-100 rounded-xl p-6">

Corrected spelling will appear here.

</div>

</div>

);

}