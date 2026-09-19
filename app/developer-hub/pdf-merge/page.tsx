"use client";

export default function PDFMerge(){

return(

<main className="min-h-screen bg-slate-100">

<section className="max-w-4xl mx-auto py-20">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-4xl font-black">

PDF Merge

</h1>

<input

type="file"

multiple

accept=".pdf"

className="mt-10"

/>

<p className="mt-8 text-gray-500">

PDF Merge functionality will be connected later using pdf-lib.

</p>

</div>

</section>

</main>

)

}