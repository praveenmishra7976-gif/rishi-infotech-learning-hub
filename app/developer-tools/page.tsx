import Link from "next/link";
import { developerTools } from "./data/tools";

export default function DeveloperToolsHome(){

return(

<main className="max-w-7xl mx-auto px-6 py-10">

<div className="bg-gradient-to-r from-indigo-600 via-blue-700 to-cyan-600 rounded-3xl p-10 text-white shadow-xl">

<h1 className="text-5xl font-bold">

Developer Tools

</h1>

<p className="mt-4 text-xl text-blue-100">

All essential developer utilities in one place.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

{developerTools.map((tool)=>(

<Link

key={tool.id}

href={`/developer-tools/${tool.slug}`}

className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition"

>

<h2 className="text-2xl font-bold text-blue-700">

{tool.name}

</h2>

<p className="mt-4 text-gray-600">

{tool.description}

</p>

<div className="mt-6 inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">

{tool.category}

</div>

</Link>

))}

</div>

</main>

);

}