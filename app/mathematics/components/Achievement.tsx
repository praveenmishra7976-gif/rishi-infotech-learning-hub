"use client";

export default function Achievement(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-purple-700">

Achievements

</h2>

<div className="grid md:grid-cols-3 gap-6 mt-8">

<div className="bg-yellow-100 rounded-2xl p-6 text-center">

🏆

<h3 className="font-bold mt-4">

Math Beginner

</h3>

</div>

<div className="bg-green-100 rounded-2xl p-6 text-center">

⭐

<h3 className="font-bold mt-4">

Formula Master

</h3>

</div>

<div className="bg-blue-100 rounded-2xl p-6 text-center">

🎯

<h3 className="font-bold mt-4">

Quiz Champion

</h3>

</div>

</div>

</div>

);

}