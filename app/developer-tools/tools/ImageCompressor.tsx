"use client";

import { useState } from "react";

export default function ImageCompressor(){

const [preview,setPreview]=useState<string | null>(null);

function handleImage(e:React.ChangeEvent<HTMLInputElement>){

const file=e.target.files?.[0];

if(!file) return;

setPreview(URL.createObjectURL(file));

}

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h2 className="text-3xl font-bold text-blue-700">

Image Compressor

</h2>

<input

type="file"

accept="image/*"

onChange={handleImage}

className="mt-6"

/>

{preview &&(

<div className="mt-8">

<img

src={preview}

alt="Preview"

className="rounded-xl max-h-96 mx-auto"

/>

<p className="text-center text-gray-500 mt-4">

Preview Loaded

(Image compression functionality can be added later.)

</p>

</div>

)}

</div>

);

}