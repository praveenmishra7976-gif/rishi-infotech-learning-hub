"use client";

const formulas = [

{
title:"Quadratic Formula",
formula:"x=(-b±√(b²−4ac))/2a"
},

{
title:"Pythagoras",
formula:"a²+b²=c²"
},

{
title:"Area of Circle",
formula:"πr²"
},

{
title:"Circumference",
formula:"2πr"
},

{
title:"Simple Interest",
formula:"(P×R×T)/100"
}

];

export default function FormulaCards(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-purple-700 mb-8">

Important Formulae

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{formulas.map((item,index)=>(

<div
key={index}
className="border rounded-2xl p-6 hover:border-purple-600 transition"
>

<h3 className="font-bold">

{item.title}

</h3>

<p className="mt-4 text-purple-700 text-xl">

{item.formula}

</p>

</div>

))}

</div>

</div>

);

}