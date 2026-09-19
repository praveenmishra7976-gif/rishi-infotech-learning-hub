"use client";

const grammar = [

{
title:"संधि",
desc:"Joining of letters."
},

{
title:"समास",
desc:"Compound words."
},

{
title:"कारक",
desc:"Cases in Sanskrit."
},

{
title:"लकार",
desc:"Verb forms."
},

{
title:"विभक्ति",
desc:"Case endings."
}

];

export default function GrammarCards(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-orange-600 mb-8">

Grammar Cards

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{grammar.map((item,index)=>(

<div

key={index}

className="border rounded-2xl p-6 hover:border-orange-500"

>

<h3 className="font-bold">

{item.title}

</h3>

<p className="mt-3 text-gray-600">

{item.desc}

</p>

</div>

))}

</div>

</div>

);

}