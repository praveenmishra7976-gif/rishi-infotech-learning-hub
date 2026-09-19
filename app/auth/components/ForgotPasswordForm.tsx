"use client";

import { useState } from "react";

import { createClient } from "@/lib/auth/client";

export default function ForgotPasswordForm(){

const supabase=createClient();

const [email,setEmail]=useState("");

async function send(

e:React.FormEvent

){

e.preventDefault();

await supabase.auth.resetPasswordForEmail(email);

alert("Reset Email Sent");

}

return(

<form

onSubmit={send}

className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md space-y-6"

>

<h1 className="text-3xl font-bold">

Forgot Password

</h1>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border rounded-xl p-4"

/>

<button

className="w-full bg-blue-700 text-white py-4 rounded-xl"

>

Reset Password

</button>

</form>

);

}