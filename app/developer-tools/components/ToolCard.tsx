import Link from "next/link";

interface Props {

  name:string;

  description:string;

  slug:string;

  category:string;

}

export default function ToolCard({

name,

description,

slug,

category,

}:Props){

return(

<Link

href={`/developer-tools/${slug}`}

className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"

>

<h2 className="text-2xl font-bold text-blue-700">

{name}

</h2>

<p className="mt-4 text-gray-600">

{description}

</p>

<span className="inline-block mt-6 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">

{category}

</span>

</Link>

);

}