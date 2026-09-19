"use client";

import Link from "next/link";
import {
Trophy,
Star,
Award,
Target,
Home
} from "lucide-react";

export default function Achievements(){

const score=
typeof window!=="undefined"
?Number(localStorage.getItem("quizScore")||0)
:0;

const total=
typeof window!=="undefined"
?Number(localStorage.getItem("quizTotal")||0)
:0;

const percentage=
total>0
?Math.round(score/total*100)
:0;

let badge="Beginner";

let color="bg-gray-300";

let xp=0;

let level=1;

if(percentage>=90){

badge="Gold";

color="bg-yellow-400";

xp=500;

level=10;

}

else if(percentage>=75){

badge="Silver";

color="bg-slate-300";

xp=350;

level=7;

}

else if(percentage>=60){

badge="Bronze";

color="bg-orange-400";

xp=200;

level=5;

}

else{

badge="Participant";

color="bg-blue-400";

xp=100;

level=2;

}

return(

<main className="min-h-screen bg-slate-100">

<section className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-16">

<div className="max-w-6xl mx-auto px-6">

<h1 className="text-5xl font-black">

Achievements

</h1>

<p className="mt-4">

Unlock badges by practicing quizzes.

</p>

</div>

</section>

<section className="max-w-6xl mx-auto py-16 px-6">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-3xl shadow-xl p-8 text-center">

<div className={`w-24 h-24 rounded-full ${color} mx-auto flex items-center justify-center`}>

<Trophy size={50}/>

</div>

<h2 className="text-3xl font-black mt-6">

{badge}

</h2>

</div>

<div className="bg-white rounded-3xl shadow-xl p-8 text-center">

<Star size={50} className="mx-auto text-yellow-500"/>

<h2 className="text-3xl font-black mt-6">

{xp}

</h2>

<p>

XP Points

</p>

</div>

<div className="bg-white rounded-3xl shadow-xl p-8 text-center">

<Award size={50} className="mx-auto text-blue-600"/>

<h2 className="text-3xl font-black mt-6">

Level {level}

</h2>

</div>

<div className="bg-white rounded-3xl shadow-xl p-8 text-center">

<Target size={50} className="mx-auto text-red-600"/>

<h2 className="text-3xl font-black mt-6">

{percentage}%

</h2>

</div>

</div>

<Link

href="/"

className="mt-12 inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl"

>

<Home/>

Home

</Link>

</section>

</main>

)

}