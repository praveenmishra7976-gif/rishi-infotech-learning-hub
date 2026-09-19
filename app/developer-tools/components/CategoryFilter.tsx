"use client";

const categories=[

"All",

"Generator",

"Formatter",

"Converter",

"Security",

"Developer",

"Media",

"Design"

];

export default function CategoryFilter(){

return(

<div className="flex flex-wrap gap-3 mb-10">

{categories.map((category)=>(

<button

key={category}

className="px-5 py-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"

>

{category}

</button>

))}

</div>

);

}