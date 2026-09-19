"use client";

import { useState } from "react";

export default function MarkdownPreview(){

const [text,setText]=useState(`# Hello World

## Markdown Preview

- Item 1
- Item 2

**Bold Text**

*Italic Text*
`);

return(

<div className="bg-white rounded-3xl shadow-lg p-8">

<h2 className="text-3xl font-bold text-blue-700">

Markdown Preview

</h2>

<textarea

rows={12}

className="w-full border rounded-xl p-4 mt-6"

value={text}

onChange={(e)=>setText(e.target.value)}

/>

<div className="mt-8 border rounded-xl p-6 bg-gray-50">

<pre className="whitespace-pre-wrap">

{text}

</pre>

</div>

</div>

);

}