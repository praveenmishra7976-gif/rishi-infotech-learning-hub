"use client";

import { useState } from "react";

export default function MarkdownPreviewPage() {

  const [text, setText] = useState(`# Hello Rishi

## Markdown Preview

**Bold Text**

*Italic Text*

- HTML
- CSS
- JavaScript
`);

  return (

<main className="min-h-screen bg-slate-100">

<section className="max-w-7xl mx-auto py-20 px-6">

<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl shadow-xl p-8">

<h2 className="text-3xl font-black mb-6">

Markdown

</h2>

<textarea

rows={22}

value={text}

onChange={(e)=>setText(e.target.value)}

className="w-full border rounded-2xl p-5 font-mono"

/>

</div>

<div className="bg-white rounded-3xl shadow-xl p-8">

<h2 className="text-3xl font-black mb-6">

Preview

</h2>

<pre className="whitespace-pre-wrap">

{text}

</pre>

</div>

</div>

</section>

</main>

)

}