"use client";

import { useState } from "react";

export default function ColorPicker(){

const [color,setColor]=useState("#2563eb");

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h2 className="text-3xl font-bold text-blue-700">

Color Picker

</h2>

<input

type="color"

value={color}

onChange={(e)=>setColor(e.target.value)}

className="mt-8 w-32 h-20"

/>

<div

className="mt-8 h-40 rounded-2xl"

style={{background:color}}

>

</div>

<p className="mt-6 text-xl font-bold">

{color}

</p>

</div>

);

}