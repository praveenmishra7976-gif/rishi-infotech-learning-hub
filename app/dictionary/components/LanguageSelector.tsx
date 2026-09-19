"use client";

import { useState } from "react";

const languages=[

"English",

"Hindi",

"Sanskrit"

];

export default function LanguageSelector(){

const [language,setLanguage]=useState("English");

return(

<div className="mb-8">

<select

value={language}

onChange={(e)=>setLanguage(e.target.value)}

className="border rounded-xl p-3"

>

{languages.map((lang)=>(

<option

key={lang}

value={lang}

>

{lang}

</option>

))}

</select>

</div>

);

}