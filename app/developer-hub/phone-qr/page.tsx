"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function PhoneQR(){

const[number,setNumber]=useState("");

return(

<main className="min-h-screen bg-slate-100">

<section className="max-w-4xl mx-auto py-20 px-6">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black mb-10">

Phone QR Generator

</h1>

<input

placeholder="+91XXXXXXXXXX"

value={number}

onChange={(e)=>setNumber(e.target.value)}

className="w-full border rounded-xl p-4"

/>

<div className="flex justify-center mt-10">

<QRCode

value={`tel:${number}`}

size={250}

/>

</div>

</div>

</section>

</main>

)

}
