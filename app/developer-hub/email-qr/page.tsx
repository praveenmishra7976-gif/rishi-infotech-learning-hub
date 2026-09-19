"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function EmailQR(){

const[email,setEmail]=useState("");

const[subject,setSubject]=useState("");

const[text,setText]=useState("");

const qr=`mailto:${email}?subject=${subject}&body=${text}`;

return(

<main className="min-h-screen bg-slate-100">

<section className="max-w-5xl mx-auto py-20 px-6">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black mb-10">

Email QR

</h1>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border rounded-xl p-4 mb-4"
/>

<input
placeholder="Subject"
value={subject}
onChange={(e)=>setSubject(e.target.value)}
className="w-full border rounded-xl p-4 mb-4"
/>

<textarea
rows={5}
placeholder="Message"
value={text}
onChange={(e)=>setText(e.target.value)}
className="w-full border rounded-xl p-4"
/>

<div className="flex justify-center mt-10">

<QRCode
value={qr}
size={250}
/>

</div>

</div>

</section>

</main>

)

}