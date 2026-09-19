"use client";

import { useState } from "react";

export default function ImageCompressor() {

const [image,setImage]=useState<File|null>(null);

return(

<main className="min-h-screen bg-slate-100">

<section className="max-w-4xl mx-auto py-20 px-6">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black mb-10">

Image Compressor

</h1>

<input

type="file"

accept="image/*"

onChange={(e)=>{

if(e.target.files){

setImage(e.target.files[0])

}

}}

/>

{image && (

<div className="mt-8">

<p>

Selected:

<strong>

{image.name}

</strong>

</p>

<p>

Size:

{(image.size/1024).toFixed(2)} KB

</p>

</div>

)}

<p className="mt-10 text-gray-500">

Compression feature will be connected later using browser canvas.

</p>

</div>

</section>

</main>

)

}