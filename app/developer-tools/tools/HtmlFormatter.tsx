"use client";

import { useState } from "react";

export default function HtmlFormatter(){

const [html,setHtml]=useState("");

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h2 className="text-3xl font-bold text-blue-700">

HTML Formatter

</h2>

<textarea

rows={10}

className="w-full border rounded-xl p-4 mt-6"

value={html}

onChange={(e)=>setHtml(e.target.value)}

placeholder="<h1>Hello</h1>"

/>

<div className="mt-8">

<h3 className="font-bold text-xl mb-4">

Preview

</h3>

<div

className="border rounded-xl p-6"

dangerouslySetInnerHTML={{__html:html}}

>

</div>

</div>

</div>

);

}