"use client";

import { useState } from "react";

export default function Pronunciation(){

const [word,setWord]=useState("");

function speak(){

if(!word) return;

const speech=new SpeechSynthesisUtterance(word);

speech.lang="en-US";

window.speechSynthesis.speak(speech);

}

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-2xl font-bold text-blue-700">

Pronunciation

</h2>

<input

type="text"

placeholder="Enter word"

value={word}

onChange={(e)=>setWord(e.target.value)}

className="w-full border rounded-xl p-4 mt-6"

/>

<button

onClick={speak}

className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"

>

🔊 Speak

</button>

</div>

);

}