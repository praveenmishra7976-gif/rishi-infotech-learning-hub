"use client";

import { useState } from "react";

export default function PasswordGenerator(){

const [password,setPassword]=useState("");

function generate(){

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let result="";

for(let i=0;i<16;i++){

result+=chars.charAt(Math.floor(Math.random()*chars.length));

}

setPassword(result);

}

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h2 className="text-3xl font-bold text-blue-700">

Password Generator

</h2>

<button

onClick={generate}

className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"

>

Generate Password

</button>

<input

readOnly

value={password}

className="w-full border rounded-xl p-4 mt-6"

/>

</div>

);

}