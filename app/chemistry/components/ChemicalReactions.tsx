"use client";

const reactions = [

{
type:"Combination",
eq:"2H₂ + O₂ → 2H₂O"
},

{
type:"Decomposition",
eq:"CaCO₃ → CaO + CO₂"
},

{
type:"Displacement",
eq:"Zn + CuSO₄ → ZnSO₄ + Cu"
},

{
type:"Neutralization",
eq:"HCl + NaOH → NaCl + H₂O"
}

];

export default function ChemicalReactions(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-3xl font-bold text-green-700 mb-8">

Important Chemical Reactions

</h2>

<div className="space-y-6">

{reactions.map((r,index)=>(

<div
key={index}
className="border rounded-2xl p-5"
>

<h3 className="font-bold text-green-700">

{r.type}

</h3>

<p className="mt-3 text-xl">

{r.eq}

</p>

</div>

))}

</div>

</div>

);

}