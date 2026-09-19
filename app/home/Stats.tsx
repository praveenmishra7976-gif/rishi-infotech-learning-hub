import Link from "next/link";

export default function Stats(){

return(

<section className="py-20 bg-slate-100">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-5xl font-black text-center">

Achievements

</h2>

<p className="text-center mt-4">

Earn Badges & XP

</p>

<div className="flex justify-center mt-10">

<Link

href="/achievements"

className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-2xl"

>

View Achievements

</Link>

</div>

</div>

</section>

)

}