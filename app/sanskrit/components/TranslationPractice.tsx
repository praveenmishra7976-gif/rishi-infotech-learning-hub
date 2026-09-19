"use client";

import { useState } from "react";

export default function TranslationPractice(){

const [answer,setAnswer]=useState("");

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-orange-600 mb-6">

Translation Practice

</h2>

<p className="mb-4 font-semibold">

Translate:

<strong> रामः विद्यालयं गच्छति। </strong>

</p>

<textarea

rows={5}

className="border rounded-xl p-4 w-full"

placeholder="Write your translation..."

value={answer}

onChange={(e)=>setAnswer(e.target.value)}

/>

<button

className="mt-6 bg-orange-600 text-white px-8 py-3 rounded-xl"

>

Check Answer

</button>

</div>

);

}