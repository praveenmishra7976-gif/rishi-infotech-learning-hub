"use client";

import { useState } from "react";

export default function AgeCalculator(){

const [dob,setDob]=useState("");

const [age,setAge]=useState("");

function calculate(){

const birth=new Date(dob);

const today=new Date();

let years=today.getFullYear()-birth.getFullYear();

const m=today.getMonth()-birth.getMonth();

if(m<0||(m===0&&today.getDate()<birth.getDate())){

years--;

}

setAge(`${years} Years`);

}

return(

<main className="min-h-screen bg-slate-100">

<section className="max-w-xl mx-auto py-20">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black mb-8">

Age Calculator

</h1>

<input

type="date"

value={dob}

onChange={(e)=>setDob(e.target.value)}

className="w-full border rounded-xl p-4"

/>

<button

onClick={calculate}

className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl"

>

Calculate Age

</button>

<div className="mt-8 text-3xl font-black">

{age}

</div>

</div>

</section>

</main>

)

}