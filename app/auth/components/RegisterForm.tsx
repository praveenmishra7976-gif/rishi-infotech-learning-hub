"use client";

import { useState } from "react";
import { createClient } from "@/lib/auth/client";

export default function RegisterForm(){

const supabase=createClient();

const [name,setName]=useState("");

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

async function register(

e:React.FormEvent

){

e.preventDefault();

const { error } = await supabase.auth.signUp({

email,

password,

options:{

data:{

full_name:name,

role:"student",

},

},

});

if(error){

alert(error.message);

return;

}

alert("Registration Successful");

}

return(

<form

onSubmit={register}

className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg space-y-6"

>

<h1 className="text-3xl font-bold">

Register

</h1>

<input

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="w-full border rounded-xl p-4"

/>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border rounded-xl p-4"

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full border rounded-xl p-4"

/>

<button

className="w-full bg-green-600 text-white py-4 rounded-xl"

>

Register

</button>

</form>

);

}