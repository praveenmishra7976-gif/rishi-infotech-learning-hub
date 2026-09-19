import { Calculator } from "lucide-react";

const formulas = [

"F = ma",

"W = Fs",

"P = W/t",

"KE = ½mv²",

"PE = mgh",

"v = u + at",

"s = ut + ½at²",

"v² = u² + 2as",

"F = Gm₁m₂/r²",

"V = IR"

];

export default function FormulaCards(){

return(

<div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

<div className="flex gap-3 items-center mb-8">

<Calculator className="text-green-700"/>

<h2 className="text-3xl font-bold">

Formula Cards

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

{formulas.map((formula,index)=>(

<div
key={index}
className="bg-green-50 rounded-xl p-6 text-center text-xl font-bold hover:shadow-lg"
>

{formula}

</div>

))}

</div>

</div>

);

}